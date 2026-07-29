# Hamiltonian Mechanics, Phase Space, and Canonical Structure: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-HAMILTONIAN-MECHANICS-57` |
| Central node | `D-HAMILTONIAN-MECHANICS-1834` |
| Focal discovery date | 1834–1835 Hamiltonian dynamics synthesis |
| Main contributors | William Rowan Hamilton; with subsequent development by Jacobi and later canonical and symplectic formulations |
| Domain | Hamiltonian mechanics, phase space, canonical transformations, Hamilton–Jacobi theory, and dynamical generators |
| Epistemic status | An equivalent regular classical formulation with foundational extensions to statistical mechanics and quantization; constrained and dissipative systems require additional structure |

## Central claim

Hamilton reorganized regular Lagrangian dynamics as first-order flow in coordinates and conjugate momenta and linked dynamics to his earlier characteristic-function methods in optics. With

$$
p_i=\frac{\partial L}{\partial\dot q_i},
\qquad
H(q,p,t)=\sum_i p_i\dot q_i-L,
$$

the equations of motion become

$$
\dot q_i=\frac{\partial H}{\partial p_i},
\qquad
\dot p_i=-\frac{\partial H}{\partial q_i}.
$$

The transformation is more than renaming energy: it places $q_i$ and $p_i$ on equal canonical footing, represents evolution as a phase-space flow, and makes generators, Poisson brackets and canonical transformations central. Modern symplectic language is a later mathematical reconstruction, not Hamilton's own terminology.

## Historical problem

Before the focal discovery (1834–1835 Hamiltonian dynamics synthesis), the case confronted a linked set of pressures: Generalized-coordinate equations organize constrained motion; Optical systems described by characteristic functions. The pathways `R-DIRECT-TRAJECTORY-INTEGRATION`, `R-CONFIGURATION-VELOCITY-ONLY`, `R-OPTICS-DYNAMICS-SEPARATION` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Hamiltonian mechanics, phase space, canonical transformations, Hamilton–Jacobi theory, and dynamical generators was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-LAGRANGIAN-FOUNDATION` | 1788 onward | Generalized-coordinate equations organize constrained motion | Configuration–velocity dynamics becomes systematic |
| `TS-HAMILTON-OPTICS` | 1827–1833 | Optical systems described by characteristic functions | Rays generated through derivatives of one scalar function |
| `TS-HAMILTON-DYNAMICS` | 1834–1835 | Optical method transferred to mechanics | Canonical first-order equations and principal function emerge |
| `TS-JACOBI` | 1836–1837 | Hamilton's partial-differential method systematized | Hamilton–Jacobi theory connects dynamics and canonical transformations |
| `TS-STATISTICAL-MECHANICS` | late nineteenth century | Ensembles occupy spaces of canonical states | Phase-space volume and Hamiltonian flow organize probability |
| `TS-QUANTIZATION` | 1920s onward | Classical canonical variables become noncommuting observables | Poisson-bracket structure guides canonical quantization |

## Knowledge assets

- `A-LAGRANGIAN-MECHANICS`: generalized-coordinate dynamics and canonical momenta.
- `A-LEGENDRE-TRANSFORM`: exchange of velocity variables for conjugate momenta.
- `A-HAMILTON-OPTICS`: characteristic functions generating ray systems.
- `A-VARIATIONAL-ACTION`: path functionals and endpoint derivatives.
- `A-PARTIAL-DIFFERENTIAL-EQUATIONS`: functions whose complete integrals encode solution families.
- `A-CONSERVATION-ENERGY`: a distinguished scalar that often, but not always, coincides with $H$.

## Alternative, incomplete, or superseded pathways

### `R-DIRECT-TRAJECTORY-INTEGRATION`

- **What it is:** A strategy that treats solving mechanics as direct integration of Newtonian or Lagrangian ordinary differential equations for each trajectory, without seeking a generating function whose derivatives encode whole families of solutions.
- **Proposed/active period:** seventeenth century–1833.
- **Core assumption:** Individual trajectories are the primary and sufficient mathematical objects.
- **Why reasonable at the time:** Initial-value equations directly predict positions and velocities and had solved major celestial and terrestrial problems.
- **Successful scope:** Integrable few-body systems, perturbative or numerical trajectories and practical prediction.
- **Anomaly or limitation:** It does not expose transformations between complete families of trajectories or unify optics and dynamics through one partial differential structure.
- **Repair program:** Search for characteristic functions, complete integrals and transformations that encode many solutions at once.
- **Discriminator:** Derivatives of Hamilton's principal function generate canonical momenta and evolving trajectories from a single solution of the Hamilton–Jacobi equation.
- **Outcome:** Retained as numerical and direct solution practice; no longer the only architecture of mechanics.
- **Retained structure:** Initial-value prediction and all correctly integrated trajectories.

### `R-CONFIGURATION-VELOCITY-ONLY`

- **What it is:** The complete Lagrangian description $L(q,\dot q,t)$ treated as the final natural state representation, with momenta used only as derived bookkeeping rather than independent canonical coordinates.
- **Proposed/active period:** 1788–1833.
- **Core assumption:** Configuration and velocity space is sufficient for every structural question in mechanics.
- **Why reasonable at the time:** Euler–Lagrange equations already handled generalized coordinates and constraints powerfully.
- **Successful scope:** Regular classical dynamics, variational derivations and constrained motion.
- **Anomaly or limitation:** Canonical transformations, phase-space invariants, ensemble flow and later quantization are less transparent.
- **Repair program:** Legendre-transform velocities into momenta and seek symmetric first-order evolution equations.
- **Discriminator:** Hamilton equations reproduce Lagrange trajectories while revealing canonical generators and phase-space structure.
- **Outcome:** Retained as an equivalent formulation; bounded as the sole preferred representation.
- **Retained structure:** Lagrangian, action, generalized coordinates and Euler–Lagrange equations.

### `R-OPTICS-DYNAMICS-SEPARATION`

- **What it is:** The view that geometrical optics and particle mechanics are mathematically analogous only in isolated examples, with optical characteristic functions and mechanical trajectories belonging to separate calculational theories.
- **Proposed/active period:** seventeenth century–1833.
- **Core assumption:** No single generating-function method organizes both ray systems and dynamical systems.
- **Why reasonable at the time:** Light and material bodies had different ontologies, equations and experimental domains.
- **Successful scope:** Independent development of geometrical optics and analytical mechanics.
- **Anomaly or limitation:** Fermat-type optical variation and mechanical action displayed increasingly parallel structures.
- **Repair program:** Hamilton developed characteristic functions for optical systems and then transferred the method to dynamics.
- **Discriminator:** The Hamilton–Jacobi equation and eikonal equation share a generating-function architecture, with rays or trajectories normal to action surfaces.
- **Outcome:** Superseded as a mathematical separation, while the physical domains remain distinct.
- **Retained structure:** Domain-specific optical and mechanical observables.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1834–1835 Hamiltonian dynamics synthesis). The proposed/active period is stored in each pathway record.

| Pathway | Repair strategy | Limitation | Retained content |
|---|---|---|---|
| Direct trajectory integration | Integrate each orbit separately | Hides generating functions and families of solutions | Initial-value prediction |
| Configuration–velocity only | Use $L(q,\dot q,t)$ as final representation | Canonical and phase-space structure remains implicit | Full Lagrangian mechanics |
| Optics–dynamics separation | Develop two independent calculi | Misses common characteristic-function form | Domain-specific laws |
| **Discovery/current: Hamiltonian canonical mechanics** | Legendre transform to phase space and generator flow | Regularity and constraint qualifications required | Canonical foundation of modern dynamics |

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-LAGRANGIAN-MECHANICS`, `A-LEGENDRE-TRANSFORM`, `A-HAMILTON-OPTICS`, `A-VARIATIONAL-ACTION`, `A-PARTIAL-DIFFERENTIAL-EQUATIONS`, `A-CONSERVATION-ENERGY`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-DIRECT-TRAJECTORY-INTEGRATION` | A strategy that treats solving mechanics as direct integration of Newtonian or Lagrangian ordinary differential equations for each trajectory, without seeking a generating function whose derivatives encode whole families of solutions. | See the full pathway record above. |
| `R-CONFIGURATION-VELOCITY-ONLY` | The complete Lagrangian description $L(q,\dot q,t)$ treated as the final natural state representation, with momenta used only as derived bookkeeping rather than independent canonical coordinates. | See the full pathway record above. |
| `R-OPTICS-DYNAMICS-SEPARATION` | The view that geometrical optics and particle mechanics are mathematically analogous only in isolated examples, with optical characteristic functions and mechanical trajectories belonging to separate calculational theories. | See the full pathway record above. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “Which trajectory solves these equations?” becomes “Which generator or principal function encodes all trajectories?”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

For a regular Lagrangian, define

$$
p_i=\frac{\partial L}{\partial\dot q_i}.
$$

Regularity means the Hessian

$$
W_{ij}=\frac{\partial^2L}{\partial\dot q_i\partial\dot q_j}
$$

is invertible, so $\dot q_i$ can be written in terms of $(q,p,t)$. The Legendre transform is

$$
H(q,p,t)=\sum_i p_i\dot q_i-L(q,\dot q,t).
$$

Differentiating,

$$
dH
=\sum_i\dot q_i\,dp_i
-\sum_i\dot p_i\,dq_i
-\frac{\partial L}{\partial t}\,dt,
$$

where the Euler–Lagrange relation $\dot p_i=\partial L/\partial q_i$ has been used. Comparing coefficients yields

$$
\dot q_i=\frac{\partial H}{\partial p_i},
\qquad
\dot p_i=-\frac{\partial H}{\partial q_i},
\qquad
\frac{\partial H}{\partial t}=-\frac{\partial L}{\partial t}.
$$

For any phase-space function $f(q,p,t)$, define the Poisson bracket

$$
\{f,g\}
=\sum_i\left(
\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i}
-\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}
\right).
$$

Then evolution is generated by $H$:

$$
\frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t}.
$$

Hamilton's principal function $S(q,t)$ satisfies the modern Hamilton–Jacobi equation

$$
H\left(q,\frac{\partial S}{\partial q},t\right)
+\frac{\partial S}{\partial t}=0,
\qquad
p_i=\frac{\partial S}{\partial q_i}.
$$

The equation turns trajectory finding into a partial differential problem. In semiclassical quantum mechanics, the phase $e^{iS/\hbar}$ exposes a later structural bridge, but Hamilton did not possess the quantum interpretation.

#### Self-contained derivation spine

Begin with the differential of the Lagrangian,

$$
dL
=\sum_i\frac{\partial L}{\partial q_i}dq_i
+\sum_i p_i\,d\dot q_i
+\frac{\partial L}{\partial t}dt.
$$

For $H=\sum_i p_i\dot q_i-L$,

$$
dH
=\sum_i\dot q_i\,dp_i
+\sum_i p_i\,d\dot q_i-dL.
$$

The $p_i\,d\dot q_i$ terms cancel. Along an Euler–Lagrange trajectory, $\partial L/\partial q_i=\dot p_i$, giving

$$
dH
=\sum_i\dot q_i\,dp_i
-\sum_i\dot p_i\,dq_i
-\frac{\partial L}{\partial t}dt.
$$

Because $H$ is now regarded as $H(q,p,t)$, its ordinary differential is

$$
dH
=\sum_i\frac{\partial H}{\partial q_i}dq_i
+\sum_i\frac{\partial H}{\partial p_i}dp_i
+\frac{\partial H}{\partial t}dt.
$$

Matching independent coefficients yields Hamilton's equations and $\partial H/\partial t=-\partial L/\partial t$. The regularity condition on the velocity Hessian is what permits the change of variables; without it, matching coefficients after eliminating $\dot q$ is not valid.

For a phase-space function $f(q,p,t)$, the chain rule gives

$$
\frac{df}{dt}
=\sum_i\left(
\frac{\partial f}{\partial q_i}\dot q_i
+\frac{\partial f}{\partial p_i}\dot p_i
\right)+\frac{\partial f}{\partial t}.
$$

Substituting Hamilton's equations produces

$$
\frac{df}{dt}=\{f,H\}+\frac{\partial f}{\partial t}.
$$

Thus $H$ is a generator, not merely a renamed energy.

The Hamilton–Jacobi equation follows from seeking a canonical transformation generated by $S(q,P,t)$ for which the transformed Hamiltonian vanishes. With

$$
p_i=\frac{\partial S}{\partial q_i},
\qquad
K=H+\frac{\partial S}{\partial t}=0,
$$

one obtains

$$
H\left(q,\frac{\partial S}{\partial q},t\right)
+\frac{\partial S}{\partial t}=0.
$$

A complete integral containing $n$ constants $P_i$ generates a family of trajectories; derivatives $\partial S/\partial P_i$ provide the conjugate constants.

| Logical role | Content |
|---|---|
| Assumed | A regular Lagrangian and Euler–Lagrange dynamics |
| Defined | Canonical momentum, Legendre transform and Poisson bracket |
| Derived | Hamilton equations and generator form of time evolution |
| Additional construction | Hamilton–Jacobi equation from a canonical transformation with $K=0$ |

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** “Which trajectory solves these equations?” becomes “Which generator or principal function encodes all trajectories?”

- `P-02` — **Permit a new representation, ontology, or mechanism:** Phase space, conjugate momentum, Poisson brackets and canonical transformations become primary ontology-like structures

- `P-03` — **Make the new structure generative:** Energy-like regularities become a function that generates the full phase-space flow

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Hamiltonian mechanics, phase space, canonical transformations, Hamilton–Jacobi theory, and dynamical generators). The case-specific unification was: Optics, particle motion, statistical ensembles and later quantization share canonical generator structure. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Energy-like regularities become a function that generates the full phase-space flow

- `P-04` — **Unify previously separated domains or phenomena:** Optics, particle motion, statistical ensembles and later quantization share canonical generator structure

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: All regular Lagrangian and Newtonian trajectories are retained under the Legendre transformation. Its quantitative or otherwise discriminating test strategy is: A proposed Hamiltonian generates explicit flows, invariants, perturbations and measurable trajectories. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** All regular Lagrangian and Newtonian trajectories are retained under the Legendre transformation

- `P-06` — **Prioritize discriminating tests:** A proposed Hamiltonian generates explicit flows, invariants, perturbations and measurable trajectories

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | “Which trajectory solves these equations?” becomes “Which generator or principal function encodes all trajectories?” | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Phase space, conjugate momentum, Poisson brackets and canonical transformations become primary ontology-like structures | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Energy-like regularities become a function that generates the full phase-space flow | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Optics, particle motion, statistical ensembles and later quantization share canonical generator structure | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | All regular Lagrangian and Newtonian trajectories are retained under the Legendre transformation | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | A proposed Hamiltonian generates explicit flows, invariants, perturbations and measurable trajectories | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-HAMILTONIAN-MECHANICS-1834` |
| Focal date | 1834–1835 Hamiltonian dynamics synthesis |
| Central claim | Hamilton reorganized regular Lagrangian dynamics as first-order flow in coordinates and conjugate momenta and linked dynamics to his earlier characteristic-function methods in optics. With $$ p_i=\frac{\partial L}{\partial\dot q_i}, \qquad H(q,p,t)=\sum_i p_i\dot q_i-L, $$ the equations of motion become $$ \dot q_i=\frac{\partial H}{\partial p_i}, \qquad \dot p_i=-\frac{\partial H}{\partial q_i}. $$ The transformation is more than renaming energy: it places $q_i$ and $p_i$ on equal canonical footing, represents evolution as a phase-space flow, and makes generators, Poisson brackets and canonical transformations central. Modern symplectic language is a later mathematical reconstruction, not Hamilton's own terminology. |
| Domain | Hamiltonian mechanics, phase space, canonical transformations, Hamilton–Jacobi theory, and dynamical generators |
| Epistemic status | An equivalent regular classical formulation with foundational extensions to statistical mechanics and quantization; constrained and dissipative systems require additional structure |
| Generative role | Energy-like regularities become a function that generates the full phase-space flow |
| Retained structure | All regular Lagrangian and Newtonian trajectories are retained under the Legendre transformation |

Key formal relations, consolidated from the derivation above:

$$
p_i=\frac{\partial L}{\partial\dot q_i}.
$$

$$
W_{ij}=\frac{\partial^2L}{\partial\dot q_i\partial\dot q_j}
$$

$$
H(q,p,t)=\sum_i p_i\dot q_i-L(q,\dot q,t).
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-HAMILTON-01` — Conical refraction in biaxial crystals

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION`.
- **Prediction date and authorship:** Hamilton predicted internal and external conical refraction in 1832 from Fresnel's wave-surface construction; Humphrey Lloyd observed the effect shortly afterward. This optics result immediately preceded Hamilton's 1834–1835 canonical mechanics and exemplifies the same characteristic-function style, but it is not a prediction extracted from $H(q,p)$ alone.
- **Construction-data independence:** ordinary double refraction and Fresnel's biaxial-crystal surface were inputs; a narrow ray becoming a luminous cone or ring on an optic axis was the new output.
- **Derivation provenance:** `HISTORICAL-RECONSTRUCTION` in geometrical language.

For a fixed optical frequency, admissible wave-normal endpoints form Fresnel's two-sheeted surface. At a generic smooth point the group/ray direction is its unique normal,

$$
\mathbf v_g=\nabla_{\mathbf k}\omega(\mathbf k).
$$

At a conical singularity on a biaxial optic axis, the local surface has a cone rather than a unique tangent plane. Consequently $\nabla_{\mathbf k}\omega$ has a one-parameter family of limiting directions. A single incident direction therefore maps to a cone of rays; a screen cuts that cone in a bright ring.
- **Observable discriminator and outcome:** a point-like incident beam aligned with the appropriate optic axis should not merely split into two rays. Lloyd observed the predicted ring, a particularly clean example of mathematical structure revealing an unsuspected phenomenon.

## Validation and explanatory gains

Hamilton equations reproduce all regular Lagrangian trajectories. For $H=p^2/(2m)+V(q)$, they give $\dot q=p/m$ and $\dot p=-\nabla V$, hence Newton's equation. Canonical transformations preserve the Hamiltonian form; Poisson brackets identify generators; phase-space flow supports Liouville's theorem and statistical ensembles; action–angle variables organize integrable systems and perturbation theory.

The framework also supplied correspondence clues for quantum theory. Replacing Poisson brackets schematically by commutators,

$$
\{f,g\}\longrightarrow\frac{1}{i\hbar}[\hat f,\hat g],
$$

helped construct canonical quantization. This is a structural correspondence, not a universally valid algorithm for all classical observables or constrained systems.

## Limitations and retained status

The elementary Legendre transform fails for singular Lagrangians, including gauge theories, because not all velocities determine independent momenta. Dirac–Bergmann constraint methods or reduced phase spaces are then required. The Hamiltonian need not equal physical energy when coordinates or Lagrangians depend explicitly on time, when velocity-dependent interactions occur, or in generally covariant systems where the canonical Hamiltonian can be constraint-dominated.

Ordinary Hamiltonian flow is conservative and volume-preserving; friction and open-system dynamics require extensions. Canonical coordinates are not unique, and phase-space points can include gauge redundancy. Quantization is not obtained simply by replacing every Poisson bracket with a commutator without ordering, domain and anomaly issues. Hamiltonian mechanics remains foundational, not ultimate or universally simplest.

## Extended historical investigation

Hamiltonian mechanics is often described as “the same mechanics with $H=T+V$.” That is inadequate. $H=T+V$ holds for an important class of natural conservative systems, but the general definition is a Legendre transform. The discovery gain is the canonical architecture: states occupy a $2n$-dimensional space, evolution is a first-order flow, functions generate transformations, and one principal function can encode a family of solutions.

Hamilton's route through optics is central. His characteristic-function optics did not merely inspire a metaphor; it supplied a mathematical method he explicitly adapted to dynamics. Later wave mechanics made the optics–mechanics analogy deeper, but one should not retroactively attribute Schrödinger's or Feynman's quantum interpretations to Hamilton.

Worked example: for the harmonic oscillator,

$$
L=\frac12m\dot q^2-\frac12m\omega^2q^2,
\qquad
p=m\dot q,
$$

so

$$
H=\frac{p^2}{2m}+\frac12m\omega^2q^2.
$$

Hamilton's equations give

$$
\dot q=\frac{p}{m},
\qquad
\dot p=-m\omega^2q,
$$

and phase-space trajectories are ellipses of constant $H$. The same motion appears as a sinusoidal coordinate trajectory in Newtonian form, a stationary configuration-space path in Lagrangian form, and a closed canonical flow in Hamiltonian form. The different representations expose different discovery opportunities.

## AI-oriented inference notes

- Define $H$ by Legendre transform before identifying it with energy.
- Test Hessian regularity; singular systems require constraints rather than naive inversion.
- Keep classical Poisson brackets distinct from quantum commutators while recording their correspondence.
- Treat canonical transformations as structure-preserving maps, not arbitrary coordinate changes.
- Label symplectic and modern phase-space language as later reconstruction when discussing Hamilton's original papers.
- Link Hamilton's optics to Fermat and his dynamics to Lagrange, statistical mechanics, quantum mechanics and QFT.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-LAGRANGIAN-MECHANICS --enables--> D-HAMILTONIAN-MECHANICS-1834
A-LEGENDRE-TRANSFORM --maps--> CONFIGURATION-VELOCITY-SPACE
A-LEGENDRE-TRANSFORM --produces--> PHASE-SPACE
A-HAMILTON-OPTICS --transfers-method-to--> D-HAMILTONIAN-MECHANICS-1834
HAMILTONIAN --generates--> PHASE-SPACE-FLOW
POISSON-BRACKET --expresses--> CANONICAL-EVOLUTION
HAMILTON-PRINCIPAL-FUNCTION --satisfies--> HAMILTON-JACOBI-EQUATION
D-HAMILTONIAN-MECHANICS-1834 --retains--> D-LAGRANGIAN-MECHANICS-1788
D-HAMILTONIAN-MECHANICS-1834 --provides-phase-space-for--> D-CLASSICAL-STATISTICAL-MECHANICS-1859-1902
D-HAMILTONIAN-MECHANICS-1834 --provides-formal-structure-for--> D-QUANTUM-MECHANICS-1925-1927
D-HAMILTONIAN-MECHANICS-1834 --prefigures--> CANONICAL-QUANTIZATION
D-HAMILTONIAN-MECHANICS-1834 --instantiates--> P-01
```

## Sources

- Trinity College Dublin, [Hamilton's *On a General Method in Dynamics* and related papers](https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Dynamics/).
- William Rowan Hamilton, [*On a General Method in Dynamics* (1834 PDF)](https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Dynamics/GenMeth.pdf).
- William Rowan Hamilton, [*Second Essay on a General Method in Dynamics* (1835 PDF)](https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Dynamics/SecEssay.pdf).
- MIT OpenCourseWare, [Classical Mechanics III lecture notes](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/pages/lecture-notes/).
- MIT OpenCourseWare, [Introduction to Hamiltonian Mechanics](https://live.ocw.mit.edu/courses/8-223-classical-mechanics-ii-january-iap-2017/09ab68ae8e7987debc025892e00c0f1f_MIT8_223IAP17_Lec15.pdf).
