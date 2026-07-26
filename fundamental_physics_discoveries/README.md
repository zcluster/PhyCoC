# Fundamental Physics Discovery Knowledge-Graph Series

## Corpus metadata

| Field | Value |
|---|---|
| Corpus ID | `KG-HIST-FUNDAMENTAL-PHYSICS-001` |
| Purpose | Human-readable and machine-oriented historical knowledge graphs for major discoveries in fundamental physics |
| Ordering | Historical order by focal discovery date. Newtonian mechanics retains filename `08`; later-added cases retain extension identifiers `46`–`58` and are interleaved by date in this reading list. |
| Newtonian case | Newtonian mechanics and universal gravitation are included as [`08_newtonian_mechanics.md`](08_newtonian_mechanics.md) |
| Epistemic rule | Each theory is evaluated within its evidential and domain limits; “superseded” does not mean “historically useless,” and “successful” does not mean “ultimate” |
| Shared pattern vocabulary | `P-01` unification; `P-02` empirical-to-generative upgrade; `P-03` question reframing; `P-04` new ontology/mechanism; `P-05` structural retention; `P-06` quantitative testability |
| Mathematical convention | LaTeX equations use modern notation unless explicitly identified as a historical formula. Particle-field and scalar-field equations may use natural units \(\hbar=c=1\) when constants are not shown explicitly. |
| Validation | Run `node validate_corpus.mjs` from this directory or the project root to check the corpus invariants, including the specialized Newtonian schema |

## Ordered discovery files

1. [Atomistic hypothesis](01_atomistic_hypothesis.md)
2. [Hydrostatics and buoyancy](02_hydrostatics_and_buoyancy.md)
3. [Heliocentric planetary system](03_heliocentric_planetary_system.md)
4. [Kepler's laws of planetary motion](04_keplers_laws_of_planetary_motion.md)
5. [Galilean kinematics](05_galilean_kinematics.md)
6. [Atmospheric pressure and the physical vacuum](06_atmospheric_pressure_and_vacuum.md)
7. [Fermat's principle of stationary optical time](55_fermat_principle.md)
8. [Finite speed of light](07_finite_speed_of_light.md)
9. [Newtonian mechanics and universal gravitation](08_newtonian_mechanics.md)
10. [Lagrangian analytical mechanics](56_lagrangian_mechanics.md)
11. [Wave theory and interference of light](09_wave_theory_and_interference.md)
12. [Electromagnetism and induction](10_electromagnetism_and_induction.md)
13. [Hamiltonian mechanics, phase space, and canonical structure](57_hamiltonian_mechanics.md)
14. [First Law of Thermodynamics](11_thermodynamics_and_energy_conservation.md)
15. [Second Law of Thermodynamics](58_second_law_of_thermodynamics.md)
16. [Maxwell's electromagnetic field theory](13_maxwell_electromagnetic_field_theory.md)
17. [X-rays](15_x_rays.md)
18. [Electron](17_electron.md)
19. [Energy quantization](18_energy_quantization.md)
20. [Classical statistical mechanics](12_classical_statistical_mechanics.md)
21. [Radioactivity and nuclear transmutation](16_radioactivity_and_nuclear_transmutation.md)
22. [Electromagnetic waves and the relativity crisis](14_electromagnetic_waves_and_relativity_crisis.md)
23. [Light quanta and the photoelectric effect](20_light_quanta_and_photoelectric_effect.md)
24. [Special relativity](19_special_relativity.md)
25. [Physical reality of atoms and molecules](21_physical_reality_of_atoms.md)
26. [Atomic nucleus](22_atomic_nucleus.md)
27. [Quantized atomic structure](23_quantized_atomic_structure.md)
28. [General relativity](24_general_relativity.md)
29. [Noether's theorems and symmetry principles](46_noethers_theorem_and_symmetry.md)
30. [De Broglie matter waves and wave–particle duality](54_de_broglie_matter_waves.md)
31. [Quantum statistics](27_quantum_statistics.md)
32. [Quantum field theory and field quantization](47_quantum_field_theory.md)
33. [Quantum mechanics](26_quantum_mechanics.md)
34. [Expanding universe](25_expanding_universe.md)
35. [Neutron](29_neutron.md)
36. [Relativistic quantum theory and antimatter](28_relativistic_quantum_theory_and_antimatter.md)
37. [Quantum entanglement and nonseparability](48_quantum_entanglement.md)
38. [Landau theory of phase transitions and spontaneous symmetry breaking](49_landau_phase_transitions_and_symmetry_breaking.md)
39. [Nuclear interactions and beta decay](30_nuclear_interactions_and_beta_decay.md)
40. [Nuclear fission and chain reactions](31_nuclear_fission_and_chain_reactions.md)
41. [Quantum electrodynamics](32_quantum_electrodynamics.md)
42. [Yang–Mills non-Abelian gauge theory](50_yang_mills_gauge_theory.md)
43. [Parity violation](33_parity_violation.md)
44. [BCS theory of superconductivity](51_bcs_theory_of_superconductivity.md)
45. [Quarks and the strong interaction](34_quarks_and_strong_interaction.md)
46. [Higgs mechanism](35_higgs_mechanism.md)
47. [Bell's theorem](37_bells_theorem.md)
48. [Cosmic microwave background](36_cosmic_microwave_background.md)
49. [Wilsonian renormalization group and universality](52_wilsonian_renormalization_group.md)
50. [Quantum chromodynamics](39_quantum_chromodynamics.md)
51. [Electroweak theory](38_electroweak_theory.md)
52. [Effective field theory and scale separation](53_effective_field_theory.md)
53. [Standard Model](40_standard_model.md)
54. [Cosmic inflation](41_cosmic_inflation.md)
55. [Accelerating cosmic expansion](42_accelerating_cosmic_expansion.md)
56. [Neutrino oscillations](43_neutrino_oscillations.md)
57. [Higgs boson](44_higgs_boson.md)
58. [Gravitational waves](45_gravitational_waves.md)

## Shared document schema

The 57 standard-schema discovery files contain:

1. graph metadata and a scope-bounded central claim;
2. a historical time-slice table;
3. failed, incomplete, or superseded pathways;
4. inherited knowledge assets;
5. the discovery node and conceptual transformations;
6. necessary data, equations, derivations, or inferences;
7. validation and explanatory gains;
8. limitations and retained status;
9. mappings to `P-01` through `P-06`;
10. an explicit `source --relation--> target` edge list;
11. primary or authoritative sources.

The Newtonian case contains the same substantive graph elements under historically tailored headings—such as `Historical time slices`, `Superseded and failed pathways`, and `Transferable discovery patterns`. The validator applies a specialized but equivalent schema check to that file.

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
