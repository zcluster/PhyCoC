# Expanding Universe: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-EXPANDING-UNIVERSE-24` |
| Central node | `D-COSMIC-EXPANSION-1922-1929` |
| Focal discovery date | 1922–1929 (Friedmann/Lemaître through Hubble) |
| Main contributors | Alexander Friedmann, Georges Lemaître, Vesto Slipher, Edwin Hubble, Milton Humason and others |
| Domain | Relativistic cosmology |
| Epistemic status | Cosmic expansion is established; credit cannot be reduced to a single law or observer |

## Central claim

Relativistic solutions and galaxy redshift–distance data established that cosmic scale changes with time. Slipher measured many redshifts; Friedmann and Lemaître developed expanding solutions; Lemaître connected theory and data; Hubble and Humason strengthened the empirical relation.

## Time slices

| Node | Period | Framework/evidence | Transition |
|---|---:|---|---|
| `TS-STATIC-COSMOS` | Pre-1917 | Large-scale universe assumed static | General relativity permits dynamics |
| `TS-EINSTEIN-STATIC` | 1917 | \(\Lambda\) used for static model | Stability and evidence problematic |
| `TS-SLIPHER` | 1910s–1920s | Spiral-nebula redshifts measured | Many large recessional velocities |
| `TS-FRIEDMANN` | 1922–1924 | Dynamical scale-factor solutions | Expansion theoretically allowed |
| `TS-LEMAITRE` | 1927 | Theory connected to redshift-distance data | Expansion rate estimated |
| `TS-HUBBLE-HUMASON` | 1929 onward | Distances and redshifts correlated | Expansion becomes empirical program |

## Alternative, incomplete, or superseded pathways

### `R-STATIC-UNIVERSE`

- **What it is:** A cosmological model in which the universe's large-scale geometry, matter distribution, and characteristic distances are constant in time rather than governed by an evolving scale factor.
- **Proposed/active period:** 1917 (Einstein static model).
- **Why reasonable:** Stars appear fixed on human time scales.
- **Limitation:** Relativistic static solutions are non-generic and redshift–distance patterns indicate dynamics.
- **Outcome:** Superseded globally; bound systems remain approximately static.

### `R-DE-SITTER-STATIC-REDSHIFT`

- **What it is:** The interpretation that cosmological redshifts arise from static-coordinate properties of de Sitter spacetime rather than an evolving matter-filled scale factor.
- **Proposed/active period:** 1917.
- **Outcome:** Historically important but insufficient for the full distance, matter, evolution, and CMB evidence.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1922–1929 (Friedmann/Lemaître through Hubble)). The proposed/active period is stored in each pathway record.

| Pathway | Why plausible | Protective repair | Failing evidence | Retained scope |
|---|---|---|---|---|
| Einstein static universe | No observed large-scale change; philosophical preference for stasis | Add cosmological constant balancing attraction | Equilibrium instability and redshift–distance evidence | Bound systems can be locally static |
| de Sitter redshift without matter expansion | Relativistic geometry can shift spectra | Attribute galaxy relation to static-coordinate effects | Full distance, matter, and evolutionary evidence favors expanding FLRW | Curvature can affect observed redshift |
| **Discovery/current: expanding FLRW universe** | Dynamical scale factor | Add matter, radiation, curvature, and \(\Lambda\) | Redshift–distance, CMB, nucleosynthesis, BAO, time dilation | Retained framework |

Early galaxy distances were badly calibrated and peculiar velocities produced scatter, so the 1920s relation alone did not establish the later hot Big Bang. Expansion, hot origin, nucleosynthesis, and CMB are distinct evidential nodes. Steady-state cosmology also permitted expansion but required continuous matter creation and time-invariant large-scale properties; radio-source evolution and the CMB strongly disfavored it. It should not be merged with the static-universe pathway.

## Knowledge assets

- `A-GR`: dynamical spacetime equations.
- `A-GALAXY-REDSHIFTS`: Slipher's spectroscopy.
- `A-DISTANCE-LADDER`: Cepheids and luminosity calibration.
- `A-HOMOGENEITY`: large-scale symmetry assumption.

## Discovery node and equations

The Friedmann–Lemaître–Robertson–Walker metric is:

$$
ds^2=-c^2dt^2
+a^2(t)\left[
\frac{dr^2}{1-kr^2}
+r^2d\Omega^2
\right].
$$

The expansion rate is:

$$
H(t)=\frac{\dot a}{a}.
$$

At small redshift and distance:

$$
v\approx H_0d,
\qquad
z\approx\frac{v}{c}.
$$

More fundamentally:

$$
1+z=\frac{a(t_0)}{a(t_{\mathrm{emit}})}.
$$

The first Friedmann equation is:

$$
H^2
=\frac{8\pi G}{3}\rho
-\frac{kc^2}{a^2}
+\frac{\Lambda c^2}{3}.
$$

Thus the observed expansion rate constrains density, curvature, and \(\Lambda\).

## Validation and explanatory gains

- Successive distance–redshift samples established expansion.
- CMB temperature and primordial abundances support a hot dense past.
- Time dilation in distant supernova light curves supports expansion rather than simple photon fatigue.
- Baryon acoustic oscillations provide a standard ruler across cosmic time.

## Limitations and retained status

The linear law is local; at large redshift one must use a cosmological model and luminosity/angular-diameter distances. Galaxies do not generally fly through pre-existing space from one center; the homogeneous metric scale changes. Bound atoms, planets, and galaxies do not simply expand with \(a(t)\).

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Relativity, spectroscopy, and distance measurement unified |
| `P-02` | Scale-factor dynamics generates redshift histories |
| `P-03` | Galaxy recession reframed as metric expansion |
| `P-04` | A dynamical universe accepted |
| `P-05` | Local Doppler intuition retained only at low redshift |
| `P-06` | Redshift–distance relation makes cosmology testable |

## Edge list

```text
A-GR --permits--> D-FRIEDMANN-SOLUTIONS
A-GALAXY-REDSHIFTS --contributes-to--> D-COSMIC-EXPANSION-1922-1929
A-DISTANCE-LADDER --enables--> REDSHIFT-DISTANCE-RELATION
D-LEMAITRE-1927 --connects--> D-FRIEDMANN-SOLUTIONS
D-LEMAITRE-1927 --connects--> REDSHIFT-DISTANCE-RELATION
REDSHIFT-DISTANCE-RELATION --supersedes--> R-STATIC-UNIVERSE
V-CMB --supports--> HOT-EXPANDING-UNIVERSE
D-COSMIC-EXPANSION-1922-1929 --instantiates--> P-01
```

## Extended historical investigation

### Distributed discovery and credit

The expanding universe was not “discovered by Hubble alone.” Slipher measured many spiral-nebula radial velocities before their extragalactic nature was fully settled. Friedmann found dynamical general-relativistic solutions. Lemaître independently derived expansion, connected it to observations, and estimated a rate. Hubble's 1929 distance–velocity plot and later work with Humason expanded the observational program. The IAU's “Hubble–Lemaître law” naming reflects this distributed history.

Distance calibration was initially poor, producing expansion rates far above modern values. The central discovery was the positive correlation and dynamical interpretation, not an accurate 1929 value of \(H_0\).

### FLRW geometry and redshift

Homogeneity and isotropy lead to:

$$
ds^2
=-c^2dt^2
+a^2(t)
\left[
\frac{dr^2}{1-kr^2}
+r^2d\Omega^2
\right].
$$

For successive light-wave crests traveling along null paths:

$$
ds^2=0.
$$

Comparing emission and reception intervals gives:

$$
\frac{\lambda_0}{\lambda_e}
=\frac{a_0}{a_e},
$$

so:

$$
1+z=\frac{a_0}{a_e}.
$$

Cosmological redshift is not simply ordinary motion through static Euclidean space, though at small distance:

$$
v\approx cz\approx H_0d.
$$

### Friedmann dynamics

For total mass density \(\rho\):

$$
H^2
=\left(\frac{\dot a}{a}\right)^2
=\frac{8\pi G}{3}\rho
-\frac{kc^2}{a^2}
+\frac{\Lambda c^2}{3}.
$$

Energy conservation:

$$
\dot\rho
+3H\left(
\rho+\frac{p}{c^2}
\right)=0.
$$

For an equation of state:

$$
p=w\rho c^2,
$$

one obtains:

$$
\rho\propto a^{-3(1+w)}.
$$

Thus matter scales as \(a^{-3}\), radiation as \(a^{-4}\), and a cosmological constant remains constant. Expansion history changes as the dominant component changes.

### Distance is not unique

Astronomers use several distances:

- comoving distance;
- proper distance at a specified cosmic time;
- luminosity distance \(d_L\);
- angular-diameter distance \(d_A\).

They satisfy:

$$
d_L=(1+z)^2d_A.
$$

For a flat universe:

$$
d_C(z)
=c\int_0^z\frac{dz'}{H(z')}.
$$

The linear Hubble law is only the first low-redshift term. At high redshift, converting \(z\) into a distance requires a cosmological model.

### Distance-ladder logic

Cepheid period–luminosity relations calibrate distances to nearby galaxies:

$$
M=a\log_{10}P+b
$$

schematically. Distance modulus:

$$
\mu=m-M
=5\log_{10}\frac{d_L}{10\ \mathrm{pc}}.
$$

Calibration, dust, metallicity, selection, and population effects propagate into \(H_0\). Modern alternatives include geometric masers, tip-of-the-red-giant-branch calibration, gravitational-wave standard sirens, CMB inference, and time-delay lenses.

### Why tired light fails as a general model

A photon-energy-loss rule can be tuned to produce redshift with distance, but expansion predicts additional effects:

- time dilation of transient light curves by \(1+z\);
- black-body CMB evolution;
- surface-brightness scaling;
- angular-distance relations;
- baryon-acoustic standard rulers;
- a consistent hot early history.

The evidential network matters more than one redshift plot.

### Bound systems and recession speeds

Expansion does not pull apart every bound system. Local gravitational or electromagnetic binding dominates. The Hubble relation applies statistically on sufficiently large scales.

For distant comoving objects, recession rate:

$$
v_{\mathrm{rec}}=H(t)D
$$

can exceed \(c\) without local material motion through spacetime exceeding \(c\). Special-relativistic velocity limits apply locally; cosmological proper-distance rates are coordinate- and slicing-dependent.

### Evidence ledger

| Evidence | Expansion inference |
|---|---|
| Galaxy redshift–distance | Present large-scale expansion |
| CMB | Hot, denser past |
| Primordial light elements | Early thermal/nuclear history |
| Supernova time dilation | \(1+z\) expansion stretching |
| BAO | Standard-ruler expansion history |
| Structure growth | Matter and gravity across time |

## AI-oriented inference notes

- Attribute discovery across theory, spectroscopy, and distance calibration.
- Do not use \(v=H_0d\) at arbitrary redshift.
- Distinguish local peculiar velocity from metric expansion.
- Store distance type explicitly.

## Additional quantitative and epistemic notes

Friedmann and Lemaître found evolving solutions before a linear distance–redshift relation was observationally stabilized. For small redshift,

$$
v\simeq cz\simeq H_0d,
$$

but at cosmological distances “recession velocity” becomes convention-dependent and luminosity/angular distances must be computed in an FLRW model. Slipher supplied many early galaxy redshifts; Hubble's 1929 synthesis used distance estimates whose calibration was later substantially revised. Naming the relation should not erase these distributed contributions or Lemaître's 1927 theoretical-observational analysis.

Expansion is not normally galaxies flying through static space from one central explosion. It is growth of the scale factor in a statistically homogeneous geometry, with bound systems exempt when local forces dominate. Subsequent CMB, nucleosynthesis, time dilation in transient light curves, and BAO observations validate the hot expanding framework. The numerical value and inference route for \(H_0\) remain active precision questions, distinct from whether expansion occurs.

## Sources

- NASA Science, [“What Is Dark Energy?—A Brief History”](https://science.nasa.gov/dark-energy/).
- International Astronomical Union, [resolution on the Hubble–Lemaître law](https://www.iau.org/news/announcements/detail/ann18048/).
- Lemaître, [1927 paper in English translation](https://academic.oup.com/mnras/article/91/5/483/985673).
