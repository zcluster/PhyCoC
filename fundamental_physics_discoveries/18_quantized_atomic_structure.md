# Quantized Atomic Structure: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-BOHR-ATOM-22` |
| Central node | `D-BOHR-ATOM-1913` |
| Focal discovery date | July 1913 (Bohr trilogy begins) |
| Main contributors | Niels Bohr, building on Rutherford, Planck, Einstein, Balmer and spectroscopy |
| Domain | Atomic energy levels and spectra |
| Epistemic status | Discrete atomic energy levels are fundamental; Bohr's definite circular electron orbits are superseded |

## Central claim

Bohr combined Rutherford's nucleus with quantum postulates to explain hydrogen's spectral regularities and atomic stability. The model's successful energy spectrum was retained by quantum mechanics, while its classical orbits with imposed rules were replaced by wavefunctions and operators.

## Historical problem

Rutherford's 1911 scattering model concentrated positive charge in a small nucleus, but an electron orbit governed without alteration by classical mechanics and electrodynamics had no stable atomic size: an accelerating charge would radiate and its orbit shrink. Independently, Balmer–Rydberg line relations showed reproducible discrete frequencies that continuous orbital emission did not explain. Planck's constant made a new atomic scale available, while Nicholson's earlier quantum-like orbit constructions showed both promise and unresolved spectral difficulties. Bohr's July 1913 task was to retain the nuclear atom yet specify stationary configurations and transition radiation capable of generating hydrogen's line law; later wavefunctions and measured many-electron successes were not construction inputs.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-SPECTRAL-LINES` | 19th century | Atoms emit discrete line series | Empirical formulas lack mechanism |
| `TS-RUTHERFORD` | 1911 | Compact nucleus established | Classical electron orbit unstable |
| `TS-BOHR` | 1913 | Stationary states and quantum jumps postulated | Hydrogen spectrum derived |
| `TS-SOMMERFELD` | 1916 | Elliptical orbits and relativistic corrections | Partial fine-structure fit |
| `TS-QUANTUM-MECHANICS` | 1925 onward | Orbit postulates replaced | Energy eigenstates generalized |

## Knowledge assets

- `A-RUTHERFORD-NUCLEUS`: Coulomb central potential.
- `A-PLANCK-EINSTEIN`: \(E=h\nu\).
- `A-BALMER-RYDBERG`: numerical spectral law.
- `A-ATOMIC-STABILITY`: constraint on acceptable dynamics.

## Alternative, incomplete, or superseded pathways

### `R-CLASSICAL-PLANETARY-ATOM`

- **What it is:** A Rutherford-style classical atom in which electrons follow continuously allowed mechanical orbits around a compact positive nucleus under the Coulomb force.
- **Proposed/active period:** 1911–1912.
- **Anomaly:** Accelerating charge should radiate and spiral inward.
- **Outcome:** Replaced by stationary quantum states.

### `R-THOMSON-DIFFUSE-ATOM`

- **What it is:** Thomson's pre-nuclear atom, with electrons embedded in extended positive charge and small oscillations used to model spectral behavior.
- **Proposed/active period:** 1904.
- **Why reasonable:** It incorporated the electron while preserving overall neutrality and avoided an immediately collapsing planetary electron.
- **Limitation:** Rutherford scattering required concentrated positive charge, and the model did not generate the hydrogen spectrum.
- **Outcome:** Superseded; atomic compositeness and electron degrees of freedom were retained.

### `R-NICHOLSON-PROTOQUANTIZED-ATOM`

- **What it is:** Nicholson's 1911–1912 celestial and atomic models using discrete angular-momentum conditions to calculate selected spectral lines before Bohr's hydrogen theory.
- **Proposed/active period:** 1911–1912.
- **Why reasonable:** They connected emerging quantum ideas with line spectra and nuclear atoms.
- **Limitation:** The hypothetical substances and spectral assignments did not provide a general stable-atom theory.
- **Outcome:** Superseded, while quantized angular momentum became an important precursor resource.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (July 1913 (Bohr trilogy begins)). The proposed/active period is stored in each pathway record.

| Pathway | Repair sequence | Persistent failure | Retained element |
|---|---|---|---|
| Classical planetary atom | Add radiation damping or special stability assumptions | Collapse and continuous spectra | Coulomb nucleus and correspondence regime |
| Thomson diffuse atom | Embed electrons in extended positive charge | Rutherford scattering and hydrogen spectra | Atomic compositeness |
| Nicholson proto-quantized atoms | Impose discrete angular momentum on speculative atomic systems | No general hydrogen or many-element theory | Quantized-angular-momentum precursor |
| **Discovery/current: Bohr's 1913 stationary-state atom** | Keep Coulomb motion within selected nonradiating states; assign radiation to quantum transitions | Hydrogen wavelengths, ionization scale, and risky helium-ion extension; emission dynamics unresolved | Nuclear atom and discrete energies retained, literal orbits later superseded |

The old quantum theory was not a useless wrong turn. It predicted the hydrogen energy scale, ionization energy, and spectral series, while correspondence arguments connected large quantum numbers to classical motion. Its failure became visible when researchers could not extend orbit quantization consistently across nonintegrable or many-electron systems. Matrix mechanics deliberately began with observable transition quantities; wave mechanics supplied eigenvalue problems. Both retained quantized stationary energies while discarding definite microscopic Kepler orbits.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-RUTHERFORD-NUCLEUS`, `A-PLANCK-EINSTEIN`, `A-BALMER-RYDBERG`, `A-ATOMIC-STABILITY`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-CLASSICAL-PLANETARY-ATOM` | A Rutherford-style classical atom in which electrons follow continuously allowed mechanical orbits around a compact positive nucleus under the Coulomb force. | An orbiting charge should radiate continuously and lose orbital energy, giving neither stable atoms nor discrete hydrogen lines. |
| `R-THOMSON-DIFFUSE-ATOM` | Thomson's pre-nuclear atom, with electrons embedded in extended positive charge and small oscillations used to model spectral behavior. | Rutherford scattering required concentrated positive charge, and the model did not generate the hydrogen spectrum. |
| `R-NICHOLSON-PROTOQUANTIZED-ATOM` | Nicholson's 1911–1912 celestial and atomic models using discrete angular-momentum conditions to calculate selected spectral lines before Bohr's hydrogen theory. | The hypothetical substances and spectral assignments did not provide a general stable-atom theory. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Radiation failure reframed by stationary states. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by information available at the focal discovery date; later confirmations, modern notation, and rival branches must be distinguished from contemporary inputs.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-BOH-01` | Rutherford's nucleus organizes scattering, but classical orbiting electrons radiate continuously while atoms persist. **Open question:** Which microscopic assumption must change? |
| `CS-BOH-02` | Exceptional stationary atomic configurations can persist without continuous radiation. **Open question:** How can light nevertheless be emitted? |
| `CS-BOH-03` | Radiation accompanies changes between stationary configurations and has frequency set by their energy difference. **Open question:** Which configurations are permitted? |
| `CS-BOH-04` | Planck's h and a large-orbit correspondence condition constrain one-electron binding energies. **Open question:** Does this yield the observed line pattern? |
| `CS-BOH-05` | A discrete Coulomb binding-energy sequence produces hydrogen transition frequencies. **Open question:** Does its coefficient match Rydberg's measured constant? |
| `CS-BOH-06` | The coefficient and hydrogen spectrum match, although nonradiating orbits remain postulates. **Open question:** Can this survive beyond hydrogen? |

##### `CT-BOH-01`: `CS-BOH-01` → `CS-BOH-02` — Exempt selected configurations from continuous radiation

- **Input model:** Rutherford's nuclear atom with classical Coulomb motion and electrodynamic radiation.
- **Pressure:** An accelerated electron should spiral inward, contrary to persistent atoms.
- **Protected structure:** The compact nucleus and Coulomb binding.
- **Hidden assumption:** Ordinary radiation theory applies unchanged to every microscopic orbit.
- **Operation / change type:** `constraint_change` — Postulate nonradiating stationary configurations instead of decay along all classically allowed paths.
- **Output model:** Atomic persistence becomes possible, but permitted configurations remain unspecified.
- **Local justification:** Bohr's 1913 first paper contrasts classical orbital radiation with stable atomic dimensions before introducing exceptional states.
- **Cost/uncertainty:** Stationarity is imposed, not derived from ordinary mechanics.
- **Next question:** What produces the observed spectral radiation?

##### `CT-BOH-02`: `CS-BOH-02` → `CS-BOH-03` — Assign radiation to transitions

- **Input model:** Persistent states can exist without continuous radiation.
- **Pressure:** Atoms still emit sharply defined spectral lines.
- **Protected structure:** Energy conservation and the quantum energy–frequency relation.
- **Hidden assumption:** Emitted-light frequency must equal the electron's instantaneous orbital frequency.
- **Operation / change type:** `reinterpretation` — Attribute light frequency to the energy difference between two stationary configurations.
- **Output model:** The transition rule hν = Ei − Ef replaces continuous in-orbit emission.
- **Local justification:** Planck–Einstein energy-frequency ideas and line spectra were available before July 1913.
- **Cost/uncertainty:** The mechanism and timing of a quantum jump remain unexplained.
- **Next question:** Which state energies make the rule predictive?

##### `CT-BOH-03`: `CS-BOH-03` → `CS-BOH-04` — Constrain states using h and correspondence

- **Input model:** Rutherford's one-electron Coulomb system has a continuous classical range of binding energies.
- **Pressure:** That range selects neither discrete lines nor a characteristic atomic size.
- **Protected structure:** Coulomb mechanics within idealized stationary orbits, Planck's h, and slow-vibration classical behavior.
- **Hidden assumption:** Classical mechanics alone selects the allowed binding energies.
- **Operation / change type:** `constraint_change` — Introduce a discrete quantum condition whose large-orbit transition frequency approaches orbital frequency.
- **Output model:** A selected sequence of one-electron binding energies; circular angular-momentum quantization is an equivalent familiar form.
- **Local justification:** Bohr's 1913 paper discusses formation radiation and slow-vibration agreement before angular-momentum language; mvr = nħ was not his sole starting axiom.
- **Cost/uncertainty:** The quantum condition lacks a general microscopic derivation.
- **Next question:** What spectrum does the sequence generate?

##### `CT-BOH-04`: `CS-BOH-04` → `CS-BOH-05` — Generate the hydrogen frequency pattern

- **Input model:** Discrete Coulomb binding energies and the transition rule.
- **Pressure:** Balmer–Rydberg reciprocal-square regularities need a physical interpretation.
- **Protected structure:** Observed lines, Coulomb attraction, and a universal h.
- **Hidden assumption:** Spectral integers are only fit labels, not atomic-state labels.
- **Operation / change type:** `coalescence` — Combine binding-energy scaling with transition-energy differences.
- **Output model:** Hydrogen frequencies proportional to 1/nf² − 1/ni².
- **Local justification:** Balmer's 1885 hydrogen-line regularity predates Bohr's proposed state sequence; the form does not depend on later quantum mechanics.
- **Cost/uncertainty:** Hydrogen agreement does not establish the same orbit rules for many-electron atoms.
- **Next question:** Is the coefficient right without another arbitrary fit?

##### `CT-BOH-05`: `CS-BOH-05` → `CS-BOH-06` — Compare the coefficient and retain the unresolved mechanism

- **Input model:** A reciprocal-square formula whose coefficient depends on charge, electron mass, h, and light speed.
- **Pressure:** Matching the pattern is weaker than matching its independently determined scale.
- **Protected structure:** Previously measured constants and hydrogen wavelengths.
- **Hidden assumption:** Any reciprocal-square expression automatically explains the measured Rydberg constant.
- **Operation / change type:** `enrichment` — Compare the derived coefficient and atomic scale with independent measurements.
- **Output model:** A constrained hydrogen atom with stable levels and line frequencies, not a full emission dynamics.
- **Local justification:** Pre-1913 spectroscopy enabled the comparison; Franck–Hertz and later quantum mechanics are not construction inputs.
- **Cost/uncertainty:** Fine structure, intensities, and many-electron structure remain open.
- **Next question:** Which claims survive in hydrogen-like ions?

#### Formal consolidation

The following circular-orbit derivation uses modern notation. It is equivalent to part of Bohr's result but was not his sole historical route to the 1913 quantum condition.

Bohr imposed:

$$
m_ev_nr_n=n\hbar.
$$

Together with Coulomb centripetal balance:

$$
\frac{m_ev_n^2}{r_n}
=\frac{e^2}{4\pi\epsilon_0r_n^2}.
$$

Solving gives:

$$
r_n=a_0n^2,
\qquad
a_0=\frac{4\pi\epsilon_0\hbar^2}{m_ee^2},
$$

and:

$$
E_n
=-\frac{m_ee^4}{2(4\pi\epsilon_0)^2\hbar^2}\frac{1}{n^2}
=-\frac{13.6\ \mathrm{eV}}{n^2}.
$$

Radiative transitions satisfy:

$$
h\nu=E_{n_i}-E_{n_f},
$$

leading to:

$$
\frac{1}{\lambda}
=R_\infty\left(
\frac{1}{n_f^2}-\frac{1}{n_i^2}
\right).
$$

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Radiation failure reframed by stationary states

- `P-02` — **Permit a new representation, ontology, or mechanism:** Quantum jumps and nonradiating states accepted

- `P-03` — **Make the new structure generative:** Rydberg regularity generated from quantized states

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain does not establish the target-domain claim; state the novel consequence and a possible failure condition before using later evidence as validation.

#### `EG-BOH-01` — Extend the one-electron model to hydrogen-like ions

- **Source domain:** Hydrogen's one-electron spectrum and the Coulomb stationary-state calculation.
- **Target domain:** Singly ionized helium and other one-electron ions with nuclear charge Z greater than one.
- **Novel consequence:** Line frequencies should scale approximately as Z² after reduced-mass corrections, allowing disputed spectral-series assignments to be tested.
- **Failure condition:** Persistent one-electron ion series lacking the predicted charge scaling, beyond finite-mass and spectroscopic corrections, would defeat the extension.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Rydberg regularity generated from quantized states

- `P-04` — **Unify previously separated domains or phenomena:** Nuclear atom, spectra, and energy quanta unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Rutherford nucleus and classical Coulomb force retained. Its quantitative or otherwise discriminating test strategy is: Line wavelengths and ionization energies tested. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Rutherford nucleus and classical Coulomb force retained

- `P-06` — **Prioritize discriminating tests:** Line wavelengths and ionization energies tested

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Radiation failure reframed by stationary states | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Quantum jumps and nonradiating states accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Rydberg regularity generated from quantized states | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Nuclear atom, spectra, and energy quanta unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Rutherford nucleus and classical Coulomb force retained | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Line wavelengths and ionization energies tested | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-BOHR-ATOM-1913` |
| Focal date | July 1913 (Bohr trilogy begins) |
| Central claim | Bohr combined Rutherford's nucleus with quantum postulates to explain hydrogen's spectral regularities and atomic stability. The model's successful energy spectrum was retained by quantum mechanics, while its classical orbits with imposed rules were replaced by wavefunctions and operators. |
| Domain | Atomic energy levels and spectra |
| Epistemic status | Discrete atomic energy levels are fundamental; Bohr's definite circular electron orbits are superseded |
| Generative role | Rydberg regularity generated from quantized states |
| Retained structure | Rutherford nucleus and classical Coulomb force retained |

Key formal relations, consolidated from the derivation above:

$$
m_ev_nr_n=n\hbar.
$$

$$
\frac{m_ev_n^2}{r_n}
=\frac{e^2}{4\pi\epsilon_0r_n^2}.
$$

$$
r_n=a_0n^2,
\qquad
a_0=\frac{4\pi\epsilon_0\hbar^2}{m_ee^2},
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-BOH-01` — Further hydrogen-like helium-ion series

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION`.
- **Prediction date and provenance:** In the 1913 first paper, Bohr substituted nuclear charge 2e into his one-electron formula and inferred additional singly ionized helium series, including lines in the extreme ultraviolet and infrared.
- **Independence from construction data:** Hydrogen's Balmer pattern constrained the original atom; the additional helium-ion series were a cross-element consequence. Already observed Pickering and Fowler lines were reassignments or retrodictions, not newly predicted observations.
- **Observable discriminator:** Helium-ion lines should follow the corresponding Z²-scaled reciprocal-square pattern, subject to finite nuclear mass.
- **Later outcome:** Subsequent spectroscopy supported the hydrogen-like ion structure; this did not rescue Bohr's literal circular-orbit ontology.

## Validation and explanatory gains

- Derives hydrogen's Rydberg spectrum and ionization energy.
- Predicts atomic length scale \(a_0\).
- Explains spectral emission as transitions, not arbitrary oscillator frequencies.
- Franck–Hertz experiments support discrete excitation energies.

## Limitations and retained status

Electrons do not follow Bohr trajectories. Reduced mass slightly modifies hydrogen levels; spin, fine structure, Lamb shift, and QED add corrections. The model is pedagogically and asymptotically useful but not a complete atomic theory.

## Extended historical investigation

### The three-part problem Bohr addressed

A viable atomic theory needed to reconcile:

1. Rutherford's compact positive nucleus;
2. long-lived atoms despite classical radiation;
3. discrete, element-specific spectral frequencies.

Bohr responded with postulates rather than a fully dynamical derivation. Electrons occupy stationary states without radiating, and light is emitted or absorbed during transitions:

$$
h\nu=E_i-E_f.
$$

The bold step was not merely quantizing angular momentum; it was suspending classical radiation expectations within stationary states.

### Hydrogen derivation with reduced mass

For charges \(+e\) and \(-e\), use reduced mass:

$$
\mu=\frac{m_em_p}{m_e+m_p}.
$$

Coulomb balance and quantization:

$$
\frac{\mu v^2}{r}
=\frac{e^2}{4\pi\epsilon_0r^2},
$$

$$
\mu vr=n\hbar.
$$

Then:

$$
r_n
=\frac{4\pi\epsilon_0\hbar^2}
{\mu e^2}n^2
$$

and:

$$
E_n
=-\frac{\mu e^4}
{2(4\pi\epsilon_0)^2\hbar^2}
\frac{1}{n^2}.
$$

Using reduced mass explains small isotope shifts and gives a more accurate Rydberg constant for finite nuclear mass.

### Spectral series as one structure

For transition \(n_i\to n_f\):

$$
\frac{1}{\lambda}
=R
\left(
\frac{1}{n_f^2}
-\frac{1}{n_i^2}
\right).
$$

Different fixed \(n_f\) values generate:

- Lyman series: \(n_f=1\), ultraviolet;
- Balmer series: \(n_f=2\), visible/near ultraviolet;
- Paschen series: \(n_f=3\), infrared.

An empirical collection of formulas becomes a single energy-level graph.

### Correspondence principle

For large \(n\), adjacent transition frequencies approach classical orbital frequencies. The correspondence principle demanded that quantum results reproduce classical physics in appropriate limits. It served as a heuristic bridge during theory construction:

$$
n\gg1
\quad\Longrightarrow\quad
\text{quantum frequency relations}
\rightarrow
\text{classical periodic behavior}.
$$

This was not a complete derivation of classical mechanics but a constraint on acceptable quantum theories.

### Experimental tests beyond fitting hydrogen

Franck and Hertz observed discrete electron-energy losses in mercury vapor. Electrons accelerated through particular potential differences excite atoms, producing current features and later spectral emission. The result supported discrete excitation energies without directly confirming Bohr's literal orbits.

Moseley related X-ray frequencies to atomic number, reinforcing nuclear charge and shell structure. Ionization energies, spectral series, and isotope shifts provided further checks.

### Failures of the old quantum theory

The Bohr–Sommerfeld program added elliptical orbits and quantized action integrals:

$$
\oint p_i\,dq_i=n_ih.
$$

It achieved partial success for hydrogen fine structure but failed systematically for:

- helium and general multi-electron atoms;
- spectral intensities and selection rules without extra rules;
- anomalous Zeeman effect;
- consistent treatment of nonintegrable systems;
- a general account of measurement and superposition.

These failures motivated matrix and wave mechanics.

### What quantum mechanics retained

The Schrödinger hydrogen Hamiltonian:

$$
\hat H
=-\frac{\hbar^2}{2\mu}\nabla^2
-\frac{e^2}{4\pi\epsilon_0r}
$$

has eigenvalues:

$$
E_n\propto-\frac{1}{n^2},
$$

retaining Bohr's main spectrum without definite classical paths. States are labeled by:

$$
n,\ell,m
$$

and later spin \(m_s\). Probability density:

$$
|\psi_{n\ell m}(\mathbf r)|^2
$$

replaces orbit location. Angular momentum becomes:

$$
L^2=\hbar^2\ell(\ell+1),
\qquad
L_z=\hbar m,
$$

not Bohr's simple \(L=n\hbar\).

### Precision corrections

The nonrelativistic Coulomb spectrum is modified by:

- reduced mass;
- relativistic fine structure;
- spin–orbit coupling;
- hyperfine nuclear interaction;
- Lamb shift from QED;
- finite proton size.

A rough hierarchy:

$$
E_{\mathrm{gross}}
\gg E_{\mathrm{fine}}
\gg E_{\mathrm{hyperfine/Lamb}}
$$

shows how one retained base model becomes a scaffold for successively smaller corrections.

### Evidence and status ledger

| Component | Status |
|---|---|
| Discrete stationary energies | Retained |
| \(E_n\propto-1/n^2\) for hydrogen | Retained with corrections |
| Photon transition rule | Retained |
| Definite circular electron orbit | Superseded |
| Ad hoc nonradiation postulate | Explained by stationary quantum states |
| Correspondence constraint | Retained as limiting principle |

## AI-oriented inference notes

- Do not draw electron probability clouds as smeared classical orbits.
- Separate fit of spectral energies from explanation of transition intensities.
- Mark Bohr model `transitional-successful-model`.
- Link later quantum numbers to, but do not identify them with, old orbit parameters.

## Additional quantitative and epistemic notes

Bohr combined Rutherford's nucleus, Planck's constant, and the spectroscopic Rydberg regularity. For a Coulomb circular orbit plus \(L=n\hbar\),

$$
r_n=\frac{4\pi\epsilon_0\hbar^2}{m_ee^2}n^2=a_0n^2,
$$

$$
E_n=-\frac{m_ee^4}{2(4\pi\epsilon_0)^2\hbar^2}\frac{1}{n^2}.
$$

Then \(h\nu=E_i-E_f\) generates the hydrogen spectral series and a theoretical expression for the Rydberg constant. The match linked an empirical line formula to atomic structure.

Yet stationary classical orbits and ad hoc quantum jumps lacked a general dynamics. Fine structure, intensities, many-electron atoms, and anomalous Zeeman patterns exposed the limits of successive orbit repairs. Matrix and wave mechanics retained discrete energy levels and transition frequencies while replacing definite electron trajectories with quantum states. The Bohr case is therefore a successful transitional theory: generative enough to reveal structure, but not the final theory of atoms.

## Edge list

```text
A-RUTHERFORD-NUCLEUS --contributes-to--> D-BOHR-ATOM-1913
CS-BOH-01 --revised-by--> CT-BOH-01
CT-BOH-01 --produces--> CS-BOH-02
CS-BOH-02 --revised-by--> CT-BOH-02
CT-BOH-02 --produces--> CS-BOH-03
CS-BOH-03 --revised-by--> CT-BOH-03
CT-BOH-03 --produces--> CS-BOH-04
CS-BOH-04 --revised-by--> CT-BOH-04
CT-BOH-04 --produces--> CS-BOH-05
CS-BOH-05 --revised-by--> CT-BOH-05
CT-BOH-05 --produces--> CS-BOH-06
CS-BOH-06 --hands-off-to--> EG-BOH-01
A-PLANCK-EINSTEIN --enables--> QUANTUM-TRANSITION
A-BALMER-RYDBERG --constrains--> D-BOHR-ATOM-1913
R-CLASSICAL-PLANETARY-ATOM --superseded-by--> D-BOHR-ATOM-1913
D-BOHR-ATOM-1913 --generates--> HYDROGEN-SPECTRUM
D-QUANTUM-MECHANICS --supersedes--> R-BOHR-SOMMERFELD-ORBITS
D-QUANTUM-MECHANICS --retains--> DISCRETE-ENERGY-LEVELS
D-BOHR-ATOM-1913 --instantiates--> P-05
```

## Sources

- Johann Jakob Balmer, [“Notiz über die Spektrallinien des Wasserstoffs” (1885; digitized original)](https://www.e-rara.ch/bau_1/content/titleinfo/30070386).
- Ernest Rutherford, [“The Scattering of α and β Particles by Matter and the Structure of the Atom” (1911)](https://doi.org/10.1080/14786440508637080), *Philosophical Magazine* 21, 669–688.
- Niels Bohr, [On the Constitution of Atoms and Molecules (1913)](https://www.gutenberg.org/ebooks/72787).
- Nobel Prize, [Niels Bohr facts](https://www.nobelprize.org/prizes/physics/1922/bohr/facts/).
- Nobel Prize, [1924 presentation speech on atomic physics](https://www.nobelprize.org/prizes/physics/1924/ceremony-speech/).
- Niels Bohr Archive, [Bohr's 1913 atomic papers](https://nbarchive.ku.dk/collections/bohr-publications/).
