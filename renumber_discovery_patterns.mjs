#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const historyDir = path.dirname(fileURLToPath(import.meta.url));
const corpusDir = path.join(historyDir, "fundamental_physics_discoveries");
const write = process.argv.includes("--write");

// The former identifiers followed the order in which the vocabulary happened to
// be listed. The new identifiers follow the pattern's typical first role in a
// discovery-process reconstruction.
const oldToNew = new Map([
  ["P-01", "P-04"], // unification / extrapolation
  ["P-02", "P-03"], // generative mechanism
  ["P-03", "P-01"], // diagnosis and reframing
  ["P-04", "P-02"], // new representation / ontology / mechanism
  ["P-05", "P-05"], // predecessor recovery
  ["P-06", "P-06"], // quantitative discrimination
]);

const schema = [
  {
    id: "P-01",
    definition: "Reframe the inherited question after diagnosing interpolation failure",
    role: "Interpolation diagnosis → transformative reframing",
    evidence: "[Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move)",
  },
  {
    id: "P-02",
    definition: "Admit a new representation, ontology, or mechanism form",
    role: "Transformative move",
    evidence: "[Transformative move](#transformative-move)",
  },
  {
    id: "P-03",
    definition: "Upgrade empirical regularities into a generative mechanism",
    role: "Transformative construction → generative deduction",
    evidence: "[Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization)",
  },
  {
    id: "P-04",
    definition: "Unify previously separated domains",
    role: "Extrapolative unification",
    evidence: "[Extrapolative generalization](#extrapolative-generalization)",
  },
  {
    id: "P-05",
    definition: "Retain valid structures of predecessor theories",
    role: "Retention and limiting recovery",
    evidence: "[Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status)",
  },
  {
    id: "P-06",
    definition: "Prioritize quantitative testability",
    role: "Prediction → discrimination → validation",
    evidence: "[Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains)",
  },
];

const files = fs
  .readdirSync(corpusDir)
  .filter((name) => /^\d{2}_.+\.md$/.test(name))
  .filter((name) => !name.endsWith("_trial.md"))
  .sort();

function splitRow(line) {
  return line.trim().replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map((cell) => cell.trim());
}

function escapeCell(value) {
  return String(value).replace(/(?<!\\)\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function remapIds(source) {
  return source.replace(/P-0[1-6]/g, (id) => `PX-${oldToNew.get(id).slice(2)}`)
    .replace(/PX-0([1-6])/g, "P-0$1");
}

function normalizePatternBulletOrder(source) {
  const lines = source.split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index] !== "**Patterns demonstrated:**") continue;
    let end = index + 1;
    while (end < lines.length && !lines[end].startsWith("### ") && !lines[end].startsWith("## ")) end += 1;
    const positions = [];
    for (let row = index + 1; row < end; row += 1) {
      if (/^- `P-0[1-6]`/.test(lines[row])) positions.push(row);
    }
    const sorted = positions.map((position) => lines[position]).sort((left, right) => {
      const leftId = left.match(/P-0([1-6])/)?.[1] || "9";
      const rightId = right.match(/P-0([1-6])/)?.[1] || "9";
      return Number(leftId) - Number(rightId);
    });
    positions.forEach((position, offset) => { lines[position] = sorted[offset]; });
    index = end - 1;
  }
  return lines.join("\n");
}

function extractSynthesis(source, file) {
  const heading = "### Discovery-pattern synthesis";
  const start = source.indexOf(heading);
  if (start < 0) throw new Error(`${file}: missing ${heading}`);
  const end = source.indexOf("\n## ", start);
  if (end < 0) throw new Error(`${file}: synthesis is not followed by a level-two section`);
  const block = source.slice(start, end);
  const lines = block.split("\n");
  const headerIndex = lines.findIndex((line) => line.startsWith("| Pattern |"));
  if (headerIndex < 0) throw new Error(`${file}: missing synthesis table header`);
  const header = splitRow(lines[headerIndex]);
  const rows = lines.slice(headerIndex + 2).filter((line) => line.startsWith("| `P-"));
  if (rows.length !== 6) throw new Error(`${file}: expected 6 synthesis rows, found ${rows.length}`);

  const byNewId = new Map();
  for (const line of rows) {
    const cells = splitRow(line);
    const oldId = cells[0].match(/P-0[1-6]/)?.[0];
    if (!oldId) throw new Error(`${file}: synthesis row lacks a pattern ID`);
    const newId = oldToNew.get(oldId);
    const isSpecialTable = header.includes("Concrete evidence nodes");
    const embeddedDescription = cells[0].replace(/`?P-0[1-6]`?\s*[—-]?\s*/, "").trim();
    byNewId.set(newId, {
      instantiation: isSpecialTable ? embeddedDescription : cells[2],
      evidence: isSpecialTable ? cells[2] : null,
    });
  }
  return { start, end, byNewId };
}

function tableFor(byNewId) {
  const lines = [
    "### Discovery-pattern synthesis",
    "",
    "Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.",
    "",
    "| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |",
    "|---|---|---|---|---|",
  ];
  for (const item of schema) {
    const record = byNewId.get(item.id);
    if (!record) throw new Error(`missing remapped synthesis record ${item.id}`);
    lines.push(
      `| \`${item.id}\` | ${escapeCell(item.definition)} | ${escapeCell(item.role)} | ${escapeCell(record.instantiation)} | ${escapeCell(record.evidence || item.evidence)} |`,
    );
  }
  return lines.join("\n");
}

const results = [];
for (const file of files) {
  const fullPath = path.join(corpusDir, file);
  const source = fs.readFileSync(fullPath, "utf8");
  if (source.includes("| `P-01` | Reframe the inherited question after diagnosing interpolation failure |")) {
    const normalized = normalizePatternBulletOrder(source);
    results.push({ file, changed: normalized !== source });
    if (write && normalized !== source) fs.writeFileSync(fullPath, normalized);
    continue;
  }
  const synthesis = extractSynthesis(source, file);
  let next = remapIds(source);
  const remappedSynthesis = extractSynthesis(next, file);
  next = `${next.slice(0, remappedSynthesis.start)}${tableFor(synthesis.byNewId)}${next.slice(remappedSynthesis.end)}`;
  if (file === "17_special_relativity.md") {
    next = next
      .replace("### Extrapolative step", "### Extrapolative generalization")
      .replace("### Retained results and new consequences", "### Retention, predictions, and discriminating tests");
  }
  next = normalizePatternBulletOrder(next);
  results.push({ file, changed: next !== source });
  if (write && next !== source) fs.writeFileSync(fullPath, next);
}

console.log(`${write ? "Updated" : "Would update"} ${results.filter(({ changed }) => changed).length} of ${results.length} canonical cases.`);
