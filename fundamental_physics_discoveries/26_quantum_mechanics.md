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

## Time slices

| Node | Period | Crisis/asset | Transition |
|---|---:|---|---|
| `TS-OLD-QUANTUM` | 1900–1924 | Quanta explain selected spectra | Ad hoc orbit rules proliferate |
| `TS-MATTER-WAVES` | 1924 | de Broglie assigns wavelength to matter | Wave dynamics sought |
| `TS-MATRIX` | 1925 | Heisenberg uses observable transitions | Noncommuting algebra enters |
| `TS-WAVE` | 1926 | Schrödinger equation developed | Bound-state spectra derived |
| `TS-BORN` | 1926 | \(|\psi|^2\) interpreted probabilistically | Deterministic amplitude, stochastic outcomes |
| `TS-FORMALIZATION` | 1927 onward | Uncertainty, transformations, Hilbert space | General framework consolidates |

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

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1925–1927). The proposed/active period is stored in each pathway record.

| Incomplete route | Strength | Repair/failure | Retained structure |
|---|---|---|---|
| Bohr–Sommerfeld action quantization | Hydrogen and selected integrable systems | No invariant general rule for chaotic/many-electron motion | Discrete spectra and correspondence |
| Matrix mechanics alone as unfamiliar algebra | Directly used observed transitions | Schrödinger representation showed equivalent dynamics | Operator noncommutativity |
| Wave mechanics as literal material wave | Intuitive interference | Configuration-space waves and Born statistics resist simple 3-D matter-wave reading | Wavefunction evolution |
| Classical exact phase-space trajectories | Assign simultaneous exact \(x,p\) through deterministic local motion | Interference, uncertainty, and contextual statistics | Retained only in semiclassical/decohered regimes |
| **Discovery/current: quantum mechanics** | States, amplitudes, noncommuting observables, and Born probabilities generate outcomes | Spectra, interference, scattering, chemistry, and precision tests | Retained operational framework; interpretation open |

Classical trajectories are not universally “proven nonexistent.” Bohmian formulations use trajectories with nonlocal dynamics, and semiclassical paths approximate many experiments. What fails is the unrestricted classical phase-space model that assigns simultaneous context-independent values while reproducing all quantum statistics. Likewise, Copenhagen was not the only theory left standing; interpretations share operational predictions while differing about ontology and measurement. The superseded node must be specific enough to avoid turning empirical success into an unsupported metaphysical conclusion.

## Knowledge assets

- `A-PLANCK-EINSTEIN`: energy quanta.
- `A-ATOMIC-SPECTRA`: discrete frequencies.
- `A-DE-BROGLIE`: \(\lambda=h/p\).
- `A-HAMILTONIAN-MECHANICS`: energy as generator of time evolution.
- `A-LINEAR-ALGEBRA`: eigenvalues and transformations.

## Discovery node and equations

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

Born probability:

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

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Waves, particles, spectra, and probability unified |
| `P-02` | Hamiltonians generate spectra and time evolution |
| `P-03` | Trajectory prediction reframed as amplitude prediction |
| `P-04` | Superposition and noncommuting observables accepted |
| `P-05` | Classical mechanics retained as a limit |
| `P-06` | Spectral values and interference probabilities test the theory |

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
D-QUANTUM-MECHANICS-1925-1927 --instantiates--> P-03
```

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

## Sources

- Stanford Encyclopedia of Philosophy, [“Quantum Mechanics”](https://plato.stanford.edu/entries/qm/).
- Nobel Prize, [The 1932 Physics Prize](https://www.nobelprize.org/prizes/physics/1932/summary/).
- Nobel Prize, [The 1933 Physics Prize](https://www.nobelprize.org/prizes/physics/1933/summary/).
