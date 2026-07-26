# Fundamental Physics History Corpus: Professional QA Report

## Review scope

This review covers the 58 numbered case studies, their series README, and the executable validator. Newtonian mechanics is included at its chronological filename position as `08_newtonian_mechanics.md` and is checked through its specialized document schema. The review target is a discovery-AI corpus: historically nuanced, mathematically usable, explicit about rival pathways, and resistant to common label and scope errors.

## Checks completed

- Canonical document structure, unique graph identifiers, central nodes, time slices, pathway records, comparison ledgers, discovery-pattern labels, edge lists, AI-oriented notes, and source sections.
- One explicit `What it is` explanation at the first introduction of every detailed failed, incomplete, constrained, or superseded pathway.
- One—and only one—`Discovery/current` row in each comparison ledger; accepted discovery rows are excluded from the failed-pathway records.
- One focal discovery timestamp per case and one proposed/active-period timestamp per predecessor pathway.
- A sortable chronology check requiring every pathway in the predecessor section to originate before the focal discovery event.
- Display equations for balanced delimiters, notation consistency, dimensional plausibility, sign and unit conventions, approximation marks, normalization, and nearby assumptions.
- Historical wording for anachronism, single-experiment myths, overcompressed priority claims, overstatement of confirmation, and confusion between an empirical law and a later ontology.
- Markdown hygiene: heading syntax, code fences, local README links, trailing whitespace, tab characters, placeholder markers, and common duplicated-word errors.
- Source floors and duplicate source URLs.

## Material corrections made in the final pass

- Standardized the principal section headings across all numbered cases and added the missing explicit limitations section to the ancient-atomism case.
- Made contributor, domain, and epistemic-status metadata consistent.
- Corrected or qualified the multiple-proportions relation, buoyancy-vector convention, Galilean coordinate and range assumptions, pressure-force surface integral, quantum path-state normalization, and dimensionless Boltzmann entropy.
- Replaced ambiguous signed-charge notation in the Pauli limit and made the QED Lagrangian's natural-unit convention internally consistent.
- Restored the curvature factor \(c^2\) in the inflationary flatness relation and separated SI cosmological equations from natural-unit slow-roll formulas.
- Distinguished time-domain inspiral strain from the frequency-domain gravitational-wave amplitude.
- Brought the Newtonian case into the same pathway discipline by adding `What it is` records and a comparison ledger, and clarified its gravitational-force vector convention.
- Removed post-discovery reactions from predecessor-pathway sections and updated their ledgers. Examples include the post-Copernican Tychonic system, post-1905 ballistic-light theory, post-1964 technicolor, and post-Bell experimental-loophole programs.
- Added genuine earlier antecedents where useful, including Aristarchan and partial geo-kinetic systems, Galileo's lantern test, Nagaoka and Nicholson atomic models, pre-quark bootstrap/classification programs, the Stueckelberg mass construction, and Mixmaster cosmology.
- Added eight full-length theoretical-foundation cases: Noether's theorems, quantum field theory, quantum entanglement, Landau phase-transition theory, Yang–Mills theory, BCS superconductivity, Wilsonian renormalization-group theory, and effective field theory.
- Added a full-length de Broglie matter-wave case that separates the 1923–1924 hypothesis, Schrödinger's later wave dynamics, and the 1927 electron-diffraction validation.
- Kept quantum field theory distinct from Yang–Mills theory, entanglement distinct from Bell's theorem, BCS pairing distinct from phonon mediation, and Wilsonian RG distinct from EFT.
- Reordered the README by sortable focal discovery date. Newtonian mechanics now occupies chronological file position `08`; the previous `08`–`52` files were shifted to `09`–`53`. The validator checks exact README coverage, uniqueness, and chronological order.

## Automated certification

Run:

```text
node history/fundamental_physics_discoveries/validate_corpus.mjs
```

The validator checks all 58 numbered cases, including the specialized Newtonian case. It imports `chronology_data.mjs`, checks exact rendered timestamps, verifies that the README lists every case once in sortable focal chronology, and fails if a predecessor pathway's sortable key is not earlier than its focal discovery. A passing result certifies structural, syntactic, and encoded chronology invariants, not the truth of every historical interpretation.

## Core-backbone derivation audit (2026-07-26)

The 18 nodes classified in the interactive graph as the **Core theoretical backbone** received an additional line-by-line derivation audit. Newtonian mechanics and the expanded Second Law case were already sufficiently reconstructible; 15 other original backbone cases compressed at least one signature inference into a stated result, and the later-promoted Quantum Statistics case received a full counting-to-distribution audit. Those gaps were expanded as follows:

| Case family | Inference made self-contained |
|---|---|
| Fermat, Lagrange, Hamilton | Optical variation to ray equation and Snell invariant; d'Alembert/action variation to Euler–Lagrange equations; Legendre transform to Hamilton, Poisson, and Hamilton–Jacobi equations |
| First Law, classical statistical mechanics | Cross-route operational inference of internal energy; maximum-entropy derivation of canonical weights; explicit conditional sign proof for the Boltzmann \(H\)-theorem |
| Quantum statistics | Symmetric/antisymmetric multiplicities to BE/FD occupations; grand-canonical cross-check; Maxwell–Boltzmann limit; Fermi degeneracy pressure; finite excited-state capacity and BEC threshold |
| Maxwell and relativity | Plane-wave and Poynting derivations; Lorentz coefficients from both light rays and reciprocity; weak-field recovery of Newton/Poisson gravity and perturbative perihelion advance |
| Quantum mechanics and QFT | Robertson inequality from Cauchy–Schwarz; exact rectangular-barrier matching result; normal-mode decomposition to oscillators, Fock operators, and particle-number sectors |
| QED and Yang–Mills | Local gauge covariance to the interaction and current identities; regulator/counterterm logic; non-Abelian connection transformation, curvature covariance, action variation, and self-interaction vertices |
| Electroweak, QCD, Standard Model | Higgs mass-matrix diagonalization and Fermi limit; integration of the one-loop running coupling with a confinement caveat; explicit hypercharges, anomaly cancellations, Yukawa masses, and CKM origin |

Each expanded chain distinguishes empirical or structural inputs, algebraic consequences, derived observables, and scope conditions. Modern pedagogical reconstructions are labeled as such by context and are not represented as verbatim historical reasoning.

The executable validator now maintains a minimum derivation floor for these 18 files: at least 1,800 words, at least eight display-equation blocks, and an explicit assumption/inference-role audit (with schema-aware markers for the Newton and Second Law cases). These thresholds cannot certify correctness, but they prevent accidental regression to formula-only summaries.

## Known limitations and responsible use

Historical scholarship can disagree about influence, priority, experiment reconstruction, and actors' intended meanings. The cases explicitly mark many such cautions, but the corpus is not a substitute for specialist historiography or claim-level archival citation.

The linked sources are primary or authoritative anchors, not a complete bibliography. They should be retained during training and retrieval so generated claims can be checked. Web content may later move or change.

Modern equations are often pedagogical reconstructions. They help a discovery system learn generative inference, approximation, and model discrimination, but must not be attributed verbatim to historical actors unless the text explicitly says so.

The corpus is suitable as curated instructional and retrieval material. Before using it as a high-weight supervised ground-truth dataset, convert the document records into a versioned schema, add claim-level provenance and confidence fields, and have relevant historians and domain physicists independently review the extracted records.
