# Upstream provenance and absorption

## 来源

| 角色 | 地址 |
| --- | --- |
| 本项目仓库 | `https://github.com/bigKING67/67-3d-resume` |
| 上游仓库 | [`https://github.com/dayinji/sen-3d-resume`](https://github.com/dayinji/sen-3d-resume) |
| 上游在线预览 | [`https://about.senbuzy.com/`](https://about.senbuzy.com/) |

本项目继承上游的 React Three Fiber/Vite 应用、滚动相机机制、Blender 场景和教程。代码遵循仓库中的 MIT 许可证；个人内容、人物模型、简历文案和品牌素材仍受 `NOTICE` 与各自权利约束，不能因为上游开源就视为自由素材。

## 当前吸收边界

现场核对日期：`2026-09-02`

| 项目 | 结果 |
| --- | --- |
| 本地已提交 HEAD | `32f4cc9ac9a75abc4277e63c6e67f4d699a13b1e` (`refactor: remove unnecessary drei dependency`) |
| 已确认共同基线 | `9a3d695f55b423838c5c1e0b54065f3091458135`（当前双方的 merge-base） |
| 上游 `main` HEAD | `c9a9fe373cde72c77ff7f2dabde17fb79dce89b3` |
| 上游自共同基线领先 | 3 commits |
| 漂移路径 | `README.md`、`README.en.md`、`docs/preview.jpg` |
| 代码/依赖/GLB 漂移 | 未发现 |
| 当前决策 | 代码漂移继续 `provenance_only`；README 导航与作品叙事机制按下文 `adapt` 到本项目文档，不直接覆盖源码或个人内容 |

这张表只证明上述日期的只读审计结果。以后判断“是否最新”必须重新 fetch/查询，不能沿用旧 SHA。

### 2026-09-03 3D 公司贴纸与镜头适配

本轮按用户确认执行 `adapt`，不是整文件覆盖：

- Groland 使用官网当前声明的白底 favicon；火奴使用官网声明的青蓝圆形 `HN` favicon；六七个人 Agent Logo 复用左脸原 `BUILDER / sticker10` 曲面，右脸 `sticker1 / ANALYST` 及 Claude—`ANALYST`—Codex 组合保持不变。
- 火奴、SPES、Groland 保持固定物理位置，并按右侧履历节点切换焦点和视觉权重，不通过移动贴纸伪造接棒。
- browser67 现场滚动上游在线预览后，确认其镜头语义是“贴纸近景经历 → 末个履历节点完整清晰正脸 → Works 接管后转为后脑勺”。本项目没有上游“独立开发”那条额外履历，因此改用 Groland 离场到画廊钉住的交界段回到清晰正脸，再从 Works 横移段转向后脑勺，不复制上游个人内容或精确时序。
- `blender/sen.blend` 与 `web/public/models/me.glb` 同步维护；GLB 使用 `export_apply=True` 导出并核对贴纸曲面顶点，最终仍以 `DESIGN.md`、Blender 源和 GLB 运行产物共同约束当前结果。

### 2026-09-02 README 导航适配

上游 README 的“在线预览 / 快速开始 / 改成你自己的 / 换模型 / 教程 / 部署 / 源码 vs 零代码 / English”入口判定为 `adapt`：保留清晰的用户路径，但所有目的地改写为本项目真相。

- 在线预览改为已现场核验的 `https://whois67.52671314.xyz/resume/`，不再指向上游作者的 Demo；
- 快速开始、依赖、技术栈、个人内容和作品媒体按当前源码重写，不沿用已漂移的上游说明；
- 教程仍链接 `tutor/` 中的上游通用材料，但明确它们不覆盖本项目 GLB、视觉与发布合同；
- 部署区分本仓库 GitHub Pages workflow 与 `whois67` 的下游博客固定 revision 发布链；
- 中英文 README 同步维护同一组入口和关键边界，避免英文文档继续把本项目描述成 `About Sen`。

### 2026-09-02 作品详情参考审计

本轮按用户要求同时核对上游在线站点和源码，结论为 `adapt`，只吸收作品叙事机制并写入本项目治理文档，不复制个人内容或媒体：

- browser67 现场观察到在线作品采用“栏目独立封面 → 标题/结果/标签列表 → 项目独立 Hero/角色/标签 → 按小标题组织的正文媒体”四层结构；栏目、项目和正文证据不是同一张图的不同裁切。
- 抽查玻璃墙游戏机、ZOOOP、谁在弹古琴和 Raymarching：产品详情用成组界面证明功能，互动项目用视频与过程图证明体验，技术实验用多段结果视频逐项证明能力；媒体数量由故事和证据决定，不使用固定的一图模板。
- 上游源码的 `Works.tsx` 与 `workDocs.ts` 只提供栏目、详情弹层和 Markdown/HTML 媒体能力，`example.md` 提供填写格式；上游 `.gitignore` 明确排除除栏目封面外的 `public/works/`，README 也说明开源版不包含作者个人作品详情与媒体。
- 可迁移机制已经整理到本项目 [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md)：栏目封面、详情 Hero、价值、工程和证据媒体分层；七个 AI Craft 需要内容各异但视觉同族的专属画面。
- 上游个人作品文案、图片、视频、品牌、奖项、数据和独特构图继续属于 `reject`；本项目只使用自有、获准或已脱敏内容，视觉权威仍是 `PRODUCT.md` 与 `DESIGN.md`。

### 2026-08-28 视觉格式适配

本轮按用户确认执行 `adapt`，不是整文件覆盖：

- 从上游 `web/public/models/me.glb`、`blender/sen.blend` 和两张贴纸 atlas 提取 UV、尺寸、字体比例、模切边、阴影与 `sticker7` / `sticker9` 对象变换作为临摹底稿；
- `I ♥ SYSU` 改造为本项目的 `I ♥ HZNU`，`HOTSAUR` 去掉手势并改造为 `ANALYST`，`ZOOOP` 改造为 `sixseven`；三者只吸收视觉格式和参数，内容均为本项目身份；
- Codex 曾从透明线稿调整为不透明深色方形锁定面；2026-08-29 用户决定移除该版本，atlas 中未再使用的旧 Codex 单元也已清空，避免后续 UV 误绑时复现。2026-09-02 用户以新的构图决定恢复 Codex 语义：不恢复旧单元，而把当前暖白底 OpenAI 结形 app-icon 作为 Codex 贴纸使用；
- 2026-08-30 根据本地 `127.0.0.1:5173` 刷新后的实际截图和逐贴纸 UV 反查，仍可见的黑底白色旋涡来自 `贴纸2` 右上角的 `67` 字形，对应对象为 `sticker13`；当前已删除 `sticker13` 及其 atlas 单元。排查中曾临时误删的 Groland `sticker5` 已从 v19 源恢复，最终结构相对 v19 只移除 `sticker13`，避免把邻近贴纸误当成截图目标；
- 恢复上游棋盘球贴纸到 `sticker9`，并把当前 Claude 贴纸所在的 `sticker7` 放回上游的上方对象位置，避免面片重叠；
- 2026-08-29 的 AI 工具贴纸收口不从上游复制品牌素材：Claude 使用 [`claude.ai/favicon.svg`](https://claude.ai/favicon.svg) 的官方橙色星芒；暖白底 OpenAI 结形图标沿用已审核的 app-icon 资产。两者复用模型已有脸部面片和同一 atlas。初版对象虽然存在于 GLB，但位于角色镜头的远侧脸颊，逐对象射线检查确认两枚贴纸都被 `man` 完全遮挡；首次近侧修复又只按 CameraAction 第 100 帧验收，没有覆盖页面阻尼相机在“角色”文字仍显示时继续前进的状态。2026-08-30 用户提供的 `2048×1024` 真实运行截图与第 113 帧投影吻合：暖白图标位于 `x=347–512`，Claude 已漂到 `x=84–265`。当时两枚贴纸被重新组成 `ANALYST` 下方的紧凑近侧组合，并把桌面验收范围扩展到第 100–115 帧。随后按截图测得 Claude 落点肤色约为 `#D78561`，透明橙色星芒约为 `#D97757`，对比度只有约 `1.10:1`；因此采用用户此前提供的深色 Claude app-icon 参考，把原橙色星芒缩放置于深炭圆角锁定底上，外部四角仍透明，避免正确入框后继续融进肤色。
- 2026-09-02 用户以原版脸部贴纸的上下节奏为参考，明确把三枚贴纸改为“Claude 上、`ANALYST` 中、Codex 下”。本项目只吸收上下错落机制，不复制上游贴纸内容或精确几何；`sticker3` / `sticker11` 在 `1900×1194`、CameraAction 第 100 帧的首轮构图目标约为 `(760, 280)` / `(570, 880)`，`sticker1` 继续作为中间主轴。用户随后以真实运行截图确认位置正确但图标视觉权重偏小，因此先把两枚对象尺度从 `0.32` / `0.28` 提升至 `0.52` / `0.46`，约放大 `1.6×`；Claude 为覆盖第 115 帧完整入框仅沿曲面下移约十几像素。用户继续确认两枚工具贴纸应以正方形为基础，现场量得 Claude / Codex 的可见 Alpha 边界分别为 `265×262` / `282×282`，因此保持三轴等比例缩放，不用非等比变形抵消曲面透视；Claude 保持 `0.52`，Codex 等比放大到 `0.54` 并向上、略向右收紧，第 100 帧中心约为 `(607, 707)`。两枚面片均以 `0.004` 模型单位偏移重新贴合 `man` 并烘焙，随后在第 100–115 帧及 `390×844` 移动端相机补偿下核对完整入框与无遮挡。

## 本地保护层

上游吸收时默认保护以下本项目层，不允许整体覆盖：

- `DESIGN.md` 与本文件；
- `web/public/models/me.glb` 及个人贴纸、人物和品牌资产；
- `web/src/App.tsx`、`web/src/ui/Resume.tsx` 中的个人文案与履历；
- `web/src/data/works.ts`、`web/src/content/works/` 与作品媒体；
- 本项目域名、博客装配和发布策略；
- 任何尚未提交的用户 WIP。

如果上游确实改到这些路径，只逐块比较并 `adapt`，不按文件覆盖。

## 检查流程

### 1. 配置并刷新上游

```bash
git remote get-url upstream || git remote add upstream https://github.com/dayinji/sen-3d-resume.git
git fetch upstream
git status --short --branch
```

如果 worktree 不干净，只做审计，不 merge、不 rebase、不 checkout 覆盖任务文件。

### 2. 确定审计范围

```bash
git log --oneline --left-right HEAD...upstream/main
git diff --name-status <last-reviewed-sha>..upstream/main
git diff --stat <last-reviewed-sha>..upstream/main
```

对依赖、构建、`Scene.tsx`、GLB/Blender 合同、部署 workflow 和许可证变化优先人工检查。

### 3. 分类

| 状态 | 含义 |
| --- | --- |
| `adopt` | 原样采用，未触碰本地产品或个人边界 |
| `adapt` | 吸收思路或局部实现，并按本项目结构/设计调整 |
| `reject` | 与本项目目标、风险或个人层冲突，明确不采用 |
| `provenance_only` | 只更新已审计的远端状态，不改变本地行为 |

### 4. 验证并记录

- 在独立分支或临时 worktree 应用候选。
- 运行受影响的 typecheck、lint、build 和真实浏览器检查。
- 更新“当前吸收边界”中的 reviewed upstream SHA、路径、分类、日期和验证。
- 只有用户明确授权才 commit、push 或部署；远端上游变化不自动触发发布。

## 更新原则

- 目标是持续吸收上游底座的高价值变化，而不是长期冻结，也不是追求形式上的 SHA 相等。
- 上游修复构建、兼容性、3D 合同、无障碍或部署问题时优先评估；上游个人内容、营销文案和视觉资产默认不吸收。
- 本项目发生重要结构性改造后，即使上游没有更新，也要重新判断哪些路径仍可直接比较，避免把已经分叉的模块当成可无脑同步。
