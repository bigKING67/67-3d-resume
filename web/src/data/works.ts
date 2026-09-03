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
            name: '业务看板',
            meta: '多渠道经营洞察',
            slug: 'trade-base',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: 'AI 内容中台',
            meta: '素材与直播协同',
            slug: 'content-assets',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: 'AI 分析报告',
            meta: '周期复盘与决策',
            slug: 'ai-analysis',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: '样品库存管理',
            meta: '流转全程可追踪',
            slug: 'sample-inventory',
            link: 'https://github.com/bigKING67/datahub',
          },
        ],
        footer: '统一业务事实 · 看清经营变化 · 让团队更快行动',
      },
      {
        id: 'agent',
        no: '02',
        title: 'AI Team Agent',
        tagline: '工作会接力，经验会流动',
        layout: 'compact',
        items: [
          {
            name: 'Pi SDK Agent',
            meta: '真 SDK，真执行',
            slug: 'pi-sdk-agent',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'Team Agent',
            meta: '任务会分工，也会接力',
            slug: 'team-agent',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'OpenViking',
            meta: '记忆有边界，经验可复用',
            slug: 'openviking',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'Work & Chat',
            meta: '工作与协作在一起',
            slug: 'work-chat',
          },
          {
            name: 'Agent Governance',
            meta: '权限、审计与回滚',
            slug: 'agent-governance',
            link: 'https://github.com/bigKING67/pi-67',
          },
          {
            name: 'Deep Research',
            meta: '复杂问题，证据化研究',
            slug: 'deep-research',
          },
        ],
        footer: '复杂任务能分工 · 团队经验可复用 · 协作过程有边界',
      },
      {
        id: 'craft',
        no: '03',
        title: 'AI Craft',
        tagline: '把判断做成系统',
        layout: 'compact',
        items: [
          {
            name: 'review-craft',
            meta: '审查要有证据',
            slug: 'review-craft',
            link: 'https://github.com/bigKING67/review-craft',
          },
          {
            name: 'design-craft',
            meta: '体验不靠感觉',
            slug: 'design-craft',
            link: 'https://github.com/bigKING67/design-craft',
          },
          {
            name: 'creative-craft',
            meta: '创意有导演',
            slug: 'creative-craft',
            link: 'https://github.com/bigKING67/creative-craft',
          },
          {
            name: 'browser67',
            meta: '真浏览器，真登录态',
            slug: 'browser67',
            link: 'https://github.com/bigKING67/browser67',
          },
          {
            name: 'reverse-craft',
            meta: '逆向结论可复现',
            slug: 'reverse-craft',
            link: 'https://github.com/bigKING67/reverse-craft',
          },
          {
            name: 'money-craft',
            meta: '投资判断有出处',
            slug: 'money-craft',
            link: 'https://github.com/bigKING67/money-craft',
          },
          {
            name: 'commerce-growth-os',
            meta: '操盘手的共同语言',
            slug: 'commerce-growth-os',
            link: 'https://github.com/bigKING67/commerce-growth-os',
          },
        ],
        footer: '专业判断可复用 · 复杂工作有标准 · 团队交付更稳定',
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
        footer: '看清问题 · 验证判断 · 把数据变成业务动作',
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
            name: 'Business dashboards',
            meta: 'multi-channel insights',
            slug: 'trade-base',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: 'AI content hub',
            meta: 'assets and live content',
            slug: 'content-assets',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: 'AI analysis reports',
            meta: 'reviews and decisions',
            slug: 'ai-analysis',
            link: 'https://github.com/bigKING67/datahub',
          },
          {
            name: 'Sample inventory',
            meta: 'end-to-end traceability',
            slug: 'sample-inventory',
            link: 'https://github.com/bigKING67/datahub',
          },
        ],
        footer: 'Unify business facts · see the business clearly · help teams act faster',
      },
      {
        id: 'agent',
        no: '02',
        title: 'AI Team Agent',
        tagline: 'Work moves. Experience compounds.',
        layout: 'compact',
        items: [
          {
            name: 'Pi SDK Agent',
            meta: 'real SDK, real execution',
            slug: 'pi-sdk-agent',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'Team Agent',
            meta: 'delegation with continuity',
            slug: 'team-agent',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'OpenViking',
            meta: 'bounded memory, reusable experience',
            slug: 'openviking',
            link: 'https://github.com/bigKING67/pi-67-desktop',
          },
          {
            name: 'Work & Chat',
            meta: 'work and collaboration together',
            slug: 'work-chat',
          },
          {
            name: 'Agent Governance',
            meta: 'permissions, audit & rollback',
            slug: 'agent-governance',
            link: 'https://github.com/bigKING67/pi-67',
          },
          {
            name: 'Deep Research',
            meta: 'evidence-led complex research',
            slug: 'deep-research',
          },
        ],
        footer: 'Delegate complex work · reuse team experience · keep collaboration bounded',
      },
      {
        id: 'craft',
        no: '03',
        title: 'AI Craft',
        tagline: 'Judgment, made systematic',
        layout: 'compact',
        items: [
          {
            name: 'review-craft',
            meta: 'reviews need evidence',
            slug: 'review-craft',
            link: 'https://github.com/bigKING67/review-craft',
          },
          {
            name: 'design-craft',
            meta: 'experience, not guesswork',
            slug: 'design-craft',
            link: 'https://github.com/bigKING67/design-craft',
          },
          {
            name: 'creative-craft',
            meta: 'creativity needs direction',
            slug: 'creative-craft',
            link: 'https://github.com/bigKING67/creative-craft',
          },
          {
            name: 'browser67',
            meta: 'real browser, real session',
            slug: 'browser67',
            link: 'https://github.com/bigKING67/browser67',
          },
          {
            name: 'reverse-craft',
            meta: 'reproducible reverse engineering',
            slug: 'reverse-craft',
            link: 'https://github.com/bigKING67/reverse-craft',
          },
          {
            name: 'money-craft',
            meta: 'investment judgments need sources',
            slug: 'money-craft',
            link: 'https://github.com/bigKING67/money-craft',
          },
          {
            name: 'commerce-growth-os',
            meta: 'a shared language for operators',
            slug: 'commerce-growth-os',
            link: 'https://github.com/bigKING67/commerce-growth-os',
          },
        ],
        footer: 'Reuse expert judgment · standardize complex work · make delivery more consistent',
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
        footer: 'See the problem · test the judgment · turn data into action',
      },
    ],
  },
}

// 板块配图。原作者封面不复用；缺图时左栏走编号占位。
export const SECTION_COVERS: Record<string, string> = {
  datahub: `${import.meta.env.BASE_URL}works/datahub/cover.webp`,
  agent: `${import.meta.env.BASE_URL}works/agent/cover.webp`,
  craft: `${import.meta.env.BASE_URL}works/craft/cover.webp`,
  trade: `${import.meta.env.BASE_URL}works/analysis/cover.webp`,
}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
