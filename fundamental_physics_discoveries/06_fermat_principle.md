# Fermat's Principle of Stationary Optical Time: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-FERMAT-OPTICS-55` |
| Central node | `D-FERMAT-PRINCIPLE-1662` |
| Focal discovery date | 1662 mature least-time derivation of refraction |
| Main contributors | Pierre de Fermat; with antecedents from Hero of Alexandria and the refraction law associated with Harriot, Snell and Descartes |
| Domain | Geometrical optics, refraction, variational reasoning, and ray geometry |
| Epistemic status | A correct stationary-optical-time principle in geometrical optics; not a universal microscopic mechanism of light propagation |

## Central claim

Fermat's 1662 two-medium construction generated the refraction law by choosing the path of least travel time, rather than shortest spatial distance. In an isotropic medium with refractive index $n(\mathbf r)$, the broader modern stationary-time reconstruction is

$$
\delta\int_A^B n(\mathbf r)\,ds=0,
$$

or equivalently, when $n=c_0/v$,

$$
\delta\int_A^B \frac{ds}{v}=0.
$$

The principle explains Snell's sine law without treating refraction as an unexplained rule at each interface. Its historical importance is methodological: a global path functional generates local ray equations. "Least" must be read cautiously, because physical rays make optical time stationary and may realize a minimum, maximum, or saddle-type extremum.

## Historical problem

By the early 1660s, the refraction sine law was empirically useful and Descartes had offered a mechanical derivation, but Fermat disputed that derivation and its assumption about easier or faster passage through denser material. Hero's shorter-path treatment of reflection suggested comparing alternative routes, yet shortest geometric distance through two media would not bend a ray. Fermat's live question was whether weighting each segment by its travel time could recover the *same* observed sine law while allowing slower passage in the denser medium. His 1662 calculation answered that two-medium problem; the later general stationary-optical-length principle and continuously graded media are formal extensions, not premises of the dispute.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-HERO-REFLECTION` | first century CE | Reflection organized by shortest broken path | A geometrical extremum explains equal angles |
| `TS-MEDIEVAL-OPTICS` | eleventh–thirteenth centuries | Ibn al-Haytham and successors develop geometrical and experimental optics | Rays, vision, reflection and refraction become systematic |
| `TS-SNELL-DESCARTES` | 1621–1637 | Sine law of refraction identified and published | Accurate interface rule lacks an agreed generative principle |
| `TS-FERMAT` | 1657–1662 | Fermat contests Cartesian refraction and formulates least time | One variational rule yields reflection and refraction |
| `TS-BRACHISTOCHRONE` | 1696–1697 | Fastest-descent curve solved by optical analogy | Fermat's reasoning migrates from optics into mechanics |
| `TS-WAVE-EIKONAL` | nineteenth–twentieth centuries | Wave theory and Maxwell theory underlie rays | Stationary optical length retained as a short-wavelength approximation |

## Knowledge assets

- `A-HERO-REFLECTION`: equality of reflection angles from a shortest broken path.
- `A-SNELL-LAW`: empirical sine relation for refraction.
- `A-FERMAT-EXTREMA`: Fermat's techniques for maxima, minima and tangents.
- `A-MEDIA-SPEED`: the proposed medium-dependent transit-time weighting, also expressible for Fermat as ease or resistance if instantaneous propagation is assumed.
- `A-CARTESIAN-DIOPTRICS`: a rival derivation precise enough to be challenged quantitatively.
- `A-GEOMETRICAL-RAYS`: idealized paths representing propagation direction.

## Alternative, incomplete, or superseded pathways

### `R-SHORTEST-DISTANCE-ALL-RAYS`

- **What it is:** A geometrical rule extending Hero's reflected-path construction to all optical propagation by assuming that a physical ray always follows the shortest spatial distance between endpoints, regardless of changes in propagation speed between media.
- **Proposed/active period:** antiquity through the early seventeenth century.
- **Core assumption:** Spatial length, rather than travel time or optical length, is the optimized quantity.
- **Why reasonable at the time:** Straight propagation in a homogeneous medium and the mirror-reflection construction both favor shortest Euclidean paths.
- **Successful scope:** Straight rays in one homogeneous medium and specular reflection from a plane surface.
- **Anomaly or limitation:** At refraction, the shortest spatial path is a straight line and therefore cannot generate the observed bending.
- **Repair program:** Divide the route into segments and weight travel through different media differently.
- **Discriminator:** Minimizing weighted travel time yields the sine law; minimizing unweighted distance does not.
- **Outcome:** Replaced as a universal rule by stationary optical time or optical length.
- **Retained structure:** Extremal comparison of neighboring paths and Hero's reflection construction.

### `R-DESCARTES-MECHANICAL-REFRACTION`

- **What it is:** Descartes's corpuscular-mechanical account in which light behaves analogously to a rapidly transmitted tendency or projectile whose motion is resolved into components at an interface, producing the correct sine law while assuming a mechanical change of motion in the denser medium.
- **Proposed/active period:** 1637 (*La Dioptrique*).
- **Core assumption:** Refraction should be derived from local mechanical rules for components of a light corpuscle's motion.
- **Why reasonable at the time:** Mechanical explanation was the dominant program, and the derivation reproduced the known quantitative refraction law.
- **Successful scope:** It organized geometrical refraction and provided a constructive interface rule.
- **Anomaly or limitation:** Its speed interpretation conflicted with the later wave result that light travels more slowly in optically denser ordinary media; its mechanism did not unify arbitrary graded media.
- **Repair program:** Refine corpuscular forces at the boundary and distinguish motion components parallel and normal to the interface.
- **Discriminator:** Fermat obtained the same sine law from slower propagation in the denser medium and a path-time comparison; nineteenth-century measurements favored slower speed in water.
- **Outcome:** The mechanical ontology was superseded, although the sine law survived.
- **Retained structure:** Vector decomposition at interfaces and the quantitative law of refraction.

### `R-LOCAL-SNELL-LAW-WITHOUT-GENERATOR`

- **What it is:** A phenomenological optics in which $n_1\sin\theta_1=n_2\sin\theta_2$ is accepted as an independent interface rule, with straight-line motion imposed separately inside each uniform medium.
- **Proposed/active period:** 1621–1662.
- **Core assumption:** Each optical situation can be solved by local construction without a single path-level principle.
- **Why reasonable at the time:** The sine law was accurate, compact and sufficient for lens and instrument calculations.
- **Successful scope:** Piecewise homogeneous media, lenses and prisms.
- **Anomaly or limitation:** It did not explain why the same law follows at every interface or how rays propagate in continuously varying media.
- **Repair program:** Search for a common geometrical, mechanical or temporal generator.
- **Discriminator:** Varying one crossing point in a two-medium path produces Snell's law as the stationarity condition.
- **Outcome:** Retained as the local consequence of a more general variational principle.
- **Retained structure:** Snell's law and piecewise-ray construction.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1662 mature least-time derivation of refraction). The proposed/active period is stored in each pathway record.

| Pathway | Generating idea | Discriminator | Retained content |
|---|---|---|---|
| Shortest distance for all rays | Minimize unweighted Euclidean length | Cannot produce refraction at an interface | Reflection extremum and path comparison |
| Cartesian mechanical refraction | Resolve corpuscular motion at a boundary | Correct sine law but wrong later speed interpretation | Quantitative refraction law |
| Local Snell law without generator | Apply an empirical rule at every interface | Gives no rule for graded media | Reliable local construction |
| **Discovery/current: stationary optical time** | Vary the weighted travel-time functional | Generates reflection, refraction and graded-index ray equations | Geometrical-optics variational principle |

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-HERO-REFLECTION`, `A-SNELL-LAW`, `A-FERMAT-EXTREMA`, `A-MEDIA-SPEED`, `A-CARTESIAN-DIOPTRICS`, `A-GEOMETRICAL-RAYS`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-SHORTEST-DISTANCE-ALL-RAYS` | A geometrical rule extending Hero's reflected-path construction to all optical propagation by assuming that a physical ray always follows the shortest spatial distance between endpoints, regardless of changes in propagation speed between media. | Unweighted shortest distance gives a straight path across an interface and cannot derive the observed refraction angle. |
| `R-DESCARTES-MECHANICAL-REFRACTION` | Descartes's corpuscular-mechanical account in which light behaves analogously to a rapidly transmitted tendency or projectile whose motion is resolved into components at an interface, producing the correct sine law while assuming a mechanical change of motion in the denser medium. | It recovered the sine law but supplied a different speed interpretation from Fermat's time comparison and no single path rule for varying media; the speed dispute was tested later. |
| `R-LOCAL-SNELL-LAW-WITHOUT-GENERATOR` | A phenomenological optics in which $n_1\sin\theta_1=n_2\sin\theta_2$ is accepted as an independent interface rule, with straight-line motion imposed separately inside each uniform medium. | Interface-by-interface fitting described piecewise rays but did not explain why the sine law recurs or generate paths in continuously varying media. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “What force bends light here?” becomes “Which neighboring path has stationary travel time?”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

The conceptual shift is from separately stipulated ray rules to comparing complete candidate routes by a medium-dependent travel-time cost. The displayed chain stops at Fermat's seventeenth-century refraction argument; the continuous-index calculus below is labeled as later formal reconstruction.

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. This is an auditable rational reconstruction, not a transcript of a scientist's or model's hidden reasoning and not a claim that the endpoint was inevitable. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-FER-01` | Reflection admits a shortest broken-path construction, while refraction has an empirical sine rule and a rival Cartesian mechanism. |
| `CS-FER-02` | Comparing whole routes remains promising, but unweighted spatial length cannot select a bent refracted ray. |
| `CS-FER-03` | Different media receive distinct time-per-length weights, or an ease/resistance analogue; finite relative speeds remain physically disputed. |
| `CS-FER-04` | Candidate refracted routes are represented by a total-time function of the interface crossing point. |
| `CS-FER-05` | An extremum calculation yields a relation among angles and medium speeds that can be compared with the known sine law. |
| `CS-FER-06` | Least-time path comparison is a viable geometrical generator for reflection and refraction, without uniquely settling the ontology or measured speed of light. |

##### `CT-FER-01`: `CS-FER-01` → `CS-FER-02` — Keep path comparison but reject universal shortest distance

- **Input model:** Hero's reflected-ray construction minimizes a broken spatial path, while refraction bends rays at a boundary according to an empirical sine relation.
- **Pressure:** An unweighted shortest path between points on opposite sides of an interface is straight, so it cannot generate observed bending.
- **Protected structure:** Geometrical rays, fixed endpoints, the reflection construction, and the quantitative refraction law.
- **Hidden assumption:** The quantity compared across candidate paths must be Euclidean distance even when media differ.
- **Operation / change type:** `differentiation` — Retain comparison among whole routes while opening the optimized quantity to revision.
- **Output model:** A path-level construction remains possible, but distance alone is insufficient for heterogeneous media.
- **Local justification:** Hero's reflection argument and the pre-1662 sine law provide the two constraints; Fermat's correspondence with de la Chambre explicitly contrasts shortest lines with shortest time.
- **Cost/uncertainty:** The move does not identify the correct path cost or establish any microscopic mechanism of light.
- **Branch status:** `selected`; local Cartesian refraction remains a quantitative competitor.
- **Next question:** Which path cost can vary appropriately when propagation crosses unlike media?

##### `CT-FER-02`: `CS-FER-02` → `CS-FER-03` — Weight path segments by propagation time

- **Input model:** Geometrical routes cross two media, but spatial length alone cannot explain refraction.
- **Pressure:** Equal lengths in different media need not require equal transit times.
- **Protected structure:** Straight segments in homogeneous media and Hero's equal-angle reflection in a single medium.
- **Hidden assumption:** Speed through all transparent media is the same, or the temporal cost of a route is irrelevant to its geometry.
- **Operation / change type:** `replacement` — Compare the sum of segment lengths divided by medium-specific speeds rather than total geometric length.
- **Output model:** A proposed medium-weighted extremum criterion distinguishes routes that are equally plausible under unweighted distance; the least-time reading remains conditional on successive propagation.
- **Local justification:** Fermat's 1662 letters use the least-time supposition and greater resistance in denser media. In his January appendix he also says that, if light is taken to move instantaneously, relative ease or resistance can enter the calculation in place of travel time. Thus finite medium-specific speeds are the modern physical reading of his construction, not a measured seventeenth-century premise.
- **Cost/uncertainty:** The speed ordering remained contested by the Cartesian account, which also reproduced the sine law; Huygens praised Fermat's demonstration in June 1662 while calling its physical premises uncertain.
- **Branch status:** `selected`; the Cartesian faster-in-denser-medium interpretation remains a live rival at this stage.
- **Next question:** How can the weighted comparison be made calculable for two fixed endpoints and one interface?

##### `CT-FER-03`: `CS-FER-03` → `CS-FER-04` — Make the crossing point the variable

- **Input model:** Each candidate route has one segment in each medium and a total time determined by the crossing point.
- **Pressure:** “Choose the fastest route” is not yet a construction that determines where the ray meets the boundary.
- **Protected structure:** Fixed endpoints, straight segments in uniform media, and the proposed medium-dependent travel times.
- **Hidden assumption:** One must enumerate possible rays without a single scalar quantity that can be compared.
- **Operation / change type:** `representation_shift` — Parameterize the boundary crossing by one variable and write total travel time as a function of it.
- **Output model:** The refraction problem becomes an extremum problem for a one-variable time expression.
- **Local justification:** Fermat's method of maxima and minima and the two-medium geometry were available by the 1662 correspondence; the modern derivative notation below is only a translation.
- **Cost/uncertainty:** The method presumes an ideal sharp interface and a meaningful speed within each medium.
- **Branch status:** `selected`; local mechanical interface rules remain an alternative route to the observed law.
- **Next question:** What angular relation is required at an extremal crossing point?

##### `CT-FER-04`: `CS-FER-04` → `CS-FER-05` — Derive and compare the angular condition

- **Input model:** Total transit time varies with the interface crossing point.
- **Pressure:** A new principle earns explanatory force only if it yields the already reliable refraction relation rather than an arbitrary bend.
- **Protected structure:** The empirical sine law and the homogeneous-medium straight-ray limit.
- **Hidden assumption:** Snell's relation must be inserted as an independent rule rather than generated by a path comparison.
- **Operation / change type:** `constraint_change` — Set the first-order change of time under a neighboring crossing-point shift to zero and translate segment slopes into sines of the angles.
- **Output model:** The candidate yields sin(angle 1)/speed 1 = sin(angle 2)/speed 2; fitting the observed bend constrains the relative speed assumption.
- **Local justification:** Fermat's 1662 analysis derives the refraction relation by his extrema method; the sine law was already known and is therefore a retrodictive check, not a novel prediction.
- **Cost/uncertainty:** Agreement with the known law does not independently measure light's speed in either medium or prove a least-time ontology.
- **Branch status:** `selected`; Cartesian mechanics retains the same angle law with a different physical interpretation.
- **Next question:** Is the path-time construction useful beyond one interface without pretending its disputed speed premise was already measured?

##### `CT-FER-05`: `CS-FER-05` → `CS-FER-06` — Promote a successful construction, not a unique ontology

- **Input model:** The weighted path extremum reproduces the known sine law while equal-speed comparison also recovers reflection.
- **Pressure:** Treating each interface law as unrelated misses the common path construction, yet identical angular predictions do not discriminate rival mechanisms.
- **Protected structure:** Hero's equal-angle reflection, Snell's quantitative refraction, and the historical uncertainty about propagation speed.
- **Hidden assumption:** Explanatory unification requires the competing Cartesian mechanism to be empirically refuted immediately.
- **Operation / change type:** `coalescence` — Treat least-time comparison as a shared generator for these ray laws while leaving mechanism and direct speed measurement open.
- **Output model:** A fertile geometrical principle for ideal rays is available, with the seventeenth-century claim stated as least time rather than the later general stationary-path formulation.
- **Local justification:** Fermat's 1662 correspondence presents a geometrical derivation and explicitly distinguishes that mathematical problem from penetrating nature's hidden mechanisms.
- **Cost/uncertainty:** Retrodictive economy is not independent confirmation; later wave theory and direct medium-speed measurements are not construction input.
- **Branch status:** `selected`; mechanistic and wave interpretations remain open for later investigation.
- **Next question:** What new ray geometries follow if the same time criterion applies beyond a single sharp interface?

#### Formal consolidation

For the historical two-medium step, the assumed inputs are fixed endpoints, straight travel within each uniform medium, a proposed medium-dependent time or resistance weighting, and a shortest-route selection rule. Fermat did not establish finite propagation speeds by measurement; the speed notation and modern stationarity calculus below reconstruct one physical reading of his argument rather than reproduce his wording.

Let a ray travel from $A=(x_A,y_A)$ in medium 1 to $B=(x_B,-y_B)$ in medium 2, crossing the planar interface at $X=(x,0)$. With speeds $v_1$ and $v_2$,

$$
T(x)=\frac{\sqrt{(x-x_A)^2+y_A^2}}{v_1}
+\frac{\sqrt{(x_B-x)^2+y_B^2}}{v_2}.
$$

Stationarity requires

$$
\frac{dT}{dx}
=\frac{x-x_A}{v_1\ell_1}
-\frac{x_B-x}{v_2\ell_2}=0.
$$

The geometric ratios are the sines of the angles measured from the interface normal, so

$$
\frac{\sin\theta_1}{v_1}
=\frac{\sin\theta_2}{v_2}.
$$

Writing $n_i=c_0/v_i$ gives

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

For a continuously varying isotropic index, the optical path is

$$
\mathcal L_{\rm opt}[\mathbf r]
=\int_A^B n(\mathbf r)\,ds,
\qquad
\delta\mathcal L_{\rm opt}=0.
$$

Choosing a path parameter $\lambda$ gives a Lagrangian-like integrand $F=n(\mathbf r)|d\mathbf r/d\lambda|$. The Euler–Lagrange equation of this modern reconstruction yields the ray equation

$$
\frac{d}{ds}\left(n\frac{d\mathbf r}{ds}\right)=\nabla n.
$$

This shows how rays curve toward regions of larger refractive index. In wave optics, the eikonal Φ satisfies

$$
|\nabla\Phi|=n\frac{\omega}{c_0},
$$

and rays follow normals to nearly constant-phase surfaces. The variational ray is therefore an emergent high-frequency structure, not evidence that a photon evaluates possible routes as a conscious optimizer.

##### Self-contained derivation spine

For a smooth ray $\mathbf r(\lambda)$, write

$$
\mathcal L_{\rm opt}=\int F(\mathbf r,\mathbf r')\,d\lambda,
\qquad
F=n(\mathbf r)\sqrt{\mathbf r'\cdot\mathbf r'},
$$

where $\mathbf r'=d\mathbf r/d\lambda$. Vary the path while fixing both endpoints:

$$
\mathbf r(\lambda)\rightarrow\mathbf r(\lambda)+\epsilon\boldsymbol\eta(\lambda),
\qquad
\boldsymbol\eta(\lambda_A)=\boldsymbol\eta(\lambda_B)=0.
$$

To first order,

$$
\delta\mathcal L_{\rm opt}
=\int\left(
\frac{\partial F}{\partial\mathbf r}\cdot\boldsymbol\eta
+\frac{\partial F}{\partial\mathbf r'}\cdot\boldsymbol\eta'
\right)d\lambda.
$$

Integrating the second term by parts removes the endpoint contribution and gives

$$
\delta\mathcal L_{\rm opt}
=\int\left[
\frac{\partial F}{\partial\mathbf r}
-\frac{d}{d\lambda}
\left(\frac{\partial F}{\partial\mathbf r'}\right)
\right]\cdot\boldsymbol\eta\,d\lambda.
$$

Because $\boldsymbol\eta$ is arbitrary, stationarity requires the vector Euler–Lagrange equation. Here

$$
\frac{\partial F}{\partial\mathbf r}
=\nabla n\,|\mathbf r'|,
\qquad
\frac{\partial F}{\partial\mathbf r'}
=n\frac{\mathbf r'}{|\mathbf r'|}.
$$

Choose arc length $s$ as parameter, so $|d\mathbf r/ds|=1$. Division by $ds/d\lambda=|\mathbf r'|$ then yields

$$
\boxed{
\frac{d}{ds}\left(n\frac{d\mathbf r}{ds}\right)=\nabla n
}.
$$

For constant $n$, the right-hand side vanishes and the unit tangent is constant, so rays are straight. Across a sharp interface, translational invariance parallel to the boundary conserves the tangential canonical momentum $n\sin\theta$, producing Snell's law.

The wave-optics limit can also be exposed rather than asserted. For a monochromatic scalar field satisfying

$$
\nabla^2\psi+n^2k_0^2\psi=0,
$$

insert the rapidly varying ansatz $\psi=Ae^{ik_0S}$. The leading $k_0^2$ terms give

$$
|\nabla S|^2=n^2.
$$

Surfaces $S=\text{constant}$ are wavefronts and their normals are rays. Thus the variational ray equation is recovered when wavelength is short compared with the scale of amplitude and index variation.

| Logical role | Content |
|---|---|
| Assumed | Isotropic refractive index, smooth path, fixed endpoints and geometrical-optics scale separation |
| Defined | Optical-length functional $\int n\,ds$ |
| Derived | Euler–Lagrange ray equation, straight rays and Snell tangential invariant |
| Independently connected | Eikonal equation from the leading short-wavelength wave equation |

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** “What force bends light here?” becomes “Which neighboring path has stationary travel time?”

- `P-02` — **Permit a new representation, ontology, or mechanism:** A global functional over possible paths becomes an admissible explanatory object

- `P-03` — **Make the new structure generative:** Snell's empirical sine law becomes a generated stationarity condition

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

The following is a later mathematical extension of the 1662 two-medium construction, not a claim that Fermat wrote a differential ray equation or foresaw gradient-index optics.

#### `EG-FER-01` — Extend path-time weighting from discrete interfaces to graded media

- **Source domain:** Ideal straight segments, reflection, and refraction at a boundary between homogeneous isotropic media, where least-time comparison reproduces known ray laws.
- **Target domain:** Transparent isotropic media whose refractive index varies smoothly over distances large compared with the wavelength.
- **Novel consequence:** A stationary optical-length functional yields a continuously curved ray obeying the later equation d(n tangent)/ds = grad n; in a stratified medium the tangential optical momentum remains constant instead of requiring a new rule at each infinitesimal layer.
- **Failure condition:** Reproducible ray paths in smooth, weakly absorbing, wavelength-separated isotropic media that disagree with the independently measured index profile and the stated ray equation beyond measurement error would defeat this extension; diffraction-scale deviations do not.

Straight propagation, reflection, refraction, and graded-index bending can then be unified by one path functional, while the new graded-medium consequence is not misreported as a documented 1662 prediction.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Snell's empirical sine law becomes a generated stationarity condition

- `P-04` — **Unify previously separated domains or phenomena:** Straight propagation, reflection, refraction and graded-index bending share one path functional

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Hero's geometry and Snell's quantitative law survive inside the new framework. Its quantitative or otherwise discriminating test strategy is: The principle yields calculable crossing points, angles, delays and ray trajectories. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Hero's geometry and Snell's quantitative law survive inside the new framework

- `P-06` — **Prioritize discriminating tests:** The principle yields calculable crossing points, angles, delays and ray trajectories

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | “What force bends light here?” becomes “Which neighboring path has stationary travel time?” | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | A global functional over possible paths becomes an admissible explanatory object | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Snell's empirical sine law becomes a generated stationarity condition | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Straight propagation, reflection, refraction and graded-index bending share one path functional | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Hero's geometry and Snell's quantitative law survive inside the new framework | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | The principle yields calculable crossing points, angles, delays and ray trajectories | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-FERMAT-PRINCIPLE-1662` |
| Focal date | 1662 mature least-time derivation of refraction |
| Central claim | Fermat showed that reflection and refraction can be generated by comparing neighboring possible ray paths and selecting a path whose travel time is stationary. In an isotropic medium with refractive index $n(\mathbf r)$, the modern reconstruction is $$ \delta\int_A^B n(\mathbf r)\,ds=0, $$ or equivalently, when $n=c_0/v$, $$ \delta\int_A^B \frac{ds}{v}=0. $$ The principle explains Snell's sine law without treating refraction as an unexplained rule at each interface. Its historical importance is methodological: a global path functional generates local ray equations. "Least" must be read cautiously, because physical rays make optical time stationary and may realize a minimum, maximum, or saddle-type extremum. |
| Domain | Geometrical optics, refraction, variational reasoning, and ray geometry |
| Epistemic status | A correct stationary-optical-time principle in geometrical optics; not a universal microscopic mechanism of light propagation |
| Generative role | Snell's empirical sine law becomes a generated stationarity condition |
| Retained structure | Hero's geometry and Snell's quantitative law survive inside the new framework |

Key formal relations, consolidated from the derivation above:

$$
T(x)=\frac{\sqrt{(x-x_A)^2+y_A^2}}{v_1}
+\frac{\sqrt{(x_B-x)^2+y_B^2}}{v_2}.
$$

$$
\frac{dT}{dx}
=\frac{x-x_A}{v_1\ell_1}
-\frac{x_B-x}{v_2\ell_2}=0.
$$

$$
\frac{\sin\theta_1}{v_1}
=\frac{\sin\theta_2}{v_2}.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-FERMAT-NONE` — No clean independent contemporary prediction

- **Classification:** `NO-CLEAN-CONTEMPORANEOUS-PREDICTION`.
- **Reason:** Fermat's 1662 least-time principle was chiefly judged by its ability to derive already-known laws of reflection and refraction. Snell's sine law therefore belongs under `RETRODICTION-OR-EXPLANATION`, not under novel prediction.
- **Discovery-AI significance:** a powerful representational principle can be scientifically fertile even when its first achievement is compression and unification rather than a new phenomenon. The corpus should not manufacture a prediction by silently using observations that selected the principle.
- **Later theoretical consequence:** in a continuously varying isotropic index $n(\mathbf r)$, stationarity of

$$
\mathcal T=\frac1c\int n(\mathbf r)\,ds
$$

gives the ray equation

$$
\frac{d}{ds}\left(n\frac{d\mathbf r}{ds}\right)=\nabla n.
$$

This predicts continuous bending toward larger refractive index and underlies gradient-index optics, but this differential form is a later development of Fermat's principle, not a documented new prediction made by Fermat in 1662.

## Validation and explanatory gains

The principle reproduces straight propagation in a uniform medium, equal angles in reflection, Snell refraction, total-internal-reflection conditions and ray bending in graded-index media. It makes lens design and optical path comparison systematic. Its reuse in the brachistochrone and Hamilton's optical–mechanical analogy demonstrated that one functional can generate an entire family of local equations.

The explanatory gain is representational. Instead of specifying a separate impulse at every boundary, one assigns a scalar cost to a whole path and derives local laws by variation. For discovery AI, this is a powerful template: search for a functional whose stationary points reproduce several independently known regularities.

## Limitations and retained status

The extremum is stationary, not always a strict minimum. Multiple rays can join the same endpoints, and caustics create several stationary paths. Geometrical optics requires wavelengths much smaller than the scale on which the medium and boundaries vary. Diffraction, interference near apertures, polarization conversion, evanescent fields and quantum detection amplitudes require wave or quantum optics.

In anisotropic media, optical cost depends on direction and can require a Finsler-like rather than simple scalar-index geometry. In absorbing or dispersive media, phase, group delay and complex refractive index must be distinguished. Fermat's principle remains correct within ray optics and survives as a stationary-phase limit of wave propagation; it is not an ultimate ontology of light.

## Extended historical investigation

Fermat's achievement should not be collapsed into the modern slogan that “nature minimizes everything.” His dispute with Cartesian optics concerned a precise quantitative result and competing medium-weighting interpretations: he even described a resistance-based calculation for a correspondent who maintained instantaneous propagation. Huygens's June 1662 reaction distinguished the subtle mathematical proof from its uncertain physical premises. Nor should the seventeenth-century statement be equated without qualification to the later calculus of variations. The modern δ-notation and Euler–Lagrange ray equation are reconstructions that expose the structure made systematic only later.

The historical sequence matters. Hero supplied an extremal reflection construction; Snell and Descartes supplied a reliable sine law; Fermat used temporal weighting and his methods of extrema to derive that law; Bernoulli then used the optical analogy in the brachistochrone; Maupertuis, Euler, Lagrange and Hamilton generalized variational structures in mechanics. This is inheritance, not a single uninterrupted deduction.

An evidence-versus-alternative ledger is useful for training:

| Evidence | Shortest distance | Cartesian mechanism | Stationary time |
|---|---:|---:|---:|
| Straight ray in one medium | Fits | Fits | Fits |
| Equal reflection angles | Fits | Fits | Fits |
| Snell refraction | Fails | Fits | Fits |
| Slower propagation in ordinary denser transparent media | Not addressed | Historical mechanism pressured | Fits the time weighting |
| Smoothly varying index | No generator | Requires repeated local mechanism | Direct ray equation |
| Diffraction at wavelength-scale apertures | Fails | Fails | Outside ray regime |

## AI-oriented inference notes

- Store “least time” with the qualifier `stationary`, because local maxima and multiple stationary rays can occur.
- Distinguish historical Fermat reasoning from modern variational notation.
- Do not infer a microscopic optimizer from a stationary functional; wave stationary phase supplies a non-teleological account.
- Treat Snell's law as both predecessor evidence and retained local structure.
- Link this case forward to Lagrangian and Hamiltonian mechanics as methodological inheritance, not identity.
- Record the geometrical-optics regime $\lambda/L\ll1$ whenever exporting the ray principle as a law.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-HERO-REFLECTION --prefigures--> D-FERMAT-PRINCIPLE-1662
A-SNELL-LAW --constrains--> D-FERMAT-PRINCIPLE-1662
A-FERMAT-EXTREMA --enables--> D-FERMAT-PRINCIPLE-1662
CS-FER-01 --revised-by--> CT-FER-01
CT-FER-01 --produces--> CS-FER-02
CS-FER-02 --revised-by--> CT-FER-02
CT-FER-02 --produces--> CS-FER-03
CS-FER-03 --revised-by--> CT-FER-03
CT-FER-03 --produces--> CS-FER-04
CS-FER-04 --revised-by--> CT-FER-04
CT-FER-04 --produces--> CS-FER-05
CS-FER-05 --revised-by--> CT-FER-05
CT-FER-05 --produces--> CS-FER-06
CS-FER-06 --hands-off-to--> EG-FER-01
D-FERMAT-PRINCIPLE-1662 --generates--> SNELL-REFRACTION
D-FERMAT-PRINCIPLE-1662 --generates--> SPECULAR-REFLECTION
STATIONARY-OPTICAL-LENGTH --yields--> GRADED-INDEX-RAY-EQUATION
WAVE-STATIONARY-PHASE --recovers--> D-FERMAT-PRINCIPLE-1662
D-FERMAT-PRINCIPLE-1662 --anticipates-stationary-action-form--> D-LAGRANGIAN-MECHANICS-1788
D-FERMAT-PRINCIPLE-1662 --instantiates--> P-03
D-FERMAT-PRINCIPLE-1662 --instantiates--> P-01
```

## Sources

- Encyclopedia of Mathematics, [“Fermat principle”](https://encyclopediaofmath.org/wiki/Fermat_principle).
- University of St Andrews MacTutor, [“Classical light”](https://mathshistory.st-andrews.ac.uk/HistTopics/Light_1/).
- University of St Andrews MacTutor, [Pierre de Fermat biography](https://mathshistory.st-andrews.ac.uk/Biographies/Fermat/).
- University of St Andrews MacTutor, [“Variational Principles” historical overview](https://mathshistory.st-andrews.ac.uk/Extras/Moiseiwitsch_Variational_Principles/).
- Scholarpedia, [“Principle of least action”](https://www.scholarpedia.org/article/Principle_of_least_action).
- Fermat, [January 1662 letter to de la Chambre, in the Huygens correspondence edition](https://www.dbnl.org/tekst/huyg003oeuv04_01/huyg003oeuv04_01_0044.php), on least time, relative speeds, and the contested interpretation of refraction.
- Fermat, [January 1662 appendix to de la Chambre, printed p. 80](https://www.dbnl.org/tekst/huyg003oeuv04_01/huyg003oeuv04_01_0045.php), explicitly allowing ease/resistance ratios in the calculation if instantaneous light propagation is maintained.
- Fermat, [*Analysis ad refractiones*, appended to the 1662 correspondence](https://www.dbnl.org/tekst/huyg003oeuv04_01/huyg003oeuv04_01_0046.php), on the explicit two-medium extremum construction.
- Fermat, [May 1662 reply to Clerselier in the Corpus Descartes](https://www.unicaen.fr/puc/sources/prodescartes/consult/descartes/Correspondance/clerselier_3.xml/CIII_LIV.html), distinguishing his geometrical problem from a claim to know nature's hidden mechanism.
- Huygens, [22 June 1662 letter to Lodewijk Huygens, printed p. 159](https://www.dbnl.org/tekst/huyg003oeuv04_01/huyg003oeuv04_01_0079.php), calling Fermat's demonstration subtle while questioning its physical premises.
