---
title: reverse-craft
year: 2026
role: AI Craft
tags: [逆向, 取证, 可复现]
link: https://github.com/bigKING67/reverse-craft
banner: ./works/craft/reverse-craft-banner.webp
bannerMobile: ./works/craft/reverse-craft-mobile.webp
---

逆向不是一句“我看懂了”。Reverse Craft 是一个面向授权逆向、CTF、恶意样本分析、DFIR 与 CTI / OSINT 的证据优先工作台：先固定授权范围和对象身份，再按目标选择专业路线，最后把观察、推断、复现步骤和交付产物封成下一位研究者可以继续验证的 Case。

## 样本先拥有一张“护照”

开始分析之前，我先记录来源、SHA-256、大小、时间、授权范围和变更边界。原件默认复制进 Case artifact store，派生文件另存；不论后面换了多少工具，结论始终可以回到同一个对象。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/reverse-craft-artifact-passport-mobile.webp" />
    <img src="./works/craft/reverse-craft-artifact-passport.webp" alt="Reverse Craft artifact passport 记录样本来源、哈希、大小、授权范围和变更边界" />
  </picture>
  <figcaption><strong>系统示意</strong>：画面使用虚构 Case 与缩写哈希说明字段，不是实际恶意样本或真实目标回执。</figcaption>
</figure>

## 一个入口，多条专业路线

JS 签名、协议、二进制、移动端、云与身份、恶意样本、数字取证和威胁情报需要不同工具与安全边界。Router 只根据 artifact clues 加载命中的专业家族；没有明显路线就回到 R0 general reverse，而不是把某一种反编译器或浏览器 Hook 泛化到所有任务。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/reverse-craft-route-atlas-mobile.webp" />
    <img src="./works/craft/reverse-craft-route-atlas.webp" alt="Reverse Craft 从统一 Router 分流到二进制、Web 身份、移动端、取证、云、嵌入式与 CTI OSINT 家族" />
  </picture>
  <figcaption><strong>系统示意</strong>：route 只选择工作计划；只有实际进入对应工具链并得到证据，才算执行。</figcaption>
</figure>

## 结论强度跟着证据走

我把 `OBSERVED / INFERRED / HYPOTHESIZED / UNVERIFIED` 写进交付，而不是用更肯定的语气抹平差异。静态代码、动态行为、外部来源和本地复现分别保留；假设必须可证伪，未验证项必须继续可见。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/reverse-craft-certainty-ladder-mobile.webp" />
    <img src="./works/craft/reverse-craft-certainty-ladder.webp" alt="从观察事实到推断、可证伪假设和未验证状态的结论确定性阶梯" />
  </picture>
  <figcaption><strong>系统示意</strong>：确定性是证据属性，不是语言风格；不能把 mock、静态 gate 或 hosted smoke 升级成真实宿主结论。</figcaption>
</figure>

## 下一位研究者能重新跑通

“在我的机器上跑过一次”不等于可复现。Reverse Craft 要求从固定对象出发，保存关键输入和失败步骤，把解释收敛成最小 harness / decoder / detector / reproducer，再从干净或重置基线重新验证。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/reverse-craft-minimal-reproducer-mobile.webp" />
    <img src="./works/craft/reverse-craft-minimal-reproducer.webp" alt="固定原件、观察、假设、最小复现工具和干净基线重跑组成的可复现链" />
  </picture>
  <figcaption><strong>系统示意</strong>：结果、失败路径、输入身份和环境差异都属于复现交付，而不是只留一句结论。</figcaption>
</figure>

## Case 最后形成可核对清单

原件、证据、复现器和 finding 都绑定哈希；事件使用带尾锚的 hash chain 记录先后关系，seal receipt 固定逻辑状态。封存不会伪装成操作系统权限锁，也不会删除尚未解释的假设。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/reverse-craft-sealed-case-mobile.webp" />
    <img src="./works/craft/reverse-craft-sealed-case.webp" alt="Reverse Craft Case manifest 将原件、运行证据、复现器、finding 与事件尾锚一起封存" />
  </picture>
  <figcaption><strong>系统示意</strong>：文件名和缩写哈希均为说明性 fixture；真实 Case 必须由当前 artifact store 与 verifier 重新核对。</figcaption>
</figure>

## 我的职责与边界

我负责把通用逆向经验拆成可路由的专业模块、确定性 Case CLI、结构化证据合同和真实宿主验收边界。它只服务于明确授权的研究、比赛资产、样本分析与公开来源情报；主动探测、真实账号、外部目标、高风险样本运行和任何超出题面/合同的操作仍需要单独授权与隔离条件。
