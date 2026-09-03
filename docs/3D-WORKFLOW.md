---
schema: resume-3d-workflow-v1
status: enforced
last_verified: 2026-09-02
authority: AGENTS.md + DESIGN.md
---

# 3D 模型、贴纸与场景工作流

本文把不同 3D 任务路由到正确的源文件、参考教程和验收步骤。教程解释机制，`AGENTS.md`、`DESIGN.md`、当前 Blender / GLB / TypeScript 源码和真实运行画面才是本项目权威。

## 任务路由

| 要做的事 | 先看哪里 | 主要修改 | 必须守住 |
| --- | --- | --- | --- |
| 换人物或重新准备模型 | [`intro3d 处理模型教程`](../tutor/intro3d处理模型教程/intro3d处理模型教程.md) | `blender/sen.blend`、`web/public/models/me.glb` | 相机、动画、眼睛、焦点锚点和节点命名 |
| 新增或调整贴纸 | [`贴纸教程`](../tutor/贴纸教程/贴纸教程.md) + `DESIGN.md` 贴纸规则 | Blender 贴纸面片、atlas / 图片、GLB | 一品牌一枚、透明边缘、曲面顶点、近侧可见 |
| 修改眼睛跟随 | [`眼球教程`](../tutor/眼球教程/眼球教程.md) | Blender 眼睛节点、`web/src/scene/Scene.tsx` | 当前眼睛网格命名、视线方向、桌面/窄屏行为 |
| 改相机、景深、Bloom、灯光或背景 | `DESIGN.md` 运动与构图、当前 `Scene.tsx` / `Env.tsx` | Web 运行参数，必要时同步 Blender 相机 | 滚动叙事、可读性、Reduced Motion 边界、真实浏览器验证 |
| 改履历焦点或条数 | `web/src/data/focusPoints.ts` 与 `Resume.tsx` | 焦点清单、履历数据，必要时 Blender empties | 焦点顺序、数量、滚动帧段和 GLB 节点一致 |
| 对照上游 3D 格式或参数 | `UPSTREAM.md` | 仓库外临时参考，再写回本项目源 | 先定义参考角色，不覆盖个人内容或当前权威 |

[`CLAUDE.md`](../CLAUDE.md) 可帮助定位上游代码结构和 Scene 参数，但它是技术参考，不自动证明当前节点、版本或运行行为。

## 双源合同

`blender/sen.blend` 是可编辑源，`web/public/models/me.glb` 是浏览器运行产物。贴纸、几何、材质、相机、动画、眼睛、焦点或对象变换的完整交付必须同步两者。

- 只改 GLB：只能标记 `PARTIAL / Blender 源未同步`。
- 只改 Blend：浏览器仍使用旧 GLB，不能标记运行完成。
- 重新打开 Blender 并导出后，必须核对节点、网格、材质、动画、嵌入图片、对象变换和贴纸曲面顶点。
- 更新 GLB 后提高 `web/src/scene/Scene.tsx` 的模型查询参数，使旧缓存失效。

## 贴纸与 Shrinkwrap

- 贴纸面片必须保留贴合脸部的曲面顶点。
- 如果重新使用 `Shrinkwrap`，导出 GLB 时启用 **Apply Modifiers**；自动化导出对应 `export_apply=True`。
- 也可以先可靠烘焙结果再移除 modifier，但必须重新检查导出的顶点，而不是只看 Blender 视口。
- 重点检查平面穿脸、远侧遮挡、镜像、透明发灰、白晕、边缘裁切和景深下消失。
- 外部品牌按 `DESIGN.md` 使用官方或获准素材；个人表达型贴纸可以保留白色模切边。

## 相机与焦点

- GLB 自带相机动画 `CameraAction`；不要无故替换或重命名。
- `web/src/data/focusPoints.ts` 是履历焦点顺序真源，`Scene.tsx` 与 `Resume.tsx` 共同消费。
- 修改履历条数时，同时核对焦点清单、GLB empties 和滚动帧段。
- 贴纸验收不能只看对象存在、UV 或单一定格帧；至少覆盖两个桌面滚动节点和一个约 390px 的窄屏节点。
- Claude / ChatGPT 等角色节点贴纸按 `DESIGN.md` 的指定帧段和构图合同验收。

## 导出前检查

1. 保存 `blender/sen.blend`，确认编辑对象和依赖图更新完成。
2. 检查相机、`CameraAction`、眼睛、焦点 empties、人物、贴纸和材质命名。
3. 检查贴纸面片曲率、法线、透明度、正反面和遮挡关系。
4. 确认所有运行需要的图片嵌入 GLB，且没有意外带入临时资产。
5. 导出时应用需要烘焙的 modifier；不要默默输出与 Blender 视口不同的平面。

## 导出后结构检查

1. 对比改前 / 改后 GLB 的节点、网格、材质、动画和嵌入图片清单。
2. 确认改动只落在授权范围，没有意外删除相机、眼睛或焦点对象。
3. 记录 Blend 与 GLB 的 SHA-256；哈希只证明文件身份，不证明视觉正确。
4. 提高模型缓存版本并运行 TypeScript / lint / build 检查。

## 真实页面验收

- 使用 browser67 的独立 managed Agent Window，不采用或关闭用户普通页签。
- 验证桌面首屏、至少两个受影响滚动节点和约 390px 窄视口。
- 检查 `visibilityState`、动画/相机推进和 DOM / 3D 状态一致；后台 hidden 页面的陈旧画面标记 `INVALID SAMPLE`。
- 核对人物构图、贴纸可见性、边缘、镜像、穿插、景深、履历可读性和横向溢出。
- 运行页面、截图、静态投影、GLB 结构和构建成功是不同证据层，分别报告。

## 上游参考与来源

需要临摹上游视觉格式时，可以把公开上游源码、GLB、Blender 文件和贴图下载到仓库外临时目录，提取 UV、尺寸、字重、描边、阴影和对象变换，再替换为本项目内容并写回双源。执行前按 `UPSTREAM.md` 记录参考角色；不复制上游个人文案、学校、项目、品牌或未获准资产。
