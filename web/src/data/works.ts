// 作品集数据（双语）。板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.tsx 仅负责渲染。

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  layout?: 'standard' | 'compact'
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '关键词',
    visitLabel: '打开仓库',
    detailPlaceholder: '作品介绍稍后补上。',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'datahub',
        no: '01',
        title: 'AI DataHub',
        tagline: 'Groland 的生意会说话',
        items: [
          {
            name: 'DataHub',
            meta: '活着的事实系统',
            slug: 'datahub',
            link: 'https://github.com/bigKING67/datahub',
          },
          { name: '全渠道交易底座', meta: '一个数，全公司认', slug: 'trade-base' },
          { name: 'AI 分析', meta: '人定问题，模型写判断', slug: 'ai-analysis' },
          { name: '内容资产', meta: '素材对得上投放', slug: 'content-assets' },
        ],
        footer: 'Vite · Rust · PostgreSQL · Prefect · 真柜台，不是演示',
      },
      {
        id: 'agent',
        no: '02',
        title: 'AI Team Agent',
        tagline: 'pi-67 · 同事明天要用',
        items: [
          {
            name: 'pi-67 Desktop',
            meta: '团队的 Agent 桌面',
            slug: 'pi-67-desktop',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'pi-67',
            meta: '工作台发行与治理',
            slug: 'pi-67',
            link: 'https://github.com/bigKING67/pi-67',
          },
          {
            name: 'browser67',
            meta: '真浏览器，真登录态',
            slug: 'browser67',
            link: 'https://github.com/bigKING67/browser67',
          },
        ],
      },
      {
        id: 'craft',
        no: '03',
        title: 'AI Craft',
        tagline: '品味是系统，不是口号',
        items: [
          {
            name: 'review-craft',
            meta: '审查要有证据',
            slug: 'review-craft',
            link: 'https://github.com/bigKING67/review-craft',
          },
          {
            name: 'design-craft',
            meta: '界面不许油腻',
            slug: 'design-craft',
            link: 'https://github.com/bigKING67/design-craft',
          },
          {
            name: 'creative-craft',
            meta: '创意有导演，不是抽卡',
            slug: 'creative-craft',
            link: 'https://github.com/bigKING67/creative-craft',
          },
          {
            name: 'commerce-growth-os',
            meta: '操盘手的共同语言',
            slug: 'commerce-growth-os',
            link: 'https://github.com/bigKING67/commerce-growth-os',
          },
        ],
        footer: 'GitHub / bigKING67 · 自用，也给团队用',
      },
      {
        id: 'trade',
        no: '04',
        title: 'Data Analysis',
        tagline: '没有这段，前面都是装饰',
        layout: 'compact',
        items: [
          { name: '抖音 Shapley 归因', meta: '24 万旅程 · 4 触点', slug: 'douyin-shapley' },
          { name: '全域电商 MMM', meta: '156 周 × 12 区域', slug: 'omnichannel-mmm' },
          { name: 'KANO 需求分析', meta: '问卷 / 评论分层', slug: 'kano-demand' },
          { name: '小红书内容机会地图', meta: '多模态排序 · 数据待授权', slug: 'xiaohongshu-content' },
          { name: '抖音素材诊断', meta: '真实 TOP1000 · 模型待训练', slug: 'douyin-creative' },
          { name: '大促规划与复盘', meta: '618 → D11', slug: 'promo-review' },
          { name: '0→1 新品', meta: '盈亏平衡 −30%', slug: 'new-product' },
        ],
        footer: '合成真值验证 · 授权数据审计 · 未通过门禁不输出结论',
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Keywords',
    visitLabel: 'Open repo',
    detailPlaceholder: 'Write-up coming.',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'datahub',
        no: '01',
        title: 'AI DataHub',
        tagline: 'Groland, speaking in numbers',
        items: [
          {
            name: 'DataHub',
            meta: 'a living fact system',
            slug: 'datahub',
            link: 'https://github.com/bigKING67/datahub',
          },
          { name: 'All-channel trade base', meta: 'one number the company keeps', slug: 'trade-base' },
          { name: 'AI analysis', meta: 'humans ask, models judge', slug: 'ai-analysis' },
          { name: 'Content assets', meta: 'creatives that match spend', slug: 'content-assets' },
        ],
        footer: 'Vite · Rust · PostgreSQL · Prefect · shop floor, not a demo',
      },
      {
        id: 'agent',
        no: '02',
        title: 'AI Team Agent',
        tagline: 'pi-67 · used tomorrow',
        items: [
          {
            name: 'pi-67 Desktop',
            meta: 'the team’s agent surface',
            slug: 'pi-67-desktop',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'pi-67',
            meta: 'workspace release & governance',
            slug: 'pi-67',
            link: 'https://github.com/bigKING67/pi-67',
          },
          {
            name: 'browser67',
            meta: 'real browser, real login',
            slug: 'browser67',
            link: 'https://github.com/bigKING67/browser67',
          },
        ],
      },
      {
        id: 'craft',
        no: '03',
        title: 'AI Craft',
        tagline: 'taste as a system',
        items: [
          {
            name: 'review-craft',
            meta: 'reviews need evidence',
            slug: 'review-craft',
            link: 'https://github.com/bigKING67/review-craft',
          },
          {
            name: 'design-craft',
            meta: 'no greasy UI',
            slug: 'design-craft',
            link: 'https://github.com/bigKING67/design-craft',
          },
          {
            name: 'creative-craft',
            meta: 'direction, not lottery',
            slug: 'creative-craft',
            link: 'https://github.com/bigKING67/creative-craft',
          },
          {
            name: 'commerce-growth-os',
            meta: 'a shared language for operators',
            slug: 'commerce-growth-os',
            link: 'https://github.com/bigKING67/commerce-growth-os',
          },
        ],
        footer: 'GitHub / bigKING67 · personal, then team',
      },
      {
        id: 'trade',
        no: '04',
        title: 'Data Analysis',
        tagline: 'without this, the rest is décor',
        layout: 'compact',
        items: [
          { name: 'Douyin Shapley attribution', meta: '240K journeys · 4 touchpoints', slug: 'douyin-shapley' },
          { name: 'Omnichannel ecommerce MMM', meta: '156 weeks × 12 geos', slug: 'omnichannel-mmm' },
          { name: 'KANO demand analysis', meta: 'survey / review separation', slug: 'kano-demand' },
          { name: 'Xiaohongshu opportunity map', meta: 'multimodal ranking · data pending', slug: 'xiaohongshu-content' },
          { name: 'Douyin creative diagnosis', meta: 'real Top 1000 · model pending', slug: 'douyin-creative' },
          { name: 'Promo planning & reviews', meta: '618 → D11', slug: 'promo-review' },
          { name: '0→1 launches', meta: 'payback −30%', slug: 'new-product' },
        ],
        footer: 'Synthetic truth tests · authorized audits · no claims before gates pass',
      },
    ],
  },
}

// 板块配图。原作者封面不复用；缺图时左栏走编号占位。
export const SECTION_COVERS: Record<string, string> = {
  trade: `${import.meta.env.BASE_URL}works/analysis/cover.webp`,
}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
