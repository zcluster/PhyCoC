# Energy Quantization: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-PLANCK-QUANTA-17` |
| Central node | `D-PLANCK-QUANTIZATION-1900` |
| Focal discovery date | 14 December 1900 (Planck's energy-element derivation) |
| Main contributors | Max Planck |
| Domain | Black-body radiation and the origin of quantum theory |
| Epistemic status | Quantized energy exchange is fundamental; Planck's original oscillator interpretation was transitional |

## Central claim

Planck obtained the observed black-body spectrum by counting oscillator energy in discrete elements proportional to frequency. The step supplied a statistical account of his October formula and, in retrospect, avoided the classical high-frequency divergence. Its later photon and quantum-state meanings went beyond Planck's initial interpretation.

## Historical problem

By late 1900, Wien's law described the high-frequency part of the cavity spectrum but disagreed with new long-wavelength measurements by Lummer–Pringsheim and Rubens–Kurlbaum. Planck's October formula accommodated those data, leaving a sharper task for his December argument: derive the resonator entropy–energy relation rather than merely propose another spectral curve. Boltzmann-style counting offered a route, but dividing the resonators' total energy into equal elements was a new assumption whose status was not yet the later photon ontology. Rayleigh's 1900 classical long-wave reasoning was a parallel comparison; the textbook ultraviolet catastrophe and Jeans's refined law are retrospective discriminators, not the sole input that drove Planck's December step.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-THERMAL-SPECTRA` | 19th century | Universal cavity spectrum measured | Temperature and frequency dependence constrained |
| `TS-WIEN` | 1890s | High-frequency law successful | Low-frequency mismatch remains |
| `TS-RAYLEIGH-JEANS` | 1900–1905 | Rayleigh's 1900 long-wave reasoning and later Jeans refinement | Classical high-frequency divergence becomes a retrospective discriminator, not Planck's sole 1900 input |
| `TS-PLANCK` | 1900 | Discrete energy elements used | Full spectrum matched |
| `TS-EINSTEIN-BOHR` | 1905–1913 | Radiation and atomic states quantized | Quantum becomes physical principle |
| `TS-QM` | 1920s | Operators and states formalize quantization | Planck law derived from photon statistics |

## Knowledge assets

- `A-CAVITY-DATA`: precision spectral curves.
- `A-THERMODYNAMICS`: entropy and equilibrium constraints.
- `A-BOLTZMANN-COUNTING`: probability from state multiplicity.
- `A-OSCILLATORS`: matter–radiation exchange model.

## Alternative, incomplete, or superseded pathways

### `R-CLASSICAL-EQUIPARTITION-RADIATION`

- **What it is:** Rayleigh's 1900 long-wave classical mode reasoning, later sharpened by Jeans into the familiar equipartition spectrum with mean mode energy \(k_BT\).
- **Proposed/active period:** June 1900 (Rayleigh's classical result).
- **Assumption:** Each cavity mode has mean energy \(k_BT\).
- **Prediction:** Its later full-frequency equipartition extrapolation grows without bound at high frequency; that textbook ultraviolet comparison was not Planck's December 1900 starting premise.
- **Outcome:** Valid only for \(h\nu\ll k_BT\).

### `R-WIEN-ONLY`

- **What it is:** A black-body model that uses Wien's exponential spectral form as the complete radiation law at every frequency rather than as the high-frequency asymptote.
- **Proposed/active period:** 1896.
- **Scope:** Correct high-frequency asymptotic behavior.
- **Limitation:** Fails at low frequency.
- **Outcome:** Retained as a limit of Planck's law.

### `R-AD-HOC-BLACKBODY-INTERPOLATION`

- **What it is:** Planck's own October 1900 provisional spectral interpolation, which joined the observed regimes before he supplied the December statistical derivation; it is an intermediate stage of the same discovery, not a separate rival author.
- **Proposed/active period:** October 1900, before Planck's statistical derivation.
- **Outcome:** Already introduced constants in a full-spectrum formula, but did not yet justify its entropy law and frequency-dependent energy element by statistical counting.

### Pathway comparison ledger

**Chronology rule:** Each pathway has a pre-14 December 1900 antecedent, but the familiar full-frequency Rayleigh–Jeans divergence is a later diagnostic extension of Rayleigh's June 1900 reasoning, not a fully available premise for Planck. The proposed/active period is stored in each pathway record.

| Pathway | Valid regime | Failed extrapolation | Status |
|---|---|---|---|
| Rayleigh–Jeans equipartition | \(h\nu\ll k_BT\) | Assigns \(k_BT\) to infinitely many high-frequency modes, causing ultraviolet divergence | Retained low-frequency limit |
| Wien distribution | \(h\nu\gg k_BT\) | Misses long-wavelength measured spectrum | Retained high-frequency limit |
| October interpolation | Fit the measured regimes without microscopic counting | Its constants and entropy form lacked a statistical derivation | Planck's December derivation adds a generative rule |
| **Discovery/current: Planck energy quantization** | Energy exchange is organized in units \(h\nu\), generating the full black-body spectrum | Full-spectrum fit and recurrence of the same \(h\) across phenomena | Retained and generalized by quantum theory |

The “ultraviolet catastrophe” became a retrospective name; Planck was responding to precision spectrum data and thermodynamic constraints, not merely a plotted infinity familiar in later textbooks. He also did not instantly embrace Einstein's later light-quanta interpretation. The pathway record should distinguish mathematical energy elements, material-resonator quantization, and photon ontology. Planck's law did not invalidate classical limits; it explains exactly why they work in their asymptotic regimes.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-CAVITY-DATA`, `A-THERMODYNAMICS`, `A-BOLTZMANN-COUNTING`, `A-OSCILLATORS`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-CLASSICAL-EQUIPARTITION-RADIATION` (later full-spectrum diagnostic) | Rayleigh's 1900 classical long-wave reasoning, later sharpened into the equipartition spectrum with mean cavity-mode energy \(k_BT\). | Extending that later full formula to arbitrarily high frequencies diverges; this was not the pressure that Planck used to make his December counting move. |
| `R-WIEN-ONLY` | A black-body model that uses Wien's exponential spectral form as the complete radiation law at every frequency rather than as the high-frequency asymptote. | Fails at low frequency. |
| `R-AD-HOC-BLACKBODY-INTERPOLATION` | Planck's October formula, which joined the measured regimes before discrete-energy counting. | It matched the measured curve but left its entropy form and constants without a statistical generator; it did not lack fitted constants. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Continuously shared energy reframed as discrete exchange. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. This is an auditable rational reconstruction, not a transcript of a scientist's or model's hidden reasoning and not a claim that the endpoint was inevitable. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-PL-01` | Wien's spectrum and Planck's resonator thermodynamics are available, but new long-wavelength cavity data challenge the full-range law. |
| `CS-PL-02` | A revised resonator entropy–energy relation yields an October 1900 formula matching more of the measured spectrum, without a counting rationale. |
| `CS-PL-03` | The problem is recast as finding the multiplicity of energy distributions compatible with a resonator's entropy. |
| `CS-PL-04` | A finite collection of resonators' total energy is provisionally divided into equal elements for combinatorial counting. |
| `CS-PL-05` | The energy element is taken proportional to resonator frequency, introducing an action scale h. |
| `CS-PL-06` | Counting plus the resonator–radiation relation generates the full equilibrium spectrum, while radiation propagation remains classical in Planck's 1900 account. |

##### `CT-PL-01`: `CS-PL-01` → `CS-PL-02` — Repair Wien's full-spectrum extrapolation

- **Input model:** Wien's exponential form and Planck's resonator thermodynamics describe the shorter-wavelength data well.
- **Pressure:** Lummer–Pringsheim and Rubens–Kurlbaum measurements show that the same law fails at longer wavelengths.
- **Protected structure:** Cavity equilibrium, thermodynamic temperature, the successful short-wave regime, and resonator–radiation relations.
- **Hidden assumption:** Wien's particular resonator entropy relation is uniquely fixed by thermodynamics and must hold at every frequency.
- **Operation / change type:** `constraint_change` — Reopen the entropy–energy relation while keeping the successful electromagnetic and equilibrium framework.
- **Output model:** Planck's October 1900 formula interpolates the observed regimes, before discrete-energy counting has justified it.
- **Local justification:** Lummer and Pringsheim's 1900 long-wave paper reports systematic deviations from Wien's law. Planck's 19 October 1900 report opens by acknowledging those results and Rubens–Kurlbaum's measurements communicated at that meeting, then reopens his earlier entropy assumption. The 1901 exposition is a later expanded account, not a source that had to be available in October.
- **Cost/uncertainty:** An empirical interpolation can fit existing points without identifying why its new constants or functional form are physically warranted.
- **Branch status:** `selected`; Wien's law remains a valid short-wave limit.
- **Next question:** What statistical rule gives the new entropy relation rather than merely fitting it?

##### `CT-PL-02`: `CS-PL-02` → `CS-PL-03` — Ask for a counting basis

- **Input model:** A revised spectrum corresponds to a specific entropy dependence on resonator energy.
- **Pressure:** Fit quality alone does not explain that entropy function or the recurrence of its constants.
- **Protected structure:** The measured spectrum, resonator equilibrium, and Boltzmann's link between entropy and multiplicity.
- **Hidden assumption:** A corrected entropy function need only be stipulated as a smooth thermodynamic formula.
- **Operation / change type:** `reweighting` — Seek the number of energy distributions that would yield the required resonator entropy.
- **Output model:** Statistical multiplicity becomes the target of derivation, without yet choosing an energy-element size.
- **Local justification:** Planck's December 1900 and expanded 1901 accounts use Boltzmann's probability reasoning to reconstruct the spectral formula.
- **Cost/uncertainty:** The counting measure is not uniquely supplied by classical electromagnetic theory.
- **Branch status:** `selected`; a phenomenological formula remains an alternative description.
- **Next question:** How can finite total resonator energy be divided into countable configurations?

##### `CT-PL-03`: `CS-PL-03` → `CS-PL-04` — Introduce equal energy elements

- **Input model:** Multiplicity must be computed for resonators sharing fixed total energy.
- **Pressure:** Continuous allocations do not supply the finite integer count this combinatorial construction needs.
- **Protected structure:** Total energy conservation, distinguishable resonators in the calculation, and Boltzmann-style entropy counting.
- **Hidden assumption:** Continuous energy can be assigned a unique finite configuration count without an additional measure rule.
- **Operation / change type:** `representation_shift` — Partition total energy into equal elements and count their distributions among resonators.
- **Output model:** A discrete combinatorial multiplicity is available for a chosen element size.
- **Local justification:** Planck's December account explicitly divides energy into equal elements before counting their allocations.
- **Cost/uncertainty:** The element may be read as a counting device or stronger physical restriction; no photon ontology follows here.
- **Branch status:** `selected`; whether the discreteness is fundamental remains open.
- **Next question:** What determines the element size for different resonator frequencies?

##### `CT-PL-04`: `CS-PL-04` → `CS-PL-05` — Tie element size to frequency

- **Input model:** Finite energy elements permit counting, yielding a resonator entropy that depends on the ratio (U/\epsilon).
- **Pressure:** The already established Wien displacement law requires the resonator entropy to depend on (U/\nu); the counting result must satisfy this scaling without a separate fitted element at each frequency.
- **Protected structure:** High-frequency Wien behavior, the new full-spectrum formula, and a common counting rule.
- **Hidden assumption:** The energy element can have arbitrary frequency dependence while retaining the displacement law.
- **Operation / change type:** `constraint_change` — Match the counting entropy to the displacement-law scaling, which requires \(\epsilon=h\nu\) with a universal \(h\).
- **Output model:** The model has a frequency-dependent element and a candidate universal h.
- **Local justification:** In the expanded 1901 account, Planck first obtains the counting entropy in equation (6), rewrites Wien's displacement law as dependence on \(U/\nu\) in equation (10), and then infers \(\epsilon=h\nu\) in §10. This documents the constraint on the energy element; it does not derive the finite-element counting premise from classical electrodynamics.
- **Cost/uncertainty:** This rule is not derived from classical electrodynamics; its scope outside equilibrium resonators is unproved.
- **Branch status:** `selected`; continuous-field propagation remains in the original framework.
- **Next question:** Does the count reproduce the spectral law and its measured limits?

##### `CT-PL-05`: `CS-PL-05` → `CS-PL-06` — Generate and constrain the radiation law

- **Input model:** Resonator energy is counted in frequency-dependent elements.
- **Pressure:** A new counting assumption must return the observed spectrum across frequencies and temperatures.
- **Protected structure:** Equilibrium thermodynamics, the resonator–radiation relation, Wien's short-wave success, and long-wave data.
- **Hidden assumption:** Matching one frequency range is enough to establish the proposed rule everywhere.
- **Operation / change type:** `coalescence` — Combine entropy counting, thermodynamic temperature, and the resonator–radiation relation to obtain one spectral law.
- **Output model:** Planck's law spans the measured cavity spectrum; later analysis shows Wien and Rayleigh–Jeans forms as limits.
- **Local justification:** The expanded 1901 publication derives the normal spectrum from resonator counting and cites the 1900 data. The modern partition-function algebra below is not Planck's original route.
- **Cost/uncertainty:** Agreement with construction data does not establish discreteness of freely traveling light.
- **Branch status:** `selected`; photon and later quantum-state interpretations are `deferred`.
- **Next question:** Does a frequency-dependent element organize thermal behavior outside cavity radiation?

#### Formal consolidation

The level formula and canonical-ensemble sum below are modern equivalents of Planck's resonator counting. His historical argument used energy elements and multiplicity; it did not start from an oscillator partition function or assert photons.

Planck introduced energy elements:

$$
E_n=nh\nu,
\qquad n=0,1,2,\ldots
$$

The thermal mean oscillator energy is:

$$
\langle E\rangle
=\frac{\sum_{n=0}^{\infty}nh\nu e^{-n\beta h\nu}}
{\sum_{n=0}^{\infty}e^{-n\beta h\nu}}
=\frac{h\nu}{e^{h\nu/(k_BT)}-1}.
$$

Multiplying by the electromagnetic mode density produces spectral energy density:

$$
u(\nu,T)
=\frac{8\pi\nu^2}{c^3}
\frac{h\nu}{e^{h\nu/(k_BT)}-1}.
$$

For \(h\nu\ll k_BT\):

$$
u(\nu,T)\rightarrow\frac{8\pi\nu^2k_BT}{c^3},
$$

the Rayleigh–Jeans limit. For \(h\nu\gg k_BT\), exponential suppression yields Wien behavior and prevents ultraviolet divergence.

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Continuously shared energy reframed as discrete exchange

- `P-02` — **Permit a new representation, ontology, or mechanism:** Frequency-dependent energy elements accepted

- `P-03` — **Make the new structure generative:** Spectral curves generated from discrete state counting

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

#### `EG-PL-01` — Test discrete oscillator energy beyond cavity radiation

- **Source domain:** Equilibrium cavity radiation calculated by frequency-dependent resonator energy elements.
- **Target domain:** Thermal energy and heat capacity of material oscillators in a solid, an extension developed after 1900 rather than a prediction Planck himself established that December.
- **Novel consequence:** If material oscillator modes also admit frequency-dependent energy spacing, their heat capacity should fall below classical equipartition as temperature becomes small relative to their mode-energy scale.
- **Failure condition:** A well-characterized oscillator regime retaining strictly classical heat capacity when hν is much larger than thermal energy, after accounting for mode distributions and other degrees of freedom, would challenge this extension. Failure of a one-frequency solid model would not by itself refute the cavity law.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Spectral curves generated from discrete state counting

- `P-04` — **Unify previously separated domains or phenomena:** Thermodynamics, statistics, and radiation unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Wien and Rayleigh–Jeans laws retained as limits. Its quantitative or otherwise discriminating test strategy is: Full-spectrum fit and universal \(h\) supplied tests. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Wien and Rayleigh–Jeans laws retained as limits

- `P-06` — **Prioritize discriminating tests:** Full-spectrum fit and universal \(h\) supplied tests

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Continuously shared energy reframed as discrete exchange | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Frequency-dependent energy elements accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Spectral curves generated from discrete state counting | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Thermodynamics, statistics, and radiation unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Wien and Rayleigh–Jeans laws retained as limits | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Full-spectrum fit and universal \(h\) supplied tests | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-PLANCK-QUANTIZATION-1900` |
| Focal date | 14 December 1900 (Planck's energy-element derivation) |
| Central claim | Planck obtained the observed black-body spectrum by counting oscillator energy in discrete elements proportional to frequency. The step supplied a statistical account of his October formula and, in retrospect, avoided the classical high-frequency divergence. Its later photon and quantum-state meanings went beyond Planck's initial interpretation. |
| Domain | Black-body radiation and the origin of quantum theory |
| Epistemic status | Quantized energy exchange is fundamental; Planck's original oscillator interpretation was transitional |
| Generative role | Spectral curves generated from discrete state counting |
| Retained structure | Wien and Rayleigh–Jeans laws retained as limits |

Key formal relations, consolidated from the derivation above:

$$
E_n=nh\nu,
\qquad n=0,1,2,\ldots
$$

$$
\langle E\rangle
=\frac{\sum_{n=0}^{\infty}nh\nu e^{-n\beta h\nu}}
{\sum_{n=0}^{\infty}e^{-n\beta h\nu}}
=\frac{h\nu}{e^{h\nu/(k_BT)}-1}.
$$

$$
u(\nu,T)
=\frac{8\pi\nu^2}{c^3}
\frac{h\nu}{e^{h\nu/(k_BT)}-1}.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-PL-01` — Frequency scaling of the energy element

- **Classification:** `NOVEL-THEORETICAL-CONSTRAINT`, `RETRODICTION-OR-EXPLANATION`.
- **Origin and date:** Planck's 14 December 1900 statistical account, expanded in his 1901 *Annalen der Physik* paper, especially equations (6), (10)–(12) and §10. The October 1900 spectrum had already been proposed in response to the long-wavelength measurements.
- **Derivation and inputs:** distributing \(P\) equal energy elements among \(N\) resonators gives an entropy function of \(U/\epsilon\); the previously known Wien displacement law independently constrains resonator entropy to a function of \(U/\nu\). Within this counting model, consistency requires \(\epsilon=h\nu\) with a universal constant \(h\), and thermodynamic differentiation recovers the spectral law.
- **Novelty and test status:** the frequency scaling is a new theoretical constraint on the counting device, not a parameter-free forecast of a new radiation curve. Planck's October formula was fitted against existing measurements, and the December/1901 derivation returned essentially that same formula. The already known Stefan–Boltzmann and Wien-displacement laws are inputs or retained limits, not new December predictions.
- **Scope and failure condition:** a reliably measured equilibrium black-body spectrum incompatible with one universal \(h\) in the resonator law would defeat this construction. Later photoelectric and atomic applications of \(h\) required further conceptual moves; they cannot be credited as predictions of this 1900 step alone.

## Validation and explanatory gains

- One formula fits the spectrum across frequencies and temperatures.
- Integrating gives Stefan–Boltzmann scaling \(j^\star=\sigma T^4\).
- The peak satisfies Wien displacement \(\lambda_{\max}T=b\).
- \(h\) reappears in photoelectricity, atomic spectra, and all quantum mechanics.

## Limitations and retained status

Planck's 1900 step did not by itself assert freely propagating photons. The historical “ultraviolet catastrophe” terminology and derivation matured after the initial paper. Classical radiation remains the correct limit when occupation numbers are large and quantum discreteness is negligible.

## Extended historical investigation

### The empirical black-body problem

A black body is an ideal absorber and emitter whose equilibrium spectrum depends only on temperature. Experimental cavity radiation was valuable because it suppressed material-specific reflectivity. Several constraints were known:

$$
j^\star=\sigma T^4,
$$

and:

$$
\lambda_{\max}T=b.
$$

A successful spectrum had to recover total-power and peak-shift laws while fitting both long and short wavelengths.

### Classical mode counting and the ultraviolet problem

The number of electromagnetic modes per unit volume between \(\nu\) and \(\nu+d\nu\) is:

$$
g(\nu)d\nu
=\frac{8\pi\nu^2}{c^3}d\nu.
$$

Classical equipartition assigns average energy \(k_BT\) per mode:

$$
u_{\mathrm{RJ}}(\nu,T)
=\frac{8\pi\nu^2}{c^3}k_BT.
$$

Integrating:

$$
\int_0^\infty
u_{\mathrm{RJ}}(\nu,T)\,d\nu
\rightarrow\infty.
$$

The divergence shows that classical equipartition and an unlimited continuum of modes cannot both govern equilibrium radiation at all frequencies. Historically, the phrase “ultraviolet catastrophe” and the standard textbook contrast developed around the period rather than appearing as Planck's sole starting point.

### Planck distribution from discrete energies

For oscillator levels:

$$
E_n=nh\nu.
$$

The single-mode partition function is:

$$
Z
=\sum_{n=0}^{\infty}e^{-\beta nh\nu}
=\frac{1}{1-e^{-\beta h\nu}}.
$$

Mean energy follows:

$$
\langle E\rangle
=-\frac{\partial\ln Z}{\partial\beta}
=\frac{h\nu}{e^{\beta h\nu}-1}.
$$

Multiplication by mode density gives Planck's law:

$$
u(\nu,T)
=\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_BT)}-1}.
$$

The exponential suppresses high-frequency occupation. Integrating with:

$$
x=\frac{h\nu}{k_BT}
$$

produces:

$$
u_{\mathrm{total}}
=aT^4,
$$

recovering Stefan–Boltzmann scaling and relating \(a\) to \(h,k_B,c\).

### Limiting cases as structural retention

For \(x=h\nu/(k_BT)\ll1\):

$$
e^x-1\approx x,
$$

so:

$$
u(\nu,T)
\approx\frac{8\pi\nu^2k_BT}{c^3}.
$$

For \(x\gg1\):

$$
u(\nu,T)
\approx\frac{8\pi h\nu^3}{c^3}e^{-h\nu/(k_BT)}.
$$

Planck's formula did not simply discard earlier laws; it explained why each worked in its regime. This is a textbook instance of `P-05`.

### What Planck did and did not initially claim

Planck's quantization was tied to energy exchange and resonator counting. He did not immediately embrace Einstein's later claim that freely propagating radiation itself behaves as localized quanta. The historical transition should therefore be:

```text
PLANCK-ENERGY-ELEMENT
--contributes-to-->
EINSTEIN-LIGHT-QUANTUM
--contributes-to-->
QUANTIZED-EM-FIELD
```

not a single undifferentiated `PHOTON-DISCOVERY-1900`.

### Constants and dimensional transformation

Planck's constant has dimensions of action:

$$
[h]=\mathrm{energy}\times\mathrm{time}.
$$

Together with \(c\) and \(G\), it defines Planck scales:

$$
\ell_P=\sqrt{\frac{\hbar G}{c^3}},
\qquad
t_P=\sqrt{\frac{\hbar G}{c^5}},
\qquad
m_P=\sqrt{\frac{\hbar c}{G}}.
$$

These combinations do not prove that known physics is valid or discrete at those scales; they identify where quantum and gravitational dimensions meet.

Since the 2019 SI revision:

$$
h=6.62607015\times10^{-34}\ \mathrm{J\,s}
$$

is exact by definition. Experiments used to determine \(h\) now realize mass and electrical standards through fixed constants and tested physical relations.

### Evidence ledger

| Evidence | Role |
|---|---|
| Full cavity spectrum | Direct target of Planck law |
| Low-frequency limit | Retains classical equipartition |
| High-frequency falloff | Demonstrates quantum suppression |
| Photoelectric slope | Independent appearance of \(h\) |
| Atomic spectra | Quantized energy differences |
| Specific heat freeze-out | Quantum occupation of material modes |
| Compton scattering | Photon energy–momentum |

### Scope

Planck's spectrum assumes thermal equilibrium and ideal black-body radiation. Real emitters have emissivity:

$$
I_\nu=\epsilon_\nu B_\nu(T),
\qquad
0\le\epsilon_\nu\le1.
$$

Lasers, squeezed light, and other nonequilibrium fields do not follow a thermal Planck distribution. Quantization is general; the Planck spectrum is a particular equilibrium consequence.

## AI-oriented inference notes

- Do not equate `ENERGY-QUANTIZATION-1900` with full quantum mechanics.
- Store Planck law's equilibrium assumptions.
- Use asymptotic relations to connect superseded laws as valid limits.
- Distinguish a fixed SI value from absence of experimental tests of quantum relations.

## Additional quantitative and epistemic notes

Planck's interpolation matched the observed black-body spectrum by assigning resonator energies \(E_n=nh\nu\). In the high-frequency limit it reproduces Wien behavior; for \(h\nu\ll k_BT\),

$$
\frac{1}{e^{h\nu/k_BT}-1}\simeq\frac{k_BT}{h\nu},
$$

so Planck's law approaches the Rayleigh–Jeans result. The latter diverges when integrated over arbitrarily high frequencies, while the exponential quantum factor makes the total finite and yields the Stefan–Boltzmann law.

Historically, Planck's interpretation of the energy elements evolved; it is too simple to say he immediately asserted that all electromagnetic energy travels as particles. The stronger light-quantum ontology came through Einstein and later scattering evidence. A useful knowledge graph therefore separates `DISCRETE-OSCILLATOR-COUNTING`, `PLANCK-SPECTRUM`, and `LIGHT-QUANTUM-ONTOLOGY`. The constant \(h\) became the bridge connecting thermal radiation, photoelectric thresholds, atomic spectra, and quantum phase.

## Edge list

```text
A-CAVITY-DATA --constrains--> D-PLANCK-QUANTIZATION-1900
A-CAVITY-DATA --constrains--> CS-PL-01
CS-PL-01 --revised-by--> CT-PL-01
CT-PL-01 --produces--> CS-PL-02
CS-PL-02 --revised-by--> CT-PL-02
CT-PL-02 --produces--> CS-PL-03
CS-PL-03 --revised-by--> CT-PL-03
CT-PL-03 --produces--> CS-PL-04
CS-PL-04 --revised-by--> CT-PL-04
CT-PL-04 --produces--> CS-PL-05
CS-PL-05 --revised-by--> CT-PL-05
CT-PL-05 --produces--> CS-PL-06
CS-PL-06 --hands-off-to--> EG-PL-01
R-WIEN-ONLY --fails-at--> LOW-FREQUENCY
R-CLASSICAL-EQUIPARTITION-RADIATION --fails-at--> HIGH-FREQUENCY
A-BOLTZMANN-COUNTING --enables--> EQ-PLANCK-MEAN-ENERGY
EQ-PLANCK-MEAN-ENERGY --generates--> EQ-PLANCK-SPECTRUM
EQ-PLANCK-SPECTRUM --retains-limit--> R-WIEN-ONLY
EQ-PLANCK-SPECTRUM --retains-limit--> R-CLASSICAL-EQUIPARTITION-RADIATION
D-PLANCK-QUANTIZATION-1900 --precedes--> D-QUANTUM-MECHANICS
D-PLANCK-QUANTIZATION-1900 --instantiates--> P-05
```

## Sources

- Wilhelm Wien, [“Ueber die Energievertheilung im Emissionspectrum eines schwarzen Körpers” (1896; original text)](https://de.wikisource.org/wiki/Ueber_die_Energievertheilung_im_Emissionspectrum_eines_schwarzen_K%C3%B6rpers).
- Otto Lummer and Ernst Pringsheim, [“Ueber die Strahlung des schwarzen Körpers für lange Wellen” (1900; original scan)](https://uni-tuebingen.de/fileadmin/Uni_Tuebingen/Fakultaeten/MathePhysik/Institute/IAP/Forschung/MOettel/Geburt_QM/lummer.pdf), pp. 163–180.
- Max Planck, [“Ueber eine Verbesserung der Wien'schen Strahlungsgleichung” (19 October 1900; original scan)](https://uni-tuebingen.de/fileadmin/Uni_Tuebingen/Fakultaeten/MathePhysik/Institute/IAP/Forschung/MOettel/Geburt_QM/planck_VerhDPG_2_202_1900.pdf), pp. 202–204.
- Max Planck, [“Ueber das Gesetz der Energieverteilung im Normalspectrum” (1901 expanded account of the 1900 talks)](https://de.wikisource.org/wiki/Ueber_das_Gesetz_der_Energieverteilung_im_Normalspectrum).
- NIST, [“Kilogram: Mass and Planck's Constant”](https://www.nist.gov/si-redefinition/kilogram/kilogram-mass-and-plancks-constant).
- Nobel Prize, [Max Planck facts](https://www.nobelprize.org/prizes/physics/1918/planck/facts/).
- German Physical Society archive, [Planck's 1900 paper](https://onlinelibrary.wiley.com/doi/10.1002/andp.19013090310).
