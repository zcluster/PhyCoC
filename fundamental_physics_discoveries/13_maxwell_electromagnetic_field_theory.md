# Maxwell's Electromagnetic Field Theory: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-MAXWELL-12` |
| Central node | `D-MAXWELL-FIELD-1861-1865` |
| Focal discovery date | 1861–1865 |
| Main contributors | James Clerk Maxwell, building on Faraday, Ampère, Gauss, and others |
| Domain | Classical electromagnetic fields and light |
| Epistemic status | Correct classical field theory; quantum electrodynamics supplies the deeper microscopic framework |

## Central claim

Maxwell's field equations unified electric charge, current, magnetic induction, and light. The displacement-current term made charge conservation compatible with time-dependent fields and implied self-propagating waves with the measured speed of light.

## Historical problem

Before the focal discovery (1861–1865), the case confronted a linked set of pressures: Coulomb, Gauss, Ampère describe separate sectors; Induction and lines of force. The pathways `R-SEPARATE-ELECTRIC-MAGNETIC-FLUIDS`, `R-MECHANICAL-ETHER-MODELS`, `R-INSTANTANEOUS-ELECTROMAGNETIC-ACTION`, `R-AMPERE-WITHOUT-DISPLACEMENT-CURRENT` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Classical electromagnetic fields and light was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | State | Transition |
|---|---:|---|---|
| `TS-STATIC-LAWS` | 18th–early 19th century | Coulomb, Gauss, Ampère describe separate sectors | Dynamic closure missing |
| `TS-FARADAY` | 1830s–1850s | Induction and lines of force | Local field picture strengthens |
| `TS-MAXWELL` | 1861–1865 | Coupled field equations developed | Light identified as electromagnetic disturbance |
| `TS-HERTZ` | 1887–1888 | Radio waves generated and detected | Wave prediction experimentally confirmed |
| `TS-RELATIVITY-QED` | 20th century | Lorentz symmetry and quantized field | Classical theory retained as limit |

## Knowledge assets

- `A-GAUSS-LAWS`: flux relations.
- `A-AMPERE`: current-generated magnetism.
- `A-FARADAY`: changing magnetic flux induces electric circulation.
- `A-CHARGE-CONSERVATION`: local continuity constraint.
- `A-OPTICAL-SPEED`: measured \(c\).

## Alternative, incomplete, or superseded pathways

### `R-SEPARATE-ELECTRIC-MAGNETIC-FLUIDS`

- **What it is:** A family of theories that assigns electricity and magnetism to distinct imponderable fluids or agencies, with separate laws rather than one dynamically coupled field.
- **Proposed/active period:** eighteenth–early nineteenth centuries.
- **Limitation:** Cannot explain induction and current magnetism as one dynamics.
- **Outcome:** Superseded by coupled fields.

### `R-MECHANICAL-ETHER-MODELS`

- **What it is:** Models that interpret electric and magnetic fields as stresses, rotations, or motions of a material ether whose microscopic mechanics is supposed to produce Maxwell-like equations.
- **Proposed/active period:** seventeenth century–1850s.
- **Why reasonable:** Known waves traveled through material media.
- **Limitation:** No unique mechanical model was required by the equations; preferred-rest-frame evidence failed.
- **Outcome:** Ether mechanics discarded; field equations retained.

### `R-INSTANTANEOUS-ELECTROMAGNETIC-ACTION`

- **What it is:** Direct force laws in which charges or currents influence one another across distance without a propagating local field.
- **Proposed/active period:** 1785–1850s.
- **Outcome:** Superseded as the fundamental interpretation by finite-speed field propagation; useful integral formulations remain.

### `R-AMPERE-WITHOUT-DISPLACEMENT-CURRENT`

- **What it is:** The conduction-current-only form of Ampère's circuital law, applied even when electric flux changes between capacitor plates.
- **Proposed/active period:** 1820s.
- **Limitation:** It gives surface-dependent current and conflicts with charge continuity.
- **Outcome:** Repaired by Maxwell's displacement-current term.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1861–1865). The proposed/active period is stored in each pathway record.

| Pathway | Repair program | Discriminating issue | Outcome and retention |
|---|---|---|---|
| Separate electric/magnetic fluids | Add independent fluids and cross-force rules | Induction and current magnetism demanded coordinated dynamics | Separate static approximations retained |
| Instantaneous action at distance | Build direct force laws among charges/currents | Finite-speed waves and local energy transport | Useful integral formulations remain, not instantaneous ontology |
| Mechanical ether/vortices | Give field stresses a material mechanism | Many incompatible media produced the same equations; preferred motion was undetected | Mechanical model dropped; stress, energy, and field equations retained |
| Maxwell field without displacement current | Apply Ampère's law only to conduction current | Charging capacitor conflicts with current continuity | Displacement current completes the local law |
| **Discovery/current: Maxwell electromagnetic field theory** | Coupled local fields, displacement current, and finite-speed waves | Predicts light-speed electromagnetic propagation and conserves charge | Retained classical field theory and QED limit |

The capacitor inconsistency is especially revealing. Different surfaces spanning the same circuit loop would count conduction current differently unless \(\epsilon_0\partial\mathbf E/\partial t\) contributed. The repair was constrained by charge conservation and then generated electromagnetic waves. Maxwell's material analogies were historically productive scaffolds; later physics retained the abstract field relations rather than declaring every gear-and-vortex picture literally real.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-GAUSS-LAWS`, `A-AMPERE`, `A-FARADAY`, `A-CHARGE-CONSERVATION`, `A-OPTICAL-SPEED`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-SEPARATE-ELECTRIC-MAGNETIC-FLUIDS` | A family of theories that assigns electricity and magnetism to distinct imponderable fluids or agencies, with separate laws rather than one dynamically coupled field. | Cannot explain induction and current magnetism as one dynamics. |
| `R-MECHANICAL-ETHER-MODELS` | Models that interpret electric and magnetic fields as stresses, rotations, or motions of a material ether whose microscopic mechanics is supposed to produce Maxwell-like equations. | No unique mechanical model was required by the equations; preferred-rest-frame evidence failed. |
| `R-INSTANTANEOUS-ELECTROMAGNETIC-ACTION` | Direct force laws in which charges or currents influence one another across distance without a propagating local field. | See the full pathway record above. |
| `R-AMPERE-WITHOUT-DISPLACEMENT-CURRENT` | The conduction-current-only form of Ampère's circuital law, applied even when electric flux changes between capacitor plates. | It gives surface-dependent current and conflicts with charge continuity. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Forces between bodies reframed as local field evolution. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

In SI vacuum form:

$$
\nabla\cdot\mathbf{E}=\frac{\rho}{\epsilon_0},
\qquad
\nabla\cdot\mathbf{B}=0,
$$

$$
\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t},
\qquad
\nabla\times\mathbf{B}
=\mu_0\mathbf{J}
+\mu_0\epsilon_0\frac{\partial\mathbf{E}}{\partial t}.
$$

Taking the divergence of the final equation gives:

$$
0=\mu_0\nabla\cdot\mathbf{J}
+\mu_0\frac{\partial\rho}{\partial t},
$$

or the continuity equation:

$$
\frac{\partial\rho}{\partial t}
+\nabla\cdot\mathbf{J}=0.
$$

In vacuum, curls of the curl yield:

$$
\nabla^2\mathbf{E}
-\mu_0\epsilon_0
\frac{\partial^2\mathbf{E}}{\partial t^2}=0,
$$

with wave speed:

$$
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}.
$$

The numerical agreement with optical measurements motivated the inference that light is electromagnetic.

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Forces between bodies reframed as local field evolution

- `P-02` — **Permit a new representation, ontology, or mechanism:** Displacement current and autonomous fields accepted

- `P-03` — **Make the new structure generative:** Static and induction laws generate wave propagation

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Classical electromagnetic fields and light). The case-specific unification was: Electricity, magnetism, and light unified. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Static and induction laws generate wave propagation

- `P-04` — **Unify previously separated domains or phenomena:** Electricity, magnetism, and light unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Gauss, Ampère, and Faraday structures retained. Its quantitative or otherwise discriminating test strategy is: Predicted wave speed and new spectral regime tested. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Gauss, Ampère, and Faraday structures retained

- `P-06` — **Prioritize discriminating tests:** Predicted wave speed and new spectral regime tested

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Forces between bodies reframed as local field evolution | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Displacement current and autonomous fields accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Static and induction laws generate wave propagation | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Electricity, magnetism, and light unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Gauss, Ampère, and Faraday structures retained | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Predicted wave speed and new spectral regime tested | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-MAXWELL-FIELD-1861-1865` |
| Focal date | 1861–1865 |
| Central claim | Maxwell's field equations unified electric charge, current, magnetic induction, and light. The displacement-current term made charge conservation compatible with time-dependent fields and implied self-propagating waves with the measured speed of light. |
| Domain | Classical electromagnetic fields and light |
| Epistemic status | Correct classical field theory; quantum electrodynamics supplies the deeper microscopic framework |
| Generative role | Static and induction laws generate wave propagation |
| Retained structure | Gauss, Ampère, and Faraday structures retained |

Key formal relations, consolidated from the derivation above:

$$
\nabla\cdot\mathbf{E}=\frac{\rho}{\epsilon_0},
\qquad
\nabla\cdot\mathbf{B}=0,
$$

$$
\nabla\times\mathbf{E}=-\frac{\partial\mathbf{B}}{\partial t},
\qquad
\nabla\times\mathbf{B}
=\mu_0\mathbf{J}
+\mu_0\epsilon_0\frac{\partial\mathbf{E}}{\partial t}.
$$

$$
0=\mu_0\nabla\cdot\mathbf{J}
+\mu_0\frac{\partial\rho}{\partial t},
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-MAXWELL-01` — Self-propagating electromagnetic waves with the speed of light

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION`.
- **Prediction date and authorship:** Maxwell's 1861–1865 field theory implied waves in otherwise empty space and identified their computed speed with the measured speed of light. Hertz generated and detected radio waves in 1887–1888.
- **Construction-data independence:** electrostatic, magnetic, and induction laws were inputs; freely propagating long-wavelength radiation with reflection, refraction, interference, and polarization was a new consequence.
- **Derivation provenance:** `HISTORICAL-RECONSTRUCTION` in modern vector notation.

In a source-free region, $\rho=0$ and $\mathbf J=0$. Taking the curl of Faraday's law and substituting the Maxwell–Ampère law gives

$$
\nabla\times(\nabla\times\mathbf E)
=-\mu_0\epsilon_0\frac{\partial^2\mathbf E}{\partial t^2}.
$$

Because $\nabla\cdot\mathbf E=0$ and $\nabla\times(\nabla\times\mathbf E)=\nabla(\nabla\cdot\mathbf E)-\nabla^2\mathbf E$,

$$
\nabla^2\mathbf E
-\mu_0\epsilon_0\frac{\partial^2\mathbf E}{\partial t^2}=0,
\qquad
c_{\rm EM}=\frac1{\sqrt{\mu_0\epsilon_0}}.
$$

The magnetic field obeys the same wave equation. Plane-wave solutions are transverse, with $\mathbf E\perp\mathbf B\perp\mathbf k$.
- **Observable discriminator and outcome:** a spark transmitter should induce delayed, polarizable waves in a separated receiver and exhibit optical wave phenomena at wavelengths far beyond visible light. Hertz's experiments supplied those discriminators.

## Validation and explanatory gains

- Predicts transverse electromagnetic waves and polarization.
- Hertz produced and detected waves outside visible frequencies.
- Energy flows according to the Poynting vector:

$$
\mathbf{S}=\mathbf{E}\times\mathbf{H}.
$$

- Radiation pressure and momentum follow from the field.
- One theory spans electrostatics, circuits, magnets, radio, and optics.

## Limitations and retained status

Classical fields allow continuous energy and do not explain atomic stability, photon statistics, or radiative quantum transitions. Point-charge self-energy creates difficulties. QED quantizes the electromagnetic field while recovering Maxwell's equations in classical regimes. Nonlinear quantum-vacuum effects are extremely small at ordinary field strengths.

## Extended historical investigation

### Maxwell's synthesis was a sequence, not four equations appearing at once

Maxwell's work developed through papers and a later treatise, using mechanical analogies, Faraday's lines of force, and component equations unlike today's compact vector form. The “four Maxwell equations” are a later organization associated with vector notation and contributions by Heaviside, Hertz, Gibbs, and others. A historical graph should distinguish:

- `MAXWELL-HISTORICAL-FORMULATION`;
- `HEAVISIDE-VECTOR-FORM`;
- `MODERN-DIFFERENTIAL-FORM`.

They express closely related physics but are not textually identical.

### Why displacement current was necessary

Ampère's magnetostatic law:

$$
\nabla\times\mathbf B=\mu_0\mathbf J
$$

implies, after taking divergence:

$$
0=\mu_0\nabla\cdot\mathbf J.
$$

But local charge conservation requires:

$$
\nabla\cdot\mathbf J
=-\frac{\partial\rho}{\partial t}.
$$

These are compatible only for static charge. Gauss's law gives:

$$
\rho=\epsilon_0\nabla\cdot\mathbf E.
$$

Adding:

$$
\mu_0\epsilon_0\frac{\partial\mathbf E}{\partial t}
$$

to Ampère's law restores the continuity equation. A charging capacitor makes the need concrete: conduction current flows in wires, while changing electric flux spans the gap. The magnetic circulation cannot depend on which surface is imagined across the same loop.

### Wave derivation with assumptions explicit

In source-free vacuum:

$$
\nabla\cdot\mathbf E=0,
\qquad
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\cdot\mathbf B=0,
\qquad
\nabla\times\mathbf B
=\mu_0\epsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

Take the curl of Faraday's law:

$$
\nabla\times(\nabla\times\mathbf E)
=-\frac{\partial}{\partial t}
(\nabla\times\mathbf B).
$$

Using:

$$
\nabla\times(\nabla\times\mathbf E)
=\nabla(\nabla\cdot\mathbf E)-\nabla^2\mathbf E,
$$

one obtains:

$$
\nabla^2\mathbf E
-\mu_0\epsilon_0
\frac{\partial^2\mathbf E}{\partial t^2}=0.
$$

The same holds for \(\mathbf B\). A plane-wave solution has:

$$
\mathbf E=\mathbf E_0\cos(\mathbf k\cdot\mathbf r-\omega t),
\qquad
\omega=ck,
$$

$$
\mathbf B=\frac{1}{c}\hat{\mathbf k}\times\mathbf E.
$$

Thus \(\mathbf E\), \(\mathbf B\), and propagation direction are mutually perpendicular in vacuum. Agreement of:

$$
\frac{1}{\sqrt{\mu_0\epsilon_0}}
$$

with measured light speed supported the identification of light as electromagnetic.

For the plane-wave ansatz $\mathbf E=\mathbf E_0e^{i(\mathbf k\cdot\mathbf r-\omega t)}$, Gauss's law gives

$$
\mathbf k\cdot\mathbf E_0=0,
$$

while Faraday's law gives

$$
\mathbf k\times\mathbf E_0=\omega\mathbf B_0.
$$

Ampère–Maxwell gives $\mathbf k\times\mathbf B_0=-\omega\mu_0\epsilon_0\mathbf E_0$. Combining them yields

$$
k^2=\mu_0\epsilon_0\omega^2,
\qquad
c=\frac{\omega}{k}=\frac{1}{\sqrt{\mu_0\epsilon_0}},
$$

and $B_0=E_0/c$. Transversality and wave speed therefore follow from the field equations rather than being appended as optical facts.

### Energy, momentum, and local conservation

Field energy density is:

$$
u
=\frac12\epsilon_0E^2
+\frac{B^2}{2\mu_0}.
$$

Energy flux is:

$$
\mathbf S
=\frac{1}{\mu_0}\mathbf E\times\mathbf B.
$$

Poynting's theorem:

$$
\frac{\partial u}{\partial t}
+\nabla\cdot\mathbf S
=-\mathbf J\cdot\mathbf E
$$

states that field-energy loss plus outward flow equals work on matter. This changes the explanatory picture of circuits: energy can flow through surrounding fields rather than being imagined as carried only inside wires.

The conservation law follows directly. Dot Ampère–Maxwell with $\mathbf E$ and Faraday's law with $\mathbf B/\mu_0$:

$$
\mathbf E\cdot(\nabla\times\mathbf B)
=\mu_0\mathbf J\cdot\mathbf E
+\mu_0\epsilon_0\mathbf E\cdot\frac{\partial\mathbf E}{\partial t},
$$

$$
\frac{\mathbf B}{\mu_0}\cdot(\nabla\times\mathbf E)
=-\frac{\mathbf B}{\mu_0}\cdot\frac{\partial\mathbf B}{\partial t}.
$$

Use

$$
\nabla\cdot(\mathbf E\times\mathbf B)
=\mathbf B\cdot(\nabla\times\mathbf E)
-\mathbf E\cdot(\nabla\times\mathbf B)
$$

and collect time derivatives. The result is

$$
\frac{\partial}{\partial t}
\left(\frac{\epsilon_0E^2}{2}+\frac{B^2}{2\mu_0}\right)
+\nabla\cdot\left(\frac{\mathbf E\times\mathbf B}{\mu_0}\right)
=-\mathbf J\cdot\mathbf E.
$$

| Logical role | Content |
|---|---|
| Empirical inputs | Coulomb/Gauss behavior, induction, magnetic circulation and charge conservation |
| Consistency repair | Displacement current restores the continuity equation |
| Derived in vacuum | Electromagnetic wave equations, transverse fields and speed $1/\sqrt{\mu_0\epsilon_0}$ |
| Derived locally | Poynting energy density and flux balance |
| Additional input in matter | Constitutive relations such as $\mathbf D(\mathbf E)$ and $\mathbf B(\mathbf H)$ |

Radiation carries momentum. For an absorbing surface:

$$
p_{\mathrm{rad}}=\frac{I}{c},
$$

and for ideal reflection:

$$
p_{\mathrm{rad}}=\frac{2I}{c}.
$$

### Material media

Macroscopic matter is described by:

$$
\mathbf D=\epsilon_0\mathbf E+\mathbf P,
\qquad
\mathbf H=\frac{\mathbf B}{\mu_0}-\mathbf M.
$$

Simple linear media use:

$$
\mathbf D=\epsilon\mathbf E,
\qquad
\mathbf B=\mu\mathbf H,
\qquad
v=\frac{1}{\sqrt{\mu\epsilon}}.
$$

Real materials can be anisotropic, dispersive, nonlinear, lossy, or nonlocal. The vacuum equations should not be applied to matter without constitutive relations.

### Validation and theoretical transition ledger

| Node | Role |
|---|---|
| Hertz radio experiments | Directly confirmed nonvisible electromagnetic waves |
| Optical interference/polarization | Already known behaviors inherited by electromagnetic waves |
| Radiation pressure | Tested field momentum |
| Lorentz force | Connects fields to charged matter |
| Special relativity | Revealed electric and magnetic fields as frame-dependent parts of one tensor |
| QED | Quantized the electromagnetic field |

In relativistic form:

$$
\partial_\mu F^{\mu\nu}=\mu_0J^\nu,
\qquad
\partial_{[\alpha}F_{\beta\gamma]}=0.
$$

This compact covariance helped make ether mechanics unnecessary.

## AI-oriented inference notes

- Do not attribute the modern four-equation vector layout verbatim to Maxwell.
- Attach vacuum/source assumptions to the wave derivation.
- Treat displacement current as field change, not ordinary charge flow through the capacitor dielectric.
- Connect classical fields to QED by limiting relation, not by marking Maxwell theory simply false.

## Additional quantitative and epistemic notes

### Additional quantitative and epistemic notes

Maxwell's synthesis was not obtained by simply “writing four equations.” His mechanical models of a medium helped him reason, but the durable content was the field relation. Combining the source-free curl equations gives

$$
\nabla^2\mathbf E-\mu_0\epsilon_0\frac{\partial^2\mathbf E}{\partial t^2}=0,
\qquad
c=\frac{1}{\sqrt{\mu_0\epsilon_0}}.
$$

The numerical agreement of this speed with optical measurements supported the identification of light as an electromagnetic wave. The displacement-current term also repairs charge continuity: taking the divergence of Ampère–Maxwell law yields \(\nabla\cdot\mathbf J+\partial\rho/\partial t=0\). These are two distinct inferential gains—an unexpected unification with optics and internal consistency with conservation.

Modern vector notation was largely supplied after Maxwell, especially through Heaviside and Gibbs. Historical graphs should not project the compact modern four-equation presentation unchanged onto Maxwell's 1860s texts. Experimental confirmation likewise belongs to later nodes, especially Hertz's production and detection of radio waves.

## Edge list

```text
A-FARADAY --contributes-to--> D-MAXWELL-FIELD-1861-1865
A-CHARGE-CONSERVATION --requires--> DISPLACEMENT-CURRENT
DISPLACEMENT-CURRENT --completes--> MAXWELL-AMPERE-LAW
MAXWELL-EQUATIONS --generate--> EM-WAVE-EQUATION
EM-WAVE-EQUATION --predicts--> SPEED-ONE-OVER-SQRT-MUEPS
SPEED-ONE-OVER-SQRT-MUEPS --matches--> A-OPTICAL-SPEED
V-HERTZ-WAVES --validates--> D-MAXWELL-FIELD-1861-1865
D-QED --quantizes--> D-MAXWELL-FIELD-1861-1865
D-MAXWELL-FIELD-1861-1865 --instantiates--> P-04
```

## Sources

- Stanford Encyclopedia of Philosophy, [“The History of Quantum Field Theory,” on the electromagnetic field's later quantization](https://plato.stanford.edu/archives/fall2023/entries/quantum-field-theory/qft-history.html).
- Royal Society, [Maxwell, “A Dynamical Theory of the Electromagnetic Field”](https://royalsocietypublishing.org/doi/10.1098/rstl.1865.0008).
- University of Cambridge, [The scientific papers of James Clerk Maxwell](https://www.clerkmaxwellfoundation.org/html/scientific_papers.html).
- American Physical Society, [Ørsted–Faraday–Maxwell historical connection](https://www.aps.org/apsnews/2008/07/1820-oersted-electromagnetism).
