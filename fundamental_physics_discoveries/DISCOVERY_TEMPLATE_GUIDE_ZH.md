# Discovery 结构化模板：写作与应用指南

本指南说明如何把一个科学发现整理为“问题诊断 → 概念演化 → 形式化 → 外推与检验”的案例，供人阅读，也供 DiscoverAI 提取训练与评估任务。

当前规范见 [corpus README](README.md)。本指南源于六个试点使用的结构（首批 CSM/SR/QM，第二批 Maxwell/GR/Wilson RG），并用于后续案例迁移。当前迁移名单见 [validator](validate_corpus.mjs) 与 [扩展审查](QA_REPORT.md#coc-expansion-review-in-progress-2026-09-29)；每例仍需单独确认历史证据、适用范围及验证器接入。

## 1. 模板的目的与适用范围

一个合格案例应展示：研究者面对哪些知识与困难，哪些旧假设可以修改，修改后保留什么，得到什么可计算结构，以及把它推广到新领域时承担什么风险。

适用于理论、机制、模型、表征或统一原则的发现。若案例主要是一次检测、测量或实验确认，不要为了套模板虚构概念革命。若发现包含多条并行路线，明确写出分支与汇合，不要强行改写成单一路线。

本模板记录的是可审查的理性重构。能够在事后写出连续路径，并不证明当时必然会找到它，也不证明 AI 已经学会独立发现。

## 2. 各部分的分工

| 部分 | 核心问题 | 应写什么 | 常见重复或越界 |
|---|---|---|---|
| Starting ingredients | 当时有哪些资源？ | 观测、工具、数学、既有理论与不确定性 | 把目标理论或后来的验证当作输入 |
| What interpolation could and could not achieve | 旧框架在哪里遇到困难？ | 有实际内容的修补方案、成功范围与未解决压力 | 把所有前驱理论一律写成错误 |
| Transformative move | 框架发生了什么改变？ | 一小段导语，容纳下面两个子节 | 在导语中提前重讲完整桥接过程 |
| Chain of Concepts | 概念状态怎样通过局部操作演化？ | `CS-*` 状态、`CT-*` 转换、理由、代价、分支与汇合 | 把最终答案拆成几句，伪装成搜索过程或内部思维实录 |
| Formal consolidation | 得到了什么可检验理论？ | 公设、定义、方程、推导、适用条件与不变量 | 再次叙述历史搜索，或把公设写成推论 |
| Extrapolative generalization | 新结构还可能适用于哪里？ | 来源域、目标域、新后果、失败条件 | 由形式漂亮直接推出普适正确 |
| Retention, predictions, and discriminating tests | 保留了什么，如何检验？ | 旧理论的有效极限、判别实验、独立证据 | 将后来的成功倒灌到构造阶段 |

标题层级保持如下。`Chain of Concepts` 和 `Formal consolidation` 是 `Transformative move` 内部的同级子节；外推是独立的三级节。文档展示的 CoC 是底层 **Concept Evolution Graph（CEG，概念演化图）** 中的一条或几条可审计路径，不意味着发现过程天然是单链。

```text
## Discovery-process reconstruction: interpolation, transformation, and extrapolation
  ### Starting ingredients
  ### What interpolation could and could not achieve
  ### Transformative move
    #### Chain of Concepts
      ##### Concept states
      ##### CT-CASE-01: CS-CASE-01 → CS-CASE-02 ...
      ##### CT-CASE-02: CS-CASE-02 → CS-CASE-03 ...
    #### Formal consolidation
  ### Extrapolative generalization
    #### EG-CASE-01 ...
  ### Retention, predictions, and discriminating tests
  ### Discovery-pattern synthesis
```

现有案例后面的 `Discovery node and consolidated formalism` 是理论摘要或索引。保留必要的核心公式即可，完整推导放在 `Formal consolidation`。`Historically novel predictions and deductions` 中的 `NP-*` 记录负责预测日期、作者、推导及后续结果；`EG-*` 负责说明为什么该预测涉及跨越证据边界，两者可以交叉引用。

这是一种讲解顺序，不意味着真实科学研究严格单向进行；外推失败可以促使研究者回到假设审查或模型修订。

案例特有的台账可以放在相关阶段内部作为四级子节；不要将它升级为与上述六个通用阶段并列的三级标题。

## 3. 编写之前：先固定历史边界

先确定焦点发现、日期或阶段，以及要解释的具体转变。分别列出：

1. **当时已知的输入**：观测、误差、工具、前驱理论及可获得的数学。
2. **本次候选结构**：将要提出的假设、表征或机制，不能预先作为已知事实使用。
3. **后来才有的检验**：留给预测、验证、局限性等章节。

跨越数十年的发现应分阶段注明资源可用时间。例如，1902 年的工具不能被写成 1859 年起点已有的知识。公众当时可以获得某项成果，也不等于某位科学家实际读过它；涉及个人影响的说法需要单独证据。

历史来源支持与现代合理性是两回事。在相关字段中给出来源链接、页码或章节；现代推导应明确标识，证据不足时保留不确定性。现有 schema 不强制逐条引用，但“当时可用”不能仅靠一句声明成立。

## 4. Chain of Concepts：状态节点与转换边

CoC 使用两类对象：

- `CS-*`（Concept State）是可以独立陈述、公开检查的概念状态，包括当时采用的表征、解释和仍然开放的问题。
- `CT-*`（Conceptual Transition）是从一个或多个状态到新状态的局部概念操作。

因此，线性片段写成：

```text
CS-01 → CT-01 → CS-02 → CT-02 → CS-03
```

分支和汇合则写成图。例如矩阵力学与波动力学可以从共同压力处分开，再由一个 `coalescence` 转换汇合。文档可以突出一条主链，但 edge list 必须保存实际分支。CoC 是可审计的公开重构，不是科学家或 AI 的隐藏思维实录。

每条 `CT-*` 的目标是让读者判断：在这个输入状态和当时证据下，为什么该候选变化值得尝试？

| 字段（保留英文拼写和顺序） | 写作要求 |
|---|---|
| Input model | 写出操作前实际接受的表征或解释，不只是理论名称；内容应与来源 `CS-*` 一致。 |
| Pressure | 写出具体矛盾、冗余、异常、表示困难或范围限制。 |
| Protected structure | 明确不能轻易牺牲的观测成功、守恒关系、数学约束或有效极限。 |
| Hidden assumption | 指出待审查的背景承诺；假设被暴露不等于已被证伪。 |
| Operation / change type | 先写受控类型，再写明确动作，例如重定义测量、修改状态表征、检查对称性或删去冗余变量。 |
| Output model | 说明操作后发生了什么变化、哪些部分仍未解决；内容应与目标 `CS-*` 一致。 |
| Local justification | 给出当时资源、推理依据与来源。区别逻辑推导、经验支持、约定和简洁性偏好。 |
| Cost/uncertainty | 写新假设、失去的直觉、经验等价的竞争者或未解决问题。 |
| Branch status | 可选；写 `selected`、`rejected`、`merged` 或 `deferred`，并说明仍然存活的竞争分支。 |
| Next question | 给出下一步真正需要处理的问题，使相邻记录或后继分支可以衔接。 |

`change type` 首先采用以下小型词表；动作正文仍需说明本案例中实际做了什么：

| 类型 | 含义 |
|---|---|
| `enrichment` | 增加信息，但不改变核心概念组织。 |
| `differentiation` | 将原先混合的概念、关系或角色拆开。 |
| `coalescence` | 合并原先分离的概念、表示或理论路线。 |
| `constraint_change` | 改变允许的取值、关系、边界或必须满足的条件。 |
| `reweighting` | 改变已有原则、证据或解释目标的优先级。 |
| `reinterpretation` | 保留形式结构，但改变其物理意义。 |
| `replacement` | 用新的概念组织替换旧结构。 |
| `generalization` | 扩展概念或形式的适用范围。 |
| `representation_shift` | 改变数学、图形、计算或状态表示。 |

检查图时，问：每条转换的来源状态是否足以支持操作？输出是否与目标状态一致？多个分支汇合时，合并操作是否真的保留了两边的共同结构？如果需要新的数据、数学或实验工具，必须在 `Local justification` 中明确引入。

例如，特殊相对论中的一个可接受 `reinterpretation` 是：“将时钟同步的操作定义赋予局部时间”。其代价字段应承认：这并不单独证明以太不存在。写成“局部时间可测，所以绝对时间已被实验否定”，就跨越了证据允许的范围。

当前试点允许每例 **5–9 条 CT**，状态和转换分别从 `01` 连续编号。这是实现约束，不是发现过程的自然定律；不要靠凑数或合并不相干操作满足它。若新案例确需其他规模，应记录理由并调整验证规则。

## 5. Formal consolidation：让结果可检查

本节把前面提出的候选结构写成可以推导或计算的理论。建议按以下顺序组织：

1. **公设与定义**：哪些是新增假设，量如何测量，符号代表什么。
2. **辅助条件**：对称性、边界条件、近似、统计假设等。
3. **方程与推导**：前提如何给出结论，避免省略决定性条件。
4. **不变量或生成结构**：由同一结构能够统一生成哪些结果。
5. **适用范围与有效极限**：成立条件，以及如何恢复前驱理论的成功范围。

不必重新解释“为什么研究者开始怀疑旧假设”，那属于 CoC。也不要因理论在数学上自洽，就把它尚未检验的应用域写成已经得到经验支持。

## 6. Extrapolative generalization：四个字段怎么写

每条 `EG-*` 表示一次有具体目标的外推。先在记录前用短段落说明推广动机，例如共同的对称性、相同的相互作用结构，或不需要新增参数的定量预测。

| 字段（保留英文拼写和顺序） | 写作要求 |
|---|---|
| Source domain | 指定起点的现象、条件、证据和时间范围。说明哪些部分是经验支持，哪些只是已建立的形式结构。 |
| Target domain | 写明新增的系统、尺度、过程或可观测量，明确它与来源域的差别。 |
| Novel consequence | 给出该目标域中未被单独拟合的可检验后果，尽可能包含关系式、趋势或数值。 |
| Failure condition | 写出在预先说明的条件下，什么可重复偏差会反对这次外推，并说明必要的误差和辅助假设检查。 |

好的失败条件既不能泛泛写“实验不符就失败”，也不能通过无限调整辅助假设使理论永远不败。能定量时，写出观测量、预测、容差或统计判据；无法定量时，应承认这是待完善的测试提案。

还要区别三件事：

- **域内失配**：在声明成立的条件下出现稳定偏差，构成对外推的反证压力。
- **事先声明的范围边界**：超出近似条件的失配不直接否定域内结果。
- **看到结果后才收缩范围**：属于模型修订，应记录，不能悄悄称为“早已知道的边界”。

`Novel consequence` 指相对于来源域构造或拟合的新后果，不自动意味着历史上首次提出、当时尚未被观察。涉及历史新颖性的强主张，应由带日期和来源的 `NP-*` 记录支持。

当前试点验证器允许每例 **1–4 条 EG**。对当时无法实施的判别实验应注明可行性限制；后来的测试只能出现在后续验证说明中。

## 7. 可复制的 Markdown 骨架

以下是发现过程部分的骨架，插入完整案例的相应位置。将 `CASE` 换成稳定的大写缩写，按需要复制 CS、CT 和 EG 记录。示例只展示一条转换，扩写后才能满足当前试点的数量约束。方括号中的内容全部需要替换。

保留英文标题、字段名称、粗体冒号格式和两段规则声明，以兼容现有解析器；正文可使用案例采用的语言。每个字段保持为一个非空列表项，补充公式或来源尽量写在同一字段内。

```markdown
## Discovery-process reconstruction: interpolation, transformation, and extrapolation

### Starting ingredients

[列出历史截止时点、阶段、可用观测、数学、工具和竞争解释；排除后来的验证。]

### What interpolation could and could not achieve

[旧框架尝试了什么修补？哪些成功必须保留？哪些压力仍然存在？]

### Transformative move

[用一小段说明表征发生了什么改变，并引出过程与形式两个子节。]

#### Chain of Concepts

**Epistemic status:** `MODERN-RATIONAL-RECONSTRUCTION`

**Trace rule:** Each transition must be locally justified by resources available at that step; later validation and canonical endpoint language are excluded from its justification. This is an auditable rational reconstruction, not a transcript of a scientist's or model's hidden reasoning and not a claim that the endpoint was inevitable. Concept states are graph nodes; transitions are typed, auditable edges.

##### Concept states

| State ID | Publicly inspectable conceptual state |
|---|---|
| `CS-CASE-01` | [操作前可以独立检查的概念状态] |
| `CS-CASE-02` | [操作后可以独立检查的概念状态] |

##### `CT-CASE-01`: `CS-CASE-01` → `CS-CASE-02` — [一次局部操作的标题]

- **Input model:** [操作前模型]
- **Pressure:** [具体压力]
- **Protected structure:** [必须保留的成功与约束]
- **Hidden assumption:** [被审查的假设]
- **Operation / change type:** `[受控类型]` — [执行的概念操作]
- **Output model:** [得到的候选模型]
- **Local justification:** [当时资源、推理依据、来源与阶段]
- **Cost/uncertainty:** [新增代价、仍然合理的竞争解释]
- **Branch status:** `[selected | rejected | merged | deferred]`；[仍然开放或被排除的分支]
- **Next question:** [下一步未解决问题]

<!-- 复制状态和转换，分别连续编号；当前试点为 5–9 条 CT。允许一个 CS 指向多个 CT，也允许一个 CT 合并多个 CS。 -->

#### Formal consolidation

[公设、定义、辅助条件、核心方程、必要推导、不变量及有效范围。]

### Extrapolative generalization

**Epistemic status:** `EXTRAPOLATIVE-COMMITMENT`

**Risk rule:** Success in the source domain makes an extension worth testing but does not license it automatically. Each record separates the supported domain, the proposed target, a novel consequence, and an explicit failure condition.

[简述为什么值得推广，以及所站的历史时间点。]

#### `EG-CASE-01` — [从什么领域推广到什么领域]

- **Source domain:** [已获得支持的来源范围及其条件]
- **Target domain:** [新系统、尺度、现象或过程]
- **Novel consequence:** [未单独拟合的新后果；必要时链接 NP 记录]
- **Failure condition:** [预先声明的适用条件下，什么结果构成失败]

<!-- 按需要增加 EG-CASE-02……；当前试点为 1–4 条。 -->

### Retention, predictions, and discriminating tests

[保留的旧理论极限、待检验预测、竞争模型的判别方式；明确区分后来验证。]

### Discovery-pattern synthesis

[按 corpus README 填写既有 P-01 至 P-06 五列表格；每个模式绑定实际证据。]
```

此骨架不是完整案例文件：还需要原 corpus 规定的 metadata、历史问题、time slices、knowledge assets、替代路径、理论摘要、预测、验证、局限、edge list、sources 等章节。不要删除已有合格内容；重构时优先移动、合并与交叉引用。

## 8. ID、图谱与验证器接入

使用不与既有案例冲突的缩写，例如 `CS-CASE-01`、`CT-CASE-01`、`EG-CASE-01`。CS、CT 与 EG 各自从 `01` 连续编号；转换标题中明确来源状态、目标状态，并保持反引号、箭头 `→` 及长破折号 `—`。

在原有 `## Edge list` 的 `text` 代码块中加入实际关系。例如，一个线性片段可以写成：

```text
A-CASE-OBSERVATION --pressures--> CS-CASE-01
CS-CASE-01 --revised-by--> CT-CASE-01
CT-CASE-01 --produces--> CS-CASE-02
CS-CASE-02 --revised-by--> CT-CASE-02
CT-CASE-02 --produces--> CS-CASE-03
CS-CASE-03 --hands-off-to--> EG-CASE-01
EG-CASE-01 --proposes--> NP-CASE-01
```

只引用文件中实际解释过的节点。`hands-off-to` 表示选定概念状态经形式化后提供外推起点，不表示外推被证明正确。如果后一个 EG 不依赖前一个，应从共同结构分别连边，不要仅按排版顺序制造因果关系。分支、回退和汇合也应按真实逻辑连接。

当前 [validator](validate_corpus.mjs) 的 `conceptChainCases` 映射注册了全部 41 个规范案例。给新案例加入章节后，必须在该映射注册文件名及其 CS/CT 前缀，才会执行 CoC/EG 专项检查；EG 前缀由 `CT-` 替换为 `EG-` 得到。验证器也会拒绝未注册的规范案例。

若只是升级已有 41 个案例中的一例，保持其既有 metadata 和 chronology。如果新增第 42 个案例，还涉及编号、chronology、README 目录以及 validator 的固定案例数等配置，不能只复制本骨架。

在项目根目录运行：

```sh
node history/build_case_pages.mjs
node history/build_interactive_graph.mjs
node history/fundamental_physics_discoveries/validate_corpus.mjs
```

当前专项检查主要检查标题顺序、认识论标签、规则声明、状态与转换连续编号、转换端点存在、字段名称与顺序，以及 CS/CT ID 是否出现在 edge list。它不会证明历史时间洁净、字段内容正确、数学推导成立或因果连边真实；这些需要人工审查。最后也应打开生成阅读页检查标题层级、公式、链接及图谱关系。

## 9. 完成前检查清单

- [ ] 起点的知识、工具与每个中间阶段都有明确时间边界。
- [ ] 每个 CS 都是可独立检查的概念状态；每个 CT 都包含实际操作，并明确来源与目标状态。
- [ ] `Operation / change type` 使用受控类型，同时说明案例特定动作。
- [ ] 并行路线、竞争解释和仍然欠定的问题得到保留。
- [ ] 局部正当性没有依赖最终答案或未来验证；来源足以支持历史表述。
- [ ] Formal consolidation 区分公设与推论，不重讲完整 bridge。
- [ ] EG 明确跨越了哪一条证据边界，并给出推广动机。
- [ ] 新后果可检验；“相对构造的新后果”与“历史首次预测”没有混用。
- [ ] 失败条件足够具体，范围边界和辅助假设在看到结果之前声明。
- [ ] CS/CT/EG ID、真实分支、汇合和依赖关系进入 edge list，并接入专项校验。
- [ ] 构建与 corpus validation 通过，生成页面可正常阅读。
- [ ] 将该文件用于评估时，输入包不会包含目标 CS、CT 输出、formal consolidation、EG 答案或后来验证。

完整案例适合作为文档或训练材料；评估包需要另外提取和封存。名称遮蔽只能减少显式提示，不能消除预训练模型对已知发现的记忆。结构校验通过与发现能力测试通过应分别报告。

## 10. 参考案例与再次应用的任务指令

- [特殊相对论](17_special_relativity.md#transformative-move)：概念解释变化与形式不变量。
- [经典统计力学](15_classical_statistical_mechanics.md#transformative-move)：从轨迹描述转向概率与系综。
- [量子力学](24_quantum_mechanics.md#transformative-move)：多种表征的构造、汇合与概率解释。

这些是写作参考，仍需逐案审查。可以把下面的指令连同目标案例交给后续任务：

> 请按照 DISCOVERY_TEMPLATE_GUIDE_ZH.md 重构指定 discovery。先核查历史起点、阶段和来源，将 Transformative move 组织为 Chain of Concepts 与 Formal consolidation；以 CS 节点记录可检查的概念状态，以带 `change type` 的 CT 边记录局部概念操作，并用四字段 EG 记录外推及其失败条件。CoC 只是 Concept Evolution Graph 中选出的解释路径；保留真实分支、汇合、成功极限和经验欠定性，避免把后来验证写成构造输入，也不要把重构称为模型的隐藏思维。检查重复内容，保留必要推导，更新 edge list、README 入口及该案例的验证器注册，重建阅读页与图谱。报告结构检查结果、未解决的历史证据问题，以及仍未实施的能力评估。
