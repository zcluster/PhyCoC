# Quantum Electrodynamics: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-QED-31` |
| Central node | `D-QED-1940S` |
| Focal discovery date | 1947–1949 renormalized QED |
| Main contributors | Tomonaga, Schwinger, Feynman, Dyson and many precursors and experimentalists |
| Domain | Quantum theory of charged particles and electromagnetic fields |
| Epistemic status | Exceptionally precise quantum field theory; electromagnetic sector of the Standard Model |

## Central claim

QED combines quantum mechanics, special relativity, and electromagnetic gauge symmetry. Renormalization turns divergent intermediate expressions into finite relations among measured quantities, enabling predictions of unprecedented precision.

## Historical problem

Before the focal discovery (1947–1949 renormalized QED), the case confronted a linked set of pressures: Quantized radiation and Dirac electrons; Lamb shift and electron magnetic moment measured. The pathways `R-UNRENORMALIZED-POINT-PARTICLE-PERTURBATION`, `R-CLASSICAL-RADIATION-ONLY`, `R-HOLE-THEORY-QED`, `R-LITERAL-UV-CUTOFF-ELECTRON-SIZE`, `R-AD-HOC-INFINITY-SUBTRACTION` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Quantum theory of charged particles and electromagnetic fields was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-EARLY-QED` | 1927–1930s | Quantized radiation and Dirac electrons | Infinities and self-energy appear |
| `TS-EXPERIMENTAL-ANOMALIES` | 1940s | Lamb shift and electron magnetic moment measured | Corrections demand consistent theory |
| `TS-RENORMALIZED-QED` | 1940s | Covariant and canonical methods developed | Finite observable predictions |
| `TS-DYSON` | 1949 | Formulations shown equivalent | Diagrammatic perturbation organized |
| `TS-GAUGE-THEORY` | 1950s onward | QED becomes prototype | Standard Model gauge theories follow |

## Knowledge assets

- `A-DIRAC-FIELD`: relativistic electron/positron.
- `A-MAXWELL-GAUGE`: electromagnetic field symmetry.
- `A-PERTURBATION`: expansion in small coupling.
- `A-LAMB-SHIFT`: precision spectral anomaly.
- `A-G-2`: magnetic-moment correction.

## Alternative, incomplete, or superseded pathways

### `R-UNRENORMALIZED-POINT-PARTICLE-PERTURBATION`

- **What it is:** A direct perturbative quantum-field calculation using point electrons and photons in which bare masses and charges are inserted without a systematic regulator, counterterm, and renormalization-condition framework.
- **Proposed/active period:** late 1920s–1940s.
- **Limitation:** Loop integrals diverge without a consistent parameter relation.
- **Outcome:** Replaced by renormalized field theory.

### `R-CLASSICAL-RADIATION-ONLY`

- **What it is:** A hybrid model in which charged matter may be quantized but the electromagnetic field remains a continuous classical wave with no photon creation, annihilation, or vacuum fluctuations.
- **Proposed/active period:** nineteenth century–1920s.
- **Limitation:** Cannot explain spontaneous emission, vacuum corrections, or discrete scattering.
- **Outcome:** Retained for coherent large-scale fields.

### `R-HOLE-THEORY-QED`

- **What it is:** Early QED built around a physically filled Dirac sea whose holes represent positrons.
- **Proposed/active period:** 1930s.
- **Outcome:** Superseded by Fock-space field operators.

### `R-LITERAL-UV-CUTOFF-ELECTRON-SIZE`

- **What it is:** The attempt to cure divergences by imposing an arbitrary maximum momentum interpreted as a literal unresolved electron size.
- **Proposed/active period:** 1930s–1940s.
- **Outcome:** Regulator dependence remains without renormalization; cutoffs retained in effective theories.

### `R-AD-HOC-INFINITY-SUBTRACTION`

- **What it is:** Removing each divergent expression independently without a finite parameter set, symmetry constraints, and common renormalization conditions.
- **Proposed/active period:** 1930s–1947.
- **Outcome:** Superseded by systematic renormalization.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1947–1949 renormalized QED). The proposed/active period is stored in each pathway record.

| Pathway | Repair strategy | Why inadequate or limited | Retained content |
|---|---|---|---|
| Classical radiation only | Quantize atomic matter but keep field continuous | Spontaneous emission, photon statistics and scattering require field quanta | Coherent/high-occupation limit |
| Unrenormalized point-particle perturbation | Insert bare point-particle parameters directly | Loop divergences lack a common finite calibration | Superseded by systematic renormalization |
| Hole-theory QED | Fill negative electron energies | Infinite sea and asymmetric treatment of species | Antiparticle insight |
| Cutoff as literal electron-size physics | Stop divergent integrals at arbitrary high momentum | Predictions depend on unmeasured cutoff unless organized by renormalization | Effective cutoffs remain useful |
| Ad hoc infinity subtraction | Remove each divergence independently | Risks unlimited fitting and symmetry violation | Replaced by finite counterterm set and renormalization conditions |
| **Discovery/current: renormalized QED** | Gauge-constrained field theory expresses observables through finite measured parameters order by order | Lamb shift, \(g-2\), scattering, running coupling | Retained electromagnetic quantum theory |

Renormalization did not show that “infinities cancel by magic.” Ward identities restrict counterterms, and the same measured mass, charge, and field normalization must predict many other observables. Competing formulations by Tomonaga, Schwinger, and Feynman were shown equivalent by Dyson. Their convergence transformed a repair program into a reusable theory architecture.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-DIRAC-FIELD`, `A-MAXWELL-GAUGE`, `A-PERTURBATION`, `A-LAMB-SHIFT`, `A-G-2`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-UNRENORMALIZED-POINT-PARTICLE-PERTURBATION` | A direct perturbative quantum-field calculation using point electrons and photons in which bare masses and charges are inserted without a systematic regulator, counterterm, and renormalization-condition framework. | Loop integrals diverge without a consistent parameter relation. |
| `R-CLASSICAL-RADIATION-ONLY` | A hybrid model in which charged matter may be quantized but the electromagnetic field remains a continuous classical wave with no photon creation, annihilation, or vacuum fluctuations. | Cannot explain spontaneous emission, vacuum corrections, or discrete scattering. |
| `R-HOLE-THEORY-QED` | Early QED built around a physically filled Dirac sea whose holes represent positrons. | See the full pathway record above. |
| `R-LITERAL-UV-CUTOFF-ELECTRON-SIZE` | The attempt to cure divergences by imposing an arbitrary maximum momentum interpreted as a literal unresolved electron size. | See the full pathway record above. |
| `R-AD-HOC-INFINITY-SUBTRACTION` | Removing each divergent expression independently without a finite parameter set, symmetry constraints, and common renormalization conditions. | See the full pathway record above. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Divergences reframed through scale-dependent parameters. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

In Heaviside–Lorentz natural units \(\hbar=c=1\), the QED Lagrangian is:

$$
\mathcal{L}_{\mathrm{QED}}
=-\frac14F_{\mu\nu}F^{\mu\nu}
+\bar\psi(i\gamma^\mu D_\mu-m)\psi,
$$

with:

$$
D_\mu=\partial_\mu+ieA_\mu.
$$

Local gauge transformation:

$$
\psi\rightarrow e^{-ie\chi}\psi,
\qquad
A_\mu\rightarrow A_\mu+\partial_\mu\chi
$$

leaves the physics invariant.

Restoring SI constants, the dimensionless coupling is:

$$
\alpha=\frac{e^2}{4\pi\epsilon_0\hbar c}\approx\frac{1}{137}.
$$

The electron magnetic moment is written:

$$
\boldsymbol{\mu}
=g\frac{e}{2m}\mathbf{S},
\qquad
a_e=\frac{g-2}{2}.
$$

At leading QED order:

$$
a_e=\frac{\alpha}{2\pi}+\mathcal{O}(\alpha^2).
$$

##### From local phase covariance to the interaction

For the free Dirac term, a position-dependent phase gives

$$
\partial_\mu(e^{-ie\chi}\psi)
=e^{-ie\chi}(\partial_\mu\psi-ie\,\partial_\mu\chi\,\psi),
$$

so the extra derivative spoils invariance. With \(D_\mu=\partial_\mu+ieA_\mu\) and \(A'_\mu=A_\mu+\partial_\mu\chi\), however,

$$
D'_\mu\psi'=e^{-ie\chi}D_\mu\psi.
$$

Expanding the covariant derivative shows the interaction is forced into the matter Lagrangian:

$$
\bar\psi i\gamma^\mu D_\mu\psi
=\bar\psi i\gamma^\mu\partial_\mu\psi
-e\bar\psi\gamma^\mu A_\mu\psi.
$$

The Maxwell term is invariant because \(F'_{\mu\nu}=F_{\mu\nu}\). Varying \(A_\nu\) gives

$$
\partial_\mu F^{\mu\nu}=e\bar\psi\gamma^\nu\psi\equiv j^\nu,
$$

and the Dirac equation plus its adjoint imply \(\partial_\nu j^\nu=0\). At a fermion-photon vertex, the same conservation appears as

$$
q_\mu\bar u(p')\gamma^\mu u(p)
=\bar u(p')(\not p'-\not p)u(p)=0,
$$

using the external Dirac equations. This is the tree-level seed of the Ward–Takahashi constraints that make charge renormalization systematic.

##### What renormalization actually proves at fixed order

Introduce a regulator and rewrite bare fields and parameters as \(\psi_0=Z_2^{1/2}\psi\), \(A_0=Z_3^{1/2}A\), \(m_0=m+\delta m\), and \(e_0=Z_e e\). A loop amplitude and the allowed counterterms depend on the regulator separately. Renormalization conditions fix \(m\) and \(e\) through chosen observables; after combining all diagrams and counterterms at a stated order, regulator dependence cancels up to higher-order errors. Gauge symmetry further gives \(Z_1=Z_2\) in QED, relating the vertex and electron-field factors.

This is a constrained prediction pipeline, not “subtract infinity”: a finite set of calibration inputs must account for many other cross sections and level shifts.

| Logical role | Content |
|---|---|
| Symmetry input | Local \(U(1)\) phase covariance. |
| Forced interaction | Minimal coupling \(-e\bar\psi\gamma^\mu A_\mu\psi\). |
| Quantum organization | Perturbative loops plus every symmetry-allowed counterterm at the relevant order. |
| Calibration | A finite set of renormalized masses, charge, and field normalizations. |
| Predictions | Remaining scattering, spectroscopy, magnetic-moment, and running-coupling observables. |
| Scope condition | Stated perturbative order, scale, scheme, and included particle sectors. |

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Divergences reframed through scale-dependent parameters

- `P-02` — **Permit a new representation, ontology, or mechanism:** Quantum fields and vacuum corrections accepted

- `P-03` — **Make the new structure generative:** Gauge Lagrangian generates interaction amplitudes

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Quantum theory of charged particles and electromagnetic fields). The case-specific unification was: Relativity, quantum particles, and fields unified. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Gauge Lagrangian generates interaction amplitudes

- `P-04` — **Unify previously separated domains or phenomena:** Relativity, quantum particles, and fields unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Dirac and Maxwell theories retained as limits. Its quantitative or otherwise discriminating test strategy is: Precision spectroscopy and \(g-2\) dominate validation. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Dirac and Maxwell theories retained as limits

- `P-06` — **Prioritize discriminating tests:** Precision spectroscopy and \(g-2\) dominate validation

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Divergences reframed through scale-dependent parameters | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Quantum fields and vacuum corrections accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Gauge Lagrangian generates interaction amplitudes | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Relativity, quantum particles, and fields unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Dirac and Maxwell theories retained as limits | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Precision spectroscopy and \(g-2\) dominate validation | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-QED-1940S` |
| Focal date | 1947–1949 renormalized QED |
| Central claim | QED combines quantum mechanics, special relativity, and electromagnetic gauge symmetry. Renormalization turns divergent intermediate expressions into finite relations among measured quantities, enabling predictions of unprecedented precision. |
| Domain | Quantum theory of charged particles and electromagnetic fields |
| Epistemic status | Exceptionally precise quantum field theory; electromagnetic sector of the Standard Model |
| Generative role | Gauge Lagrangian generates interaction amplitudes |
| Retained structure | Dirac and Maxwell theories retained as limits |

Key formal relations, consolidated from the derivation above:

$$
\mathcal{L}_{\mathrm{QED}}
=-\frac14F_{\mu\nu}F^{\mu\nu}
+\bar\psi(i\gamma^\mu D_\mu-m)\psi,
$$

$$
D_\mu=\partial_\mu+ieA_\mu.
$$

$$
\psi\rightarrow e^{-ie\chi}\psi,
\qquad
A_\mu\rightarrow A_\mu+\partial_\mu\chi
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-QED-01` — Positronium bound states

- **Classification:** `EARLY-DERIVED-PREDICTION` within the QED tradition.
- **Prediction date and authorship:** after Dirac theory supplied the positron, Mohorovičić proposed the electron–positron atom in 1934; positronium was experimentally identified by Deutsch in 1951. This predates the mature postwar renormalization program, so it is not credited to that repair alone.
- **Construction-data independence:** the bound state was inferred before its spectral and lifetime signatures were observed.
- **Derivation provenance:** `MODERN-PEDAGOGICAL-DERIVATION` of the leading nonrelativistic spectrum.

For equal constituent masses $m_e$, the relative coordinate has reduced mass

$$
\mu=\frac{m_em_e}{m_e+m_e}=\frac{m_e}{2}.
$$

Replacing the electron–proton reduced mass in the Coulomb spectrum gives

$$
\boxed{E_n=-\frac{\mu c^2\alpha^2}{2n^2}
=-\frac{m_ec^2\alpha^2}{4n^2}}.
$$

Spin and annihilation then split the singlet and triplet states and give different lifetimes; precision values require full QED corrections.
- **Observable discriminator and outcome:** a neutral short-lived $e^-e^+$ atom should show hydrogen-like levels with half the leading Rydberg energy and annihilation-dependent lifetimes. Those signatures were found.

### `NP-QED-NONE` — Renormalized QED's famous early numbers were not all predictions

- **Classification:** `RETRODICTION-OR-EXPLANATION` warning.
- **Reason:** the Lamb shift and the electron's anomalous magnetic moment were crucial empirical stimuli during QED's postwar reconstruction. Their successful precision calculation is extraordinary, but calling both wholly independent predictions would erase their role in theory repair. Later higher-order coefficients and measurements do provide increasingly independent tests.

## Validation and explanatory gains

QED explains the Lamb shift, anomalous magnetic moments, scattering cross sections, positronium, vacuum polarization, and running electromagnetic coupling. Agreement between calculated and measured \(a_e\) is among science's most precise theory–experiment comparisons.

## Limitations and retained status

Perturbative series are asymptotic, not ordinary convergent sums. QED does not include weak, strong, or gravitational interactions by itself. At very high energies it is embedded in electroweak theory. “Virtual particles popping in and out” is a heuristic, not a literal unique ontology.

## Extended historical investigation

### From a successful first theory to a crisis of infinities

The first relativistic quantum descriptions of radiation were already productive. Dirac's 1927 treatment of the electromagnetic field explained emission and absorption using field quanta, while his relativistic electron equation supplied spin, the electron magnetic moment at leading order, and—after a difficult interpretive history—the positron. Yet the same framework generated ultraviolet divergences when interactions were calculated beyond the lowest approximation. A point electron acted on by its own quantized field, and vacuum fluctuations modified both masses and charges, producing integrals that grew without bound at high momentum.

It would be misleading to describe pre-1945 QED as simply “wrong.” Its lowest-order scattering and radiation calculations worked, and several subtraction ideas existed. The unresolved question was whether one could make the procedure systematic without merely hiding arbitrary infinities. Wartime advances in microwave spectroscopy then made small atomic-energy differences measurable. In 1947, the Lamb–Retherford result showed that the \(2S_{1/2}\) and \(2P_{1/2}\) hydrogen levels—degenerate in the simplest Dirac treatment—were separated. Measurements of the electron's magnetic moment likewise revealed a small departure from \(g=2\). The anomalies were not failures of quantum field thinking; they were precisely sized opportunities for a more complete version of it.

### The renormalization inference

The theory begins with parameters in a Lagrangian, but experiments determine the mass and charge of the dressed, interacting electron. Schematically one writes

$$
m_0=m_{\mathrm{phys}}+\delta m,
\qquad
e_0=Z_e e_{\mathrm{phys}},
$$

where a regulator temporarily makes the divergent loop expressions well-defined, and counterterms \(\delta m\) and \(Z_e\) are fixed by specified measurement conditions. The important claim is not that the individual bare pieces are observable. It is that, order by order in \(\alpha\), all predictions for observables can be expressed using a finite set of measured parameters and become independent of the regulator.

For an amplitude this logic has the schematic form

$$
\mathcal M
=\mathcal M^{(0)}
+\alpha\mathcal M^{(1)}
+\alpha^2\mathcal M^{(2)}+\cdots .
$$

The loop terms include electron self-energy, vacuum polarization, and vertex corrections. Gauge symmetry constrains how their divergences fit together; the Ward–Takahashi identity relates the vertex and electron wavefunction renormalizations. This is why renormalization is not an unlimited permission to fit any answer. QED has only a small parameter set, while it predicts a very large family of spectral shifts, decay rates, and scattering distributions.

Tomonaga and Schwinger developed covariant operator approaches, Feynman developed a spacetime and path-integral organization, and Dyson demonstrated the equivalence of the principal formulations and systematized perturbation theory. A Feynman diagram should be read as an indexed contribution to an amplitude—not normally as a photograph of a unique microscopic sequence. Internal “virtual particles” need not obey the external-particle mass relation and are representation-dependent bookkeeping elements.

### Two precision examples

The one-loop vertex correction gives Schwinger's celebrated result

$$
a_e^{(1)}=\frac{\alpha}{2\pi}\approx 0.0011614.
$$

Higher electromagnetic, hadronic, and electroweak corrections are required at modern precision. Agreement between theory and experiment is therefore a coupled test of field quantization, special relativity, gauge symmetry, perturbative computation, and independently measured constants—not a test of one diagram in isolation.

The Lamb shift can be understood qualitatively as the result of radiative corrections that treat atomic states with different near-origin wavefunctions differently. For hydrogen,

$$
|\psi_{nS}(0)|^2\neq0,
\qquad
|\psi_{nP}(0)|^2=0
$$

in the nonrelativistic limit. Electron self-energy and vacuum-polarization effects therefore lift a degeneracy left by the ideal Dirac–Coulomb spectrum. A full calculation also includes recoil, finite proton size, and higher-order terms. This example illustrates how a “small anomaly” can contain several separable physical contributions rather than point to a single new object.

### Scale dependence and effective-theory meaning

Vacuum polarization screens electric charge, so the effective electromagnetic coupling depends on momentum scale. At leading logarithmic order for an electron contribution,

$$
\alpha(Q^2)\simeq
\frac{\alpha(\mu^2)}
{1-\dfrac{\alpha(\mu^2)}{3\pi}\ln(Q^2/\mu^2)}.
$$

Thus the familiar \(1/137\) is a low-energy value, not an immutable coupling at every scale. Renormalization-group flow turned the former nuisance of scale dependence into predictive structure. Modern effective-field-theory language further clarifies why QED can be extraordinarily successful without being ultimate: all interactions allowed by its symmetries may be organized by operator dimension, with high-dimension effects suppressed below a cutoff.

### Evidence ledger and historiographic cautions

| Evidence node | What it tested | What it did not establish alone |
|---|---|---|
| Lamb shift | Radiative modification of bound-state energies | The complete renormalization program |
| Electron and muon \(g-2\) | Vertex corrections and contributions from many virtual sectors | A literal ontology of diagram lines |
| Positronium spectra and decay | Bound-state QED and annihilation | The strong-force corrections in hadronic systems |
| Bhabha/Møller scattering | Relativistic amplitudes, crossing, radiative corrections | Validity at arbitrarily high energy |
| Running of \(\alpha\) | Vacuum polarization and scale dependence | Unification with the other interactions |

Priority should not be compressed into a single “inventor of QED.” Tomonaga, Schwinger, Feynman, and Dyson made distinct theoretical contributions; Bethe produced an influential early Lamb-shift estimate; Kramers and others advanced renormalization ideas; experimentalists supplied the precision targets. The historical discovery node is therefore a coordinated repair and reorganization of quantum electrodynamics, not a solitary flash.

## AI-oriented inference notes

- **Separate unobservables from calibrated observables.** Bare parameters and individual diagrams are intermediate nodes; detector rates, level shifts, and cross sections are the comparison nodes.
- **Track cancellation dependencies.** A finite prediction can depend on combining several divergent terms under symmetry constraints.
- **Represent approximation order.** “QED predicts \(x\)” should link to perturbative order, included sectors, input constants, and uncertainty.
- **Do not literalize calculational pictures.** Diagrammatic convenience is not sufficient evidence for a unique ontology of virtual particles.
- **Attach domains to precision claims.** QED's success is within electromagnetic quantum phenomena and specified energy regimes; it is embedded in the electroweak Standard Model and omits quantum gravity.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-DIRAC-FIELD --contributes-to--> D-QED-1940S
A-MAXWELL-GAUGE --contributes-to--> D-QED-1940S
D-MAXWELL-FIELD-1861-1865 --is-quantized-in--> D-QED-1940S
D-QFT-FIELD-QUANTIZATION-1927 --is-specialized-as-electromagnetism-in--> D-QED-1940S
A-LAMB-SHIFT --challenges--> EARLY-QED
RENORMALIZATION --repairs--> EARLY-QED
QED-LAGRANGIAN --generates--> SCATTERING-AMPLITUDES
QED-LOOPS --explain--> A-G-2
D-QED-1940S --prototype-for--> STANDARD-MODEL-GAUGE-THEORY
D-QED-1940S --is-embedded-in--> D-ELECTROWEAK-1961-1973
D-QED-1940S --instantiates--> P-06
```

## Sources

- Stanford Encyclopedia of Philosophy, [“The History of Quantum Field Theory”](https://plato.stanford.edu/archives/fall2023/entries/quantum-field-theory/qft-history.html).
- Nobel Prize, [The 1965 Physics Prize](https://www.nobelprize.org/prizes/physics/1965/summary/).
- Nobel Prize, [Richard Feynman lecture](https://www.nobelprize.org/prizes/physics/1965/feynman/lecture/).
- NIST, [CODATA fundamental constants](https://physics.nist.gov/cuu/Constants/).
