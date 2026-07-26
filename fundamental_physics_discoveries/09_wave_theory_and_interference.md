# Wave Theory and Interference of Light: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-WAVE-LIGHT-08` |
| Central node | `D-WAVE-INTERFERENCE-1690-1818` |
| Focal discovery date | 1801–1818 (Young interference through Fresnel diffraction) |
| Main contributors | Christiaan Huygens, Thomas Young, Augustin-Jean Fresnel |
| Domain | Interference, diffraction, refraction, and polarization |
| Epistemic status | Wave superposition is fundamental; classical waves are the high-occupation limit of quantum electrodynamics |

## Central claim

Huygens supplied a wavefront construction, Young demonstrated interference, and Fresnel developed quantitative diffraction. Their work showed that intensities cannot always be added as independent rays: amplitudes superpose, creating bright and dark regions. Quantum theory later retained amplitude superposition while replacing a purely classical medium picture.

## Time slices

| Node | Period | Framework | Transition |
|---|---:|---|---|
| `TS-CORPUSCULAR` | 17th–18th centuries | Rays or particles explain rectilinear propagation and reflection | Diffraction and interference remained difficult |
| `TS-HUYGENS` | 1690 | Secondary wavelets advance wavefronts | Refraction obtains a wave construction |
| `TS-YOUNG` | 1801–1804 | Two-path interference demonstrated | Phase differences explain fringes |
| `TS-FRESNEL` | 1815–1818 | Diffraction integrals and transverse waves developed | Wave theory makes risky quantitative predictions |
| `TS-MAXWELL` | 1860s | Light identified as electromagnetic wave | Mechanical ether becomes less central |
| `TS-QUANTUM` | 1900 onward | Photons detected individually yet build interference | Probability amplitudes replace classical either/or ontology |

## Alternative, incomplete, or superseded pathways

### `R-NEWTONIAN-CORPUSCLES`

- **What it is:** A classical particle theory of light in which luminous bodies emit tiny corpuscles that travel along rays and are reflected, refracted, or color-separated by forces near material surfaces.
- **Proposed/active period:** 1672–1704.
- **Why reasonable:** Straight rays, reflection, and sharp shadows suggest directed particles.
- **Scope:** Geometrical optics.
- **Anomalies:** Stable dark fringes and diffraction into shadows.
- **Repair:** Postulated forces or “fits” near surfaces.
- **Outcome:** Superseded as a complete classical account.
- **Retained element:** Quantized photon detection and ray optics in suitable limits.

### Mechanical luminiferous-medium family

- **What it is:** A wave-carrier theory in which light is a mechanical vibration of an all-pervading material ether possessing elastic properties and a physically preferred state of rest.
- **Assumption:** Waves require a material ether analogous to sound's medium.
- **Limitation:** No consistent mechanical ether gained empirical support; relativity removed the need for a preferred rest medium.
- **Outcome:** Electromagnetic fields and spacetime propagation replaced the mechanical carrier.

### `R-LONGITUDINAL-LIGHT-WAVES`

- **What it is:** An early optical-wave analogy in which light oscillations are longitudinal compressions and rarefactions of an ether, like sound waves in air.
- **Proposed/active period:** 1690–1801.
- **Limitation:** Polarization requires a directional transverse degree of freedom that a simple longitudinal wave cannot supply.
- **Outcome:** Superseded; phase, frequency, and superposition were retained.

### `R-TRANSVERSE-ELASTIC-ETHER`

- **What it is:** A refined ether model in which light is a transverse shear vibration of an extremely rigid yet matter-penetrating elastic medium.
- **Proposed/active period:** 1817 (Young's transverse-wave proposal).
- **Limitation:** Its required mechanical properties were mutually difficult to reconcile and no preferred ether motion was established.
- **Outcome:** The material carrier was discarded; transverse electromagnetic polarization was retained.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1801–1818 (Young interference through Fresnel diffraction)). The proposed/active period is stored in each pathway record.

Newtonian corpuscular optics could explain reflection and refraction by hypothesized surface forces and was reinforced by Newton's authority. It struggled to generate stable destructive interference: two contributions can cancel as amplitudes even though two streams of ordinary particles cannot simply erase one another. Young's fringes and Fresnel's diffraction calculations made phase a generative variable.

| Rival/repair | What it explained | New difficulty | Retained content |
|---|---|---|---|
| Corpuscles plus surface forces and “fits” | Rays, reflection, colors phenomenology | Diffraction/fringe locations lacked a unified calculation | Ray limit and later photon discreteness |
| Longitudinal ether waves | Analogy with sound | Polarization indicated transverse structure | Superposition and phase |
| Transverse elastic ether | Polarization and wave propagation | Required an elusive medium with extraordinary mechanical properties | Transverse electromagnetic degrees of freedom |
| **Discovery/current: wave superposition and electromagnetic field** | Optical amplitudes carry phase and add before intensity is calculated, later without a mechanical carrier | Quantitative fringe, diffraction, polarization, and electromagnetic propagation | Retained in classical fields and quantum probability amplitudes |

The later photon did not restore Newton's corpuscle model unchanged. Single-photon interference preserves probability amplitudes and phase, while localized detection retains a particle-like outcome. The correct retained-element edge is therefore `CORPUSCULAR-DISCRETENESS --transformed-into--> QUANTUM-DETECTION`, not simple historical vindication.

## Knowledge assets

- `A-WATER-SOUND-WAVES`: analogy of superposition and fronts.
- `A-THIN-FILMS`: colored interference phenomena.
- `A-DIFFRACTION`: bending and fringes near edges.
- `A-PHASE`: periodic wave state.
- `A-POLARIZATION`: evidence favoring transverse rather than longitudinal light waves.

## Discovery node and equations

For two coherent fields:

$$
E=E_1+E_2.
$$

Measured intensity is proportional to the time average of \(E^2\):

$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\delta,
$$

where \(\delta\) is phase difference. The cross term is the essential interference contribution. For equal intensities \(I_0\):

$$
I=4I_0\cos^2\left(\frac{\delta}{2}\right).
$$

In a double-slit geometry with separation \(d\):

$$
d\sin\theta=m\lambda
$$

for bright fringes, and for small angles at screen distance \(L\):

$$
\Delta y\approx\frac{\lambda L}{d}.
$$

Destructive interference is not two positive intensities canceling; signed or complex amplitudes cancel before intensity is formed.

## Validation and explanatory gains

- Young fringes link spacing to wavelength and geometry.
- Fresnel diffraction predicted the bright Poisson–Arago spot behind a circular obstruction.
- Polarization supports transverse degrees of freedom.
- Maxwell's equations identify the wave speed with \(1/\sqrt{\mu_0\epsilon_0}\).
- Single-photon experiments retain the interference distribution while detections occur discretely.

## Limitations and retained status

Classical wave optics does not explain photon counting, photoelectric thresholds, antibunching, or spontaneous emission. Geometrical optics emerges when wavelength is small relative to apparatus scales. Quantum optics retains complex-amplitude superposition and recovers classical fields for suitable coherent states and large occupation numbers.

## Discovery patterns

| ID | Instantiation |
|---|---|
| `P-01` | Refraction, diffraction, interference, and polarization joined |
| `P-02` | Fringe positions generated from phase relations |
| `P-03` | “Which ray path?” reframed as “How do amplitudes combine?” |
| `P-04` | Extended waves and later probability amplitudes accepted |
| `P-05` | Ray optics retained as a short-wavelength limit |
| `P-06` | Bright/dark fringe locations offered precise tests |

## Edge list

```text
A-DIFFRACTION --challenges--> R-NEWTONIAN-CORPUSCLES
A-THIN-FILMS --contributes-to--> D-WAVE-INTERFERENCE-1690-1818
D-HUYGENS-WAVEFRONT --precedes--> D-YOUNG-INTERFERENCE
D-YOUNG-INTERFERENCE --precedes--> D-FRESNEL-DIFFRACTION
EQ-SUPERPOSITION --generates--> V-BRIGHT-DARK-FRINGES
V-ARAGO-SPOT --validates--> D-FRESNEL-DIFFRACTION
D-MAXWELL-FIELD --reframes--> D-WAVE-INTERFERENCE-1690-1818
D-QUANTUM-OPTICS --retains--> EQ-SUPERPOSITION
D-WAVE-INTERFERENCE-1690-1818 --instantiates--> P-02
D-WAVE-INTERFERENCE-1690-1818 --instantiates--> P-05
```

## Extended historical investigation

### Huygens, Young, and Fresnel solved different parts

Huygens's construction treats every point on a wavefront as the source of secondary wavelets whose envelope forms the later front. It gives a geometrical account of propagation and refraction. In modern form, Snell's law follows from phase matching across an interface:

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

Young emphasized interference and linked optical fringes to path difference. Fresnel supplied a much more complete mathematical treatment of diffraction and combined wavelets with interference. The compound label “Huygens–Fresnel principle” should therefore not erase distinct historical contributions.

### Complex amplitude and measurable intensity

Represent a monochromatic field as:

$$
E_j(\mathbf r,t)
=\Re\left\{
\mathcal E_j(\mathbf r)e^{-i\omega t}
\right\}.
$$

For coherent paths:

$$
\mathcal E=\mathcal E_1+\mathcal E_2.
$$

The time-averaged intensity is:

$$
I\propto|\mathcal E|^2
=|\mathcal E_1|^2+|\mathcal E_2|^2
+2\Re(\mathcal E_1^*\mathcal E_2).
$$

If the relative phase fluctuates randomly during detection:

$$
\left\langle
\mathcal E_1^*\mathcal E_2
\right\rangle\rightarrow0,
$$

and stable fringes vanish. This introduces coherence as a necessary node. Two sources can each be wave-like yet fail to show time-averaged interference if their phase relationship is unstable.

### Double-slit inference

With slit separation \(d\) and observation angle \(\theta\), path difference is:

$$
\Delta=d\sin\theta.
$$

Phase difference:

$$
\delta=\frac{2\pi}{\lambda}\Delta.
$$

Constructive and destructive conditions are:

$$
d\sin\theta=m\lambda,
$$

$$
d\sin\theta=\left(m+\frac12\right)\lambda.
$$

For small angles and screen distance \(L\):

$$
y_m\approx\frac{m\lambda L}{d},
\qquad
\Delta y\approx\frac{\lambda L}{d}.
$$

Thus fringe spacing changes linearly with wavelength and screen distance and inversely with slit separation. This multivariable relation is much harder for an ad hoc corpuscular deflection model to imitate than the bare observation of alternating brightness.

### Single-slit diffraction and finite aperture

For a slit of width \(a\), Fraunhofer diffraction gives:

$$
I(\theta)
=I_0
\left[
\frac{\sin\beta}{\beta}
\right]^2,
\qquad
\beta=\frac{\pi a\sin\theta}{\lambda}.
$$

Minima occur at:

$$
a\sin\theta=m\lambda,
\qquad m=\pm1,\pm2,\ldots.
$$

The result explains why even an optically perfect lens has finite resolution. For a circular aperture, the Rayleigh scale is approximately:

$$
\theta_{\min}\approx1.22\frac{\lambda}{D}.
$$

Diffraction is therefore not a device imperfection; it follows from wave propagation through a finite aperture.

### The Poisson–Arago spot as a risky prediction

During evaluation of Fresnel's wave theory, Poisson noted that the mathematics implied a bright point at the center of the shadow of a circular disk—apparently an absurd consequence. Arago observed the spot. The episode is valuable because the theory produced an unexpected prediction chosen by a critic, reducing the risk of post hoc accommodation. The exact historical drama is sometimes simplified, but the predictive structure is genuine.

### Polarization and transverse waves

Interference alone does not determine whether waves are longitudinal or transverse. Polarization supplied the crucial constraint. Malus's law:

$$
I=I_0\cos^2\theta
$$

describes transmission through an analyzer. Two independent transverse polarization components fit the phenomenon. This created difficulty for mechanical ether models because a fluid-like medium readily supports longitudinal compression but not transverse shear without unusual properties.

### Classical waves, photons, and quantum amplitudes

The photoelectric effect and photon counting did not return physics to Newtonian corpuscles. Quantum theory retains superposition:

$$
|\psi\rangle
=\frac{1}{\sqrt2}
\left(
|\psi_1\rangle+e^{i\delta}|\psi_2\rangle
\right),
$$

for equal-amplitude orthogonal path states; unequal paths require different normalized coefficients. The detection probability is:

$$
P\propto|\psi|^2.
$$

Individual photons arrive as localized detector events, while repeated events form an interference distribution. Which-path information can destroy interference because the path alternatives become entangled with distinguishable detector states. The retained structure is amplitude addition; the classical ontology of a continuously divisible field is not complete.

### Domain map

| Regime | Effective description |
|---|---|
| Apertures \(\gg\lambda\), incoherent sources | Geometrical ray optics |
| Coherent fields, many photons | Classical wave optics |
| Few photons or nonclassical states | Quantum optics |
| Strong light–matter interaction | QED or material quantum theory |

## AI-oriented inference notes

- Store amplitude superposition before intensity formation.
- Add coherence assumptions to interference equations.
- Do not treat wave–particle duality as alternating classical identities; use quantum-state and measurement nodes.
- Separate Huygens's construction, Young's interference, and Fresnel's diffraction theory.

## Sources

- American Physical Society, [“Fresnel's Evidence for the Wave Theory of Light”](https://www.aps.org/apsnews/2016/07/fresnel-wave-theory-light).
- American Physical Society, [“Particle-Wave Duality”](https://www.aps.org/learning-resources/particle-wave-duality).
- Royal Society, [Thomas Young's Bakerian Lecture on light and colours](https://royalsocietypublishing.org/doi/10.1098/rstl.1802.0004).
