---
title: Deep Research
year: 2026
role: 产品规划、研究工作流与证据合同
tags: [Research, Evidence, Multi-Agent]
banner: ./works/agent/deep-research-banner.webp
bannerMobile: ./works/agent/deep-research-mobile.webp
---

它把高不确定性问题组织成可审查的研究工程：先明确问题与时点，生成可编辑计划并等待确认，再并行收集证据、处理冲突、综合成稿并独立复核。

> 当前成熟度：`产品规划`。现有 Pi Runtime、Team Agent、浏览器和研究 Skills 是可复用底座；统一 Deep Research 产品面尚未完成。

## 不是把 Prompt 写得更长

复杂研究的成本来自范围漂移、来源失真、时效过期、证据冲突和未经确认的高成本搜索。Deep Research 首先把“研究什么、截至何时、怎样算完成、需要花多少成本”变成可编辑计划，并要求用户显式批准后再进入重执行阶段。

`问题与 as-of → 可编辑计划 → 人工批准 → Team Agent 并行取证 → 来源与冲突检查 → 综合成稿 → 独立复核 → 可继续编辑的产物`

## 研究如何复用整套系统

Pi 继续作为唯一 Agent Runtime 与 Session 真源；Team Agent 负责边界清晰的并行研究；浏览器与专业 Skills 获取和验证材料；OpenViking 保存私人上下文并形成经验候选；Governance 记录来源、权限、成本、运行和撤销边界。

Research 是一次提交时的正交意图，而不是第二套 Agent Loop。计划被批准以后，后续所有事实、推断、冲突和未验证项都要能回到对应来源与研究时点。

## 下一步

优先完成计划编辑与批准、来源账本、冲突视图、独立复核和可编辑交付物；在真实任务和成本回执出现以前，不承诺“自动研究质量”或生产级规模。
