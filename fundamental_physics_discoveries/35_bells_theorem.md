# Bell's Theorem: Historical Knowledge Graph

## Graph metadata

| Field | Value |
|---|---|
| Graph ID | `KG-BELL-36` |
| Central node | `D-BELL-THEOREM-1964` |
| Focal discovery date | November 1964 publication |
| Main contributors | John Bell; experimental development by Clauser, Aspect, Zeilinger and many others |
| Domain | Quantum correlations, locality, and hidden-variable constraints |
| Epistemic status | Bell-inequality violations are established; interpretation of quantum ontology remains open |

## Central claim

Bell's 1964 argument used the singlet state's perfect anticorrelation and local, predetermined spin responses to derive an inequality incompatible with the full quantum angular correlation. He also showed that local-response correlations cannot approximate that quantum pattern arbitrarily closely. Later stochastic local-factorization formulations and the CHSH inequality broadened the experimental framework; experiments agree with quantum violations. The conclusion is not simply “faster-than-light messaging”: quantum correlations do not by themselves permit controllable superluminal signaling.

## Historical problem

EPR's 1935 argument made quantum incompleteness conditional on locality and a criterion of physical reality; Bohm's 1952 dynamics showed that hidden variables were possible if nonlocal dependence was allowed. The unresolved issue was whether a *local* completion could reproduce the full pattern of quantum correlations. Bell's 1964 paper turned that conditional possibility into a bound on correlations for separated spin measurements, then compared it with quantum predictions. The later CHSH inequality (1969) and optical experiments translated the theorem into an experimentally usable program; neither was an input to the 1964 proof.

## Time slices

| Node | Period | Problem | Transition |
|---|---:|---|---|
| `TS-EPR` | 1935 | Entanglement used to argue quantum incompleteness | Local hidden values considered |
| `TS-BOHM` | 1952 | Explicit nonlocal hidden-variable theory | Hidden variables shown possible but nonlocal |
| `TS-BELL` | 1964 | Local-causal models constrained mathematically | Metaphysical debate becomes experimental |
| `TS-CHSH` | 1969 | Experiment-friendly inequality | Optical tests designed |
| `TS-EXPERIMENTS` | 1970s–2015 | Increasing loophole control | Violations repeatedly observed |

## Knowledge assets

- `A-ENTANGLEMENT`: nonfactorizable joint states.
- `A-EPR`: locality/completeness dilemma.
- `A-PROBABILITY`: conditional factorization.
- `A-POLARIZATION-CORRELATION`: tunable measurements.
- `A-RANDOM-SETTINGS`: limits common-cause coordination.

## Alternative, incomplete, or superseded pathways

### `R-LOCAL-HIDDEN-VARIABLE-COMPLETION`

- **What it is:** A completion of quantum mechanics in which an underlying state \(\lambda\) supplies the missing outcome probabilities or values, and joint results at separated detectors factor into local responses to their own settings.
- **Proposed/active period:** 1935–1964.
- **Assumption:** Outcomes are determined or probabilistically completed by shared variables, with local factorization.
- **Why reasonable:** Preserves separability and relativistic causal intuition.
- **Limitation:** Must satisfy Bell inequalities violated by quantum correlations and experiments.
- **Outcome:** This model class is excluded, not every realist or hidden-variable interpretation.

### `R-BOHMIAN-NONLOCAL-COMPLETION`

- **What it is:** A deterministic hidden-variable theory with particle configurations guided by a nonlocal wavefunction.
- **Proposed/active period:** 1952.
- **Outcome:** Empirically viable; not part of the excluded local class.

### Pathway comparison ledger

**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above that originated before the focal discovery (November 1964 publication). The proposed/active period is stored in each pathway record.

| Escape route | Which premise changes | Empirical/theoretical status |
|---|---|---|
| Local hidden-variable completion | Retains local factorization and setting independence | Bell inequalities are violated under controlled conditions |
| Bohmian mechanics | Local factorization fails | Empirically viable nonlocal hidden-variable theory |
| **Discovery/current: Bell-violating quantum correlations** | Entangled probabilities violate local-causal inequalities while preserving operational no-signaling | Loophole-controlled Bell tests | Retained empirical structure; interpretation open |

This ledger prevents the common overstatement that Bell experiments refute “realism.” Bell excluded correlations produced by a specific local-causal factorization together with auxiliary assumptions. Experimental loopholes are physical versions of those assumptions: inefficient sampling, setting communication, memory, and trial selection. Modern tests close the major conventional loopholes simultaneously, while no finite experiment proves metaphysical independence of every cause in the universe.

## Discovery-process reconstruction: interpolation, transformation, and extrapolation

This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.

### Starting ingredients

Pre-1964 inputs were the EPR entangled-state dilemma (`A-EPR`, `A-ENTANGLEMENT`), ordinary probability, and Bohm's explicitly nonlocal hidden-variable counterexample. The original proof concerned spin correlations and locality; photon-polarization implementations, CHSH's four-setting inequality, and fast random setting choices (`A-POLARIZATION-CORRELATION`, `A-RANDOM-SETTINGS`) are later experimental-development assets, not Bell's original evidence.

### What interpolation could and could not achieve

| Pathway | What the inherited search retained | Why it remained insufficient |
|---|---|---|
| `R-LOCAL-HIDDEN-VARIABLE-COMPLETION` | A completion of quantum mechanics in which an underlying state \(\lambda\) supplies the missing outcome probabilities or values, and joint results at separated detectors factor into local responses to their own settings. | Bell's 1964 comparison shows a conflict with specified quantum correlations under locality and distribution assumptions; experiments are later tests. |
| `R-BOHMIAN-NONLOCAL-COMPLETION` | A deterministic hidden-variable theory with particle configurations guided by a nonlocal wavefunction. | It remains a viable hidden-variable branch, but its explicit nonlocal guidance cannot rescue the locality condition Bell tested. |

**Pattern demonstrated — `P-01` (reframe the inherited question):** Interpretation dispute reframed as a statistical test. The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.

### Transformative move

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified using EPR, Bohm, probability, and quantum spin predictions available by 1964. This is an auditable reconstruction, not Bell's hidden reasoning; CHSH's 1969 form, later photon tests, and loophole-closing methods remain downstream.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-BELL-01` | EPR's locality/completeness dilemma and Bohm's nonlocal completion leave local hidden-variable theories open. **Open question:** Can locality be stated as a calculable constraint on correlations? |
| `CS-BELL-02` | Given singlet perfect anticorrelation and the EPR locality premise, Bell's 1964 response functions \(A(a,\lambda),B(b,\lambda)=\pm1\) depend on a shared complete state but not the distant setting. **Open question:** What correlations can any such model produce? |
| `CS-BELL-03` | Averaging the local responses over the common-state distribution imposes relations among multiple settings. **Open question:** Does quantum mechanics obey those relations? |
| `CS-BELL-04` | Bell's 1964 inequality limits a class of local hidden-variable correlations. **Open question:** Are there quantum spin configurations that cross the bound? |
| `CS-BELL-05` | Quantum singlet correlations conflict with that local bound; Bell's further approximation argument shows the conflict is not confined to an exact mathematical point. **Open question:** How can a real experiment test it? |
| `CS-BELL-06` | A model-class discriminator exists, but experimental implementation and loophole control remain future work. **Open question:** Which measurement design can test the contrast fairly? |

##### `CT-BELL-01`: `CS-BELL-01` → `CS-BELL-02` — Make locality operational in a completion

- **Input model:** EPR's distant-prediction argument, singlet perfect anticorrelation, and Bohm's explicit but nonlocal hidden-variable theory.
- **Pressure:** “Hidden variables” alone is too broad: Bohm shows that adding them does not automatically restore locality.
- **Protected structure:** Reproducible measurement outcomes and separated-setting choices.
- **Hidden assumption:** Any completion of quantum theory would satisfy the locality premise.
- **Operation / change type:** `differentiation` — Follow the 1964 argument from perfect anticorrelation plus locality to predetermined local response functions, separate from nonlocal completions.
- **Output model:** A constrained local hidden-variable class.
- **Local justification:** Bell's 1964 paper explicitly contrasts the EPR locality demand with Bohm's nonlocal theory.
- **Cost/uncertainty:** Whether nature or a future theory satisfies the locality and setting-distribution assumptions remains open.
- **Next question:** What quantitative restriction follows for correlations?

##### `CT-BELL-02`: `CS-BELL-02` → `CS-BELL-03` — Derive constraints across settings

- **Input model:** Bell's local \(\pm1\) spin responses, singlet perfect anticorrelation, and a distribution of shared hidden states.
- **Pressure:** Any one setting pair can be fitted; discrimination requires linked predictions across several settings.
- **Protected structure:** Ordinary probability and a common hidden-state distribution independent of the chosen settings.
- **Hidden assumption:** Each setting pair may be assigned an unrelated ensemble while still claiming one local completion.
- **Operation / change type:** `constraint_change` — Require one model to account jointly for correlations at alternative settings.
- **Output model:** An inequality-ready relation among averaged correlations.
- **Local justification:** Bell's original proof uses local response functions and a shared distribution to constrain correlations.
- **Cost/uncertainty:** Setting independence is an auxiliary premise; its empirical implementation later needs scrutiny.
- **Next question:** What bound does this imply?

##### `CT-BELL-03`: `CS-BELL-03` → `CS-BELL-04` — Turn locality into an inequality

- **Input model:** Correlations generated by one locally responding hidden-state ensemble.
- **Pressure:** An interpretive disagreement needs a result that whole model classes cannot evade by retuning parameters.
- **Protected structure:** Locality, probability, and Bell's specified spin-correlation setup.
- **Hidden assumption:** A local completion can match every quantum correlation if it is sufficiently elaborate.
- **Operation / change type:** `representation_shift` — Express Bell's 1964 locality assumption as an inequality on correlations.
- **Output model:** A mathematically testable inequality for the local model class.
- **Local justification:** Bell's original 1964 article derives \(1+P(b,c)\geq|P(a,b)-P(a,c)|\) after using perfect same-setting anticorrelation; the CHSH expression displayed below is a later reformulation that does not require that exact-correlation premise.
- **Cost/uncertainty:** The inequality is conditional on its premises; it is not a proof against all hidden-variable theories.
- **Next question:** Does the singlet-state quantum prediction obey the local bound?

##### `CT-BELL-04`: `CS-BELL-04` → `CS-BELL-05` — Compare with quantum spin correlations

- **Input model:** The 1964 local bound and quantum predictions for entangled spin pairs.
- **Pressure:** A bound without a competing prediction cannot discriminate theories.
- **Protected structure:** The same measurement directions and correlation definitions across models.
- **Hidden assumption:** Quantum and local-hidden-variable predictions differ only philosophically.
- **Operation / change type:** `coalescence` — Put the local and quantum correlation formulas on a common setting domain.
- **Output model:** A demonstrable setting choice where quantum correlations violate the local bound, plus a bound against arbitrarily close local approximation.
- **Local justification:** Bell's paper compares the singlet correlation with his inequality (eq. 15), then averages over narrow angular ranges and derives a finite approximation gap (eqs. 16–22, pp. 198–199).
- **Cost/uncertainty:** Quantum violation in a calculation is not yet an experimental result; apparatus assumptions require later design.
- **Next question:** Can a feasible experiment access the discriminating correlations?

##### `CT-BELL-05`: `CS-BELL-05` → `CS-BELL-06` — Separate theorem from measurement program

- **Input model:** A logical incompatibility between local completion and specified quantum correlations.
- **Pressure:** A mathematical separation does not by itself specify detector sampling, timing, and setting protocols for an empirical inference.
- **Protected structure:** Conditional mathematical theorem and operational no-signaling.
- **Hidden assumption:** The 1964 proof already settled every experimental and interpretive question.
- **Operation / change type:** `differentiation` — Keep theorem, later inequality engineering, experiments, and interpretation as separate layers.
- **Output model:** A testable research agenda without premature claims about signaling or one unique ontology.
- **Local justification:** Bell's 1964 conclusion already points to changing settings while particles are in flight (p. 199), but his proof is not a complete experimental protocol; CHSH's 1969 realizable-experiment proposal and later loophole-controlled tests are distinct extensions.
- **Cost/uncertainty:** No finite Bell test proves every auxiliary causal assumption metaphysically; loopholes must be specified and controlled.
- **Next question:** Which inequalities and trial designs make the theory contrast experimentally robust?

#### Formal consolidation

Bell's 1964 derivation starts with \(A(a,\lambda),B(b,\lambda)\in\{-1,+1\}\), a common distribution \(\rho(\lambda)\), and the singlet's perfect same-setting anticorrelation \(A(a,\lambda)=-B(a,\lambda)\) almost everywhere. Writing \(P(a,b)=\int d\lambda\,\rho(\lambda)A(a,\lambda)B(b,\lambda)\), his original bound is

$$
1+P(b,c)\geq|P(a,b)-P(a,c)|.
$$

Quantum mechanics instead gives \(P_{\rm QM}(a,b)=-a\cdot b\), which violates this bound for suitable directions. Bell also considered correlations averaged over narrow angular ranges: if their deviation from the averaged quantum correlation is at most \(\epsilon\), and the angular averaging changes the dot products by at most \(\delta\), his eq. (22) gives \(4(\epsilon+\delta)\geq\sqrt2-1\) for the specified directions. Thus a local-response model cannot approach the full quantum angular pattern arbitrarily closely; this is still a theoretical constraint, not a finite-sample experimental protocol. The CHSH four-setting expression below is a 1969-and-later experimental reformulation, not Bell's 1964 derivation. It does not require perfect same-setting anticorrelation, but still needs the stated locality, setting, and sampling assumptions.

For outcomes \(A(a,\lambda),B(b,\lambda)\in\{-1,+1\}\), CHSH combination:

$$
S=E(a,b)+E(a,b')+E(a',b)-E(a',b').
$$

For each hidden-variable value:

$$
A(a)[B(b)+B(b')]
+A(a')[B(b)-B(b')]
$$

has magnitude \(2\). Averaging yields:

$$
|S|\le2.
$$

Quantum mechanics permits:

$$
|S|\le2\sqrt2,
$$

and suitable entangled states reach \(2\sqrt2\). The experimental inference depends on explicit assumptions about settings, outcomes, and causal separation.

**Patterns demonstrated:**

- `P-01` — **Reframe the inherited problem:** Interpretation dispute reframed as a statistical test

- `P-02` — **Permit a new representation, ontology, or mechanism:** Nonclassical correlations accepted

- `P-03` — **Make the new structure generative:** Local assumptions generate an inequality

### Extrapolative generalization

Bell's theorem supplies a conditional mathematical contrast. Applying it to new settings or real apparatus is an additional empirical commitment, not an automatic corollary of having written an inequality.

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes a new test worthwhile, but local bounds and quantum predictions must use the same state, settings, and sampling assumptions. A measured violation counts against a declared local model class only after the relevant experimental loopholes have been bounded.

#### `EG-BELL-01` — Extend the 1964 contrast to unfit spin settings

- **Source domain:** Bell's 1964 EPR–Bohm spin-pair derivation and known quantum singlet correlation; these establish a conditional theorem, not an observed violation.
- **Target domain:** Additional measurement-direction combinations not used to illustrate the original inequality.
- **Novel consequence:** A single locally responding hidden-state ensemble must obey the linked bounds across the chosen settings, whereas quantum theory predicts specified angular correlations that can cross them.
- **Failure condition:** If well-calibrated spin-pair measurements in the specified state consistently satisfy the local bounds but disagree with the quantum angular pattern beyond uncertainty, the quantum extrapolation fails; a violation with credible loophole control disfavors the stated local class instead.

#### `EG-BELL-02` — Translate the contrast to photon experiments

- **Source domain:** The 1964 spin-based theorem and its conditional model-class exclusion.
- **Target domain:** Later optical polarization pairs and CHSH-style four-setting tests, developed after Bell's original paper.
- **Novel consequence:** Properly mapped entangled-photon correlations can violate a local bound while each wing's marginal statistics remain independent of the distant choice.
- **Failure condition:** With source state, detection selection, timing, setting independence, and statistical protocol specified, a reproducible failure of the quantum correlation/marginal predictions rejects that implementation; without such controls, a local-bound violation is not automatically decisive.

**Patterns demonstrated:**

- `P-03` — **Generate consequences rather than merely redescribe inputs:** Local assumptions generate an inequality

- `P-04` — **Unify previously separated domains or phenomena:** Foundations and laboratory correlations unified

### Retention, predictions, and discriminating tests

The reconstruction preserves rather than erases successful predecessor content: Relativistic no-signaling retained. Its quantitative or otherwise discriminating test strategy is: Inequality violation makes assumptions experimentally vulnerable. The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.

**Patterns demonstrated:**

- `P-05` — **Recover valid predecessor structure or limiting behavior:** Relativistic no-signaling retained

- `P-06` — **Prioritize discriminating tests:** Inequality violation makes assumptions experimentally vulnerable

### Discovery-pattern synthesis

Pattern IDs are ordered by their typical first role in the reconstructed discovery process, not by an arbitrary vocabulary-list order. The canonical definition is identical across the corpus; the final three columns record how that fixed operation appears and where its supporting evidence is located in this case.

| Pattern ID | Canonical definition | Process role in this case | Case-specific instantiation | Evidence location(s) |
|---|---|---|---|---|
| `P-01` | Reframe the inherited question after diagnosing interpolation failure | Interpolation diagnosis → transformative reframing | Interpretation dispute reframed as a statistical test | [Interpolation limits](#what-interpolation-could-and-could-not-achieve); [transformative move](#transformative-move) |
| `P-02` | Admit a new representation, ontology, or mechanism form | Transformative move | Nonclassical correlations accepted | [Transformative move](#transformative-move) |
| `P-03` | Upgrade empirical regularities into a generative mechanism | Transformative construction → generative deduction | Local assumptions generate an inequality | [Transformative move](#transformative-move); [extrapolative generalization](#extrapolative-generalization) |
| `P-04` | Unify previously separated domains | Extrapolative unification | Foundations and laboratory correlations unified | [Extrapolative generalization](#extrapolative-generalization) |
| `P-05` | Retain valid structures of predecessor theories | Retention and limiting recovery | Relativistic no-signaling retained | [Retention and limiting recovery](#retention-predictions-and-discriminating-tests); [limitations](#limitations-and-retained-status) |
| `P-06` | Prioritize quantitative testability | Prediction → discrimination → validation | Inequality violation makes assumptions experimentally vulnerable | [Predictions](#historically-novel-predictions-and-deductions); [validation](#validation-and-explanatory-gains) |
## Discovery node and consolidated formalism

This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.

| Field | Canonical content |
|---|---|
| Node | `D-BELL-THEOREM-1964` |
| Focal date | November 1964 publication |
| Central claim | Bell's 1964 local-response model obeys a correlation inequality incompatible with quantum singlet predictions and cannot approximate the full quantum angular pattern arbitrarily closely. Later local-factorization formulations and Bell tests broaden and confirm the contrast. Violations do not by themselves permit controllable superluminal signaling. |
| Domain | Quantum correlations, locality, and hidden-variable constraints |
| Epistemic status | Bell-inequality violations are established; interpretation of quantum ontology remains open |
| Generative role | Local assumptions generate an inequality |
| Retained structure | Relativistic no-signaling retained |

Key formal relations, consolidated from the derivation above:

$$
1+P(b,c)\geq|P(a,b)-P(a,c)|.
$$

$$
S=E(a,b)+E(a,b')+E(a',b)-E(a',b').
$$

$$
|S|\le2.
$$

The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.

## Historically novel predictions and deductions

### `NP-BELL-01` — Locality bound conflicts with quantum spin correlations

- **Classification:** `NOVEL-THEORETICAL-CONSTRAINT`.
- **Prediction/derivation date:** Bell's 1964 paper.
- **Derivation provenance:** In Bell's 1964 proof, singlet perfect anticorrelation plus the EPR locality premise motivates predetermined local \(\pm1\) response functions. Their common setting-independent hidden-state distribution then implies his original three-direction correlation inequality; the quantum singlet prediction violates it for suitable settings. Bell's subsequent angular-averaging argument (eqs. 16–22) also excludes arbitrarily close approximation of the full quantum angular pattern by that local class.
- **Independence:** The bound is not fitted to later Bell-test data. The CHSH expression below is a separate 1969 reformulation, not the original proof.
- **Observable discriminator:** Correlations measured at multiple independently chosen directions can favor the quantum prediction over the specified local-hidden-variable class.
- **Outcome:** Later experiments, with progressively stronger loophole control, found violations consistent with quantum mechanics; this is subsequent validation, not a 1964 observation.

## Validation and explanatory gains

- Photon and matter experiments violate CHSH-type inequalities.
- Fast random setting choices and spacelike separation address locality loopholes.
- High-efficiency detection addresses fair-sampling loopholes.
- 2015 experiments closed major loopholes simultaneously under standard assumptions.
- Bell correlations enable device-independent randomness and cryptographic protocols.

## Limitations and retained status

Bell tests cannot establish a unique interpretation. “Local realism” is often too vague; factorization assumptions should be stated precisely. No-signaling probabilities remain compatible with relativity operationally, although reconciling ontology and relativistic causality is interpretively nontrivial.

## Extended historical investigation

### From EPR's argument to Bell's discriminating theorem

Einstein, Podolsky, and Rosen argued in 1935 that quantum mechanics was incomplete if one could predict a distant system's result with certainty without disturbing it and if each such predictable quantity corresponded to an element of reality. The debate was long treated as interpretive because alternative “hidden variables” might seemingly restore a more classical description. Bohm's 1952 theory demonstrated that hidden-variable theories were possible, but it was explicitly nonlocal. Bell asked the sharper question: can any theory satisfying an appropriate locality condition reproduce all quantum correlations?

Bell's 1964 paper first uses perfect anticorrelation and locality to motivate predetermined local responses \(A(a,\lambda)\) and \(B(b,\lambda)\). Its own inequality appears in **Formal consolidation** above. In the broader modern stochastic formulation, for settings \(a,b\), outcomes \(A,B\), and a proposed complete state \(\lambda\), local causal factorization is commonly written

$$
p(A,B|a,b,\lambda)
=p(A|a,\lambda)\,p(B|b,\lambda).
$$

Together with measurement-setting independence,

$$
\rho(\lambda|a,b)=\rho(\lambda),
$$

and ordinary probability theory, this yields Bell-type inequalities. Deterministic response functions are not the essential restriction in that broader formulation; stochastic locally factorized models obey corresponding bounds after their local randomness is absorbed into an enlarged \(\lambda\). This is a modern statement of the model class, not Bell's explicit 1964 starting notation.

### CHSH inference in detail

For each \(\lambda\), define

$$
s(\lambda)=A(a,\lambda)B(b,\lambda)
+A(a,\lambda)B(b',\lambda)
+A(a',\lambda)B(b,\lambda)
-A(a',\lambda)B(b',\lambda).
$$

Factoring gives

$$
s=A(a)[B(b)+B(b')]
+A(a')[B(b)-B(b')].
$$

Since each \(B\) is \(\pm1\), one bracket is zero and the other is \(\pm2\); therefore \(|s|=2\), and averaging gives \(|S|\le2\). For a spin singlet, quantum mechanics predicts

$$
E(\mathbf a,\mathbf b)=-\mathbf a\cdot\mathbf b.
$$

Four suitable coplanar directions yield \(2\sqrt2\), the Tsirelson bound. The logical contrast is between two families of probabilistic predictions, not between a vague “common sense” and mystery.

### What experiments must close

Real tests estimate correlations from finite trials. Inefficient detection can make the detected sample unrepresentative—the detection loophole. If setting choice or outcome events are not suitably spacelike separated, subluminal communication could coordinate them—the locality loophole. If settings are correlated with \(\lambda\), measurement independence fails. Modern tests use high-efficiency entangled systems, rapid random setting selection, spacelike separation, time-tagging rules fixed against post-selection, and preregistered or carefully bounded statistical analyses.

Aspect's experiments improved time-varying settings; later photon and matter experiments increased efficiency and distance. In 2015 several experiments simultaneously closed the major detection and locality loopholes under standard assumptions. “Loophole-free” does not mean assumption-free: all empirical inference retains assumptions about randomization, causal structure, apparatus independence, and statistical modeling.

### Interpretation without overstatement

Bell violations exclude locally causal models satisfying the stated auxiliary assumptions. They do not prove that human observation creates reality, exclude all hidden variables, or permit faster-than-light communication. Bohmian mechanics evades the bound through nonlocality; Everett-type, relational, retrocausal, and other approaches locate the failed premise differently. Bell's theorem does not choose among them by itself.

Operational no-signaling requires

$$
\sum_B p(A,B|a,b)
=p(A|a)
$$

to be independent of distant setting \(b\). Quantum theory satisfies this even while violating Bell inequalities. Correlation strength beyond local causality is therefore distinct from a controllable signaling channel.

### Evidence ledger

| Layer | Claim tested | Qualification |
|---|---|---|
| Bell theorem | Local factorization imposes bounds | Mathematical result conditional on premises |
| Early optical tests | Quantum-like violations occur | Required auxiliary sampling assumptions |
| Switching experiments | Reduced communication explanations | Finite switching and separation details matter |
| High-efficiency tests | Reduced detection selection | Background and trial definitions still modeled |
| 2015-era combined tests | Major loopholes closed together | Measurement independence is bounded, not metaphysically proven |
| Device-independent protocols | Violation certifies randomness/entanglement with minimal device trust | Requires isolation and quantified adversarial assumptions |

Bell transformed a foundations dispute into experimental science by finding an inequality where entire model classes, rather than one parameter value, were vulnerable. This is the key transferable discovery pattern.

## AI-oriented inference notes

- Expand “local realism” into explicit factorization, setting-independence, outcome definitions, and causal assumptions.
- Separate the theorem node from every experimental implementation and its loophole profile.
- Record finite-statistics confidence and trial-selection rules with the claimed violation.
- Preserve operational no-signaling even when ontological locality is disputed.
- Never map Bell violation directly to one privileged interpretation; store interpretation-dependent escape routes.

## Additional quantitative and epistemic notes

### Further causal distinctions

Bell factorization can be decomposed into parameter independence and outcome independence, but different interpretations violate or reinterpret these conditions differently. “Realism” is not one algebraic premise in the CHSH derivation, and counterfactual language must be tied to the existence of joint response functions or probabilities.

Experimental settings are never proven metaphysically free. Cosmic Bell tests push possible common-cause coordination farther into the past by using astronomical photons to choose settings; they constrain a class of conspiratorial correlations rather than abolish the measurement-independence assumption.

Quantum correlations also obey the Tsirelson rather than the algebraic CHSH maximum of \(4\). Hypothetical no-signaling correlations can exceed \(2\sqrt2\), showing that no-signaling alone does not derive quantum theory. This leaves a productive reconstruction question: which information-theoretic or physical principles select the quantum correlation set between local and general no-signaling bounds?

## Edge list

```text
A-EPR --motivates--> R-LOCAL-HIDDEN-VARIABLE-COMPLETION
A-ENTANGLEMENT --contributes-to--> D-BELL-THEOREM-1964
CS-BELL-01 --revised-by--> CT-BELL-01
CT-BELL-01 --produces--> CS-BELL-02
CS-BELL-02 --revised-by--> CT-BELL-02
CT-BELL-02 --produces--> CS-BELL-03
CS-BELL-03 --revised-by--> CT-BELL-03
CT-BELL-03 --produces--> CS-BELL-04
CS-BELL-04 --revised-by--> CT-BELL-04
CT-BELL-04 --produces--> CS-BELL-05
CS-BELL-05 --revised-by--> CT-BELL-05
CT-BELL-05 --produces--> CS-BELL-06
CS-BELL-06 --hands-off-to--> EG-BELL-01
CS-BELL-06 --hands-off-to--> EG-BELL-02
LOCAL-FACTORIZATION --implies--> CHSH-BOUND-TWO
QUANTUM-MECHANICS --predicts--> CHSH-UP-TO-TWO-SQRT-TWO
V-BELL-EXPERIMENTS --violate--> CHSH-BOUND-TWO
V-BELL-EXPERIMENTS --exclude--> R-LOCAL-HIDDEN-VARIABLE-COMPLETION
NO-SIGNALING --compatible-with--> QUANTUM-CORRELATIONS
D-BELL-THEOREM-1964 --instantiates--> P-01
```

## Sources

- Stanford Encyclopedia of Philosophy, [“Bell's Theorem,” including assumptions and hidden-variable alternatives](https://plato.stanford.edu/entries/bell-theorem/).
- John S. Bell, [“On the Einstein Podolsky Rosen Paradox”](https://cds.cern.ch/record/111654/files/vol1p195-200_001.pdf), *Physics* 1 (1964), 195–200; the complete six-page facsimile checked for the perfect-anticorrelation premise, local response functions, original inequality (eq. 15), finite approximation gap (eqs. 16–22), and his proposal to change settings during particle flight (p. 199).
- John F. Clauser, Michael A. Horne, Abner Shimony, and Richard A. Holt, [“Proposed Experiment to Test Local Hidden-Variable Theories”](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.23.880), *Physical Review Letters* 23 (1969), 880–884.
- Bas Hensen et al., [“Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres”](https://www.nature.com/articles/nature15759), *Nature* 526 (2015), 682–686.
- Lynden K. Shalm et al., [“Strong Loophole-Free Test of Local Realism”](https://www.nist.gov/publications/strong-loophole-free-test-local-realism), *Physical Review Letters* 115 (2015), 250402.
- Nobel Prize, [The 2022 Physics Prize](https://www.nobelprize.org/prizes/physics/2022/summary/).
