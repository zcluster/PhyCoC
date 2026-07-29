# Galilean Kinematics: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-GALILEO-05` |
| Central node | `D-GALILEAN-KINEMATICS-1604-1638` |
| Focal discovery date | 1638 synthesis in *Two New Sciences* (work developed from c. 1604) |
| Principal publication | Galileo, *Two New Sciences* (1638) |
| Main contributors | Galileo Galilei, working within and transforming medieval and Renaissance traditions of motion |
| Domain | Free fall, inclined planes, projectiles, and inertia-related motion |
| Epistemic status | Correct classical kinematics under stated idealizations; incorporated and generalized by Newtonian mechanics |

## Central claim

Galileo made terrestrial motion mathematically analyzable by treating acceleration, instantaneous speed, and idealized composition of motions as measurable structures. He did not simply perform a single “tower experiment,” and his inertia concept should not be equated without qualification to Newton's rectilinear first law.

## Historical problem

Before the focal discovery (1638 synthesis in *Two New Sciences* (work developed from c. 1604)), the case confronted a linked set of pressures: Speed linked qualitatively to weight, motive power, and resistance; Impressed impetus carries motion after release. The pathways `R-SPEED-PROPORTIONAL-WEIGHT`, `R-PROJECTILE-TWO-STAGES`, `R-ARISTOTELIAN-NATURAL-VIOLENT-MOTION` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Free fall, inclined planes, projectiles, and inertia-related motion was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | Framework | Transition |
|---|---:|---|---|
| `TS-ARISTOTELIAN` | Antiquity–16th century | Speed linked qualitatively to weight, motive power, and resistance | Projectile continuation remained problematic |
| `TS-IMPETUS` | Medieval period | Impressed impetus carries motion after release | Persistence located partly in the body |
| `TS-GALILEO-EARLY` | c. 1590–1609 | Inclined planes, pendulums, fall, and projectiles studied | Time and acceleration quantified |
| `TS-PUBLICATION` | 1638 | Mathematical demonstrations published | Terrestrial motion becomes a “new science” |
| `TS-NEWTONIAN` | 1687 onward | Force laws generalize kinematics into dynamics | Ideal Galileo results derived under constant force |

## Knowledge assets

- `A-IMPETUS`: persistence after loss of contact.
- `A-INCLINED-PLANE`: slower, measurable analogue of free fall.
- `A-PENDULUM`: recurring motion and time comparison.
- `A-GEOMETRY`: ratios, parabolas, and proof.
- `A-IDEALIZATION`: frictionless planes and resistance-free motion as controlled abstractions.

## Alternative, incomplete, or superseded pathways

### `R-SPEED-PROPORTIONAL-WEIGHT`

- **What it is:** An Aristotelian fall law according to which a body's downward speed in a given medium increases in direct proportion to its weight and decreases with the medium's resistance.
- **Proposed/active period:** fourth century BCE and later Aristotelian tradition.
- **Assumption:** In a common medium, heavier bodies fall proportionally faster.
- **Why reasonable:** Drag and terminal-speed effects dominate ordinary observation.
- **Limitation:** It confounds gravitational acceleration with resistance.
- **Repair:** Compare dense bodies, reduce drag, and use inclined planes to slow motion.
- **Outcome:** Replaced by mass-independent free-fall acceleration in the ideal limit.
- **Retained element:** Media can make terminal speeds mass- and shape-dependent.

### `R-PROJECTILE-TWO-STAGES`

- **What it is:** A projectile model that divides motion into an initially forced or “violent” forward phase and a later “natural” downward fall, rather than treating both components as simultaneous.
- **Proposed/active period:** sixth–fourteenth centuries CE.
- **Assumption:** An initial violent motion is followed by separate natural fall.
- **Limitation:** It predicts a sharp transition rather than continuous curvature.
- **Outcome:** Replaced by simultaneous horizontal and vertical components.
- **Retained element:** Decomposition into analytically distinct effects.

### `R-ARISTOTELIAN-NATURAL-VIOLENT-MOTION`

- **What it is:** Aristotle's classification in which natural motion carries elements toward their natural places, while violent motion is imposed externally and normally ceases when the mover no longer acts.
- **Proposed/active period:** fourth century BCE.
- **Why reasonable:** Pushed bodies stop under ordinary friction, and falling/rising motions correlate with material type.
- **Outcome:** Superseded by inertia, force analysis, and medium resistance; the distinction between forced response and free evolution was transformed rather than simply erased.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1638 synthesis in *Two New Sciences* (work developed from c. 1604)). The proposed/active period is stored in each pathway record.

| Pathway | Why observation seemed supportive | Repair attempted | Discriminating move | Outcome |
|---|---|---|---|---|
| Speed proportional to weight | Paper, stones, and dust fall very differently in air | Add medium resistance within Aristotelian rules | Compare dense bodies and extrapolate toward negligible resistance | Ideal acceleration independent of composition; drag retained |
| Natural/violent motion | Pushed bodies ordinarily stop | Medium or impressed mover continually sustains projectile | Inclined planes and horizontal limiting motion separate friction from state of motion | Replaced by inertial persistence |
| Two-stage projectile | Launch and fall look phenomenologically different | Medieval impetus prolongs the violent stage | Compose uniform horizontal motion with accelerated vertical fall | Continuous parabola replaces abrupt handoff |
| **Discovery/current: Galilean kinematics** | Motion is quantified by time-dependent velocity; uniform horizontal motion composes with accelerated fall | Inclined-plane ratios, fall laws, and parabolic trajectories | Retained in the low-speed, weak-drag domain |

Medieval impetus theory was a genuine bridge: it placed a motive quantity in the projectile rather than requiring continuous pushing by surrounding air. It failed as a final theory because impetus decayed without a general force law and did not yield the quantitative parabolic trajectory. Galileo retained the insight that motion can persist, but his “inertia” was not yet Newton's full rectilinear law and often had a circular terrestrial context. The pathway should therefore be represented as a graded transformation rather than Aristotle → Galileo in one jump.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-IMPETUS`, `A-INCLINED-PLANE`, `A-PENDULUM`, `A-GEOMETRY`, `A-IDEALIZATION`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-SPEED-PROPORTIONAL-WEIGHT` | An Aristotelian fall law according to which a body's downward speed in a given medium increases in direct proportion to its weight and decreases with the medium's resistance. | It confounds gravitational acceleration with resistance. |
| `R-PROJECTILE-TWO-STAGES` | A projectile model that divides motion into an initially forced or “violent” forward phase and a later “natural” downward fall, rather than treating both components as simultaneous. | It predicts a sharp transition rather than continuous curvature. |
| `R-ARISTOTELIAN-NATURAL-VIOLENT-MOTION` | Aristotle's classification in which natural motion carries elements toward their natural places, while violent motion is imposed externally and normally ceases when the mover no longer acts. | See the full pathway record above. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “What nature seeks” replaced by “How position changes with time”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

For constant acceleration \(a\):

$$
v(t)=v_0+at,
\qquad
x(t)=x_0+v_0t+\frac{1}{2}at^2.
$$

Free fall from rest near Earth's surface gives:

$$
v=gt,
\qquad
y=\frac{1}{2}gt^2,
\qquad
v^2=2gy.
$$

Equal time intervals therefore add successive odd-number distance increments:

$$
\Delta y_1:\Delta y_2:\Delta y_3:\cdots=1:3:5:\cdots.
$$

For a projectile launched at speed \(v_0\) and angle \(\theta\):

$$
x=v_0\cos\theta\,t,
\qquad
y=v_0\sin\theta\,t-\frac{1}{2}gt^2,
$$

so:

$$
y=x\tan\theta-\frac{gx^2}{2v_0^2\cos^2\theta}.
$$

The trajectory is parabolic under uniform gravity with air resistance neglected. These are modern notational forms of Galilean results.

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** “What nature seeks” replaced by “How position changes with time”

- `P-02` — **Permit a new representation, ontology, or mechanism:** Ideal frictionless motion accepted as explanatory

- `P-03` — **Make the new structure generative:** Distance–time regularities became generative equations

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Free fall, inclined planes, projectiles, and inertia-related motion). The case-specific unification was: Fall, incline, and projectile motion linked by common kinematics. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Distance–time regularities became generative equations

- `P-04` — **Unify previously separated domains or phenomena:** Fall, incline, and projectile motion linked by common kinematics

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Impetus-like persistence retained without its ontology. Its quantitative or otherwise discriminating test strategy is: Ratios and trajectories made motion quantitatively testable. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Impetus-like persistence retained without its ontology

- `P-06` — **Prioritize discriminating tests:** Ratios and trajectories made motion quantitatively testable

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | “What nature seeks” replaced by “How position changes with time” | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Ideal frictionless motion accepted as explanatory | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Distance–time regularities became generative equations | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Fall, incline, and projectile motion linked by common kinematics | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Impetus-like persistence retained without its ontology | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Ratios and trajectories made motion quantitatively testable | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-GALILEAN-KINEMATICS-1604-1638` |
| Focal date | 1638 synthesis in *Two New Sciences* (work developed from c. 1604) |
| Central claim | Galileo made terrestrial motion mathematically analyzable by treating acceleration, instantaneous speed, and idealized composition of motions as measurable structures. He did not simply perform a single “tower experiment,” and his inertia concept should not be equated without qualification to Newton's rectilinear first law. |
| Domain | Free fall, inclined planes, projectiles, and inertia-related motion |
| Epistemic status | Correct classical kinematics under stated idealizations; incorporated and generalized by Newtonian mechanics |
| Generative role | Distance–time regularities became generative equations |
| Retained structure | Impetus-like persistence retained without its ontology |

Key formal relations, consolidated from the derivation above:

$$
v(t)=v_0+at,
\qquad
x(t)=x_0+v_0t+\frac{1}{2}at^2.
$$

$$
v=gt,
\qquad
y=\frac{1}{2}gt^2,
\qquad
v^2=2gy.
$$

$$
\Delta y_1:\Delta y_2:\Delta y_3:\cdots=1:3:5:\cdots.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

This case does not currently contain a separately provenance-labeled record of a historically novel prediction or deduction. That absence is explicit: validation observations must not automatically be reclassified as predictions made before the discovery. A future record should identify the prediction date, derivation provenance, independence from construction data, observable discriminator, and eventual outcome.

- **Machine-readable status:** `PREDICTION-RECORD-NOT-SEPARATELY-ENCODED`.
- **Case:** Galilean Kinematics: Historical Knowledge Graph.

## Validation and explanatory gains

- `CT-INSTANTANEOUS-STATE`: motion characterized by speed at an instant.
- `CT-ACCELERATION`: falling motion described by uniform change of speed.
- `CT-COMPOSITION`: independent horizontal and vertical tendencies coexist.
- `CT-IDEAL-LAW`: controlled idealization isolates a law hidden by friction.

Inclined-plane timing, pendulum comparisons, projectile paths, and later vacuum experiments supported the framework. Newtonian dynamics explains mass-independent fall because:

$$
F_g=mg
\quad\text{and}\quad
F=ma
\quad\Longrightarrow\quad
a=g.
$$

## Limitations and retained status

Constant \(g\), flat geometry, and absent drag are local approximations. Galileo's inertial reasoning is often interpreted as circular or horizontal rather than the full Newtonian law. Relativity changes transformations at high speed; quantum mechanics changes microscopic trajectory concepts. Galilean kinematics remains the ordinary low-speed limit.

## Extended historical investigation

### Experiment, demonstration, and idealization

Popular retellings often reduce Galileo's mechanics to dropping two balls from the Leaning Tower of Pisa. That episode is not the strongest basis for his mature science of motion. Inclined-plane studies were more informative because they slowed acceleration enough for available timing techniques. Galileo combined experiment, geometrical demonstration, idealized reasoning, and thought experiments; these categories should not be forced into a modern laboratory-versus-theory dichotomy.

The central methodological innovation was to treat friction and resistance as effects that can mask a simpler rule. The frictionless plane is not a directly observed object but a limiting model supported by systematic reduction of resistance. This form of idealization became central to physics:

$$
\text{observed motion}
=\text{ideal law}
+\text{corrections}.
$$

The equation is schematic, but the inference pattern is substantive. A failed exact fit need not refute the ideal law if independently modeled corrections account for the residual.

### Deriving the odd-number rule

For fall from rest under constant acceleration:

$$
y_{\downarrow}(t)=\frac12gt^2.
$$

Here \(y_{\downarrow}\) is positive downward. Let equal time intervals have duration \(\Delta t\). The distance covered during interval \(n\) is:

$$
\Delta y_n
=y_{\downarrow}(n\Delta t)-y_{\downarrow}((n-1)\Delta t)
=\frac12g(2n-1)(\Delta t)^2.
$$

Therefore:

$$
\Delta y_1:\Delta y_2:\Delta y_3:\cdots
=1:3:5:\cdots.
$$

This converts the square-time law into a sequence measurable with marked distances or timed descent. It also shows that uniform acceleration does not mean equal distances in equal times; it means equal velocity increments in equal times.

### Inclined plane as a controlled transformation

For a frictionless plane inclined at angle \(\alpha\), modern dynamics gives:

$$
a_{\parallel}=g\sin\alpha.
$$

The motion retains the constant-acceleration form but is slowed by \(\sin\alpha\):

$$
s=\frac12g\sin\alpha\,t^2.
$$

Galileo did not derive this from Newton's force components, but the modern expression clarifies why the apparatus is an analogue of fall rather than a different phenomenon. By varying \(\alpha\), one can test whether the same time-squared structure persists.

### Projectile reconstruction

Under uniform downward acceleration:

$$
\mathbf r(t)
=\mathbf r_0+\mathbf v_0t+\frac12\mathbf g t^2.
$$

For launch and landing at the same height, with no air resistance and uniform \(g\):

$$
T=\frac{2v_0\sin\theta}{g},
\qquad
R=\frac{v_0^2\sin2\theta}{g},
\qquad
H=\frac{v_0^2\sin^2\theta}{2g}.
$$

Within those assumptions, the ideal maximum range occurs at:

$$
\theta=45^\circ.
$$

These formulas are later analytic representations, not Galileo's notation. They expose the theory's generative content and its assumptions. With quadratic drag:

$$
m\dot{\mathbf v}
=m\mathbf g-\frac12\rho C_DA|\mathbf v|\mathbf v,
$$

the trajectory is generally not a parabola and the optimal angle is below \(45^\circ\). The ideal result is therefore scope-bounded rather than simply wrong.

### Inertia and relativity of common motion

Galileo used ship-cabin reasoning: mechanical processes below deck proceed similarly whether the ship is stationary or moving uniformly. In modern Galilean transformation:

$$
\mathbf r'=\mathbf r-\mathbf Vt,
\qquad
t'=t,
\qquad
\mathbf a'=\mathbf a.
$$

Newtonian equations preserve their form because acceleration is unchanged. This explains why shared uniform terrestrial motion is not exposed by dropping an object inside a uniformly moving system.

Yet Galileo's inertia should not be described too quickly as Newton's first law. His discussions often concern horizontal or circular motion relative to a spherical Earth, and historians debate the exact conceptual continuity. The safe graph relation is:

```text
GALILEAN-INERTIA-RELATED-REASONING
--contributes-to-->
NEWTONIAN-RECTILINEAR-INERTIA
```

not `identical-to`.

### Mass independence and equivalence

In a vacuum near Earth:

$$
m_i a=m_g g.
$$

If inertial and gravitational mass are proportional:

$$
\frac{m_g}{m_i}=\text{universal constant},
$$

all bodies share the same acceleration. Galileo's work helped establish the empirical regularity; Newtonian mechanics expressed it through masses, and general relativity later elevated universality of free fall into the equivalence principle.

Air complicates observation. The equation:

$$
m\dot v=mg-F_D(v)-F_B
$$

shows why feathers and dense balls fall differently in ordinary conditions without requiring different vacuum gravitational accelerations. The historical dispute was partly about how to infer an ideal gravitational law from motion in a medium.

### Evidence ledger and myths to avoid

| Claim | Stronger historical formulation |
|---|---|
| Galileo invented experimentation | He combined experiment with mathematical proof and idealization in distinctive ways |
| Tower drop alone refuted Aristotle | The mature case rests on a wider program of fall and incline analysis |
| He discovered Newtonian inertia exactly | He developed crucial inertia-related reasoning with important differences |
| All bodies always fall together | They share ideal free-fall acceleration when resistance and buoyancy are negligible |
| Projectile paths are parabolas | Ideal paths are parabolic under uniform gravity without drag |

## AI-oriented inference notes

- Attach assumptions to every kinematic equation: constant \(g\), negligible drag, classical scale.
- Store idealization and correction models as separate linked nodes.
- Do not use `GALILEO --single-handedly-created--> MODERN-SCIENCE`.
- Preserve experimental reconstruction uncertainty when apparatus details are historically disputed.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-INCLINED-PLANE --enables-measurement-of--> D-GALILEAN-KINEMATICS-1604-1638
A-IDEALIZATION --enables--> LAW-FREE-FALL
R-SPEED-PROPORTIONAL-WEIGHT --superseded-by--> LAW-FREE-FALL
R-PROJECTILE-TWO-STAGES --superseded-by--> LAW-COMPOSITION
LAW-COMPOSITION --generates--> EQ-PARABOLA
D-GALILEAN-KINEMATICS-1604-1638 --contributes-to--> D-NEWTONIAN-MECHANICS
D-GALILEAN-KINEMATICS-1604-1638 --instantiates--> P-01
D-GALILEAN-KINEMATICS-1604-1638 --instantiates--> P-06
```

## Sources

- Stanford Encyclopedia of Philosophy archive, [“Medieval Theories of Causation,” projectile-motion discussion](https://plato.stanford.edu/archives/win2003/entries/causation-medieval/).
- Stanford Encyclopedia of Philosophy, [“Galileo Galilei”](https://plato.stanford.edu/entries/galileo/).
- Library of Congress, [Galileo, *Discorsi e dimostrazioni matematiche intorno a due nuove scienze*](https://www.loc.gov/item/33027378/).
- The Galileo Project, Rice University, [“Galileo's Mechanics”](https://galileo.rice.edu/lib/student_work/experiment95/inclined_plane.html).
