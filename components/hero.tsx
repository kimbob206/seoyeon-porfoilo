"use client"

import * as React from "react"
import { ArrowRight, Download, MapPin, MousePointerClick } from "lucide-react"
import { motion } from "framer-motion"

/* -------------------------------------------------------------------------- */
/* ANIMATION VARIANTS                                                         */
/* -------------------------------------------------------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
}

export function Hero() {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  /* ---------------------- 타이핑 애니메이션 상태 ---------------------- */
  const fullText =
    "데이터와 금융 모델링을 통해\n부동산 자산의 잠재 가치를 증명하고,\n최적의 활용 전략을 제안합니다."

  const [displayText, setDisplayText] = React.useState("")
  const [phase, setPhase] = React.useState<"typing" | "blinking" | "clearing">("typing")
  const [charIndex, setCharIndex] = React.useState(0)
  const [blinkCount, setBlinkCount] = React.useState(0)
  const [caretVisible, setCaretVisible] = React.useState(true)

  React.useEffect(() => {
    const typingSpeed = 65   // 글자 나오는 속도 (ms)
    const blinkSpeed = 600   // 커서 깜빡임 속도 (ms)
    const clearDelay = 3000   // 모두 지우기 전 대기 시간 (ms)

    let intervalId: ReturnType<typeof setInterval> | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    if (phase === "typing") {
      setCaretVisible(true) // 타이핑 중에는 항상 보이게
      intervalId = setInterval(() => {
        setCharIndex((prev) => {
          const next = prev + 1
          setDisplayText(fullText.slice(0, next))

          if (next >= fullText.length) {
            clearInterval(intervalId as ReturnType<typeof setInterval>)
            setPhase("blinking")
          }

          return next
        })
      }, typingSpeed)
    }

    if (phase === "blinking") {
      intervalId = setInterval(() => {
        setCaretVisible((prev) => {
          const next = !prev

          // '보였다가 꺼질 때' 기준으로 3번 카운트
          if (prev === true && next === false) {
            setBlinkCount((prevCount) => {
              const nextCount = prevCount + 1
              if (nextCount >= 3) {
                setPhase("clearing")
              }
              return nextCount
            })
          }

          return next
        })
      }, blinkSpeed)
    }

    if (phase === "clearing") {
      // 멈춰 있는 동안에도 계속 깜빡이게
      intervalId = setInterval(() => {
        setCaretVisible((prev) => !prev)
      }, blinkSpeed)

      // 일정 시간 후 전체 텍스트 삭제 & 초기화
      timeoutId = setTimeout(() => {
        setDisplayText("")
        setCharIndex(0)
        setBlinkCount(0)
        setCaretVisible(true)
        setPhase("typing")
      }, clearDelay)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [phase, fullText])

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-slate-50 py-20 lg:py-0"
    >
      {/* ------------------ BACKGROUND: ARCHITECTURAL GRID ------------------ */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_40%,rgba(255,255,255,0),#f8fafc)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ------------------ LEFT: TEXT CONTENT ------------------ */}
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            {/* 상단 배지 */}
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 mb-6 backdrop-blur-sm shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
                Available for Opportunities
              </span>
            </motion.div>

            {/* 메인 타이틀 */}
            <motion.h1
              variants={fadeInUp}
              custom={0.1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-700 leading-[1.1] mb-6"
            >
              Bae Seoyeon <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 font-medium italic">
                Portfolio.
              </span>
            </motion.h1>

            {/* 서브 텍스트 - 높이 고정 + 타이핑 + 커서 */}
            <motion.p
              variants={fadeInUp}
              custom={0.2}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed font-medium relative"
            >
              {/* 레이아웃용: 전체 문장을 보이지 않게 렌더링해서 높이 고정 */}
              <span className="invisible whitespace-pre-line block">
                {fullText}
              </span>

              {/* 실제 타이핑 텍스트: 위에 겹쳐서 표시 */}
              <span className="absolute top-0 left-0 whitespace-pre-line pointer-events-none z-10">
                {displayText}
                <span
                  className={`relative inline-block h-[1.1em] w-[3px] ml-1 bg-emerald-500 align-baseline transition-opacity duration-150 top-0.5 ${
                    caretVisible ? "opacity-100" : "opacity-0"
                  }`}
                />
              </span>
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div
              variants={fadeInUp}
              custom={0.3}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleSectionClick(e, "#projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl"
              >
                프로젝트 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Seoyeon_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-[15px] font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-1"
              >
                <Download className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ------------------ RIGHT: PROFILE CARD (Glassmorphism) ------------------ */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            custom={0.4}
            className="relative lg:ml-auto w-full max-w-[440px]"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60" />

            <div className="relative rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md">
              <div className="flex items-start gap-5">
                <div className="relative h-34 w-30 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                  <img
                    src="/profile.jpg"
                    alt="배서연"
                    className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="pt-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">배서연</h2>
                  <p className="text-m font-medium text-slate-600 mb-2">
                    단국대학교 죽전캠퍼스
                    <br />
                    도시계획·부동산학부 부동산학과
                  </p>
                  <p className="text-s text-emerald-500 leading-snug">
                    Junior / GPA 4.2
                  </p>
                </div>
              </div>

              <div className="my-6 border-t border-slate-200/60" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-md bg-slate-100">
                    <MousePointerClick className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Core Focus
                  </span>
                </div>

                <ul className="space-y-3">
                  {[
                    "오피스·상업시설 PF 및 IM 작성",
                    "수익성 분석 (DCF, IRR, NOI)",
                    "경매 권리분석 및 리스크 헷징",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14px] text-slate-700 font-medium"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["#Asset Management", "#PF Finance", "#Data Analysis"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200/50 text-[12.6px] font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
