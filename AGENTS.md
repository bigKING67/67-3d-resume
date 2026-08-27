# AGENTS.md

本文件是本仓库的项目级代理规范。它只记录会改变实现、验证或交付行为的事实；更细的视觉规则见 [`DESIGN.md`](DESIGN.md)，上游来源和吸收记录见 [`UPSTREAM.md`](UPSTREAM.md)，上游技术说明可参考 [`CLAUDE.md`](CLAUDE.md)。发生冲突时，以现场运行证据、本文件、`DESIGN.md`、`UPSTREAM.md`、当前源码的顺序为准。

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
- 博客是独立仓库：`/Users/gaoqian/Documents/sixseven/codeproject/myblog`。除非用户当前明确授权，不从本仓库修改、提交或部署博客。

## 常用命令

```bash
cd web
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run lint
npm run build
npm run preview
```

当前没有独立测试套件。可见 UI 或 GLB 变更至少运行 `lint`、`build`，并在真实浏览器检查桌面与 390px 左右的窄视口；只通过静态检查不能证明 3D 画面正确。

## 工作约定

- 修改前运行 `git status --short --branch`。仓库经常带有个人内容 WIP，只处理任务文件，不覆盖、回滚或顺带提交其他改动。
- `commit`、`push`、部署、域名配置和 Cloudflare/GitHub 外部写操作分别授权；本地构建成功不等于线上已更新。
- `web/src/App.tsx` 管首屏与页面装配，`web/src/ui/Resume.tsx` 管履历，`web/src/data/works.ts` 与 `web/src/content/works/*.md` 管作品，`web/src/scene/Scene.tsx` 管 3D 运行逻辑。
- 保持 TypeScript `strict`。Three.js 命令式内部允许沿用现有少量 `any`，不要为了消除 `any` 扩张模型层。
- 公共资源必须通过 `import.meta.env.BASE_URL` 或相对构建路径解析；不要引入只在站点根目录 `/` 可用的硬编码资源路径。

## 3D 与贴纸合同

- `me.glb` 必须保留相机、`CameraAction`、眼睛网格、对焦锚点和当前节点命名；修改贴图或贴纸可见性时，不应无故改变网格、动画或相机数据。
- `web/src/data/focusPoints.ts` 是履历焦点顺序真源；变更履历条数时同步核对 `Resume.tsx`、GLB 锚点和滚动帧段。
- 外部公司或工具品牌遵循“一品牌一枚可见 Logo”：不重复铺贴，不加无意义的白色矩形卡底，优先使用透明的品牌轮廓。
- 个人表达型贴纸（如 `I ♥ HZNU`、`ANALYST`、`sixseven`、`BUILDER`）可以保留白色模切边；火奴当前使用官方绿色锁定版，除非明确重设计，不拆掉品牌底色。
- 直接修改 `me.glb` 后必须提高 `Scene.tsx` 中模型查询参数以失效旧缓存，并验证 GLB 结构与非图片数据未意外变化。
- 如果本机无法编辑 `blender/sen.blend`，要明确报告“Blender 源未同步”；未来从 Blender 重新导出前，必须重新落实本节贴纸合同。

## 上游吸收

- 上游不是自动更新源。禁止在 dirty `main` 上直接 `pull`、merge 或用上游文件覆盖本地目录。
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

## 交付检查

- 文档或治理变更：复核 instruction chain、链接、命令、Git 现场和 scoped diff。
- GLB 或视觉变更：结构检查、`npm run lint`、`npm run build`、桌面与移动端真实页面、同类贴纸一致性检查。
- 部署集成：同时验证 `/resume/`、刷新/深链、资源 200、缓存版本、移动端 WebGL 和返回博客入口；部署前保留可回滚的上一版 revision。
- 最终报告区分本地源码、构建产物、浏览器运行、远端仓库与生产站点证据。
