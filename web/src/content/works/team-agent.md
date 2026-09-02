---
title: Team Agent
year: 2026
role: 产品定义、多 Agent 协作架构与工程实现
tags: [Multi-Agent, Pi Session, Delegation]
link: https://github.com/bigKING67/pi-67-desktop
banner: ./works/agent/team-agent-banner.webp
bannerMobile: ./works/agent/team-agent-mobile.webp
---

它让一个人真正带领一支 Agent 团队：复杂任务被拆给边界清晰的成员并行执行，父 Agent 负责接力、追问、转向、停止和最终收口，而不是让一个 Agent 假装扮演所有角色。

> 当前成熟度：`已落地`的是任务级 Team Agent；企业成员身份、跨人协作与独立 Git worktree 不在当前完成声明里。

## 从“多开几个对话”到团队工作

多个聊天窗口不会自动成为团队。Team Agent 需要知道每个成员为什么被创建、负责什么、使用哪个角色与模型、当前进行到哪里、结果要交回给谁，以及失败以后怎样恢复。

每个子 Agent 都是独立的 Pi JSONL Session，可以在前台或后台工作。父 Agent 保留总任务语境与收口责任，用户可以查看 roster、继续追问、转向或停止某个成员，而不必把整个任务一起中断。

## 接力如何发生

`明确目标 → 拆分边界 → 委派成员 → 并行执行 → 返回证据与产物 → 主 Agent 复核收口`

任务接力传递的是必要上下文和明确产物，不是无边界复制所有历史。一个成员的工具权限也不会因为被另一个 Agent 调用而自动扩大。

## 产品价值与边界

Team Agent 的价值不只是“更快”，而是让复杂工作拥有分工、责任与可见进度。当前实现解决的是一个人带领 Agent 团队；未来与 Work & Chat 连接后，才会进一步处理人与人之间的任务认领、评审、决策和交接。
