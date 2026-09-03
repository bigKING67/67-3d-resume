---
schema: resume-ai-craft-content-plan-v1
status: seven-project-content-implemented-desktop-verified-mobile-runtime-unverified
last_verified: 2026-09-03
authority: PRODUCT.md + DESIGN.md + WORKS-STORYTELLING.md
---

# AI Craft 逐项目内容账本

本文记录七个 AI Craft 的事实来源、核心主张、媒体候选和采用状态。它不是正文，也不规定统一图片数量；每次修改对应详情前，应先复核项目现场，再更新本账本的事实 revision 和决定。

状态含义：

- `keep`：当前媒体和主张可以直接使用；
- `adapt`：事实有效，但标题、构图、文案、比例或文件名需要调整；
- `split`：一张图承担过多判断，需要拆开；
- `replace`：应使用更项目化的媒体替换；
- `reject`：不进入最终详情；
- `adopted`：已经写入正文并通过当前轮静态与真实页面验证；
- `pending`：尚未完成项目事实与素材审计。

## 现场来源

| Craft | 本机项目 | 2026-09-02 审计 revision | 当前事实入口 |
| --- | --- | --- | --- |
| `review-craft` | `codeproject/review-craft` | `cfd74b939890cf83f6116ace7146f7fbce3d467f` | README、Skill、contracts、deterministic runtime |
| `design-craft` | `codeproject/design-craft` | `2dd5ead37121f99a0ba80d92de488c5011158615` | README、Skill、references、route/eval contracts |
| `creative-craft` | `codeproject/creative-craft` | `7e21a3cf6c82955618c57349a76c3c3e930b3202` | README、Skill、fictional example、schemas |
| `browser67` | `codeproject/browser67` | `c64228e79688d88c27649c255084d2dcdc71188a` | README、AGENTS、runtime/tools/docs |
| `reverse-craft` | `codeproject/reverse-craft` | `2c289052b1aa564cddbaaca95cd6c5bd7acf1374` | README、Skill、host/evidence fixtures |
| `money-craft` | `codeproject/money-craft` | `a289671f013e8fb73d598046505a5630c02a7ba6` | README、Skill、research/report contracts |
| `commerce-growth-os` | `codeproject/commerce-growth-os` | `dcfa365f2a80a2f5abe2415f28ee3da89cd50d78` | README、Skill ownership and evaluation contracts |

Revision 只绑定本轮内容审计，不代表发布、远端或生产状态。对应仓库变化后必须重新核对。

## `review-craft` — 试点

### 一句话承诺

把审查从“意见数量”变成范围可核对、发现可复现、整改按比例、交付有授权边界的工程判断。

### 核心主张与媒体决定

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 什么任务该用它？ | 小而完整范围默认走 bounded review；全仓覆盖、确定性评分或高保障证据才显式进入 canonical review | 双路线对照板 | `adopted`：`review-craft-two-routes` |
| 它解决了什么根本问题？ | 严重度不能靠语气，覆盖不能靠“看过一些”，建议不能暗含执行授权 | 前后对照 | `adopted`：既有 value 事实适配为 `review-craft-opinion-to-finding` |
| 一次审查怎样形成结论？ | Scope、Inventory、Candidate、Validate、Finding、Delivery 各自有输入与输出 | 宽流程图 | `adopted`：既有流程适配为 `review-craft-review-lifecycle` |
| 一条 Finding 为什么成立？ | 位置绑定、范围/覆盖回执、验证记录、影响/确定性、严重度与整改优先级、处置边界 | Finding 解剖图 | `adopted`：`review-craft-finding-anatomy` |
| 哪些状态不是“修好了”？ | Review、授权实现、fix attempt、commit、push、Release 是不同证据层 | 正文与图注 | `text`：不再额外做第五张通用图 |

预计正文媒体为 4 个有效节拍；这是本次审计结果，不是其他项目的模板。

试点状态：4 个节拍已写入正文并完成非等权的编辑式层级重构。桌面真实页面已验证资源加载、可读性、图注和无横向溢出；800×1200 移动图源已逐张检查。2026-09-03 的 browser67 390px viewport override 未真实生效，因此本轮不把移动页面装配标为已验证。用户已确认视觉方向可继续扩展。

## `creative-craft` — 试点

### 一句话承诺

把模糊创意需求变成真正不同的创意机制、可执行的制作方向、受控迭代和可追溯取舍，而不是继续抽卡。

### 核心主张与媒体决定

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 为什么不是 Prompt 合集？ | 先固定目标、受众、张力、主张、媒介、证据和权利，再谈风格与生产 | 前后对照 | `adopted`：既有 value 事实适配为 `creative-craft-draw-to-direction` |
| 简单任务和大型项目是否一样重？ | Quick Craft 默认直接交付；Traceable Project 仅在多资产、审批、来源或交付治理需要时启用 | 双路线对照板 | `adopted`：`creative-craft-two-depths` |
| 什么叫真正不同的路线？ | 路线按创意机制而非颜色/镜头变化；内置虚构样例有 Motion Is Proof、The Quiet Lift、Before the Mirror Notices 三条路线 | 三路线编辑板 | `adopted`：`creative-craft-three-routes` |
| 系统怎样从输入走到学习？ | CRAFT = Context、Routes、Art direction、Fabrication、Testing；交付与学习贯穿证据边界 | 循环图 | `adopted`：`creative-craft-craft-loop` |
| 评分和“看过成品”是不是一回事？ | 虚构样例的 direction-stage evaluation 明确 `actual output observed: false`；方向评分不能证明生成质量 | 评估边界板 | `adopted`：`creative-craft-direction-evaluation` |

预计正文媒体为 5 个有效节拍。示例里的 `88.5` 是虚构项目的方向阶段结构化评分，不是广告表现、模型输出质量或真实经营结果；页面如使用必须在画面与图注同时说明。

试点状态：5 个节拍已写入正文并完成非等权的编辑式层级重构。桌面真实页面已验证五张媒体加载、`wide / inset` 布局、三路线主次关系和无横向溢出；800×1200 移动图源已逐张检查。2026-09-03 的 browser67 390px viewport override 未真实生效，因此移动页面装配仍为 `UNVERIFIED`。用户已确认视觉方向可继续扩展。

## `design-craft`

采用 5 个节拍：

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 谁拥有最终视觉解释权？ | live runtime、scoped rules、`PRODUCT.md`、`DESIGN.md` 高于通用参考 | 权威阶梯 | `adopted`：`design-craft-authority-order` |
| 不同任务是否都走完整流程？ | `micro / component / page / multi-page` 按影响提高证据承诺 | 递进台阶 | `adopted`：`design-craft-scope-routing` |
| 外部参考怎样不覆盖项目语言？ | mutable source 先成为 Reference Card / Pack，再提取判断 | 合同流 | `adopted`：`design-craft-reference-contract` |
| 为什么 build 通过仍不能签字？ | source、runtime、human visual decision 是三层证据 | 三层对照 | `adopted`：`design-craft-runtime-proof` |
| 怎样避免局部变漂亮、系统继续漂移？ | semantic family、state、viewport、input、theme 一起复核 | 覆盖矩阵 | `adopted`：`design-craft-system-review-matrix` |

旧 `value / diagram / evidence` 不再引用。5 个桌面与 5 个移动媒体已写入正文；桌面页面已核对 5 张媒体全部加载为 1600×900、图注与标题顺序正确、无详情或 figure 横向溢出，并完成代表性截图复核。移动图源已逐张检查，但 390px 真实页面装配仍按本文末尾的运行限制标记。

## `browser67`

采用 6 个节拍：

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 浏览器目标怎样唯一？ | `(browser_instance_id, tab_id)` 是精确目标身份；歧义 fail closed | 目标公式 | `adopted`：`browser67-target-identity` |
| 用户页签为何不能直接操作？ | managed、adopted、unmanaged 拥有不同权利与收尾语义 | 所有权三分图 | `adopted`：`browser67-tab-ownership` |
| 怎样保留登录态又不抢用户焦点？ | 同一 Profile 中使用 dedicated Agent Window 与 bounded focus lease | 双窗口关系 | `adopted`：`browser67-agent-window` |
| ready 或截图能否证明整项任务？ | ready、DOM、screenshot、file、lifecycle 是不同证据层 | 证据阶梯 | `adopted`：`browser67-evidence-layers` |
| JS reverse 怎样回到请求来源？ | script、frame、initiator、request、rebuild bundle 共用同一目标身份 | request lineage | `adopted`：`browser67-js-request-lineage` |
| 任务结束怎样证明没有越界？ | scoped finalize 关闭 owned、释放 adopted、保留普通用户页签 | 回执解剖 | `adopted`：`browser67-scoped-finalize` |

正文图全部是系统示意，不伪造 Browser UI、真实站点、账号或运行计数。browser67 仓库 2026-09-03 现场仍有独立 WIP，因此页面只使用已在审计 revision 中可复核的稳定合同，不把未提交变化写成发布事实。

## `reverse-craft`

采用 5 个节拍：

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 怎样证明研究的是同一个对象？ | source、hash、size、scope、mutation boundary 共同固定 artifact | Artifact Passport | `adopted`：`reverse-craft-artifact-passport` |
| 为什么不能用一个工具处理所有逆向？ | Router 按 binary、web/identity、mobile、forensics、cloud、embedded、CTI 分流 | 路线地图 | `adopted`：`reverse-craft-route-atlas` |
| 结论有多确定？ | `OBSERVED / INFERRED / HYPOTHESIZED / UNVERIFIED` 必须分层 | 确定性阶梯 | `adopted`：`reverse-craft-certainty-ladder` |
| “我跑过”如何变成“别人能重跑”？ | 固定原件、观察、可证伪假设、最小 harness、干净基线复现 | 复现链 | `adopted`：`reverse-craft-minimal-reproducer` |
| 最终 Case 怎样保持身份？ | manifest hash、event tail 与 seal receipt 一起封存逻辑状态 | 封存清单 | `adopted`：`reverse-craft-sealed-case` |

所有样本、文件名和缩写哈希均明确标为说明性 fixture；没有暴露真实高风险样本，也不把路线计划画成已执行结果。

## `money-craft`

采用 6 个节拍：

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 如何避免研究对象和报告期漂移？ | security identity、as-of、report end、currencies、share class 先成为合同 | 研究合同 | `adopted`：`money-craft-identity-as-of` |
| 哪类来源拥有最高事实地位？ | 官方披露高于结构化适配器、本地材料和 discovery summary | 来源阶梯 | `adopted`：`money-craft-source-hierarchy` |
| 财务数字怎样进入估值？ | 资产负债式、现金滚动、累计值推单季与来源口径先 reconciliation | 勾稽工作表 | `adopted`：`money-craft-financial-reconciliation` |
| 事实怎样成为可证伪观点？ | Observed、Inferred、Hypothesized 分层，thesis 保留反方证据和红线 | 判断分层 | `adopted`：`money-craft-fact-to-thesis` |
| 计划、采集与完成怎样区分？ | plan / init / collect / import / status / finalize 有独立边界 | 状态机 | `adopted`：`money-craft-research-states` |
| 展示稿怎样回到同一真源？ | audited Markdown 派生 HTML/PDF，不可变 revision 用 SHA-256 与 verifier 绑定 | 归档链 | `adopted`：`money-craft-immutable-report` |

没有在长期媒体里固化任何实时价格、目标价、收益率或证券结论；所有数值和身份字段均使用通用占位符。

## `commerce-growth-os`

采用 6 个节拍：

| 读者问题 | 项目事实 | 最佳表达 | 当前决定 |
| --- | --- | --- | --- |
| 什么情况才需要总中枢？ | bounded question 直接进入 specialist；真正跨域冲突才路由至 OS | 路由门 | `adopted`：`commerce-growth-os-routing-gate` |
| 多专业怎样避免互相覆盖？ | Commercial、Operations、Analytics、Growth、Brand、Content、Marketing 各有唯一 owner | 决策权地图 | `adopted`：`commerce-growth-os-ownership-map` |
| 经营动作为什么有先后？ | economics → assortment/price → channel jobs → operations → measurement | 约束台阶 | `adopted`：`commerce-growth-os-constraint-order` |
| 冲突怎样收敛？ | 不平均建议；先确定 owner、guardrail、action 与 review | 裁决图 | `adopted`：`commerce-growth-os-conflict-resolution` |
| 共同语言最终长什么样？ | 判断、事实/假设、机制、owner/metric、risk/window 进入同一记录 | Decision Memo | `adopted`：`commerce-growth-os-decision-memo` |
| 什么时候继续、什么时候停？ | 商业或增长投入需要成对定义 stop / scale 条件 | 双闸门 | `adopted`：`commerce-growth-os-stop-scale` |

画面只使用经营合同和通用冲突示例，没有虚构品牌、GMV、ROI、客户记录或结果阈值。

## 栏目封面与 Hero

- AI Craft 栏目封面表达“七套系统共用判断与证据主干”，不选择某一 Craft 当主角。
- 七个桌面 Hero 与七个窄屏 Hero 当前均为 `keep` 候选：它们分别使用审查工作台、产品设计台、创意路线台、真实浏览器台、逆向证据台、投资研究台和经营决策台的项目化场景。
- Hero 是概念插图，不是产品运行截图；正文必须继续给出项目事实和证据边界。

## 现有 21 张正文板的统一处理

既有 `<slug>-value.webp`、`<slug>-diagram.webp`、`<slug>-evidence.webp` 及移动版已经从七篇详情正文移除引用。最终采用的资产全部改用项目语义命名；用户在完整预览后明确批准清理，因此七个 AI Craft 的 42 个旧 public WebP、84 个临时 SVG/PNG 设计源和 42 个忽略的 `dist` 副本已于 2026-09-03 精确删除。名称相同但属于 Agent 或 Data Analysis 的其他项目媒体不在本次清理范围。

两篇试点的 9 个内容节拍都由 `web/scripts/render-craft-pilot-boards.mjs` 确定性生成桌面与移动 SVG，共 18 个设计源，再导出为同名 WebP。源文件共享事实模型，但移动版按竖向阅读顺序独立构图；它们是系统示意或虚构 fixture，不是产品运行截图。

其余五篇的 28 个内容节拍由 `web/scripts/render-craft-expansion-boards.mjs` 确定性生成 56 个桌面 / 移动设计源，再导出为同名 WebP。`web/scripts/craft-board-kit.mjs` 只提供共同材质、排版和绘图原语；每个项目的主视觉结构仍由各自事实决定。所有正文图均为系统示意或说明性 fixture，不冒充真实运行界面、实时行情、经营结果或浏览器回执。

## 2026-09-03 实现与验收回执

- 七篇 AI Craft 详情现在共有 37 个项目化内容节拍：`review-craft` 4、`creative-craft` 5、`design-craft` 5、`browser67` 6、`reverse-craft` 5、`money-craft` 6、`commerce-growth-os` 6。图片数量由各项目的读者问题、事实密度与证据边界决定，不作为固定模板。
- 本轮扩展的 28 张桌面媒体与 28 张移动媒体均已完成静态视觉复核；桌面统一为 1600×900，移动统一为 800×1200，单张均低于 350 KiB。
- browser67 桌面真实页面已逐篇检查五个扩展项目：figure 数量与正文合同一致，全部桌面媒体成功加载，无详情或 figure 横向溢出；每篇至少复核了一张真实页面代表截图。
- 第一次离屏 selector 截图和后台弹层切换受隐藏页签的 RAF / 合成层影响，均作为 `INVALID SAMPLE` 排除；有效截图改用精确 managed tab、原生 PageDown 与 viewport capture 获得。
- 390×844 viewport override 在 browser67 层超时，且失败后未形成可验收截图；虽然移动媒体源已独立检查，真实 390px 页面装配仍为 `UNVERIFIED`。该失败发生在任务专用页签，页签随后已按精确 workspace / task scope 关闭并核验，不影响保留中的用户预览页。
- 响应式失败后，任务专用页的 console observer 遇到 extension websocket closed。随后在保留预览页上的 observer 可以完成清理与 debugger 释放，但被既有缓冲区中的 Framer Motion 容器定位提醒、Vite HMR 记录和 WebGL `glBlitFramebuffer` 警告立即填满，未形成一段干净的持续观察窗口；因此本轮仍不宣称控制台无错误，也不把这些跨任务历史记录归因于内容图改动。lint、作品内容校验、TypeScript 与 Vite build 证据独立记录。
