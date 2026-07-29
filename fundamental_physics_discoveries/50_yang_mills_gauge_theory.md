# Yang–Mills Non-Abelian Gauge Theory: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-YANG-MILLS-49` |
| Central node | `D-YANG-MILLS-1954` |
| Focal discovery date | October 1954 publication |
| Main contributors | Chen Ning Yang and Robert Mills; with important antecedents from Weyl, Pauli, Klein and the theory of isospin |
| Domain | Non-Abelian gauge fields, particle interactions, geometry, and the foundations of the Standard Model |
| Epistemic status | Foundational gauge-theory architecture; experimentally successful through electroweak theory and QCD, while pure Yang–Mills mass-gap existence remains mathematically unresolved |

## Central claim

Yang and Mills generalized local gauge invariance from commuting \(U(1)\) phase transformations to a non-Abelian internal symmetry. Making the orientation of isospin independently selectable at each spacetime point requires a multiplet of connection fields. Because the group generators do not commute, the gauge fields interact with themselves. The 1954 model did not correctly identify the observed nuclear force and initially faced a mass problem, but its mathematical mechanism became the core architecture of electroweak theory and quantum chromodynamics.

## Historical problem

Before the focal discovery (October 1954 publication), the case confronted a linked set of pressures: Connect phase invariance with electromagnetism; Proton and neutron behave as two states under strong interactions. The pathways `R-GLOBAL-ISOSPIN-ONLY`, `R-ABELIAN-GAUGE-COPY`, `R-YUKAWA-MESON-FUNDAMENTAL-FORCE`, `R-MASSIVE-NONABELIAN-VECTOR-BY-HAND` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Non-Abelian gauge fields, particle interactions, geometry, and the foundations of the Standard Model was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-U1-GAUGE` | 1918–1929 | Connect phase invariance with electromagnetism | Weyl's revised phase gauge principle yields an Abelian connection |
| `TS-ISOSPIN` | 1932–1950s | Proton and neutron behave as two states under strong interactions | Internal \(SU(2)\)-like rotations organize nuclear symmetry |
| `TS-YANG-MILLS` | 1953–1954 | Make internal orientation locally variable | Non-Abelian connection and curvature are constructed |
| `TS-MASS-OBJECTION` | 1954–1960s | Gauge invariance implies massless vector fields, apparently absent for nuclear forces | Theory remains formal architecture awaiting new mechanisms |
| `TS-STANDARD-MODEL` | 1960s–1970s | Combine gauge symmetry, mass generation, and renormalizability | Electroweak and color gauge theories validate the framework |

## Knowledge assets

- `A-U1-GAUGE`: electromagnetic phase gauge invariance and the vector potential.
- `A-ISOSPIN`: proton–neutron internal doublet and approximate strong symmetry.
- `A-LIE-ALGEBRA`: noncommuting generators and structure constants.
- `A-NOETHER`: symmetry currents and local-symmetry identities.
- `A-CONNECTION-GEOMETRY`: parallel comparison of internal states at neighboring points.
- `A-QUANTUM-FIELD-THEORY`: operator fields and interaction amplitudes.

## Alternative, incomplete, or superseded pathways

### `R-GLOBAL-ISOSPIN-ONLY`

- **What it is:** A model in which proton and neutron form an internal doublet that can be rotated by the same \(SU(2)\) transformation everywhere, but the rotation cannot vary independently from point to point and no compensating gauge connection is introduced.
- **Proposed/active period:** 1932–1953.
- **Core assumption:** Global isospin conservation is sufficient to organize strong-interaction states.
- **Why reasonable at the time:** Proton–neutron near-degeneracy and charge independence of nuclear forces supported an approximate internal symmetry.
- **Successful scope:** Multiplet classification and isospin selection rules.
- **Anomaly or limitation:** It classifies states but does not generate a force field from the symmetry principle.
- **Repair program:** Localizing the transformation was investigated by Yang and Mills, influenced by the electromagnetic gauge analogy.
- **Discriminator:** A spacetime-dependent group rotation makes ordinary derivatives transform inhomogeneously, mathematically requiring a connection field.
- **Outcome:** Retained as an approximate global symmetry and as the constant-transformation subgroup of the gauge theory.
- **Retained structure:** Isospin generators, multiplets, and conserved-current ideas.

### `R-ABELIAN-GAUGE-COPY`

- **What it is:** The attempt to generalize electromagnetism by assigning several independent commuting \(U(1)\)-like vector fields to internal charges, without matrix-valued connections or gauge-boson self-coupling.
- **Proposed/active period:** 1929–1953.
- **Core assumption:** Multiple forces can be represented as parallel copies of Maxwell's Abelian gauge structure.
- **Why reasonable at the time:** Electromagnetism was the only empirically established gauge interaction.
- **Successful scope:** Multiple Abelian charges can indeed be consistently modeled this way.
- **Anomaly or limitation:** Commuting fields do not implement a genuinely rotating non-Abelian internal basis and miss the nonlinear term demanded by noncommuting generators.
- **Repair program:** Matrix-valued potentials were explored in mathematical and unification contexts.
- **Discriminator:** Covariance under local \(SU(2)\) transformations uniquely requires the commutator term in the field strength.
- **Outcome:** Retained for Abelian sectors, superseded as a model of non-Abelian internal symmetry.
- **Retained structure:** Covariant derivative, connection idea, and Maxwell limit.

### `R-YUKAWA-MESON-FUNDAMENTAL-FORCE`

- **What it is:** A theory in which the fundamental nuclear force is produced by exchange of a massive scalar or pseudoscalar meson with potential \(V(r)\propto-e^{-mr}/r\), rather than by a locally gauged internal symmetry.
- **Proposed/active period:** 1935–1953.
- **Core assumption:** Force range directly identifies the mass of a fundamental exchange particle.
- **Why reasonable at the time:** The Yukawa potential explained why nuclear forces are short ranged and motivated the successful prediction of mesons.
- **Successful scope:** Pion exchange remains an important long-distance component of nuclear forces.
- **Anomaly or limitation:** A simple elementary-meson theory did not organize the growing hadron spectrum or the short-distance dynamics later attributed to quarks and gluons.
- **Repair program:** Multiple mesons, spin/isospin couplings, and phenomenological nuclear potentials were added.
- **Discriminator:** Deep-inelastic and high-energy evidence later supported quark/color dynamics, while low-energy pion exchange emerged as an effective consequence of QCD.
- **Outcome:** Superseded as the fundamental strong theory; retained as low-energy nuclear effective physics.
- **Retained structure:** Exchange-force intuition and Yukawa potentials.

### `R-MASSIVE-NONABELIAN-VECTOR-BY-HAND`

- **What it is:** A prospective non-Abelian vector theory in which a Proca mass term \(\tfrac12m^2A_\mu^aA^{a\mu}\) is inserted directly so the force has finite range, without a compensating scalar mechanism or hidden gauge-invariant formulation.
- **Proposed/active period:** 1936–1953 antecedent vector-meson reasoning.
- **Core assumption:** Vector-boson mass can be added independently of gauge symmetry.
- **Why reasonable at the time:** Observed nuclear forces were short ranged, and massive vector fields were already mathematically known.
- **Successful scope:** A Proca field consistently describes a free massive spin-1 particle.
- **Anomaly or limitation:** The mass term is not invariant under the local non-Abelian transformation and spoils the gauge constraints needed for a well-behaved interacting theory.
- **Repair program:** Stueckelberg ideas, spontaneous symmetry breaking, and later the Higgs mechanism supplied more structured mass generation.
- **Discriminator:** Electroweak theory retains gauge structure while producing massive \(W\) and \(Z\) bosons and successful high-energy amplitudes.
- **Outcome:** Direct fundamental mass insertion is superseded in the Standard Model; massive vector effective theories remain useful below a cutoff.
- **Retained structure:** Massive spin-1 kinematics and finite-range propagators.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (October 1954 publication). The proposed/active period is stored in each pathway record.

| Pathway | Repair strategy | Why inadequate or limited | Retained content |
|---|---|---|---|
| Global isospin only | Use one internal rotation everywhere | Classifies matter but generates no local interaction connection | Isospin multiplets |
| Abelian gauge copies | Introduce several commuting gauge fields | Cannot implement noncommuting local rotations or self-coupling | Abelian gauge sectors |
| Fundamental Yukawa meson force | Explain short range by massive exchange | Low-energy nuclear model, not underlying quark–gluon dynamics | Pion exchange and nuclear EFT |
| Massive non-Abelian vector by hand | Insert a Proca mass | Breaks local gauge invariance and high-energy consistency | Massive-vector effective descriptions |
| **Discovery/current: Yang–Mills gauge architecture** | Introduce a Lie-algebra-valued connection and nonlinear curvature | Requires specified matter, group, quantization, and mass dynamics | Basis of electroweak theory and QCD |

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-U1-GAUGE`, `A-ISOSPIN`, `A-LIE-ALGEBRA`, `A-NOETHER`, `A-CONNECTION-GEOMETRY`, `A-QUANTUM-FIELD-THEORY`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-GLOBAL-ISOSPIN-ONLY` | A model in which proton and neutron form an internal doublet that can be rotated by the same \(SU(2)\) transformation everywhere, but the rotation cannot vary independently from point to point and no compensating gauge connection is introduced. | See the full pathway record above. |
| `R-ABELIAN-GAUGE-COPY` | The attempt to generalize electromagnetism by assigning several independent commuting \(U(1)\)-like vector fields to internal charges, without matrix-valued connections or gauge-boson self-coupling. | See the full pathway record above. |
| `R-YUKAWA-MESON-FUNDAMENTAL-FORCE` | A theory in which the fundamental nuclear force is produced by exchange of a massive scalar or pseudoscalar meson with potential \(V(r)\propto-e^{-mr}/r\), rather than by a locally gauged internal symmetry. | See the full pathway record above. |
| `R-MASSIVE-NONABELIAN-VECTOR-BY-HAND` | A prospective non-Abelian vector theory in which a Proca mass term \(\tfrac12m^2A_\mu^aA^{a\mu}\) is inserted directly so the force has finite range, without a compensating scalar mechanism or hidden gauge-invariant formulation. | See the full pathway record above. |

**Pattern demonstrated — `P-03` (reframe the inherited question):** “Which force law fits?” becomes “Which local symmetry and representation require the connection?”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

Let matter transform in a representation of a compact group:

$$
\psi(x)\rightarrow U(x)\psi(x),
\qquad
U(x)=e^{i\alpha^a(x)T^a},
$$

where

$$
[T^a,T^b]=if^{abc}T^c.
$$

Ordinary \(\partial_\mu\psi\) does not transform like \(\psi\). Introduce

$$
D_\mu=\partial_\mu-igA_\mu,
\qquad
A_\mu=A_\mu^aT^a,
$$

and require \(D_\mu\psi\to U D_\mu\psi\). This fixes

$$
A_\mu\rightarrow
UA_\mu U^{-1}
-\frac{i}{g}(\partial_\mu U)U^{-1}.
$$

The curvature is defined by

$$
[D_\mu,D_\nu]=-igF_{\mu\nu},
$$

so

$$
F_{\mu\nu}^a
=\partial_\mu A_\nu^a-\partial_\nu A_\mu^a
+gf^{abc}A_\mu^bA_\nu^c.
$$

The final term vanishes in an Abelian theory. It produces gauge-boson self-interactions. The classical Yang–Mills Lagrangian is

$$
\mathcal L_{\mathrm{YM}}
=-\frac14F_{\mu\nu}^aF^{a\mu\nu}
+\bar\psi(i\gamma^\mu D_\mu-m)\psi.
$$

The field equation has covariant rather than ordinary divergence:

$$
(D_\mu F^{\mu\nu})^a=gJ^{a\nu}.
$$

##### Complete localization-to-dynamics inference

The transformation law for \(A_\mu\) is not an independent guess. Demand \(D'_\mu\psi'=UD_\mu\psi\) and insert \(\psi'=U\psi\) and \(D'_\mu=\partial_\mu-igA'_\mu\):

$$
(\partial_\mu U)\psi+U\partial_\mu\psi-igA'_\mu U\psi
=U\partial_\mu\psi-igUA_\mu\psi.
$$

Because this must hold for every \(\psi\),

$$
A'_\mu
=UA_\mu U^{-1}
-\frac{i}{g}(\partial_\mu U)U^{-1}.
$$

Covariance of \(D_\mu\) implies covariance of its commutator:

$$
[D'_\mu,D'_\nu]=U[D_\mu,D_\nu]U^{-1},
\qquad
F'_{\mu\nu}=UF_{\mu\nu}U^{-1}.
$$

Taking a trace gives a gauge-invariant kinetic scalar by cyclicity. Varying its action uses

$$
\delta F_{\mu\nu}=D_\mu\delta A_\nu-D_\nu\delta A_\mu.
$$

Antisymmetry of \(F^{\mu\nu}\), covariant integration by parts, and a vanishing boundary variation then give

$$
\delta S_{\mathrm{YM}}
=\int d^4x\,(D_\mu F^{\mu\nu})^a\delta A_\nu^a.
$$

Adding matter changes the stationary-action condition to \((D_\mu F^{\mu\nu})^a=gJ^{a\nu}\). Because \(F\) contains \(g f^{abc}A^bA^c\), expanding \(F^2\) necessarily creates cubic and quartic gauge-field vertices; these are deductions from noncommutativity, not optional extra forces.

| Logical role | Content |
|---|---|
| Starting symmetry | A global internal group acting on matter multiplets. |
| New demand | Permit independent basis choices \(U(x)\) at neighboring spacetime points. |
| Forced compensator | A connection \(A_\mu\) with an inhomogeneous transformation law. |
| Derived curvature | \(F_{\mu\nu}=(i/g)[D_\mu,D_\nu]\), transforming covariantly. |
| Minimal dynamics | The local Lorentz scalar \(-\tfrac14F^a_{\mu\nu}F^{a\mu\nu}\). |
| Empirical choices still required | Gauge group, representations, couplings, vacuum/mass mechanism, and quantum consistency. |

**Patterns demonstrated:**

- `P-02` — **Make the new structure generative:** Isospin regularities become a local mechanism generating interaction terms

- `P-03` — **Reframe the inherited problem:** “Which force law fits?” becomes “Which local symmetry and representation require the connection?”

- `P-04` — **Permit a new representation, ontology, or mechanism:** Matrix-valued self-interacting gauge fields are accepted

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Non-Abelian gauge fields, particle interactions, geometry, and the foundations of the Standard Model). The case-specific unification was: Internal symmetry, geometry, and force fields are unified. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-01` — **Unify previously separated domains or phenomena:** Internal symmetry, geometry, and force fields are unified

- `P-02` — **Generate consequences rather than merely redescribe inputs:** Isospin regularities become a local mechanism generating interaction terms

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Maxwell gauge theory and global isospin survive as limits or substructures. Its quantitative or otherwise discriminating test strategy is: A compact Lagrangian fixes vertices, identities, running, and scattering predictions. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Maxwell gauge theory and global isospin survive as limits or substructures

- `P-06` — **Prioritize discriminating tests:** A compact Lagrangian fixes vertices, identities, running, and scattering predictions

### Discovery-pattern synthesis

This table is the compact output of the reconstruction above. It records where each transferable operation occurs; it is not an independent replacement for the historical reasoning.

| Pattern | Process stage | Case-specific instantiation |
|---|---|---|
| `P-01` | Extrapolative generalization | Internal symmetry, geometry, and force fields are unified |
| `P-02` | Transformative move and generative deduction | Isospin regularities become a local mechanism generating interaction terms |
| `P-03` | Diagnosis of interpolation failure and reframing | “Which force law fits?” becomes “Which local symmetry and representation require the connection?” |
| `P-04` | Transformative representation, ontology, or mechanism | Matrix-valued self-interacting gauge fields are accepted |
| `P-05` | Retention and limiting recovery | Maxwell gauge theory and global isospin survive as limits or substructures |
| `P-06` | Prediction, discrimination, and validation network | A compact Lagrangian fixes vertices, identities, running, and scattering predictions |

## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-YANG-MILLS-1954` |
| Focal date | October 1954 publication |
| Central claim | Yang and Mills generalized local gauge invariance from commuting \(U(1)\) phase transformations to a non-Abelian internal symmetry. Making the orientation of isospin independently selectable at each spacetime point requires a multiplet of connection fields. Because the group generators do not commute, the gauge fields interact with themselves. The 1954 model did not correctly identify the observed nuclear force and initially faced a mass problem, but its mathematical mechanism became the core architecture of electroweak theory and quantum chromodynamics. |
| Domain | Non-Abelian gauge fields, particle interactions, geometry, and the foundations of the Standard Model |
| Epistemic status | Foundational gauge-theory architecture; experimentally successful through electroweak theory and QCD, while pure Yang–Mills mass-gap existence remains mathematically unresolved |
| Generative role | Isospin regularities become a local mechanism generating interaction terms |
| Retained structure | Maxwell gauge theory and global isospin survive as limits or substructures |

Key formal relations, consolidated from the derivation above:

$$
\psi(x)\rightarrow U(x)\psi(x),
\qquad
U(x)=e^{i\alpha^a(x)T^a},
$$

$$
[T^a,T^b]=if^{abc}T^c.
$$

$$
D_\mu=\partial_\mu-igA_\mu,
\qquad
A_\mu=A_\mu^aT^a,
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-YM-NONE` — The 1954 isospin model had no successful clean new prediction

- **Classification:** `NO-CLEAN-CONTEMPORANEOUS-PREDICTION`.
- **Reason:** Yang and Mills's 1954 non-Abelian gauge construction was a profound mechanism proposal, but its direct identification of the gauge symmetry with nuclear isospin faced the massless-vector-boson problem and did not yield a confirmed novel particle or force in that original form.
- **Structural deduction:** for

$$
F^a_{\mu\nu}=\partial_\mu A^a_\nu-\partial_\nu A^a_\mu
+gf^{abc}A^b_\mu A^c_\nu,
$$

the quadratic and cubic terms in

$$
\mathcal L_{\rm YM}=-\frac14F^a_{\mu\nu}F^{a\mu\nu}
$$

necessarily generate gauge-boson self-interactions. This was a novel formal consequence of noncommuting local symmetry, but it was not yet a successful quantitative prediction of the 1954 nuclear model.
- **Later descendants:** weak neutral currents, $W/Z$ self-couplings, gluon radiation, and asymptotic freedom became successful predictions only after additional symmetry choices, matter representations, spontaneous symmetry breaking, and renormalization results. They are assigned to the electroweak and QCD cases rather than back-projected onto the original paper.
- **Discovery-AI significance:** a failed first application can contain a reusable mechanism whose later instantiations succeed. Separate `MECHANISM-NOVELTY` from `EMPIRICAL-PREDICTION-SUCCESS`.

## Validation and explanatory gains

The original isospin gauge model was not validated as the nuclear force. The later architecture was. Electroweak theory uses an \(SU(2)_L\times U(1)_Y\) gauge structure with spontaneous symmetry breaking; QCD uses \(SU(3)_c\), whose non-Abelian dynamics produces gluon self-interaction, asymptotic freedom, and confinement. Neutral currents, \(W\) and \(Z\) bosons, jets, scaling violations, and the pattern of strong interactions validate concrete Yang–Mills-based theories.

The explanatory gain is generative constraint. Choosing a group and matter representations largely determines the connection, curvature, interaction vertices, conserved identities, and charge algebra. Force structure is no longer a list of independently fitted couplings.

## Limitations and retained status

Gauge symmetry alone does not specify nature: the group, representations, couplings, scalar sector, vacuum, and quantum consistency must be supplied. Gauge transformations are generally redundancies of description; gauge-invariant observables carry direct physical meaning. Quantization requires gauge fixing or equivalent methods and introduces ghosts in common perturbative formulations.

The original massless isospin bosons were phenomenologically wrong. Electroweak boson masses require the Higgs mechanism, while QCD develops a mass scale through quantum dynamics. A rigorous proof that four-dimensional pure Yang–Mills theory exists with a positive mass gap remains an open Clay Millennium problem. None of these limitations reduces Yang–Mills to “just mathematics”; they identify which additional nodes convert an architecture into an empirical theory.

## Extended historical investigation

### The localization inference

The discovery can be reconstructed as a disciplined question. Suppose the choice of internal proton–neutron basis is conventional. A constant basis rotation changes no physics. Why should observers at neighboring spacetime points be forced to coordinate that convention globally? Allowing \(U(x)\) to vary introduces an extra derivative term,

$$
\partial_\mu(U\psi)
=U\partial_\mu\psi+(\partial_\mu U)\psi.
$$

The connection term in \(D_\mu\) cancels this mismatch. In geometric language, \(A_\mu\) tells how to compare internal vectors at neighboring points, and \(F_{\mu\nu}\) measures the path dependence of that comparison.

For an infinitesimal transformation, the gauge field varies schematically as

$$
\delta A_\mu^a
=\frac{1}{g}\partial_\mu\alpha^a
-f^{abc}\alpha^bA_\mu^c.
$$

The relative signs here follow the stated conventions \(D_\mu=\partial_\mu-igA_\mu\) and \(U=e^{i\alpha^aT^a}\); changing either convention changes corresponding signs without changing observables. The second term is the non-Abelian novelty. It makes the gauge field itself carry the gauge charge.

### Why the first physical interpretation failed

Yang and Mills sought to apply local isospin to nuclear interactions. Pauli and others immediately pressed the mass question: exact gauge invariance seemed to imply massless vector bosons and hence long-range forces, contrary to nuclear phenomenology. This objection was valid against the naive physical model. The historically important judgment was to distinguish a failed first application from a fertile formal structure.

Later spontaneous gauge symmetry breaking allowed massive weak bosons without simply deleting the gauge organization, while QCD used an unbroken color gauge theory whose observable spectrum is gapped and confined. The same 1954 equations acquired two different physical realizations.

### Abelian versus non-Abelian predictions

Expanding

$$
-\frac14F_{\mu\nu}^aF^{a\mu\nu}
$$

produces terms quadratic, cubic, and quartic in \(A_\mu^a\). QED has no elementary photon–photon vertex in its classical gauge kinetic term; non-Abelian theories have three- and four-gauge-boson vertices. In QCD these interactions contribute with the opposite sign from matter screening, allowing the coupling to decrease at short distances.

The Bianchi identity also becomes covariant:

$$
D_{[\mu}F_{\nu\rho]}=0.
$$

These equations provide algebraic consistency tests for any proposed implementation.

### Evidence and attribution ledger

| Layer | Evidence or achievement | Correct interpretation |
|---|---|---|
| 1954 construction | Locally invariant non-Abelian field equations | Discovery of architecture, not validation of nuclear model |
| Electroweak neutral currents | Gauge structure and matter assignments | Supports a specific broken gauge theory |
| \(W/Z\) self-couplings | Non-Abelian vertices | Directly probes gauge-boson interactions |
| QCD scaling violations and jets | Running color interaction and gluon radiation | Supports \(SU(3)\) Yang–Mills dynamics |
| Lattice mass spectrum | Nonperturbative QCD calculations | Numerical evidence, not a mathematical mass-gap proof |

Antecedents by Weyl, Pauli, Klein and others should be represented as contributions, not erased by a single-inventor story. Yang and Mills supplied the influential explicit non-Abelian internal gauge theory in 1954.

## AI-oriented inference notes

- Do not equate QFT, gauge theory, Yang–Mills theory, QCD, and the Standard Model.
- Derive the transformation of \(A_\mu\) from covariance of \(D_\mu\), rather than asserting it independently.
- Treat gauge choice as representational redundancy and compare gauge-invariant observables.
- Separate the success of the 1954 mathematical architecture from failure of its original nuclear-force interpretation.
- Check group, representations, anomalies, scalar/mass mechanism, and scale domain for every candidate theory.
- Preserve low-energy pion exchange as retained effective structure rather than labeling all Yukawa reasoning false.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-U1-GAUGE --inspires--> D-YANG-MILLS-1954
A-ISOSPIN --is-localized-by--> D-YANG-MILLS-1954
NONCOMMUTING-GENERATORS --require--> NONLINEAR-FIELD-STRENGTH
D-YANG-MILLS-1954 --generates--> GAUGE-BOSON-SELF-INTERACTION
D-YANG-MILLS-1954 --underlies--> ELECTROWEAK-THEORY
D-YANG-MILLS-1954 --underlies--> QCD
D-YANG-MILLS-1954 --provides-nonabelian-gauge-structure-for--> D-ELECTROWEAK-1961-1973
D-YANG-MILLS-1954 --provides-nonabelian-gauge-structure-for--> D-QCD-1973
HIGGS-MECHANISM --repairs-mass-problem-of--> MASSLESS-ELECTROWEAK-YANG-MILLS
D-YANG-MILLS-1954 --instantiates--> P-01
```

## Sources

- C. N. Yang and R. L. Mills, [“Conservation of Isotopic Spin and Isotopic Gauge Invariance”](https://www.osti.gov/biblio/4406667), *Physical Review* 96 (1954).
- CERN Courier, [“50 Years of Yang–Mills Theory”](https://cern-courier.web.cern.ch/a/50-years-of-yang-mills-theory/).
- CERN Document Server, [*The Making of the Standard Theory*](https://cds.cern.ch/record/2217096).
- Clay Mathematics Institute, [“Yang–Mills and Mass Gap”](https://www.claymath.org/millennium/yang-mills-the-maths-gap/).
