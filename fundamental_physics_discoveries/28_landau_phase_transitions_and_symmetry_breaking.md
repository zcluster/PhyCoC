# Landau Theory of Phase Transitions and Spontaneous Symmetry Breaking: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-LANDAU-PHASE-SYMMETRY-48` |
| Central node | `D-LANDAU-ORDER-PARAMETER-1937` |
| Focal discovery date | 1937 Landau phase-transition theory |
| Main contributors | Lev Landau; later extended by Ginzburg, mean-field practitioners, Kadanoff, Wilson, Fisher and others |
| Domain | Equilibrium phase transitions, collective order, symmetry breaking, and critical phenomena |
| Epistemic status | Foundational phenomenological framework; reliable away from strong fluctuation regimes and as the mean-field limit, but not a universal classification of all phases |

## Central claim

Landau represented a phase by an order parameter and constructed a free-energy expansion constrained by symmetry. A symmetric law can have asymmetric equilibrium minima, making spontaneous symmetry breaking a general mechanism for collective order. The framework predicts qualitative phase structure and mean-field scaling without deriving every microscopic detail. Wilsonian renormalization later corrected its treatment of fluctuations near many critical points, while topological order and other non-Landau phases show that symmetry-breaking order parameters are not universal.

## Historical problem

Thermodynamics classified discontinuities at phase changes, and specific microscopic or molecular-field models explained selected examples such as magnetism. What was missing was a common way to ask which collective quantity distinguishes two phases and how the symmetry of the high-temperature phase constrains its equilibrium free energy. Landau's 1937 construction treated that quantity as an order parameter and expanded the free energy in symmetry-allowed terms near a continuous transition. This organized possible transitions without solving every microscopic model, while relying on analyticity and a mean-field treatment whose limits were not yet resolved by the later renormalization group. Ginzburg–Landau superconductivity, Wilsonian criticality, and non-Landau phases are later extensions or limitations, not ingredients of the 1937 inference.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-THERMODYNAMIC-PHASES` | nineteenth century | Classify melting, boiling, magnetism, and critical points macroscopically | Singular thermodynamic behavior becomes measurable |
| `TS-MICROSCOPIC-MODELS` | 1900s–1930s | Ising, Weiss, and lattice models explain selected collective phenomena | Cooperative order is tied to many-body interactions |
| `TS-LANDAU` | 1937 | Find a theory applicable across different continuous transitions | Symmetry and an order parameter organize free energy |
| `TS-GINZBURG-LANDAU` | 1950 | Permit spatially varying superconducting order and electromagnetic coupling | Correlation length, interfaces, and vortices enter |
| `TS-RG-CRITICALITY` | 1960s–1970s | Mean-field exponents fail near low-dimensional critical points | Fluctuations and scale flow determine universality |

## Knowledge assets

- `A-FREE-ENERGY`: equilibrium minimizes an appropriate thermodynamic potential.
- `A-SYMMETRY-GROUP`: high-temperature phases possess transformation invariances.
- `A-MAGNETIZATION`: a collective variable distinguishing magnetic order.
- `A-WEISS-MEAN-FIELD`: self-consistent spontaneous order.
- `A-ISING-MODEL`: microscopic example of cooperative ordering.
- `A-ANALYTIC-EXPANSION`: local series approximation near a transition.

## Alternative, incomplete, or superseded pathways

### `R-EHRENFEST-DERIVATIVE-ORDER-CLASSIFICATION`

- **What it is:** A thermodynamic classification that labels a transition by the lowest derivative of free energy that is discontinuous, such as latent heat for a first-order transition or a discontinuity in heat capacity for a second-order transition.
- **Proposed/active period:** 1933–1936.
- **Core assumption:** Derivative order is the primary explanatory classification.
- **Why reasonable at the time:** Thermodynamic derivatives were measurable and separated familiar discontinuities.
- **Successful scope:** It remains descriptive for many classical transitions.
- **Anomaly or limitation:** It does not identify the new ordered variable, explain symmetry change, or naturally classify transitions with divergences and nonanalytic scaling.
- **Repair program:** Higher-order labels and detailed equations of state were considered.
- **Discriminator:** Landau's order parameter and symmetry expansion generate phase minima and predicted response behavior, not merely labels for derivatives.
- **Outcome:** Superseded as the main explanatory taxonomy, retained as limited thermodynamic terminology.
- **Retained structure:** Free-energy nonanalyticity and derivative measurements remain evidence.

### `R-WEISS-MOLECULAR-FIELD-AS-LITERAL-FIELD`

- **What it is:** A ferromagnetic model in which each magnetic moment experiences an internal “molecular field” proportional to the bulk magnetization, \(H_{\mathrm{eff}}=H+\lambda M\), sometimes read as a literal additional local field rather than a mean-field representation of interactions.
- **Proposed/active period:** 1907–1936.
- **Core assumption:** A self-consistent average field supplies the mechanism of magnetic order.
- **Why reasonable at the time:** It explained spontaneous magnetization and the Curie–Weiss susceptibility law.
- **Successful scope:** Captures mean-field magnetic phases and high-dimensional or long-range-interaction limits.
- **Anomaly or limitation:** The literal field lacked a microscopic basis before exchange theory, and neglected fluctuations give inaccurate critical behavior in many systems.
- **Repair program:** Heisenberg exchange supplied a quantum microscopic interaction; self-consistent approximations were refined.
- **Discriminator:** Landau separated the general symmetry/order-parameter structure from the material-specific microscopic origin.
- **Outcome:** Absorbed as a mean-field realization, not a universal microscopic ontology.
- **Retained structure:** Self-consistency, spontaneous magnetization, and mean-field critical exponents.

### `R-MICROSCOPIC-MODEL-FOR-EACH-TRANSITION`

- **What it is:** A research strategy requiring a detailed atomistic model and separate solution for every material before any phase-transition law or classification can be asserted.
- **Proposed/active period:** 1900s–1936.
- **Core assumption:** Cross-material phenomenology has no autonomous predictive status.
- **Why reasonable at the time:** Magnetic, fluid, alloy, and structural transitions involve very different microscopic constituents.
- **Successful scope:** Microscopic models identify actual interactions and can calculate material parameters.
- **Anomaly or limitation:** Very different systems display similar phase diagrams and scaling forms, while exact many-body solutions are rare.
- **Repair program:** Approximate lattice and molecular-field models sought tractability.
- **Discriminator:** A symmetry-allowed free-energy expansion predicts common qualitative behavior using few coefficients, independently of microscopic detail.
- **Outcome:** Rejected as a prerequisite for all progress; retained as the route to coefficients, mechanisms, and exceptions.
- **Retained structure:** Microscopic derivations remain essential for quantitative material-specific predictions.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (1937 Landau phase-transition theory). The proposed/active period is stored in each pathway record.

| Pathway | Repair strategy | Why inadequate or limited | Retained content |
|---|---|---|---|
| Ehrenfest derivative-order classification | Add thermodynamic transition orders | Describes singularities without identifying collective order or symmetry | Free-energy derivative diagnostics |
| Literal Weiss molecular field | Use a self-consistent internal field | Material-specific mean-field approximation with neglected fluctuations | Mean-field magnetism |
| Separate microscopic model for each transition | Solve constituent dynamics first | Misses shared emergent structure and is often intractable | Mechanisms and coefficient calculation |
| **Discovery/current: Landau order-parameter theory** | Expand free energy in symmetry-allowed powers of collective variables | Mean-field fluctuations and non-Landau order limit universality | Foundational effective theory of symmetry-breaking phases |

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

The admissible pre-discovery input nodes are `A-FREE-ENERGY`, `A-SYMMETRY-GROUP`, `A-MAGNETIZATION`, `A-WEISS-MEAN-FIELD`, `A-ISING-MODEL`, `A-ANALYTIC-EXPANSION`. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-EHRENFEST-DERIVATIVE-ORDER-CLASSIFICATION` | A thermodynamic classification that labels a transition by the lowest derivative of free energy that is discontinuous, such as latent heat for a first-order transition or a discontinuity in heat capacity for a second-order transition. | Derivative order named a thermodynamic symptom but did not identify what new ordered variable or symmetry changed across the transition. |
| `R-WEISS-MOLECULAR-FIELD-AS-LITERAL-FIELD` | A ferromagnetic model in which each magnetic moment experiences an internal “molecular field” proportional to the bulk magnetization, \(H_{\mathrm{eff}}=H+\lambda M\), sometimes read as a literal additional local field rather than a mean-field representation of interactions. | The self-consistent field organized magnetism but its literal microscopic source was not established; neglected fluctuations were a later limit on critical accuracy. |
| `R-MICROSCOPIC-MODEL-FOR-EACH-TRANSITION` | A research strategy requiring a detailed atomistic model and separate solution for every material before any phase-transition law or classification can be asserted. | Requiring an exact microscopic solution for every substance hid a common order-parameter and symmetry description available across different materials. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** “Which microscopic detail causes this transition?” becomes “Which order parameter and symmetry distinguish phases?”. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by information available at the focal discovery date; later confirmations, modern notation, and rival branches must be distinguished from contemporary inputs.

The scalar magnetization example below is a transparent modern specialization. Landau's 1937 papers placed particular emphasis on continuous structural transitions and symmetry changes; the later Ginzburg gradient theory and Wilsonian fluctuation analysis are not construction inputs.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-LAN-01` | Ehrenfest classifies thermodynamic derivative behavior; Weiss and microscopic models explain selected collective transitions. **Open question:** What makes different systems share a transition structure? |
| `CS-LAN-02` | A macroscopic variable that vanishes in the more symmetric phase can distinguish ordered and disordered states. **Open question:** Which free-energy terms can depend on it? |
| `CS-LAN-03` | Symmetry restricts the allowed low-order terms in an analytic free-energy expansion near a proposed continuous transition. **Open question:** How does a phase change emerge from those terms? |
| `CS-LAN-04` | A temperature-dependent quadratic coefficient can change sign while stabilizing higher terms remain positive. **Open question:** What happens to the equilibrium minima? |
| `CS-LAN-05` | A symmetric free energy can acquire symmetry-related nonzero minima and mean-field scaling. **Open question:** Are all transitions of this form continuous and universal? |
| `CS-LAN-06` | Order-parameter symmetry predicts qualitative phase structure but requires coefficients, stability, and fluctuation limits. **Open question:** Which other systems share the same allowed structure? |

##### `CT-LAN-01`: `CS-LAN-01` → `CS-LAN-02` — Replace derivative labels with a phase-distinguishing variable

- **Input model:** Thermodynamic singularity classifications and material-specific mean-field examples.
- **Pressure:** Derivative order alone does not say what collective property changes.
- **Protected structure:** Equilibrium free energy and observable order such as magnetization or structural distortion.
- **Hidden assumption:** A phase transition can be understood solely by the order of a discontinuous derivative.
- **Operation / change type:** `representation_shift` — Choose a macroscopic order parameter that distinguishes phase symmetries.
- **Output model:** The phase question becomes how an order parameter appears or vanishes.
- **Local justification:** Landau's 1937 Part I treats a small density change \(\delta\rho\) that alters crystal symmetry (English reprint, pp. 25–26).
- **Cost/uncertainty:** The relevant order parameter must be chosen and may not exist for every kind of phase.
- **Next question:** What form may the free energy take near the symmetric phase?

##### `CT-LAN-02`: `CS-LAN-02` → `CS-LAN-03` — Constrain the expansion by symmetry

- **Input model:** A small phase-distinguishing variable near a proposed continuous transition.
- **Pressure:** An arbitrary polynomial would falsely allow terms incompatible with the high-symmetry phase.
- **Protected structure:** Analytic local expansion where valid and invariance under the relevant transformations.
- **Hidden assumption:** Every algebraic power is equally admissible.
- **Operation / change type:** `constraint_change` — Retain only symmetry-allowed invariants in the free-energy expansion.
- **Output model:** A low-order phenomenological potential with fewer independent terms.
- **Local justification:** Part I expands the thermodynamic potential in symmetry invariants and identifies when odd powers vanish (pp. 26–27); the scalar even-power case is one specialization.
- **Cost/uncertainty:** Analyticity and neglect of large fluctuations are assumptions; symmetry does not fix numerical coefficients.
- **Next question:** Which coefficient change permits a new equilibrium phase?

##### `CT-LAN-03`: `CS-LAN-03` → `CS-LAN-04` — Let a control parameter change stability

- **Input model:** A symmetry-allowed expansion about zero order parameter.
- **Pressure:** The symmetric state must lose stability at a transition without changing the underlying symmetry law.
- **Protected structure:** Free-energy minimization and boundedness from stabilizing higher terms.
- **Hidden assumption:** Symmetric free energy must always have its minimum at zero.
- **Operation / change type:** `reweighting` — Let the quadratic coefficient vary through zero with temperature or another control parameter.
- **Output model:** The shape of the potential changes from one central minimum to possible nonzero minima.
- **Local justification:** Part I explicitly requires \(A(p,T)=0\) at a continuous-transition point and positive fourth-order terms when cubic invariants are absent (p. 27).
- **Cost/uncertainty:** A cubic invariant or negative quartic coefficient can instead produce first-order behavior.
- **Next question:** What stable minima and scaling follow in the simple even quartic case?

##### `CT-LAN-04`: `CS-LAN-04` → `CS-LAN-05` — Derive asymmetric equilibrium from symmetric law

- **Input model:** Even free energy with positive quartic term and a quadratic coefficient crossing zero.
- **Pressure:** A phase theory must yield stable states and measurable onset behavior.
- **Protected structure:** Symmetry of the potential and equilibrium minimization.
- **Hidden assumption:** Broken-symmetry states require explicitly asymmetric governing equations.
- **Operation / change type:** `enrichment` — Minimize the free energy and compare the zero and paired nonzero solutions.
- **Output model:** Two symmetry-related ordered minima below the transition and square-root mean-field onset.
- **Local justification:** Part I derives \(\eta^2=-A/(2B)\) from minimizing \(\Phi=\Phi_0+A\eta^2+B\eta^4\) (pp. 27–28); the paired scalar minima are a modern specialization.
- **Cost/uncertainty:** The exponent is a mean-field result and need not equal the measured critical exponent near strong fluctuations.
- **Next question:** Which conclusions survive when the order parameter or symmetry differs?

##### `CT-LAN-05`: `CS-LAN-05` → `CS-LAN-06` — Turn the example into a scoped method

- **Input model:** An order parameter, a symmetry-constrained potential, and a stable phase-minimum calculation.
- **Pressure:** Microscopic constituents differ across the structural and magnetic transitions considered by Landau despite similar symmetry logic.
- **Protected structure:** Material-specific coefficients and the possibility of first-order or fluctuation-dominated exceptions.
- **Hidden assumption:** One mean-field polynomial supplies exact critical behavior for every material.
- **Operation / change type:** `generalization` — Use symmetry and order-parameter content as transferable qualitative constraints across systems.
- **Output model:** A phenomenological method for symmetry-breaking phase transitions, with explicit domain limits.
- **Local justification:** Part I applies its symmetry argument to structural ordering and magnetic transitions (pp. 33–34); extension to other phase families remains a separate test.
- **Cost/uncertainty:** Fluctuations, spatial gradients, and non-Landau order require later extensions or different theories.
- **Next question:** Which new phase families obey the same symmetry restrictions, and where does the method fail?

#### Formal consolidation

The following Ising-like scalar polynomial and Ginzburg gradient functional are modern pedagogical consolidations. The gradient extension and critical-fluctuation corrections should not be back-projected into Landau's 1937 construction.

For an Ising-like scalar order parameter \(\phi\) with symmetry \(\phi\rightarrow-\phi\), the uniform Landau free-energy density is

$$
f(\phi,T)
=f_0(T)
+\frac12a(T-T_c)\phi^2
+\frac14b\phi^4
-h\phi,
\qquad a>0,\quad b>0.
$$

At \(h=0\), equilibrium satisfies

$$
\frac{\partial f}{\partial\phi}
=a(T-T_c)\phi+b\phi^3=0.
$$

Thus

$$
\phi=0
\quad (T>T_c),
$$

while below \(T_c\),

$$
\phi_\pm
=\pm\sqrt{\frac{a(T_c-T)}{b}}.
$$

The equations remain symmetric under \(\phi\to-\phi\), but either equilibrium state selects a sign. Near the transition the mean-field order-parameter exponent is therefore

$$
|\phi|\propto(T_c-T)^{1/2},
\qquad \beta_{\mathrm{MF}}=\frac12.
$$

Adding spatial variation gives a Landau–Ginzburg functional,

$$
F[\phi]
=\int d^dx
\left[
\frac12r\phi^2
+\frac14u\phi^4
+\frac12\kappa(\nabla\phi)^2
-h\phi
\right].
$$

In the symmetric phase \(r>0\), the Gaussian correlation length is

$$
\xi_+=\sqrt{\frac{\kappa}{r}}
\propto(T-T_c)^{-1/2}.
$$

Below the transition, expansion about a broken-symmetry minimum changes the curvature and the length's prefactor. The exponent remains a mean-field prediction, not an exact universal value below the upper critical dimension.

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** “Which microscopic detail causes this transition?” becomes “Which order parameter and symmetry distinguish phases?”

- `P-02` — **Permit a new representation, ontology, or mechanism:** Emergent collective variables and asymmetric states of symmetric laws are admitted

- `P-03` — **Make the new structure generative:** Thermodynamic anomalies become generated by minima of an order-parameter free energy

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain does not establish the target-domain claim; state the novel consequence and a possible failure condition before using later evidence as validation.

#### `EG-LAN-01` — Transfer symmetry-constrained potentials to superconductivity

- **Source domain:** Landau's 1937 order-parameter analysis of continuous transitions, especially structural and magnetic examples.
- **Target domain:** A superconducting phase represented by a complex collective order parameter and coupled to electromagnetism, as developed later by Ginzburg and Landau.
- **Novel consequence:** Symmetry and stability should restrict local free-energy terms; a nonzero equilibrium magnitude and characteristic response should follow near the transition.
- **Failure condition:** No physically meaningful complex collective variable or symmetry-constrained functional reproducing superconducting near-transition behavior would defeat this extension, even if the original structural cases remained sound.

#### `EG-LAN-02` — Compare other continuous transitions by symmetry class

- **Source domain:** A transition described by a small order parameter and analytic free-energy expansion.
- **Target domain:** Other materials whose order parameters transform under the same relevant symmetry despite different microscopic constituents.
- **Novel consequence:** Allowed polynomial terms and qualitative phase bifurcations should match, though coefficients and critical ranges differ.
- **Failure condition:** A continuous transition in the stated analytic mean-field regime with the same symmetry but incompatible allowed-term structure would challenge the transfer; fluctuation-dominated exponents test the approximation, not the symmetry constraint.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Thermodynamic anomalies become generated by minima of an order-parameter free energy

- `P-04` — **Unify previously separated domains or phenomena:** Structural order and magnetism share symmetry constraints; superconductivity is a later extension

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Weiss self-consistency and thermodynamic derivatives survive inside a broader effective theory. Its quantitative or otherwise discriminating test strategy is: Coefficients, response functions, phase boundaries, and critical exponents make the theory testable. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Weiss self-consistency and thermodynamic derivatives survive inside a broader effective theory

- `P-06` — **Prioritize discriminating tests:** Coefficients, response functions, phase boundaries, and critical exponents make the theory testable

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | “Which microscopic detail causes this transition?” becomes “Which order parameter and symmetry distinguish phases?” | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Emergent collective variables and asymmetric states of symmetric laws are admitted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Thermodynamic anomalies become generated by minima of an order-parameter free energy | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Structural ordering and magnetism share the 1937 symmetry method; superconductivity is a later extension | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Weiss self-consistency and thermodynamic derivatives survive inside a broader effective theory | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Coefficients, response functions, phase boundaries, and critical exponents make the theory testable | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-LANDAU-ORDER-PARAMETER-1937` |
| Focal date | 1937 Landau phase-transition theory |
| Central claim | Landau represented a phase by an order parameter and constructed a free-energy expansion constrained by symmetry. A symmetric law can have asymmetric equilibrium minima, making spontaneous symmetry breaking a general mechanism for collective order. The framework predicts qualitative phase structure and mean-field scaling without deriving every microscopic detail. Wilsonian renormalization later corrected its treatment of fluctuations near many critical points, while topological order and other non-Landau phases show that symmetry-breaking order parameters are not universal. |
| Domain | Equilibrium phase transitions, collective order, symmetry breaking, and critical phenomena |
| Epistemic status | Foundational phenomenological framework; reliable away from strong fluctuation regimes and as the mean-field limit, but not a universal classification of all phases |
| Generative role | Thermodynamic anomalies become generated by minima of an order-parameter free energy |
| Retained structure | Weiss self-consistency and thermodynamic derivatives survive inside a broader effective theory |

Key formal relations, consolidated from the derivation above:

$$
f(\phi,T)
=f_0(T)
+\frac12a(T-T_c)\phi^2
+\frac14b\phi^4
-h\phi,
\qquad a>0,\quad b>0.
$$

$$
\frac{\partial f}{\partial\phi}
=a(T-T_c)\phi+b\phi^3=0.
$$

$$
\phi=0
\quad (T>T_c),
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-LAN-01` — Conditional positive heat-capacity jump

- **Classification:** `NOVEL-THEORETICAL-CONSTRAINT`, not a universal forecast for every continuous transition or a claim that heat-capacity anomalies were unknown before 1937.
- **Deduction date and authorship:** Landau's 1937 Part I, Eq. (8), derives the heat capacity below the Curie point from the symmetry-allowed quartic potential; the checked English reprint is in *Collected Papers*, pp. 198–199.
- **Construction-data independence:** Once the coefficients are specified, the sign and expression of the jump follow from minimizing the free energy and differentiating the resulting equilibrium potential; they are not inferred from a later heat-capacity measurement used to construct the theory.
- **Derivation provenance and scope:** With \(\Phi=\Phi_0+A(T)\eta^2+B(T)\eta^4\), \(A(T_c)=0\), \(B(T_c)>0\), \(A'(T_c)\ne0\), and a continuous ordered branch \(\eta^2=-A/(2B)\), the transition adds \(\Delta C=T_c[A'(T_c)]^2/[2B(T_c)]>0\) relative to the common regular background. This assumes the analytic quartic mean-field regime; it supplies no material-independent numerical jump and does not cover fluctuation-dominated or first-order transitions.
- **Discriminator and outcome:** Compare the heat capacities on the two sides of an eligible symmetry-lowering transition using independently determined coefficients. A nonpositive or absent jump under those conditions would challenge this scoped model; divergent or rounded behavior outside its assumptions is a domain limit, not a direct refutation. This record establishes a contemporaneous deduction, not a case-by-case experimental confirmation.

## Validation and explanatory gains

Landau theory explains how a symmetric free energy can support asymmetric phases, predicts order-parameter onset, susceptibility growth, metastability, and symmetry-allowed coupling among collective variables. Its logic applies to magnets, binary mixtures, structural changes, superfluids, and superconductors. Ginzburg–Landau theory predicted characteristic lengths and supported analysis of magnetic flux penetration and vortices.

The most important gain is transfer: one need not know every microscopic detail to infer allowed terms and qualitative phases. The order parameter provides a compressed macroscopic representation, while its symmetry determines which powers and couplings are permitted. BCS later supplied a microscopic origin for the superconducting complex order parameter; Higgs theory transferred related broken-symmetry mathematics into gauge fields.

## Limitations and retained status

Landau mean-field theory suppresses long-wavelength fluctuations. Close enough to many continuous transitions, measured exponents differ from \(1/2\), and the renormalization group explains why dimensionality, symmetry, and interaction range control universal behavior. A cubic invariant or negative quartic coefficient with stabilizing higher powers can produce first-order behavior, so not every Landau expansion describes a continuous transition.

The paradigm also does not classify every phase. Topological order can distinguish phases without a local symmetry-breaking order parameter, and one-dimensional or gauge systems require care. Finite systems have rounded behavior rather than true thermodynamic singularities. Landau theory remains a highly successful effective and mean-field framework, not an ultimate theory of all collective matter.

## Extended historical investigation

### What the order parameter accomplishes

An order parameter is not merely a curve plotted against temperature. It is a variable whose transformation properties and equilibrium value distinguish phases. Magnetization changes sign under spin reversal; a superfluid or superconducting condensate uses a complex amplitude; a crystal distortion may transform as a vector or tensor. Choosing the wrong order parameter omits allowed phases and couplings.

Landau's method assumes that near a continuous transition the relevant free energy can be expanded analytically in small \(\phi\), subject to symmetry. The coefficients encode microscopic physics not derived by the phenomenology. This division of labor—symmetry determines form, material physics determines coefficients—is a central discovery-AI pattern.

### Susceptibility and heat-capacity inference

Above \(T_c\), minimizing to linear order in \(h\) yields

$$
\phi\simeq\frac{h}{a(T-T_c)},
$$

so the susceptibility is

$$
\chi
=\left.\frac{\partial\phi}{\partial h}\right|_{h=0}
=\frac{1}{a(T-T_c)}.
$$

Below \(T_c\), expanding about either minimum gives a different amplitude but the same mean-field divergence exponent \(\gamma_{\mathrm{MF}}=1\). Substituting the equilibrium \(\phi\) into \(f\) yields a free-energy lowering proportional to \(-(T_c-T)^2\), producing a heat-capacity jump rather than latent heat in the ideal quartic model.

These are discriminating predictions, but agreement far from the asymptotic critical region does not prove the exponents are exact.

### The Ginzburg criterion and Wilsonian repair

Landau theory assumes fluctuations around the mean order parameter are small. The Ginzburg criterion estimates the temperature window in which that assumption fails. Inside it, correlated regions grow, no single average field adequately represents all scales, and one must coarse-grain fluctuations. Wilson's renormalization group did not simply discard Landau's functional; it treated it as a scale-dependent effective action and calculated how its coefficients flow.

This is an exemplary retention relation:

$$
\text{Landau functional}
\xrightarrow{\text{include fluctuations across scales}}
\text{Landau–Ginzburg–Wilson theory}.
$$

The successor explains both the framework's broad success and the failure of its numerical critical exponents in specified dimensions.

### Spontaneous versus explicit breaking

At \(h=0\), the equations respect \(\phi\to-\phi\), but a macroscopic equilibrium below \(T_c\) selects \(\phi_+\) or \(\phi_-\): spontaneous breaking. At nonzero \(h\), the Hamiltonian or free energy itself favors one sign: explicit breaking. In a finite system with exact symmetry, the fully equilibrated probability distribution may sample both minima; sharp spontaneous breaking is defined through an infinite-volume or symmetry-breaking-limit procedure.

### Evidence and boundary ledger

| Observation | Landau inference | Boundary |
|---|---|---|
| Continuous order-parameter onset | Coefficient of \(\phi^2\) changes sign | Fluctuations alter exponent |
| Curie–Weiss susceptibility | Quadratic response near symmetric phase | Non-mean-field region near \(T_c\) |
| Heat-capacity jump | Equilibrium free energy changes curvature | Real transitions can show divergent or rounded behavior |
| Domains | Multiple symmetry-related minima | Domain walls and kinetics require gradients and dynamics |
| Vortices | Complex order parameter with phase winding | Core physics and gauge coupling require extended theory |

## AI-oriented inference notes

- Identify the order parameter and its symmetry transformation before writing a polynomial.
- Label coefficients as phenomenological unless a microscopic matching calculation is supplied.
- Distinguish spontaneous from explicit breaking and finite-size crossover from a thermodynamic transition.
- Do not treat mean-field exponents as exact outside their regime.
- Store Landau theory as predecessor and retained effective structure within Wilsonian RG, not as simply false.
- Permit non-Landau phases when no local order parameter distinguishes the data.

## Additional quantitative and epistemic notes

No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.

## Edge list

```text
A-FREE-ENERGY --is-expanded-by--> D-LANDAU-ORDER-PARAMETER-1937
CS-LAN-01 --revised-by--> CT-LAN-01
CT-LAN-01 --produces--> CS-LAN-02
CS-LAN-02 --revised-by--> CT-LAN-02
CT-LAN-02 --produces--> CS-LAN-03
CS-LAN-03 --revised-by--> CT-LAN-03
CT-LAN-03 --produces--> CS-LAN-04
CS-LAN-04 --revised-by--> CT-LAN-04
CT-LAN-04 --produces--> CS-LAN-05
CS-LAN-05 --revised-by--> CT-LAN-05
CT-LAN-05 --produces--> CS-LAN-06
CS-LAN-06 --hands-off-to--> EG-LAN-01
CS-LAN-06 --hands-off-to--> EG-LAN-02
A-SYMMETRY-GROUP --constrains--> ALLOWED-LANDAU-TERMS
ORDER-PARAMETER --distinguishes--> PHASES
SYMMETRIC-FREE-ENERGY --can-have--> ASYMMETRIC-MINIMUM
D-LANDAU-ORDER-PARAMETER-1937 --subsumes--> R-WEISS-MOLECULAR-FIELD-AS-LITERAL-FIELD
FLUCTUATIONS --limit--> MEAN-FIELD-EXPONENTS
D-LANDAU-ORDER-PARAMETER-1937 --precedes--> WILSONIAN-RG
D-LANDAU-ORDER-PARAMETER-1937 --instantiates--> P-04
```

## Sources

- CERN Document Server, [Landau, “On the theory of phase transitions. I” (1937), original-publication record](https://cds.cern.ch/record/480039?ln=en); [2008 English reprint of Part I, archived journal PDF](https://web.archive.org/web/20151214124950id_/http://www.ujp.bitp.kiev.ua/files/journals/53/si/53SI08p.pdf), pp. 25–28 and 33–34 checked against the chain above. The reprint is a translation, not the 1937 original-language scan.
- Elsevier, [Landau, “On the Theory of Phase Transitions” (English reprint of the 1937 papers in *Collected Papers*)](https://doi.org/10.1016/B978-0-08-010586-4.50034-1).
- University of Maryland, [scan of Landau's *Collected Papers* English reprint of “On the Theory of Phase Transitions”](https://www.physics.umd.edu/courses/Phys798C/AnlageSpring24/Landau%20On%20the%20Theory%20of%20Phase%20Transitions%20Collected%20Papers%20of%20L%20D%20Landau.pdf), Part I, printed pp. 198–199, Eqs. (5)–(8) checked for the conditional heat-capacity deduction. This is a later translation/reprint, not the 1937 original-language scan.
- CERN Document Server, [Landau, “On the theory of phase transitions. II”](https://cds.cern.ch/record/480041).
- *Nature*, [“The Theory of Phase Transitions”](https://www.nature.com/articles/138840a0), contemporary discussion of Landau's program.
- American Physical Society, [Wilson, “Renormalization Group and Critical Phenomena. II”](https://journals.aps.org/prb/abstract/10.1103/PhysRevB.4.3184), the later scale-dependent treatment of the Landau functional.
- Nobel Prize, [Kenneth Wilson's lecture on the renormalization group and critical phenomena](https://www.nobelprize.org/prizes/physics/1982/wilson/lecture/).
