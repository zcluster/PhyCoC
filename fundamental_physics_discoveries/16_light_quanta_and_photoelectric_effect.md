# Light Quanta and the Photoelectric Effect: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-PHOTON-19` |
| Central node | `D-LIGHT-QUANTUM-1905` |
| Focal discovery date | 17 March 1905 submission |
| Main contributors | Albert Einstein; experimental foundations from Hertz, Hallwachs, Lenard, Millikan and others |
| Domain | Quantized radiation–matter interaction |
| Epistemic status | Photons are excitations of the quantized electromagnetic field |

## Central claim

Einstein proposed that radiation energy can behave as localized quanta \(h\nu\). This explained why photoelectron energy depends on light frequency, why emission has a threshold, and why intensity mainly changes electron number rather than maximum energy.

## Historical problem

Before Einstein's March 1905 paper, photoemission measurements and Planck's resonator energy elements posed different challenges to continuous-wave radiation theory. Planck had not shown that freely propagating light consists of localized packets; conversely, a photoelectric threshold alone did not rule out every continuous-wave account with material binding effects. Einstein's conceptual opening came from the high-frequency radiation entropy relation: its volume dependence resembled that of independent localized particles. The resulting *as-if* light quanta could then be risked on photoemission, including a frequency-dependent electron energy. Millikan's precise stopping-potential tests and later photon evidence belong after this proposal. The graph's 17 March focal key follows the sending date; the journal recorded receipt on 18 March.

## Time slices

| Node | Period | Observation/theory | Transition |
|---|---:|---|---|
| `TS-PHOTOELECTRIC` | 1887–1902 | Light ejects charge from materials | Classical accumulation models strained |
| `TS-PLANCK` | 1900 | Matter oscillators exchange \(h\nu\) elements | Quantization enters radiation theory |
| `TS-EINSTEIN` | 1905 | Light quanta proposed | Radiation itself gains particle-like events |
| `TS-MILLIKAN` | 1910s | Stopping potentials measured | Linear frequency law confirmed |
| `TS-COMPTON` | 1923 | Scattering wavelength shift supports photon energy–momentum transfer | Quantum radiation gained independent support |
| `TS-QED` | 1940s onward | Photon as gauge-field quantum | Wave and particle phenomena unified |

## Knowledge assets

- `A-PLANCK-H`: quantized energy scale.
- `A-STOPPING-POTENTIAL`: measures maximum electron kinetic energy.
- `A-FREQUENCY-CONTROL`: separates color from intensity.
- `A-WORK-FUNCTION`: material-dependent binding energy.

## Alternative, incomplete, or superseded pathways

### `R-CLASSICAL-ENERGY-ACCUMULATION`

- **What it is:** A classical photoemission model in which a continuous electromagnetic wave distributes energy over a material and an electron accumulates that energy over time until it escapes.
- **Proposed/active period:** nineteenth century–1904.
- **Historical status:** Schematic pre-1905 classical-wave foil, not an attested named school.
- **Assumption:** Electron energy should grow with incident intensity and exposure time.
- **Why reasonable:** Classical wave energy density scales with intensity.
- **Anomalies:** Lenard-era intensity/velocity and light-kind observations strained simple accumulation; sharp threshold and emission-delay tests became stronger later discriminators.
- **Outcome:** Superseded for microscopic absorption.
- **Retained element:** Intensity remains proportional to mean energy flux and photon arrival rate.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (17 March 1905 submission). The proposed/active period is stored in each pathway record.

Classical wave theory could accommodate a threshold by adding material binding physics, but a simple accumulation account associated greater field intensity with greater energy per liberated electron and allowed an accumulation delay. Einstein's equation instead separated photon number from photon energy. The sharp threshold and delay constraints below are discriminators in the later test program, not fully established pre-1905 inputs.

| Pathway | Repair or mechanism | Discriminating evidence | Status |
|---|---|---|---|
| Classical continuous-wave energy accumulation | Add frequency-dependent binding and rapid accumulation | Later sharp threshold, delay tests, and \(K_{\max}=h\nu-\Phi\) | Superseded microscopically |
| **Discovery/current: light-quantum photoabsorption** | One quantum \(h\nu\) transfers energy to one electron; intensity controls quantum rate | Stopping-potential slope \(h\), threshold, and later Compton evidence | Retained within QED |

Millikan confirmed the stopping-potential relation while remaining skeptical of light quanta, demonstrating that empirical law and ontology can separate. Photoelectric evidence alone did not establish every property of photons; Compton scattering, black-body statistics, and later quantum electrodynamics supplied converging support. Classical electromagnetic waves remain the correct coherent/high-occupation description.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-PLANCK-H`, `A-STOPPING-POTENTIAL`, and `A-FREQUENCY-CONTROL`. A material-dependent escape cost (`A-WORK-FUNCTION`) is a modeling ingredient in the proposed balance, not a precisely known constant supplied by later Millikan measurements. Planck's energy elements concerned resonators; they did not already establish freely propagating photons. Later confirmation must not be back-projected into the starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-CLASSICAL-ENERGY-ACCUMULATION` | A schematic classical photoemission model in which a continuous electromagnetic wave distributes energy over a material and an electron accumulates that energy over time until it escapes. | Spreading wave energy across electrons made per-electron energy depend on intensity and waiting time, unlike Lenard's intensity/velocity constraint; the sharp threshold and delay tests became stronger later discriminators. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Intensity accumulation reframed as discrete absorption. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by information available at the focal discovery date; later confirmations, modern notation, and rival branches must be distinguished from contemporary inputs.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-EIN-01` | Maxwell waves explain interference; Planck's energy elements concern resonators; Lenard's photoelectric results constrain emission. **Open question:** Does radiation itself admit a localized energy description? |
| `CS-EIN-02` | In the dilute high-frequency regime, radiation's entropy–volume dependence resembles that of independent gas particles. **Open question:** Is the analogy merely formal or physically suggestive? |
| `CS-EIN-03` | In that regime, light energy can be treated *as if* carried by independent localized packets of size hν. **Open question:** Can this hypothesis account for matter interactions? |
| `CS-EIN-04` | A single packet may surrender its energy to one electron in an absorbing body. **Open question:** How much energy remains after escape? |
| `CS-EIN-05` | Maximum escaping-electron energy is incident packet energy minus a material-dependent escape cost. **Open question:** What observable dependence distinguishes this account? |
| `CS-EIN-06` | Frequency controls the maximum energy and threshold; intensity primarily controls event number in the ideal one-quantum regime. **Open question:** Will quantitative tests and other absorption processes support the same hypothesis? |

##### `CT-EIN-01`: `CS-EIN-01` → `CS-EIN-02` — Compare radiation and gas entropy

- **Input model:** Wave optics and Planck's radiation law coexist, without settled particle ontology for freely propagating light.
- **Pressure:** High-frequency radiation has an entropy change under volume variation difficult to interpret as only a continuous wave.
- **Protected structure:** The successful spectral law and classical wave explanation of interference.
- **Hidden assumption:** Similar entropy–volume formulas cannot disclose a shared microscopic counting interpretation.
- **Operation / change type:** `representation_shift` — Compare dilute-radiation entropy variation with that of a gas of independent constituents.
- **Output model:** High-frequency radiation has a particle-like thermodynamic signature.
- **Local justification:** Einstein's 1905 paper derived this analogy from the contemporary Wien-regime radiation law, without later photoelectric confirmation.
- **Cost/uncertainty:** A thermodynamic analogy does not establish that every optical process consists of literal particles.
- **Next question:** What microscopic hypothesis could make the analogy explanatory?

##### `CT-EIN-02`: `CS-EIN-02` → `CS-EIN-03` — Take the packet interpretation seriously

- **Input model:** Radiation in the restricted Wien regime behaves thermodynamically as though composed of independent energy-bearing constituents.
- **Pressure:** The number-like factor in the entropy relation invites a definite energy per constituent.
- **Protected structure:** The Planck energy scale hν and wave-optical successes outside the proposed regime.
- **Hidden assumption:** Energy elements must remain confined to material resonators.
- **Operation / change type:** `reinterpretation` — Hypothesize spatially localized, independently absorbed light-energy quanta of magnitude hν.
- **Output model:** A cautious light-quantum heuristic, not the later fully developed QED photon.
- **Local justification:** The entropy comparison bridges resonator quantization to a radiation-side hypothesis.
- **Cost/uncertainty:** Interference remains to be reconciled; the restricted inference does not prove universal photon ontology.
- **Branch status:** `selected`; continuous-wave accounts remain successful for propagation and interference.
- **Next question:** Can one quantum explain electron emission more economically than gradual energy accumulation?

##### `CT-EIN-03`: `CS-EIN-03` → `CS-EIN-04` — Apply one quantum to one emission event

- **Input model:** Incident light can be modeled as independently arriving energy quanta.
- **Pressure:** In photoemission, energy per emitted electron tracks frequency more directly than intensity.
- **Protected structure:** Energy conservation and Lenard-era qualitative emission constraints.
- **Hidden assumption:** An electron must collect energy gradually from average wave intensity.
- **Operation / change type:** `generalization` — Apply the light-quantum hypothesis to absorption by individual electrons.
- **Output model:** One incident quantum offers energy hν to one electron in the ideal event.
- **Local justification:** Lenard's 1902 photoelectric study and Einstein's 1905 radiation hypothesis supply the contemporary experimental and conceptual inputs; Millikan's later precision slope is not a construction input.
- **Cost/uncertainty:** Material absorption and electron escape can redistribute energy; one-to-one transfer is idealized.
- **Next question:** Which portion of hν is expended before the electron escapes?

##### `CT-EIN-04`: `CS-EIN-04` → `CS-EIN-05` — Separate escape cost from kinetic energy

- **Input model:** A quantum offers hν to an electron in a material.
- **Pressure:** The electron must overcome an energy barrier before leaving.
- **Protected structure:** Per-event energy conservation and variation between substances.
- **Hidden assumption:** All absorbed energy appears as free-electron kinetic energy.
- **Operation / change type:** `differentiation` — Partition incident energy into escape work and maximum kinetic remainder.
- **Output model:** Kmax = hν − P, with P an effective material-dependent escape cost.
- **Local justification:** This is Einstein's 1905 energy-balance proposal; the conventional φ notation is formal consolidation.
- **Cost/uncertainty:** Surface states complicate actual metals, so the simple relation concerns the maximum.
- **Next question:** Which frequency pattern distinguishes this proposal from intensity accumulation?

##### `CT-EIN-05`: `CS-EIN-05` → `CS-EIN-06` — Turn the balance into a discriminator

- **Input model:** Maximum kinetic energy equals hν minus a material-dependent cost.
- **Pressure:** A mechanism must yield observables comparable across frequencies and intensities.
- **Protected structure:** Charge conservation, measurable stopping potential, and independence of h from material.
- **Hidden assumption:** Increasing intensity must increase each emitted electron's energy.
- **Operation / change type:** `enrichment` — Derive a frequency slope, material threshold, and intensity-versus-count separation.
- **Output model:** A testable photoelectric law with a universal frequency slope in the ideal regime.
- **Local justification:** The 1905 hypothesis generates these relations before Millikan's quantitative tests.
- **Cost/uncertainty:** Contemporary observations constrain but do not uniquely prove ontology; wave propagation remains an obligation.
- **Next question:** Does the slope survive precise measurements and other absorption processes?

#### Formal consolidation

The equations below use modern work-function and stopping-potential notation to summarize the 1905 proposal; they are not a transcription of every step in Einstein's original reasoning.

Energy conservation for one absorbed photon gives:

$$
h\nu=\phi+K_{\max},
$$

so:

$$
K_{\max}=h\nu-\phi=eV_s.
$$

\(\phi\) is the work function and \(V_s\) the stopping potential. The threshold frequency is:

$$
\nu_0=\frac{\phi}{h}.
$$

Therefore:

$$
V_s=\frac{h}{e}\nu-\frac{\phi}{e}.
$$

The slope \(h/e\) is material-independent; the intercept depends on material. The following momentum relation belongs to later quantum-radiation consolidation, not the construction of the 1905 photoelectric proposal:

$$
p_\gamma=\frac{E}{c}=\frac{h}{\lambda}.
$$

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Intensity accumulation reframed as discrete absorption

- `P-02` — **Permit a new representation, ontology, or mechanism:** Localized light quanta proposed

- `P-03` — **Make the new structure generative:** Frequency generates electron energy via \(h\nu\)

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain does not establish the target-domain claim; state the novel consequence and a possible failure condition before using later evidence as validation.

#### `EG-EIN-01` — Extend light quanta across absorbing materials

- **Source domain:** The high-frequency light-quantum hypothesis and ideal photoelectric energy balance for one absorber.
- **Target domain:** Photoemission from different materials with distinct escape costs.
- **Novel consequence:** Maximum kinetic energy versus frequency should have the same slope h while thresholds vary by material; ideal stopping-voltage slopes should be h/e.
- **Failure condition:** Reproducible material-dependent slopes in the single-quantum regime, after correcting surface effects, would defeat this universal transfer law.

#### `EG-EIN-02` — Probe other high-frequency absorption processes

- **Source domain:** Photoelectric transfer of one light quantum to one electron.
- **Target domain:** Other elementary light–matter processes such as photochemical or ionization events, tentatively discussed by Einstein in 1905.
- **Novel consequence:** Event thresholds or rates should reflect discrete hν transfers rather than only continuous intensity accumulation.
- **Failure condition:** Robust elementary events dependent only on total intensity and irreconcilable with single- or multiple-quantum channels would challenge the extension.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Frequency generates electron energy via \(h\nu\)

- `P-04` — **Unify previously separated domains or phenomena:** Radiation thermodynamics and electron emission linked

### Retention, predictions, and discriminating tests

The 1905 proposal left classical wave interference as a successful but unresolved constraint; its recovery through quantum amplitudes belongs to later theory. Its quantitative discriminator is the linear stopping-potential law. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Interference preserved as an unresolved 1905 constraint, recovered by later quantum amplitudes

- `P-06` — **Prioritize discriminating tests:** Linear stopping-potential law gives a precise test

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Intensity accumulation reframed as discrete absorption | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Localized light quanta proposed | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Frequency generates electron energy via \(h\nu\) | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Radiation thermodynamics and electron emission linked | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Interference preserved as an unresolved 1905 constraint, recovered by later quantum amplitudes | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Linear stopping-potential law gives a precise test | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-LIGHT-QUANTUM-1905` |
| Focal date | 17 March 1905 submission |
| Central claim | Einstein proposed that radiation energy can behave as localized quanta \(h\nu\). This explained why photoelectron energy depends on light frequency, why emission has a threshold, and why intensity mainly changes electron number rather than maximum energy. |
| Domain | Quantized radiation–matter interaction |
| Epistemic status | Photons are excitations of the quantized electromagnetic field |
| Generative role | Frequency generates electron energy via \(h\nu\) |
| Retained structure | Interference preserved as an unresolved 1905 constraint, recovered by later quantum amplitudes |

Key formal relations, consolidated from the derivation above:

$$
h\nu=\phi+K_{\max},
$$

$$
K_{\max}=h\nu-\phi=eV_s.
$$

$$
\nu_0=\frac{\phi}{h}.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-EIN-01` — Frequency law for maximum photoelectron energy

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION`.
- **Prediction date and provenance:** Einstein's 1905 paper proposed hν = P + Kmax, with P the material escape cost.
- **Independence from construction data:** Earlier photoelectric observations motivated the proposal but did not supply Millikan's later precision multi-frequency slope test.
- **Observable discriminator:** Above threshold, maximal kinetic energy should rise linearly with frequency at slope h; ideal stopping potential has slope h/e, while intensity mainly changes emission rate.
- **Later outcome:** Millikan's 1910s measurements supported the equation while he remained skeptical of light quanta; this validates a quantitative consequence more directly than complete radiation ontology.

## Validation and explanatory gains

- Stopping voltage is linear in frequency.
- Below threshold, greater intensity does not eject electrons in the ideal one-photon regime.
- Above threshold, intensity raises photoelectron rate.
- Compton wavelength shifts confirm energy–momentum transfer.
- Quantum optics explains interference through amplitudes while detections remain discrete.

## Limitations and retained status

Real solids have band structure, surface states, scattering, and multiphoton processes. “Photon as a tiny classical pellet” is misleading; photons are quantum-field excitations without definite trajectories in general. Classical Maxwell fields remain excellent for coherent, high-occupation radiation.

## Extended historical investigation

### Four empirical constraints

A useful theory of the photoelectric effect ultimately had to explain the following combined pre- and post-1905 constraints (not all were established when Einstein proposed his hypothesis):

1. a threshold frequency depending on material;
2. maximum electron kinetic energy increasing with frequency;
3. emitted-electron number increasing with intensity above threshold;
4. no long classical charging delay under ordinary conditions.

A simple classical-wave accumulation model naturally connected energy per area to intensity but did not produce the observed frequency-controlled maximum energy.

### Einstein's one-quantum balance

For one-photon absorption:

$$
h\nu=\phi+K+E_{\mathrm{loss}},
$$

where \(\phi\) is the minimum escape work and \(E_{\mathrm{loss}}\) includes material scattering or binding beyond the simplest surface model. The ideal maximum has \(E_{\mathrm{loss}}=0\):

$$
K_{\max}=h\nu-\phi.
$$

Stopping potential satisfies:

$$
eV_s=K_{\max}.
$$

Therefore a graph of \(V_s\) versus \(\nu\) should be linear:

$$
\frac{dV_s}{d\nu}=\frac{h}{e}.
$$

Different materials shift the intercept through \(\phi\) but share the slope. This is a stronger test than merely observing electron emission.

### Intensity and photon statistics

For monochromatic light of frequency \(\nu\) and average power \(P\), the photon rate is:

$$
\dot N_\gamma=\frac{P}{h\nu}.
$$

Increasing intensity at fixed \(\nu\) increases available photons and hence current, assuming detector response is unsaturated. It does not change each photon's energy. At very high intensity, multiphoton absorption can occur:

$$
nh\nu\ge\phi,
$$

so the simple threshold rule is a one-photon regime, not an exceptionless law.

### Millikan's test and theory–experiment tension

Millikan was initially skeptical of the light-quantum interpretation but performed precise stopping-potential experiments that supported Einstein's equation and measured \(h\). This is historically useful: successful tests need not be performed by advocates, and confirmation of an equation does not force immediate acceptance of its preferred ontology. Alternative semiclassical interpretations remained active until broader photon evidence accumulated.

### Compton scattering as energy–momentum confirmation

Treat a photon with:

$$
E_\gamma=\frac{hc}{\lambda},
\qquad
p_\gamma=\frac{h}{\lambda}.
$$

For scattering from an initially stationary electron, energy and momentum conservation lead to:

$$
\lambda'-\lambda
=\frac{h}{m_ec}(1-\cos\theta).
$$

The wavelength shift depends on scattering angle, not incident intensity. Classical wave scattering did not naturally reproduce this particle-like energy–momentum kinematics. The effect helped move the light quantum from a heuristic into a general radiation entity.

### Wave behavior is retained

Photon theory does not assign each photon an ordinary definite path through a double slit. Quantum electrodynamics predicts probability amplitudes:

$$
\mathcal A
=\mathcal A_1+\mathcal A_2,
\qquad
P=|\mathcal A|^2.
$$

Single detections accumulate into interference patterns. If path information becomes physically distinguishable, interference terms can be suppressed. The correct retention map is:

```text
CLASSICAL-WAVE-AMPLITUDE
--generalized-to-->
QUANTUM-PROBABILITY-AMPLITUDE

CLASSICAL-CORPUSCLE
--not-identical-to-->
PHOTON
```

### Material physics beyond the ideal equation

In solids, electrons occupy bands and have a Fermi level. Work function depends on surface condition, crystal face, adsorbates, and contact potentials. Photoemission spectroscopy uses:

$$
E_{\mathrm{binding}}
=h\nu-\phi-K
$$

to infer electronic structure. Momentum-resolved photoemission extends the fundamental effect into a probe of band dispersion.

### Evidence ledger

| Evidence | Main inference |
|---|---|
| Threshold frequency | Minimum quantum energy |
| Linear \(V_s(\nu)\) | \(E=h\nu\) with universal slope |
| Current–intensity relation | Photon flux controls event rate |
| Compton shift | Photon momentum \(h/\lambda\) |
| Pair production/annihilation | Radiation–matter interconversion |
| Antibunching | Nonclassical photon statistics |

### Scope and terminology

“Wave–particle duality” is a useful historical label but can mislead if interpreted as light secretly switching between two classical substances. Quantum field theory has one electromagnetic field whose states can exhibit interference, discrete energy exchange, entanglement, and nonclassical statistics.

## AI-oriented inference notes

- Attach one-photon and clean-surface assumptions to Einstein's ideal equation.
- Separate equation confirmation from immediate photon-ontology acceptance.
- Do not say intensity never affects electron energy; strong-field multiphoton regimes exist.
- Link classical wave optics to QED through amplitude limits.

## Additional quantitative and epistemic notes

Einstein used the high-frequency entropy behavior of black-body radiation to argue that dilute radiation behaves thermodynamically as independent energy packets \(h\nu\). Applied to photoemission, one packet transfers energy to one electron:

$$
K_{\max}=h\nu-\Phi,
\qquad
eV_s=K_{\max}.
$$

This explains a threshold frequency, the linear stopping-potential slope, and why intensity mainly changes electron number rather than maximum energy. Real materials add surface states, work-function variation, and energy distributions, so the equation concerns the maximum kinetic energy under specified conditions.

Millikan's careful measurements confirmed the linear relation even though he initially resisted Einstein's ontology. Compton scattering later supplied more direct momentum-transfer evidence:

$$
\Delta\lambda=\frac{h}{m_ec}(1-\cos\theta).
$$

The mature conclusion is wave–quantum duality within quantum electrodynamics, not replacement of all wave phenomena by classical pellets.

## Edge list

```text
A-PLANCK-H --contributes-to--> D-LIGHT-QUANTUM-1905
CS-EIN-01 --revised-by--> CT-EIN-01
CT-EIN-01 --produces--> CS-EIN-02
CS-EIN-02 --revised-by--> CT-EIN-02
CT-EIN-02 --produces--> CS-EIN-03
CS-EIN-03 --revised-by--> CT-EIN-03
CT-EIN-03 --produces--> CS-EIN-04
CS-EIN-04 --revised-by--> CT-EIN-04
CT-EIN-04 --produces--> CS-EIN-05
CS-EIN-05 --revised-by--> CT-EIN-05
CT-EIN-05 --produces--> CS-EIN-06
CS-EIN-06 --hands-off-to--> EG-EIN-01
CS-EIN-06 --hands-off-to--> EG-EIN-02
R-CLASSICAL-ENERGY-ACCUMULATION --fails-to-explain--> FREQUENCY-THRESHOLD
D-LIGHT-QUANTUM-1905 --explains--> FREQUENCY-THRESHOLD
PHOTON-ENERGY --minus--> WORK-FUNCTION
WORK-FUNCTION --yields--> PHOTOELECTRON-KINETIC-ENERGY
A-STOPPING-POTENTIAL --tests--> EQ-EINSTEIN-PHOTOELECTRIC
D-COMPTON --supports--> PHOTON-MOMENTUM
D-QED --reframes--> D-LIGHT-QUANTUM-1905
D-LIGHT-QUANTUM-1905 --instantiates--> P-06
```

## Sources

- Philipp Lenard, [“Ueber die lichtelektrische Wirkung” (1902)](https://doi.org/10.1002/andp.19023130510), *Annalen der Physik* 313, 149–198; pre-1905 photoelectric evidence.
- Einstein, [“Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt” (1905 original)](https://doi.org/10.1002/andp.19053220607); the paper cites Lenard's 1902 measurements and proposes the photoelectric energy balance.
- R. A. Millikan, [“A Direct Photoelectric Determination of Planck's h” (1916)](https://doi.org/10.1103/PhysRev.7.355); later quantitative test and explicit distinction between the equation and light-quantum ontology.
- A. H. Compton, [“A Quantum Theory of the Scattering of X-rays by Light Elements” (1923)](https://doi.org/10.1103/PhysRev.21.483); later energy–momentum transfer and wavelength-shift evidence.
- American Institute of Physics, [Einstein's 1905 chronology](https://history.aip.org/exhibits/einstein/chron-1905.htm); records the 17 March sending date.
- John D. Norton, [Einstein's 1905 statistical argument for light quanta](https://sites.pitt.edu/~jdnorton/Goodies/Einstein_stat_1905/index.html).
- Nobel Prize, [Albert Einstein facts](https://www.nobelprize.org/prizes/physics/1921/einstein/facts/).
- NIST, [“The Planck Constant”](https://www.nist.gov/physics/explainers/planck-constant).
