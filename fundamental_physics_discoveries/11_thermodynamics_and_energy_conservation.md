# First Law of Thermodynamics: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-FIRST-LAW-THERMODYNAMICS-11` |
| Central node | `D-FIRST-LAW-1847-1850` |
| Focal discovery date | 1843–1850 mechanical equivalent of heat and first-law synthesis |
| Main contributors | Julius Robert Mayer, James Prescott Joule, Hermann von Helmholtz and Rudolf Clausius; with important antecedents from Benjamin Thompson (Count Rumford), Humphry Davy and others |
| Domain | Heat, work, internal energy and energy conservation |
| Epistemic status | A fundamental conservation and accounting law within thermodynamic system boundaries; it does not determine process direction or efficiency bounds |

## Central claim

The first law established that heat and work are not separately conserved substances but modes of energy transfer. For a closed system, using the convention that $Q$ is heat supplied to the system and $W$ is work done by the system,

$$
dU=\delta Q-\delta W.
$$

Internal energy $U$ is a state function, whereas heat and work depend on the process path. The discovery unified mechanical, thermal, electrical and chemical transformations through quantitative conservation. It did **not** explain why heat flows spontaneously from hot to cold, why real processes are irreversible, or why a cyclic engine cannot convert heat from one reservoir completely into work; those require the second law.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-CALORIC` | late eighteenth–early nineteenth centuries | Heat represented as a conserved weightless fluid | Quantitative heat bookkeeping succeeds without energy equivalence |
| `TS-RUMFORD-DAVY` | 1798–1799 | Friction and mechanical action generate heat | Unlimited production pressures caloric conservation |
| `TS-MAYER-JOULE` | 1842–1845 | Mechanical, electrical and thermal processes compared quantitatively | A reproducible mechanical equivalent of heat emerges |
| `TS-HELMHOLTZ` | 1847 | Conservation generalized across natural forces | Energy conservation becomes a broad physical principle |
| `TS-JOULE-PRECISION` | 1849–1850 | Paddle-wheel and related experiments refined | Work–heat equivalence becomes quantitatively defensible |
| `TS-CLAUSIUS-FIRST-LAW` | 1850 onward | Heat-engine theory reconciled with conversion of heat into work | Internal-energy accounting separates the first law from Carnot's directionality principle |

## Alternative, incomplete, or superseded pathways

### `R-CALORIC-CONSERVATION`

- **What it is:** A substance theory in which a weightless material called caloric is stored in bodies and flows between them while its total quantity remains conserved in ordinary thermal processes.
- **Proposed/active period:** late eighteenth century–1840s.
- **Core assumption:** Heat is an indestructible conserved fluid rather than a transfer of energy.
- **Why reasonable at the time:** Heating, cooling, conduction, latent heat and calorimetry could be described as storage and transport of a conserved quantity.
- **Successful scope:** Heat capacities, mixing calculations, latent heat and qualitative heat flow.
- **Anomaly or limitation:** Friction, electrical resistance and compression could generate heat repeatedly in proportion to supplied work.
- **Repair program:** Distinguish sensible from latent caloric or suppose that mechanical processes release previously hidden caloric.
- **Discriminator:** If repeated work input produces proportional heating without exhausting a hidden reservoir, strict caloric conservation fails while energy conservation succeeds.
- **Outcome:** Caloric ontology was superseded.
- **Retained structure:** Quantitative calorimetry and balance-law reasoning.

### `R-HEAT-AS-SIMPLE-MOTION`

- **What it is:** A qualitative kinetic hypothesis identifying heat with microscopic agitation but lacking a conserved energy quantity, a reliable conversion coefficient or a complete account of internal molecular modes.
- **Proposed/active period:** seventeenth century–early 1840s.
- **Core assumption:** Thermal effects arise from motion, but no general numerical equivalence between macroscopic work and heat is required.
- **Why reasonable at the time:** Frictional heating and gas expansion suggested a connection between motion and temperature.
- **Successful scope:** It anticipated the kinetic interpretation and explained why mechanical action could heat matter.
- **Anomaly or limitation:** A verbal identification did not yield a universal conservation equation or distinguish translational, rotational, vibrational, interaction and phase energies.
- **Repair program:** Measure several work-to-heat conversions and enlarge “motion” into total internal energy.
- **Discriminator:** Independent mechanical, electrical and gas experiments should yield the same conversion factor within uncertainty.
- **Outcome:** Absorbed into energy conservation and later statistical mechanics.
- **Retained structure:** Microscopic dynamical interpretation of thermal energy.

### `R-PERPETUAL-MOTION-FIRST-KIND`

- **What it is:** A proposed cyclic device that returns to its initial condition while delivering net work without an equivalent decrease of stored energy or an energy input from its surroundings.
- **Proposed/active period:** medieval proposals through the early nineteenth century.
- **Core assumption:** Ingenious mechanical arrangement can create net work from nothing.
- **Why reasonable at the time:** Friction, hidden reservoirs and incomplete accounting made some machines appear self-sustaining.
- **Successful scope:** None as a closed cyclic energy source; some proposals exposed overlooked inputs or storage mechanisms.
- **Anomaly or limitation:** Complete accounting shows depletion, environmental input or measurement error.
- **Repair program:** Add concealed weights, magnets, buoyancy cycles or thermal gradients.
- **Discriminator:** Return every component and reservoir to its initial state and measure the full energy balance.
- **Outcome:** Excluded by the first law.
- **Retained structure:** Whole-system auditing and explicit boundary definition.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1843–1850 mechanical equivalent of heat and first-law synthesis). The proposed/active period is stored in each pathway record.

| Pathway | Generating idea | Crucial discriminator | Retained content |
|---|---|---|---|
| Conserved caloric | Heat is transported but not converted | Repeatable heating proportional to work | Calorimetric balances |
| Qualitative heat-as-motion | Thermal sensation reflects agitation | Same conversion coefficient across mechanisms | Kinetic interpretation |
| Perpetual motion of the first kind | Geometry can create cyclic work | Complete system-and-reservoir accounting | Boundary auditing |
| **Discovery/current: first law** | Heat and work transfer one conserved energy | Closure of quantitative energy balances | Universal thermodynamic accounting |

## Knowledge assets

- `A-CALORIMETRY`: measurement of temperature change, heat capacity and latent heat.
- `A-MECHANICAL-WORK`: quantitative work from force through distance, including falling weights.
- `A-ELECTRICAL-HEATING`: reproducible conversion of electrical work into thermal change.
- `A-RUMFORD-FRICTION`: sustained heat production by cannon boring.
- `A-JOULE-EXPERIMENTS`: paddle-wheel, electrical and gas routes to a common equivalent.
- `A-CONSERVATION-TRADITION`: conservation ideas in mechanics and natural philosophy.

## Discovery node and derivation

For Joule's paddle-wheel arrangement, a descending mass transfers approximately

$$
W_{m in}=mgh
$$

of mechanical work to an insulated liquid after corrections for bearing friction, apparatus heat capacity and environmental exchange. If the combined calorimetric heat capacity is $C_{m tot}$ and the measured rise is $\Delta T$,

$$
Q_{m cal}=C_{m tot}\Delta T.
$$

Repeating the experiment at different loads and through different conversion routes tests

$$
W_{m in}=JQ_{m cal},
$$

where $J$ is the mechanical equivalent of a chosen historical heat unit. In modern SI both quantities are measured in joules, so the conversion constant is absorbed into the unit system. The discovery was not one dramatic temperature rise: the signal was small, and credibility came from corrections, replication and convergence among mechanical, electrical and gas experiments.

For a closed system undergoing a finite process,

$$
\Delta U=Q-W.
$$

For quasistatic pressure–volume work alone,

$$
\delta W=p_{\rm ext}\,dV,
\qquad
dU=\delta Q-p_{\rm ext}\,dV.
$$

The notation matters: $dU$ is an exact differential, but $\delta Q$ and $\delta W$ are inexact because two paths between the same equilibrium states can exchange different amounts of heat and work while producing the same $\Delta U$. Over a complete cycle,

$$
\oint dU=0,
\qquad
\oint\delta Q=\oint\delta W.
$$

Energy conservation therefore permits a cyclic heat engine. It does not determine how much of its heat input can become work. That logical gap is the reason the second law must be represented separately.

## Validation and explanatory gains

The first law unifies frictional heating, electrical resistance, gas compression, chemical reactions and mechanical work as energy transformations. It explains why a nominally “lost” mechanical energy reappears as internal energy and why perpetual-motion machines of the first kind fail when every reservoir is included.

Its decisive evidential pattern was cross-route invariance. If mechanical stirring, electric current and gas compression all produce a common relation between controlled input and calorimetric change, the invariant is more plausibly a conserved physical magnitude than a device-specific effect. The concept of internal energy also avoids reducing thermal content to only visible motion or to only one microscopic degree of freedom.

## Limitations and retained status

The first law is an accounting constraint, not a complete dynamics. Both a hot-to-cold heat transfer and its time reverse can satisfy energy conservation. It does not exclude complete cyclic conversion of heat from one equilibrium reservoir into work; the second law supplies that exclusion. Nor does it specify reaction rates, transport coefficients, equations of state or microscopic mechanisms.

Open systems require mass-flow energy terms, while relativistic and gravitational settings require careful definitions of energy and boundary flux. In quantum systems, work may depend on the measurement and driving protocol. These qualifications modify bookkeeping architecture, not the central conservation principle.

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Mechanical, thermal, electrical and chemical changes are unified by energy conservation |
| `P-02` | Separate conversion measurements become instances of one balance law |
| `P-03` | “Where did the caloric go?” becomes “What crossed the boundary and how did internal energy change?” |
| `P-04` | Internal energy becomes an abstract state property not reducible to a visible substance |
| `P-05` | Calorimetry and conservation-style bookkeeping survive the rejection of caloric |
| `P-06` | Competing accounts are tested by closed quantitative balances across multiple conversion routes |

## Edge list

```text
A-RUMFORD-FRICTION --challenges--> R-CALORIC-CONSERVATION
A-CALORIMETRY --measures--> THERMAL-CHANGE
A-MECHANICAL-WORK --compares-with--> THERMAL-CHANGE
A-JOULE-EXPERIMENTS --supports--> D-FIRST-LAW-1847-1850
D-FIRST-LAW-1847-1850 --introduces--> INTERNAL-ENERGY
D-FIRST-LAW-1847-1850 --forbids--> R-PERPETUAL-MOTION-FIRST-KIND
INTERNAL-ENERGY --is-state-function-with--> EXACT-DIFFERENTIAL
HEAT-AND-WORK --are--> PATH-DEPENDENT-TRANSFERS
D-FIRST-LAW-1847-1850 --constrains--> D-SECOND-LAW-1850-1865
D-FIRST-LAW-1847-1850 --instantiates--> P-01
```

## Extended historical investigation

The first law was a distributed discovery, not the property of one experiment or one author. Mayer argued from physiological, mechanical and gas reasoning; Joule pursued increasingly precise conversion measurements; Helmholtz articulated a broad conservation principle; Clausius placed the conversion principle into a thermodynamic structure. Priority claims should therefore be represented by contribution type rather than collapsed into a single “inventor.”

The caloric theory was not foolish. It supported useful measurement and helped Carnot isolate a universal structure in reversible heat engines. Its failure was specific: strict conservation of a heat substance could not accommodate controlled conversion between work and heat. The successor retained calorimetric quantities while changing their ontology from stored fluid to energy transfer.

An evidence ledger clarifies what the first law establishes:

| Observation or test | Caloric conservation | Energy conservation |
|---|---:|---:|
| Ordinary hot-to-cold conduction | Fits | Fits |
| Latent heat bookkeeping | Fits | Fits |
| Sustained frictional heating | Requires hidden caloric | Work becomes internal energy |
| Electrical and mechanical routes yield a common equivalent | No natural universal generator | Directly expected |
| Cyclic machine creates net work with no input | Not uniformly excluded | Forbidden |
| Maximum possible heat-engine efficiency | Not resolved by energy balance alone | Not resolved by first law alone |

For an ideal gas, $U=U(T)$ in the classical approximation. In free expansion into vacuum, $Q=0$ and $W=0$, so

$$
\Delta U=0.
$$

The first law therefore permits the process and predicts no ideal-gas temperature change, but it does not explain why the gas does not spontaneously recontract. That contrast is a clean training example separating conservation from irreversibility.

## AI-oriented inference notes

- Store the sign convention with every first-law equation.
- Distinguish state functions from path-dependent transfers.
- Treat “heat contained in a body” as informal language; thermodynamic heat is boundary transfer.
- Do not infer reversibility or feasibility from a balanced energy equation.
- Attribute the first law as a distributed synthesis supported by multiple experimental routes.
- Link this node to, but do not merge it with, the second law.

## Sources

- Royal Society, [catalogue record for Joule's “On the Mechanical Equivalent of Heat”](https://catalogues.royalsociety.org/CalmView/Record.aspx?id=PT%2F37%2F3&src=CalmView.Catalog).
- James Prescott Joule, [“On the Mechanical Equivalent of Heat” (1850 scan)](https://commons.princeton.edu/josephhenry/wp-content/uploads/sites/71/2021/02/Joule.pdf).
- Royal Society, [historical commentary on Joule's 1850 paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC4360093/).
- American Physical Society, [“December 1840: Joule's Abstract on Converting Mechanical Power Into Heat”](https://www.aps.org/apsnews/2009/12/joule-abstract-converting-mechanical-heat).
- Stanford University, [thermodynamics and the first law](https://web.stanford.edu/~peastman/statmech/thermodynamics.html).
