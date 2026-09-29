# Hydrostatics and Buoyancy: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-HYDROSTATICS-02` |
| Central node | `D-ARCHIMEDES-BUOYANCY` |
| Focal discovery date | third century BCE (c. 250 BCE display anchor; treatise date uncertain) |
| Principal period | Third century BCE |
| Main contributors | Archimedes |
| Domain | Equilibrium of fluids and immersed bodies |
| Epistemic status | A valid classical theory for continuum fluids in static equilibrium |

## Central claim

Archimedean hydrostatics converted qualitative observations about floating into a geometrical theory of pressure, displaced fluid, equilibrium, and stability. Its central buoyancy relation remains correct in the ordinary continuum domain, with corrections required for compressibility, surface tension, nonuniform fields, and microscopic scales.

## Historical problem

Before Archimedes' third-century BCE treatise, practical floating and weighing were familiar, while shape-based and natural-place explanations did not give a general quantitative rule for how much liquid a body displaces or how much lighter it appears when immersed. The focal task was to reason from fluid equilibrium and equal-volume weight comparisons to a rule covering floating, neutral immersion, and sinking. The propositions of *On Floating Bodies* are the result to reconstruct, not a pre-discovery input.

## Time slices

| Node | Period | Development | Transition |
|---|---:|---|---|
| `TS-PRACTICAL-FLOATING` | Pre-third century BCE | Shipbuilding and weighing supplied empirical knowledge | Practical rules lacked a general proof structure |
| `TS-ARCHIMEDES` | Third century BCE | *On Floating Bodies* treated fluids mathematically | Buoyancy linked to displaced fluid and equilibrium |
| `TS-EARLY-MODERN` | 16th–17th centuries | Hydrostatic pressure and instruments developed | Pascal's law and barometry extended fluid statics |
| `TS-CONTINUUM-MECHANICS` | 18th–19th centuries | Local pressure fields and differential equations formalized | Hydrostatics embedded in general fluid mechanics |
| `TS-MODERN` | 20th century onward | Molecular and relativistic limits identified | Classical relations retained as effective laws |

## Knowledge assets

- `A-LEVERS`: torque and center-of-gravity reasoning.
- `A-GEOMETRY`: volumes and areas of solids.
- `A-DENSITY-COMPARISON`: weighing materials and observing immersion.
- `A-EQUILIBRIUM`: balance as equality of opposed effects.

## Alternative, incomplete, or superseded pathways

### `R-SHAPE-ONLY-FLOATING`

- **What it is:** An analytic foil that treats an object's external geometry or intrinsic “lightness” as the direct cause of floating, without balancing its weight against the weight of displaced fluid; it is not an attested pre-Archimedean school.
- **Proposed/active period:** pre-third-century practical floating knowledge (analytic foil, not an attested school).
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

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that predates the third-century BCE treatise; the shape-only row is a reconstruction of a possible heuristic, not a documented school. The proposed/active period is stored in each pathway record.

| Pathway | What it predicts | Discriminator | Status |
|---|---|---|---|
| Shape-only floating | Geometry directly determines floating | Loading the same hull changes immersion; flooding changes average density | Superseded |
| Elemental natural place | Materials rise or fall toward cosmically assigned regions | Quantitative support follows displaced-fluid weight and pressure gradients | Superseded |
| **Discovery/current: Archimedean hydrostatics** | Upthrust equals displaced-fluid weight; equilibrium requires \(F_B=mg\) | Weighing, displaced volume, fluid-density changes, and pressure measurements | Retained within ordinary fluid statics |

The ancient elemental-place account was broader than a naïve mistake: it integrated terrestrial change into a purposive cosmology. Its weakness for this problem was lack of a measurable force magnitude. A shape-only repair can fit individual examples after the fact, but fails when the same object is loaded, the fluid density changes, or a sealed hull floods. Archimedean reasoning generates all of these contrasts from weight and displacement. Modern fluid statics then supplies the deeper local mechanism—pressure increases with depth—while retaining Archimedes' integrated result.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-LEVERS`, `A-GEOMETRY`, `A-DENSITY-COMPARISON`, `A-EQUILIBRIUM`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-SHAPE-ONLY-FLOATING` | A reconstructed practical heuristic, not an attested school, takes shape or intrinsic “lightness” as the direct cause of floating. | It misses density ratios and the role of displaced fluid. |
| `R-ELEMENTAL-PLACE` | The Aristotelian theory that each terrestrial element has a natural region in the cosmos and that unforced bodies rise or fall because their dominant element tends toward that natural place. | It did not give a precise magnitude for buoyant support. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “Why is the object light in water?” reframed as a comparison of its weight with the weight of an equal volume of liquid in equilibrium. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

The conceptual route follows the equilibrium assumption and the sequence of comparison cases in *On Floating Bodies* I. It does not attribute modern differential pressure fields or vector calculus to Archimedes.

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. This is an auditable rational reconstruction, not a transcript of a scientist's or model's hidden reasoning and not a claim that the endpoint was inevitable. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-ARC-01` | Floating and sinking are familiar, but shape and intrinsic lightness do not give a general magnitude for immersion or apparent weight. |
| `CS-ARC-02` | A resting liquid is represented by equal-level portions whose unequal pressing would disturb equilibrium. |
| `CS-ARC-03` | Replacing an immersed solid by an equal-volume, equal-weight liquid portion gives a neutral comparison case. |
| `CS-ARC-04` | A lighter solid must emerge until the immersed volume of liquid has the same weight as the whole solid. |
| `CS-ARC-05` | A heavier solid sinks yet loses apparent weight equal to an equal-volume liquid's weight; a forcibly submerged lighter solid has a corresponding upward excess. |
| `CS-ARC-06` | The three weight-comparison cases are organized by displaced-liquid weight, while orientation stability remains a separate geometrical question. |

##### `CT-ARC-01`: `CS-ARC-01` → `CS-ARC-02` — Make fluid equilibrium the comparison constraint

- **Input model:** Practical floating rules and natural-place explanations classify examples without a shared quantitative support condition.
- **Pressure:** The same material can be made to float or sink by changing overall form or loading; shape alone is not a magnitude of support.
- **Protected structure:** Observed vertical settling, the weights of solids and liquids, and geometrical comparison of volumes.
- **Hidden assumption:** The floating body can be analyzed without first specifying how the surrounding liquid maintains equilibrium.
- **Operation / change type:** `representation_shift` — Start from equal-level portions of a resting liquid and require balanced pressing at that level.
- **Output model:** Unequal pressing becomes a contradiction to the assumed resting state, furnishing a proof constraint.
- **Local justification:** *On Floating Bodies* I opens with a hypothesis about same-level connected liquid portions yielding to the more pressed portion; this is Archimedes' own premise, not modern pressure-gradient notation.
- **Cost/uncertainty:** The premise idealizes a resting continuous liquid and depends on a weight direction relative to the Earth.
- **Branch status:** `selected`; shape and natural-place explanations are not yet quantitatively excluded by a single observation.
- **Next question:** What happens if a solid takes the place of a volume of resting liquid?

##### `CT-ARC-02`: `CS-ARC-02` → `CS-ARC-03` — Establish the equal-volume neutral reference

- **Input model:** Fluid portions at the same level must remain equally pressed if the liquid is at rest.
- **Pressure:** A body inserted into the liquid changes what occupies one region; its effect needs a reference with the same geometry.
- **Protected structure:** Resting-fluid balance, ordinary weighing, and equality of compared volumes.
- **Hidden assumption:** Material identity rather than relative weight at fixed volume alone decides whether a body rises or sinks.
- **Operation / change type:** `replacement` — Compare the solid with the liquid portion of equal volume that would occupy its place.
- **Output model:** A solid equal in weight to its equal-volume liquid counterpart is the neutral case; it need not emerge or sink further in the ideal model.
- **Local justification:** *On Floating Bodies* I, Proposition III, explicitly uses equal volume and equal weight to derive neutral immersion.
- **Cost/uncertainty:** Neutral vertical balance does not prove a particular orientation stable; it also presumes a homogeneous liquid.
- **Branch status:** `selected`; the reference is a comparison device, not an assertion that the solid becomes liquid.
- **Next question:** How does the balance change for a solid lighter than the replaced liquid?

##### `CT-ARC-03`: `CS-ARC-03` → `CS-ARC-04` — Let a lighter body displace only enough liquid

- **Input model:** Equal weight at equal volume produces neutral immersion.
- **Pressure:** A lighter solid cannot remain fully submerged at rest under the same comparison, yet it does not leave the liquid altogether.
- **Protected structure:** Equal-level liquid balance, actual solid weight, and the geometrical volume occupied below the surface.
- **Hidden assumption:** A floating body's entire volume must be submerged, or its material identity alone fixes a floating height.
- **Operation / change type:** `constraint_change` — Vary the immersed volume until the displaced liquid's weight equals the solid's full weight.
- **Output model:** The equilibrium immersion depth is set by a weight-of-displaced-liquid equality, not by a shape-only rule.
- **Local justification:** *On Floating Bodies* I, Propositions IV–V, state partial emergence and equality between the body's weight and the weight of liquid equal in volume to the submerged part.
- **Cost/uncertainty:** The argument establishes vertical balance, not resistance to tipping, and it assumes no dominating surface effects.
- **Branch status:** `selected`; geometry still matters through displaced volume and possible stability.
- **Next question:** Does the same comparison account for a denser body that sinks but feels lighter in liquid?

##### `CT-ARC-04`: `CS-ARC-04` → `CS-ARC-05` — Extend the weight comparison to forced immersion and sinking

- **Input model:** A lighter floating solid displaces a liquid weight equal to its own at equilibrium.
- **Pressure:** A heavier solid does not float, yet immersion reduces the force needed to support it; a forced-down lighter solid tends upward.
- **Protected structure:** Equal-volume liquid comparison and the distinction between body weight and net vertical force.
- **Hidden assumption:** Displaced-liquid support exists only when a body actually floats.
- **Operation / change type:** `generalization` — Apply the equal-volume liquid comparison to fully immersed lighter and heavier solids, keeping the sign of the net force distinct.
- **Output model:** A lighter submerged solid has an upward excess; a heavier one has apparent weight reduced by the equal-volume liquid weight.
- **Local justification:** *On Floating Bodies* I, Propositions VI–VII, state the upward excess for forced immersion and the apparent-weight reduction for a heavier body.
- **Cost/uncertainty:** A modern universal force formula is a consolidation of these propositions; it should not be smuggled in as their ancient starting equation.
- **Branch status:** `selected`; sinking and floating remain different outcomes of a shared comparison.
- **Next question:** Can these cases be summarized without conflating the amount of support with orientation stability?

##### `CT-ARC-05`: `CS-ARC-05` → `CS-ARC-06` — Consolidate buoyancy while separating stability

- **Input model:** Equal-weight, lighter, and heavier solid cases have been derived through displaced-liquid comparisons.
- **Pressure:** A list of separate cases obscures their common quantitative rule, while some floating shapes tip despite satisfying vertical balance.
- **Protected structure:** The propositions for neutral immersion, floating displacement, and apparent-weight reduction.
- **Hidden assumption:** A single vertical balance relation also determines whether every floating orientation is stable.
- **Operation / change type:** `coalescence` — Treat displaced-liquid weight as the common support magnitude while leaving center-of-gravity and shape arguments for stability separate.
- **Output model:** A scope-bounded general buoyancy rule can summarize the weight comparisons; stability requires additional geometry.
- **Local justification:** Book I's propositions supply the weight cases and its later floating-segment propositions address orientation; Book II develops shape-dependent equilibria.
- **Cost/uncertainty:** This synthesis is partly a modern abstraction of Archimedes' proposition sequence, not an ancient differential-pressure derivation.
- **Branch status:** `selected`; stability analysis is deferred rather than declared solved by the buoyancy magnitude alone.
- **Next question:** Does the displacement relation continue to hold for heterogeneous shapes and changed loads under the same fluid conditions?

#### Formal consolidation

The ancient argument compares weights of a solid and an equal or displaced volume of liquid under a resting-fluid assumption. The following force symbols and pressure-field derivation are modern consolidations; the latter explains the integrated result but was not Archimedes' construction input.

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

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** “Why is the object light in water?” reframed as a comparison with an equal volume of liquid

- `P-02` — **Permit a new representation, ontology, or mechanism:** Equal-level liquid pressing becomes an equilibrium constraint

- `P-03` — **Make the new structure generative:** Displaced-liquid weight generates immersion and apparent-weight relations

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

The weight comparison derived for simple immersed solids invites a further test in composite, hollow, or loaded bodies. This keeps the magnitude of vertical support separate from orientation stability.

#### `EG-ARC-01` — Extend displacement balance to heterogeneous and loaded bodies

- **Source domain:** Resting liquid and Archimedes' equal-volume comparisons for homogeneous solids that float, remain neutrally immersed, or sink.
- **Target domain:** A sealed hollow or composite body whose total weight changes by a known added load while its exterior geometry and fluid remain otherwise controlled.
- **Novel consequence:** Vertical equilibrium requires the added load's weight to be matched by the weight of additional displaced liquid, until geometry can no longer supply that displacement; material identity alone does not fix the waterline.
- **Failure condition:** Under static conditions with known liquid density, negligible capillary effects, no flooding, and a stable orientation, a reproducible submerged-volume change whose displaced-liquid weight differs from the added load beyond measurement error would reject this extension.

This generalization covers floating and sinking by density and displacement without treating a loaded hull's tipping or flooding as a counterexample to the vertical force relation.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Displaced-liquid weight generates immersion and apparent-weight relations

- `P-04` — **Unify previously separated domains or phenomena:** Floating and sinking unified by density and displacement

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Geometric volume and balance reasoning retained. Its quantitative or otherwise discriminating test strategy is: Predictions are directly testable by weighing and volume measurement. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Geometric volume and balance reasoning retained

- `P-06` — **Prioritize discriminating tests:** Predictions are directly testable by weighing and volume measurement

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | “Why is the object light in water?” reframed as a comparison with an equal volume of liquid | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Equal-level liquid pressing becomes an equilibrium constraint | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Displaced-liquid weight generates immersion and apparent-weight relations | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Floating and sinking unified by density and displacement | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Geometric volume and balance reasoning retained | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Predictions are directly testable by weighing and volume measurement | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-ARCHIMEDES-BUOYANCY` |
| Focal date | third century BCE (c. 250 BCE display anchor; treatise date uncertain) |
| Central claim | Archimedean hydrostatics converted qualitative observations about floating into a geometrical theory of pressure, displaced fluid, equilibrium, and stability. Its central buoyancy relation remains correct in the ordinary continuum domain, with corrections required for compressibility, surface tension, nonuniform fields, and microscopic scales. |
| Domain | Equilibrium of fluids and immersed bodies |
| Epistemic status | A valid classical theory for continuum fluids in static equilibrium |
| Generative role | Displaced-liquid weight generates immersion and apparent-weight relations |
| Retained structure | Geometric volume and balance reasoning retained |

Key formal relations, consolidated from the derivation above:

$$
F_B=\rho_f g V_{\mathrm{disp}},
$$

$$
F_B-mg=0.
$$

$$
\rho_f gV_{\mathrm{disp}}=\rho_b gV_b
\quad\Longrightarrow\quad
\frac{V_{\mathrm{disp}}}{V_b}=\frac{\rho_b}{\rho_f}.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-ARC-01` — Quantitative loss of apparent weight on immersion

- **Classification:** `NOVEL-THEORETICAL-CONSTRAINT`, not a claim that the familiar fact of feeling lighter in water was first noticed by Archimedes.
- **Deduction date and authorship:** Archimedes' *On Floating Bodies*, Book I, Proposition VII, composed in the third century BCE (exact date uncertain), states that a solid heavier than the liquid sinks and loses apparent weight equal to the weight of liquid occupying the same volume.
- **Construction-data independence:** The quantitative difference follows in the treatise from the equilibrium premise and the preceding comparison of lighter, equal-weight, and heavier immersed bodies. The surviving proposition is a proof, not a report of a later measurement used to choose its coefficient.
- **Derivation provenance and scope:** For a fully immersed body of volume \(V\) in a uniform resting liquid, modern notation gives \(W_{\mathrm{app}}=W-\rho_f gV\). The equation is a consolidation of the ancient equal-volume weight argument, not Archimedes' pressure-field calculus. It assumes ordinary static buoyancy, with surface tension, compressibility, and nonuniform gravity outside this simple form.
- **Discriminator and outcome:** Weigh the same fully immersed solid in liquids of independently known density, controlling the immersed volume and contact with the vessel: the change in apparent weight should equal the change in equal-volume liquid weight. The theorem survives in classical hydrostatics; this record does not claim an independently documented third-century-BCE quantitative trial or that vertical balance establishes orientation stability.

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

The last row is an important scope guard. For an object of characteristic size \(L\), buoyancy scales approximately as \(L^3\), while capillary force scales as \(L\). At small \(L\), surface tension can dominate. Comparing the effective gravity force from a density contrast \(\Delta\rho\) with capillarity gives:

$$
\frac{F_{\mathrm{gravity,eff}}}{F_{\mathrm{surface}}}
\sim\frac{\Delta\rho\,gL^2}{\gamma},
$$

which is the scaling of the Bond number \(Bo=\Delta\rho gL^2/\gamma\), up to geometry-dependent factors.

An insect supported by a water surface is therefore not explained by buoyancy alone.

### Retained status in modern physics

Hydrostatics is an effective continuum theory. Molecular dynamics explains pressure statistically, but that does not make the field equation dispensable. The Archimedean result follows whenever a local pressure field satisfies static force balance. Generalizations exist in accelerating frames, rotating fluids, relativistic fluids, and nonuniform gravitational fields. The ordinary formula is powerful precisely because its assumptions are transparent and testable.

## AI-oriented inference notes

- Separate `VERTICAL-FORCE-BALANCE` from `ROTATIONAL-STABILITY`.
- Attach `uniform-density` and `uniform-gravity` as assumptions to the compact formula.
- When surface tension is important, add rather than replace forces.
- Label the crown anecdote `later-tradition`, not `secure-primary-evidence`.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-LEVERS --contributes-to--> D-ARCHIMEDES-BUOYANCY
A-GEOMETRY --enables--> D-ARCHIMEDES-BUOYANCY
CS-ARC-01 --revised-by--> CT-ARC-01
CT-ARC-01 --produces--> CS-ARC-02
CS-ARC-02 --revised-by--> CT-ARC-02
CT-ARC-02 --produces--> CS-ARC-03
CS-ARC-03 --revised-by--> CT-ARC-03
CT-ARC-03 --produces--> CS-ARC-04
CS-ARC-04 --revised-by--> CT-ARC-04
CT-ARC-04 --produces--> CS-ARC-05
CS-ARC-05 --revised-by--> CT-ARC-05
CT-ARC-05 --produces--> CS-ARC-06
CS-ARC-06 --hands-off-to--> EG-ARC-01
R-SHAPE-ONLY-FLOATING --superseded-by--> D-ARCHIMEDES-BUOYANCY
R-ELEMENTAL-PLACE --superseded-by--> D-ARCHIMEDES-BUOYANCY
EQ-HYDROSTATIC-PRESSURE --derives--> EQ-BUOYANT-FORCE
EQ-BUOYANT-FORCE --explains--> V-FLOATING
D-ARCHIMEDES-BUOYANCY --retained-within--> S-CONTINUUM-HYDROSTATICS
D-ARCHIMEDES-BUOYANCY --instantiates--> P-03
D-ARCHIMEDES-BUOYANCY --instantiates--> P-06
```

## Sources

- Stanford Encyclopedia of Philosophy, [“Galileo Galilei,” discussion of Archimedean hydrostatics and natural motion](https://plato.stanford.edu/entries/galileo/).
- Archimedes Palimpsest Project, [Archimedes and his works](https://archimedespalimpsest.org/about/history/archimedes.php).
- Encyclopaedia Britannica, [“Archimedes' principle”](https://www.britannica.com/science/Archimedes-principle).
- NASA Glenn Research Center, [“Buoyancy”](https://www.grc.nasa.gov/www/k-12/WindTunnel/Activities/buoy_Archimedes.html).
- Archimedes, [*On Floating Bodies*, Book I (Legrand translation)](https://fr.wikisource.org/wiki/Le_Trait%C3%A9_des_Corps_flottants_d%E2%80%99Archim%C3%A8de/Livre_I), opening fluid hypothesis and Propositions III–VII on neutral immersion, partial floating, upward excess, and apparent-weight loss.
