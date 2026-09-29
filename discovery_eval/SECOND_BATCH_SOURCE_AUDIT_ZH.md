# 第二批 CoC：来源与冻结时点审计（v0）

范围是 [Maxwell](../fundamental_physics_discoveries/13_maxwell_electromagnetic_field_theory.md)、[广义相对论](../fundamental_physics_discoveries/19_general_relativity.md)、[Wilson RG](../fundamental_physics_discoveries/36_wilsonian_renormalization_group.md) 的 19 条 `CT-*`。这里核对的是**公开材料是否允许该局部转折**，不是断言历史人物按表中的顺序思考。`直接`指所引原文或论文摘要明确陈述有关机制/结果；`背景`指当时有相应资源但表中的桥接是现代重构；`待复核`指目前只能确认出版时点或概要，不能凭它证明细节。

## Maxwell：1861–65

核对入口：[Faraday 的 1831 论文档案](https://makingscience.royalsociety.org/items/pt_20_4/paper-experimental-researches-in-electricity-by-m-michael-faraday)、[Maxwell 1862 Part III](https://doi.org/10.1080/14786446208643207)、[1865 场论文原版书目](https://doi.org/10.1098/rstl.1865.0008)及其 [Part VI 文字转录](https://en.wikisource.org/wiki/A_Dynamical_Theory_of_the_Electromagnetic_Field/Part_VI)。1862 Part III 的发表时间为 **1862 年 1 月**，不能放进 [MAX-1861 冻结题](inputs/MAX_1861.md) 的输入。

| 转换 | 来源核对与认识论状态 |
|---|---|
| `CT-MAX-01` | Faraday 的空间化线索早于 Maxwell；“场是独立局部状态”是后来的概括，非原文术语。**背景**。 |
| `CT-MAX-02` | Faraday 诱导、Ampère 电流磁效应和 Maxwell 1861 机械模型支持联合研究；表述成一组现代耦合方程会后见。**背景**。 |
| `CT-MAX-03` | 1862 Part III 直接把弹性介质中的 electrical displacement 接到 current-like 动力学；电容器跨曲面与连续性是现代一致性检验，**不是**已证明的 Maxwell 原始动机。已据此修正文案。**直接＋现代检验**。 |
| `CT-MAX-04` | 1865 Part VI §§92–95 在完美绝缘介质中令真实传导电流为零、保留变化的电位移，并由原式得到横向传播解及速度；案例的 SI curl-curl 方程是现代等价重写，不是逐字原式。**原文段落直接支持**。 |
| `CT-MAX-05` | Part VI §§96–97 把 Weber–Kohlrausch 的电磁单位比值同 Fizeau/Foucault 光速测量比较，进而提出电磁光学身份；速度符合不是逻辑证明。**原文段落直接支持**。 |
| `CT-MAX-06` | 1861–62 的机械涡旋与介质模型确属真实构造资源；它在 1865 年不应被写成已因后来的以太漂移实验被否定。**直接资源、分支状态为重构**。 |

**关键修正：**原 CoC 中 `CT-MAX-03` 容易把现代 continuity/capacitor 教学推导误当发现史。正文现明确区分 1862 机械路径与后来可用的数学约束。MAX-1861 题允许现代曲面检验，但显式标注其身份。

## 广义相对论：1907–15

核对入口：[瑞士国家图书馆所藏 Einstein 1907 论文档案](https://www.helveticarchives.ch/detail.aspx?ID=1077763)、[Zurich 笔记 14L/19L/21R/22R 图像及 Norton 注释](https://sites.pitt.edu/~jdnorton/Goodies/Zurich_Notebook/)、[Einstein–Grossmann 1913 *Entwurf* 档案](https://zenodo.org/records/7092832)、[Einstein Papers Project 的 1915 时间说明](https://www.einstein.caltech.edu/news/one-hundred-years-of-einsteins-field-equations-and-of-the-explanation-of-mercurys-perihelion)、[1915 年 11 月 25 日原论文的校对转录](https://de.wikisource.org/wiki/Die_Feldgleichungen_der_Gravitation)、Einstein Papers Project 学者 Tilman Sauer 的[史料研究](https://stanford.edu/~oas/SI/QM/papers/EinsteinsGRHistorical.pdf)及该项目关于[场方程与运动方程分立的说明](https://www.einstein.caltech.edu/news/the-genesis-of-einsteins-work-on-the-problem-of-motion-in-general-relativity)。史料研究可核对文献链，但不是原论文的替代品。

| 转换 | 来源核对与认识论状态 |
|---|---|
| `CT-GR-01` | 1907 等效洞见先于张量场方程；由质量相等到局部自由落体的表述有历史资源。**背景**。 |
| `CT-GR-02` | 局部消去与非均匀引力场的相对加速度可由当时物理判断；把它写成“曲率必然”的证明则过强。**背景/现代重构**。 |
| `CT-GR-03` | 1912 左右的旋转参考系分析与 Grossmann 对微分几何的引入，比“潮汐差异直接迫使曲率”更接近有文献支持的路径；1913 *Entwurf* 确认张量工具已入场。潮汐桥仍标为现代重构。**史料研究支持、原文细节待复核**。 |
| `CT-GR-04` | 标量或固定背景相对论引力曾是可考虑方案；其光学结果不能用 1919 检验提前淘汰。**背景**。 |
| `CT-GR-05` | *Entwurf* 原版 pp. 6–7 给出度规和质点运动，p. 11 另提出寻找引力场方程的任务；1915 年 Einstein 仍把一般粒子运动方程作为分立假设，不能声称已从场方程普遍导出。无压尘埃的特例见 [Einstein Papers Project《文集》第 15 卷导言 p. xlviii](https://assets.press.princeton.edu/chapters/i11327.pdf#page=10)；其原文计算尚未独立逐式核对。**原版页码直接支持两个支柱；尘埃特例依赖编辑性史料说明**。 |
| `CT-GR-06` | Zurich 笔记 14L 考察曲率候选，19L 在附加坐标条件下取得 Newton 形式，21R 的静态特殊情形却引出疑虑，22R 再试受限候选；所以“从未取得 Newton 极限”是错误压缩。1913 *Entwurf* 原版 p. 12 明言放弃对任意变换协变的场方程，p. 17 给出其暂定场方程。笔记图像支持局部痕迹，但因果解释仍有史学争议。**原手稿摘页＋*Entwurf* 原版页码；非完整逐页审定**。 |
| `CT-GR-07` | 1915 年 Levi-Civita 对 *Entwurf* 论证的批评、旋转坐标检验和 Mercury 问题促成重审，这一因果链由史料研究支持。11 月 25 日原文开头明确说：新加入的物质能量张量 trace 项不改变用来计算 Mercury 的真空方程。已知残差是回溯检验，`Λ` 属 1917。**最终一步有原文锚点；早期因果仍靠史料研究**。 |

**边界：**[GR-1911 冻结题](inputs/GR_1911.md)只考从局部等效、旋转参考系与残留相对加速度走向新的表示选择；不要求 1915 方程。`CT-GR-06/07` 已分开 1913 的暂定选择与 1915 的替换，避免把“守恒＋协变＋Newton 极限”写成一次无阻力的线性推导。

## Wilson RG：1966–71

核对入口：[Kadanoff 1966 原论文摘要](https://doi.org/10.1103/PhysicsPhysiqueFizika.2.263)、[1967 临界现象综述摘要](https://doi.org/10.1103/RevModPhys.39.395)、[Wilson 1971 I](https://doi.org/10.1103/PhysRevB.4.3174)、[Wilson 1971 II](https://doi.org/10.1103/PhysRevB.4.3184)。APS 页面显示两篇 Wilson 论文发表于 **1971 年 11 月 1 日**、均收到于 **1971 年 6 月 2 日**；[WRG-1968 冻结题](inputs/WRG_1968.md)不使用其结果。

| 转换 | 来源核对与认识论状态 |
|---|---|
| `CT-WRG-01` | 1966 Kadanoff 将格点分块并以块磁化为集体变量；1967 综述区分 mean-field 与 scaling 的作用及证据限度。**直接摘要**。 |
| `CT-WRG-02` | Wilson II 原文 pp. 3184–3185 明确逐批积分不同动量尺度的变量，留下有效相互作用。**原文直接支持**。 |
| `CT-WRG-03` | Wilson II 原文 pp. 3184–3185 明确递推有效 Landau–Ginzburg 型相互作用，并指出其有效参数不限于 Kadanoff 的两个；现代 cutoff-action 写法不等于其原文符号。**原文直接支持＋现代重写**。 |
| `CT-WRG-04` | Wilson I 摘要明确把 scaling 方程连到 RG，并指出趋向固定点的条件。**直接摘要**。 |
| `CT-WRG-05` | Wilson I 全文第 6–9 页实际讨论 additional coupling、一个 relevant/irrelevant 方向和多变量线性化；因此不只是摘要提示。当前案例把这些统一为 `y>0/<0/=0` 的谱分类仍属现代教学记法，尤其“marginal”类别不能由已核段落直接归给这两篇论文。**原文支持核心区分、统一符号为现代综合**。 |
| `CT-WRG-06` | 1967 综述称 scaling 有希望但实验尚未证实或否定；它是真实描述性分支，不应写成 Wilson 以前毫无解释力。**直接摘要**。 |

## 决定与未完成项

三份冻结题现可用作**题目设计试验**，但尚未进入正式模型比较：没有独立采样、原始输出、盲评者或污染判定。`CT-MAX-04/05` 与 `CT-GR-07` 的最终 trace 步骤已有原文段落锚点；Wilson II pp. 3184–3185 支持 `CT-WRG-02/03` 的逐批积分和有效相互作用递推，同时明确三维指数值只是定性估计。`CT-WRG-05` 的 relevant/irrelevant 核心区分已核 Wilson 1971 原文，但统一的 `y>0/<0/=0` 谱记法仍是现代综合。`CT-GR-06` 的 Zurich 笔记摘页已纠正一个过强表述，*Entwurf* 原版 pp. 6–7、11–12、17 已核其度规、运动、场方程及协变性边界；Zurich 笔记的完整原手稿与其因果解释、*Entwurf* 无压尘埃推导仍待复核。本审计仍为 `v0`，不能据此声称 19 条转折全部获得一手史料的强证明。
