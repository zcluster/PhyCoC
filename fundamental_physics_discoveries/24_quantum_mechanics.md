# Quantum Mechanics: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-QM-25` |
| Central node | `D-QUANTUM-MECHANICS-1925-1927` |
| Focal discovery date | 1925–1927 |
| Main contributors | Heisenberg, Schrödinger, Born, Dirac, Jordan, Pauli, de Broglie, Bohr and many others |
| Domain | Microscopic states, observables, and probabilities |
| Epistemic status | Foundational nonrelativistic quantum framework; relativistic quantum field theory extends it |

## Central claim

Quantum mechanics replaced classical phase-space trajectories with states in Hilbert space, noncommuting observables, unitary evolution, and probabilistic measurement outcomes. Matrix and wave formulations were shown to be equivalent representations.

## Historical problem

By 1925, the Bohr–Sommerfeld orbit rules captured some atomic spectra but required system-specific quantum conditions and did not provide a general account of transitions and intensities. De Broglie's matter-wave proposal offered a different starting point, while spectroscopy supplied discrete frequencies that any successor theory had to preserve. Heisenberg's 1925 move was to organize observable transition quantities without assigning every electron a classical orbit; Schrödinger's 1926 wave equation instead made bound-state modes central. The two formalisms then had to be related, and Born's probabilistic scattering interpretation changed what a wave amplitude meant. The 1925–1927 framework was a sequence of competing and converging proposals, not one pre-existing package of Hilbert-space axioms or an inference from later quantum-field successes.

## Time slices

| Node | Period | Crisis/asset | Transition |
|---|---:|---|---|
| `TS-OLD-QUANTUM` | 1900–1924 | Quanta explain selected spectra | Ad hoc orbit rules proliferate |
| `TS-MATTER-WAVES` | 1924 | de Broglie assigns wavelength to matter | Wave dynamics sought |
| `TS-MATRIX` | 1925 | Heisenberg uses observable transitions | Noncommuting algebra enters |
| `TS-WAVE` | 1926 | Schrödinger equation developed | Bound-state spectra derived |
| `TS-BORN` | 1926 | \(|\psi|^2\) interpreted probabilistically | Deterministic amplitude, stochastic outcomes |
| `TS-FORMALIZATION` | 1927 onward | Uncertainty, transformations, Hilbert space | General framework consolidates |

## Knowledge assets

- `A-PLANCK-EINSTEIN`: energy quanta.
- `A-ATOMIC-SPECTRA`: discrete frequencies.
- `A-DE-BROGLIE`: \(\lambda=h/p\).
- `A-HAMILTONIAN-MECHANICS`: energy as generator of time evolution.
- `A-LINEAR-ALGEBRA`: eigenvalues and transformations.

## Alternative, incomplete, or superseded pathways

### `R-BOHR-SOMMERFELD`

- **What it is:** The old quantum theory that preserves classical orbits and phase-space motion but imposes discrete action-integral conditions to select allowed trajectories and energies.
- **Proposed/active period:** 1913–1924.
- **Scope:** Hydrogen and selected integrable systems.
- **Limitation:** Multi-electron atoms and transition intensities.
- **Outcome:** Quantization conditions replaced by operators and boundary-value problems.

### `R-CLASSICAL-DEFINITE-TRAJECTORIES`

- **What it is:** A classical state model in which every particle possesses one exact position and momentum at each time and follows a unique continuous trajectory determined by local equations of motion.
- **Proposed/active period:** seventeenth century–1924.
- **Limitation:** Interference, discrete spectra, and uncertainty cannot generally be represented by simultaneous exact \(x,p\).
- **Outcome:** Classical trajectories retained in semiclassical and decohered limits.

### `R-MATRIX-MECHANICS-AS-UNIQUE-ONTOLOGY`

- **What it is:** The view that Heisenberg's noncommuting transition matrices are not merely a representation but the uniquely fundamental formulation, with wave mechanics a rival theory.
- **Proposed/active period:** 1925.
- **Outcome:** Schrödinger/Dirac equivalence showed representation unity; matrix structure retained.

### `R-LITERAL-THREE-DIMENSIONAL-MATTER-WAVE`

- **What it is:** The interpretation of every many-particle wavefunction as an ordinary material wave propagating only in physical three-dimensional space.
- **Proposed/active period:** 1923–1926.
- **Outcome:** Configuration-space structure and Born probabilities make the simple reading incomplete.

### Pathway comparison ledger

**Chronology rule:** Old quantum theory and classical trajectories predate the 1925–1927 reconstruction; matrix-only and literal matter-wave interpretations emerge during that interval, before the later formal and probabilistic synthesis. The proposed/active period is stored in each pathway record.

| Incomplete route | Strength | Repair/failure | Retained structure |
|---|---|---|---|
| Bohr–Sommerfeld action quantization | Hydrogen and selected integrable systems | No invariant general rule for chaotic/many-electron motion | Discrete spectra and correspondence |
| Matrix mechanics alone as unfamiliar algebra | Directly used observed transitions | Schrödinger representation showed equivalent dynamics | Operator noncommutativity |
| Wave mechanics as literal material wave | Intuitive interference | Configuration-space waves and Born statistics resist simple 3-D matter-wave reading | Wavefunction evolution |
| Classical exact phase-space trajectories | Assign simultaneous exact \(x,p\) through deterministic local motion | Interference, uncertainty, and contextual statistics | Retained only in semiclassical/decohered regimes |
| **Discovery/current: quantum mechanics** | States, amplitudes, noncommuting observables, and Born probabilities generate outcomes | Spectra, interference, scattering, chemistry, and precision tests | Retained operational framework; interpretation open |

Classical trajectories are not universally “proven nonexistent.” Bohmian formulations use trajectories with nonlocal dynamics, and semiclassical paths approximate many experiments. What fails is the unrestricted classical phase-space model that assigns simultaneous context-independent values while reproducing all quantum statistics. Likewise, Copenhagen was not the only theory left standing; interpretations share operational predictions while differing about ontology and measurement. The superseded node must be specific enough to avoid turning empirical success into an unsupported metaphysical conclusion.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-PLANCK-EINSTEIN`, `A-ATOMIC-SPECTRA`, `A-DE-BROGLIE`, `A-HAMILTONIAN-MECHANICS`, `A-LINEAR-ALGEBRA`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-BOHR-SOMMERFELD` | The old quantum theory that preserves classical orbits and phase-space motion but imposes discrete action-integral conditions to select allowed trajectories and energies. | Multi-electron atoms and transition intensities. |
| `R-CLASSICAL-DEFINITE-TRAJECTORIES` | A classical state model in which every particle possesses one exact position and momentum at each time and follows a unique continuous trajectory determined by local equations of motion. | Interference and discrete spectra supplied earlier pressure; the 1927 uncertainty relation later sharpened the conflict with simultaneous exact \(x,p\). |
| `R-MATRIX-MECHANICS-AS-UNIQUE-ONTOLOGY` | The view that Heisenberg's noncommuting transition matrices are not merely a representation but the uniquely fundamental formulation, with wave mechanics a rival theory. | Schrödinger's equivalence results showed that the rival calculations could represent the same quantum structure, so exclusivity added no explanatory necessity. |
| `R-LITERAL-THREE-DIMENSIONAL-MATTER-WAVE` | The interpretation of every many-particle wavefunction as an ordinary material wave propagating only in physical three-dimensional space. | A joint wavefunction for several particles depends on all their coordinates, not one ordinary three-dimensional material density. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Trajectory prediction reframed as amplitude prediction. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

The transformation is recorded in two layers: the Chain of Concepts reconstructs the representational changes from orbit rules to states and operators, and the formal consolidation states the resulting predictive framework without repeating that search history. The underlying concept-evolution graph branches into matrix and wave routes before they merge; no single linear chain is implied.

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. The graph orders resources and moves from 1924 through 1927 through admissible branches; it is not a transcript of a founder's or a model's hidden reasoning, nor a claim that the surviving interpretation was uniquely determined. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-QM-01` | Old quantum theory retains classical orbits and appends system-specific quantization rules. |
| `CS-QM-02` | The microscopic state representation is opened for revision while spectra and correspondence remain constraints. |
| `CS-QM-03` | Observable transitions are represented by indexed amplitude arrays. |
| `CS-QM-04` | Matrix mechanics treats noncommuting observables as kinematic structure. |
| `CS-QM-05` | Wave mechanics represents states by linearly evolving amplitudes and obtains spectra as eigenvalues. |
| `CS-QM-06` | Born's scattering interpretation connects wave amplitudes to probabilities of observed outcomes. |
| `CS-QM-07` | Matrix mechanics and probabilistically interpreted wave mechanics are recognized as representations of a shared state-and-operator framework. |
| `CS-QM-08` | Quantum prediction is organized by states, operators, compatible observables, and uncertainty constraints. |

##### `CT-QM-01`: `CS-QM-01` → `CS-QM-02` — Diagnose orbit quantization as a rule-selection problem

- **Input model:** Bohr–Sommerfeld theory retains classical electron orbits and selects allowed motions with additional action-quantization conditions.
- **Pressure:** Quantization rules work for selected integrable systems but proliferate without a general invariant prescription for multi-electron spectra and transition intensities.
- **Protected structure:** Discrete spectral frequencies, Planck's constant, energy conservation, Hamiltonian methods, and the correspondence with successful classical limits.
- **Hidden assumption:** Exact classical orbits must remain the fundamental state description even when they are neither directly observed nor governed by a general quantization rule.
- **Operation / change type:** `reweighting` — Localize the failure in the orbit representation rather than adding another system-specific condition to the old quantum theory.
- **Output model:** The microscopic state representation becomes open, while observed spectral relations and classical correspondence remain hard constraints.
- **Local justification:** The anomalies and rule proliferation were visible by 1924; no later Bell, decoherence, or quantum-information concepts are required.
- **Cost/uncertainty:** Abandoning orbit primacy does not yet specify a replacement and does not prove that every possible trajectory ontology is impossible.
- **Branch status:** `selected`; multiple replacement representations remain open.
- **Next question:** Which quantities are directly tied to spectral observations and can be used to construct dynamics without unobserved orbits?

##### `CT-QM-02`: `CS-QM-02` → `CS-QM-03` — Re-index mechanics by observable transitions

- **Input model:** Atomic models describe stationary orbits, while experiments record emitted and absorbed transition frequencies and intensities.
- **Pressure:** The theory calculates inaccessible orbital details more confidently than the transition quantities actually compared with spectra.
- **Protected structure:** Ritz combination relations, energy differences, Fourier methods, and the Hamiltonian role of energy in evolution.
- **Hidden assumption:** A theory must first assign a continuous classical trajectory before it can represent transitions between stationary states.
- **Operation / change type:** `representation_shift` — Replace orbit variables with arrays whose two indices label initial and final states and whose time dependence follows observed transition frequencies.
- **Output model:** A mechanics of transition amplitudes is constructed directly from observable spectral organization.
- **Local justification:** Heisenberg's 1925 reorientation used contemporary spectroscopy, correspondence reasoning, and the multiplication rule inherited from Fourier components.
- **Cost/uncertainty:** The new arrays are formally unfamiliar, and restricting construction to observables does not by itself settle what exists between measurements.
- **Branch status:** `selected`; the wave-mechanical branch begins independently from the same open-state pressure.
- **Next question:** What algebra results when transition arrays are multiplied according to their intermediate-state indices?

##### `CT-QM-03`: `CS-QM-03` → `CS-QM-04` — Accept noncommuting quantities as kinematic structure

- **Input model:** Transition quantities are represented by indexed arrays, but classical mechanics assumes ordinary commuting numerical variables (x) and (p).
- **Pressure:** Array multiplication depends on order, and the quantum condition organizes the resulting mismatch in products of conjugate quantities.
- **Protected structure:** Hamiltonian equations in correspondence form, spectral predictions, and the classical limit as actions become large relative to (\hbar).
- **Hidden assumption:** Every physical quantity must possess a simultaneously assignable context-independent numerical value and obey commutative multiplication.
- **Operation / change type:** `constraint_change` — Treat noncommutative multiplication as a physical feature of the representation rather than an algebraic defect to be removed.
- **Output model:** Observables become operators or matrices with relations such as ([\hat x,\hat p]=i\hbar).
- **Local justification:** Matrix mechanics and its canonical quantum condition were explicit by 1925–1926 and could be assessed through spectral calculations.
- **Cost/uncertainty:** Noncommutativity changes the formal state description but does not uniquely determine a measurement interpretation or ontology.
- **Branch status:** `selected`; this matrix route later merges with, rather than simply precedes, wave mechanics.
- **Next question:** Is there an alternative continuous representation that generates the same discrete spectra and clarifies the state object?

##### `CT-QM-04`: `CS-QM-02` → `CS-QM-05` — Convert matter-wave and Hamiltonian clues into a wave equation

- **Input model:** De Broglie associates wavelength with momentum, while Hamilton–Jacobi mechanics links action, momentum, and energy.
- **Pressure:** A literal orbit with appended wavelength does not provide a general dynamical law for bound states, interference, or quantized energies.
- **Protected structure:** (\lambda=h/p), classical Hamiltonians, boundary conditions, and the observed discrete energy spectrum.
- **Hidden assumption:** Wave ideas can influence particles only as an auxiliary condition imposed on otherwise classical trajectories.
- **Operation / change type:** `representation_shift` — Seek a linear wave equation whose stationary modes are eigenfunctions of the classical energy expression promoted to a differential operator.
- **Output model:** Schrödinger wave mechanics makes amplitudes evolve linearly and obtains discrete energies as boundary-value eigenvalues.
- **Local justification:** De Broglie's 1924 relation, Hamiltonian optics–mechanics analogies, and known spectral constraints supplied the ingredients in 1926.
- **Cost/uncertainty:** The wavefunction's physical meaning is unresolved, especially for many particles where it is defined on configuration space rather than ordinary three-space.
- **Branch status:** `selected`; this is a parallel branch from `CS-QM-02`, not a consequence of accepting matrix noncommutativity.
- **Next question:** Are wave mechanics and matrix mechanics rival physical theories or different representations of one structure?

##### `CT-QM-05`: `CS-QM-05` → `CS-QM-06` — Interpret scattering amplitudes through outcome probabilities

- **Input model:** Schrödinger's complex wavefunction evolves deterministically, but a simple literal material-wave reading is strained by scattering and many-particle configuration space.
- **Pressure:** Experiments register localized outcomes and statistical frequencies, while the wave amplitude determines interference and scattering structure.
- **Protected structure:** Linear wave evolution, superposition, interference phases, and normalization of outcome probabilities.
- **Hidden assumption:** The wavefunction must describe a continuously distributed material substance in ordinary three-dimensional space.
- **Operation / change type:** `reinterpretation` — Interpret squared amplitude as the probability density for possible outcomes rather than as literal material density.
- **Output model:** Deterministic amplitude evolution is connected to probabilistic measurement statistics through the Born rule.
- **Local justification:** Born's 1926 scattering analysis supplied the probabilistic interpretation in direct response to the available wave formalism and collision problem.
- **Cost/uncertainty:** The rule does not by itself explain individual outcomes, define measurement dynamics uniquely, or select one quantum interpretation.
- **Branch status:** `selected`; the matrix route remains a parallel formal branch, while literal matter-wave interpretations remain competitors.
- **Next question:** How can this probabilistic wave account and matrix mechanics be expressed within one predictive structure?

##### `CT-QM-06`: `CS-QM-04` + `CS-QM-06` → `CS-QM-07` — Abstract away from matrix-versus-wave representation

- **Input model:** Matrix mechanics and probabilistically interpreted wave mechanics use different mathematical objects yet reproduce overlapping spectral and transition results.
- **Pressure:** Treating them as unrelated theories duplicates successful structure and obscures transformations connecting their state bases.
- **Protected structure:** Eigenvalues, transition amplitudes, Born probabilities, linear superposition, time evolution, and operator composition.
- **Hidden assumption:** The concrete appearance of a representation—an infinite matrix or a wave in coordinates—must itself be the unique physical content.
- **Operation / change type:** `coalescence` — Identify representation-invariant relations and transformations between bases, treating matrices and wavefunctions as realizations of states and operators.
- **Output model:** A shared linear state-and-operator framework connects the matrix and wave accounts without settling their ontology.
- **Local justification:** Schrödinger's early-1926 equivalence argument preceded Born's probabilistic scattering interpretation; the later 1926–1927 Dirac–Jordan transformation theory helped place both calculational routes and outcome probabilities in one framework. These were overlapping developments, not one author's linear deduction.
- **Cost/uncertainty:** Formal equivalence fixes shared predictions but leaves competing ontological and measurement accounts open.
- **Branch status:** `merged`; the matrix and wave branches converge while their interpretive differences remain unresolved.
- **Next question:** How do noncommuting observables constrain the simultaneous sharpness of the outcome distributions they generate?

##### `CT-QM-07`: `CS-QM-07` → `CS-QM-08` — Replace simultaneous classical values with compatible probability constraints

- **Input model:** States generate probability distributions for observables represented by generally noncommuting operators.
- **Pressure:** The commutator prevents arbitrary simultaneous concentration of the position and momentum distributions.
- **Protected structure:** Operator algebra, Born probabilities, state evolution, and controlled recovery of classical behavior in appropriate regimes.
- **Hidden assumption:** A complete instantaneous state must assign exact simultaneous values to every classical phase-space variable.
- **Operation / change type:** `constraint_change` — Use the algebra of observables to derive uncertainty relations and reframe prediction around state-dependent distributions and compatible measurement arrangements.
- **Output model:** Quantum states, amplitudes, noncommuting observables, unitary dynamics, and probabilistic outcomes form one operational framework.
- **Local justification:** The 1925–1927 operator formalism and uncertainty analysis suffice; later no-go theorems are not construction inputs.
- **Cost/uncertainty:** The framework constrains predictions without uniquely resolving collapse, realism, nonlocality, or the classical measurement boundary.
- **Branch status:** `selected`; unresolved interpretations are deferred rather than erased by the operational framework.
- **Next question:** Can this structure be extrapolated consistently across atoms, molecules, scattering, chemistry, and eventually relativistic fields?

#### Formal consolidation

The Dirac notation and general Robertson uncertainty bound below are later compact formulations of this 1925–1927 development, not equations all of its contributors used at the start.

State evolution:

$$
i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle
=\hat H|\psi(t)\rangle.
$$

For one nonrelativistic particle:

$$
i\hbar\frac{\partial\psi}{\partial t}
=\left[
-\frac{\hbar^2}{2m}\nabla^2+V
\right]\psi.
$$

Stationary states satisfy:

$$
\hat H\phi_n=E_n\phi_n.
$$

Born probability for normalized \(\psi\):

$$
P(x\in[a,b])=\int_a^b|\psi(x)|^2dx.
$$

Canonical noncommutation:

$$
[\hat x,\hat p]=i\hbar
$$

implies:

$$
\Delta x\,\Delta p\ge\frac{\hbar}{2}.
$$

Expectation values are:

$$
\langle A\rangle=\langle\psi|\hat A|\psi\rangle.
$$

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Trajectory prediction reframed as amplitude prediction

- `P-02` — **Permit a new representation, ontology, or mechanism:** Superposition and noncommuting observables accepted

- `P-03` — **Make the new structure generative:** Hamiltonians generate spectra and time evolution

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

#### `EG-QM-01` — Extend atomic state mechanics to general bound microscopic systems

- **Source domain:** Atomic transition frequencies, simple bound-state spectra, and the equivalent matrix and wave descriptions constructed from them.
- **Target domain:** Multi-electron atoms, molecules, chemical bonding, and other nonrelativistic bound systems governed by a Hamiltonian.
- **Novel consequence:** The same state-and-operator framework should generate new discrete energies, selection-dependent transition amplitudes, and stable molecular structures without adding orbit-specific quantization rules.
- **Failure condition:** The extension fails for a target system if no Hamiltonian state model with the shared superposition and Born structure can reproduce its reproducible spectrum and transition statistics within the declared nonrelativistic regime.

#### `EG-QM-02` — Extend bound-state amplitudes to scattering and interference statistics

- **Source domain:** Bound-state amplitudes and Born's 1926 scattering analysis in its construction setting.
- **Target domain:** Independently prepared collision potentials, barriers, and diffraction arrangements not used to build the initial wave/scattering rule.
- **Novel consequence:** Evolved amplitudes should determine cross-sections and outcome-frequency patterns, including interference terms that are not separately fitted as classical alternatives.
- **Failure condition:** The extension fails if repeated experiments under controlled preparation yield stable distributions incompatible with the evolved amplitudes and Born rule, after experimental uncertainty and the stated Hamiltonian approximation are accounted for.

The relativistic-field domain is deliberately not folded into these records: failure of fixed-particle nonrelativistic mechanics at particle creation energies motivates a successor framework rather than an unlimited extrapolation of this one.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Hamiltonians generate spectra and time evolution

- `P-04` — **Unify previously separated domains or phenomena:** Waves, particles, spectra, and probability unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Classical mechanics retained as a limit. Its quantitative or otherwise discriminating test strategy is: Spectral values and interference probabilities test the theory. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Classical mechanics retained as a limit

- `P-06` — **Prioritize discriminating tests:** Spectral values and interference probabilities test the theory

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Trajectory prediction reframed as amplitude prediction | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Superposition and noncommuting observables accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Hamiltonians generate spectra and time evolution | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Waves, particles, spectra, and probability unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Classical mechanics retained as a limit | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Spectral values and interference probabilities test the theory | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-QUANTUM-MECHANICS-1925-1927` |
| Focal date | 1925–1927 |
| Central claim | Quantum mechanics replaced classical phase-space trajectories with states in Hilbert space, noncommuting observables, unitary evolution, and probabilistic measurement outcomes. Matrix and wave formulations were shown to be equivalent representations. |
| Domain | Microscopic states, observables, and probabilities |
| Epistemic status | Foundational nonrelativistic quantum framework; relativistic quantum field theory extends it |
| Generative role | Hamiltonians generate spectra and time evolution |
| Retained structure | Classical mechanics retained as a limit |

Key formal relations, consolidated from the derivation above:

$$
i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle
=\hat H|\psi(t)\rangle.
$$

$$
i\hbar\frac{\partial\psi}{\partial t}
=\left[
-\frac{\hbar^2}{2m}\nabla^2+V
\right]\psi.
$$

$$
\hat H\phi_n=E_n\phi_n.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-QM-01` — Barrier penetration and alpha decay

- **Classification:** `EARLY-DERIVED-PREDICTION`.
- **Prediction date and authorship:** Gamow and, independently, Gurney and Condon applied the new wave mechanics to alpha decay in 1928. Radioactivity was already known; the novel deduction was that a classically trapped particle could escape with a quantitatively energy-sensitive probability.
- **Construction-data independence:** decay energies and lifetimes informed the nuclear application, so this is not a pristine prediction of an unknown phenomenon. Its value lies in the new mechanism and its quantitative scaling.
- **Derivation provenance:** `MODERN-PEDAGOGICAL-DERIVATION` using the WKB approximation.

In a region where $V(x)>E$, the local wave number is imaginary. Writing

$$
\kappa(x)=\frac{\sqrt{2m[V(x)-E]}}{\hbar},
$$

the decaying solution gives the transmission scale

$$
T\approx\exp\left[-2\int_{x_1}^{x_2}\kappa(x)\,dx\right].
$$

For an alpha particle confronting the Coulomb barrier outside a nucleus, the integral decreases sharply as the alpha energy rises. With an assault frequency $\nu$, the decay rate is

$$
\Gamma\sim \nu T,
$$

which explains the enormous lifetime variation behind the Geiger–Nuttall relation.
- **What was new:** classical mechanics requires $T=0$ whenever $E<V$; wave mechanics predicts a nonzero, exponentially controlled escape rate.
- **Historical caution:** this application followed the 1925–1926 formulation. It should not be presented as a result already derived in Heisenberg's or Schrödinger's foundational papers.

## Validation and explanatory gains

Atomic spectra, tunneling, chemical bonds, diffraction of matter, Stern–Gerlach splitting, semiconductor behavior, superconductivity, and precision spectroscopy validate the framework. Classical motion emerges approximately through Ehrenfest relations, stationary phase, and decoherence.

## Limitations and retained status

Nonrelativistic quantum mechanics does not allow particle creation and is not a quantum theory of spacetime. Interpretations disagree about ontology and measurement while sharing empirical structure. Quantum field theory combines quantum principles with special relativity; quantum gravity remains incomplete.

## Extended historical investigation

### Matrix and wave mechanics

Heisenberg constructed arrays of transition quantities tied to observable spectral frequencies. Born and Jordan recognized matrix multiplication, whose noncommutativity was essential. Schrödinger developed wave mechanics from de Broglie ideas. The apparent rivalry was resolved when equivalence was established: different representations encode the same abstract state and operator structure.

In position representation:

$$
\hat x\psi=x\psi,
\qquad
\hat p\psi=-i\hbar\nabla\psi.
$$

Then:

$$
[\hat x,\hat p]\psi
=i\hbar\psi.
$$

The algebra is not measurement disturbance added to classical variables; it is built into the observable structure.

### Uncertainty derivation

For Hermitian observables \(A,B\), define:

$$
\Delta A^2
=\langle(\hat A-\langle A\rangle)^2\rangle.
$$

Set \(|f\rangle=(\hat A-\langle A\rangle)|\psi\rangle\) and \(|g\rangle=(\hat B-\langle B\rangle)|\psi\rangle\). Cauchy–Schwarz gives

$$
\Delta A^2\Delta B^2
=\langle f|f\rangle\langle g|g\rangle
\ge|\langle f|g\rangle|^2.
$$

Writing \(\delta A=\hat A-\langle A\rangle\) and similarly for \(B\), split the product into Hermitian and anti-Hermitian parts:

$$
\langle\delta A\,\delta B\rangle
=\frac12\langle\{\delta A,\delta B\}\rangle
+\frac12\langle[\hat A,\hat B]\rangle.
$$

The anticommutator expectation is real and the commutator expectation is purely imaginary. Hence their squared magnitudes add. Discarding the nonnegative anticommutator contribution yields the Robertson bound:

$$
\Delta A\,\Delta B
\ge
\frac12
\left|
\langle[\hat A,\hat B]\rangle
\right|.
$$

Thus:

$$
\Delta x\,\Delta p\ge\frac{\hbar}{2}.
$$

This constrains state dispersions. Particular measurement protocols add further disturbance relations, but they should not be conflated automatically with preparation uncertainty.

### Two-state systems

A normalized two-state system:

$$
|\psi\rangle
=\alpha|0\rangle+\beta|1\rangle,
\qquad
|\alpha|^2+|\beta|^2=1.
$$

Measurement in this basis yields probabilities:

$$
P(0)=|\alpha|^2,
\qquad
P(1)=|\beta|^2.
$$

Relative phase affects measurements in another basis even when the above probabilities are unchanged. This shows why a quantum state is not merely an ordinary probability distribution over preexisting basis values.

### Time evolution and conservation

If \(\hat H\) is time independent:

$$
|\psi(t)\rangle
=e^{-i\hat Ht/\hbar}|\psi(0)\rangle.
$$

Evolution is unitary:

$$
\langle\psi(t)|\psi(t)\rangle
=\langle\psi(0)|\psi(0)\rangle.
$$

An observable with no explicit time dependence is conserved when:

$$
[\hat A,\hat H]=0.
$$

This is the quantum version of symmetry-linked conservation structure.

### Tunneling as a nonclassical prediction

For a rectangular barrier of height \(V_0>E\) occupying \(0<x<a\), define

$$
k=\frac{\sqrt{2mE}}{\hbar},
\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
$$

The stationary Schrödinger equation has the regional solutions

$$
\psi_I=e^{ikx}+R_a e^{-ikx},
\qquad
\psi_{II}=C e^{\kappa x}+D e^{-\kappa x},
\qquad
\psi_{III}=T_a e^{ikx}.
$$

Continuity of \(\psi\) and \(d\psi/dx\) at both \(x=0\) and \(x=a\) gives four linear equations for \(R_a,C,D,T_a\). Eliminating the internal amplitudes produces the flux transmission probability

$$
\mathcal T
=\left[
1+\frac{V_0^2\sinh^2(\kappa a)}{4E(V_0-E)}
\right]^{-1}.
$$

For an opaque barrier, \(\kappa a\gg1\), \(\sinh^2(\kappa a)\simeq e^{2\kappa a}/4\), so

$$
\mathcal T
\simeq
\frac{16E(V_0-E)}{V_0^2}e^{-2\kappa a}.
$$

Thus the often-quoted scaling

$$
\mathcal T\sim e^{-2\kappa a},
\qquad
\kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}.
$$

Tunneling explains alpha decay, scanning tunneling microscopy, Josephson effects, and reaction rates. It is not a particle borrowing energy in violation of conservation; the stationary state has definite total energy.

| Logical role | Content |
|---|---|
| State-space input | Complex Hilbert space, normalized states, and Hermitian observables. |
| Dynamical input | Linear Schrödinger evolution and boundary matching. |
| Mathematical theorem | Cauchy–Schwarz plus noncommutativity gives the uncertainty bound. |
| Derived nonclassical prediction | Nonzero barrier transmission for finite width and height. |
| Interpretive caution | Neither uncertainty nor tunneling licenses temporary energy nonconservation. |

### Measurement, decoherence, and interpretation

Standard calculations combine:

1. unitary state evolution;
2. Born probabilities for outcomes;
3. a specification of measurement observables.

Interpretations disagree about collapse, branching, hidden variables, histories, and ontology. Decoherence explains suppression of interference between environmentally correlated branches:

$$
\rho_{\mathrm{system}}
=\operatorname{Tr}_{\mathrm{environment}}\rho_{\mathrm{total}},
$$

with off-diagonal terms becoming small in a preferred effective basis. It does not by itself select one unique interpretation or solve every formulation of the measurement problem.

### Classical limit

Ehrenfest's theorem:

$$
\frac{d\langle x\rangle}{dt}
=\frac{\langle p\rangle}{m},
$$

$$
\frac{d\langle p\rangle}{dt}
=-\left\langle
\frac{\partial V}{\partial x}
\right\rangle.
$$

For narrow wave packets in slowly varying potentials:

$$
\left\langle V'(x)\right\rangle
\approx V'(\langle x\rangle),
$$

so expectation values follow approximately classical motion. Stationary phase, large actions \(S\gg\hbar\), coarse graining, and decoherence all contribute. There is no single universal “set \(\hbar=0\)” recipe.

### Validation ledger

| Phenomenon | Quantum structure tested |
|---|---|
| Atomic spectra | Hamiltonian eigenvalues |
| Electron/neutron diffraction | Matter-wave amplitudes |
| Stern–Gerlach | Spin quantization and state preparation |
| Tunneling | Evanescent amplitudes |
| Bell violations | Nonclassical joint correlations |
| Lamb shift/\(g-2\) | Quantum-field corrections |
| Superconducting circuits | Macroscopic coherent quantum states |

### Scope

The Schrödinger equation is nonrelativistic and assumes fixed particle number. Relativistic quantum field theory permits creation and annihilation. Quantum gravity is required when spacetime itself cannot be treated classically. These limits do not weaken nonrelativistic quantum mechanics in atoms, molecules, and low-energy matter.

## AI-oriented inference notes

- Separate state uncertainty from generic instrument error.
- Preserve representation equivalence.
- Do not use tunneling language that violates energy conservation.
- Mark interpretation claims separately from empirical formalism.

## Additional quantitative and epistemic notes

### Additional quantitative and epistemic notes

Matrix mechanics began from observable transition frequencies and amplitudes; wave mechanics used a differential equation and continuous wavefunction. Their equivalence showed that representation could change while physical predictions remained. Canonical commutation,

$$
[\hat x,\hat p]=i\hbar,
$$

implies

$$
\Delta x\,\Delta p\ge\frac{\hbar}{2},
$$

through a general variance inequality—not through unavoidable mechanical disturbance alone. Born's rule maps amplitudes to probabilities, while unitary evolution preserves total probability.

The framework explained spectra, chemical bonding, tunneling, and scattering, but its interpretation was contested from the start. Copenhagen-family views were not one perfectly uniform doctrine; Einstein, Schrödinger, de Broglie, Bohm, Everett, and others developed objections or alternatives. Experimental success establishes the operational structure with extraordinary precision, not one unique account of measurement or ontology. Classical mechanics emerges through decoherence, coarse graining, and action scales large relative to \(\hbar\), with additional conditions rather than by setting \(\hbar\) literally to zero in every expression.

## Edge list

```text
A-DE-BROGLIE --contributes-to--> D-WAVE-MECHANICS
A-ATOMIC-SPECTRA --constrains--> D-QUANTUM-MECHANICS-1925-1927
D-MATRIX-MECHANICS --equivalent-to--> D-WAVE-MECHANICS
D-HAMILTONIAN-MECHANICS-1834 --provides-formal-structure-for--> D-QUANTUM-MECHANICS-1925-1927
BORN-RULE --maps--> QUANTUM-STATE
BORN-RULE --maps-to--> OUTCOME-PROBABILITIES
NONCOMMUTATION --implies--> UNCERTAINTY-RELATION
D-QUANTUM-MECHANICS-1925-1927 --supersedes--> R-BOHR-SOMMERFELD
D-QUANTUM-MECHANICS-1925-1927 --retains-limit--> CLASSICAL-MECHANICS
D-QUANTUM-MECHANICS-1925-1927 --is-extended-to-quantized-fields-by--> D-QFT-FIELD-QUANTIZATION-1927
D-QUANTUM-MECHANICS-1925-1927 --instantiates--> P-01
A-ATOMIC-SPECTRA --pressures--> CS-QM-01
CS-QM-01 --revised-by--> CT-QM-01
CT-QM-01 --produces--> CS-QM-02
CS-QM-02 --revised-by--> CT-QM-02
CT-QM-02 --produces--> CS-QM-03
CS-QM-03 --revised-by--> CT-QM-03
CT-QM-03 --produces--> CS-QM-04
CS-QM-02 --revised-in-parallel-by--> CT-QM-04
CT-QM-04 --produces--> CS-QM-05
CS-QM-05 --reinterpreted-by--> CT-QM-05
CT-QM-05 --produces--> CS-QM-06
CS-QM-04 --merged-by--> CT-QM-06
CS-QM-06 --merged-by--> CT-QM-06
CT-QM-06 --produces--> CS-QM-07
CS-QM-07 --revised-by--> CT-QM-07
CT-QM-07 --produces--> CS-QM-08
CS-QM-08 --hands-off-to--> EG-QM-01
EG-QM-01 --extends-to--> EG-QM-02
EG-QM-02 --is-tested-by--> SPECTRAL-AND-INTERFERENCE-EVIDENCE
```

## Sources

- Werner Heisenberg, [1925 reinterpretation of kinematic and mechanical relations](https://doi.org/10.1007/BF01328377); [English translation of the original](https://neo-classical-physics.info/uploads/3/4/3/6/34363841/heisenberg_-_qm_interp_of_kin_and_mech.pdf), opening and §§1–2 checked for observable transitions and the replacement of orbital variables.
- Erwin Schrödinger, [1926 wave-mechanics eigenvalue paper](https://doi.org/10.1002/andp.19263840602).
- Erwin Schrödinger, [1926 relation to matrix mechanics](https://doi.org/10.1002/andp.19263840804).
- Max Born, [1926 scattering interpretation](https://doi.org/10.1007/BF01397477).
- P. A. M. Dirac, [1927 physical interpretation and transformation theory](https://doi.org/10.1098/rspa.1927.0012).
- Werner Heisenberg, [1927 uncertainty analysis](https://doi.org/10.1007/BF01397280).
- Stanford Encyclopedia of Philosophy, [“Quantum Mechanics”](https://plato.stanford.edu/entries/qm/).
- Nobel Prize, [The 1932 Physics Prize](https://www.nobelprize.org/prizes/physics/1932/summary/).
- Nobel Prize, [The 1933 Physics Prize](https://www.nobelprize.org/prizes/physics/1933/summary/).
