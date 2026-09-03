---
title: 示例作品 · Example Work
year: 2026
role: 设计 / 开发
tags: [互动项目, 示例标签]
link: https://example.com
---

> **这是一个作品详情模板。** 把本文件复制成 `src/content/works/<slug>.md`，其中
> `<slug>` 要与 `src/data/works.ts` 里某个作品 item 的 `slug` 一致，该作品点开后就会
> 渲染成完整详情；否则详情页显示统一占位。本文件 slug 为 `example`，不对应任何作品，
> 因此不会出现在线上——仅作参考。

## 小标题

正文支持标准 Markdown：**加粗**、*斜体*、[外链](https://example.com)，以及列表：

- 要点一
- 要点二
- 要点三

## 图片与视频

媒体放在 `public/works/<family>/` 下，用 `./works/...` 相对构建路径引用。简单图片可以
直接写 Markdown：

```md
![示例配图](./works/example/1.jpg)
```

需要独立移动构图与证据图注时使用 `figure / picture`：

```html
<figure data-layout="wide">
  <picture>
    <source media="(max-width: 640px)" srcset="./works/example/system-mobile.webp" />
    <img src="./works/example/system.webp" alt="准确描述画面内容" />
  </picture>
  <figcaption><strong>系统示意</strong>：说明来源与事实边界。</figcaption>
</figure>
```

完整规则见 `docs/WORKS-STORYTELLING.md`；新增或修改作品后运行
`npm run validate:works`。

---

frontmatter 可用字段（均可选）：

| 字段 | 说明 |
| --- | --- |
| `title` | 详情标题（缺省回退 works.js 里的作品名） |
| `banner` | 顶部 banner 图路径（如 `./works/family/project-banner.webp`；缺省用占位） |
| `bannerMobile` | 可选窄屏 Hero；缺省继续使用 `banner` |
| `year` | 年份 |
| `role` | 角色 / 担当 |
| `tags` | 标签数组，如 `[互动项目, 虎啸奖]` |
| `link` | 外链，渲染成「访问作品」按钮 |
