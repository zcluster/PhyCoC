# Fundamental Physics Discovery Knowledge-Graph Series

## Corpus metadata

| Field | Value |
|---|---|
| Corpus ID | `KG-HIST-FUNDAMENTAL-PHYSICS-001` |
| Purpose | Human-readable and machine-oriented historical knowledge graphs for major theory-building discoveries in fundamental physics |
| Inclusion rule | The focal contribution must be a generative law, model, formalism, mechanism, or conceptual transformation; cases centered chiefly on detection, measurement, entity identification, or experimental confirmation are excluded |
| Ordering | The 41 retained canonical cases are numbered continuously from `01` to `41` in sortable focal-discovery chronology |
| Newtonian case | Newtonian mechanics and universal gravitation are included as [`07_newtonian_mechanics.md`](07_newtonian_mechanics.md) |
| Epistemic rule | Each theory is evaluated within its evidential and domain limits; “superseded” does not mean “historically useless,” and “successful” does not mean “ultimate” |
| Shared pattern vocabulary | Process-ordered IDs: `P-01` question reframing; `P-02` new ontology/mechanism; `P-03` empirical-to-generative upgrade; `P-04` cross-domain unification/extrapolation; `P-05` structural retention; `P-06` quantitative testability |
| Mathematical convention | LaTeX equations use modern notation unless explicitly identified as a historical formula. Particle-field and scalar-field equations may use natural units \(\hbar=c=1\) when constants are not shown explicitly. |
| Validation | Run `node validate_corpus.mjs` from this directory or the project root to check the 41-case corpus invariants, including the specialized Newtonian schema |

## Ordered discovery files

1. [Atomistic hypothesis](01_atomistic_hypothesis.md)
2. [Hydrostatics and buoyancy](02_hydrostatics_and_buoyancy.md)
3. [Heliocentric planetary system](03_heliocentric_planetary_system.md)
4. [Kepler's laws of planetary motion](04_keplers_laws_of_planetary_motion.md)
5. [Galilean kinematics](05_galilean_kinematics.md)
6. [Fermat's principle of stationary optical time](06_fermat_principle.md)
7. [Newtonian mechanics and universal gravitation](07_newtonian_mechanics.md)
8. [Lagrangian analytical mechanics](08_lagrangian_mechanics.md)
9. [Wave theory and interference of light](09_wave_theory_and_interference.md)
10. [Hamiltonian mechanics, phase space, and canonical structure](10_hamiltonian_mechanics.md)
11. [First Law of Thermodynamics](11_thermodynamics_and_energy_conservation.md)
12. [Second Law of Thermodynamics](12_second_law_of_thermodynamics.md)
13. [Maxwell's electromagnetic field theory](13_maxwell_electromagnetic_field_theory.md)
14. [Energy quantization](14_energy_quantization.md)
15. [Classical statistical mechanics](15_classical_statistical_mechanics.md)
16. [Light quanta and the photoelectric effect](16_light_quanta_and_photoelectric_effect.md)
17. [Special relativity](17_special_relativity.md)
18. [Quantized atomic structure](18_quantized_atomic_structure.md)
19. [General relativity](19_general_relativity.md)
20. [Noether's theorems and symmetry principles](20_noethers_theorem_and_symmetry.md)
21. [De Broglie matter waves and wave–particle duality](21_de_broglie_matter_waves.md)
22. [Quantum statistics](22_quantum_statistics.md)
23. [Quantum field theory and field quantization](23_quantum_field_theory.md)
24. [Quantum mechanics](24_quantum_mechanics.md)
25. [Expanding universe](25_expanding_universe.md)
26. [Relativistic quantum theory and antimatter](26_relativistic_quantum_theory_and_antimatter.md)
27. [Quantum entanglement and nonseparability](27_quantum_entanglement.md)
28. [Landau theory of phase transitions and spontaneous symmetry breaking](28_landau_phase_transitions_and_symmetry_breaking.md)
29. [Nuclear interactions and beta decay](29_nuclear_interactions_and_beta_decay.md)
30. [Quantum electrodynamics](30_quantum_electrodynamics.md)
31. [Yang–Mills non-Abelian gauge theory](31_yang_mills_gauge_theory.md)
32. [BCS theory of superconductivity](32_bcs_theory_of_superconductivity.md)
33. [Quarks and the strong interaction](33_quarks_and_strong_interaction.md)
34. [Higgs mechanism](34_higgs_mechanism.md)
35. [Bell's theorem](35_bells_theorem.md)
36. [Wilsonian renormalization group and universality](36_wilsonian_renormalization_group.md)
37. [Quantum chromodynamics](37_quantum_chromodynamics.md)
38. [Electroweak theory](38_electroweak_theory.md)
39. [Effective field theory and scale separation](39_effective_field_theory.md)
40. [Standard Model](40_standard_model.md)
41. [Cosmic inflation](41_cosmic_inflation.md)

## Shared document schema

All 41 canonical discovery files now use the same evidence-to-abstraction order:

1. graph metadata;
2. a scope-bounded central claim;
3. the pre-discovery historical problem;
4. a historical time-slice table;
5. inherited knowledge assets;
6. failed, incomplete, or superseded pathways, including the comparison ledger;
7. **Discovery-process reconstruction: interpolation, transformation, and extrapolation**, containing starting inputs, limits of inherited interpolation, the transformative move, extrapolative generalization, retention and testing, and an evidence-grounded, five-column `P-01`–`P-06` synthesis whose identifiers follow their typical first role in the discovery process;
8. a compact **Discovery node and consolidated formalism** that serializes the result without repeating the full derivation;
9. historically novel predictions and deductions, or an explicit machine-readable indication that no separately provenance-labeled prediction record is yet encoded;
10. validation and explanatory gains;
11. limitations and retained status;
12. extended historical investigation;
13. AI-oriented inference notes;
14. additional quantitative and epistemic notes;
15. an explicit `source --relation--> target` edge list;
16. primary or authoritative sources.

The discovery-pattern labels are deliberately embedded inside the discovery-process reconstruction. Each label follows the evidence that supports it, and the final synthesis table maps `case evidence -> discovery operation -> transferable pattern`. This arrangement prevents the pattern vocabulary from replacing the historical inference chain with an unsupported checklist.

Each case also records a `Focal discovery date`. Every pathway in `Alternative, incomplete, or superseded pathways` has a `Proposed/active period` and must originate before that focal discovery. Later reactions, successor variants, experimental loophole programs, and modern alternatives belong in later-development, validation, or limitation sections instead. A same-year pathway is permitted only when the record identifies a pre-announcement or pre-acceptance hypothesis and its sortable chronology key is earlier than the focal event.

Expanded cases also include a deeper investigation layer: historiographic cautions, reconstructed experiment or inference chains, worked quantitative examples, evidence-versus-alternative ledgers, approximation or regime maps, and AI-oriented notes that prevent common graph-merging errors. The target is normally about 1,500–2,500 words per case when the evidence and mathematical content support that length; narrower cases may be somewhat shorter, while broad syntheses may be longer. Added length must encode useful distinctions or derivations rather than repeat the summary.

## Pathway record schema

Every failed, incomplete, constrained, or superseded pathway should be interpreted as a structured record with these fields:

| Field | Meaning |
|---|---|
| `what_it_is` | A self-contained explanation of what the pathway proposes, including its entities, mechanism, equations, or causal arrangement; this must appear first when the pathway is introduced |
| `assumption` | The claim or mechanism that distinguished the pathway |
| `historical_plausibility` | Evidence, inherited theory, or instrumentation that made it reasonable at the time |
| `successful_scope` | Phenomena the pathway genuinely organized or approximated |
| `anomaly_or_limit` | Observation, inconsistency, or regime it could not handle |
| `repair_program` | Nontrivial changes attempted before abandonment |
| `discriminator` | Evidence or derivation that compared the repaired pathway with rivals |
| `outcome` | Rejected, constrained, absorbed as an effective theory, or still open |
| `retained_structure` | Equations, concepts, approximations, or experimental practices preserved by the successor |

“Superseded” never means merely old, unfashionable, or absent from current textbooks. A pathway receives that relation only when a successor explains why it worked where it did and outperforms it on stated discriminators. Broad research programs that remain viable are labeled constrained or incomplete rather than failed.

In every case file, the first nonblank line following a named `R-*` pathway is an explicit `What it is` explanation. Readers and AI systems must not be expected to infer a theory's content from its identifier, limitation, or outcome.

Each `Pathway comparison ledger` obeys two coverage rules:

1. every non-discovery ledger row has one corresponding detailed `R-*` record in the failed, incomplete, constrained, or superseded pathway section; and
2. every ledger contains exactly one clearly labeled `Discovery/current` row representing the accepted discovery or present successor framework. That accepted row is comparative context and must **not** appear as an `R-*` record.

The validator additionally requires every non-discovery pathway's chronology key to be earlier than the focal discovery key. Dates are kept in [`chronology_data.mjs`](chronology_data.mjs) and rendered into the case files by [`apply_chronology_annotations.mjs`](apply_chronology_annotations.mjs).

The files are documents, not flowcharts.

## Discovery-AI data contract

This corpus is arranged to support discovery-oriented training and retrieval, not merely chronological summarization. A model or preprocessing pipeline should preserve the following distinctions:

| Training distinction | Required interpretation |
|---|---|
| Historical statement | A claim about what an actor, community, instrument, or period proposed or observed |
| Modern reconstruction | Present-day notation used to expose the quantitative content of an older result; it is not automatically the historical actor's own equation |
| Current assessment | A scope-bounded evaluation using later evidence |
| Observation or data | A measured pattern, including uncertainty, calibration, selection, and background assumptions where relevant |
| Model or pathway | A structured mechanism or representational program, not just a name |
| Anomaly or limitation | A mismatch or domain boundary; it is not automatically a falsification |
| Repair program | A substantive modification made to preserve a pathway under pressure |
| Discriminator | Evidence or derivation that separates live alternatives rather than merely fitting one model |
| Retained structure | A law, approximation, variable, instrument, or question preserved after theory change |
| Open question | A live underdetermination that must not be converted into a negative fact |

Recommended epistemic labels are `historical-report`, `modern-reconstruction`, `supported-current-model`, `effective-theory`, `superseded`, `constrained`, `open`, and `historiographically-disputed`. “Discovery/current” identifies the focal successful pathway in a comparison ledger; it does not assert finality.

Equations must be stored with nearby assumptions and symbol definitions. In particular, training extraction should retain unit conventions, sign conventions, limiting regimes, idealizations, and whether an equality is exact, approximate, proportional, or schematic. Removing those qualifiers turns valid equations into misleading universal claims.

Negative pathways are useful hard negatives only in context. A superseded theory may remain empirically adequate in a restricted regime, and a failed ontology may leave behind successful mathematics or experimental practice. Training examples should therefore preserve the full record from `what_it_is` through `retained_structure`, rather than pairing a pathway name with a bare “wrong” label.

Graph edges are directed propositions. They should be parsed as triples while retaining the surrounding prose that justifies them. Similar-looking nodes across cases—such as ancient atoms, chemical atoms, nuclei, elementary particles, classical waves, and quantum fields—must not be merged without an explicit identity relation.

To reduce evaluation leakage, benchmark splits should separate connected historical episodes or closely related successor cases rather than randomly splitting adjacent paragraphs from the same case. Source links provide provenance anchors, but they are not claim-level citations for every sentence; high-stakes factual extraction should recheck the cited primary or authoritative source.

See [`QA_REPORT.md`](QA_REPORT.md) for the corpus certification scope and known limitations.
