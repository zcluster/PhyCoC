# General Relativity: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-GR-23` |
| Central node | `D-GENERAL-RELATIVITY-1915` |
| Focal discovery date | 25 November 1915 field equations |
| Main contributors | Albert Einstein, with major mathematical and scientific contributions from Grossmann, Hilbert, Levi-Civita, Ricci and others |
| Domain | Gravitation and dynamical spacetime |
| Epistemic status | Best-tested classical theory of gravitation; quantum completion unresolved |

## Central claim

General relativity replaces gravitational force in fixed Euclidean space with dynamical spacetime geometry sourced by stress–energy. Freely falling bodies follow spacetime geodesics, while curvature governs relative acceleration.

## Historical problem

Before the focal discovery (25 November 1915 field equations), the case confronted a linked set of pressures: Highly successful inverse-square force; No faster-than-light causal influence. The pathways `R-SCALAR-GRAVITY`, `R-NEWTONIAN-ABSOLUTE-GRAVITY`, `R-FLAT-SPACETIME-RELATIVISTIC-FORCE-GRAVITY` were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in Gravitation and dynamical spacetime was to construct a more generative account without importing later validation evidence into the original inference.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-NEWTONIAN-GRAVITY` | 1687 onward | Highly successful inverse-square force | Instantaneous action and absolute space remain |
| `TS-SPECIAL-RELATIVITY` | 1905 | No faster-than-light causal influence | Newtonian gravity incompatible |
| `TS-EQUIVALENCE` | 1907–1911 | Free fall locally removes gravity | Gravity linked to frames and geometry |
| `TS-TENSOR-DEVELOPMENT` | 1912–1915 | Seek generally covariant field equations | Curved differential geometry adopted |
| `TS-FIELD-EQUATIONS` | 1915 | Final equations and Mercury result | New gravitational dynamics |
| `TS-OBSERVATIONAL` | 1919 onward | Lensing, redshift, timing, waves tested | Relativistic astrophysics and cosmology |

## Knowledge assets

- `A-EQUIVALENCE-PRINCIPLE`: inertial and gravitational mass equality.
- `A-SPECIAL-RELATIVITY`: local Lorentz symmetry.
- `A-RIEMANN-GEOMETRY`: curvature tensors.
- `A-MERCURY-RESIDUAL`: unexplained perihelion advance.
- `A-CONSERVATION`: stress–energy consistency.

## Alternative, incomplete, or superseded pathways

### `R-SCALAR-GRAVITY`

- **What it is:** A relativistic gravity theory in which gravitation is represented by a single scalar field or potential on a fixed spacetime background, rather than by a dynamical tensor metric.
- **Proposed/active period:** 1912–1914.
- **Why reasonable:** A relativistic scalar potential seems the simplest extension.
- **Limitation:** Fails to capture observed light bending and full equivalence structure.
- **Outcome:** Superseded as fundamental gravity.

### `R-NEWTONIAN-ABSOLUTE-GRAVITY`

- **What it is:** Newton's gravitational model of instantaneous attraction \(F=Gm_1m_2/r^2\) acting within absolute Euclidean space and universal time.
- **Proposed/active period:** 1687.
- **Scope:** Excellent when \(v/c\ll1\) and \(GM/(rc^2)\ll1\).
- **Limitation:** Cannot explain relativistic precession, gravitational time dilation, horizons, or gravitational waves.
- **Outcome:** Retained as weak-field, slow-motion limit.

### `R-FLAT-SPACETIME-RELATIVISTIC-FORCE-GRAVITY`

- **What it is:** Relativistic force models that retain a fixed spacetime background while modifying propagation speed or force laws to mimic redshift and orbital corrections.
- **Proposed/active period:** 1905–1914.
- **Outcome:** Superseded by the unified dynamical-metric account; weak approximations can be reformulated effectively.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (25 November 1915 field equations). The proposed/active period is stored in each pathway record.

| Pathway | Motivation | Repair attempt | Discriminator/outcome |
|---|---|---|---|
| Newtonian instantaneous potential | Accurate celestial mechanics and simple scalar \(\Phi\) | Add special-relativistic retardation | Did not naturally preserve equivalence or observed relativistic effects; retained weak-field limit |
| Nordström-type scalar gravity | Lorentz-covariant simplest field | Couple scalar to matter's trace and conformal metric | Predicted inadequate/zero light bending in key formulations |
| Variable-speed/light or flat-spacetime force models | Preserve more conventional background | Tune couplings to redshift and perihelion | Lacked the unified metric account and later broad test network |
| **Discovery/current: general-relativistic metric tensor** | Equivalence, covariance, conservation | Mercury, light, clocks, pulsars, and waves | Retained classical gravity theory |

Einstein explored several candidate equations between 1907 and 1915 and temporarily adopted the non-generally-covariant “Entwurf” theory. The final field equations were constrained by the Newtonian limit, energy–momentum conservation, and mathematical identities, not guessed in one step. Newtonian gravity was not empirically poor in its ordinary domain; its failure appeared in small residuals and new regimes. A graph should therefore encode `NEWTONIAN-GRAVITY --limit-of--> GENERAL-RELATIVITY`, while scalar and Entwurf pathways are genuinely superseded attempts at the relativistic completion.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-EQUIVALENCE-PRINCIPLE`, `A-SPECIAL-RELATIVITY`, `A-RIEMANN-GEOMETRY`, `A-MERCURY-RESIDUAL`, `A-CONSERVATION`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-SCALAR-GRAVITY` | A relativistic gravity theory in which gravitation is represented by a single scalar field or potential on a fixed spacetime background, rather than by a dynamical tensor metric. | Fails to capture observed light bending and full equivalence structure. |
| `R-NEWTONIAN-ABSOLUTE-GRAVITY` | Newton's gravitational model of instantaneous attraction \(F=Gm_1m_2/r^2\) acting within absolute Euclidean space and universal time. | Cannot explain relativistic precession, gravitational time dilation, horizons, or gravitational waves. |
| `R-FLAT-SPACETIME-RELATIVISTIC-FORCE-GRAVITY` | Relativistic force models that retain a fixed spacetime background while modifying propagation speed or force laws to mimic redshift and orbital corrections. | See the full pathway record above. |

**Pattern demonstrated — `P-03` (reframe the inherited question):** Force in space reframed as curved spacetime. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

Einstein's field equations are:

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}.
$$

\(G_{\mu\nu}\) encodes curvature, \(T_{\mu\nu}\) stress–energy, \(g_{\mu\nu}\) the metric, and \(\Lambda\) the cosmological constant. Free-fall paths satisfy:

$$
\frac{d^2x^\mu}{d\tau^2}
+\Gamma^\mu_{\alpha\beta}
\frac{dx^\alpha}{d\tau}
\frac{dx^\beta}{d\tau}=0.
$$

Curvature produces relative acceleration:

$$
\frac{D^2\xi^\mu}{D\tau^2}
=-R^\mu{}_{\nu\alpha\beta}
u^\nu\xi^\alpha u^\beta.
$$

In the weak, static limit:

$$
g_{00}\approx-\left(1+\frac{2\Phi}{c^2}\right),
\qquad
\nabla^2\Phi=4\pi G\rho,
$$

recovering Newtonian gravity.

**Patterns demonstrated:**

- `P-02` — **Make the new structure generative:** Geometry generates trajectories, lensing, and waves

- `P-03` — **Reframe the inherited problem:** Force in space reframed as curved spacetime

- `P-04` — **Permit a new representation, ontology, or mechanism:** Dynamical geometry accepted

### Extrapolative generalization

The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (Gravitation and dynamical spacetime). The case-specific unification was: Gravitation, inertia, geometry, and time unified. This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.

**Patterns demonstrated:**

- `P-01` — **Unify previously separated domains or phenomena:** Gravitation, inertia, geometry, and time unified

- `P-02` — **Generate consequences rather than merely redescribe inputs:** Geometry generates trajectories, lensing, and waves

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Newtonian gravity retained as weak-field limit. Its quantitative or otherwise discriminating test strategy is: Mercury, clocks, light, pulsars, and waves test one theory. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Newtonian gravity retained as weak-field limit

- `P-06` — **Prioritize discriminating tests:** Mercury, clocks, light, pulsars, and waves test one theory

### Discovery-pattern synthesis

This table is the compact output of the reconstruction above. It records where each transferable operation occurs; it is not an independent replacement for the historical reasoning.

| Pattern | Process stage | Case-specific instantiation |
|---|---|---|
| `P-01` | Extrapolative generalization | Gravitation, inertia, geometry, and time unified |
| `P-02` | Transformative move and generative deduction | Geometry generates trajectories, lensing, and waves |
| `P-03` | Diagnosis of interpolation failure and reframing | Force in space reframed as curved spacetime |
| `P-04` | Transformative representation, ontology, or mechanism | Dynamical geometry accepted |
| `P-05` | Retention and limiting recovery | Newtonian gravity retained as weak-field limit |
| `P-06` | Prediction, discrimination, and validation network | Mercury, clocks, light, pulsars, and waves test one theory |

## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-GENERAL-RELATIVITY-1915` |
| Focal date | 25 November 1915 field equations |
| Central claim | General relativity replaces gravitational force in fixed Euclidean space with dynamical spacetime geometry sourced by stress–energy. Freely falling bodies follow spacetime geodesics, while curvature governs relative acceleration. |
| Domain | Gravitation and dynamical spacetime |
| Epistemic status | Best-tested classical theory of gravitation; quantum completion unresolved |
| Generative role | Geometry generates trajectories, lensing, and waves |
| Retained structure | Newtonian gravity retained as weak-field limit |

Key formal relations, consolidated from the derivation above:

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}.
$$

$$
\frac{d^2x^\mu}{d\tau^2}
+\Gamma^\mu_{\alpha\beta}
\frac{dx^\alpha}{d\tau}
\frac{dx^\beta}{d\tau}=0.
$$

$$
\frac{D^2\xi^\mu}{D\tau^2}
=-R^\mu{}_{\nu\alpha\beta}
u^\nu\xi^\alpha u^\beta.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-GR-01` — The full relativistic deflection of light

- **Classification:** `NOVEL-CONTEMPORANEOUS-PREDICTION` for the 1915 value; light bending itself had earlier Newtonian-corpuscular precedents.
- **Prediction date and authorship:** Einstein's completed field theory doubled the approximate value he had obtained in 1911 from equivalence arguments alone. The discriminating prediction for a ray grazing the Sun was about $1.75$ arcseconds.
- **Construction-data independence:** Mercury's anomalous perihelion was known before the final equations and is a retrodiction; the doubled deflection had not been measured when derived.
- **Derivation provenance:** `MODERN-PEDAGOGICAL-DERIVATION` from the Schwarzschild null geodesic, not Einstein's line-by-line 1915 calculation.

For $u(\phi)=1/r$ and impact parameter $b$, the leading null-orbit equation is

$$
u''+u=\frac{3GM}{c^2}u^2.
$$

Use the undeflected trajectory $u_0=\cos\phi/b$ on the right-hand side and write $u=u_0+\delta u$. Solving to first order produces an asymptotic angular shift on each side of approximately $2GM/(bc^2)$, so

$$
\boxed{\alpha=\frac{4GM}{bc^2}}.
$$

For $b\simeq R_\odot$, this is approximately $1.75''$.
- **Observable discriminator and outcome:** eclipse photographs could compare stellar positions near and far from the Sun. The 1919 result was historically influential, although its precision was limited; later radio and optical measurements test the coefficient far more accurately.

### `NP-GR-02` — Gravitational waves

- **Classification:** `EARLY-DERIVED-PREDICTION`.
- **Prediction date:** Einstein derived weak gravitational waves in 1916, after the 1915 field equations but decades before indirect and then direct detection.
- **Derivation provenance:** `MODERN-PEDAGOGICAL-DERIVATION`.

Set $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$ with $|h_{\mu\nu}|\ll1$. In Lorenz gauge, the vacuum equations reduce to

$$
\Box\bar h_{\mu\nu}=0,
$$

so metric perturbations propagate at $c$. Gauge constraints leave two transverse tensor polarizations. Their leading radiative source is a changing mass quadrupole, not a mass dipole.
- **Outcome:** binary-pulsar orbital decay supplied indirect evidence, and interferometers directly detected waves a century after the prediction.

## Validation and explanatory gains

- Accounts for Mercury's anomalous perihelion advance.
- Predicts gravitational redshift and time dilation.
- Predicts approximately twice the Newtonian corpuscular deflection of light near the Sun.
- Explains Shapiro delay, binary-pulsar orbital decay, black-hole structure, and gravitational waves.
- Supplies the framework for expanding-universe cosmology.

## Limitations and retained status

Classical singularities indicate breakdown or incomplete description. A quantum theory of gravity is needed near Planck scales and perhaps singularities. Dark matter and dark energy are empirical components within standard cosmological use, not fully understood substances. General relativity remains extraordinarily successful in its tested classical domain.

## Extended historical investigation

### Equivalence as a discovery heuristic

Equality of inertial and gravitational mass implies:

$$
m_i\mathbf a=m_g\mathbf g,
\qquad
\frac{m_g}{m_i}\approx1,
$$

so freely falling bodies share acceleration independent of composition. Einstein reframed this as local equivalence between uniform acceleration and a homogeneous gravitational field. In a freely falling laboratory, local nongravitational experiments approximate special relativity.

“Local” is essential. Tidal effects compare neighboring free-fall paths and cannot be transformed away over an extended region:

$$
\frac{D^2\xi^\mu}{D\tau^2}
=-R^\mu{}_{\nu\alpha\beta}
u^\nu\xi^\alpha u^\beta.
$$

Gravity is therefore eliminated at a point by coordinate choice, while curvature remains invariant.

### Interpreting the field equations

Einstein's tensor:

$$
G_{\mu\nu}
=R_{\mu\nu}
-\frac12Rg_{\mu\nu}
$$

has vanishing covariant divergence:

$$
\nabla_\mu G^{\mu\nu}=0.
$$

This matches local stress–energy conservation:

$$
\nabla_\mu T^{\mu\nu}=0.
$$

The equation:

$$
G_{\mu\nu}+\Lambda g_{\mu\nu}
=\frac{8\pi G}{c^4}T_{\mu\nu}
$$

is nonlinear because the metric determines curvature and gravitational fields themselves influence geometry. The slogan “matter tells spacetime how to curve” is useful but incomplete: gravitational radiation can propagate through vacuum where \(T_{\mu\nu}=0\) while curvature is nonzero.

### Self-contained recovery of Newtonian gravity

A viable relativistic gravity theory must reproduce Newtonian mechanics when fields are weak, sources move slowly, and test bodies have \(|\mathbf v|\ll c\). Write the static weak-field metric as

$$
g_{00}=-\left(1+\frac{2\Phi}{c^2}\right),
\qquad
\left|\frac{\Phi}{c^2}\right|\ll1.
$$

For slow motion, \(dx^0/d\tau\simeq c\,dt/d\tau\) dominates the spatial four-velocity. The spatial geodesic equation therefore reduces to

$$
\frac{d^2x^i}{dt^2}\simeq-c^2\Gamma^i{}_{00}.
$$

Staticity removes time derivatives, and to first order

$$
\Gamma^i{}_{00}\simeq-\frac12\partial_i g_{00}
=\frac{1}{c^2}\partial_i\Phi.
$$

Consequently,

$$
\frac{d^2\mathbf x}{dt^2}=-\boldsymbol\nabla\Phi,
$$

which is Newton's test-body equation. On the source side, the \(00\) component of the Einstein equation has the weak-field limits

$$
G_{00}\simeq\frac{2}{c^2}\nabla^2\Phi,
\qquad
T_{00}\simeq\rho c^2.
$$

Thus

$$
\frac{2}{c^2}\nabla^2\Phi
=\frac{8\pi G}{c^4}\rho c^2
\quad\Longrightarrow\quad
\nabla^2\Phi=4\pi G\rho.
$$

This two-sided reduction is stronger than resemblance: it recovers both Newtonian motion and the Poisson source equation, while identifying \(g_{00}\) as the carrier of the Newtonian potential at leading order.

| Logical role | Content |
|---|---|
| Limiting assumptions | Weak, static field; nonrelativistic matter and test bodies; first order in \(\Phi/c^2\). |
| Geometric input | Geodesic motion and the metric-compatible connection. |
| Dynamical input | Einstein field equation with \(T_{00}\simeq\rho c^2\). |
| Derived predecessor limit | Newton's force law and Poisson equation. |
| Not established by this limit | Strong-field dynamics, radiation, horizons, or quantum gravity. |

### Schwarzschild geometry and weak-field tests

Outside a static spherical mass:

$$
ds^2
=-\left(1-\frac{2GM}{rc^2}\right)c^2dt^2
+\left(1-\frac{2GM}{rc^2}\right)^{-1}dr^2
+r^2d\Omega^2.
$$

For a stationary clock:

$$
d\tau
=dt\sqrt{1-\frac{2GM}{rc^2}}.
$$

A lower clock runs more slowly relative to a distant one. In weak field:

$$
\frac{\Delta f}{f}
\approx\frac{\Delta\Phi}{c^2}.
$$

Mercury's relativistic perihelion advance per orbit is:

$$
\Delta\varpi
=\frac{6\pi GM}
{a(1-e^2)c^2}.
$$

The dynamical origin of that result can be displayed without solving the full orbit. For equatorial Schwarzschild geodesics, define \(u=1/r\) and the specific angular momentum \(h=r^2d\phi/d\tau\). The radial first integral differentiates to

$$
\frac{d^2u}{d\phi^2}+u
=\frac{GM}{h^2}+\frac{3GM}{c^2}u^2.
$$

The first two terms are the Newtonian Binet equation; the last term is the relativistic correction. Insert the zeroth-order ellipse

$$
u_0=\frac{GM}{h^2}(1+e\cos\phi)
$$

into the small correction. Its resonant \(\cos\phi\) component shifts the radial oscillation frequency from \(1\) to approximately \(1-3G^2M^2/(h^2c^2)\). Hence the periapsis advances by

$$
\Delta\varpi\simeq\frac{6\pi G^2M^2}{h^2c^2}
=\frac{6\pi GM}{a(1-e^2)c^2},
$$

where the last equality uses the Newtonian relation \(h^2=GMa(1-e^2)\), sufficient at this perturbative order.

For light passing with impact parameter \(b\), leading deflection is:

$$
\alpha\approx\frac{4GM}{bc^2}.
$$

These are different consequences of one metric theory, not separate fitted laws.

### Black holes and coordinate cautions

The Schwarzschild radius:

$$
r_s=\frac{2GM}{c^2}
$$

marks an event horizon in the ideal nonrotating solution. The apparent singularity of Schwarzschild coordinates at \(r_s\) is removable; the curvature singularity at \(r=0\) is not. Rotating astrophysical black holes are described by Kerr geometry. “Escape velocity exceeds light speed” is a Newtonian analogy, not the fundamental horizon definition.

### Gravitational waves

Linearizing:

$$
g_{\mu\nu}
=\eta_{\mu\nu}+h_{\mu\nu}
$$

produces wave equations for suitable components of \(h_{\mu\nu}\). Binary systems lose orbital energy. The leading quadrupole power is:

$$
P
=\frac{G}{5c^5}
\left\langle
\dddot Q_{ij}\dddot Q_{ij}
\right\rangle.
$$

Binary-pulsar decay indirectly confirmed this loss; LIGO later measured strain directly.

### Evidence ledger

| Test | Regime |
|---|---|
| Eötvös-type universality | Equivalence principle |
| Pound–Rebka and clocks | Gravitational redshift |
| Mercury | Weak-field orbital correction |
| Solar deflection/lensing | Null geodesics |
| Shapiro delay | Curved-spacetime signal travel |
| Binary pulsars | Strong-field dynamics and radiation reaction |
| Event Horizon Telescope | Compact-object spacetime consistency |
| LIGO/Virgo/KAGRA | Dynamical strong-field waves |

### GPS as combined relativity

Satellite clocks experience special-relativistic slowing due to orbital speed and general-relativistic speeding because they are higher in Earth's potential. The net correction is engineered into the system. GPS is not a pure test of one isolated equation, but it demonstrates operational necessity of relativistic time.

### Limits and open problems

General relativity is nonrenormalizable as a straightforward perturbative quantum field theory, though it works as a low-energy effective field theory. Singularities, black-hole information, early-universe conditions, and quantum spacetime require deeper theory. Dark matter and dark energy may represent new matter, modified gravity, or combinations; current data strongly constrain but do not settle every interpretation.

## AI-oriented inference notes

- Distinguish coordinate effects from curvature invariants.
- Never say gravity can be transformed away globally.
- Attach symmetry assumptions to named metrics.
- Link Newtonian gravity by weak-field limit, not historical invalidation.

## Additional quantitative and epistemic notes

### Additional quantitative and epistemic notes

The equivalence principle connected uniform acceleration with a homogeneous gravitational field locally, motivating a geometry in which freely falling bodies follow geodesics:

$$
\frac{d^2x^\mu}{d\tau^2}
+\Gamma^\mu_{\alpha\beta}
\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau}=0.
$$

Einstein's field equation relates curvature to stress-energy while satisfying local conservation through the Bianchi identity. Its Newtonian weak-field limit recovers \(\nabla^2\Phi=4\pi G\rho\), an essential correspondence constraint.

The anomalous perihelion advance of Mercury, approximately \(43\) arcseconds per century after known perturbations, was explained without an added planet. The 1919 eclipse observations supported light deflection but had limited precision and should not be treated as the sole proof. Later gravitational redshift, Shapiro delay, binary pulsars, lensing, frame dragging, black-hole imaging, and gravitational waves test distinct regimes. General relativity is the successful classical theory of gravitation; singularities and incompatibility with quantum theory mark scope limits, not routine failures in its tested domain.

## Edge list

```text
A-EQUIVALENCE-PRINCIPLE --motivates--> D-GENERAL-RELATIVITY-1915
A-SPECIAL-RELATIVITY --constrains--> D-GENERAL-RELATIVITY-1915
A-RIEMANN-GEOMETRY --enables--> D-GENERAL-RELATIVITY-1915
R-SCALAR-GRAVITY --superseded-by--> D-GENERAL-RELATIVITY-1915
D-GENERAL-RELATIVITY-1915 --retains-limit--> R-NEWTONIAN-ABSOLUTE-GRAVITY
FIELD-EQUATIONS --generate--> SPACETIME-CURVATURE
SPACETIME-CURVATURE --governs--> GEODESIC-MOTION
D-GENERAL-RELATIVITY-1915 --enables--> D-EXPANDING-UNIVERSE
D-GENERAL-RELATIVITY-1915 --instantiates--> P-03
```

## Sources

- Einstein Papers Project, [Einstein's 1916 review of general relativity](https://einsteinpapers.press.princeton.edu/vol6-trans/158).
- Einstein Online, [“Gravitational deflection of light”](https://www.einstein-online.info/en/spotlight/light_deflection/).
- Einstein Online, [“General Relativity”](https://www.einstein-online.info/en/category/elementary/general-relativity/).
- Stanford Encyclopedia of Philosophy, [“Early Philosophical Interpretations of General Relativity”](https://plato.stanford.edu/entries/genrel-early/).
