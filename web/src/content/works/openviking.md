---
title: OpenViking
year: 2026
role: 记忆产品设计、上下文边界与集成验证
tags: [Context, Memory, Experience]
link: https://github.com/bigKING67/pi-67-desktop
banner: ./works/agent/openviking-banner.webp
bannerMobile: ./works/agent/openviking-mobile.webp
---

它管理个人与企业的上下文、记忆和经验：私人记忆保持私有，值得复用的方法经过脱敏与审核后才成为组织经验，让知识流动而不是让隐私跟着流失。

> 当前成熟度：`受控验证`。已覆盖本地私有记忆、搜索、深读、忘记与经验候选链路；Windows、VPS 与生产规模同步仍未验证。

## 记忆不是聊天记录仓库

把所有对话塞进向量库既不等于有用的记忆，也会模糊身份与用途。OpenViking 在这套产品里承担唯一的 Context / Memory Owner：Pi JSONL 保留技术 Session 真源，OpenViking 负责可检索上下文、私人记忆和经验生命周期，两者不互相冒充。

用户不登录企业账号也可以使用自己的匿名本地记忆；只有绑定可信 Workspace 后，某次工作的结果才有资格形成企业经验候选。

## 经验怎样安全流动

`精确 Session 快照 + Memory Diff → 结果与适用范围 → 脱敏复核 → 企业审核 → 发布 → 搜索 / 深读 → 撤销`

“提交”只代表进入企业审核，绝不等于已经共享。被检索到的经验也只是上下文，不会因此自动获得工具权限。任何身份、权限、脱敏或完整性不确定的写入、同步与发布都会 fail closed。

## 企业里的复利

当经验可以被复核、发布、引用和撤销，一个人使用 Agent 时就不再只依赖自己的历史：他可以在权限范围内借用组织已经验证过的方法；同时，这次工作的新增经验也能回到候选池，等待成为下一次工作的起点。
