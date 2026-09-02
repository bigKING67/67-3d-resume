import fs from 'node:fs'
import path from 'node:path'

// Deterministic SVG design sources for the checked-in Agent WebP assets.
// This script intentionally renders one section cover plus six independent
// desktop/mobile project heroes. It does not create a Pi-67 Desktop umbrella page.
const outputDir = path.resolve('../tmp/imagegen/agent-boards')
fs.mkdirSync(outputDir, { recursive: true })

const colors = {
  dark: '#11161a',
  paper: '#f0ede5',
  paperBright: '#fffdf7',
  paperMuted: '#e3dfd6',
  ink: '#151a1f',
  text: '#596166',
  line: '#c6c2b9',
  teal: '#138f80',
  amber: '#b8792d',
  coral: '#b95e54',
}

const capabilities = [
  ['01', 'Pi SDK Agent', '已落地'],
  ['02', 'Team Agent', '已落地'],
  ['03', 'OpenViking', '受控验证'],
  ['04', 'Work & Chat', '产品规划'],
  ['05', 'Agent Governance', '底座已落地'],
  ['06', 'Deep Research', '产品规划'],
]

const projectHeroes = [
  {
    slug: 'pi-sdk-agent',
    title: 'Pi SDK Agent',
    eyebrow: '01 / REAL RUNTIME',
    status: '已落地',
    summaryLines: ['真实 Pi SDK', '不是第二套 Agent Loop'],
    promise: '桌面负责交互、控制、观察与恢复；Pi 保留 Runtime 与 Session 真源。',
    promiseMobile: ['桌面负责交互、控制、观察与恢复', 'Pi 保留 Runtime 与 Session 真源'],
    steps: [['RESOURCE', '模型与能力'], ['RUNTIME', '真实执行'], ['SESSION', '继续工作']],
  },
  {
    slug: 'team-agent',
    title: 'Team Agent',
    eyebrow: '02 / DELEGATION',
    status: '已落地',
    summaryLines: ['一个人带领', '一支 Agent 团队'],
    promise: '拆分、并行、接力与收口都有明确责任，不是多开几个聊天窗口。',
    promiseMobile: ['拆分、并行、接力与收口都有明确责任', '不是多开几个聊天窗口'],
    steps: [['PLAN', '明确边界'], ['DELEGATE', '并行执行'], ['CLOSEOUT', '复核收口']],
  },
  {
    slug: 'openviking',
    title: 'OpenViking',
    eyebrow: '03 / MEMORY',
    status: '受控验证',
    summaryLines: ['记忆有边界', '经验才会流动'],
    promise: '私人记忆保持私有；可共享经验先经过脱敏、审核与发布。',
    promiseMobile: ['私人记忆保持私有', '可共享经验先经过脱敏、审核与发布'],
    steps: [['PRIVATE', '个人记忆'], ['CANDIDATE', '经验候选'], ['PUBLISH', '组织复用']],
  },
  {
    slug: 'work-chat',
    title: 'Work & Chat',
    eyebrow: '04 / COLLABORATION',
    status: '产品规划',
    summaryLines: ['对话不止聊天', '直接进入工作'],
    promise: '人、任务、Agent 与产物回到同一协作语境，决策不会散落。',
    promiseMobile: ['人、任务、Agent 与产物回到同一协作语境', '决策不会散落'],
    steps: [['DISCUSS', '提出问题'], ['WORK', '执行任务'], ['RETURN', '回流产物']],
  },
  {
    slug: 'agent-governance',
    title: 'Agent Governance',
    eyebrow: '05 / GOVERNANCE',
    status: '底座已落地',
    summaryLines: ['能力越强', '边界越要清楚'],
    promise: '身份、权限、来源、审计、诊断与回滚成为产品本身。',
    promiseMobile: ['身份、权限、来源、审计、诊断与回滚', '成为产品本身'],
    steps: [['IDENTITY', '谁在发起'], ['POLICY', '为何允许'], ['RECEIPT', '如何恢复']],
  },
  {
    slug: 'deep-research',
    title: 'Deep Research',
    eyebrow: '06 / RESEARCH',
    status: '产品规划',
    summaryLines: ['先审计划', '再投入研究'],
    promise: '复杂问题被组织成可审查、可复核、可继续编辑的研究工程。',
    promiseMobile: ['复杂问题被组织成可审查、可复核', '可继续编辑的研究工程'],
    steps: [['PLAN', '范围与时点'], ['EVIDENCE', '并行取证'], ['REVIEW', '独立复核']],
  },
]

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const text = (x, y, value, size, color = colors.ink, weight = 500, anchor = 'start') =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="Arial, PingFang SC, Microsoft YaHei, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${escapeXml(value)}</text>`

const multiline = (x, y, lines, size, color = colors.ink, weight = 500, gap = 1.36) =>
  lines.map((line, index) => text(x, y + index * size * gap, line, size, color, weight)).join('')

const defs = `
  <defs>
    <filter id="noise" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="2" seed="67" result="grain"/>
      <feColorMatrix in="grain" type="saturate" values="0" result="mono"/>
      <feComponentTransfer in="mono" result="faded"><feFuncA type="table" tableValues="0 .05"/></feComponentTransfer>
      <feBlend in="SourceGraphic" in2="faded" mode="multiply"/>
    </filter>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000" flood-opacity=".28"/>
    </filter>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="#657076"/>
    </marker>
  </defs>`

function svg(width, height, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${defs}
    <rect width="${width}" height="${height}" fill="${colors.dark}"/>
    ${content}
  </svg>`
}

function boardShell(width, height, eyebrow, title, body, footer = 'SYSTEM MODEL · FACTS AND BOUNDARIES · NOT A LIVE SCREENSHOT') {
  const inset = width >= 1400 ? 56 : 34
  const radius = width >= 1400 ? 38 : 28
  const headerX = inset + (width >= 1400 ? 58 : 38)
  const headerY = inset + (width >= 1400 ? 60 : 50)
  return svg(width, height, `
    <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="${radius}" fill="${colors.paper}" filter="url(#shadow)"/>
    <g filter="url(#noise)">
      <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="${radius}" fill="${colors.paper}"/>
      ${text(headerX, headerY, eyebrow, width >= 1400 ? 19 : 16, '#687075', 760)}
      ${text(headerX, headerY + (width >= 1400 ? 48 : 40), title, width >= 1400 ? 38 : 30, colors.ink, 780)}
      <rect x="${width - headerX - 84}" y="${headerY - 10}" width="84" height="8" rx="4" fill="${colors.teal}"/>
      <path d="M${headerX} ${headerY + (width >= 1400 ? 76 : 64)} H${width - headerX}" stroke="${colors.line}"/>
      ${body}
      ${text(headerX, height - inset - 30, footer, width >= 1400 ? 13 : 11, '#747b7e', 650)}
    </g>`)
}

function cover() {
  const rows = capabilities.map(([no, name, state], index) => {
    const x = index < 3 ? 108 : 494
    const y = 228 + (index % 3) * 118
    return `<rect x="${x}" y="${y}" width="342" height="86" rx="18" fill="${index % 2 ? colors.paperMuted : colors.paperBright}" stroke="${colors.line}"/>
      ${text(x + 24, y + 34, no, 16, colors.teal, 800)}
      ${text(x + 72, y + 34, name, 23, colors.ink, 760)}
      ${text(x + 72, y + 64, state, 15, colors.text, 600)}`
  }).join('')
  return boardShell(960, 640, 'AI TEAM AGENT / 06 CAPABILITIES', '工作会接力，经验会流动', `
    ${rows}
    <path d="M836 263 H874 V502 H836" fill="none" stroke="${colors.teal}" stroke-width="4"/>
    ${text(866, 551, 'WORK', 15, colors.teal, 800, 'end')}
    ${text(866, 575, 'EXPERIENCE', 15, colors.ink, 800, 'end')}
  `, 'LOCAL-FIRST · REAL PI SDK · GOVERNED BY DEFAULT')
}

function projectBanner(project) {
  const statusColor = project.status.includes('规划')
    ? colors.coral
    : project.status.includes('验证') || project.status.includes('底座')
      ? colors.amber
      : colors.teal
  const cards = project.steps.map(([name, sub], index) => {
    const x = 1080 + index * 386
    return `<rect x="${x}" y="188" width="346" height="190" rx="24" fill="${index === 1 ? colors.paperMuted : colors.paperBright}" stroke="${index === 2 ? statusColor : colors.line}" stroke-width="${index === 2 ? 3 : 1.5}"/>
      ${text(x + 34, 246, `0${index + 1}`, 18, statusColor, 800)}
      ${text(x + 34, 294, name, 28, colors.ink, 800)}
      ${text(x + 34, 336, sub, 20, colors.text, 520)}
      ${index < project.steps.length - 1 ? `<path d="M${x + 346} 283 H${x + 374}" stroke="#657076" stroke-width="3" marker-end="url(#arrow)"/>` : ''}`
  }).join('')
  return svg(2400, 632, `
    <rect x="42" y="38" width="2316" height="556" rx="38" fill="${colors.paper}" filter="url(#shadow)"/>
    <g filter="url(#noise)">
      <rect x="42" y="38" width="2316" height="556" rx="38" fill="${colors.paper}"/>
      ${text(112, 120, `AI TEAM AGENT / ${project.eyebrow}`, 20, '#687075', 760)}
      ${text(112, 176, project.title, 30, statusColor, 780)}
      ${multiline(112, 246, project.summaryLines, 44, colors.ink, 780, 1.24)}
      ${text(112, 382, project.promise, 21, colors.text, 540)}
      <rect x="112" y="430" width="154" height="42" rx="21" fill="${statusColor}"/>
      ${text(189, 458, project.status, 16, '#fff', 760, 'middle')}
      ${cards}
      ${text(1080, 448, 'SYSTEM MODEL', 16, statusColor, 800)}
      ${text(112, 548, 'AI TEAM AGENT · PRODUCT SYSTEM · NOT A LIVE SCREENSHOT', 13, '#747b7e', 650)}
    </g>`)
}

function projectMobileHero(project) {
  const statusColor = project.status.includes('规划')
    ? colors.coral
    : project.status.includes('验证') || project.status.includes('底座')
      ? colors.amber
      : colors.teal
  const cards = project.steps.map(([name, sub], index) => {
    const y = 494 + index * 112
    return `<rect x="86" y="${y}" width="788" height="88" rx="20" fill="${index === 1 ? colors.paperMuted : colors.paperBright}" stroke="${index === 2 ? statusColor : colors.line}" stroke-width="${index === 2 ? 3 : 1.5}"/>
      ${text(118, y + 36, `0${index + 1}`, 17, statusColor, 800)}
      ${text(182, y + 36, name, 24, colors.ink, 800)}
      ${text(182, y + 66, sub, 18, colors.text, 520)}`
  }).join('')
  return boardShell(960, 960, `AI TEAM AGENT / ${project.eyebrow}`, project.title, `
    ${multiline(86, 226, project.summaryLines, 45, colors.ink, 780, 1.2)}
    ${multiline(86, 354, project.promiseMobile, 19, colors.text, 560, 1.4)}
    <rect x="86" y="412" width="174" height="42" rx="21" fill="${statusColor}"/>
    ${text(173, 440, project.status, 16, '#fff', 760, 'middle')}
    ${cards}
  `, 'PRODUCT SYSTEM · NOT A LIVE SCREENSHOT')
}

const files = new Map([
  ['cover.svg', cover()],
  ...projectHeroes.flatMap((project) => [
    [`${project.slug}-banner.svg`, projectBanner(project)],
    [`${project.slug}-mobile.svg`, projectMobileHero(project)],
  ]),
])

for (const [name, source] of files) {
  fs.writeFileSync(path.join(outputDir, name), source)
}

console.log(JSON.stringify({ outputDir, files: [...files.keys()] }, null, 2))
