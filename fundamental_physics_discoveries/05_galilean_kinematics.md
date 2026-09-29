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

Across the long program that culminated in *Two New Sciences* (1638), ordinary falls and projectiles could still be described by weight, resistance, natural versus imposed motion, or a decaying impressed impetus. Those accounts captured real appearances but did not give one measurable rule for how distance changes with elapsed time during fall, nor a quantitative trajectory formed by continued forward motion together with descent. Slower inclined-plane motion and geometrical comparisons made an ideal acceleration rule testable while separating it from air resistance. The subsequent projectile question was whether that vertical rule could be composed with ideal uniform horizontal motion; Galileo's published mathematical argument must not be read as Newton's later force law or a single tower demonstration.

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
| **Discovery/current: Galilean kinematics** | Inclines, falls, and projectiles exhibit measurable patterns | Idealize resistance and derive time and range ratios | Compare timed inclines and controlled projectile trajectories | Retained in the low-speed, weak-drag domain |

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
| `R-ARISTOTELIAN-NATURAL-VIOLENT-MOTION` | Aristotle's classification in which natural motion carries elements toward their natural places, while violent motion is imposed externally and normally ceases when the mover no longer acts. | Treating continued horizontal motion as requiring a continuing mover could not describe a projectile's smooth simultaneous forward motion and fall without a stage change. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “What nature seeks” replaced by “How position changes with time”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

The selected route separates the time law of fall from its later composition with ideal horizontal motion. It is a rational reconstruction of Galileo's long program, not a dated transcript of his private reasoning.

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. This is an auditable rational reconstruction, not a transcript of a scientist's or model's hidden reasoning and not a claim that the endpoint was inevitable. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-GAL-01` | Natural fall and projectile motion are described mainly by qualitative causes and stages, not a shared quantitative time law. |
| `CS-GAL-02` | Inclined descent is compared through distances and elapsed times; its relation to vertical fall remains open. |
| `CS-GAL-03` | Uniform acceleration is proposed as equal increments of speed in equal times, without yet claiming that natural fall obeys it. |
| `CS-GAL-04` | The proposed acceleration rule generates square-time distances and odd-number increments, creating observable discriminators. |
| `CS-GAL-05` | Resistance is distinguished from an ideal law; accelerated fall and ideal horizontal persistence can be considered together. |
| `CS-GAL-06` | A projectile is modeled by simultaneous uniform horizontal and accelerated vertical components, yielding an ideal parabola. |

##### `CT-GAL-01`: `CS-GAL-01` → `CS-GAL-02` — Make elapsed time a measurable variable

- **Input model:** Natural/violent-motion and impetus accounts explain motion qualitatively but do not yield a common distance–time law for fall and projectiles.
- **Pressure:** Ordinary fall is rapid and air-affected, so its time dependence is difficult to compare directly.
- **Protected structure:** Falling bodies speed up, resistance matters, and geometric ratios of distances can be compared.
- **Hidden assumption:** One must settle the sustaining cause of motion before studying its time-dependent pattern mathematically.
- **Operation / change type:** `reweighting` — Prioritize distance–time ratios and use slower inclined descent as a candidate analogue of fall.
- **Output model:** Inclined descent becomes a tractable timing problem; transfer to vertical fall remains a hypothesis.
- **Local justification:** Galileo's *Two New Sciences*, Third Day, reports timed incline descents and explicitly investigates acceleration without first determining its cause.
- **Cost/uncertainty:** Rolling, friction, timing error, and the incline-to-fall transfer can distort the inference.
- **Branch status:** `selected`; causal impetus and medium accounts remain possible companions to the kinematic analysis.
- **Next question:** What simple quantitative rule describes how speed changes during the measured descent?

##### `CT-GAL-02`: `CS-GAL-02` → `CS-GAL-03` — Define uniform acceleration through time

- **Input model:** Incline and fall observations suggest continuous speeding up, but “uniform acceleration” lacks a settled quantitative meaning.
- **Pressure:** Speed proportional to distance fallen is an available rival; intuition cannot choose the natural-fall law.
- **Protected structure:** Speed increases continuously from rest, and equal elapsed-time intervals can be compared.
- **Hidden assumption:** Equal increments of distance must define equal increments of speed.
- **Operation / change type:** `constraint_change` — Define uniform acceleration as equal speed increments in equal times, while withholding the claim that all real falls follow it.
- **Output model:** A definite candidate law is available for deduction and test.
- **Local justification:** The Third Day states this definition and explicitly raises the question whether the abstract definition describes natural fall.
- **Cost/uncertainty:** A definition is not an empirical proof; distance-based rivals and medium effects remain to be discriminated.
- **Branch status:** `selected`; distance-proportional acceleration is not dismissed by definition alone.
- **Next question:** Which measurable distance ratios follow from the time-proportional candidate?

##### `CT-GAL-03`: `CS-GAL-03` → `CS-GAL-04` — Convert speed increments into distance ratios

- **Input model:** Speed is hypothesized to rise by equal amounts in equal times from rest.
- **Pressure:** Instantaneous speed is harder to measure directly than accumulated distance and elapsed time.
- **Protected structure:** The equal-time speed rule and geometrical comparison of uniform and accelerated motion.
- **Hidden assumption:** A speed rule cannot yield an apparatus-accessible distance test.
- **Operation / change type:** `representation_shift` — Use the mean-speed theorem to derive distance proportional to time squared and odd-number increments in successive equal times.
- **Output model:** The candidate predicts total-distance ratios of 1:4 at times 1:2 and interval-distance ratios of 1:3:5.
- **Local justification:** The Third Day gives the mean-speed theorem, square-time rule, odd-number corollary, and reported incline-timing procedure.
- **Cost/uncertainty:** Agreement within timing error supports an ideal kinematic rule, not a unique cause of acceleration.
- **Branch status:** `selected`; empirical discrimination remains conditional on apparatus corrections.
- **Next question:** Can the rule be carried from inclines toward fall despite resistance and differing geometry?

##### `CT-GAL-04`: `CS-GAL-04` → `CS-GAL-05` — Separate ideal motion from resistance

- **Input model:** Timed inclines support the square-time rule, while vertical fall and horizontal continuation occur under different practical conditions.
- **Pressure:** Friction and air resistance obscure direct agreement, and actual projectiles need not follow exact mathematical curves.
- **Protected structure:** Incline ratios, fall's increasing speed, and observed persistence after release.
- **Hidden assumption:** A useful law must exactly match every uncorrected trajectory, with medium effects built into the law itself.
- **Operation / change type:** `differentiation` — Distinguish ideal accelerated fall and ideal horizontal persistence from drag, friction, and geometrical boundary effects.
- **Output model:** Conditional laws for accelerated fall and horizontal persistence can be combined without claiming resistance vanishes in nature.
- **Local justification:** The Third Day relates incline and vertical motion and examines horizontal continuation; the resistance discussion in *Two New Sciences* limits exact projectile claims.
- **Cost/uncertainty:** Ideal planes are not directly observed; Galileo's horizontal persistence is not Newton's later universal rectilinear inertia.
- **Branch status:** `selected`; medium-dependent behavior remains a correction branch, not a refuted observation.
- **Next question:** Must projectile motion pass through sequential violent and natural stages, or can two motions coexist?

##### `CT-GAL-05`: `CS-GAL-05` → `CS-GAL-06` — Compose simultaneous motions and derive their curve

- **Input model:** Ideal horizontal motion is uniform; ideal vertical fall follows the square-time law.
- **Pressure:** A two-stage account supplies no equally economical quantitative explanation of a continuously curving trajectory.
- **Protected structure:** Launch supplies horizontal displacement, gravity supplies downward change, and both are present during flight.
- **Hidden assumption:** Only one kind of motion can govern a projectile at a time, or its path must be stipulated separately from component laws.
- **Operation / change type:** `coalescence` — Pair horizontal and vertical displacements at the same elapsed time, then eliminate time to identify an ideal parabola.
- **Output model:** One component construction generates a parabolic trajectory and calculable range relations under stated idealizations.
- **Local justification:** *Two New Sciences*, Fourth Day, begins with simultaneous composition and Proposition I derives the semi-parabola; Newtonian force vectors are not construction input.
- **Cost/uncertainty:** Component independence, nearly uniform gravity, and negligible drag are substantive idealizations; real gunfire may deviate.
- **Branch status:** `selected`; the historical two-stage account and drag-affected trajectories are retained as distinct alternatives or boundary cases.
- **Next question:** Do uncalibrated launch angles satisfy range relations generated by the same composition?

#### Formal consolidation

The formal result assumes a common elapsed-time parameter, constant downward acceleration, ideal uniform horizontal motion, and independent components. The following formulas are modern notation for Galilean kinematic results, not a claim about Galileo's algebra or Newtonian force theory.

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

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

Timed inclines and ideal horizontal projection motivate tests beyond the observations used to form their respective laws. Neither extension is guaranteed by the source measurements alone.

#### `EG-GAL-01` — Extend timed incline ratios to other inclinations and free fall

- **Source domain:** Timed descents on sufficiently smooth inclined channels and their square-time ratios, within the Third Day's reported measurement setting.
- **Target domain:** Other inclinations and approximately resistance-free vertical fall from rest.
- **Novel consequence:** For a fixed inclination, doubling elapsed time quadruples total distance, and successive equal-time distances follow 1:3:5; the acceleration scale may change with inclination without changing these ratios.
- **Failure condition:** Stable departures from the square-time ratios across controlled inclinations or low-resistance falls, beyond independently estimated timing and friction effects, would defeat this extension in its declared regime.

#### `EG-GAL-02` — Extend compound motion to oblique projectile ranges

- **Source domain:** Ideal uniform horizontal motion composed with accelerated vertical fall, giving a semi-parabola for horizontal projection.
- **Target domain:** Oblique launches at equal initial speed and equal launch/landing height, with approximately uniform gravity and negligible air resistance.
- **Novel consequence:** Complementary launch angles have equal ideal range, and a 45-degree launch maximizes it under these conditions; the Fourth Day derives the complementary-angle relation. In modern notation, range is proportional to the sine of twice the launch angle.
- **Failure condition:** Reproducible range asymmetry between complementary angles at fixed launch speed and level endpoints, after measured drag, wind, and launch variation are controlled, would reject this ideal extension within its stated regime.

Together these extensions link fall, inclines, and projectiles by common kinematics while keeping their empirical conditions distinct. The Fourth Day's complementary-angle deduction is recorded separately as `NP-GAL-01` below.

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

### `NP-GAL-01` — Equal ideal ranges at complementary launch angles

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION` as a conditional theoretical deduction, not a claim that Galileo newly discovered the already familiar approximate 45-degree maximum range.
- **Deduction date and authorship:** Galileo's 1638 *Two New Sciences*, Fourth Day, Theorem/Proposition VIII derives equal ranges for shots of the same initial speed fired equally above and below 45 degrees; the dialogue explicitly separates this less familiar consequence from the maximum-range rule already reported by gunners.
- **Construction-data independence:** The equality follows from composing uniform horizontal motion with uniformly accelerated vertical fall and the prior parabolic construction. The source presents it as a consequence of the model, not as a relation fitted to paired-range observations; no contemporaneous controlled test of equal initial speeds has been established here.
- **Derivation provenance and scope:** For equal launch and landing height, common initial speed, approximately uniform gravity, negligible air resistance, and a locally level plane, complementary angles \(\theta\) and \(90^\circ-\theta\) give the same ideal range. The convenient modern expression \(R=v_0^2\sin(2\theta)/g\) consolidates Galileo's geometrical result; it is not his notation.
- **Discriminator and outcome:** Compare paired launches after controlling initial speed, launch/landing height, drag, and wind. Unequal ranges beyond those effects would challenge the ideal composition model. The original text itself warns that air resistance and Earth's curvature perturb actual trajectories, so ordinary artillery asymmetry is not a clean refutation. This record establishes the dated deduction; it does not claim a separately verified 1638 experiment.

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
CS-GAL-01 --revised-by--> CT-GAL-01
CT-GAL-01 --produces--> CS-GAL-02
CS-GAL-02 --revised-by--> CT-GAL-02
CT-GAL-02 --produces--> CS-GAL-03
CS-GAL-03 --revised-by--> CT-GAL-03
CT-GAL-03 --produces--> CS-GAL-04
CS-GAL-04 --revised-by--> CT-GAL-04
CT-GAL-04 --produces--> CS-GAL-05
CS-GAL-05 --revised-by--> CT-GAL-05
CT-GAL-05 --produces--> CS-GAL-06
CS-GAL-06 --hands-off-to--> EG-GAL-01
CS-GAL-06 --hands-off-to--> EG-GAL-02
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
- Galileo, [*Two New Sciences*, Third Day (Crew–de Salvio translation)](https://en.wikisource.org/wiki/Dialogues_Concerning_Two_New_Sciences/Third_Day), on acceleration, incline timing, square-time ratios, and resistance.
- Galileo, [*Two New Sciences*, Fourth Day (Crew–de Salvio translation)](https://ganino.com/anteanus/dialogues_concerning_two_new_sciences_by_galileo_galilei_fourth_day), opening and Theorem/Propositions I and VIII checked for composition, the semi-parabola, complementary-angle ranges, the already familiar 45-degree rule, and Galileo's explicit drag/curvature caveats. The translation's modern editorial footnotes are not 1638 claims.
- The Galileo Project, Rice University, [“Galileo's Mechanics”](https://galileo.rice.edu/lib/student_work/experiment95/inclined_plane.html).
