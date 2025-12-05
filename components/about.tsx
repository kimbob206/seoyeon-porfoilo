"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Briefcase,
  GraduationCap,
  Award,
  Star,
  BarChart3,
  Users,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
} from "lucide-react"
import { motion } from "framer-motion"

/* -------------------------------------------------------------------------- */
/* DATA                                    */
/* -------------------------------------------------------------------------- */

// 👉 요청하신 대로 항목 통합 및 추가 완료
const TIMELINE_DATA = [
  {
    icon: GraduationCap,
    title: "단국대학교 죽전캠퍼스",
    period: "2023.03",
    description: "부동산학 전공 및 경영학 복수전공",
    category: "Education",
  },
  {
    icon: Award,
    title: "학년수석 달성",
    period: "2024",
    description: "2학년 1·2학기 연속 학년석차 1등",
    category: "Award",
  },
  {
    icon: Users,
    title: (
    <>
      부동산 학회 및
      <br />
      연합 학술 활동
    </>
  ),
    period: "2024.03 - 2025.01",
    description:
      "건국·단국·중앙대 연합학술제 우수프로젝트 선정",
    category: "Activity",
  },
  {
    icon: Briefcase,
    title: (
    <>
      무궁화신탁 인턴십 및
      <br />
      금융교육 이수
    </>
  ),
    period: "2025.07 - 09",
    description: "타임금융교육원 부동산운용 직무교육",
    category: "Career",
  },
  {
    icon: Star,
    title: (
    <>
      서울부동산포럼
      <br />
      장학생 선정
    </>
  ),
    period: "2025.11",
    description: "제13회 우수 장학생 선정",
    category: "Award",
  },
  {
    icon: Building2,
    title: "무궁화신탁 인턴십 (예정)",
    period: "2025.12.15 ~",
    category: "Future",
    isFuture: true, // 미래 일정 스타일링용 플래그
  },
]

const SKILLS = [
  {
    icon: BarChart3,
    title: "Financial Modeling",
    percentage: 70,
    description:
      "DCF, IRR/NPV, Cap-rate, NOI 모델링, PF 시나리오 분석을 통해 자산의 현금흐름과 수익 구조를 정교한 숫자로 설계합니다.",
  },
  {
    icon: Users,
    title: "Real Estate Analysis",
    percentage: 90,
    description:
      "국토부 실거래가·토지이음·개별공시지가 등 공공데이터를 활용해 입지·수요·임대차 구조를 분석하고 리스크 요소를 검토합니다.",
  },
  {
    icon: Rocket,
    title: "PF Documentation",
    percentage: 85,
    description:
      "IM·시장 리서치·PERT/CPM 일정 분석 등 의사결정에 필요한 보고서를 체계적으로 제작합니다.",
  },
]

const ACHIEVEMENTS = [
  {
    title: "URID 수료증",
    subtitle: "단국대학교 부동산학회 13기 수료증",
    period: "2024.12",
    image: "/urid.png",
  },
  {
    title: "금융직무특화교육 수료증",
    period: "2025.09",
    image: "/time.png",
  },
  {
    title: "(사)서울부동산포럼 장학증서",
    period: "2025.11",
    image: "/money.png",
  },
  {
    title: "임장보고서 최우수상 상장",
    period: "2024.04",
    image: "/wow.jpg",
  },
]

const STORY_PARAGRAPHS: React.ReactNode[] = [
  <>
    <span className="font-semibold text-slate-900">
      상업용 부동산의 가치는 단순히 건물의 크기나 입지로만 결정되지 않는다
    </span>
    고 믿습니다. 운영 방식, 임대 구조, 자본 구조가 함께 설계될 때 비로소 자산의
    진짜 가치가 드러난다고 생각합니다. 
  </>,
  <>
    대학교 2학년 때 참여한 상업시설 분석 프로젝트에서{" "}
    <span className="font-semibold text-emerald-700">
      저수익 오피스 자산의 임대차 구조를 재배치해 NOI를 개선한 경험
    </span>
    이 제 생각을 더 확고하게 만들었습니다.
  </>,
  <>
    이 경험을 계기로, 같은 공간이라도 임대 구조를 재설계하고 운영 방식을 조정하며,{" "}
    <span className="font-semibold text-slate-900">
      데이터 기반 시나리오를 적용하면 수익성이 완전히 달라질 수 있다
    </span>
    는 점에 깊은 매력을 느끼게 되었습니다.
  </>,
  <>
    저는 특히{" "}
    <span className="font-semibold text-emerald-700">
      Excel 모델링, DCF, Cap-rate/NOI 분석 같은 정량분석
    </span>
    과{" "}
    <span className="font-semibold text-emerald-700">
      입지·수요·법규·임대전략을 해석하는 정성분석
    </span>
    을 함께 다루는 것을 강점으로 삼고 있습니다.
  </>,
  <>
    앞으로도 변화하는 시장의 흐름을 읽고, 팀과 함께{" "}
    <span className="font-semibold text-slate-900">
      현실적이면서도 의미 있는 성과
    </span>
    를 만들며,{" "}
    <span className="font-semibold text-slate-900">
      선택한 길에서 확실한 결과를 보여주는 전문가
    </span>
    로 성장하고자 합니다.
  </>,
]

const HOBBIES = ["🎨 전시회 관람", "✈️ 여행", "🎭 연극 관람", "🗣️ 영어 스피치 트레이닝"]
const STORY_IMAGE = "/uploads/about-image-1763032621623.jpg"

/* -------------------------------------------------------------------------- */
/* ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* -------------------------------------------------------------------------- */
/* SUB COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

// 1. Achievements Slider
function AchievementsSlider() {
  const scrollRef = React.useRef<HTMLDivElement | null>(null)

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return
    const amount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative group">
      {/* 왼쪽 버튼 */}
      <button
        type="button"
        onClick={() => scrollBy("left")}
        className="
          hidden md:flex
          absolute left-0 top-1/2 -translate-y-1/2
          h-9 w-9 items-center justify-center
          rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm
          text-slate-500 hover:text-slate-700
          shadow-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* 오른쪽 버튼 */}
      <button
        type="button"
        onClick={() => scrollBy("right")}
        className="
          hidden md:flex
          absolute right-0 top-1/2 -translate-y-1/2
          h-9 w-9 items-center justify-center
          rounded-full border border-slate-200 bg-white/60 backdrop-blur-sm
          text-slate-500 hover:text-slate-700
          shadow-sm
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Slider Area */}
      <div
        ref={scrollRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 px-1 -mx-1 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[240px] sm:w-[280px] rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
          >
            <div className="aspect-[3/4] w-full bg-slate-100 relative">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-emerald-600 mb-1 block">
                {item.period}
              </span>
              <h4 className="text-[15px] font-semibold text-slate-900 leading-tight">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export function About() {
  return (
    <section id="about" className="w-full bg-slate-50/50 pt-10 pb-24 lg:pt-16 lg:py-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ------------------ Header ------------------ */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold tracking-widest text-slate-600">
              INTRODUCTION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Journey & Expertise
          </h2>
          <p className="text-xl md:text-[1.35rem] text-slate-600 max-w-2xl leading-relaxed">
            부동산 금융과 자산관리 분야의 전문성을 쌓아온 과정과 핵심 역량을 소개합니다.
          </p>
        </motion.div>

        {/* ------------------ Horizontal Timeline (Roadmap) ------------------ */}
        <div className="mb-40 relative">
          

          {/* 타임라인 컨테이너: 카드 없음 + 가로선 양 끝까지 */}
          <div className="relative">
            {/* 가로 중심선 (데스크톱) – inset-x-0 로 끝까지 */}
            <div className="hidden lg:block pointer-events-none absolute left-1/2 top-[73px] -translate-x-1/2 w-screen h-[2px] bg-slate-200 z-0" />
            {/* 세로선 (모바일) */}
            <div className="lg:hidden absolute left-[27px] top-6 bottom-6 w-[2px] bg-slate-200 z-0" />

            <motion.div
              className="relative z-10 grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {TIMELINE_DATA.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex lg:block items-start gap-4 lg:gap-0 group ${
                      isEven ? "lg:pt-[110px]" : ""
                    }`}
                  >
                    {/* Icon Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="relative h-[46px] flex items-center justify-center">
                        <div
                          className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-105
                            ${
                              item.isFuture
                                ? "bg-slate-50 text-slate-700 border-2 border-dashed border-slate-400"
                                : "bg-slate-900 text-white border-[3px] border-white"
                            }
                          `}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      {/* 데스크톱에서 노드와 카드 이어주는 짧은 세로선 */}
                      {!isEven && (
                        <div className="hidden lg:block absolute bottom-full left-1/2 top-[46px] -translate-x-1/2 h-[28px] w-[2px] bg-slate-200 -mb-2" />
                      )}
                      {isEven && (
                        <div className="hidden lg:block absolute top-full mt-[-83px] left-1/2 -translate-x-1/2 h-[40px] w-[2px] bg-slate-200" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div
  className={`
    flex-1 lg:text-center lg:px-2
    ${
      isEven
        ? "lg:translate-y-3" // ✅ 짝수 노드만 위로 당기기 (약 4rem 위로)
        : "lg:mt-10"           // ✅ 홀수 노드는 기존 위치 유지
    }
  `}
>
  <span className="inline-block text-[15px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-3">
    {item.period}
  </span>
  <h4 className="text-[18px] font-bold text-slate-900 leading-tight mb-3">
    {item.title}
  </h4>
  <p className="text-[15px] text-slate-500 leading-relaxed break-keep">
    {item.description}
  </p>
</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* ------------------ Core Skills (With Bars) ------------------ */}
        <div className="mb-25">
          <div className="mb-8 flex items-center gap-2">
            <h3 className="text-[35px] font-bold text-slate-900">
              Core Competencies
            </h3>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                      <Icon className="h-5 w-5 text-slate-800" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{skill.title}</h4>
                  </div>

                  <p className="text-[16px] text-slate-600 leading-relaxed mb-6 h-[84px] md:h-[100px]">
                    {skill.description}
                  </p>

                  {/* Expertise Bar */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase">
                        Expertise
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* ------------------ About Me & Hobbies ------------------ */}
<motion.div
  className="mt-4 border-t border-slate-200 pt-14"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h3 className="text-3xl md:text-[2.1rem] font-bold text-slate-900 mb-10">
    About Me
  </h3>

  {/* 2x2 정사각형 카드 레이아웃 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 1. 부동산에 대한 관점 */}
    <div className="
  p-7 rounded-2xl bg-white border border-slate-200
  shadow-sm flex flex-col justify-between min-h-[260px]
  transition-all duration-300
  hover:shadow-[0_8px_22px_rgba(16,185,129,0.12)]
  hover:border-emerald-700/50
"
>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
          📌 부동산에 대한 관점
        </h4>
        <p className="text-[16px] text-slate-600 leading-relaxed mb-2">
          상업용 부동산의 가치는 단순한 입지나 물리적 요소가 아니라{" "}
          <span className="font-semibold text-emerald-700">
            운영 방식·임대 구조·자본 구조가 어떻게 설계되느냐
          </span>
          에 따라 비로소 자산의 진짜 가치가 결정된다고 생각합니다.
        </p>
        <p className="text-[16px] text-slate-600 leading-relaxed mt-5">
          동일한 건물이라도{" "}
          <span className="font-semibold text-emerald-700">
            임대 전략과 비용 구조가 어떻게 짜여 있는지
          </span>
          에 따라 수익성이 크게 달라질 수 있다는 점을 여러 프로젝트와 사례를 통해 직접 경험했습니다.
        </p>
      </div>
    </div>

    {/* 2. 전환점이 된 경험 (기존 내용 유지) */}
    <div className="
  p-7 rounded-2xl bg-white border border-slate-200
  shadow-sm flex flex-col justify-between min-h-[260px]
  transition-all duration-300
  hover:shadow-[0_8px_22px_rgba(16,185,129,0.12)]
  hover:border-emerald-700/50
"
>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
          ✨ 전환점이 된 경험
        </h4>
        <p className="text-[16px] text-slate-600 leading-relaxed mb-3">
          {STORY_PARAGRAPHS[1]}
        </p>
        <p className="text-[16px] text-slate-600 leading-relaxed">
          {STORY_PARAGRAPHS[2]}
        </p>
      </div>
    </div>

    {/* 3. 강점과 분석 스킬 */}
    <div className="
  p-7 rounded-2xl bg-white border border-slate-200
  shadow-sm flex flex-col justify-between min-h-[260px]
  transition-all duration-300
  hover:shadow-[0_8px_22px_rgba(16,185,129,0.12)]
  hover:border-emerald-700/50
"
>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
          📊 강점과 분석 스킬
        </h4>
        <p className="text-[16px] text-slate-600 leading-relaxed mb-2">
          저는{" "}
          <span className="font-semibold text-emerald-700">
            Excel 모델링, DCF, Cap-rate/NOI 분석
          </span>
          과 같은 정량적 분석과{" "}
          <span className="font-semibold text-emerald-700">
            입지·수요·법규·임대전략을 해석
          </span>
          하는 정성적 분석을 함께 다루는 것을 강점으로 삼고 있습니다.
        </p>
        <p className="text-[16px] text-slate-600 leading-relaxed mb-2">
          신탁사 인턴십을 통해 회계 전표 처리, 등기·계약 관련 문서 정리, 대외문 작성 등{" "}
          <span className="font-semibold text-slate-900">
            실무 전반의 흐름
          </span>
          을 직접 경험했습니다.
        </p>
        <p className="text-[16px] text-slate-600 leading-relaxed">
          이 과정에서{" "}
          <span className="font-semibold text-emerald-700">
            회계·법무·자금 흐름이 하나의 가치사슬로 연결되는 구조
          </span>
          를 이해하게 되었고, 자연스럽게{" "}
          <span className="font-semibold text-slate-900">
            대외 커뮤니케이션 역량
          </span>
          도 함께 강화할 수 있었습니다.
        </p>
      </div>
    </div>

    {/* 4. 앞으로의 방향성 */}
    <div className="
  p-7 rounded-2xl bg-white border border-slate-200
  shadow-sm flex flex-col justify-between min-h-[260px]
  transition-all duration-300
  hover:shadow-[0_8px_22px_rgba(16,185,129,0.12)]
  hover:border-emerald-700/50
"
>
      <div>
        <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
          🎯 앞으로의 방향성
        </h4>
        <p className="text-[16px] text-slate-600 leading-relaxed mb-2">
          저는 국내 시장을 넘어 해외 시장에서도 기회를 넓히기 위해 현재{" "}
          <span className="font-semibold text-emerald-700">
            영어 스피치와 커뮤니케이션
          </span>
          을 지속적으로 훈련하고 있습니다. 이를 바탕으로{" "}
          <span className="font-semibold text-slate-900">
            국제적인 부동산 금융 및 자산운용 기회
          </span>
          에도 도전할 수 있는 기반을 마련하고자 합니다.
        </p>
        <p className="text-[16px] text-slate-600 leading-relaxed mt-5">
          장기적으로는{" "}
          <span className="font-semibold text-emerald-700">
            해외 투자·개발·운용 분야
          </span>
          에서 경험을 쌓으며,{" "}
          <span className="font-semibold text-slate-900">
            국제 무대에서 활약하는 부동산 금융·자산운용 전문가
          </span>
          로 성장하는 것을 목표로 하고 있습니다.
        </p>
      </div>
    </div>

  </div>
</motion.div>

      </div>
    </section>
  )
}
