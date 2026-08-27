import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './socialIconMap'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/bigKING67',
  },
  {
    id: 'email',
    label: 'luqing671997@foxmail.com',
    href: 'mailto:luqing671997@foxmail.com',
  },
  {
    id: 'blog',
    label: 'Blog',
    href: 'https://whois67.52671314.xyz/',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2016 – 2020',
        place: 'Hangzhou Normal University',
        role: 'B.A. in International Business · Alibaba Business School',
        points: [
          'GPA 3.47 / 4.0',
          'Statistics · consumer behavior · marketing · Python · structured databases',
        ],
      },
      {
        period: 'Tags',
        place: 'Data Analyst · AI Builder',
        role: 'Analyst · Builder',
        points: [
          'Dashboards · modeling · reports · data strategy',
          'AI DataHub · AI Agent · AI Craft · AI Builder',
        ],
      },
      {
        period: '2022 – 2023',
        place: 'Honu Data · Hangzhou',
        role: 'Agency side · where business thinking took root',
        points: [
          'Sports, skincare, food. 618 / D11, mix, growth — reading the business with data',
          '618 calls reused on D11 · related GMV ~+30% YoY',
          'Shapley / MTA / MMM · ROI ~+40% · conversion ~+30%',
          'Vendor seat: you don’t hold the wheel. The craft is syncing judgment to someone else’s next move',
        ],
      },
      {
        period: '2023 – 2025',
        place: 'SPES · Hangzhou',
        role: 'Brand side · insight → strategy → action, with the business',
        points: [
          'Seeding, creators, Douyin commerce — close loop from insight to a move on the floor',
          'Mix, D11, Douyin spill into Taobao search · new SKUs, price bands',
          'The Second Half arrived. The analyst job was about to be rewritten — I saw it here',
        ],
      },
      {
        period: '2025 – Now',
        place: 'Groland · Hangzhou',
        role: 'Data Analyst of the AGI era',
        groups: [
          {
            heading: 'Yipinhui · China Gas New Retail',
            sub: '2025.05 – 2025.12',
            items: [
              'After the brand seat: go find what analysis looks like in the AGI era',
              'Left Dec 2025 — not to quit analysis, to take it to the next stop',
            ],
          },
          {
            heading: 'Groland · AI scalp anti-aging',
            sub: '2025.12 – now',
            items: [
              'AI DataHub + AI team agent + AI Craft — the exploration made into daily tools',
              'Still the same job: grow the business. Builder, because the loop is faster',
            ],
            links: SOCIAL_LINKS,
          },
          {
            heading: 'luqing671997@foxmail.com',
            link: 'mailto:luqing671997@foxmail.com',
            sub: 'write me',
          },
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2016 – 2020',
        place: '杭州师范大学',
        role: '国际商务 · 本科 · 阿里巴巴商学院',
        points: ['GPA 3.47 / 4.0', '统计学 · 消费者行为 · 市场营销 · Python · 结构化数据库'],
      },
      {
        period: '标签',
        place: '数据分析师 · AI Builder',
        role: 'Analyst · Builder',
        points: [
          '可视化看板 · 挖掘建模 · 分析报告 · 数据策略',
          'AI Datahub · AI Agent · AI Craft · AI Builder',
        ],
      },
      {
        period: '2022 – 2023',
        place: '火奴数据 · 杭州',
        role: '乙方 · 业务思维是在这儿长出来的',
        points: [
          '运动、护肤、食品。618 / D11、组合、增长，用数据看生意',
          '618 的判断拿去打 D11 · 相关生意同比约 +30%',
          '夏普利 / MTA / MMM · ROI 约 +40% · 转化约 +30%',
          '服务方不握方向盘：要把判断对齐到对方的下一步，分析才落得下去',
        ],
      },
      {
        period: '2023 – 2025',
        place: 'SPES · 杭州',
        role: '甲方 · 洞察 → 策略 → 动作',
        points: [
          '种草、达人、抖音电商——跟业务把洞察做成落地动作',
          '投放组合、D11、抖音外溢淘宝搜索 · 新品与价格带',
          'AI 下半场到了。数据分析这份工也要被改写——是在这儿看见的',
        ],
      },
      {
        period: '2025 – 至今',
        place: 'Groland · 杭州',
        role: 'Data Analyst of the AGI era',
        groups: [
          {
            heading: '壹品慧 · 中国燃气新零售',
            sub: '2025.05 – 2025.12',
            items: [
              '从甲方再往前走：去探 AGI 时代的分析长什么样',
              '12 月离开——不是丢掉分析，是把分析带到下一站',
            ],
          },
          {
            heading: 'Groland · AI 科技头皮抗衰',
            sub: '2025.12 – 至今',
            items: [
              'AI DataHub + AI team agent + AI Craft——探索收成每天能用的东西',
              '还是同一件事：增长。做 Builder，因为闭环更快',
            ],
            links: SOCIAL_LINKS,
          },
          {
            heading: 'luqing671997@foxmail.com',
            link: 'mailto:luqing671997@foxmail.com',
            sub: '写信',
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
    <a
      className="about-link"
      href={group.link}
      target={group.link.startsWith('mailto:') ? undefined : '_blank'}
      rel={group.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
      {group.heading}
    </a>
  ) : (
    <span>{group.heading}</span>
  )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
