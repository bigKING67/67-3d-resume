---
title: creative-craft
year: 2026
role: AI Craft
tags: [创意导演, 评估]
link: https://github.com/bigKING67/creative-craft
banner: ./works/craft/creative-craft-banner.webp
bannerMobile: ./works/craft/creative-craft-mobile.webp
---

Creative Craft 把生成式图像和视频从“多抽几次”变成一次有导演、有选择理由、能回到真实媒介检查的创意工作。

我把用途、受众、创意路线、生产提示和评估边界组织成 CRAFT 循环。重点不是替品味打分，而是把最难复用的判断留下来：为什么走这条路线、为什么放弃另外两条、成品还缺哪类证据。

## 先把抽卡改成导演

一句“做得高级一点”通常只能得到一组相似候选。Creative Craft 先固定用途、受众、媒介、比例和必须保留的信息，再用构图、叙事机制、材质、节奏与观看距离建立真正不同的路线。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/creative-craft-draw-to-direction-mobile.webp" />
    <img src="./works/craft/creative-craft-draw-to-direction.webp" alt="Creative Craft 把相似候选的随机抽取转换为不同创意路线、选择理由和目标化修正" />
  </picture>
  <figcaption><strong>系统示意</strong>：路线差异、选择理由和修正目标都变成可以讨论的内容，而不是继续抽取来掩盖方向不清。</figcaption>
</figure>

## 两种工作深度

不是每个创意任务都需要一套沉重档案。Quick Craft 是默认深度，适合在边界清楚时快速做对一次；只有协作规模、资产价值或可追溯要求提高时，才进入 Traceable Project，把 route ledger、淘汰原因、提示词、不变量和评估证据留成项目资产。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/creative-craft-two-depths-mobile.webp" />
    <img src="./works/craft/creative-craft-two-depths.webp" alt="Creative Craft 根据任务价值与可追溯需求在 Quick Craft 和 Traceable Project 之间选择" />
  </picture>
  <figcaption><strong>系统示意</strong>：工作深度由任务价值、协作成本和追溯要求决定；Traceable Project 是显式选择，不是默认增加流程。</figcaption>
</figure>

## 路线必须真的不同

项目内置的虚构 `premium-haircare-launch` 示例给同一 brief 提出三条路线：用运动本身证明作用的 **Motion Is Proof**、克制抬升的 **The Quiet Lift**、以及镜像叙事的 **Before the Mirror Notices**。它们的区别发生在创意机制，而不是把同一构图换三种颜色。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/creative-craft-three-routes-mobile.webp" />
    <img src="./works/craft/creative-craft-three-routes.webp" alt="Creative Craft 虚构示例中的三条创意路线采用运动证明、克制抬升和镜像叙事三种机制" />
  </picture>
  <figcaption><strong>虚构案例示意</strong>：当前选择 Motion Is Proof，并保留 The Quiet Lift 做受控测试；这是方向阶段记录，不是品牌真实 campaign、真实生成图或投放效果。</figcaption>
</figure>

## CRAFT 是怎样循环的

`Context → Routes → Art direction → Fabrication → Testing` 是当前方法主干。交付把选中方向变成可用资产与说明；学习则把失败路线、局部修正和判断依据送回下一轮，而不是把结果留在一次性聊天里。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/creative-craft-craft-loop-mobile.webp" />
    <img src="./works/craft/creative-craft-craft-loop.webp" alt="Creative Craft 由 Context、Routes、Art direction、Fabrication 与 Testing 形成创意判断循环" />
  </picture>
  <figcaption><strong>系统示意</strong>：当前 CRAFT 循环按项目事实绘制；Delivery 与 Learning 围绕循环发生，不被伪装成两个额外步骤。</figcaption>
</figure>

## 评分约束方向，不伪装成效果

虚构示例在方向阶段得到 `88.5` 分，证据覆盖 `100%`、证据强度 `76%`，置信度为 `MIXED`；但它没有观察到真实模型输出。因此能做的结论是准备选中路线的 prompts、保留一条受控测试路线，而不是宣称画面质量或 campaign 效果已经成立。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/creative-craft-direction-evaluation-mobile.webp" />
    <img src="./works/craft/creative-craft-direction-evaluation.webp" alt="Creative Craft 虚构示例的方向评分、证据覆盖、证据强度、置信度和未观察实际输出状态" />
  </picture>
  <figcaption><strong>虚构评估产物</strong>：数字来自项目内置 fixture，只用于展示方向阶段的评估合同；actual output: not observed 明确阻止它被误读为真实成品或经营结果。</figcaption>
</figure>

## 我负责的判断

- 把模糊 brief 转成用途、受众、媒介、比例、必留内容和禁止项。
- 要求候选路线在创意机制上真正不同，并记录选择与淘汰理由。
- 把选中路线写成生产级 prompt，同时保护构图、信息层级等不变量。
- 把初稿带回目标尺寸检查，只对明确问题做目标化修正。

## 边界

Creative Craft 负责准备与验收生成任务，不把路线建议当作已经生成的资产，也不默认联网或产生模型费用。付费生成、上传输入图和写入正式资产目录仍分别受用户授权约束。品味体现在导演与取舍，不在手气。
