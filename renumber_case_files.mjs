#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const historyDir = path.dirname(fileURLToPath(import.meta.url));
const corpusDir = path.join(historyDir, "fundamental_physics_discoveries");

const orderedOldFiles = [
  "01_atomistic_hypothesis.md",
  "02_hydrostatics_and_buoyancy.md",
  "03_heliocentric_planetary_system.md",
  "04_keplers_laws_of_planetary_motion.md",
  "05_galilean_kinematics.md",
  "55_fermat_principle.md",
  "08_newtonian_mechanics.md",
  "56_lagrangian_mechanics.md",
  "09_wave_theory_and_interference.md",
  "57_hamiltonian_mechanics.md",
  "11_thermodynamics_and_energy_conservation.md",
  "58_second_law_of_thermodynamics.md",
  "13_maxwell_electromagnetic_field_theory.md",
  "18_energy_quantization.md",
  "12_classical_statistical_mechanics.md",
  "20_light_quanta_and_photoelectric_effect.md",
  "19_special_relativity.md",
  "23_quantized_atomic_structure.md",
  "24_general_relativity.md",
  "46_noethers_theorem_and_symmetry.md",
  "54_de_broglie_matter_waves.md",
  "27_quantum_statistics.md",
  "47_quantum_field_theory.md",
  "26_quantum_mechanics.md",
  "25_expanding_universe.md",
  "28_relativistic_quantum_theory_and_antimatter.md",
  "48_quantum_entanglement.md",
  "49_landau_phase_transitions_and_symmetry_breaking.md",
  "30_nuclear_interactions_and_beta_decay.md",
  "32_quantum_electrodynamics.md",
  "50_yang_mills_gauge_theory.md",
  "51_bcs_theory_of_superconductivity.md",
  "34_quarks_and_strong_interaction.md",
  "35_higgs_mechanism.md",
  "37_bells_theorem.md",
  "52_wilsonian_renormalization_group.md",
  "39_quantum_chromodynamics.md",
  "38_electroweak_theory.md",
  "53_effective_field_theory.md",
  "40_standard_model.md",
  "41_cosmic_inflation.md",
];

const mapping = new Map(
  orderedOldFiles.map((oldFile, index) => [oldFile, `${String(index + 1).padStart(2, "0")}_${oldFile.replace(/^\d{2}_/, "")}`]),
);

const changed = [...mapping].filter(([oldFile, newFile]) => oldFile !== newFile);
const alreadyRenumbered = changed.every(([oldFile, newFile]) =>
  !fs.existsSync(path.join(corpusDir, oldFile)) && fs.existsSync(path.join(corpusDir, newFile)),
);

if (!alreadyRenumbered) {
  for (const [oldFile] of mapping) {
    if (!fs.existsSync(path.join(corpusDir, oldFile))) {
      throw new Error(`Missing expected pre-renumber case: ${oldFile}`);
    }
  }

  const temporary = [];
  for (const [oldFile, newFile] of changed) {
    const oldPath = path.join(corpusDir, oldFile);
    const temporaryPath = path.join(corpusDir, `.__case_renumber__${newFile}`);
    fs.renameSync(oldPath, temporaryPath);
    temporary.push([temporaryPath, path.join(corpusDir, newFile)]);
  }
  for (const [temporaryPath, newPath] of temporary) fs.renameSync(temporaryPath, newPath);
}

function sourceFiles(directory) {
  const output = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "case_pages"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...sourceFiles(fullPath));
    else if (/\.(?:md|mjs)$/.test(entry.name) && fullPath !== fileURLToPath(import.meta.url)) output.push(fullPath);
  }
  return output;
}

let updatedReferences = 0;
for (const fullPath of sourceFiles(historyDir)) {
  const source = fs.readFileSync(fullPath, "utf8");
  let next = source;
  for (const [oldFile, newFile] of changed) next = next.replaceAll(oldFile, newFile);
  if (next !== source) {
    fs.writeFileSync(fullPath, next);
    updatedReferences += 1;
  }
}

console.log(`${alreadyRenumbered ? "Verified" : "Renumbered"} ${mapping.size} cases; updated references in ${updatedReferences} source files.`);
