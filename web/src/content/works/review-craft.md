---
title: review-craft
year: 2026
role: AI Craft
tags: [证据, 审查]
link: https://github.com/bigKING67/review-craft
banner: ./works/craft/review-craft-banner.webp
bannerMobile: ./works/craft/review-craft-mobile.webp
---

Review Craft 不是给代码挑更多刺，而是把工程审查变成一套可核对的判断：范围有分母、发现能复现、整改按比例、交付有授权边界。

我把常见审查里混在一起的“浏览过、怀疑、证实、建议、修复”拆成不同状态，并让审查深度先服从任务承诺，而不是先套一份庞大报告。

## 先选对审查深度

小而完整的仓库、模块或 diff，默认走 bounded review：完整读取约定范围，输出经过验证的 findings，但不制造全仓权威评分。只有用户明确需要全仓覆盖、确定性评分或高保障证据时，才升级为 canonical review。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/review-craft-two-routes-mobile.webp" />
    <img src="./works/craft/review-craft-two-routes.webp" alt="Review Craft 先按任务承诺在 bounded review 与 canonical review 两条路线之间选择" />
  </picture>
  <figcaption><strong>系统示意</strong>：两条路线承诺的覆盖与证据深度不同；canonical review 是显式升级项，不是所有任务的默认模板。</figcaption>
</figure>

## 改变的不只是报告格式

旧式审查容易让语气代替严重度，让“看过一些文件”代替覆盖率，也让整改建议暗含执行授权。Review Craft 把这些模糊判断改成可检查的范围、验证和处置字段。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/review-craft-opinion-to-finding-mobile.webp" />
    <img src="./works/craft/review-craft-opinion-to-finding.webp" alt="Review Craft 把主观意见转换为范围清楚、验证充分、处置有边界的审查发现" />
  </picture>
  <figcaption><strong>系统示意</strong>：真正的价值变化不是发现更多问题，而是让每个结论都能说明范围、验证过程与下一步边界。</figcaption>
</figure>

## 发现怎样形成

审查先定义目标、边界与验收，再盘点代码、配置和依赖。候选项不会直接写进最终报告；它必须经过复现、反证与影响判断，才能升级为 finding。只有随后获得实现授权，整改和交付验证才会发生。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/review-craft-review-lifecycle-mobile.webp" />
    <img src="./works/craft/review-craft-review-lifecycle.webp" alt="Review Craft 从范围盘点、候选验证到结论交付的审查生命周期" />
  </picture>
  <figcaption><strong>系统示意</strong>：Scope、Inventory、Candidate、Validate、Finding 与 Delivery 各自承担不同判断，候选账本不等于已验证发现。</figcaption>
</figure>

## 一条 Finding 为什么站得住

一条 finding 必须能回到内容绑定的位置锚点，说明观察到什么、如何复现和反证、影响在什么条件下成立，以及结论的确定性。严重度与整改优先级分开写；`KEEP`、`FIX`、`DEFER`、`MEASURE` 也不会偷偷替用户扩大执行授权。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/review-craft-finding-anatomy-mobile.webp" />
    <img src="./works/craft/review-craft-finding-anatomy.webp" alt="Review Craft finding 合同包含位置锚点、观察、影响、确定性、处置和授权边界" />
  </picture>
  <figcaption><strong>系统示意</strong>：图中的 finding 是结构示例，不是某个目标仓库的真实漏洞；字段来自当前项目的审查合同。</figcaption>
</figure>

## 我负责的判断

- 把范围、清单、候选、验证、finding 与交付拆成可追踪状态。
- 让覆盖率分母与实际 inventory 一一对应，避免抽样被写成全量。
- 把严重度、整改优先级和执行授权分开，允许“当前实现值得保留”成为合格结论。
- 为需要高保障的任务保留固定基线、内容位置锚点与可重复验证路径。

## 边界

默认路径是只读审查。发现不自动授权修改、提交、推送或发布；小型 PR 和完全可读的小 diff 仍可以走宿主的轻量审查流程。没有发现可以是正确结果，但必须有覆盖与验证依据，而不是一句“看起来没问题”。
