---
title: Pi SDK Agent
year: 2026
role: 产品定义、桌面架构与工程实现
tags: [Pi SDK, Electron, Local-first]
link: https://github.com/bigKING67/pi-67-desktop
banner: ./works/agent/pi-sdk-agent-banner.webp
bannerMobile: ./works/agent/pi-sdk-agent-mobile.webp
---

它把真实 Pi SDK 带进桌面工作区：用户继续拥有自己的模型、Provider、Skills、工具与 Session，Desktop 负责把执行过程变得可看、可控、可恢复，而不是再造一套不兼容的 Agent Loop。

> 当前成熟度：`已落地`。核心边界来自真实源码、自动化测试与 macOS 打包候选；不把这些证据写成 Windows 全量验收或企业生产部署。

## 为什么不是另一个聊天壳

多数 Agent 桌面端把自己变成新的运行时，结果是命令行与桌面各有一份配置、能力和历史。Pi SDK Agent 的判断相反：Pi 继续拥有模型与 Provider、资源加载、工具语义和 JSONL Session 真源；桌面只在受支持的接缝上提供 Workspace、任务控制、运行观察、审批、安全与故障恢复。

因此，同一份用户资源和同一条 Session 能够在不同入口继续工作。Desktop 关闭、重启或切换任务，也不需要把历史迁移到第二套私有格式。

## 系统如何工作

`Workspace → Pi ResourceLoader → Pi Runtime → JSONL Session → Desktop 观察与控制`

运行失败必须可见，破坏性动作必须经过边界检查，记忆服务不可用也不能阻断当前 Agent 完成任务。这里坚持 **Agent fail-open，Memory fail-closed**：执行可以降级继续，身份、权限或完整性不确定的记忆写入与同步则拒绝继续。

## 我做的与边界

我的职责覆盖产品定义、Electron 工作区、Pi 接入、任务生命周期、资源管理、可观察性、安全与恢复。`Pi-67 Desktop` 是这个系统的主要实现载体；它证明真实 Pi SDK 可以成为日常桌面工作方式，但不代表所有企业身份、协作和治理能力已经完成。
