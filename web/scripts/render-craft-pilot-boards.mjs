import fs from 'node:fs'
import path from 'node:path'
import { card, colors, lines, pill, shell, text } from './craft-board-kit.mjs'

// Deterministic SVG sources for the two AI Craft content pilots. Precise text,
// scores and states stay in code instead of being delegated to an image model.
const outputDir = path.resolve('../tmp/imagegen/craft-pilot-boards')
fs.mkdirSync(outputDir, { recursive: true })

// V2 moves the pilots away from evenly weighted component grids. Each board has
// one dominant claim or artifact, with supporting facts arranged around it.

function reviewRoutesV2(mobile = false) {
  const accent = colors.review
  if (mobile) {
    const body = `
      ${text(76, 220, '路线由证据承诺决定，不由任务名字决定。', 22, colors.text, 560)}
      ${text(76, 306, '01', 96, '#ded9cf', 850)}
      ${text(222, 276, 'DEFAULT ROUTE', 14, accent, 800)}
      ${text(222, 324, 'Bounded Review', 34, colors.ink, 800)}
      ${lines(222, 370, ['范围可完整读取', '交付 findings', '不自动授权整改'], 21, colors.text, 590, 1.58)}
      ${pill(222, 520, 148, 'SMALL + COMPLETE', accent)}
      <path d="M76 592 H724" stroke="${colors.line}"/>
      ${card(76, 642, 648, 280, { fill: colors.paperMuted, stroke: '#b8b3aa', radius: 24 })}
      ${text(108, 688, 'CANONICAL REVIEW', 15, '#6d6873', 800)}
      ${text(108, 738, '只在高保障承诺下升级', 28, colors.ink, 760)}
      ${lines(108, 790, ['全仓 / diff / focus 明确覆盖', '固定清单、分母与基线', '确定性评分或高保障证据'], 20, colors.text, 580, 1.55)}
      ${pill(108, 860, 188, 'EXPLICIT OPT-IN', '#77727c')}
      ${text(76, 1002, 'SCOPE → ROUTE → EVIDENCE CONTRACT', 15, accent, 800)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'REVIEW CRAFT / ROUTING', title: '两条审查路线', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '路线由证据承诺决定，不由任务名字决定。', 25, colors.text, 540)}
    ${text(112, 438, '01', 176, '#ded9cf', 850)}
    ${text(330, 322, 'DEFAULT ROUTE', 16, accent, 800)}
    ${text(330, 388, 'Bounded Review', 48, colors.ink, 820)}
    ${lines(330, 448, ['范围可完整读取 · 输出 findings', '发现不自动授权整改'], 25, colors.text, 590, 1.55)}
    ${pill(330, 552, 176, 'SMALL + COMPLETE', accent)}
    <path d="M112 640 H964" stroke="${colors.line}" stroke-width="2"/>
    ${text(112, 688, 'SCOPE', 14, '#747b7e', 780)}
    ${text(234, 688, '目标 · 边界 · 验收', 19, colors.ink, 650)}
    <path d="M490 680 H602" stroke="#626b70" stroke-width="2.5" marker-end="url(#arrow)"/>
    ${text(638, 688, 'ROUTE', 14, '#747b7e', 780)}
    ${text(746, 688, '证据承诺', 19, colors.ink, 650)}
    ${card(1016, 278, 472, 428, { fill: colors.paperMuted, stroke: '#b8b3aa', radius: 28 })}
    ${text(1060, 332, 'CANONICAL REVIEW', 16, '#6d6873', 800)}
    ${text(1060, 390, '高保障才升级', 34, colors.ink, 780)}
    ${lines(1060, 456, ['全仓 / diff / focus 覆盖', '固定清单、分母与基线', '确定性评分或高保障证据'], 22, colors.text, 580, 1.65)}
    ${pill(1060, 622, 188, 'EXPLICIT OPT-IN', '#77727c')}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'REVIEW CRAFT / ROUTING', title: '两条路线，不同证据承诺', body })
}

function reviewValueV2(mobile = false) {
  const accent = colors.review
  if (mobile) {
    const body = `
      ${text(76, 220, '价值不是“更会挑错”，而是让结论可行动。', 22, colors.text, 560)}
      ${text(76, 332, '意见', 58, '#8b8f90', 780)}
      <path d="M234 314 H352" stroke="${accent}" stroke-width="5" marker-end="url(#arrow)"/>
      ${text(390, 332, 'Finding', 58, colors.ink, 820)}
      ${pill(76, 392, 168, 'OPINION', '#8e8982')}
      ${pill(390, 392, 184, 'ACTIONABLE', accent)}
      <path d="M76 494 H724" stroke="${colors.line}"/>
      ${card(76, 544, 648, 138, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
      ${text(108, 588, '语气', 15, '#747b7e', 760)}${text(238, 588, '→', 20, accent, 800)}${text(286, 588, '影响与触发条件', 23, colors.ink, 680)}
      ${text(108, 636, '“我觉得不对”', 18, colors.text, 560)}
      ${card(76, 706, 648, 138, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
      ${text(108, 750, '浏览', 15, '#747b7e', 760)}${text(238, 750, '→', 20, accent, 800)}${text(286, 750, '覆盖范围与分母', 23, colors.ink, 680)}
      ${text(108, 798, '“看过一些文件”', 18, colors.text, 560)}
      ${card(76, 868, 648, 138, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
      ${text(108, 912, '建议', 15, '#747b7e', 760)}${text(238, 912, '→', 20, accent, 800)}${text(286, 912, '处置与授权边界', 23, colors.ink, 680)}
      ${text(108, 960, '“顺手帮你改了”', 18, colors.text, 560)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'REVIEW CRAFT / VALUE', title: '把意见变成行动依据', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '价值不是“更会挑错”，而是让结论可复核、可排序、可行动。', 25, colors.text, 540)}
    ${text(112, 438, '意见', 106, '#8b8f90', 780)}
    <path d="M368 408 H548" stroke="${accent}" stroke-width="6" marker-end="url(#arrow)"/>
    ${text(608, 438, 'Finding', 106, colors.ink, 830)}
    ${pill(112, 490, 168, 'SUBJECTIVE', '#8e8982')}
    ${pill(608, 490, 194, 'ACTIONABLE', accent)}
    ${text(112, 640, '从“我觉得”到“证据说明”', 28, colors.ink, 720)}
    ${lines(112, 688, ['位置可追溯', '影响可解释', '边界可执行'], 21, colors.text, 590, 1.52)}
    <path d="M932 278 V708" stroke="${colors.line}" stroke-width="2"/>
    ${card(994, 294, 494, 124, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
    ${text(1030, 340, '语气', 15, '#747b7e', 760)}${text(1158, 340, '→', 21, accent, 800)}${text(1202, 340, '影响与触发条件', 23, colors.ink, 680)}
    ${text(1030, 382, '“我觉得不对”', 18, colors.text, 560)}
    ${card(994, 442, 494, 124, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
    ${text(1030, 488, '浏览', 15, '#747b7e', 760)}${text(1158, 488, '→', 21, accent, 800)}${text(1202, 488, '覆盖范围与分母', 23, colors.ink, 680)}
    ${text(1030, 530, '“看过一些文件”', 18, colors.text, 560)}
    ${card(994, 590, 494, 124, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
    ${text(1030, 636, '建议', 15, '#747b7e', 760)}${text(1158, 636, '→', 21, accent, 800)}${text(1202, 636, '处置与授权边界', 23, colors.ink, 680)}
    ${text(1030, 678, '“顺手帮你改了”', 18, colors.text, 560)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'REVIEW CRAFT / VALUE', title: '把主观意见变成行动依据', body })
}

function reviewLifecycleV2(mobile = false) {
  const accent = colors.review
  const steps = [
    ['01', 'Scope', '目标 · 边界 · 验收'],
    ['02', 'Inventory', '代码 · 配置 · 依赖'],
    ['03', 'Candidate', '待证实的问题'],
    ['04', 'Validate', '复现与反证'],
    ['05', 'Finding', '证据与确定性'],
    ['06', 'Delivery', '结论 · 交付'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '候选问题必须经过验证，才能进入结论。', 22, colors.text, 560)}
      ${steps.map(([no, label, detail], index) => {
        const y = 278 + index * 126
        const highlight = index === 3 || index === 4
        return `${text(76, y + 42, no, 18, highlight ? accent : '#7e8384', 800)}
          ${card(128, y, 596, 92, { fill: highlight ? colors.paperBright : colors.paperMuted, stroke: highlight ? accent : colors.line, strokeWidth: highlight ? 2.5 : 1.2, radius: 18 })}
          ${text(158, y + 38, label, 22, colors.ink, 760)}${text(158, y + 70, detail, 17, colors.text, 560)}
          ${index < steps.length - 1 ? `<path d="M426 ${y + 92} V${y + 122}" stroke="${highlight ? accent : '#777f82'}" stroke-width="2.5" marker-end="url(#arrow)"/>` : ''}`
      }).join('')}
      ${text(76, 1058, 'CANDIDATE ≠ FINDING ≠ FIXED', 18, accent, 820)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'REVIEW CRAFT / LIFECYCLE', title: '从范围到结论', body, mobile: true })
  }
  const xPositions = [112, 346, 580, 814, 1048, 1282]
  const body = `
    ${text(112, 248, '候选问题必须经过验证，才能进入结论；结论也不自动等于已整改。', 25, colors.text, 540)}
    <path d="M172 468 H1398" stroke="#777f82" stroke-width="3" marker-end="url(#arrow)"/>
    ${steps.map(([no, label, detail], index) => {
      const x = xPositions[index]
      const highlight = index === 3 || index === 4
      return `${text(x, 342, no, 18, highlight ? accent : '#7e8384', 800)}
        <circle cx="${x + 60}" cy="468" r="${highlight ? 31 : 23}" fill="${highlight ? accent : '#c5c0b6'}" stroke="${colors.paper}" stroke-width="8"/>
        ${card(x, 526, 194, 142, { fill: highlight ? colors.paperBright : colors.paperMuted, stroke: highlight ? accent : colors.line, strokeWidth: highlight ? 2.5 : 1.2, radius: 20 })}
        ${text(x + 24, 572, label, 21, colors.ink, 760)}${lines(x + 24, 610, detail.split(' · '), 17, colors.text, 560, 1.45)}`
    }).join('')}
    ${pill(112, 724, 306, 'CANDIDATE ≠ FINDING ≠ FIXED', accent)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'REVIEW CRAFT / LIFECYCLE', title: '审查是一条证据链', body })
}

function reviewFindingV2(mobile = false) {
  const accent = colors.review
  const fields = [
    ['ANCHOR', 'path/to/file.ts : 42–58'],
    ['OBSERVATION', '可复现行为 + 反证结果'],
    ['IMPACT', '影响范围与触发条件'],
    ['CERTAINTY', 'CONFIRMED / PROBABLE / OPEN'],
    ['DECISION', 'KEEP · FIX · DEFER · MEASURE'],
  ]
  if (mobile) {
    const body = `
      ${lines(76, 216, ['一条 Finding 是可核对的结论合同，', '不是一句强烈意见。'], 22, colors.text, 560, 1.45)}
      ${card(76, 304, 648, 674, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 26 })}
      ${text(112, 354, 'R-03', 17, accent, 820)}${pill(518, 326, 170, 'CONFIRMED', accent)}
      ${lines(112, 414, ['边界校验在错误', '层级失效'], 34, colors.ink, 800, 1.18)}
      <path d="M112 506 H688" stroke="${colors.line}"/>
      ${fields.map(([label, value], index) => {
        const y = 554 + index * 78
        return `${text(112, y, label, 12, '#747b7e', 780)}${text(278, y, value, 17, colors.ink, 650)}${index < 4 ? `<path d="M112 ${y + 31} H688" stroke="${colors.line}"/>` : ''}`
      }).join('')}
      ${text(76, 1034, 'FINDING ≠ AUTHORIZATION', 18, accent, 820)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'REVIEW CRAFT / FINDING', title: '一条结论如何站得住', body, mobile: true })
  }
  const body = `
    ${text(112, 248, 'Finding 是一份可核对的结论合同，不是一句强烈意见。', 25, colors.text, 540)}
    ${card(112, 300, 748, 444, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 356, 'FINDING / R-03', 17, accent, 820)}${pill(630, 326, 180, 'CONFIRMED', accent)}
    ${lines(158, 430, ['边界校验在错误', '层级失效'], 43, colors.ink, 820, 1.2)}
    <path d="M158 552 H814" stroke="${colors.line}"/>
    ${text(158, 598, 'OBSERVATION', 13, '#747b7e', 780)}
    ${lines(158, 638, ['可复现行为', '+ 反证结果'], 21, colors.ink, 650, 1.38)}
    ${text(458, 598, 'IMPACT', 13, '#747b7e', 780)}
    ${lines(458, 638, ['影响范围', '+ 触发条件'], 21, colors.ink, 650, 1.38)}
    ${text(994, 324, 'THE CONTRACT', 15, accent, 820)}
    ${fields.map(([label, value], index) => {
      const y = 384 + index * 72
      return `${text(994, y, label, 13, '#747b7e', 780)}${text(1160, y, value, 18, colors.ink, 650)}${index < 4 ? `<path d="M994 ${y + 28} H1488" stroke="${colors.line}"/>` : ''}`
    }).join('')}
    ${pill(994, 696, 242, 'FINDING ≠ AUTHORIZATION', colors.darkSoft)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'REVIEW CRAFT / FINDING CONTRACT', title: '一条 Finding 为什么站得住', body })
}

function creativeValueV2(mobile = false) {
  const accent = colors.creative
  if (mobile) {
    const body = `
      ${text(76, 220, '价值不在“多出几张图”，而在做出取舍。', 22, colors.text, 560)}
      ${card(76, 286, 648, 218, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
      ${text(108, 332, 'BEFORE / 抽卡', 15, '#7a7e7f', 800)}
      ${text(108, 386, '相似候选', 32, '#656b6d', 760)}
      ${lines(108, 430, ['同一构图换色', '选择理由缺席'], 19, colors.text, 560, 1.45)}
      <path d="M400 504 V562" stroke="${accent}" stroke-width="4" marker-end="url(#arrow)"/>
      ${card(76, 588, 648, 356, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 26 })}
      ${text(108, 636, 'AFTER / 方向', 15, accent, 800)}
      ${text(108, 694, '不同机制', 38, colors.ink, 820)}
      ${text(108, 742, '每条路线都回答“为什么”。', 20, colors.text, 560)}
      ${pill(108, 792, 152, 'DISTINCT', accent)}
      ${pill(274, 792, 160, 'SELECTED', colors.violet)}
      ${pill(448, 792, 174, 'TRACEABLE', colors.darkSoft)}
      ${text(108, 884, '路线 · 理由 · 目标化修正', 22, colors.ink, 690)}
      ${text(76, 1022, 'MORE IMAGES ≠ MORE DIRECTION', 17, accent, 820)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'CREATIVE CRAFT / VALUE', title: '从抽卡到方向', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '价值不在“多出几张图”，而在形成可选择、可修正的创意方向。', 25, colors.text, 540)}
    ${card(112, 326, 422, 352, { fill: colors.paperMuted, stroke: colors.line, radius: 26 })}
    ${text(154, 378, 'BEFORE / 抽卡', 16, '#7a7e7f', 800)}
    ${text(154, 448, '相似候选', 42, '#656b6d', 780)}
    ${lines(154, 510, ['同一构图换色', '选择理由缺席', '修正方向模糊'], 22, colors.text, 560, 1.55)}
    <path d="M548 502 H654" stroke="${accent}" stroke-width="5" marker-end="url(#arrow)"/>
    ${card(680, 288, 808, 428, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 30 })}
    ${text(728, 348, 'AFTER / 方向', 16, accent, 800)}
    ${text(728, 426, '不同机制', 56, colors.ink, 830)}
    ${text(728, 474, '每条路线都回答“为什么”。', 23, colors.text, 560)}
    ${pill(728, 530, 152, 'DISTINCT', accent)}
    ${pill(896, 530, 160, 'SELECTED', colors.violet)}
    ${pill(1072, 530, 174, 'TRACEABLE', colors.darkSoft)}
    <path d="M728 612 H1438" stroke="${colors.line}"/>
    ${text(728, 660, 'ROUTES', 13, '#747b7e', 780)}${text(842, 660, '不同创意机制', 20, colors.ink, 650)}
    ${text(1054, 660, 'REASON', 13, '#747b7e', 780)}${text(1170, 660, '选择与淘汰依据', 20, colors.ink, 650)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'CREATIVE CRAFT / VALUE', title: '从随机抽卡到明确方向', body })
}

function creativeDepthsV2(mobile = false) {
  const accent = colors.creative
  if (mobile) {
    const body = `
      ${text(76, 220, '工作深度跟着任务价值走。', 22, colors.text, 560)}
      ${text(76, 346, '01', 88, '#ded9cf', 850)}
      ${text(212, 302, 'DEFAULT DEPTH', 14, accent, 800)}
      ${text(212, 350, 'Quick Craft', 35, colors.ink, 820)}
      ${lines(212, 400, ['用途与受众', '路线与选择理由', '生产提示与尺寸检查'], 21, colors.text, 580, 1.55)}
      ${pill(212, 544, 168, 'FAST + SOUND', accent)}
      <path d="M76 624 H724" stroke="${colors.line}"/>
      ${card(76, 674, 648, 296, { fill: colors.paperMuted, stroke: '#aaa49a', radius: 24 })}
      ${text(108, 720, 'TRACEABLE PROJECT', 15, '#6e6872', 800)}
      ${text(108, 772, '把判断留成资产', 29, colors.ink, 780)}
      ${lines(108, 822, ['route ledger 与淘汰原因', 'prompt、禁止项与不变量', '评估边界与可继续归档'], 20, colors.text, 580, 1.52)}
      ${pill(108, 904, 188, 'EXPLICIT OPT-IN', '#77727c')}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'CREATIVE CRAFT / DEPTH', title: '两种工作深度', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '不是每个任务都需要完整档案，但每个任务都要先说清承诺。', 25, colors.text, 540)}
    ${text(112, 468, '01', 176, '#ded9cf', 850)}
    ${text(330, 334, 'DEFAULT DEPTH', 16, accent, 800)}
    ${text(330, 404, 'Quick Craft', 52, colors.ink, 830)}
    ${lines(330, 468, ['用途与受众 · 路线与选择理由', '生产提示 · 目标尺寸检查'], 24, colors.text, 580, 1.55)}
    ${pill(330, 576, 168, 'FAST + SOUND', accent)}
    ${text(112, 688, '一次做对，交付足够。', 27, colors.ink, 700)}
    ${card(996, 294, 492, 420, { fill: colors.paperMuted, stroke: '#aaa49a', radius: 28 })}
    ${text(1040, 348, 'TRACEABLE PROJECT', 16, '#6e6872', 800)}
    ${text(1040, 410, '留下项目资产', 35, colors.ink, 780)}
    ${lines(1040, 472, ['route ledger 与淘汰原因', 'prompt、禁止项与不变量', '评估边界与可继续归档'], 21, colors.text, 580, 1.65)}
    ${pill(1040, 630, 188, 'EXPLICIT OPT-IN', '#77727c')}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'CREATIVE CRAFT / DEPTH', title: '两种工作深度', body })
}

function creativeRoutesV2(mobile = false) {
  const accent = colors.creative
  if (mobile) {
    const body = `
      ${text(76, 220, '三条路线按创意机制区分。', 22, colors.text, 560)}
      ${card(76, 278, 648, 352, { fill: colors.darkSoft, stroke: accent, strokeWidth: 3, radius: 26 })}
      ${text(108, 330, '01 / SELECT', 15, '#efb779', 820)}
      ${text(108, 388, 'Motion Is Proof', 36, '#fffdf7', 820)}
      ${text(108, 432, '运动本身证明产品作用', 20, '#c8c3ba', 560)}
      <path d="M112 560 C224 420 360 592 664 438" fill="none" stroke="${accent}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="260" cy="496" r="28" fill="#fffdf7"/><circle cx="540" cy="492" r="16" fill="${accent}"/>
      ${card(76, 668, 648, 142, { fill: colors.paperBright, stroke: colors.line, radius: 20 })}
      ${text(108, 710, '02 / TEST', 14, colors.violet, 800)}${text(108, 756, 'The Quiet Lift', 25, colors.ink, 760)}${text(432, 756, '克制抬升 · 对照路线', 18, colors.text, 560)}
      ${card(76, 834, 648, 142, { fill: colors.paperMuted, stroke: colors.line, radius: 20 })}
      ${text(108, 876, '03 / HOLD', 14, '#817b75', 800)}${text(108, 922, 'Before the Mirror Notices', 23, colors.ink, 760)}${text(486, 922, '镜像叙事', 18, colors.text, 560)}
      ${lines(76, 1022, ['FICTIONAL FIXTURE · DIRECTION STAGE', 'NO CAMPAIGN PERFORMANCE CLAIM'], 13, accent, 800, 1.5)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'CREATIVE CRAFT / ROUTES', title: '路线不是换色', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '内置虚构 brief：路线按创意机制区分，不是同一构图换色。', 25, colors.text, 540)}
    ${card(112, 300, 860, 438, { fill: colors.darkSoft, stroke: accent, strokeWidth: 3, radius: 30 })}
    ${text(164, 354, 'ROUTE 01 / SELECT', 16, '#efb779', 820)}
    ${text(164, 426, 'Motion Is Proof', 56, '#fffdf7', 830)}
    ${text(164, 474, '运动本身证明产品作用', 23, '#c8c3ba', 560)}
    <path d="M180 654 C342 438 530 698 888 448" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>
    <circle cx="390" cy="552" r="38" fill="#fffdf7"/><circle cx="724" cy="558" r="21" fill="${accent}"/>
    ${card(1018, 300, 470, 190, { fill: colors.paperBright, stroke: colors.violet, strokeWidth: 2, radius: 24 })}
    ${text(1058, 348, 'ROUTE 02 / TEST', 15, colors.violet, 800)}
    ${text(1058, 402, 'The Quiet Lift', 31, colors.ink, 780)}
    ${text(1058, 448, '克制抬升 · 对照路线', 19, colors.text, 560)}
    ${card(1018, 518, 470, 190, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
    ${text(1058, 566, 'ROUTE 03 / HOLD', 15, '#817b75', 800)}
    ${text(1058, 620, 'Before the Mirror Notices', 26, colors.ink, 760)}
    ${text(1058, 666, '镜像叙事 · 信息效率较低', 19, colors.text, 560)}
    ${text(112, 786, 'FICTIONAL FIXTURE · DIRECTION STAGE · NO CAMPAIGN PERFORMANCE CLAIM', 15, accent, 800)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'CREATIVE CRAFT / ROUTES', title: '路线差异发生在机制，不在颜色', body })
}

function craftLoopV2(mobile = false) {
  const accent = colors.creative
  const letters = [
    ['C', 'CONTEXT', '用途与约束'],
    ['R', 'ROUTES', '不同机制'],
    ['A', 'ART DIRECTION', '选择与不变量'],
    ['F', 'FABRICATION', '生产与修正'],
    ['T', 'TESTING', '目标尺寸检查'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '方法不是圆环图，而是一串可回看的判断。', 22, colors.text, 560)}
      ${letters.map(([letter, label, detail], index) => {
        const y = 274 + index * 142
        const selected = letter === 'A'
        return `${text(76, y + 76, letter, 74, selected ? accent : '#bdb8ae', 850)}
          ${text(182, y + 42, label, 17, selected ? accent : colors.ink, 820)}
          ${text(182, y + 80, detail, 21, colors.text, 570)}
          <path d="M182 ${y + 106} H724" stroke="${selected ? accent : colors.line}" stroke-width="${selected ? 3 : 1}"/>`
      }).join('')}
      ${pill(76, 1010, 304, 'DELIVERY → LEARNING', colors.darkSoft)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'CREATIVE CRAFT / METHOD', title: 'CRAFT 判断链', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '五个判断形成可回看的链；交付与学习再回到下一轮。', 25, colors.text, 540)}
    ${letters.map(([letter, label, detail], index) => {
      const x = 112 + index * 286
      const selected = letter === 'A'
      return `${text(x, 492, letter, 154, selected ? accent : '#c4bfb5', 850)}
        ${text(x + 8, 554, label, 16, selected ? accent : colors.ink, 820)}
        ${text(x + 8, 592, detail, 20, colors.text, 570)}
        <path d="M${x + 8} 624 H${x + 238}" stroke="${selected ? accent : colors.line}" stroke-width="${selected ? 4 : 1.5}"/>`
    }).join('')}
    ${pill(112, 704, 304, 'DELIVERY → LEARNING', colors.darkSoft)}
    <path d="M438 724 H1420" stroke="${accent}" stroke-width="3" stroke-dasharray="10 11" marker-end="url(#arrow)"/>
    ${text(112, 780, '判断可追溯 · 修正有目标', 21, colors.text, 620)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'CREATIVE CRAFT / METHOD', title: 'CRAFT：创意判断的循环', body })
}

function evaluationV2(mobile = false) {
  const accent = colors.creative
  if (mobile) {
    const body = `
      ${text(76, 220, '评分约束方向，不能冒充成品效果。', 22, colors.text, 560)}
      ${text(76, 388, '88.5', 116, colors.ink, 850)}
      ${text(82, 432, 'DIRECTION SCORE', 15, accent, 820)}
      <path d="M76 486 H724" stroke="${colors.line}"/>
      ${text(76, 548, '100%', 34, colors.ink, 800)}${text(236, 548, 'EVIDENCE COVERAGE', 15, colors.text, 760)}
      ${text(76, 614, '76%', 34, colors.ink, 800)}${text(236, 614, 'EVIDENCE STRENGTH', 15, colors.text, 760)}
      ${text(76, 680, 'MIXED', 30, colors.ink, 800)}${text(236, 680, 'CONFIDENCE', 15, colors.text, 760)}
      ${card(76, 734, 648, 148, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 780, 'ACTUAL OUTPUT', 14, '#bbb7ae', 760)}
      ${text(108, 844, 'NOT OBSERVED', 32, '#fffdf7', 820)}
      ${lines(76, 936, ['建议：推进选中路线，保留对照测试；', '看到实际生成前，不评价输出质量。'], 20, colors.ink, 620, 1.48)}
      ${text(76, 1044, 'FICTIONAL FIXTURE · DIRECTION STAGE', 13, accent, 800)}`
    return shell({ width: 800, height: 1200, accent, eyebrow: 'CREATIVE CRAFT / EVALUATION', title: '方向评估边界', body, mobile: true })
  }
  const body = `
    ${text(112, 248, '方向阶段可以被评分；没有看到实际生成，就不能评价成品质量。', 25, colors.text, 540)}
    ${text(112, 500, '88.5', 190, colors.ink, 850)}
    ${text(124, 564, 'DIRECTION SCORE', 17, accent, 820)}
    <path d="M112 620 H832" stroke="${colors.line}" stroke-width="2"/>
    ${text(112, 682, '100%', 40, colors.ink, 800)}${text(250, 682, 'EVIDENCE COVERAGE', 15, colors.text, 760)}
    ${text(470, 682, '76%', 40, colors.ink, 800)}${text(578, 682, 'EVIDENCE STRENGTH', 15, colors.text, 760)}
    ${card(930, 306, 558, 232, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(976, 362, 'ACTUAL OUTPUT', 15, '#bbb7ae', 760)}
    ${text(976, 446, 'NOT OBSERVED', 44, '#fffdf7', 830)}
    ${text(976, 488, '因此不评价成品质量', 19, '#bbb7ae', 560)}
    ${text(930, 608, 'CONFIDENCE', 14, colors.text, 780)}${text(1084, 608, 'MIXED', 27, colors.ink, 800)}
    ${text(930, 668, 'EVIDENCE', 14, colors.text, 780)}${text(1084, 668, '45% specified · 45% inferred · 10% hypothesized', 19, colors.ink, 650)}
    ${text(930, 728, 'NEXT', 14, colors.text, 780)}${text(1084, 728, '选中路线 + 受控对照测试', 20, colors.ink, 650)}
    ${text(112, 786, 'BUILT-IN FICTIONAL FIXTURE · DIRECTION STAGE · NOT CAMPAIGN PERFORMANCE', 15, accent, 800)}`
  return shell({ width: 1600, height: 900, accent, eyebrow: 'CREATIVE CRAFT / EVALUATION', title: '评分约束方向，不伪装成效果', body })
}

const files = new Map([
  ['review-craft-two-routes.svg', reviewRoutesV2()],
  ['review-craft-two-routes-mobile.svg', reviewRoutesV2(true)],
  ['review-craft-opinion-to-finding.svg', reviewValueV2()],
  ['review-craft-opinion-to-finding-mobile.svg', reviewValueV2(true)],
  ['review-craft-review-lifecycle.svg', reviewLifecycleV2()],
  ['review-craft-review-lifecycle-mobile.svg', reviewLifecycleV2(true)],
  ['review-craft-finding-anatomy.svg', reviewFindingV2()],
  ['review-craft-finding-anatomy-mobile.svg', reviewFindingV2(true)],
  ['creative-craft-draw-to-direction.svg', creativeValueV2()],
  ['creative-craft-draw-to-direction-mobile.svg', creativeValueV2(true)],
  ['creative-craft-two-depths.svg', creativeDepthsV2()],
  ['creative-craft-two-depths-mobile.svg', creativeDepthsV2(true)],
  ['creative-craft-three-routes.svg', creativeRoutesV2()],
  ['creative-craft-three-routes-mobile.svg', creativeRoutesV2(true)],
  ['creative-craft-craft-loop.svg', craftLoopV2()],
  ['creative-craft-craft-loop-mobile.svg', craftLoopV2(true)],
  ['creative-craft-direction-evaluation.svg', evaluationV2()],
  ['creative-craft-direction-evaluation-mobile.svg', evaluationV2(true)],
])

for (const [name, source] of files) fs.writeFileSync(path.join(outputDir, name), source)

console.log(JSON.stringify({ outputDir, files: [...files.keys()] }, null, 2))
