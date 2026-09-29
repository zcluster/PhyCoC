# CoC 试点审计与分批迁移决定

> 本文保留试点阶段的审计与当时的迁移决定，文中的“暂不批量转换”和早期来源条数是历史快照。当前 41 个案例均已按统一 CoC/EG 结构扩展并通过自动结构校验；最新内部审查状态与未完成的独立审批见[全库 QA 报告](../fundamental_physics_discoveries/QA_REPORT.md)。

审计对象：[经典统计力学](../fundamental_physics_discoveries/15_classical_statistical_mechanics.md)、[特殊相对论](../fundamental_physics_discoveries/17_special_relativity.md)、[量子力学](../fundamental_physics_discoveries/24_quantum_mechanics.md)。审计依据是当前案例文字、edge list、[模板指南](../fundamental_physics_discoveries/DISCOVERY_TEMPLATE_GUIDE_ZH.md)和 [corpus 校验器](../fundamental_physics_discoveries/validate_corpus.mjs)。本轮是模板与评估协议的试运行，没有待评模型输出，也没有独立历史学家或物理学家的盲审。

## 已验证的结构

| 案例 | `CS-*` | `CT-*` | 图结构 | 模板审计结果 |
|---|---:|---:|---|---|
| 经典统计力学 | 7 | 6 | 一条展示路径 | 字段与有向边通过；跨 1859–1902 的资源必须按阶段冻结 |
| 特殊相对论 | 8 | 7 | 一条展示路径 | 字段与有向边通过；以太解释保留在文字中，尚无独立竞争节点 |
| 量子力学 | 8 | 7 | 矩阵路线与波动路线从共同问题处分支，再汇合 | 字段与有向边通过；按 1924、1925、1926、1927 分阶段评估才有意义 |

三例共 23 个状态、20 条转换。`Branch status` 出现 20 次，其中 19 次 `selected`、1 次 `merged`；这证明“有分支字段”不等于“已经编码竞争搜索图”。校验器现在除核对 CS/CT 是否出现在 edge list，还要求每条转换的每个来源状态都有入边、目标状态有出边。全库结构校验通过，但它不能判断历史事实、数学或概念跃迁是否正确。

## 发现并修正的问题

原统计力学 `Starting ingredients` 把 `A-ENSEMBLES` 列为整个发现的“发现前输入”，同时后段 `CT-CSM-05/06` 又把系综与配分函数当作待构造结果。对于一个横跨 Maxwell、Boltzmann、Gibbs 的案例，这是实际的时间泄漏。现已把输入改为按 Maxwell 前、Boltzmann 阶段、Gibbs 前三个阶段列出；`A-ENSEMBLES` 明确属于晚期输出。对应的评估输入只冻结在第一个局部转折之前。

另两个仍需保留为风险，而非自动判为历史错误：

1. 三例 `Local justification` 通常给出人名、年代或资源，却缺少逐条来源锚点。每例末尾虽有参考资料（统计力学 3 条、特殊相对论 4 条、量子力学 3 条），还不足以让机器自动证明每条 CT 在当时可用。正式训练标注前需要逐条核对原始文献或可靠学术史。
2. 特殊相对论中的 Lorentz 以太方案、统计力学中的无原子 energetics 等合理竞争者主要留在文字和 `R-*` 记录，不在 CEG 中有独立 `CS/CT` 分支。若未来要评估 AI 搜索与淘汰候选的能力，这些主要竞争者需要显式图节点；若只评估一条可审计的解释路径，现有形式足够。

## 评分方法试运行得到的结论

[统一评分表](SCORING_ZH.md)可以在三个题目中共用六项：定位问题、局部操作、保留成功、竞争分支、下一判别、时间纪律。案例专属的判据则不同：SR 要检查 Maxwell/低速极限和以太欠定性；CSM 要检查守恒与群体描述的条件；QM 要检查谱线、对应原则和 1924 年尚未得到的形式。三份[封存输入](README_ZH.md#范围与输入边界)都只考一个局部转折，因此不会把跨几十年的成果当成一次推理。

本轮没有执行 `direct`、`linear`、`graph` 三条件的真实模型对比，也没有盲评者一致性数据。因而**只能说模板和评分任务已具备可执行形式，不能说 CoC 已提高模型发现能力**。已知历史题会受到预训练记忆影响；名称遮蔽仍不能消除这种影响。要判断迁移能力，还需在封存运行后加入一个历史上不存在、规则可计算的新物理世界。

## 迁移决定

首轮决定暂不批量转换余下 38 例，而是选择三种不同结构作第二批压力测试：

| 候选 | 要检验的模板边界 | 迁移前必须完成 |
|---|---|---|
| `13_maxwell_electromagnetic_field_theory.md` | 多条实验与数学线索的汇合 | 区分当时可用的场概念、位移电流与后来的电磁波验证 |
| `19_general_relativity.md` | 多年分阶段的概念与几何转折 | 分开等效原则、数学工具、场方程和后续检验的时点 |
| `36_wilsonian_renormalization_group.md` | 尺度变化与表征重组 | 明确粗粒化的来源域、有效描述和需保留的低能结果 |

迁移门槛：先给每个候选确定一个可冻结的局部问题和来源；再列出 `CS/CT` 及主要竞争者；最后检查有向边、局部正当性和 `Formal consolidation` 不重复。三例中的任何一例若必须硬凑 5–9 条转换，应调整该实现约束，不应为了过校验制造步骤。完成真实模型三条件对比及盲评后，再决定是否扩大到整库。

## 第二批压力测试结果

上述三例现已迁移，并注册进结构校验器。它们是**案例与模板压力测试**，不是新增的模型能力评估题；封存输入和评分对照仍只有首批三题。

| 案例 | `CS-*` | `CT-*` | `EG-*` | 压力测试所暴露的关键边界 |
|---|---:|---:|---:|---|
| Maxwell 场论 | 7 | 6 | 2 | 电荷连续性约束与电磁波、光的识别分开；机械以太保留为当时未排除分支；Hertz 验证不进入输入。 |
| 广义相对论 | 8 | 7 | 2 | 1907 等效洞见、1912–13 几何工具、1913 *Entwurf* 暂定方程与 1915 替换分阶段；Mercury 是已知约束，1917 的 `Λ` 不归入 1915 方程。 |
| Wilson RG | 7 | 6 | 2 | 粗粒化、重标度、固定点、特征方向各有不同概念职责；现象学 scaling 保留为描述性竞争分支；后来的 ε 展开不作输入。 |

第二批合计 22 个状态、19 条转换、6 个外推记录，三例均保留可见竞争分支。六例总计 45 个状态、39 条转换；这表明图结构可以覆盖汇合、分阶段和尺度流三类新场景，但**不能证明**每个局部正当性或历史时点已经通过逐条原始文献审查。尤其 Maxwell 的机械图像与场方程、GR 的 Entwurf 迂回、Wilson 的概念与技术来源仍值得领域专家复核。

下一步不应直接把剩余 35 例机械批量转换。第二批的三个局部冻结题现已写入 [评估包](README_ZH.md)，19 条转换的来源强弱与待查之处见 [第二批来源审计](SECOND_BATCH_SOURCE_AUDIT_ZH.md)。该审计仍为 `v0`，不是逐页核定；先补齐标为“待复核”的原文对应，再运行首批三题的 `direct` / `linear` / `graph` 对照与独立盲评。如果图式条件没有带来可复现的局部推理收益，先改模板和评分，而不是扩大语料。

## 文献核对入口（评估者材料）

- SR 输入与目标的历史边界：[Lorentz 1904 原文](https://pages.jh.edu/rrynasi1/PhysicalPrinciples/literature/Lorentz1904ElectromagneticPhenomenaInASystemMovingWithAnyVelocitySmallerThanThatOfLight.pdf)；[Einstein 1905 原文译本](https://einsteinpapers.press.princeton.edu/vol2-trans/154)。后者只供评估者核对目标，不进入输入包。
- CSM 阶段边界：[Maxwell 1860 原论文](https://doi.org/10.1080/14786446008642818)；[Gibbs 1902 原书](https://archive.org/details/elementaryprinci00gibbrich)。两者都属于各自冻结时点之后的目标核对材料。
- QM 输入与目标边界：[Bohr 1913 原论文](https://www.gutenberg.org/ebooks/72787)、[de Broglie 1924 学位论文](https://www.ub.edu/hcub/hfq/sites/default/files/De_Broglie_1924_These.pdf)；[Heisenberg 1925 原论文书目](https://cds.cern.ch/record/439964/)、[Schrödinger 1926 原论文](https://doi.org/10.1002/andp.19263840404)。1925 年及以后的材料只供评估者核对目标。
