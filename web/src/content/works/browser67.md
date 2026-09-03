---
title: browser67
year: 2026
role: 真实浏览器 MCP
tags: [Chrome, Edge, MCP, JS reverse]
link: https://github.com/bigKING67/browser67
banner: ./works/craft/browser67-banner.webp
bannerMobile: ./works/craft/browser67-mobile.webp
---

给 Agent 和开发者工作流用的真实 Chrome / Edge Profile 运行时。它保留已经获准使用的登录态，同时把浏览器身份、页签所有权、焦点、证据和任务收尾做成显式合同。价值不只是“会点页面”，而是知道正在操作谁的哪一页、拿到了哪一层证据，以及怎样不误伤用户现场。

## 目标不是一个 URL

相同 URL 可以同时存在于不同 Profile、账号和窗口。browser67 用 `(browser_instance_id, tab_id)` 锁定精确目标；多个实例并存却没有明确选择时直接 fail closed，不靠 first、latest 或当前焦点猜测。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-target-identity-mobile.webp" />
    <img src="./works/craft/browser67-target-identity.webp" alt="browser67 用 browser_instance_id 与 tab_id 两个坐标定义精确浏览器目标" />
  </picture>
  <figcaption><strong>系统示意</strong>：Profile 级 Browser Instance 与页签 ID 共同形成目标身份；URL 只描述位置，不证明身份。</figcaption>
</figure>

## 页签也有所有权

Agent 自己创建的 managed tab、用户明确采用的 adopted tab 和普通用户页签拥有不同权限。managed tab 可以在任务结束时关闭；adopted tab 只释放代理授权、不关闭用户页面；普通页签默认只读，也不进入 Agent 的清理范围。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-tab-ownership-mobile.webp" />
    <img src="./works/craft/browser67-tab-ownership.webp" alt="managed、adopted 和普通用户页签三种所有权及各自的操作与收尾语义" />
  </picture>
  <figcaption><strong>系统示意</strong>：采用现有用户页签必须经过 `inspect_adoption → adopt_existing`；任务收尾释放 adopted，不替用户关闭页面。</figcaption>
</figure>

## 自动化住在独立 Agent Window

新任务默认创建独立 Agent Window，并以 `background_preferred / active:false` 运行。它仍属于同一个真实 Profile，因此保留获准的登录态；但普通导航、扫描和脚本不会占用用户当前窗口。只有 CAPTCHA 或原生输入等最后一公里操作才申请有时限的焦点租约。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-agent-window-mobile.webp" />
    <img src="./works/craft/browser67-agent-window.webp" alt="用户窗口与独立 Agent Window 在同一浏览器 Profile 下分离焦点和页签归属" />
  </picture>
  <figcaption><strong>系统示意</strong>：独立窗口隔离焦点与所有权，不伪装成第二个 Profile；用户手动移动 Agent 页签后，旧记录会被隔离而不是强行搬回。</figcaption>
</figure>

## 浏览器证据不是一个布尔值

页面 ready、DOM 可读、截图存在、下载文件可核验和生命周期完成分别回答不同问题。截图可能是陈旧样本，DOM 也不能证明视觉成立；文件下载成功不代表页面流程已安全收尾。browser67 让工具只声明实际拿到的证据层。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-evidence-layers-mobile.webp" />
    <img src="./works/craft/browser67-evidence-layers.webp" alt="页面 ready、DOM、截图、文件和生命周期五个互不替代的浏览器证据层" />
  </picture>
  <figcaption><strong>系统示意</strong>：这些层级可以组合，但单独一层不能升级成整项任务已经通过。</figcaption>
</figure>

## JS reverse 能回到请求发起者

同一运行时还提供独立的 `js-reverse` 工具面：从脚本与 frame 定位执行上下文，记录请求 initiator、参数、响应和必要 Hook，再输出本地 rebuild bundle。逆向与页面操作共享精确目标和生命周期，但保持不同工具职责。

<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-js-request-lineage-mobile.webp" />
    <img src="./works/craft/browser67-js-request-lineage.webp" alt="脚本、运行上下文、请求发起者、请求与本地重建包构成的 JS reverse 追踪链" />
  </picture>
  <figcaption><strong>系统示意</strong>：链路表达产品能力，不包含真实站点、账号、参数或凭据。</figcaption>
</figure>

## 收尾回执证明没有越界

任务结束按精确 `workspace_key / task_id` 执行 scoped finalize：关闭本任务拥有的页签，释放采用页签，把未完成的结构化 run 终止到可解释状态，同时保留普通用户页签。全局 close 或跨实例 cleanup 不是普通任务收尾。

<figure data-layout="inset">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/craft/browser67-scoped-finalize-mobile.webp" />
    <img src="./works/craft/browser67-scoped-finalize.webp" alt="browser67 scoped finalize 的 workspace、task、managed、adopted 与普通用户页签处理合同" />
  </picture>
  <figcaption><strong>系统示意</strong>：画面是生命周期合同样例，不是一次真实任务的计数回执；真实交付必须报告工具返回的 delivery summary。</figcaption>
</figure>

## 我的职责与边界

我把“真实登录态浏览器”从一组能调用的动作推进为可安装、可诊断、可恢复、可审计的运行时：Extension、Hub、MCP、Skill、下载上传、截图、原生输入和 JS reverse 共用明确身份。工具接不上、实例不唯一、页签归属不清或真实渲染无法安全取证时，结果就是 blocker / `UNVERIFIED`，不会静默换浏览器或猜目标。
