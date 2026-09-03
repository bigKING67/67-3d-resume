---
title: design-craft
year: 2026
role: AI Craft
tags: [前端, 视觉治理]
link: https://github.com/bigKING67/design-craft
banner: ./works/craft/design-craft-banner.webp
bannerMobile: ./works/craft/design-craft-mobile.webp
---

给 Agent 用的设计工程：把产品语境、视觉判断、设计系统、动效、前端实现和真实运行证据放进同一条工作流。它要解决的不是“怎样把页面装饰得更像设计稿”，而是怎样让一个产品在不同页面、状态和视口里仍然像同一个产品。

## 先确认谁有最终解释权

前端任务最容易在第一步走偏：没有看活页面，也没有找到项目自己的产品与视觉规则，就直接套通用审美。Design Craft 把现场运行、scoped 项目规则、`PRODUCT.md` 和 `DESIGN.md` 放在通用参考之前；参考可以帮助判断，但不能越过项目真相。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/design-craft-authority-order-mobile.webp" />
    <img src="./works/craft/design-craft-authority-order.webp" alt="Design Craft 从真实运行、项目规则、产品合同到视觉权威与外部参考的优先级阶梯" />
  </picture>
  <figcaption><strong>系统示意</strong>：根据当前 Design Craft 的 authority contract 绘制。越靠近真实项目和当前运行，越能改变最终设计判断。</figcaption>
</figure>

## 流程深度跟着影响范围走

改一句文案、修一个组件状态、重排一个页面和统一多页系统，不该支付同样的流程成本。任务先按 `micro / component / page / multi-page` 的真实范围路由；影响越深，才逐步增加响应式、性能、架构、真实浏览器和完整 system review 的证据承诺。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/design-craft-scope-routing-mobile.webp" />
    <img src="./works/craft/design-craft-scope-routing.webp" alt="Design Craft 按微调、组件、页面和系统四种影响范围递增验证深度" />
  </picture>
  <figcaption><strong>系统示意</strong>：范围决定 route，route 决定最低验证合同；路由成功只说明可以开始，不代表页面已经完成。</figcaption>
</figure>

## 外部参考先变成可审计输入

我需要参考时，不把第三方截图直接变成本项目的“视觉权威”。可变来源先固化为 Reference Card，记录来源、角色和边界；再按当前任务组成 Reference Pack，只提取可以迁移的参数、构图关系和判断依据，最后回到本项目自己的语言。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/design-craft-reference-contract-mobile.webp" />
    <img src="./works/craft/design-craft-reference-contract.webp" alt="外部视觉来源经过 Reference Card 和 Reference Pack 再进入项目决策的链路" />
  </picture>
  <figcaption><strong>系统示意</strong>：吸收的是规则和判断，不是第三方资产；参考不会建立第二套 `DESIGN.md`。</figcaption>
</figure>

## 为什么代码通过仍不是视觉通过

类型、lint、build 和源码合同能证明实现形状；真实浏览器才能证明目标页面、视口、状态和交互正在怎样工作；最终还需要人判断视觉层级、气质和整体体验是否成立。三层证据互相支持，但不能互相冒充。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/design-craft-runtime-proof-mobile.webp" />
    <img src="./works/craft/design-craft-runtime-proof.webp" alt="源码验证、真实浏览器运行和人工视觉判断三层证据之间的关系" />
  </picture>
  <figcaption><strong>系统示意</strong>：截图是运行样本，不是自动签字；缺少哪个证据层，就只声明已经验证的那一层。</figcaption>
</figure>

## 系统复核看的是组件家族

一个按钮在一个页面看起来正确，不代表同语义组件在 hover、focus、disabled、invalid、窄屏或 reduced motion 下仍然一致。Design Craft 的系统复核以组件家族为单位，把状态、主题、视口、输入方式、反馈和动效放进同一张覆盖矩阵。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/design-craft-system-review-matrix-mobile.webp" />
    <img src="./works/craft/design-craft-system-review-matrix.webp" alt="按钮、输入框、弹层和导航在多状态、多视口与输入方式下的系统复核矩阵" />
  </picture>
  <figcaption><strong>系统示意</strong>：矩阵表达需要一起复核的覆盖面，不是当前项目已经全部通过的测试回执。</figcaption>
</figure>

## 我的职责与边界

我负责把上游方法筛成适合实际开发的路线、合同、验证工具和项目治理规则，并持续用真实项目校准它。这份 3D 简历也遵循同一原则：已有画面性格高于通用模板，桌面与窄屏分别构图，源码通过和视觉通过分别取证。原生 iOS / Android 只在真实平台任务命中时加载，不把移动 Web 冒充原生产品。
