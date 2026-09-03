---
title: money-craft
year: 2026
role: AI Craft
tags: [投资研究, 证据, 估值]
link: https://github.com/bigKING67/money-craft
banner: ./works/craft/money-craft-banner.webp
bannerMobile: ./works/craft/money-craft-mobile.webp
---

面向全球市场的证据优先投资研究系统。Money Craft 不把结构化数据、搜索摘要或模型记忆当成正式披露，而是把证券身份、截止日、报告期、官方材料、财务勾稽、估值假设、反方证据和不可变归档组织成一条可审计研究链。

## 先固定“研究谁、截至何时”

公司名称会重名，同一公司可能多地上市，交易币种、报告币种和 share class 也可能不同。完整研究先生成 identity + as-of 合同；身份或财政报告期仍有歧义时列出候选并停止，而不是让数字先跑起来。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-identity-as-of-mobile.webp" />
    <img src="./works/craft/money-craft-identity-as-of.webp" alt="Money Craft research contract 固定证券身份、研究截止日、报告期、币种和 share class" />
  </picture>
  <figcaption><strong>系统示意</strong>：字段使用通用占位符，不包含实时证券价格或具体投资建议。</figcaption>
</figure>

## 官方材料始终是主真源

当地监管机构、交易所和发行人 / 基金管理人的正式披露拥有最高事实地位。Fuyao、yfinance 与 FRED / ALFRED 是结构化适配器，本地材料需要记录来源和哈希，搜索摘要只帮助定位原文；来源越方便，不代表权威越高。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-source-hierarchy-mobile.webp" />
    <img src="./works/craft/money-craft-source-hierarchy.webp" alt="官方披露、结构化数据适配器、本地材料和搜索定位构成的 Money Craft 来源层级" />
  </picture>
  <figcaption><strong>系统示意</strong>：Provider 不替代正式披露；没有当前来源时停止事实型判断，不补齐看似完整的数字。</figcaption>
</figure>

## 财务勾稽先于估值故事

关键财务项进入报告前先做 reconciliation：明确本期和比较期是原披露、重述还是可比估算，检查资产负债式与现金余额，Q2–Q4 还要验证累计值推导单季。推算值必须同时保留公式、输入、单位、容差和来源 ID。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-financial-reconciliation-mobile.webp" />
    <img src="./works/craft/money-craft-financial-reconciliation.webp" alt="资产负债勾稽、现金滚动和累计值推导单季三类财务对账关系" />
  </picture>
  <figcaption><strong>系统示意</strong>：图中只有口径关系，没有虚构任何公司数字；冲突必须留在 reconciliation artifact 里。</figcaption>
</figure>

## 事实不会自动变成 thesis

研究稿保存可核验事实、估值输入和计算；thesis 另行记录推断、可证伪假设、催化剂、反方证据、风险和下一次需要验证的事实。`OBSERVED / INFERRED / HYPOTHESIZED / UNVERIFIED` 不允许混写，筛选通过也不等于建议买入。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-fact-to-thesis-mobile.webp" />
    <img src="./works/craft/money-craft-fact-to-thesis.webp" alt="可核验事实经过推断与可证伪假设形成 thesis，并保留反方证据、风险与证伪条件" />
  </picture>
  <figcaption><strong>系统示意</strong>：signal 表示复核优先级，不是交易指令；系统本身不执行自动交易。</figcaption>
</figure>

## 研究是一条可恢复状态机

`plan` 只生成阶段、来源和准出合同；`init` 创建可恢复工作区；`collect` 是明确的 Provider 网络边界；正式材料通过 import 哈希绑定；`status` 离线重算缺口和审计；只有来源、reconciliation、report 与 thesis 门禁全部满足，`finalize` 才写完成收据。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-research-states-mobile.webp" />
    <img src="./works/craft/money-craft-research-states.webp" alt="Money Craft 从 plan、init、collect、import、status 到 finalize 的研究状态机" />
  </picture>
  <figcaption><strong>系统示意</strong>：计划存在、资料已采集、研究完成和正式归档是四种不同状态。</figcaption>
</figure>

## 展示稿与研究真源分层

最终 HTML / PDF 从已审计 Markdown 派生，负责响应式与离线阅读；source manifest、reconciliation、report audit、thesis audit、revision manifest 和 SHA-256 才负责证明看到的是同一份研究。展示稿可以重渲染，sealed revision 不应被渲染器改写。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/money-craft-immutable-report-mobile.webp" />
    <img src="./works/craft/money-craft-immutable-report.webp" alt="已审计 Markdown 真源派生离线 HTML PDF 并由不可变 revision、SHA-256 和 verifier 绑定" />
  </picture>
  <figcaption><strong>系统示意</strong>：rendition 是展示层，不是研究真源；正式档案必须由离线 verifier 重新核验。</figcaption>
</figure>

## 我的职责与边界

我负责把研究方法、Provider 适配、财务计算、论文追踪、审计、报告渲染和不可变归档做成可组合合同，并保持 Markdown 为真源。Money Craft 支持研究与理财决策，不访问账户、不自动下单、不替用户发布观点，也不把模型输出包装成确定收益；任何行情、政策和公司现状都必须按当前 as-of 重新核验。
