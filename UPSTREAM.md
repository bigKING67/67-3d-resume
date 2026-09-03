# Upstream provenance and absorption

## 来源

| 角色 | 地址 |
| --- | --- |
| 本项目仓库 | `https://github.com/bigKING67/67-3d-resume` |
| 上游仓库 | [`https://github.com/dayinji/sen-3d-resume`](https://github.com/dayinji/sen-3d-resume) |
| 上游在线预览 | [`https://about.senbuzy.com/`](https://about.senbuzy.com/) |

本项目继承上游的 React Three Fiber/Vite 应用、滚动相机机制、Blender 场景和教程。代码遵循仓库中的 MIT 许可证；个人内容、人物模型、简历文案和品牌素材仍受 `NOTICE` 与各自权利约束，不能因为上游开源就视为自由素材。

## 当前吸收边界

现场核对日期：`2026-08-27`

| 项目 | 结果 |
| --- | --- |
| 本地已提交 HEAD | `9a3d695` (`docs: 新增眼球跟随 + intro3d 导出模型两篇视频教程`) |
| 已确认共同基线 | `9a3d695f55b423838c5c1e0b54065f3091458135`（本地 HEAD 本身位于上游历史中） |
| 上游 `main` HEAD | `c9a9fe373cde72c77ff7f2dabde17fb79dce89b3` |
| 上游领先 | 3 commits |
| 漂移路径 | `README.md`、`README.en.md`、`docs/preview.jpg` |
| 代码/依赖/GLB 漂移 | 未发现 |
| 当前决策 | `provenance_only`：已吸收新的上游仓库与预览地址认知；README 板式更新可后续按本项目品牌选择性改写，不直接覆盖 |

这张表只证明上述日期的只读审计结果。以后判断“是否最新”必须重新 fetch/查询，不能沿用旧 SHA。

### 2026-09-03 3D 公司贴纸与镜头适配

本轮按用户确认执行 `adapt`，不是整文件覆盖：

- Groland 使用官网当前声明的白底 favicon；火奴使用官网声明的青蓝圆形 `HN` favicon；六七个人 Agent Logo 复用左脸原 `BUILDER / sticker10` 曲面，右脸 `sticker1 / ANALYST` 及 Claude—`ANALYST`—Codex 组合保持不变。
- 火奴、SPES、Groland 保持固定物理位置，并按右侧履历节点切换焦点和视觉权重，不通过移动贴纸伪造接棒。
- browser67 现场滚动上游在线预览后，确认其镜头语义是“贴纸近景经历 → 末个履历节点完整清晰正脸 → Works 接管后转为后脑勺”。本项目没有上游“独立开发”那条额外履历，因此改用 Groland 离场到画廊钉住的交界段回到清晰正脸，再从 Works 横移段转向后脑勺，不复制上游个人内容或精确时序。
- `blender/sen.blend` 与 `web/public/models/me.glb` 同步维护；GLB 使用 `export_apply=True` 导出并核对贴纸曲面顶点，最终仍以 `DESIGN.md`、Blender 源和 GLB 运行产物共同约束当前结果。

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
