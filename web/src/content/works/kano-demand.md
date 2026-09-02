---
title: KANO 评论与需求分析
year: 2026
role: 方法纠偏、问卷建模与评论信号设计
tags: [KANO, 情感分析, VOC, 产品升级]
banner: ./works/analysis/kano-demand-banner.webp
bannerMobile: ./works/analysis/kano-demand-mobile.webp
---

产品升级最危险的捷径，是把一条自然评论硬猜成 KANO 的“正向问题 + 反向问题”答案，再输出一个看起来很专业的需求类别。

> **数据声明：**当前标准问卷和评论信号均为合成方法演示。正式 KANO 类别只来自成对问卷；自然评论只能输出 **Kano-inspired** 需求信号。

## 为什么要拆成两种模式

标准 KANO 需要用户分别回答“有这个功能怎样”和“没有这个功能怎样”，然后按 5 × 5 评价矩阵归入必备、期望、魅力、无差异、反向或可疑类别。普通电商评论没有这组成对反事实，不能冒充问卷。

![标准 KANO 与评论需求信号的边界](./works/analysis/kano-demand-value.webp)

因此我把系统拆成两条管线：Survey mode 输出正式类别和 Better / Worse 系数；Review mode 只做需求面识别、情感极性、问题严重度、正负提及不对称和证据置信度。

## 模型怎么工作

标准问卷部分覆盖 6 个头皮护理产品特征，每个特征 400 组成对回答，共 2,400 组。评论部分围绕同一套产品语言抽取 aspect，让 VOC 可以和问卷、产品路线图对齐，但不跨越证据边界。

![KANO 问卷与评论信号双管线](./works/analysis/kano-demand-system.webp)

## 方法验证与示例结果

KANO 评价矩阵的 25 种回答组合全部通过单元合同。合成问卷将头皮舒适感、按压泵稳定性识别为必备属性；清爽控油、蓬松表现识别为期望属性；留香体验、补充装识别为魅力属性。

![代表性功能的 Better 与 Worse 系数](./works/analysis/kano-demand-evidence.webp)

*例如按压泵稳定性的 Better 为 29.3%，Worse 为 −77.1%：做得更好未必制造惊喜，但做坏会显著损伤满意度，符合必备属性的产品决策含义。*

评论模式则只输出“泵头稳定性是 must-fix 候选”“补充装是 delighter 候选”这类需求信号。真实项目还需要授权评论、方面级标注、双人一致性检查，或直接补采标准 KANO 问卷后才能进入正式优先级。

## 我做的

纠正“评论等同 KANO 问卷”的方法错误，实现完整 5 × 5 评价矩阵、Better / Worse 计算、六特征合成问卷和评论信号合同，并把允许输出与禁止输出写进结果清单。
