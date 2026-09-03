import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import Resume from './ui/Resume'
import Works from './ui/Works'

const SceneExperience = lazy(() => import('./scene/SceneExperience'))

type Lang = 'en' | 'zh'

const COPY = {
  en: {
    title: 'About 67',
    paragraphs: [
      'From Data Analyst to AI Builder',
      'Talk is cheap. Taste is important. Action speaks louder.',
    ],
  },
  zh: {
    title: 'About 67',
    paragraphs: [
      'From Data Analyst to AI Builder',
      'Talk is cheap. Taste is important. Action speaks louder.',
    ],
  },
}

function Hero({ lang, cueOpacity }: { lang: Lang; cueOpacity: MotionValue<number> }) {
  const { title, paragraphs } = COPY[lang]
  const aboutRef = useRef(null)
  // 触发起点提前：about 顶部位于视口 60% 处即开始（offset[0] 进度 0），到达顶部为进度 1
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start 0.6', 'start start'],
  })
  // 透明度在 about 顶部升到约 30vh 时归 0：起点 60%→进度 p 时顶部在 0.6×(1−p)，
  // 令 =0.3 解得 p=0.5，故 opacity 区间 [0, 0.5]
  const blur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(16px)'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // 视差：标题上升更快、字距随滚动拉开；正文上升慢一点
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -96])
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, -52])
  const titleSpacing = useTransform(scrollYProgress, [0, 1], ['0.01em', '0.42em'])
  return (
    <section className="hero">
      <motion.div
        className="about"
        lang={lang}
        ref={aboutRef}
        style={{ filter: blur, opacity }}
      >
        {/* 入场动画放内层，避免其 fill 锁住 opacity 覆盖外层滚动 opacity */}
        <div className="about-intro">
          <motion.h1 className="about-title" style={{ y: titleY, letterSpacing: titleSpacing }}>
            {title}
          </motion.h1>
          {paragraphs.map((p, i) => (
            <motion.p key={i} className="about-body" style={{ y: bodyY }}>
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
      <motion.div className="scroll-cue" style={{ opacity: cueOpacity }} aria-hidden="true">
        <span className="scroll-cue-label">{lang === 'en' ? 'SCROLL' : '向下滚动'}</span>
        <span className="scroll-cue-track">
          <span className="scroll-cue-dot" />
        </span>
      </motion.div>
    </section>
  )
}

function SceneChunkFallback() {
  const radius = 34
  const circumference = 2 * Math.PI * radius

  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-ring">
        <svg viewBox="0 0 80 80">
          <circle className="lr-track" cx="40" cy="40" r={radius} />
          <circle
            className="lr-arc"
            cx="40"
            cy="40"
            r={radius}
            style={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          />
        </svg>
      </div>
    </div>
  )
}

export default function App() {
  const lang: Lang = 'zh'
  const { scrollY } = useScroll()
  // 作品区蒙层：以作品区顶部从视口底进入到视口中部的进度，驱动 3D 渐暗 + 模糊
  const worksRef = useRef(null)
  const { scrollYProgress: worksProgress } = useScroll({
    target: worksRef,
    offset: ['start end', 'start center'],
  })
  const fogBg = useTransform(
    worksProgress,
    [0, 1],
    ['rgba(8, 11, 18, 0)', 'rgba(8, 11, 18, 0.41)'] // 压暗减半（原 0.82）
  )
  // 滚动渐暗：离开首屏后压暗 3D 场景，保证履历文字可读
  const scrimOpacity = useTransform(scrollY, [0, 520], [0, 0.4])
  // 首屏滚动提示随之淡出
  const cueOpacity = useTransform(scrollY, [0, 160], [1, 0])
  // 磨砂右轨：进入履历区后淡入（首屏不磨砂）
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const railOpacity = useTransform(scrollY, [vh * 0.5, vh * 1.1], [0, 1])
  // 首屏装饰画框/角标：滚动后淡出
  const heroChromeOpacity = useTransform(scrollY, [0, 280], [1, 0])

  return (
    <>
      {/* 3D 渲染栈异步加载，先让 HTML 首屏和轻量加载环完成初始化。 */}
      <Suspense fallback={<SceneChunkFallback />}>
        <SceneExperience />
      </Suspense>

      {/* 滚动渐暗蒙层 */}
      <motion.div className="scrim" style={{ opacity: scrimOpacity }} aria-hidden="true" />

      {/* 作品区固定蒙层：仅压暗（减半），模糊先注释掉 */}
      <motion.div
        className="stage-fog"
        style={{ background: fogBg /* , backdropFilter: fogBlur, WebkitBackdropFilter: fogBlur */ }}
        aria-hidden="true"
      />

      {/* 固定磨砂右轨（进入履历区淡入） */}
      <motion.div className="glass-rail" style={{ opacity: railOpacity }} aria-hidden="true" />

      {/* 首屏底部渐变底色，滚动后淡出 —— 暂时注释查看效果 */}
      {/* <motion.div
        className="hero-gradient"
        style={{ opacity: heroGradientOpacity }}
        aria-hidden="true"
      /> */}

      {/* 首屏装饰：发丝内框 + 四角定位标 + 角标元数据（随滚动淡出） */}
      <motion.div className="hero-chrome" style={{ opacity: heroChromeOpacity }} aria-hidden="true">
        <div className="hero-frame" />
        <span className="hero-mark tl">+</span>
        <span className="hero-mark tr">+</span>
        <span className="hero-mark bl">+</span>
        <span className="hero-mark br">+</span>
        <div className="hero-meta hm-tl">
          <span className="hm-name">67</span>
          <span>sixseven · 陆庆</span>
        </div>
        <div className="hero-meta hm-tr">Portfolio — 2026</div>
        <div className="hero-meta hm-bl">Analyst · Builder · AGI</div>
        <div className="hero-meta hm-right">Groland · Hangzhou</div>
      </motion.div>

      {/* 可滚动内容 */}
      <main className="content">
        <Hero lang={lang} cueOpacity={cueOpacity} />
        <Resume lang={lang} />
        <Works lang={lang} innerRef={worksRef} />
      </main>
    </>
  )
}
