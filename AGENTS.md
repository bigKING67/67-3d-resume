# AGENTS.md

本文件是本仓库的项目级代理规范。它只记录会改变实现、验证或交付行为的事实；产品目标见 [`PRODUCT.md`](PRODUCT.md)，视觉规则见 [`DESIGN.md`](DESIGN.md)，作品叙事与媒体规则见 [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md)，AI Craft 逐项目内容账本见 [`docs/AI-CRAFT-CONTENT-PLAN.md`](docs/AI-CRAFT-CONTENT-PLAN.md)，3D 操作路线见 [`docs/3D-WORKFLOW.md`](docs/3D-WORKFLOW.md)，上游来源和吸收记录见 [`UPSTREAM.md`](UPSTREAM.md)。上游技术说明可参考 [`CLAUDE.md`](CLAUDE.md)，但它不覆盖本项目当前规则与源码。发生冲突时，以现场运行证据、本文件、`PRODUCT.md`、`DESIGN.md`、`UPSTREAM.md`、当前源码的顺序为准。

## 项目身份

- 本项目是六七的滚动式 3D 个人简历，当前仓库为 `https://github.com/bigKING67/67-3d-resume`。
- 项目基于上游 [`dayinji/sen-3d-resume`](https://github.com/dayinji/sen-3d-resume) 定制；上游在线预览为 [`https://about.senbuzy.com/`](https://about.senbuzy.com/)。
- 上游提供 React Three Fiber、滚动驱动相机、Blender 场景、教程和静态部署底座；本仓库拥有自己的个人内容、模型贴图、作品集、视觉取舍和部署策略。
- 不把上游 README、个人素材或视觉选择直接当成本项目当前真相。需要核对上游时，按 `UPSTREAM.md` 做选择性吸收。

## 仓库边界

- `web/`：React 18 + TypeScript + Vite 前端；所有 npm 命令在此目录运行。
- `blender/`：3D 源文件。`blender/sen.blend` 是可编辑源，`web/public/models/me.glb` 是浏览器运行产物。
- `tutor/`：上游改造与部署教程，仅作参考，不自动覆盖本项目决策。
- `web/src/content/works/`：个人作品详情；这是项目内容，不因上游同步而覆盖或删除。
- 下游博客是独立仓库 [`bigKING67/blog`](https://github.com/bigKING67/blog)，本机路径为 `/Users/gaoqian/Documents/sixseven/codeproject/myblog`；它负责把固定简历 revision 发布到同域 `/resume/`。除非用户当前明确授权，不从本仓库修改、提交、推送或部署博客。

## 任务路由

按任务实际触发项读取最小必要文档；参考文档不因存在就自动成为权威。

| 任务触发 | 必读或核对 |
| --- | --- |
| 改首屏、履历、作品分组或访问者阅读顺序 | `PRODUCT.md` 与当前数据源 |
| 改作品文案、栏目封面、详情 Hero、正文媒体或图文排版 | `PRODUCT.md`、`DESIGN.md`、`docs/WORKS-STORYTELLING.md` |
| 改七个 AI Craft 的详情或媒体 | 额外读取 `docs/AI-CRAFT-CONTENT-PLAN.md`，并现场核对对应项目仓库 |
| 改 CSS、视觉语言、交互、动效或响应式 | `DESIGN.md` 与真实运行页面 |
| 改模型、贴纸、材质、相机、眼睛、焦点或 GLB | `DESIGN.md`、`docs/3D-WORKFLOW.md` 与 `blender/sen.blend` / `web/public/models/me.glb` 双源 |
| 换模型、改眼睛、做贴纸 | 按 `docs/3D-WORKFLOW.md` 触发对应 `tutor/` 教程；教程只解释机制 |
| 对照在线原版、上游源码或吸收上游机制 | `UPSTREAM.md`；先定义参考角色，再做 `adopt / adapt / reject / provenance_only` |
| 改依赖、Vite、构建或公共资源路径 | `web/package.json`、`web/vite.config.ts` 与本文件的依赖、子目录部署合同 |
| commit、push、推进博客 lock 或部署 | 本文件的授权边界与下游博客发布合同 |

## 常用命令

```bash
cd web
npm ci
npm run dev        # http://localhost:5173
npm run typecheck
npm run lint
npm run validate:works
npm run build
npm run check
npm run preview
```

当前没有独立测试套件。可见 UI 或 GLB 变更至少运行 `lint`、`build`，并在真实浏览器检查桌面与 390px 左右的窄视口；只通过静态检查不能证明 3D 画面正确。

## 工作约定

- 修改前运行 `git status --short --branch`。仓库经常带有个人内容 WIP，只处理任务文件，不覆盖、回滚或顺带提交其他改动。
- `commit`、`push`、部署、域名配置和 Cloudflare/GitHub 外部写操作分别授权；本地构建成功不等于线上已更新。
- `web/src/App.tsx` 管首屏与页面装配，`web/src/ui/Resume.tsx` 管履历，`web/src/data/works.ts` 与 `web/src/content/works/*.md` 管作品，`web/src/scene/Scene.tsx` 管 3D 运行逻辑。
- 保持 TypeScript `strict`。Three.js 命令式内部允许沿用现有少量 `any`，不要为了消除 `any` 扩张模型层。
- 公共资源必须通过 `import.meta.env.BASE_URL` 或相对构建路径解析；不要引入只在站点根目录 `/` 可用的硬编码资源路径。
- 本项目的网页验证（包括无登录的 `localhost` / `127.0.0.1`）默认使用 browser67 的 `tmwd_browser` managed tab：先解析唯一 `browser_instance_id`，采用独立窗口、后台优先和 `active:false`，任务结束按当前 `workspace_key` / `task_id` 执行 scoped `finalize_task`。browser67 现场不健康、不可用，或必要的真实渲染无法在安全焦点边界内完成时，明确报告 `UNVERIFIED` / blocker；不自动降级到 in-app Browser 或 Computer Use。in-app Browser 仅当用户当次明确点名时可用；Computer Use 仅用于浏览器外的桌面应用 UI。

## 作品叙事与媒体合同

- 作品栏目和详情先满足 `PRODUCT.md` 的理解任务，再按 `DESIGN.md` 落视觉；详细画面职责、AI Craft Brief、资产规格和验收以 `docs/WORKS-STORYTELLING.md` 为准，不把同一套细则重复塞回本文件。
- 栏目封面、详情 Hero 和正文媒体承担不同叙事职责；不得用同一张源图反复裁切，也不得用一张通用架构图替代完整案例故事。
- 作品正文不设固定图片数量、固定章节名或 `value / diagram / evidence` 三图模板。先列项目的重要主张、本人职责和事实来源，再决定哪些内容确实需要截图、图示、数据、视频或插画；一张图只承担一个主要判断。
- 七个 AI Craft 保留各自专属桌面/窄屏 Hero；既有三段式正文板全部视为候选，必须按 `docs/AI-CRAFT-CONTENT-PLAN.md` 逐项决定 `keep / adapt / split / replace / reject`，不能因文件已经存在就默认采用。
- 含精确中文、命令、路径或指标的图优先用确定性 HTML/SVG/设计源排版后导出。生成式图片可以表达对象、场景和氛围，但不得冒充真实界面、真实结果或验证回执。
- 作品媒体只使用本项目自有、获准或已脱敏资产。上游在线个人作品只可学习信息结构和媒体节奏，不复制其图片、视频、文案、品牌或数据。
- 新增或替换作品媒体必须核对实际展示裁切、可读性、`alt`/图注、文件体积和来源，并在真实浏览器验证桌面与约 390px 窄视口；源码存在或图片能加载不等于叙事与视觉通过。

## 3D 与贴纸合同

具体触发路线、相关教程、双源同步、导出与验收顺序见 `docs/3D-WORKFLOW.md`；下列条目是不得被参考教程覆盖的项目硬合同。

- `me.glb` 必须保留相机、`CameraAction`、眼睛网格、对焦锚点和当前节点命名；修改贴图或贴纸可见性时，不应无故改变网格、动画或相机数据。
- `web/src/data/focusPoints.ts` 是履历焦点顺序真源；变更履历条数时同步核对 `Resume.tsx`、GLB 锚点和滚动帧段。
- 外部公司或工具品牌遵循“一品牌一枚可见 Logo”：不重复铺贴，不加无意义的白色矩形卡底，优先使用透明的品牌轮廓。
- 个人表达型贴纸（如 `I ♥ HZNU`、`ANALYST`、`sixseven`、六七个人 Agent Logo）可以保留自身锁定形态；个人 Agent Logo 固定使用左脸原 `BUILDER` 面片 `sticker10`，不得替换右脸 `sticker1 / ANALYST`。火奴使用官网 `https://www.huonu.com/favicon.ico` 声明的青蓝圆形 `HN` favicon，保持透明背景，不再使用旧绿色锁定版或通用白卡。
- 贴纸、几何、材质或对象变换的完整交付必须同时维护 `blender/sen.blend` 与 `web/public/models/me.glb`。贴纸面片必须保留已经贴合脸部的曲面顶点；如果后续重新使用 `Shrinkwrap`，导出 GLB 必须启用 **Apply Modifiers**（自动化导出对应 `export_apply=True`），或先把结果可靠地烘焙进源网格，否则会静默导出与脸部相交的平面贴纸。重新打开 Blender 并导出后，核对节点、网格、材质、动画名称、嵌入图片、对象变换和贴纸曲面顶点，防止可编辑源与运行产物漂移。
- 直接修改 `me.glb` 只能作为明确标注的临时候选；如果本机无法同步 `blender/sen.blend`，状态必须是 `PARTIAL / Blender 源未同步`，不能宣称 3D 源已完整交付。
- 更新 `me.glb` 后必须提高 `Scene.tsx` 中模型查询参数以失效旧缓存，并验证 GLB 结构与非图片数据未意外变化。

## 上游吸收

- 上游不是自动更新源。禁止在 dirty `main` 上直接 `pull`、merge 或用上游文件覆盖本地目录。
- 用户明确要求临摹或复用上游视觉格式时，不要把“上游个人资产未纳入 MIT”误解成禁止参考。允许把公开上游的源码、GLB、Blender 文件和贴图下载到仓库外临时目录，作为构图、UV、尺寸、字重、字距、描边、阴影和对象变换的可测量底稿；默认工作流是“临时复制参考 → 提取参数 → 替换为本项目内容 → 写回本项目源文件”，不得因此无故中止实现。
- 临摹允许复用视觉格式和工程参数；个人文案、学校、项目与品牌默认替换为六七自己的内容。用户明确要求保留的通用元素（如足球/棋盘球贴纸）可以选择性恢复，但必须记录来源并与本项目贴图、对象变换和设计合同一起验证。
- 许可证判断保持分层：源码许可按 `LICENSE`，个人内容和资产边界按 `NOTICE` 与各自来源；不要宣称所有上游素材都属于 MIT，也不要代替用户给出法律结论。这个记录要求不构成临摹实现的默认 blocker。
- 首次在一台机器上工作时，可配置只读语义的上游 remote：

```bash
git remote add upstream https://github.com/dayinji/sen-3d-resume.git
git fetch upstream
```

- 每次吸收先更新 `UPSTREAM.md` 的现场审计：记录上游 head、当前吸收边界、变更路径和日期。
- 将上游变更逐项分类为 `adopt`、`adapt`、`reject` 或 `provenance_only`；代码、依赖、3D 合同和部署变化必须人工 review。
- 在独立分支或临时 worktree 验证上游候选，再把最小选择性改动带回当前分支。不得覆盖个人内容、模型贴图、`DESIGN.md`、作品详情或博客部署约定。
- 吸收后运行相应构建与浏览器验证，并把新的已吸收 SHA 和仍未吸收范围写回 `UPSTREAM.md`。远端 head 变化本身不等于本项目需要更新。

## 设计与部署

- `DESIGN.md` 是本项目视觉权威；上游视觉只提供底座和参考。改动场景气质、版式、贴纸、字体、颜色或运动前先核对它。
- 计划中的公开入口是 `https://whois67.52671314.xyz/resume/`，但只有真实部署与 HTTP 验证后才能宣称可用。
- 推荐保持简历源码仓库独立，由博客发布流程消费一个已验证、固定 revision 的 `web/dist/` 并装配到博客 `dist/resume/`；不要把 React Three Fiber 源码直接并入 Astro 页面，也不要用 iframe 作为默认集成。
- `web/vite.config.ts` 的 `base: './'` 是子目录部署合同。变更它之前必须验证 `/resume/` 下 HTML、JS、字体、HDR、GLB、图片和作品媒体的真实请求路径。

## 下游博客发布合同

- 生产入口是 `https://whois67.52671314.xyz/resume/`；Cloudflare Pages 的 Git 源仍是博客仓库，不是本仓库。简历仓库 push 成功不会单独触发生产更新。
- 博客仓库的 `resume.lock.json` 是发布真源，只接受本仓库已审核、已推送的 40 位完整 commit SHA；不得填分支名、tag、短 SHA 或仅存在本机的 commit。
- 博客的 `pnpm build:pages` 会获取 lock 指定 revision、在干净 detached checkout 中执行简历 `npm ci --include=dev`，再装配到博客 `dist/resume/`；该流程通过才证明固定 revision 可被消费。
- 本机联调使用博客的 `pnpm build:with-resume`，默认消费 `../../play67/resume`。dirty checkout 的回执只能证明本机候选可装配，不能作为 Pages 可复现或生产发布证据。
- 跨仓发布顺序固定为：简历验证 → 简历 scoped commit → 简历 push/远端一致 → 博客推进 `resume.lock.json` → `pnpm build:pages` → 博客 scoped commit → 博客 push → Pages 与自定义域名验证。
- 两个仓库始终形成独立 commit，`commit`、`push`、推进 lock、部署和回滚分别授权。博客侧具体构建、回执、入口和回滚规则以其根级 `AGENTS.md` 为准，不在这里复制。
- 简历回滚优先让博客把 lock 恢复到上一个已知可用 revision 后重新构建；不要手工拼接旧 `dist/resume/`，也不要为了让构建通过改成浮动 revision。

## 依赖与安装脚本

- Node.js 必须满足当前 Vite 的 engine；当前 Vite 7 要求 Node `^20.19.0 || >=22.12.0`，本机与 CI/Pages 都要核对真实版本。
- 常规验证用 `npm ci`；只有明确更新依赖时才运行 `npm install` / `npm audit fix` 并审查 `package.json` 与 `package-lock.json` 的 scoped diff。
- `allowScripts` 只精确批准当前构建需要的依赖和版本，禁止用 `npm approve-scripts --all` 扩大执行面。clean install 后运行 `npm approve-scripts --allow-scripts-pending --json`，不得把未审核脚本警告当作无关噪声。
- 不用强制 override 掩盖 Three/React 生态兼容警告；涉及 React、Fiber、Drei、Three 或后处理链主版本时，作为一个完整迁移任务验证 GLB、滚动、相机、焦点、WebGL 和窄视口。

## 交付检查

- 文档或治理变更：复核 instruction chain、链接、命令、Git 现场和 scoped diff。
- GLB 或视觉变更：结构检查、`npm run lint`、`npm run build`、桌面与移动端真实页面、同类贴纸一致性检查。
- 部署集成：同时验证 `/resume/`、刷新/深链、资源 200、缓存版本、移动端 WebGL 和返回博客入口；部署前保留可回滚的上一版 revision。
- 跨仓发布：记录简历 SHA、博客 lock SHA、博客 SHA、`_resume-build.json` 回执、不可变 Pages 部署和自定义域名证据；任何缺失层都明确标为 `UNVERIFIED`。
- 最终报告区分本地源码、构建产物、浏览器运行、远端仓库与生产站点证据。
