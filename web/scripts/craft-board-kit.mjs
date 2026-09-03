// Shared deterministic drawing primitives for the AI Craft evidence boards.
// The boards intentionally use project facts and exact text instead of asking
// an image model to invent diagrams, UI, metrics, or verification receipts.

export const colors = {
  dark: '#11161a',
  darkSoft: '#1b2226',
  paper: '#f0ede5',
  paperBright: '#fffdf7',
  paperMuted: '#dfdbd1',
  ink: '#151a1f',
  text: '#5f676b',
  line: '#c3bfb5',
  review: '#c74f68',
  design: '#1598b3',
  creative: '#c87b32',
  browser: '#248b70',
  reverse: '#758f53',
  money: '#b37c24',
  commerce: '#b15f43',
  green: '#248b70',
  violet: '#7a63bb',
}

export const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

export const text = (x, y, value, size, color = colors.ink, weight = 500, anchor = 'start') =>
  `<text x="${x}" y="${y}" fill="${color}" font-family="Arial, PingFang SC, Microsoft YaHei, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${escapeXml(value)}</text>`

export const lines = (x, y, values, size, color = colors.ink, weight = 500, gap = 1.38, anchor = 'start') =>
  values
    .map((value, index) => text(x, y + index * size * gap, value, size, color, weight, anchor))
    .join('')

export const defs = `
  <defs>
    <filter id="paperNoise" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="67" result="noise"/>
      <feColorMatrix in="noise" type="saturate" values="0" result="mono"/>
      <feComponentTransfer in="mono" result="faded"><feFuncA type="table" tableValues="0 .055"/></feComponentTransfer>
      <feBlend in="SourceGraphic" in2="faded" mode="multiply"/>
    </filter>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000" flood-opacity=".26"/>
    </filter>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="#626b70"/>
    </marker>
    <marker id="accentArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/>
    </marker>
  </defs>`

export function shell({
  width,
  height,
  accent,
  eyebrow,
  title,
  body,
  mobile = false,
  footer = 'SYSTEM SCHEMATIC · VERIFIED PROJECT FACTS · NOT A LIVE SCREENSHOT',
}) {
  const inset = mobile ? 28 : 54
  const radius = mobile ? 34 : 38
  const headerX = mobile ? 76 : 112
  const eyebrowY = mobile ? 86 : 114
  const titleY = mobile ? 136 : 166
  const ruleY = mobile ? 166 : 198
  const footerY = height - (mobile ? 66 : 78)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    ${defs}
    <rect width="${width}" height="${height}" fill="${colors.dark}"/>
    <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="${radius}" fill="${colors.paper}" filter="url(#shadow)"/>
    <g filter="url(#paperNoise)">
      <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="${radius}" fill="${colors.paper}"/>
      ${text(headerX, eyebrowY, eyebrow, mobile ? 18 : 20, '#676e72', 760)}
      ${text(headerX, titleY, title, mobile ? 34 : 40, colors.ink, 780)}
      <rect x="${width - headerX - (mobile ? 74 : 88)}" y="${eyebrowY - 10}" width="${mobile ? 74 : 88}" height="8" rx="4" fill="${accent}"/>
      <path d="M${headerX} ${ruleY} H${width - headerX}" stroke="${colors.line}"/>
      ${body}
      ${text(headerX, footerY, footer, mobile ? 12 : 13, '#747b7e', 650)}
    </g>
  </svg>`
}

export function card(x, y, width, height, { fill = colors.paperBright, stroke = colors.line, strokeWidth = 1.5, radius = 22 } = {}) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`
}

export const pill = (x, y, width, label, fill, color = '#fff', height = 40) => `
  <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${height / 2}" fill="${fill}"/>
  ${text(x + width / 2, y + height * 0.68, label, height > 40 ? 15 : 13, color, 800, 'middle')}`

export const arrow = (x1, y1, x2, y2, color = '#626b70', width = 2.5, dashed = false) =>
  `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}"${dashed ? ' stroke-dasharray="8 9"' : ''} marker-end="url(#arrow)"/>`

export const rule = (x1, y1, x2, y2, color = colors.line, width = 1.5, dashed = false) =>
  `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}"${dashed ? ' stroke-dasharray="8 9"' : ''}/>`

export const dot = (cx, cy, radius, fill, stroke = 'none', strokeWidth = 0) =>
  `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`

export const writeSvgMap = (fs, path, outputDir, files) => {
  fs.mkdirSync(outputDir, { recursive: true })
  for (const [name, source] of files) fs.writeFileSync(path.join(outputDir, name), source)
}
