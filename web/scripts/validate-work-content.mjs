import fs from 'node:fs'
import path from 'node:path'

const projectRoot = process.cwd()
const contentDir = path.join(projectRoot, 'src/content/works')
const publicDir = path.join(projectRoot, 'public')
const worksDataPath = path.join(projectRoot, 'src/data/works.ts')
const imageBudgetBytes = 350 * 1024

const errors = []
const warnings = []
const referencedMedia = new Set()

function parseFrontmatter(raw) {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const sourceLine of match[1].split('\n')) {
    const line = sourceLine.trim()
    const field = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line)
    if (!field) continue
    data[field[1]] = field[2].trim().replace(/^['"]|['"]$/g, '')
  }
  return { data, body: match[2] }
}

function addMediaReference(fileName, rawUrl, context) {
  if (!rawUrl) return
  const url = rawUrl.trim().split(/\s+/)[0]
  if (/^(?:https?:|data:)/.test(url)) return
  if (!url.startsWith('./works/')) {
    errors.push(`${fileName}: ${context} 必须使用 ./works/... 或绝对 https URL：${url}`)
    return
  }

  const cleanUrl = url.split(/[?#]/)[0]
  const publicPath = path.resolve(publicDir, cleanUrl.replace(/^\.\//, ''))
  if (!publicPath.startsWith(`${publicDir}${path.sep}`)) {
    errors.push(`${fileName}: ${context} 越过 public/ 边界：${url}`)
    return
  }
  referencedMedia.add(publicPath)
  if (!fs.existsSync(publicPath)) {
    errors.push(`${fileName}: ${context} 引用不存在：${url}`)
    return
  }

  const size = fs.statSync(publicPath).size
  if (size > imageBudgetBytes && /\.(?:avif|gif|jpe?g|png|webp)$/i.test(publicPath)) {
    warnings.push(`${fileName}: ${path.basename(publicPath)} 为 ${Math.ceil(size / 1024)} KiB，超过 350 KiB 检查线`)
  }
}

const markdownFiles = fs
  .readdirSync(contentDir)
  .filter((name) => name.endsWith('.md'))
  .sort()

const availableSlugs = new Set(markdownFiles.map((name) => name.replace(/\.md$/, '')))
const usedSlugs = new Set()
const worksData = fs.readFileSync(worksDataPath, 'utf8')

for (const match of worksData.matchAll(/\bslug:\s*['"]([^'"]+)['"]/g)) {
  const slug = match[1]
  usedSlugs.add(slug)
  if (!availableSlugs.has(slug)) errors.push(`works.ts: slug 没有对应内容文件：${slug}.md`)
}

for (const fileName of markdownFiles) {
  const raw = fs.readFileSync(path.join(contentDir, fileName), 'utf8')
  const { data, body } = parseFrontmatter(raw)
  const bodyForValidation = body.replace(/```[\s\S]*?```/g, '')

  for (const field of ['banner', 'bannerMobile']) {
    if (data[field]) addMediaReference(fileName, data[field], `frontmatter.${field}`)
  }

  if (data.link && !/^https:\/\//.test(data.link)) {
    errors.push(`${fileName}: frontmatter.link 只接受 https URL：${data.link}`)
  }

  for (const match of bodyForValidation.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+['"][^'"]*['"])?\)/g)) {
    if (!match[1].trim()) errors.push(`${fileName}: Markdown 图片缺少 alt：${match[2]}`)
    addMediaReference(fileName, match[2], 'Markdown 图片')
  }

  for (const match of bodyForValidation.matchAll(/<img\b([^>]*)>/gi)) {
    const attrs = match[1]
    const src = /\bsrc\s*=\s*['"]([^'"]+)['"]/i.exec(attrs)?.[1]
    const alt = /\balt\s*=\s*['"]([^'"]*)['"]/i.exec(attrs)?.[1]
    if (src && !alt?.trim()) errors.push(`${fileName}: HTML 图片缺少 alt：${src}`)
    addMediaReference(fileName, src, 'HTML img.src')
  }

  for (const match of bodyForValidation.matchAll(/<(?:source|video)\b([^>]*)>/gi)) {
    const attrs = match[1]
    const src = /\bsrc\s*=\s*['"]([^'"]+)['"]/i.exec(attrs)?.[1]
    const srcSet = /\bsrcset\s*=\s*['"]([^'"]+)['"]/i.exec(attrs)?.[1]
    const poster = /\bposter\s*=\s*['"]([^'"]+)['"]/i.exec(attrs)?.[1]
    addMediaReference(fileName, src, 'HTML media.src')
    addMediaReference(fileName, srcSet, 'HTML source.srcset')
    addMediaReference(fileName, poster, 'HTML video.poster')
  }
}

for (const warning of warnings) console.warn(`WARN ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)

if (errors.length > 0) {
  console.error(`\nFAIL: ${errors.length} 个错误，${warnings.length} 个提醒`)
  process.exit(1)
}

console.log(
  `PASS: ${markdownFiles.length} 篇作品、${usedSlugs.size} 个列表 slug、${referencedMedia.size} 个本地媒体引用；${warnings.length} 个体积提醒`,
)
