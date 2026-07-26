# Thermodynamics and Energy Conservation: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-THERMODYNAMICS-10` |
| Central node | `D-THERMODYNAMICS-1824-1865` |
| Focal discovery date | 1824–1865 (Carnot through Clausius/Kelvin) |
| Main contributors | Sadi Carnot, James Joule, Julius Mayer, Hermann von Helmholtz, Rudolf Clausius, William Thomson |
| Domain | Heat, work, energy, temperature, and entropy |
| Epistemic status | Fundamental macroscopic framework; microscopic explanation supplied by statistical mechanics |

## Central claim

Thermodynamics established that heat and work are modes of energy transfer, total energy is conserved, and not every energy-conserving process is physically reversible. Entropy supplies a directionality constraint absent from mechanics alone.

## Time slices

| Node | Period | Framework | Transition |
|---|---:|---|---|
| `TS-CALORIC` | 18th–early 19th century | Heat treated as conserved fluid | Good for some conduction and mixing reasoning |
| `TS-CARNOT` | 1824 | Engine efficiency bounded by temperatures | Reversible cycle becomes comparison standard |
| `TS-MECHANICAL-EQUIVALENT` | 1840s | Joule and others quantify heat–work conversion | Caloric conservation rejected |
| `TS-FIRST-LAW` | 1840s–1850s | Energy conservation generalized | Internal energy becomes state function |
| `TS-SECOND-LAW` | 1850s–1860s | Clausius and Kelvin formulate irreversibility | Entropy introduced |
| `TS-STATISTICAL` | Late 19th century onward | Entropy linked to microstates | Macroscopic arrow becomes probabilistic |

## Alternative, incomplete, or superseded pathways

### `R-CALORIC`

- **What it is:** A substance theory of heat in which a weightless, conserved fluid called caloric resides in bodies and flows from higher to lower temperature without being created by ordinary processes.
- **Proposed/active period:** late eighteenth century.
- **Assumption:** Heat is a conserved, weightless substance.
- **Why reasonable:** Heat appears to flow from hot to cold and can be “stored.”
- **Anomaly:** Friction can generate apparently unlimited heat proportional to work input.
- **Repair:** Distinguish sensible and latent caloric.
- **Outcome:** Superseded by energy transfer and microscopic motion.
- **Retained element:** Heat-flow bookkeeping and conservation-style reasoning.

### `R-PERPETUAL-MOTION`

- **What it is:** A family of proposed cyclic machines that either produce net energy with no equivalent input (first kind) or convert heat from a single equilibrium reservoir entirely into work (second kind).
- **Proposed/active period:** medieval proposals through the eighteenth century.
- **Assumption:** A cyclic machine can create work without equivalent input, or convert ambient heat completely to work.
- **Limitation:** Violates first- or second-law constraints.
- **Outcome:** Excluded by general principles rather than device-specific failure.

### `R-HEAT-AS-TRANSLATIONAL-MOTION-ONLY`

- **What it is:** A narrow kinetic model identifying all thermal internal energy solely with translational motion of particles, excluding rotation, vibration, interactions, fields, and phase energy.
- **Proposed/active period:** seventeenth century–1798.
- **Limitation:** It cannot describe realistic heat capacities, latent heat, molecular modes, or interaction energy.
- **Outcome:** Broadened into statistical mechanics of all microscopic degrees of freedom.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1824–1865 (Carnot through Clausius/Kelvin)). The proposed/active period is stored in each pathway record.

Caloric theory successfully represented heat flow, latent heat, and aspects of Carnot's analysis. Its weakness was not ordinary cooling but repeatable heat generation from work. Rumford's cannon boring and Joule's electrical, gas, and paddle-wheel routes showed that different work inputs produced quantitatively equivalent heating.

| Pathway | Repair strategy | Failing discriminator | Retained content |
|---|---|---|---|
| Conserved caloric fluid | Store caloric as latent or sensible heat | Indefinite frictional production proportional to work | Heat-capacity and flow bookkeeping |
| Heat as only molecular motion | Identify all internal energy with simple translational kinetic energy | Phase changes, molecular modes, interactions | Microscopic interpretation, broadened to full internal energy |
| Perpetual motion of first or second kind | Hide an energy source, or draw cyclic work from one equilibrium reservoir | Complete energy and entropy accounting | Excluded; device auditing and two-reservoir engines retained |
| **Discovery/current: thermodynamics and energy conservation** | Heat and work are transfer modes constrained by state energy and entropy | Mechanical equivalents, engine cycles, calorimetry, and universal bounds | Retained as autonomous macroscopic theory |

Energy conservation did not by itself imply the second law: a cyclic engine could conserve energy while converting all absorbed heat into work. Entropy supplied the additional directionality constraint. Carnot's ideal reasoning survived the abandonment of caloric because its reversible-cycle structure could be reinterpreted.

## Knowledge assets

- `A-STEAM-ENGINES`: repeatable heat–work cycles.
- `A-CALORIMETRY`: quantitative heat measurement.
- `A-FRICTION`: mechanical work produces heat.
- `A-IDEAL-CYCLE`: reversible comparison process.
- `A-STATE-VARIABLES`: pressure, volume, and temperature.

## Discovery node and equations

Using the convention that \(Q\) is heat added to a system and \(W\) work done by it, the first law is:

$$
dU=\delta Q-\delta W.
$$

\(U\) is a state function; \(Q\) and \(W\) depend on path. For quasistatic pressure–volume work:

$$
\delta W=p\,dV.
$$

For a reversible process:

$$
dS=\frac{\delta Q_{\mathrm{rev}}}{T}.
$$

For any process in an isolated system:

$$
\Delta S\ge 0.
$$

The maximum efficiency of a heat engine operating between \(T_h\) and \(T_c\) is:

$$
\eta_{\mathrm{Carnot}}
=1-\frac{T_c}{T_h}.
$$

Derivation for a reversible cycle uses \(\Delta S_{\mathrm{cycle}}=0\):

$$
\frac{Q_h}{T_h}=\frac{Q_c}{T_c},
\qquad
\eta=\frac{W}{Q_h}
=1-\frac{Q_c}{Q_h}
=1-\frac{T_c}{T_h}.
$$

## Validation and explanatory gains

- Joule's mechanical-equivalent experiments connect work input to temperature rise.
- Energy accounting unifies mechanical, thermal, chemical, and electrical transformations.
- Carnot bounds explain why no engineering refinement reaches 100% conversion from a finite-temperature heat source.
- Entropy predicts equilibrium direction while allowing local decreases in open systems.

## Limitations and retained status

Thermodynamics does not specify molecular dynamics or fluctuation probabilities. At small scales entropy production fluctuates, though statistical fluctuation theorems constrain it. Equilibrium thermodynamics needs extensions for far-from-equilibrium systems, gravity-dominated systems, and quantum information. Its conservation and inequality structure remains fundamental.

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Heat, work, and other energy forms unified |
| `P-02` | Engine regularities upgraded to state laws and efficiency bounds |
| `P-03` | “How much heat substance?” reframed as energy transfer and entropy |
| `P-04` | Entropy accepted as a new state variable |
| `P-05` | Caloric bookkeeping retained without caloric ontology |
| `P-06` | Calorimetry and cycle efficiencies enforce quantitative constraints |

## Edge list

```text
A-STEAM-ENGINES --motivates--> D-CARNOT-1824
A-FRICTION --challenges--> R-CALORIC
A-CALORIMETRY --tests--> LAW-FIRST
D-CARNOT-1824 --contributes-to--> LAW-SECOND
R-CALORIC --superseded-by--> LAW-FIRST
LAW-FIRST --forbids--> PERPETUAL-MOTION-FIRST-KIND
LAW-SECOND --forbids--> PERPETUAL-MOTION-SECOND-KIND
LAW-SECOND --bounds--> ENGINE-EFFICIENCY
D-THERMODYNAMICS-1824-1865 --precedes--> D-STATISTICAL-MECHANICS
D-THERMODYNAMICS-1824-1865 --instantiates--> P-01
```

## Extended historical investigation

### Thermodynamics is more than two slogans

The mature framework is often summarized by numbered laws:

- **Zeroth law:** thermal equilibrium is transitive, permitting temperature.
- **First law:** energy accounting constrains heat and work.
- **Second law:** entropy production constrains process direction and conversion.
- **Third law:** entropy behavior near absolute zero constrains low-temperature states and makes absolute zero unattainable by finite idealized procedures.

These formulations emerged at different times. They should be represented as a later organized structure rather than a single simultaneous discovery.

### State functions and paths

For a simple compressible closed system:

$$
dU=T\,dS-p\,dV
$$

in the reversible fundamental relation. Thus:

$$
T=\left(\frac{\partial U}{\partial S}\right)_V,
\qquad
p=-\left(\frac{\partial U}{\partial V}\right)_S.
$$

\(U,S,V\) describe state; heat and work describe transfers along a path. A cyclic process returns to the same internal energy:

$$
\oint dU=0,
$$

but may have:

$$
\oint\delta Q=\oint\delta W\neq0.
$$

Confusing \(Q\) with a substance “contained” in the system repeats the caloric ontology that the first law helped replace.

### Joule's inference

In paddle-wheel experiments, a descending weight performed known mechanical work:

$$
W=mgh.
$$

Stirring raised a liquid's temperature. With heat capacity \(C\):

$$
Q=C\Delta T.
$$

Repeated proportionality between \(mgh\) and \(C\Delta T\) supported a mechanical equivalent of heat. The critical point was not that friction “contains heat,” but that controlled work input creates a reproducible internal-energy change.

### Clausius inequality and entropy production

For a cycle:

$$
\oint\frac{\delta Q}{T}\le0.
$$

For a general process:

$$
dS=\frac{\delta Q}{T_b}+dS_{\mathrm{gen}},
\qquad
dS_{\mathrm{gen}}\ge0,
$$

where \(T_b\) is the boundary temperature at heat transfer. Equality holds for an ideal reversible process. Entropy can decrease in an open subsystem if exported:

$$
\Delta S_{\mathrm{system}}<0
$$

while:

$$
\Delta S_{\mathrm{system}}
+\Delta S_{\mathrm{environment}}\ge0.
$$

This prevents the common error that biological order violates the second law.

### Engines, refrigerators, and coefficients of performance

For a heat engine:

$$
W=Q_h-Q_c,
\qquad
\eta=\frac{W}{Q_h}.
$$

Carnot's bound:

$$
\eta\le1-\frac{T_c}{T_h}
$$

depends only on reservoir temperatures. A refrigerator uses work to move heat from cold to hot:

$$
\mathrm{COP}_{\mathrm{R}}
=\frac{Q_c}{W}
\le\frac{T_c}{T_h-T_c}.
$$

A heat pump has:

$$
\mathrm{COP}_{\mathrm{HP}}
=\frac{Q_h}{W}
\le\frac{T_h}{T_h-T_c}.
$$

Coefficients of performance can exceed one without violating conservation because they measure heat moved per work input, not energy created.

### Free energies and spontaneous change

At constant temperature and volume, the Helmholtz free energy:

$$
F=U-TS
$$

decreases toward equilibrium. At constant temperature and pressure, Gibbs free energy:

$$
G=H-TS,
\qquad
H=U+pV
$$

provides the relevant criterion:

$$
\Delta G\le0.
$$

This extends thermodynamics into chemistry, phase equilibrium, and material physics without requiring detailed microscopic trajectories.

### Evidence and applicability ledger

| Node | Quantitative role | Boundary |
|---|---|---|
| Calorimetry | Measures energy changes | Requires calibration and loss control |
| Engine cycles | Tests heat–work conversion | Real friction lowers performance |
| Phase coexistence | Equal chemical potentials/free energies | Equilibrium assumption |
| Black-body radiation | Thermal equation of state for fields | Quantum theory required |
| Small-system fluctuations | Tests stochastic entropy production | Macroscopic inequalities become statistical |
| Black-hole thermodynamics | Links gravity, quantum theory, entropy | Quantum-gravity interpretation incomplete |

### Why thermodynamics survived microscopic revolutions

Statistical mechanics explains entropy and temperature using microstates, but thermodynamic laws are largely insensitive to microscopic details. The same macroscopic structure applies to gases, magnets, radiation, and quantum matter. This is an example of universality and effective theory: higher-level laws can remain autonomous and reliable even when their variables are emergent.

## AI-oriented inference notes

- Never store heat as a state property; use energy transfer.
- Attach sign conventions to the first law.
- Distinguish entropy change from entropy production.
- Treat reversible processes as limiting comparison paths, not ordinary frictionless events readily realized.

## Further quantitative structure

The first law distinguishes state-function internal energy from path-dependent heat and work:

$$
dU=\delta Q-\delta W.
$$

Joule's paddle-wheel and electrical-heating experiments quantified mechanical equivalents of heat, while Mayer, Helmholtz, and others supplied broader conservation arguments. Credit is distributed because experiment, engineering analysis, and theoretical synthesis were not one event.

For a reversible process,

$$
dS=\frac{\delta Q_{\rm rev}}{T},
$$

whereas an isolated irreversible process satisfies \(\Delta S\ge0\). Carnot's ideal efficiency,

$$
\eta_{\max}=1-\frac{T_c}{T_h},
$$

depends only on reservoir temperatures, explaining why no engine can convert all cyclic heat input into work. Statistical mechanics later interpreted entropy microscopically, but thermodynamics remains autonomous: its laws apply without knowing molecular details. Local entropy decreases are compatible with the second law when compensating entropy is exported to an environment.

## Sources

- American Physical Society, [“James Prescott Joule and the Mechanical Equivalent of Heat”](https://www.aps.org/apsnews/2015/06/joule-mechanical-equivalent-heat).
- Stanford Encyclopedia of Philosophy, [“Philosophy of Thermodynamics”](https://plato.stanford.edu/entries/thermodynamics/).
- American Physical Society, [“Joule and the Mechanical Equivalent of Heat”](https://www.aps.org/apsnews/2009/06/joule-mechanical-equivalent-heat).
- NIST, [“Kelvin: Boltzmann Constant”](https://www.nist.gov/si-redefinition/kelvin/kelvin-boltzmann-constant).
