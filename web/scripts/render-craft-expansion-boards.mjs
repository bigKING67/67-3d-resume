import fs from 'node:fs'
import path from 'node:path'

import { card, colors, dot, lines, pill, rule, shell, text, writeSvgMap } from './craft-board-kit.mjs'

// Deterministic evidence-board sources for the five AI Craft detail-page
// expansions. Every label comes from the audited project contract; diagrams are
// explanatory system schematics and never pretend to be live product screens.
const outputDir = path.resolve('../tmp/imagegen/craft-expansion-boards')

const dims = (mobile) => (mobile ? { width: 800, height: 1200, x: 76, right: 724 } : { width: 1600, height: 900, x: 112, right: 1488 })

const wrap = (mobile, accent, eyebrow, title, body, footer) => {
  const { width, height } = dims(mobile)
  return shell({ width, height, accent, eyebrow, title, body, mobile, footer })
}

const labelValue = (x, y, label, value, accent, valueSize = 21) => `
  ${text(x, y, label, 12, '#757b7d', 800)}
  ${text(x, y + 34, value, valueSize, colors.ink, 680)}
  <rect x="${x}" y="${y + 52}" width="52" height="4" rx="2" fill="${accent}"/>`

const flowConnector = (x1, y1, x2, y2, accent = '#737b7e', dashed = false) =>
  `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${accent}" stroke-width="2.5"${dashed ? ' stroke-dasharray="8 9"' : ''} marker-end="url(#arrow)"/>`

function designAuthority(mobile = false) {
  const accent = colors.design
  const levels = [
    ['01', 'LIVE RUNTIME', '当前目标页面与真实行为'],
    ['02', 'SCOPED RULES', '仓库约定与任务边界'],
    ['03', 'PRODUCT', '用户、目的、平台与可访问性'],
    ['04', 'DESIGN', '视觉语言、组件与运动权威'],
    ['05', 'ROUTE + REFERENCES', '按需加载的工作流与外部参考'],
  ]
  if (mobile) {
    const body = `
      ${lines(76, 218, ['审美建议不能越过项目真相。', '越靠上，越能改变最终判断。'], 21, colors.text, 560, 1.45)}
      ${levels.map(([no, name, detail], index) => {
        const y = 304 + index * 132
        const active = index < 2
        return `${text(76, y + 44, no, 18, active ? accent : '#8b8f90', 820)}
          ${card(132, y, 592, 98, { fill: active ? colors.paperBright : colors.paperMuted, stroke: active ? accent : colors.line, strokeWidth: active ? 2.5 : 1.2, radius: 18 })}
          ${text(164, y + 38, name, 20, colors.ink, 800)}${text(164, y + 72, detail, 17, colors.text, 560)}`
      }).join('')}
      ${pill(76, 1000, 348, 'PROJECT AUTHORITY > GENERIC TASTE', accent)}`
    return wrap(true, accent, 'DESIGN CRAFT / AUTHORITY', '先确认谁有最终解释权', body)
  }
  const body = `
    ${text(112, 246, '设计不是从风格库开始，而是先确认当前项目谁有最终解释权。', 25, colors.text, 540)}
    ${levels.map(([no, name, detail], index) => {
      const y = 300 + index * 84
      const width = 1120 - index * 120
      const active = index < 2
      return `${text(112, y + 38, no, 18, active ? accent : '#8b8f90', 820)}
        ${card(172, y, width, 62, { fill: active ? colors.paperBright : colors.paperMuted, stroke: active ? accent : colors.line, strokeWidth: active ? 2.5 : 1.2, radius: 16 })}
        ${text(204, y + 28, name, 18, colors.ink, 800)}${text(560, y + 28, detail, 18, colors.text, 560)}`
    }).join('')}
    <path d="M1402 302 V684" stroke="${accent}" stroke-width="4"/>
    <path d="M1384 302 H1420 M1384 684 H1420" stroke="${accent}" stroke-width="4"/>
    ${text(1432, 506, '优先级', 17, accent, 820, 'middle')}
    ${pill(112, 744, 348, 'PROJECT AUTHORITY > GENERIC TASTE', accent)}`
  return wrap(false, accent, 'DESIGN CRAFT / AUTHORITY', '项目权威高于通用审美', body)
}

function designScopeRouting(mobile = false) {
  const accent = colors.design
  const scopes = [
    ['MICRO', '文案 / token / 局部状态', '轻量一致性门禁'],
    ['COMPONENT', '一个语义组件家族', '同状态与焦点复核'],
    ['PAGE', '页面结构与视觉节奏', '真实浏览器 + 性能'],
    ['SYSTEM', '多页 / 多家族 / 共享原语', '完整 system review'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '任务越深，证据承诺才随之增加。', 21, colors.text, 560)}
      ${scopes.map(([name, scope, gate], index) => {
        const y = 282 + index * 170
        const width = 490 + index * 52
        return `${card(76, y, width, 132, { fill: index === 3 ? colors.paperBright : colors.paperMuted, stroke: index === 3 ? accent : colors.line, strokeWidth: index === 3 ? 2.5 : 1.2, radius: 22 })}
          ${text(108, y + 38, name, 15, index === 3 ? accent : '#747b7e', 820)}
          ${text(108, y + 76, scope, 20, colors.ink, 690)}
          ${text(108, y + 108, gate, 16, colors.text, 560)}`
      }).join('')}
      ${text(76, 1018, 'SCOPE 决定 ROUTE；ROUTE 不等于已完成。', 18, accent, 800)}`
    return wrap(true, accent, 'DESIGN CRAFT / ROUTING', '按影响深度选择工作流', body)
  }
  const body = `
    ${text(112, 246, '任务越深，验证与系统复核才随之增加；不把每个按钮都升级成大型流程。', 25, colors.text, 540)}
    ${scopes.map(([name, scope, gate], index) => {
      const x = 112 + index * 344
      const y = 574 - index * 70
      const h = 150 + index * 70
      return `${card(x, y, 286, h, { fill: index === 3 ? colors.paperBright : colors.paperMuted, stroke: index === 3 ? accent : colors.line, strokeWidth: index === 3 ? 3 : 1.2, radius: 24 })}
        ${text(x + 28, y + 42, name, 16, index === 3 ? accent : '#747b7e', 820)}
        ${lines(x + 28, y + 86, scope.split(' / '), 20, colors.ink, 680, 1.35)}
        ${text(x + 28, y + h - 30, gate, 16, colors.text, 560)}`
    }).join('')}
    <path d="M112 742 H1488" stroke="${accent}" stroke-width="4"/>
    ${text(112, 788, 'MICRO → COMPONENT → PAGE → SYSTEM', 17, accent, 820)}`
  return wrap(false, accent, 'DESIGN CRAFT / ROUTING', '流程深度跟着影响范围走', body)
}

function designReference(mobile = false) {
  const accent = colors.design
  const steps = [
    ['SOURCE', '可变外部画面'],
    ['CARD', '来源 / 角色 / 边界'],
    ['PACK', '任务相关参考集'],
    ['DECISION', '参数与判断'],
    ['PROJECT', '本项目语言'],
  ]
  if (mobile) {
    const body = `
      ${lines(76, 218, ['参考用来解释选择，', '不替代项目自己的视觉权威。'], 21, colors.text, 560, 1.45)}
      ${steps.map(([name, detail], index) => {
        const y = 302 + index * 142
        const selected = index === 1 || index === 2
        return `${card(112, y, 576, 98, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 2.4 : 1.2, radius: 20 })}
          ${text(146, y + 38, name, 16, selected ? accent : colors.ink, 820)}${text(310, y + 38, detail, 19, colors.text, 580)}
          ${index < steps.length - 1 ? flowConnector(400, y + 98, 400, y + 132, selected ? accent : '#777f82') : ''}`
      }).join('')}
      ${pill(76, 1024, 274, 'ABSORB RULES · NOT ASSETS', colors.darkSoft)}`
    return wrap(true, accent, 'DESIGN CRAFT / REFERENCE', '把参考变成可审计输入', body)
  }
  const xs = [112, 390, 668, 946, 1224]
  const body = `
    ${text(112, 246, '外部画面先固化来源、角色与边界，再提取可迁移的参数和判断。', 25, colors.text, 540)}
    ${steps.map(([name, detail], index) => {
      const x = xs[index]
      const selected = index === 1 || index === 2
      return `${text(x, 332, `0${index + 1}`, 18, selected ? accent : '#8b8f90', 820)}
        ${card(x, 364, 220, 246, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 2.6 : 1.2, radius: 24 })}
        ${text(x + 28, 420, name, 18, selected ? accent : colors.ink, 820)}
        ${lines(x + 28, 466, detail.split(' / '), 21, colors.ink, 650, 1.38)}
        ${index < steps.length - 1 ? flowConnector(x + 220, 488, x + 266, 488, selected ? accent : '#777f82') : ''}`
    }).join('')}
    ${pill(112, 680, 274, 'ABSORB RULES · NOT ASSETS', colors.darkSoft)}
    ${text(430, 707, '参考不会成为第二套 DESIGN.md', 20, colors.text, 620)}`
  return wrap(false, accent, 'DESIGN CRAFT / REFERENCE', '参考进入项目之前，先经过合同', body)
}

function designRuntimeProof(mobile = false) {
  const accent = colors.design
  if (mobile) {
    const body = `
      ${text(76, 220, '三个层级互相支持，但不能互相冒充。', 21, colors.text, 560)}
      ${card(76, 286, 648, 186, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
      ${text(108, 330, 'SOURCE', 14, '#747b7e', 820)}${text(108, 382, '实现与合同存在', 30, colors.ink, 780)}
      ${text(108, 430, '类型 · lint · build · 结构', 18, colors.text, 560)}
      ${flowConnector(400, 472, 400, 524, accent)}
      ${card(76, 540, 648, 186, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.5, radius: 24 })}
      ${text(108, 584, 'RUNTIME', 14, accent, 820)}${text(108, 636, '真实页面正在怎样工作', 30, colors.ink, 780)}
      ${text(108, 684, '视口 · 状态 · 交互 · 截图', 18, colors.text, 560)}
      ${flowConnector(400, 726, 400, 778, accent)}
      ${card(76, 794, 648, 186, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 838, 'VISUAL DECISION', 14, '#9fd6e0', 820)}${text(108, 890, '人对整体体验作出判断', 30, '#fffdf7', 780)}
      ${text(108, 938, '截图是样本，不是自动通过', 18, '#bbb7ae', 560)}`
    return wrap(true, accent, 'DESIGN CRAFT / EVIDENCE', '代码通过，不等于视觉通过', body)
  }
  const body = `
    ${text(112, 246, '源码、运行样本和最终视觉判断是三个证据层，缺一层就只声明已验证的那一层。', 25, colors.text, 540)}
    ${card(112, 320, 384, 340, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(152, 372, 'SOURCE', 15, '#747b7e', 820)}${lines(152, 438, ['实现与合同', '存在'], 38, colors.ink, 800, 1.18)}
    ${text(152, 584, '类型 · lint · build · 结构', 18, colors.text, 560)}
    ${flowConnector(496, 492, 586, 492, accent)}
    ${card(608, 286, 416, 408, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(652, 340, 'RUNTIME', 15, accent, 820)}${lines(652, 420, ['真实页面', '正在怎样工作'], 42, colors.ink, 820, 1.2)}
    ${text(652, 612, '视口 · 状态 · 交互 · 截图', 18, colors.text, 560)}
    ${flowConnector(1024, 492, 1114, 492, accent)}
    ${card(1136, 320, 352, 340, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(1176, 372, 'VISUAL DECISION', 15, '#9fd6e0', 820)}${lines(1176, 438, ['人判断', '整体体验'], 38, '#fffdf7', 800, 1.18)}
    ${text(1176, 584, '截图本身不等于通过', 18, '#bbb7ae', 560)}
    ${pill(112, 738, 314, 'SOURCE ≠ RUNTIME ≠ PASS', accent)}`
  return wrap(false, accent, 'DESIGN CRAFT / EVIDENCE', '视觉通过需要完整证据链', body)
}

function designSystemMatrix(mobile = false) {
  const accent = colors.design
  const rows = [
    ['BUTTON', 'idle · hover · focus · disabled'],
    ['INPUT', 'empty · filled · invalid · loading'],
    ['MODAL', 'closed · open · focus trap · escape'],
    ['NAV', 'desktop · 390px · keyboard · reduced motion'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '一个组件改好，不代表组件家族已经一致。', 21, colors.text, 560)}
      ${rows.map(([family, states], index) => {
        const y = 292 + index * 166
        return `${card(76, y, 648, 130, { fill: index === 2 ? colors.paperBright : colors.paperMuted, stroke: index === 2 ? accent : colors.line, strokeWidth: index === 2 ? 2.4 : 1.2, radius: 20 })}
          ${text(108, y + 40, family, 16, index === 2 ? accent : colors.ink, 820)}
          ${text(108, y + 84, states, 18, colors.text, 590)}
          ${text(668, y + 42, `0${index + 1}`, 18, '#949796', 760, 'end')}`
      }).join('')}
      ${lines(76, 1010, ['同语义家族 · 同状态 · 同视口', '一起复核，分别记录未验证项'], 18, accent, 780, 1.45)}`
    return wrap(true, accent, 'DESIGN CRAFT / SYSTEM REVIEW', '系统一致性是一张覆盖矩阵', body)
  }
  const cols = ['FAMILY', 'STATE', 'VIEWPORT', 'INPUT', 'RESULT']
  const body = `
    ${text(112, 246, '同语义家族、同状态、视口与输入方式必须一起复核，而不是只看改动处。', 25, colors.text, 540)}
    ${card(112, 304, 1376, 420, { fill: colors.paperBright, stroke: colors.line, radius: 24 })}
    <rect x="112" y="304" width="1376" height="72" rx="24" fill="${colors.darkSoft}"/>
    ${cols.map((col, index) => text(158 + index * 270, 349, col, 14, '#fffdf7', 800)).join('')}
    ${rows.map(([family, states], index) => {
      const y = 424 + index * 74
      const parts = states.split(' · ')
      return `${text(158, y, family, 17, index === 2 ? accent : colors.ink, 800)}
        ${text(428, y, parts.slice(0, 2).join(' · '), 17, colors.text, 580)}
        ${text(698, y, index === 3 ? 'desktop · 390px' : 'all applicable', 17, colors.text, 580)}
        ${text(968, y, index === 3 ? 'keyboard · motion' : 'pointer · keyboard', 17, colors.text, 580)}
        ${pill(1238, y - 27, 160, index === 2 ? 'REVIEW TOGETHER' : 'IN SCOPE', index === 2 ? accent : '#8b8f90')}
        ${index < rows.length - 1 ? rule(144, y + 28, 1456, y + 28) : ''}`
    }).join('')}
    ${text(112, 780, '轻量门禁处理局部；多页、多家族或共享原语触发完整 system review。', 20, accent, 720)}`
  return wrap(false, accent, 'DESIGN CRAFT / SYSTEM REVIEW', '不是检查一个组件，而是检查它的家族', body)
}

function browserIdentity(mobile = false) {
  const accent = colors.browser
  if (mobile) {
    const body = `
      ${text(76, 220, '页面目标必须由两个坐标共同锁定。', 21, colors.text, 560)}
      ${text(76, 352, '(', 86, '#9b9e9d', 500)}
      ${text(118, 332, 'browser_instance_id', 31, colors.ink, 820)}
      ${text(118, 382, '哪一个 Chrome / Edge Profile', 18, colors.text, 560)}
      ${text(76, 470, '+', 72, accent, 700)}
      ${text(150, 452, 'tab_id', 38, colors.ink, 820)}
      ${text(150, 500, '该实例里的哪一个页面', 18, colors.text, 560)}
      ${text(658, 500, ')', 86, '#9b9e9d', 500)}
      ${card(76, 578, 648, 174, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 26 })}
      ${text(108, 630, 'EXACT TARGET', 15, accent, 820)}
      ${text(108, 696, '身份明确后，动作才有意义', 31, colors.ink, 780)}
      ${card(76, 794, 648, 158, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 842, 'AMBIGUOUS TARGET', 15, '#9bd0c2', 820)}
      ${text(108, 900, 'FAIL CLOSED · 不选择 first / latest', 24, '#fffdf7', 760)}
      ${pill(76, 1004, 332, 'IDENTITY BEFORE ACTION', accent)}`
    return wrap(true, accent, 'BROWSER67 / TARGET IDENTITY', '不是一个 URL，而是一个精确目标', body)
  }
  const body = `
    ${text(112, 246, '相同 URL 可以存在于不同 Profile、窗口和账号；URL 不能单独证明目标身份。', 25, colors.text, 540)}
    ${text(112, 454, '(', 160, '#9b9e9d', 500)}
    ${text(194, 412, 'browser_instance_id', 54, colors.ink, 830)}
    ${text(194, 466, '哪一个真实 Profile', 20, colors.text, 560)}
    ${text(724, 430, '+', 92, accent, 700)}
    ${text(824, 412, 'tab_id', 64, colors.ink, 830)}
    ${text(824, 466, '该实例里的哪一个页面', 20, colors.text, 560)}
    ${text(1136, 454, ')', 160, '#9b9e9d', 500)}
    ${card(112, 570, 830, 154, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 26 })}
    ${text(152, 620, 'EXACT TARGET', 15, accent, 820)}${text(152, 680, '身份明确后，动作、证据和收尾才可归属', 30, colors.ink, 780)}
    ${card(994, 570, 494, 154, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 26 })}
    ${text(1034, 620, 'AMBIGUOUS', 15, '#9bd0c2', 820)}${text(1034, 680, 'FAIL CLOSED', 34, '#fffdf7', 820)}
    ${text(1034, 710, '不选择 first / latest', 16, '#bbb7ae', 560)}`
  return wrap(false, accent, 'BROWSER67 / TARGET IDENTITY', '浏览器任务从精确身份开始', body)
}

function browserOwnership(mobile = false) {
  const accent = colors.browser
  const states = [
    ['MANAGED', 'Agent 创建', '可操作', 'finalize：关闭'],
    ['ADOPTED', '用户明确采用', '短期授权', 'finalize：释放，不关闭'],
    ['UNMANAGED', '普通用户页签', '默认只读', '不进入 Agent 清理'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '同一个浏览器里，页签也有所有权。', 21, colors.text, 560)}
      ${states.map(([name, origin, access, close], index) => {
        const y = 292 + index * 220
        return `${card(76, y, 648, 178, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 2.6 : 1.2, radius: 24 })}
          ${text(108, y + 42, name, 16, index === 0 ? accent : colors.ink, 820)}
          ${text(108, y + 84, origin, 24, colors.ink, 720)}
          ${text(108, y + 126, `${access} · ${close}`, 17, colors.text, 580)}`
      }).join('')}
      ${lines(76, 1010, ['inspect_adoption → adopt_existing', '是采用用户页签的唯一入口'], 18, accent, 780, 1.45)}`
    return wrap(true, accent, 'BROWSER67 / OWNERSHIP', '页签不是都能随便操作', body)
  }
  const body = `
    ${text(112, 246, 'Agent 创建、显式采用和普通用户页签拥有不同操作权与收尾语义。', 25, colors.text, 540)}
    ${states.map(([name, origin, access, close], index) => {
      const x = 112 + index * 472
      const selected = index === 0
      return `${card(x, 322, 416, 340, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 3 : 1.2, radius: 28 })}
        ${pill(x + 34, 356, 138, name, selected ? accent : '#8b8f90')}
        ${text(x + 34, 460, origin, 34, colors.ink, 780)}
        ${labelValue(x + 34, 520, 'ACCESS', access, accent, 19)}
        ${labelValue(x + 226, 520, 'TASK END', close, accent, 17)}`
    }).join('')}
    ${text(112, 734, 'inspect_adoption → adopt_existing：显式采用；finalize 只释放 adopted，不关闭用户页面。', 20, accent, 720)}`
  return wrap(false, accent, 'BROWSER67 / OWNERSHIP', '页签也有所有权', body)
}

function browserAgentWindow(mobile = false) {
  const accent = colors.browser
  if (mobile) {
    const body = `
      ${text(76, 220, '同一 Profile，分开窗口与焦点边界。', 21, colors.text, 560)}
      ${card(76, 284, 648, 226, { fill: colors.paperMuted, stroke: colors.line, radius: 26 })}
      ${text(108, 330, 'USER WINDOW', 15, '#747b7e', 820)}
      ${text(108, 386, '普通标签页继续由用户掌控', 28, colors.ink, 760)}
      ${lines(108, 430, ['无 Agent badge', '不被后台任务导航或关闭'], 18, colors.text, 560, 1.45)}
      <path d="M76 560 H724" stroke="${accent}" stroke-width="4" stroke-dasharray="12 10"/>
      ${card(76, 610, 648, 252, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.6, radius: 26 })}
      ${text(108, 656, 'DEDICATED AGENT WINDOW', 15, accent, 820)}
      ${text(108, 712, 'background_preferred', 32, colors.ink, 800)}
      ${lines(108, 758, ['focused:false 创建', '登录态来自同一 Profile', '用户移出后不强行搬回'], 18, colors.text, 560, 1.45)}
      ${pill(76, 916, 318, 'FOCUS LEASE · BOUNDED', colors.darkSoft)}
      ${text(76, 1000, '需要物理输入时才申请短时焦点租约。', 18, colors.text, 620)}`
    return wrap(true, accent, 'BROWSER67 / WINDOW + FOCUS', '把自动化放进独立工作区', body)
  }
  const body = `
    ${text(112, 246, '同一个真实 Profile 保留登录态，但用户窗口与 Agent 工作区拥有清晰焦点边界。', 25, colors.text, 540)}
    ${card(112, 316, 566, 350, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(154, 370, 'USER WINDOW', 16, '#747b7e', 820)}
    ${text(154, 438, '用户继续掌控', 42, colors.ink, 790)}
    ${lines(154, 500, ['普通标签页默认只读', '不会被任务后台导航或关闭'], 21, colors.text, 560, 1.55)}
    <path d="M736 310 V694" stroke="${accent}" stroke-width="4" stroke-dasharray="12 10"/>
    ${card(796, 282, 692, 414, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(842, 338, 'DEDICATED AGENT WINDOW', 16, accent, 820)}
    ${text(842, 418, 'background_preferred', 48, colors.ink, 820)}
    ${lines(842, 486, ['focused:false 创建 · 同一 Profile 登录态', '用户移出后隔离记录，不强行搬回'], 21, colors.text, 560, 1.55)}
    ${pill(842, 602, 318, 'FOCUS LEASE · BOUNDED', colors.darkSoft)}
    ${text(842, 658, '物理输入只申请短时焦点，并核对用户活动后再恢复。', 18, colors.text, 620)}
    ${text(112, 752, '窗口隔离解决焦点与所有权，不伪装成第二个 Profile。', 20, accent, 720)}`
  return wrap(false, accent, 'BROWSER67 / WINDOW + FOCUS', '独立 Agent Window，不打断用户窗口', body)
}

function browserEvidenceLayers(mobile = false) {
  const accent = colors.browser
  const layers = [
    ['READY', '页面条件满足'],
    ['DOM', '内容与结构可读'],
    ['SCREENSHOT', '某一时刻的视觉样本'],
    ['FILE', '下载 / 上传产物身份'],
    ['LIFECYCLE', '任务进入与收尾回执'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '证据可以组合，不能互相替代。', 21, colors.text, 560)}
      ${layers.map(([name, detail], index) => {
        const y = 290 + index * 136
        const width = 430 + index * 54
        return `${card(76, y, width, 96, { fill: index === 2 ? colors.paperBright : colors.paperMuted, stroke: index === 2 ? accent : colors.line, strokeWidth: index === 2 ? 2.6 : 1.2, radius: 18 })}
          ${text(106, y + 38, name, 15, index === 2 ? accent : colors.ink, 820)}
          ${text(106, y + 72, detail, 17, colors.text, 560)}`
      }).join('')}
      ${pill(76, 1002, 370, 'ONE LAYER ≠ WHOLE TASK PROOF', accent)}`
    return wrap(true, accent, 'BROWSER67 / EVIDENCE', 'Ready、DOM、截图、文件、收尾', body)
  }
  const body = `
    ${text(112, 246, '“页面 ready”只证明一个条件；可信交付要声明自己真正拿到了哪一层。', 25, colors.text, 540)}
    ${layers.map(([name, detail], index) => {
      const x = 112 + index * 272
      const y = 584 - index * 58
      const h = 132 + index * 58
      return `${card(x, y, 226, h, { fill: index === 2 ? colors.paperBright : colors.paperMuted, stroke: index === 2 ? accent : colors.line, strokeWidth: index === 2 ? 3 : 1.2, radius: 22 })}
        ${text(x + 26, y + 42, name, 15, index === 2 ? accent : colors.ink, 820)}
        ${lines(x + 26, y + 86, detail.split(' / '), 18, colors.text, 580, 1.4)}`
    }).join('')}
    <path d="M112 716 H1426" stroke="${accent}" stroke-width="4"/>
    ${pill(112, 746, 370, 'ONE LAYER ≠ WHOLE TASK PROOF', accent)}`
  return wrap(false, accent, 'BROWSER67 / EVIDENCE', '浏览器证据不是一个布尔值', body)
}

function browserRequestLineage(mobile = false) {
  const accent = colors.browser
  const steps = [
    ['SCRIPT', '代码来源'],
    ['RUNTIME', 'frame / execution'],
    ['INITIATOR', '谁触发请求'],
    ['REQUEST', '参数与响应'],
    ['REBUILD', '本地复现包'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '逆向链路和页面操作共享同一目标身份。', 21, colors.text, 560)}
      <path d="M128 300 V934" stroke="${accent}" stroke-width="4"/>
      ${steps.map(([name, detail], index) => {
        const y = 298 + index * 142
        return `${dot(128, y + 36, 15, index === 3 ? accent : colors.paperBright, accent, 4)}
          ${text(182, y + 28, name, 16, index === 3 ? accent : colors.ink, 820)}
          ${text(182, y + 68, detail, 21, colors.text, 580)}
          ${rule(182, y + 96, 724, y + 96)}`
      }).join('')}
      ${pill(76, 1012, 310, 'SAME INSTANCE · SAME TAB', colors.darkSoft)}`
    return wrap(true, accent, 'BROWSER67 / JS REVERSE', '把请求还原成一条可追踪链', body)
  }
  const xs = [112, 382, 652, 922, 1192]
  const body = `
    ${text(112, 246, '脚本、运行 frame、请求发起者和重建产物绑定到同一个真实浏览器目标。', 25, colors.text, 540)}
    <path d="M172 468 H1386" stroke="${accent}" stroke-width="4"/>
    ${steps.map(([name, detail], index) => {
      const x = xs[index]
      const active = index === 3
      return `${dot(x + 60, 468, active ? 32 : 23, active ? accent : colors.paperBright, accent, 4)}
        ${text(x, 360, `0${index + 1}`, 17, active ? accent : '#818687', 820)}
        ${card(x, 534, 220, 146, { fill: active ? colors.paperBright : colors.paperMuted, stroke: active ? accent : colors.line, strokeWidth: active ? 2.8 : 1.2, radius: 20 })}
        ${text(x + 26, 578, name, 17, active ? accent : colors.ink, 820)}
        ${text(x + 26, 624, detail, 18, colors.text, 560)}`
    }).join('')}
    ${pill(112, 734, 310, 'SAME INSTANCE · SAME TAB', colors.darkSoft)}
    ${text(462, 760, '页面自动化与 JS reverse 共用 transport 和 lifecycle，但保持不同工具职责。', 18, colors.text, 620)}`
  return wrap(false, accent, 'BROWSER67 / JS REVERSE', '请求链能回到脚本与发起者', body)
}

function browserFinalize(mobile = false) {
  const accent = colors.browser
  if (mobile) {
    const body = `
      ${text(76, 220, '任务结束时，只收当前 workspace / task。', 21, colors.text, 560)}
      ${card(76, 286, 648, 594, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
      ${text(112, 338, 'DELIVERY SUMMARY', 16, accent, 820)}
      ${labelValue(112, 394, 'WORKSPACE', 'resume-craft-qa', accent, 22)}
      ${labelValue(112, 494, 'TASK', 'five-detail-pages', accent, 22)}
      ${rule(112, 580, 688, 580)}
      ${text(112, 630, 'managed tabs', 19, colors.text, 620)}${text(654, 630, 'owned scope only', 20, colors.ink, 760, 'end')}
      ${text(112, 686, 'adopted tabs', 19, colors.text, 620)}${text(654, 686, 'release · do not close', 20, colors.ink, 760, 'end')}
      ${text(112, 742, 'ordinary user tabs', 19, colors.text, 620)}${text(654, 742, 'preserve', 22, accent, 820, 'end')}
      ${rule(112, 786, 688, 786)}
      ${text(112, 836, 'exact scope terminalized', 17, accent, 800)}
      ${pill(76, 930, 260, 'SCOPED FINALIZE', accent)}
      ${text(76, 1000, '全局 close / cleanup 不是普通任务收尾。', 18, colors.text, 620)}`
    return wrap(true, accent, 'BROWSER67 / FINALIZE', '收尾也必须有作用域', body)
  }
  const body = `
    ${text(112, 246, '可信的浏览器任务不仅有动作结果，还要说明目标、所有权和最终生命周期。', 25, colors.text, 540)}
    ${card(112, 302, 850, 438, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 356, 'DELIVERY SUMMARY', 16, accent, 820)}
    ${labelValue(158, 410, 'WORKSPACE', 'resume-craft-qa', accent, 24)}
    ${labelValue(550, 410, 'TASK', 'five-detail-pages', accent, 24)}
    ${rule(158, 506, 916, 506)}
    ${text(158, 558, 'managed tabs', 19, colors.text, 620)}${text(420, 558, 'owned only', 20, colors.ink, 760, 'end')}
    ${text(492, 558, 'adopted tabs', 19, colors.text, 620)}${text(788, 558, 'release', 20, colors.ink, 760, 'end')}
    ${text(158, 632, 'ordinary user tabs', 19, colors.text, 620)}${text(420, 632, 'preserve', 22, accent, 820, 'end')}
    ${text(492, 632, 'nonterminal runs', 19, colors.text, 620)}${text(788, 632, '→ interrupted', 20, colors.ink, 760, 'end')}
    ${card(1020, 334, 468, 350, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(1064, 388, 'TASK END', 15, '#9bd0c2', 820)}
    ${lines(1064, 466, ['关闭 owned', '释放 adopted', '保留 user tabs'], 34, '#fffdf7', 780, 1.55)}
    ${pill(1064, 612, 260, 'SCOPED FINALIZE', accent)}`
  return wrap(false, accent, 'BROWSER67 / FINALIZE', '收尾回执证明没有越界', body)
}

function reversePassport(mobile = false) {
  const accent = colors.reverse
  const fields = [
    ['SOURCE', 'authorized fixture / supplied artifact'],
    ['SHA-256', 'b7…67（示意，非真实样本）'],
    ['SIZE', '固定字节数'],
    ['SCOPE', 'local / offline / approved target'],
    ['MUTATION', '原件只读 · 派生物分离'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '先固定研究对象，再谈看懂了什么。', 21, colors.text, 560)}
      ${card(76, 286, 648, 660, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
      ${text(112, 340, 'ARTIFACT PASSPORT', 16, accent, 820)}
      ${text(112, 402, 'CASE / SAMPLE-01', 34, colors.ink, 820)}
      ${rule(112, 438, 688, 438)}
      ${fields.map(([label, value], index) => {
        const y = 494 + index * 90
        return `${text(112, y, label, 12, '#747b7e', 800)}${text(256, y, value, 17, colors.ink, 650)}${index < fields.length - 1 ? rule(112, y + 34, 688, y + 34) : ''}`
      }).join('')}
      ${pill(76, 1000, 322, 'IDENTITY BEFORE ANALYSIS', accent)}`
    return wrap(true, accent, 'REVERSE CRAFT / IDENTITY', '样本先拥有一张“护照”', body)
  }
  const body = `
    ${text(112, 246, '来源、哈希、大小、授权范围和变更边界共同定义“我们正在研究什么”。', 25, colors.text, 540)}
    ${card(112, 300, 936, 446, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 354, 'ARTIFACT PASSPORT', 16, accent, 820)}${pill(808, 326, 188, 'ORIGINAL PRESERVED', colors.darkSoft)}
    ${text(158, 426, 'CASE / SAMPLE-01', 42, colors.ink, 820)}
    ${rule(158, 466, 1002, 466)}
    ${fields.map(([label, value], index) => {
      const y = 520 + index * 52
      return `${text(158, y, label, 12, '#747b7e', 800)}${text(360, y, value, 18, colors.ink, 650)}`
    }).join('')}
    ${card(1106, 342, 382, 348, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(1148, 396, 'BEFORE TOOLS', 15, accent, 820)}
    ${lines(1148, 470, ['授权范围', '对象身份', '原件保护', '派生物位置'], 28, colors.ink, 740, 1.55)}
    ${pill(112, 776, 322, 'IDENTITY BEFORE ANALYSIS', accent)}`
  return wrap(false, accent, 'REVERSE CRAFT / IDENTITY', '固定对象，才有可复核结论', body)
}

function reverseRouteAtlas(mobile = false) {
  const accent = colors.reverse
  const families = [
    ['BINARY', '二进制 / pwn / diff'],
    ['WEB + IDENTITY', 'JS / API / federation'],
    ['MOBILE', 'APK / client / macOS'],
    ['FORENSICS', 'malware / DFIR / hunt'],
    ['SYSTEM + CLOUD', 'cloud / AD / appsec'],
    ['EMBEDDED', 'firmware / protocol / radio'],
    ['CTI / OSINT', 'threat intelligence'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, 'Router 只加载命中的专业链路。', 21, colors.text, 560)}
      ${card(226, 280, 348, 116, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(400, 326, 'ROUTE', 18, '#d6e6c6', 820, 'middle')}${text(400, 364, 'clues → specialist family', 16, '#bbb7ae', 560, 'middle')}
      ${families.map(([name, detail], index) => {
        const x = index % 2 === 0 ? 76 : 414
        const y = 450 + Math.floor(index / 2) * 146
        const width = index === families.length - 1 ? 648 : 310
        return `${card(x, y, width, 108, { fill: name === 'WEB + IDENTITY' ? colors.paperBright : colors.paperMuted, stroke: name === 'WEB + IDENTITY' ? accent : colors.line, strokeWidth: name === 'WEB + IDENTITY' ? 2.4 : 1.1, radius: 18 })}
          ${text(x + 24, y + 38, name, 14, name === 'WEB + IDENTITY' ? accent : colors.ink, 820)}
          ${text(x + 24, y + 76, detail, 15, colors.text, 560)}`
      }).join('')}
      ${text(76, 1040, '没有路线胜出 → R0 GENERAL REVERSE', 16, accent, 800)}`
    return wrap(true, accent, 'REVERSE CRAFT / ROUTING', '一个入口，多条专业路线', body)
  }
  const positions = [[112, 316], [458, 316], [112, 488], [458, 488], [1030, 316], [1030, 488], [458, 660]]
  const body = `
    ${text(112, 246, '先从目标与 artifact clues 选择专业家族；路线只是计划，不等于已经执行。', 25, colors.text, 540)}
    ${card(716, 374, 258, 208, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 30 })}
    ${text(845, 444, 'ROUTE', 22, '#d6e6c6', 830, 'middle')}${lines(845, 492, ['clues', '→ family'], 21, '#bbb7ae', 600, 1.4, 'middle')}
    ${families.map(([name, detail], index) => {
      const [x, y] = positions[index]
      const selected = name === 'WEB + IDENTITY'
      const endX = x < 716 ? x + 290 : x
      const startX = x < 716 ? 716 : 974
      return `${card(x, y, 290, 118, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 2.6 : 1.1, radius: 20 })}
        ${text(x + 26, y + 42, name, 15, selected ? accent : colors.ink, 820)}${text(x + 26, y + 82, detail, 16, colors.text, 560)}
        ${index < 6 ? rule(startX, y + 58, endX, y + 58, selected ? accent : '#a2a5a2', 1.5, true) : ''}`
    }).join('')}
    ${text(1030, 720, 'NO WINNER → R0 GENERAL REVERSE', 16, accent, 800)}`
  return wrap(false, accent, 'REVERSE CRAFT / ROUTING', '不要用一个工具解释所有不透明对象', body)
}

function reverseCertainty(mobile = false) {
  const accent = colors.reverse
  const levels = [
    ['OBSERVED', '直接来自静态 / 动态 / 外部证据'],
    ['INFERRED', '由多条观察支持的解释'],
    ['HYPOTHESIZED', '可证伪、待实验的假设'],
    ['UNVERIFIED', '当前证据无法确认'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '结论强度必须跟着证据走。', 21, colors.text, 560)}
      ${levels.map(([name, detail], index) => {
        const y = 294 + index * 168
        const width = 648 - index * 66
        return `${card(76, y, width, 128, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 2.6 : 1.1, radius: 20 })}
          ${text(108, y + 42, name, 16, index === 0 ? accent : colors.ink, 820)}
          ${text(108, y + 88, detail, 17, colors.text, 560)}`
      }).join('')}
      ${pill(76, 1004, 334, 'CERTAINTY IS NOT TONE', accent)}`
    return wrap(true, accent, 'REVERSE CRAFT / CERTAINTY', '事实、推断、假设、未验证', body)
  }
  const body = `
    ${text(112, 246, '语气再笃定，也不能把推断升级为观察；每一层都有不同交付责任。', 25, colors.text, 540)}
    ${levels.map(([name, detail], index) => {
      const x = 112 + index * 338
      const y = 332 + index * 64
      const h = 372 - index * 64
      return `${card(x, y, 286, h, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 3 : 1.1, radius: 24 })}
        ${text(x + 28, y + 48, name, 17, index === 0 ? accent : colors.ink, 820)}
        ${lines(x + 28, y + 104, detail.split(' / '), 20, colors.text, 560, 1.45)}
        ${text(x + 28, y + h - 34, index === 0 ? 'highest direct support' : `level 0${index + 1}`, 14, '#858987', 700)}`
    }).join('')}
    ${pill(112, 754, 334, 'CERTAINTY IS NOT TONE', accent)}`
  return wrap(false, accent, 'REVERSE CRAFT / CERTAINTY', '结论确定性来自证据层级', body)
}

function reverseReproducer(mobile = false) {
  const accent = colors.reverse
  const steps = [
    ['FIXED ORIGINAL', '同一 hash 的对象'],
    ['OBSERVE', '静态 + 动态行为'],
    ['HYPOTHESIS', '可证伪解释'],
    ['MINIMAL HARNESS', '最小输入与环境'],
    ['RE-RUN', '从干净基线复现'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '“跑过一次”不是可复现。', 21, colors.text, 560)}
      <path d="M122 292 V952" stroke="${accent}" stroke-width="4"/>
      ${steps.map(([name, detail], index) => {
        const y = 288 + index * 146
        return `${dot(122, y + 40, index === 4 ? 18 : 13, index === 4 ? accent : colors.paperBright, accent, 4)}
          ${text(174, y + 30, name, 16, index === 4 ? accent : colors.ink, 820)}
          ${text(174, y + 72, detail, 19, colors.text, 580)}
          ${rule(174, y + 100, 724, y + 100)}`
      }).join('')}
      ${pill(76, 1018, 324, 'CLEAN BASELINE → SAME RESULT', colors.darkSoft)}`
    return wrap(true, accent, 'REVERSE CRAFT / REPRODUCE', '下一位研究者能重新跑通', body)
  }
  const xs = [112, 382, 652, 922, 1192]
  const body = `
    ${text(112, 246, '最小复现把“我在本机看到了”变成“从干净基线仍能得到同一结果”。', 25, colors.text, 540)}
    ${steps.map(([name, detail], index) => {
      const x = xs[index]
      const final = index === 4
      return `${text(x, 334, `0${index + 1}`, 17, final ? accent : '#858987', 820)}
        ${card(x, 374, 220, 244, { fill: final ? colors.paperBright : colors.paperMuted, stroke: final ? accent : colors.line, strokeWidth: final ? 3 : 1.1, radius: 22 })}
        ${text(x + 26, 428, name, 16, final ? accent : colors.ink, 820)}
        ${lines(x + 26, 482, detail.split(' + '), 20, colors.text, 580, 1.45)}
        ${index < steps.length - 1 ? flowConnector(x + 220, 500, x + 258, 500, index === 2 ? accent : '#777f82') : ''}`
    }).join('')}
    ${pill(112, 688, 324, 'CLEAN BASELINE → SAME RESULT', colors.darkSoft)}
    ${text(470, 714, '失败步骤、输入身份和环境差异同样属于交付。', 19, colors.text, 620)}`
  return wrap(false, accent, 'REVERSE CRAFT / REPRODUCE', '最小复现把理解变成可重跑结果', body)
}

function reverseSeal(mobile = false) {
  const accent = colors.reverse
  const items = [
    ['A01', 'original.bin', 'sha256:b7…67'],
    ['E04', 'runtime.json', 'sha256:42…19'],
    ['R02', 'reproducer.py', 'sha256:9a…2c'],
    ['F01', 'finding.md', 'sha256:31…ef'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '封存固定逻辑身份，不伪装成 OS 权限锁。', 21, colors.text, 560)}
      ${card(76, 286, 648, 596, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
      ${text(112, 338, 'CASE MANIFEST', 16, accent, 820)}${pill(516, 310, 172, 'SEALED', accent)}
      ${items.map(([id, name, hash], index) => {
        const y = 418 + index * 98
        return `${text(112, y, id, 15, accent, 820)}${text(190, y, name, 20, colors.ink, 680)}${text(688, y, hash, 15, colors.text, 620, 'end')}${rule(112, y + 34, 688, y + 34)}`
      }).join('')}
      ${text(112, 824, 'event tail', 13, '#747b7e', 800)}${text(688, 824, 'hash-chain anchor', 17, colors.ink, 680, 'end')}
      ${pill(76, 934, 300, 'LOGICAL FREEZE · RECEIPT', colors.darkSoft)}
      ${text(76, 1002, '后续变化产生新事件，不改写既有证据。', 18, colors.text, 620)}`
    return wrap(true, accent, 'REVERSE CRAFT / SEAL', 'Case 最后形成可核对清单', body)
  }
  const body = `
    ${text(112, 246, '原件、观察、复现与 finding 都绑定哈希；事件流用尾锚记录先后关系。', 25, colors.text, 540)}
    ${card(112, 302, 924, 438, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 356, 'CASE MANIFEST', 16, accent, 820)}${pill(790, 326, 192, 'SEALED', accent)}
    ${items.map(([id, name, hash], index) => {
      const y = 436 + index * 64
      return `${text(158, y, id, 15, accent, 820)}${text(246, y, name, 20, colors.ink, 680)}${text(982, y, hash, 16, colors.text, 620, 'end')}${rule(158, y + 26, 982, y + 26)}`
    }).join('')}
    ${text(158, 706, 'EVENT TAIL', 13, '#747b7e', 800)}${text(982, 706, 'hash-chain anchor', 18, colors.ink, 680, 'end')}
    ${card(1094, 342, 394, 350, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(1138, 396, 'SEAL RECEIPT', 15, '#d6e6c6', 820)}
    ${lines(1138, 470, ['logical freeze', 'manifest hashes', 'event tail', 'verification result'], 25, '#fffdf7', 740, 1.55)}
    ${text(1138, 652, '≠ OS permission lock', 16, '#bbb7ae', 560)}`
  return wrap(false, accent, 'REVERSE CRAFT / SEAL', '结论、产物与对象一起封存', body)
}

function moneyIdentityAsOf(mobile = false) {
  const accent = colors.money
  const fields = [
    ['SECURITY ID', 'MARKET:SYMBOL'],
    ['AS OF', 'YYYY-MM-DD'],
    ['REPORT END', 'fiscal period end'],
    ['CURRENCY', 'trading / reporting / base'],
    ['SHARE CLASS', 'listing + instrument'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '先锁定研究谁、截至何时，再允许数字进入。', 21, colors.text, 560)}
      ${card(76, 286, 648, 656, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
      ${text(112, 340, 'RESEARCH CONTRACT', 16, accent, 820)}
      ${fields.map(([label, value], index) => {
        const y = 424 + index * 98
        return `${text(112, y, label, 12, '#747b7e', 800)}${text(292, y, value, 20, colors.ink, 680)}${rule(112, y + 34, 688, y + 34)}`
      }).join('')}
      ${pill(76, 1000, 322, 'IDENTITY + DATE BEFORE DATA', accent)}`
    return wrap(true, accent, 'MONEY CRAFT / IDENTITY', '研究对象与截止日先成为合同', body)
  }
  const body = `
    ${text(112, 246, '公司名称、交易代码和报告期都有歧义；身份合同先固定口径。', 25, colors.text, 540)}
    ${card(112, 300, 912, 440, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 354, 'RESEARCH CONTRACT', 16, accent, 820)}
    ${fields.map(([label, value], index) => {
      const y = 436 + index * 58
      return `${text(158, y, label, 12, '#747b7e', 800)}${text(380, y, value, 21, colors.ink, 680)}${rule(158, y + 24, 978, y + 24)}`
    }).join('')}
    ${card(1082, 340, 406, 354, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(1126, 394, 'AMBIGUITY', 15, accent, 820)}
    ${lines(1126, 470, ['同名公司', '多地上市', '存托凭证', '财政期错位'], 28, colors.ink, 740, 1.55)}
    ${pill(112, 772, 322, 'IDENTITY + DATE BEFORE DATA', accent)}`
  return wrap(false, accent, 'MONEY CRAFT / IDENTITY', '先固定“研究谁、截至何时”', body)
}

function moneySourceHierarchy(mobile = false) {
  const accent = colors.money
  const levels = [
    ['PRIMARY TRUTH', '监管机构 · 交易所 · 发行人正式披露'],
    ['STRUCTURED ADAPTER', 'Fuyao · yfinance · FRED / ALFRED'],
    ['LOCAL MATERIAL', '用户提供并哈希绑定的材料'],
    ['DISCOVERY', '搜索摘要只用于定位，不替代原文'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '来源越方便，不代表权威越高。', 21, colors.text, 560)}
      ${levels.map(([name, detail], index) => {
        const y = 300 + index * 178
        const width = 648 - index * 72
        return `${card(76 + index * 36, y, width, 132, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 2.8 : 1.1, radius: 22 })}
          ${text(108 + index * 36, y + 42, name, 15, index === 0 ? accent : colors.ink, 820)}
          ${text(108 + index * 36, y + 88, detail, 17, colors.text, 560)}`
      }).join('')}
      ${text(76, 1032, 'PROVIDER ≠ OFFICIAL DISCLOSURE', 17, accent, 820)}`
    return wrap(true, accent, 'MONEY CRAFT / SOURCES', '官方材料始终是主真源', body)
  }
  const body = `
    ${text(112, 246, '结构化 Provider 提高效率，但不能覆盖监管、交易所与发行人披露的事实地位。', 25, colors.text, 540)}
    ${levels.map(([name, detail], index) => {
      const y = 310 + index * 106
      const x = 112 + index * 90
      const width = 1376 - index * 180
      return `${card(x, y, width, 78, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 3 : 1.1, radius: 18 })}
        ${text(x + 30, y + 32, name, 15, index === 0 ? accent : colors.ink, 820)}
        ${text(x + 338, y + 32, detail, 19, colors.text, 580)}`
    }).join('')}
    ${pill(112, 748, 300, 'PROVIDER ≠ PRIMARY TRUTH', accent)}
    ${text(450, 774, '没有当前来源时停止事实型判断，不补齐“看起来完整”的数字。', 19, colors.text, 620)}`
  return wrap(false, accent, 'MONEY CRAFT / SOURCES', '来源层级比来源数量更重要', body)
}

function moneyReconciliation(mobile = false) {
  const accent = colors.money
  if (mobile) {
    const body = `
      ${text(76, 220, '数字进入判断前，先证明口径能对上。', 21, colors.text, 560)}
      ${card(76, 286, 648, 222, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.8, radius: 24 })}
      ${text(108, 330, 'BALANCE SHEET', 14, accent, 820)}
      ${text(108, 408, 'ASSETS', 34, colors.ink, 820)}${text(306, 408, '=', 38, accent, 800)}${text(362, 382, 'LIABILITIES', 26, colors.ink, 780)}${text(362, 428, '+ EQUITY', 26, colors.ink, 780)}
      ${card(76, 544, 648, 180, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
      ${text(108, 588, 'CASH ROLLFORWARD', 14, '#747b7e', 820)}
      ${text(108, 650, '期初 + 变动 = 期末', 30, colors.ink, 780)}
      ${card(76, 760, 648, 180, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
      ${text(108, 804, 'SINGLE QUARTER', 14, '#747b7e', 820)}
      ${text(108, 866, '累计值 − 上期累计值', 30, colors.ink, 780)}
      ${text(76, 1006, '每个推算写公式、输入、单位与来源。', 18, accent, 760)}`
    return wrap(true, accent, 'MONEY CRAFT / RECONCILIATION', '财务勾稽先于估值故事', body)
  }
  const body = `
    ${text(112, 246, '关键财务项要能从来源、单位与公式回到同一口径；冲突不能被单一数据源覆盖。', 25, colors.text, 540)}
    ${card(112, 304, 608, 358, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 358, 'BALANCE SHEET', 15, accent, 820)}
    ${text(158, 470, 'ASSETS', 54, colors.ink, 830)}${text(412, 470, '=', 54, accent, 800)}
    ${text(486, 438, 'LIABILITIES', 34, colors.ink, 780)}${text(486, 500, '+ EQUITY', 34, colors.ink, 780)}
    ${rule(158, 548, 674, 548)}${text(158, 602, 'status · tolerance · source ids', 18, colors.text, 580)}
    ${card(776, 304, 712, 160, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
    ${text(818, 354, 'CASH ROLLFORWARD', 15, '#747b7e', 820)}${text(818, 420, '期初 + 变动 = 期末', 34, colors.ink, 780)}
    ${card(776, 502, 712, 160, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
    ${text(818, 552, 'SINGLE QUARTER', 15, '#747b7e', 820)}${text(818, 618, '累计值 − 上期累计值', 34, colors.ink, 780)}
    ${text(112, 730, 'reported · restated · comparable estimate · unverified', 18, accent, 800)}`
  return wrap(false, accent, 'MONEY CRAFT / RECONCILIATION', '先把数字对上，再讨论它意味着什么', body)
}

function moneyFactToThesis(mobile = false) {
  const accent = colors.money
  const layers = [
    ['OBSERVED', '正式披露与可核验数据'],
    ['INFERRED', '公式、比较与解释'],
    ['HYPOTHESIZED', '可证伪的投资判断'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '事实不会自动变成 thesis。', 21, colors.text, 560)}
      ${layers.map(([name, detail], index) => {
        const y = 292 + index * 154
        return `${card(76 + index * 42, y, 648 - index * 84, 112, { fill: index === 2 ? colors.paperBright : colors.paperMuted, stroke: index === 2 ? accent : colors.line, strokeWidth: index === 2 ? 2.6 : 1.1, radius: 20 })}
          ${text(108 + index * 42, y + 40, name, 15, index === 2 ? accent : colors.ink, 820)}${text(108 + index * 42, y + 78, detail, 17, colors.text, 560)}`
      }).join('')}
      ${card(76, 780, 648, 174, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 826, 'THESIS MUST INCLUDE', 14, '#e7bd78', 820)}
      ${lines(108, 878, ['反方证据 · 催化剂', '风险 · 证伪条件 · 下次验证'], 21, '#fffdf7', 650, 1.5)}
      ${text(76, 1018, 'SCREENED ≠ BUY · SIGNAL ≠ TRADE', 17, accent, 820)}`
    return wrap(true, accent, 'MONEY CRAFT / THESIS', '把事实、推断和观点分层', body)
  }
  const body = `
    ${text(112, 246, '研究稿保存事实与输入；thesis 记录判断、反方证据、风险和证伪条件。', 25, colors.text, 540)}
    ${layers.map(([name, detail], index) => {
      const x = 112 + index * 366
      const y = 344 + index * 58
      const h = 286 - index * 58
      return `${card(x, y, 316, h, { fill: index === 2 ? colors.paperBright : colors.paperMuted, stroke: index === 2 ? accent : colors.line, strokeWidth: index === 2 ? 3 : 1.1, radius: 24 })}
        ${text(x + 30, y + 48, name, 16, index === 2 ? accent : colors.ink, 820)}
        ${lines(x + 30, y + 104, detail.split('与'), 20, colors.text, 580, 1.45)}`
    }).join('')}
    ${card(1190, 314, 298, 382, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 26 })}
    ${text(1224, 364, 'THESIS', 15, '#e7bd78', 820)}
    ${lines(1224, 426, ['判断', '反方证据', '催化剂', '风险', '证伪条件'], 25, '#fffdf7', 720, 1.48)}
    ${pill(112, 742, 336, 'SCREENED ≠ BUY · SIGNAL ≠ TRADE', accent)}`
  return wrap(false, accent, 'MONEY CRAFT / THESIS', '事实经过推断，才成为可证伪判断', body)
}

function moneyResearchStates(mobile = false) {
  const accent = colors.money
  const states = [
    ['PLAN', '只生成合同 · offline'],
    ['INIT', '创建可恢复 workspace · offline'],
    ['COLLECT', '显式 Provider 网络边界'],
    ['IMPORT', '正式来源 + SHA-256'],
    ['STATUS', '重算缺口与 audits · offline'],
    ['FINALIZE', '满足全部准出条件才写 receipt'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '计划、采集、完成与归档是不同状态。', 21, colors.text, 560)}
      ${states.map(([name, detail], index) => {
        const y = 278 + index * 126
        const network = index === 2
        return `${text(76, y + 38, `0${index + 1}`, 16, network ? accent : '#858987', 820)}
          ${card(128, y, 596, 92, { fill: network ? colors.paperBright : colors.paperMuted, stroke: network ? accent : colors.line, strokeWidth: network ? 2.5 : 1.1, radius: 18 })}
          ${text(158, y + 34, name, 16, network ? accent : colors.ink, 820)}${text(158, y + 68, detail, 16, colors.text, 560)}`
      }).join('')}
      ${text(76, 1048, 'PLAN EXISTS ≠ RESEARCH COMPLETE', 17, accent, 820)}`
    return wrap(true, accent, 'MONEY CRAFT / RUN STATES', '研究是一条可恢复状态机', body)
  }
  const xs = [112, 342, 572, 802, 1032, 1262]
  const body = `
    ${text(112, 246, '每个阶段都有独立输入、网络边界和完成条件；不能从计划直接跳到“研究完成”。', 25, colors.text, 540)}
    <path d="M168 462 H1424" stroke="#858987" stroke-width="3" marker-end="url(#arrow)"/>
    ${states.map(([name, detail], index) => {
      const x = xs[index]
      const network = index === 2
      return `${dot(x + 52, 462, network ? 30 : 22, network ? accent : colors.paperBright, accent, 4)}
        ${text(x, 350, `0${index + 1}`, 16, network ? accent : '#858987', 820)}
        ${card(x, 526, 190, 168, { fill: network ? colors.paperBright : colors.paperMuted, stroke: network ? accent : colors.line, strokeWidth: network ? 2.6 : 1.1, radius: 20 })}
        ${text(x + 22, 570, name, 16, network ? accent : colors.ink, 820)}${lines(x + 22, 612, detail.split(' · '), 15, colors.text, 560, 1.45)}`
    }).join('')}
    ${pill(112, 746, 316, 'PLAN EXISTS ≠ COMPLETE', accent)}`
  return wrap(false, accent, 'MONEY CRAFT / RUN STATES', '研究进度不是一个含糊的“完成”', body)
}

function moneyImmutableReport(mobile = false) {
  const accent = colors.money
  if (mobile) {
    const body = `
      ${text(76, 220, '展示稿可以重渲染，研究真源不能漂移。', 21, colors.text, 560)}
      ${card(76, 286, 648, 206, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.8, radius: 24 })}
      ${text(108, 334, 'MARKDOWN TRUTH', 15, accent, 820)}
      ${text(108, 398, 'report.md + thesis.md', 32, colors.ink, 800)}
      ${text(108, 446, 'source manifest · audits · reconciliation', 17, colors.text, 560)}
      ${flowConnector(400, 492, 400, 552, accent)}
      ${card(76, 568, 648, 178, { fill: colors.paperMuted, stroke: colors.line, radius: 24 })}
      ${text(108, 614, 'RENDITION', 15, '#747b7e', 820)}
      ${text(108, 674, 'offline HTML + PDF', 30, colors.ink, 780)}
      ${flowConnector(400, 746, 400, 806, accent)}
      ${card(76, 822, 648, 154, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 866, 'IMMUTABLE REVISION', 14, '#e7bd78', 820)}
      ${text(108, 926, 'REVISION · SHA-256 · verifier', 25, '#fffdf7', 760)}
      ${text(76, 1032, 'RENDITION ≠ RESEARCH TRUTH', 17, accent, 820)}`
    return wrap(true, accent, 'MONEY CRAFT / ARCHIVE', '报告能回到同一份真源', body)
  }
  const body = `
    ${text(112, 246, 'HTML / PDF 是展示层；source manifest、audit 和离线 verifier 才负责证明同一份研究真源。', 25, colors.text, 540)}
    ${card(112, 316, 470, 350, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(154, 370, 'MARKDOWN TRUTH', 15, accent, 820)}
    ${text(154, 444, 'report.md', 38, colors.ink, 820)}${text(154, 496, '+ thesis.md', 30, colors.ink, 760)}
    ${lines(154, 560, ['source manifest', 'audits · reconciliation'], 18, colors.text, 560, 1.5)}
    ${flowConnector(582, 492, 690, 492, accent)}
    ${card(716, 350, 330, 282, { fill: colors.paperMuted, stroke: colors.line, radius: 26 })}
    ${text(758, 404, 'RENDITION', 15, '#747b7e', 820)}
    ${text(758, 486, 'HTML', 42, colors.ink, 820)}${text(758, 546, '+ PDF', 34, colors.ink, 760)}
    ${text(758, 590, 'offline · responsive', 17, colors.text, 560)}
    ${flowConnector(1046, 492, 1152, 492, accent)}
    ${card(1178, 316, 310, 350, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(1218, 370, 'IMMUTABLE', 15, '#e7bd78', 820)}
    ${lines(1218, 440, ['REVISION', 'SHA-256', 'offline verifier'], 30, '#fffdf7', 780, 1.55)}
    ${text(112, 746, 'RENDITION ≠ RESEARCH TRUTH · SEALED REVISION IS READ-ONLY', 17, accent, 820)}`
  return wrap(false, accent, 'MONEY CRAFT / ARCHIVE', '展示稿与研究真源分层', body)
}

function commerceRoutingGate(mobile = false) {
  const accent = colors.commerce
  if (mobile) {
    const body = `
      ${text(76, 220, '不是每个经营问题都需要总中枢。', 21, colors.text, 560)}
      ${card(76, 286, 648, 250, { fill: colors.paperMuted, stroke: colors.line, radius: 26 })}
      ${text(108, 334, 'BOUNDED QUESTION', 15, '#747b7e', 820)}
      ${text(108, 396, '决策权清楚', 34, colors.ink, 800)}
      ${text(108, 448, '→ 直接进入最小 specialist 组合', 20, colors.text, 600)}
      ${pill(108, 482, 236, 'NO ORCHESTRATOR', '#8b8f90')}
      <path d="M76 586 H724" stroke="${accent}" stroke-width="4"/>
      ${card(76, 632, 648, 298, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.8, radius: 26 })}
      ${text(108, 680, 'CROSS-DOMAIN CONFLICT', 15, accent, 820)}
      ${lines(108, 742, ['利润、增长、运营、品牌、数据', '目标互相牵制，需要同一决定'], 27, colors.ink, 780, 1.35)}
      ${pill(108, 858, 272, 'COMMERCE GROWTH OS', accent)}
      ${text(76, 1004, '跨两个专业，也不自动等于需要 orchestrator。', 17, colors.text, 620)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / ROUTING', '先判断问题是否真的跨域', body)
  }
  const body = `
    ${text(112, 246, '决策权清楚的单项问题直接给 specialist；只有跨域目标冲突才进入中枢。', 25, colors.text, 540)}
    ${card(112, 316, 592, 356, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(154, 370, 'BOUNDED QUESTION', 15, '#747b7e', 820)}
    ${text(154, 446, '一个清晰决策权', 42, colors.ink, 800)}
    ${text(154, 510, '直接进入最小 specialist 组合', 22, colors.text, 600)}
    ${pill(154, 580, 236, 'NO ORCHESTRATOR', '#8b8f90')}
    <path d="M758 302 V704" stroke="${accent}" stroke-width="4"/>
    ${card(816, 286, 672, 416, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(862, 342, 'CROSS-DOMAIN CONFLICT', 15, accent, 820)}
    ${lines(862, 426, ['利润、增长、运营、品牌与数据', '目标互相牵制，需要一个共同决定'], 35, colors.ink, 790, 1.35)}
    ${pill(862, 586, 272, 'COMMERCE GROWTH OS', accent)}
    ${text(862, 650, '跨两个专业也不自动触发；问题必须需要协调裁决。', 18, colors.text, 600)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / ROUTING', '总中枢只处理真正的跨域冲突', body)
}

function commerceOwnershipMap(mobile = false) {
  const accent = colors.commerce
  const owners = [
    ['COMMERCIAL', '利润 · 价盘 · 货盘 · 预算'],
    ['OPERATIONS', '店铺 · 直播 · 履约 · 售后'],
    ['ANALYTICS', '指标 · 归因 · 证据 · 诊断'],
    ['GROWTH', '投放 · 搜索 · 实验 · 留存'],
    ['BRAND', '定位 · PR · 合作 · 声誉'],
    ['CONTENT', '内容 · 达人 · brief · 权利'],
    ['MARKETING OS', '整合 Campaign 与资源分配'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '一条规则只有一个 canonical owner。', 21, colors.text, 560)}
      ${owners.map(([name, detail], index) => {
        const y = 278 + index * 104
        return `${text(76, y + 34, `0${index + 1}`, 15, index === 0 ? accent : '#858987', 820)}
          ${text(132, y + 30, name, 15, index === 0 ? accent : colors.ink, 820)}
          ${text(326, y + 30, detail, 16, colors.text, 560)}
          ${rule(132, y + 58, 724, y + 58)}`
      }).join('')}
      ${pill(76, 1010, 314, 'ONE RULE · ONE OWNER', accent)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / OWNERSHIP', '专业边界让协作不互相覆盖', body)
  }
  const positions = [[112, 306], [112, 454], [112, 602], [1010, 306], [1010, 454], [1010, 602], [542, 646]]
  const body = `
    ${text(112, 246, '中枢负责路由与裁决，不复制 specialist 知识；同一规则只有一个 owner。', 25, colors.text, 540)}
    ${card(580, 348, 440, 234, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 32 })}
    ${text(800, 422, 'ORCHESTRATE', 21, '#edb8a7', 830, 'middle')}
    ${lines(800, 474, ['route', 'resolve conflict'], 20, '#fffdf7', 650, 1.45, 'middle')}
    ${owners.map(([name, detail], index) => {
      const [x, y] = positions[index]
      const w = index === 6 ? 516 : 430
      const selected = index === 0
      return `${card(x, y, w, 104, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 2.5 : 1.1, radius: 20 })}
        ${text(x + 26, y + 38, name, 15, selected ? accent : colors.ink, 820)}${text(x + 26, y + 76, detail, 16, colors.text, 560)}
        ${index < 6 ? rule(x < 580 ? x + w : 1020, y + 52, x < 580 ? 580 : x, y + 52, '#a2a5a2', 1.4, true) : ''}`
    }).join('')}
    ${text(112, 778, 'CATEGORY / PLATFORM KNOWLEDGE = OVERLAY，不能取代专业工作流。', 17, accent, 800)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / OWNERSHIP', '七类决策权，只有一个共同裁决层', body)
}

function commerceConstraintOrder(mobile = false) {
  const accent = colors.commerce
  const steps = [
    ['01', 'UNIT ECONOMICS', '利润、ROI、CAC 与现金边界'],
    ['02', 'ASSORTMENT + PRICE', '货盘角色、价盘与渠道约束'],
    ['03', 'CHANNEL JOBS', '每个渠道承担什么任务'],
    ['04', 'OPERATIONS', '库存、履约、退款与服务'],
    ['05', 'MEASUREMENT', '指标、归因、节奏与复盘'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '先约束经济模型，再谈放量动作。', 21, colors.text, 560)}
      ${steps.map(([no, name, detail], index) => {
        const y = 284 + index * 144
        const width = 648 - index * 50
        return `${text(76, y + 40, no, 16, index === 0 ? accent : '#858987', 820)}
          ${card(128, y, width - 52, 104, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 2.5 : 1.1, radius: 19 })}
          ${text(158, y + 38, name, 15, index === 0 ? accent : colors.ink, 820)}${text(158, y + 76, detail, 16, colors.text, 560)}`
      }).join('')}
      ${text(76, 1020, '跳过上层约束，后面的动作越快，风险越大。', 17, accent, 760)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / CONSTRAINTS', '经营决策有先后顺序', body)
  }
  const body = `
    ${text(112, 246, '预算、渠道和执行动作必须建立在前一层约束已经清楚的基础上。', 25, colors.text, 540)}
    ${steps.map(([no, name, detail], index) => {
      const x = 112 + index * 270
      const y = 596 - index * 60
      const h = 130 + index * 60
      return `${text(x, y - 22, no, 16, index === 0 ? accent : '#858987', 820)}
        ${card(x, y, 226, h, { fill: index === 0 ? colors.paperBright : colors.paperMuted, stroke: index === 0 ? accent : colors.line, strokeWidth: index === 0 ? 2.8 : 1.1, radius: 22 })}
        ${text(x + 24, y + 42, name, 14, index === 0 ? accent : colors.ink, 820)}
        ${lines(x + 24, y + 88, detail.split('、'), 17, colors.text, 560, 1.42)}`
    }).join('')}
    <path d="M112 742 H1418" stroke="${accent}" stroke-width="4"/>
    ${text(112, 786, 'ECONOMICS → ASSORTMENT → CHANNEL → OPERATIONS → MEASUREMENT', 16, accent, 820)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / CONSTRAINTS', '先立边界，再做增长动作', body)
}

function commerceConflictResolution(mobile = false) {
  const accent = colors.commerce
  const inputs = [
    ['GROWTH', '希望扩大投放'],
    ['COMMERCIAL', '利润与价盘门槛'],
    ['OPERATIONS', '库存、履约、退款护栏'],
    ['ANALYTICS', '统一指标与证据质量'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '裁决不是把四份建议取平均。', 21, colors.text, 560)}
      ${inputs.map(([name, detail], index) => {
        const y = 282 + index * 124
        return `${card(76, y, 648, 90, { fill: index === 1 ? colors.paperBright : colors.paperMuted, stroke: index === 1 ? accent : colors.line, strokeWidth: index === 1 ? 2.4 : 1.1, radius: 18 })}
          ${text(108, y + 36, name, 15, index === 1 ? accent : colors.ink, 820)}${text(300, y + 36, detail, 18, colors.text, 580)}`
      }).join('')}
      ${flowConnector(400, 752, 400, 816, accent)}
      ${card(76, 832, 648, 162, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 24 })}
      ${text(108, 878, 'ONE DECISION', 14, '#edb8a7', 820)}
      ${text(108, 936, '先满足护栏，再定义可验证动作', 27, '#fffdf7', 760)}
      ${text(76, 1040, 'CONFLICT → OWNER → GUARDRAIL → ACTION', 16, accent, 820)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / ARBITRATION', '把局部最优收敛成一个决定', body)
  }
  const body = `
    ${text(112, 246, '各专业保留自己的决策权，中枢把冲突变成有 owner、有护栏的一条结论。', 25, colors.text, 540)}
    ${inputs.map(([name, detail], index) => {
      const x = index < 2 ? 112 : 932
      const y = index % 2 === 0 ? 316 : 510
      const selected = index === 1
      return `${card(x, y, 486, 146, { fill: selected ? colors.paperBright : colors.paperMuted, stroke: selected ? accent : colors.line, strokeWidth: selected ? 2.6 : 1.1, radius: 22 })}
        ${text(x + 30, y + 44, name, 15, selected ? accent : colors.ink, 820)}${text(x + 30, y + 96, detail, 22, colors.text, 580)}
        ${rule(x < 800 ? x + 486 : 800, y + 73, x < 800 ? 800 : x, y + 73, '#a2a5a2', 1.6, true)}`
    }).join('')}
    ${card(654, 350, 292, 286, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 30 })}
    ${text(800, 406, 'ARBITRATE', 17, '#edb8a7', 830, 'middle')}
    ${lines(800, 468, ['owner', 'guardrail', 'action', 'review'], 23, '#fffdf7', 680, 1.48, 'middle')}
    ${pill(686, 580, 228, 'ONE DECISION', accent)}
    ${text(112, 738, '不平均冲突建议；先满足商业与运营护栏，再定义增长动作和验证窗口。', 19, accent, 720)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / ARBITRATION', '跨域裁决不是折中，而是明确优先级', body)
}

function commerceDecisionMemo(mobile = false) {
  const accent = colors.commerce
  const fields = [
    ['DECISION', '一句可执行判断'],
    ['FACTS / ASSUMPTIONS', '已确认与待确认分开'],
    ['MECHANISM', '为什么这个动作会生效'],
    ['OWNER + METRIC', '谁负责 · 看什么信号'],
    ['RISK + WINDOW', '主要风险 · 何时复核'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, '共同语言最终必须落到一张决策记录。', 21, colors.text, 560)}
      ${card(76, 286, 648, 668, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
      ${text(112, 340, 'DECISION MEMO', 16, accent, 820)}${pill(520, 312, 168, 'ACTIONABLE', accent)}
      ${fields.map(([label, value], index) => {
        const y = 430 + index * 100
        return `${text(112, y, label, 12, '#747b7e', 800)}${text(320, y, value, 18, colors.ink, 660)}${rule(112, y + 36, 688, y + 36)}`
      }).join('')}
      ${text(76, 1020, '结论有 owner，复核有窗口，失败有边界。', 17, accent, 760)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / MEMO', '让多专业输出变成一条行动记录', body)
  }
  const body = `
    ${text(112, 246, '方案不是多份报告的拼接；最终产物必须让团队知道谁先做什么、何时复核。', 25, colors.text, 540)}
    ${card(112, 298, 1038, 452, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(158, 354, 'DECISION MEMO', 16, accent, 820)}${pill(912, 326, 184, 'ACTIONABLE', accent)}
    ${fields.map(([label, value], index) => {
      const y = 438 + index * 62
      return `${text(158, y, label, 12, '#747b7e', 800)}${text(448, y, value, 20, colors.ink, 670)}${rule(158, y + 26, 1096, y + 26)}`
    }).join('')}
    ${card(1208, 338, 280, 372, { fill: colors.darkSoft, stroke: colors.darkSoft, radius: 28 })}
    ${text(1246, 390, 'OUTPUT', 15, '#edb8a7', 820)}
    ${lines(1246, 460, ['判断', 'owner', 'metric', 'risk', 'review'], 27, '#fffdf7', 740, 1.55)}
    ${text(112, 790, '事实、假设和建议分开；结论有 owner，失败有边界。', 18, accent, 760)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / MEMO', '共同语言最终落到决策记录', body)
}

function commerceStopScale(mobile = false) {
  const accent = colors.commerce
  const checks = [
    ['PROFIT', '利润没有被增长吃掉'],
    ['REFUNDS', '退款与售后仍在护栏内'],
    ['CASH', '现金回收没有恶化'],
    ['BRAND', '品牌资产与权利未受损'],
    ['SUPPLY', '库存与履约能承接'],
  ]
  if (mobile) {
    const body = `
      ${text(76, 220, 'GMV 上升不能单独证明应该继续放量。', 21, colors.text, 560)}
      ${card(76, 286, 292, 614, { fill: colors.paperMuted, stroke: colors.line, radius: 26 })}
      ${text(110, 338, 'STOP', 18, colors.ink, 830)}
      ${lines(110, 414, ['任一关键护栏', '持续恶化，', '停止或降档'], 28, colors.ink, 740, 1.5)}
      <rect x="340" y="286" width="56" height="614" fill="${accent}"/>
      ${card(424, 286, 300, 614, { fill: colors.paperBright, stroke: accent, strokeWidth: 2.8, radius: 26 })}
      ${text(458, 338, 'SCALE', 18, accent, 830)}
      ${checks.map(([name, detail], index) => {
        const y = 414 + index * 92
        return `${text(458, y, name, 13, accent, 820)}${text(458, y + 32, detail, 15, colors.text, 560)}${index < checks.length - 1 ? rule(458, y + 52, 690, y + 52) : ''}`
      }).join('')}
      ${text(76, 1000, 'SCALE 需要同时满足经济与交付条件。', 18, accent, 760)}`
    return wrap(true, accent, 'COMMERCE GROWTH OS / GATES', '放量与停止条件必须成对出现', body)
  }
  const body = `
    ${text(112, 246, '商业或增长投入必须同时定义 stop rule 与 scale rule，不能只写乐观目标。', 25, colors.text, 540)}
    ${card(112, 314, 410, 384, { fill: colors.paperMuted, stroke: colors.line, radius: 28 })}
    ${text(156, 368, 'STOP', 18, colors.ink, 830)}
    ${lines(156, 446, ['关键护栏持续恶化', '停止、降档或重估'], 36, colors.ink, 770, 1.38)}
    ${text(156, 602, '不是等预算花完再复盘', 18, colors.text, 580)}
    <rect x="570" y="314" width="58" height="384" rx="29" fill="${accent}"/>
    ${card(680, 286, 808, 440, { fill: colors.paperBright, stroke: accent, strokeWidth: 3, radius: 28 })}
    ${text(724, 340, 'SCALE', 18, accent, 830)}
    ${checks.map(([name, detail], index) => {
      const y = 416 + index * 58
      return `${text(724, y, name, 13, accent, 820)}${text(892, y, detail, 19, colors.ink, 640)}${index < checks.length - 1 ? rule(724, y + 24, 1444, y + 24) : ''}`
    }).join('')}
    ${text(112, 774, 'GMV GROWTH ≠ SUCCESS WHEN PROFIT · REFUNDS · CASH · BRAND · SUPPLY DETERIORATE', 16, accent, 820)}`
  return wrap(false, accent, 'COMMERCE GROWTH OS / GATES', '什么时候继续放量，什么时候立即停', body)
}

const boards = [
  ['design-craft-authority-order', designAuthority],
  ['design-craft-scope-routing', designScopeRouting],
  ['design-craft-reference-contract', designReference],
  ['design-craft-runtime-proof', designRuntimeProof],
  ['design-craft-system-review-matrix', designSystemMatrix],
  ['browser67-target-identity', browserIdentity],
  ['browser67-tab-ownership', browserOwnership],
  ['browser67-agent-window', browserAgentWindow],
  ['browser67-evidence-layers', browserEvidenceLayers],
  ['browser67-js-request-lineage', browserRequestLineage],
  ['browser67-scoped-finalize', browserFinalize],
  ['reverse-craft-artifact-passport', reversePassport],
  ['reverse-craft-route-atlas', reverseRouteAtlas],
  ['reverse-craft-certainty-ladder', reverseCertainty],
  ['reverse-craft-minimal-reproducer', reverseReproducer],
  ['reverse-craft-sealed-case', reverseSeal],
  ['money-craft-identity-as-of', moneyIdentityAsOf],
  ['money-craft-source-hierarchy', moneySourceHierarchy],
  ['money-craft-financial-reconciliation', moneyReconciliation],
  ['money-craft-fact-to-thesis', moneyFactToThesis],
  ['money-craft-research-states', moneyResearchStates],
  ['money-craft-immutable-report', moneyImmutableReport],
  ['commerce-growth-os-routing-gate', commerceRoutingGate],
  ['commerce-growth-os-ownership-map', commerceOwnershipMap],
  ['commerce-growth-os-constraint-order', commerceConstraintOrder],
  ['commerce-growth-os-conflict-resolution', commerceConflictResolution],
  ['commerce-growth-os-decision-memo', commerceDecisionMemo],
  ['commerce-growth-os-stop-scale', commerceStopScale],
]

const files = new Map()
for (const [slug, render] of boards) {
  files.set(`${slug}.svg`, render(false))
  files.set(`${slug}-mobile.svg`, render(true))
}

writeSvgMap(fs, path, outputDir, files)
console.log(JSON.stringify({ outputDir, boardCount: boards.length, files: [...files.keys()] }, null, 2))
