# About 67 · 3D 个人简历

<p align="center"><strong>滚动就是运镜。把六七的简历，长在一个 3D 场景里。</strong></p>

<p align="center">
  <a href="https://whois67.52671314.xyz/resume/">在线预览</a> |
  <a href="#快速开始">快速开始</a> |
  <a href="#改成你自己的">改成你自己的</a> |
  <a href="#换人物模型">换模型</a> |
  <a href="#教程">教程</a> |
  <a href="#部署">部署</a> |
  <a href="#源码-vs-零代码">源码 vs 零代码</a> |
  <a href="README.en.md">English</a>
</p>

这是六七的滚动式 3D 个人简历，也是一个可以继续深入阅读的作品集。页面先用人物、履历和运镜建立身份，再通过 AI DataHub、AI Team Agent、AI Craft 与 Data Analysis 说明具体做过什么、如何判断，以及证据在哪里。

当前仓库是 [`bigKING67/67-3d-resume`](https://github.com/bigKING67/67-3d-resume)，基于 [`dayinji/sen-3d-resume`](https://github.com/dayinji/sen-3d-resume) 选择性定制。上游提供 React Three Fiber、滚动相机、Blender 场景、教程和静态部署底座；本仓库维护六七自己的内容、模型贴图、作品媒体、视觉取舍和发布方式。上游来源与吸收记录见 [`UPSTREAM.md`](UPSTREAM.md)。

> 在线入口已在 2026-09-02 核验为 `About 67`。该地址由下游博客仓库装配固定 revision；只 push 本仓库不会自动更新这个生产入口，详见[部署](#部署)。

## 项目文档

不同文档各管一层，避免把所有规则堆进 `AGENTS.md`：

| 文档 | 负责什么 | 什么时候看 |
| --- | --- | --- |
| [`README.md`](README.md) / [`README.en.md`](README.en.md) | 项目入口、上手、改造、教程与部署路径 | 第一次进入仓库 |
| [`PRODUCT.md`](PRODUCT.md) | 产品定位、访问者问题、内容真实性与成功标准 | 改内容架构或作品叙事前 |
| [`DESIGN.md`](DESIGN.md) | 视觉系统、3D、贴纸、作品媒体与响应式合同 | 改视觉、模型或交互前 |
| [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md) | 作品写法、媒体选择、图文版式、真实性和响应式规则 | 做作品详情与配图时 |
| [`docs/AI-CRAFT-CONTENT-PLAN.md`](docs/AI-CRAFT-CONTENT-PLAN.md) | 七个 AI Craft 的事实来源、主张和媒体候选账本 | 改 AI Craft 详情前 |
| [`docs/3D-WORKFLOW.md`](docs/3D-WORKFLOW.md) | 模型、贴纸、眼睛、相机、导出与真实页面验收路线 | 改 3D 或 GLB 前 |
| [`UPSTREAM.md`](UPSTREAM.md) | 上游 SHA、来源、选择性吸收与保护边界 | 对照或吸收上游时 |
| [`AGENTS.md`](AGENTS.md) | 代理实现、验证、Git 与发布边界 | 让 AI/Codex 修改项目时 |
| [`CLAUDE.md`](CLAUDE.md) | 上游技术说明 | 需要理解原始实现时，内容以本仓库现场为准 |

## 快速开始

环境要求：Node.js `^20.19.0 || >=22.12.0`。

```bash
git clone https://github.com/bigKING67/67-3d-resume.git
cd 67-3d-resume/web
npm ci
npm run dev
```

开发地址默认为 [`http://localhost:5173`](http://localhost:5173)。所有 npm 命令都在 [`web/`](web) 下运行：

```bash
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run render:craft-pilot-sources # 重建两篇 AI Craft 试点的 SVG 设计源
npm run validate:works # 作品字段、链接与媒体合同
npm run build      # 类型检查 + Vite 构建，输出 web/dist/
npm run check      # lint + 作品校验 + build
npm run preview    # 预览构建产物
```

当前没有独立测试套件。涉及可见 UI、GLB 或作品媒体时，构建通过后仍需在真实浏览器检查桌面和约 390px 的窄视口；静态检查不能证明 3D 画面、裁切或滚动运镜正确。

## 改成你自己的

本仓库当前是六七的个人版本。若要继续维护这个版本，或 fork 成另一个人的版本，按内容层级修改：

| 想改什么 | 真源 |
| --- | --- |
| 产品定位、读者要理解的问题 | [`PRODUCT.md`](PRODUCT.md) |
| 视觉语言、贴纸、媒体和响应式规则 | [`DESIGN.md`](DESIGN.md) |
| 首屏 About 文案 | `web/src/App.tsx` 中的 `COPY` |
| 学历、经历、客户与社交入口 | `web/src/ui/Resume.tsx` |
| 作品栏目、项目名、摘要和外链 | `web/src/data/works.ts` |
| 单个作品详情 | `web/src/content/works/<slug>.md` |
| 作品详情字段与 Markdown 解析 | `web/src/data/workDocs.ts` |
| 作品封面、Hero 与正文媒体 | `web/public/works/`，规范见 [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md) |
| 3D 场景、相机与后期 | `web/src/scene/Scene.tsx` |
| 人物与贴纸的可编辑源 / 运行产物 | `blender/sen.blend` / `web/public/models/me.glb` |
| 3D 修改、导出与验收步骤 | [`docs/3D-WORKFLOW.md`](docs/3D-WORKFLOW.md) |

作品不是“填一个标题、配一张通用图”就结束。重点详情应让人看懂项目对象、问题、本人职责、关键判断、实现、证明与边界；正文媒体数量由重要主张和可用证据决定，不套固定三图模板。栏目封面、项目 Hero 与正文媒体承担不同任务，不应用同一张图反复裁切。

媒体路径使用 `./works/...` 等相对构建路径，或通过 `import.meta.env.BASE_URL` 解析。不要写只在域名根目录 `/` 下成立的资源路径，否则部署到 `/resume/` 会失效。

## 换人物模型

`blender/sen.blend` 是可编辑源，`web/public/models/me.glb` 是浏览器运行产物。完整修改要同步维护两者；只替换 GLB 属于临时候选，不能算源文件已经交付。

运行时代码按名称查找这些对象：

| GLB 合同 | 作用 |
| --- | --- |
| 相机与名为 `CameraAction` 的动画 clip | 滚动驱动的镜头路径 |
| `focus-start` 或 `focus-0` | 首屏对焦锚点 |
| `web/src/data/focusPoints.ts` 列出的焦点空对象 | 履历节点与相机停靠点 |
| `focus-works` | 作品区对焦锚点；缺省时复用最后一个履历锚点 |
| 名称包含 `eye` 的网格 | 眼球跟随 |

贴纸面片必须保留已经贴合脸部的曲面顶点。若重新使用 Blender `Shrinkwrap`，导出 GLB 时必须启用 **Apply Modifiers**（自动化导出对应 `export_apply=True`），或先可靠烘焙结果，否则导出的平面可能与脸部相交。更新 `me.glb` 后还要提高 `web/src/scene/Scene.tsx` 中的模型查询参数，失效旧缓存。

## 教程

[`tutor/`](tutor) 保留上游面向使用者的通用教程，适合学习机制或制作自己的 fork：

| 教程 | 内容 | 本项目边界 |
| --- | --- | --- |
| [用 intro3d 处理模型](tutor/intro3d处理模型教程/intro3d处理模型教程.md) | 在浏览器中处理模型并导出 `me.glb` | 导出后仍要满足本仓库的 GLB 命名、相机与源文件同步合同 |
| [眼球跟随](tutor/眼球教程/眼球教程.md) | 眼睛跟随光标的实现和换模连接方法 | 需用当前 `Scene.tsx` 与真实 GLB 复核 |
| [AI 贴纸包](tutor/贴纸教程/贴纸教程.md) | 生成透明贴纸并放入场景 | 还要遵守 `DESIGN.md` 的品牌、来源和可见性规则 |
| [部署到 GitHub Pages](tutor/部署教程/1-部署到-GitHub-Pages.md) | 通用 fork 的 GitHub Pages 发布流程 | 不代表 `whois67` 生产入口的真实发布链路 |
| [部署到 Cloudflare Pages](tutor/部署教程/2-部署到-Cloudflare-Pages.md) | 通用 fork 的 Cloudflare Pages 流程 | 六七的生产入口由博客仓库装配，见下节 |

这些教程来自上游底座，只作参考，不自动覆盖本仓库的 `AGENTS.md`、`DESIGN.md`、依赖版本、个人内容或部署决策。

## 部署

本地静态构建：

```bash
cd web
npm ci
npm run build
```

`web/vite.config.ts` 保持 `base: './'`，因此 HTML、JS、字体、HDR、GLB 和作品媒体可以装配到 `/resume/` 等子目录。本仓库也保留 [GitHub Pages workflow](.github/workflows/deploy.yml)，可用于该仓库自己的 Pages 站点。

六七的生产入口是 [`https://whois67.52671314.xyz/resume/`](https://whois67.52671314.xyz/resume/)，真实发布由独立博客仓库消费固定的 40 位简历 commit SHA：

```text
简历验证
  → 简历 scoped commit
  → 简历 push / 远端一致
  → 博客推进 resume.lock.json
  → 博客 pnpm build:pages
  → 博客 scoped commit / push
  → Pages 与自定义域名验证
```

`commit`、`push`、推进 lock、部署和回滚是不同授权层。具体证据、回执与回滚合同以 [`AGENTS.md`](AGENTS.md) 为准；本地 `npm run build` 成功不等于生产已更新。

## 源码 vs 零代码

上游把 [intro3d](https://intro3d.com/) 作为零代码路径和模型处理工具。本项目选择源码路线，因为它需要自定义内容结构、滚动相机、作品详情、证据媒体、子目录部署和跨仓发布合同。两条路径可以组合：在可视化工具里处理或导出模型，再回到本仓库满足 GLB 与内容合同。

| | 本仓库源码 | 零代码 / 可视化工具 |
| --- | --- | --- |
| 适合 | 要完全控制结构、交互、资产与发布的人 | 想先用界面快速制作的人 |
| 可改范围 | React、Three.js、GLB、内容、样式和构建链 | 以工具当前提供的能力为准 |
| 维护责任 | 自己管理依赖、源文件、验证和部署 | 依赖工具的当前功能与服务条款 |
| 本项目用法 | 最终运行与发布真源 | 可作为模型制作或早期原型参考 |

外部工具的功能、价格、数据处理和服务条款可能变化，使用前以其当前官方说明为准。

## 工作原理

这是一个无业务后端的 React SPA：`web/index.html` → `web/src/main.tsx` → `web/src/App.tsx`。页面由固定的 React Three Fiber `<Canvas>` 和可滚动 HTML 内容叠层组成：

- `web/src/scene/Scene.tsx` 加载 `me.glb`，驱动相机动画、焦点、眼球和后期效果；
- `web/src/ui/Resume.tsx` 渲染履历；
- `web/src/ui/Works.tsx` 渲染作品栏目与详情弹层；
- `web/src/content/works/*.md` 提供项目正文；
- `web/src/store.ts` 管理轻量交互状态。

## 仓库结构

```text
web/                        React 18 + TypeScript + Vite 前端
  src/App.tsx               首屏、Canvas 与页面装配
  src/scene/                Three.js 场景、环境光与相机逻辑
  src/ui/                   履历、作品、加载与叠层 UI
  src/data/                 作品与焦点数据
  src/content/works/        作品详情 Markdown
  public/works/             已审核作品媒体与本地未跟踪素材
  public/models/me.glb      浏览器运行模型
blender/sen.blend           可编辑 3D 源
tutor/                      上游通用改造教程
docs/                       本项目内容与媒体规范
PRODUCT.md / DESIGN.md      产品与视觉权威
AGENTS.md / UPSTREAM.md     代理规则与上游记录
```

## 许可与内容边界

- 继承的代码按 [`LICENSE`](LICENSE) 中的 MIT 许可证使用。
- 上游个人资产、本项目个人内容、人物/贴纸、作品媒体和第三方品牌并不会因为代码开源自动进入 MIT；具体边界与来源见 [`NOTICE`](NOTICE) 和 [`UPSTREAM.md`](UPSTREAM.md)。
- fork 时应替换姓名、简历、社交链接、人物模型、作品文案、媒体和未经授权的品牌素材，并自行核对字体、HDR 与其他第三方资源许可。

## 技术栈

React 18 · TypeScript · React Three Fiber · Three.js · React Three Postprocessing · Framer Motion · Zustand · Vite
