# Hydrostatics and Buoyancy: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-HYDROSTATICS-02` |
| Central node | `D-ARCHIMEDES-BUOYANCY` |
| Focal discovery date | c. 250 BCE (Archimedes' mature hydrostatics) |
| Principal period | Third century BCE |
| Main contributors | Archimedes |
| Domain | Equilibrium of fluids and immersed bodies |
| Epistemic status | A valid classical theory for continuum fluids in static equilibrium |

## Central claim

Archimedean hydrostatics converted qualitative observations about floating into a geometrical theory of pressure, displaced fluid, equilibrium, and stability. Its central buoyancy relation remains correct in the ordinary continuum domain, with corrections required for compressibility, surface tension, nonuniform fields, and microscopic scales.

## Time slices

| Node | Period | Development | Transition |
|---|---:|---|---|
| `TS-PRACTICAL-FLOATING` | Pre-third century BCE | Shipbuilding and weighing supplied empirical knowledge | Practical rules lacked a general proof structure |
| `TS-ARCHIMEDES` | Third century BCE | *On Floating Bodies* treated fluids mathematically | Buoyancy linked to displaced fluid and equilibrium |
| `TS-EARLY-MODERN` | 16th–17th centuries | Hydrostatic pressure and instruments developed | Pascal's law and barometry extended fluid statics |
| `TS-CONTINUUM-MECHANICS` | 18th–19th centuries | Local pressure fields and differential equations formalized | Hydrostatics embedded in general fluid mechanics |
| `TS-MODERN` | 20th century onward | Molecular and relativistic limits identified | Classical relations retained as effective laws |

## Alternative, incomplete, or superseded pathways

### `R-SHAPE-ONLY-FLOATING`

- **What it is:** A qualitative model that treats an object's external geometry or intrinsic “lightness” as the direct cause of floating, without balancing its weight against the weight of displaced fluid.
- **Proposed/active period:** practical shipbuilding tradition before the third century BCE.
- **Assumption:** Floating depends only on geometric shape or an intrinsic “lightness.”
- **Why reasonable:** Hollow ships float while compact pieces of similar material may sink.
- **Limitation:** It misses density ratios and the role of displaced fluid.
- **Repair:** Include total mass, displaced volume, and equilibrium depth.
- **Outcome:** Replaced by a force-balance explanation.
- **Retained element:** Shape matters through displaced volume and stability.

### `R-ELEMENTAL-PLACE`

- **What it is:** The Aristotelian theory that each terrestrial element has a natural region in the cosmos and that unforced bodies rise or fall because their dominant element tends toward that natural place.
- **Proposed/active period:** c. 350 BCE (Aristotelian natural-place theory).
- **Assumption:** Bodies rise or fall primarily because elemental substances seek natural places.
- **Why reasonable:** It organized recurring vertical motions.
- **Limitation:** It did not give a precise magnitude for buoyant support.
- **Outcome:** Superseded by pressure gradients and force balance.
- **Retained element:** Density differences remain decisive, but without teleological motion.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (c. 250 BCE (Archimedes' mature hydrostatics)). The proposed/active period is stored in each pathway record.

| Pathway | What it predicts | Discriminator | Status |
|---|---|---|---|
| Shape-only floating | Geometry directly determines floating | Loading the same hull changes immersion; flooding changes average density | Superseded |
| Elemental natural place | Materials rise or fall toward cosmically assigned regions | Quantitative support follows displaced-fluid weight and pressure gradients | Superseded |
| **Discovery/current: Archimedean hydrostatics** | Upthrust equals displaced-fluid weight; equilibrium requires \(F_B=mg\) | Weighing, displaced volume, fluid-density changes, and pressure measurements | Retained within ordinary fluid statics |

The ancient elemental-place account was broader than a naïve mistake: it integrated terrestrial change into a purposive cosmology. Its weakness for this problem was lack of a measurable force magnitude. A shape-only repair can fit individual examples after the fact, but fails when the same object is loaded, the fluid density changes, or a sealed hull floods. Archimedean reasoning generates all of these contrasts from weight and displacement. Modern fluid statics then supplies the deeper local mechanism—pressure increases with depth—while retaining Archimedes' integrated result.

## Knowledge assets

- `A-LEVERS`: torque and center-of-gravity reasoning.
- `A-GEOMETRY`: volumes and areas of solids.
- `A-DENSITY-COMPARISON`: weighing materials and observing immersion.
- `A-EQUILIBRIUM`: balance as equality of opposed effects.

## Discovery node and mathematical core

`D-ARCHIMEDES-BUOYANCY` states that the upward buoyant force equals the weight of displaced fluid:

$$
F_B=\rho_f g V_{\mathrm{disp}},
$$

where \(\rho_f\) is fluid density, \(g\) gravitational acceleration, and \(V_{\mathrm{disp}}\) displaced volume. Static vertical equilibrium requires:

$$
F_B-mg=0.
$$

For a floating body of mean density \(\rho_b=m/V_b\):

$$
\rho_f gV_{\mathrm{disp}}=\rho_b gV_b
\quad\Longrightarrow\quad
\frac{V_{\mathrm{disp}}}{V_b}=\frac{\rho_b}{\rho_f}.
$$

Thus an object floats partially immersed when \(\rho_b<\rho_f\), is neutrally buoyant when the densities match, and sinks in the ideal model when \(\rho_b>\rho_f\).

The modern local derivation uses the hydrostatic pressure equation:

$$
\frac{dp}{dz}=-\rho_f g.
$$

Integrating pressure forces over the closed surface \(S\) gives:

$$
\mathbf{F}_B
=-\oint_S p\,\mathbf{n}\,dA
=-\int_V \nabla p\,dV
=-\int_V \rho_f\mathbf g\,dV.
$$

Here \(\mathbf n\) is the outward normal and \(\mathbf g\) is the downward gravitational-acceleration vector, so \(-\rho_f\mathbf g\) points upward. For uniform density and gravity this reduces to the weight of displaced fluid. The differential derivation is modern, not Archimedes' original notation.

## Validation and explanatory gains

- Predicts immersion fraction from density without needing object-specific rules.
- Explains why a dense material can float when shaped to enclose low-density volume.
- Connects apparent weight to displaced-fluid weight:

$$
W_{\mathrm{apparent}}=mg-F_B.
$$

- Supports quantitative stability analysis through the relative positions of center of mass and center of buoyancy.

## Limitations and retained status

The simple equation assumes a continuum fluid, static conditions, and a nearly uniform gravitational field. Compressible atmospheres require \(\rho=\rho(z)\); capillary-scale objects require surface-tension forces; rapidly accelerating fluids require nonhydrostatic dynamics. At molecular scales, density and pressure are statistical fields. Within ordinary hydrostatics, Archimedean buoyancy remains fundamental and exact to the model.

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Floating and sinking unified by density and displacement |
| `P-02` | Practical regularities upgraded to a force-generating pressure account |
| `P-03` | “Why is the object light in water?” reframed as a fluid-force balance |
| `P-04` | Distributed pressure accepted as the effective mechanism |
| `P-05` | Geometric volume and balance reasoning retained |
| `P-06` | Predictions are directly testable by weighing and volume measurement |

## Edge list

```text
A-LEVERS --contributes-to--> D-ARCHIMEDES-BUOYANCY
A-GEOMETRY --enables--> D-ARCHIMEDES-BUOYANCY
R-SHAPE-ONLY-FLOATING --superseded-by--> D-ARCHIMEDES-BUOYANCY
R-ELEMENTAL-PLACE --superseded-by--> D-ARCHIMEDES-BUOYANCY
EQ-HYDROSTATIC-PRESSURE --derives--> EQ-BUOYANT-FORCE
EQ-BUOYANT-FORCE --explains--> V-FLOATING
D-ARCHIMEDES-BUOYANCY --retained-within--> S-CONTINUUM-HYDROSTATICS
D-ARCHIMEDES-BUOYANCY --instantiates--> P-02
D-ARCHIMEDES-BUOYANCY --instantiates--> P-06
```

## Extended historical investigation

### What Archimedes actually contributed

The popular story of a crown, a bath, and a shouted “Eureka” comes from a later account by Vitruvius and is not the secure textual basis of Archimedean hydrostatics. The surviving *On Floating Bodies* is more important: it treats equilibrium positions and the shapes of floating bodies through geometrical reasoning. Archimedes' achievement was not merely noticing that objects feel lighter in water. He made buoyancy part of a deductive science involving fluid equilibrium, displaced volume, centers of gravity, and stability.

The ancient proof language differs from the modern pressure-field derivation. It is historically safer to distinguish:

- `ARCHIMEDES-PRINCIPLE-HISTORICAL`: propositions about bodies immersed in or floating on fluids;
- `ARCHIMEDES-PRINCIPLE-MODERN`: the net pressure force equals the weight of displaced fluid under specified conditions;
- `NAVIER-STOKES-DERIVATION`: the later continuum-field reconstruction.

This separation prevents anachronistically attributing vector calculus or a modern local pressure ontology to Archimedes.

### Full pressure-force derivation

Let \(z\) increase upward and let gravity be \(\mathbf g=-g\hat{\mathbf z}\). Static equilibrium of a fluid element requires:

$$
0=-\nabla p+\rho_f\mathbf g,
\qquad
\nabla p=\rho_f\mathbf g.
$$

Pressure exerts inward traction \(-p\mathbf n\) on the surface of an immersed body. The total fluid force is:

$$
\mathbf F_B=-\oint_{\partial V}p\mathbf n\,dA.
$$

Applying the divergence theorem componentwise:

$$
\mathbf F_B=-\int_V\nabla p\,dV
=-\int_V\rho_f\mathbf g\,dV.
$$

For uniform \(\rho_f\) and \(\mathbf g\):

$$
\mathbf F_B=-\rho_fV_{\mathrm{disp}}\mathbf g.
$$

Its direction is opposite gravity and its magnitude is \(\rho_fV_{\mathrm{disp}}g\). If density varies, the correct expression is the volume integral:

$$
\mathbf F_B=-\int_{V_{\mathrm{disp}}}\rho_f(\mathbf r)\mathbf g(\mathbf r)\,dV.
$$

This matters for balloons in a compressible atmosphere or objects spanning large density gradients.

### Worked quantitative example

Consider a wooden block of volume \(V_b=0.020\ \mathrm{m^3}\) and average density \(600\ \mathrm{kg\,m^{-3}}\) floating in fresh water with \(\rho_f\approx1000\ \mathrm{kg\,m^{-3}}\). Equilibrium gives:

$$
\frac{V_{\mathrm{disp}}}{V_b}
=\frac{\rho_b}{\rho_f}=0.60.
$$

Thus approximately 60% of the block's volume is below the waterline. If a \(4.0\ \mathrm{kg}\) load is placed on it, the added displaced volume is:

$$
\Delta V=\frac{\Delta m}{\rho_f}
=4.0\times10^{-3}\ \mathrm{m^3}.
$$

This inference is independent of the block's detailed shape as long as a stable equilibrium exists and water does not overflow or enter the body.

### Floating stability is a separate problem

Force balance determines whether vertical equilibrium is possible, not whether an orientation is stable. A floating body experiences weight through its center of mass \(G\) and buoyancy through the center of displaced volume \(B\). When the body tilts, the displaced shape changes and the buoyant line of action shifts. For small rotations, naval architecture uses the metacenter \(M\). A positive metacentric height:

$$
GM>0
$$

usually gives a restoring torque, while \(GM<0\) indicates instability. In simplified form:

$$
GM=KB+BM-KG,
\qquad
BM=\frac{I_{\mathrm{waterplane}}}{V_{\mathrm{disp}}}.
$$

Here \(I_{\mathrm{waterplane}}\) is the second moment of the waterplane area. This extends rather than contradicts Archimedean buoyancy: magnitude of lift and rotational stability are different graph nodes.

### Evidence and counterfactual tests

| Test | Archimedean prediction | Competing intrinsic-lightness prediction |
|---|---|---|
| Change fluid density | Immersion fraction changes as \(\rho_b/\rho_f\) | No necessary quantitative response |
| Measure apparent weight | Reduction equals displaced-fluid weight | Reduction lacks fixed volume relation |
| Hollow same-material body | Can float if mean density falls below fluid density | Material identity alone misclassifies it |
| Micro-object at interface | Surface tension may dominate | Simple buoyancy model becomes insufficient |

The last row is an important scope guard. For an object of characteristic size \(L\), buoyancy scales approximately as \(L^3\), while capillary force scales as \(L\). At small \(L\), surface tension can dominate:

$$
\frac{F_{\mathrm{buoyancy}}}{F_{\mathrm{surface}}}
\sim\frac{\Delta\rho\,gL^2}{\gamma},
$$

which is the scaling of the Bond number \(Bo=\Delta\rho gL^2/\gamma\), up to geometry-dependent factors.

a Bond-number-like ratio. An insect supported by a water surface is therefore not explained by buoyancy alone.

### Retained status in modern physics

Hydrostatics is an effective continuum theory. Molecular dynamics explains pressure statistically, but that does not make the field equation dispensable. The Archimedean result follows whenever a local pressure field satisfies static force balance. Generalizations exist in accelerating frames, rotating fluids, relativistic fluids, and nonuniform gravitational fields. The ordinary formula is powerful precisely because its assumptions are transparent and testable.

## AI-oriented inference notes

- Separate `VERTICAL-FORCE-BALANCE` from `ROTATIONAL-STABILITY`.
- Attach `uniform-density` and `uniform-gravity` as assumptions to the compact formula.
- When surface tension is important, add rather than replace forces.
- Label the crown anecdote `later-tradition`, not `secure-primary-evidence`.

## Sources

- Stanford Encyclopedia of Philosophy, [“Galileo Galilei,” discussion of Archimedean hydrostatics and natural motion](https://plato.stanford.edu/entries/galileo/).
- Archimedes Palimpsest Project, [Archimedes and his works](https://archimedespalimpsest.org/about/history/archimedes.php).
- Encyclopaedia Britannica, [“Archimedes' principle”](https://www.britannica.com/science/Archimedes-principle).
- NASA Glenn Research Center, [“Buoyancy”](https://www.grc.nasa.gov/www/k-12/WindTunnel/Activities/buoy_Archimedes.html).
