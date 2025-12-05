"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

interface ProjectDetails {
  objective: string
  approach: string[]
  result: string[]
  role: string[]
}

interface Project {
  image: string
  video?: string
  title: string
  description?: string
  pdf?: string
  details: ProjectDetails
}

const PROJECTS: Project[] = [
  {
    image: "/uploads/project-0-1763031851249.png",
    title: "평택 라움프라자 신축사업 PF IM",
    pdf: "/Pyeongtaek_IM.pdf",
    details: {
      objective:
        "평택시 신축사업에 대해 PF 130억 조달을 전제로 한 LTV·수익률·리스크를 정량적으로 검증",
      approach: [
        "PF 조건(금리·LTV·담보·우선수익권·책임준공) 정리 후 금융 구조도 설계",
        "인구·소득·산업단지·생활SOC 데이터를 활용한 배후수요 분석",
        "인근 상가 분양·임대사례를 기준으로 목표 분양가·매출 시나리오 수립",
        "총사업비·분양수입·민감도(분양률·분양가)를 반영한 사업수지 모델 구축",
      ],
      result: [
        "PF 130억 조달 기준 LTV 48.1%, All-in 금리 10.2%, 필수사업비 확보율 101.6% 도출",
        "1층 분양평단가가 인근 상가 대비 약 20~30% 낮아 분양 경쟁력 확보 가능",
        "총사업비 대비 세전이익 약 86.7억, 수익률 약 32.1% 수준으로 사업성 ‘양호’ 판단",
      ],
      role: [
        "PF 구조도·사업비·금융조건 정리 및 수치 검증, 사업수지표 직접 작성",
        "인근 상가 평단가·분양률을 비교해 목표 분양가와 수익성 검증",
        "IM 내 금융·수익성 파트를 구조화하고 주요 인사이트 문장화",
      ],
    },
  },
  {
    image: "/Geumgok_AuctionReport-thumb.png",
    title: "금곡 엘지아파트 경매 권리분석 보고서",
    pdf: "/Geumgok_AuctionReport.pdf",
    details: {
      objective:
        "경매물건에 대해 권리인수 리스크를 최소화하면서도 목표 수익률을 달성할 수 있는 적정 낙찰가를 산정함.",
      approach: [
        "등기부·임차인 현황을 정리해 말소기준권리 이후 인수/소멸 권리 구분",
        "실거래가·KB 시세·경매 낙찰사례를 비교해 시가와 안전마진 범위 설정",
        "대출·취득부대비용·보유비용을 포함한 총투입비 및 2년 보유 후 매각 시 수익률 계산",
      ],
      result: [
        "말소기준권리 이후 등기는 모두 소멸되는 구조로, 추가 인수금액 ‘0원’에 가까운 물건으로 판단",
        "인근 시세 대비 보수적 감가를 반영해 적정 낙찰가 약 3.72억 도출, 총투입 약 3.54억 수준",
        "2년 보유 후 매도 시 세전 수익률 약 13.1%, 전세 운용 시 적정 전세가 약 2.6억으로 추정",
      ],
      role: [
        "예상 배당표·입찰가별 수익률 모델을 직접 구축하고 시나리오 비교",
        "권리관계 구조를 도식화해 인수 리스크를 직관적으로 제시",
        "보고서 전체 구조 설계 및 실무형 양식에 맞춰 문서 편집",
      ],
    },
  },
  {
    image: "/Seongsu_SiteVisitReport-thumb.png",
    title: "성수 SKV1센터 1 임장활동 보고서",
    pdf: "/Seongsu_SiteVisitReport.pdf",
    details: {
      objective:
        "지식산업센터의 물리·입지·개발 모멘텀을 현장 기준으로 정리하고, 상품성·가격대의 적정성을 평가함.",
      approach: [
        "연면적·층수·주차·승강기 등 기본 스펙과 층별 용도·테넌트 구성 현장 조사",
        "교통·생활편의시설·산업·문화 수요를 통합한 입지·상권 분석",
        "삼표부지 개발·정비구역 지정 등 개발계획과 과거/현재 거래사례를 비교",
      ],
      result: [
        "산업·주거·문화 복합수요가 집중되는 성수 핵심 입지로, 공실 리스크는 낮은 편",
        "삼표부지 개발 및 정비구역 추진 등 중장기 개발 모멘텀 존재",
        "동일 권역 경쟁 지식산업센터 대비 상품성은 ‘상~중’ 수준, 가격대는 상단부에 위치",
      ],
      role: [
        "현장 방문을 통한 테넌트 리스트·층별 용도 정리 및 사진 기록",
        "실거래·매물 데이터를 수집해 가격대 포지셔닝 차트 작성",
        "임장 결과를 SWOT·체크리스트 형식으로 구조화해 발표자료로 전환",
      ],
    },
  },
  {
    image: "/Shinchon_SitePlanning-thumb.png",
    title: "신촌 민자역사 공실 해소 및 청년주택 전환안",
    pdf: "https://drive.google.com/file/d/1ObmWZpUI-MN--fdx8WAI3HR5I1ElB9Hq/preview",
    details: {
      objective:
        "장기간 방치된 신촌 민자역사의 공실·안전·체납 문제를 해결하고, 역세권·청년주택·상권 활성화를 동시에 달성할 수 있는 재개발 방향을 제시함.",
      approach: [
        "소유·운영·사용수익 구조와 점용기간 등 법적 제약 조건 정리",
        "역사 구조·선로·소음·동선 문제와 상권 침체·청년 주거수요 데이터를 함께 분석",
        "철거 후 청년주택 도입, 저층 상가 재편, 동선 개선을 결합한 복합 개발안 설계",
      ],
      result: [
        "현재 구조 유지 시 공실·체납·안전 문제로 수익형 자산으로의 정상 운영은 사실상 불가능",
        "국가귀속 후 무상철거 + 청년주택·상가 복합 개발이 재무·도시계획 측면에서 가장 타당",
        "철로 상부 보행데크 대신 기존 육교·회전교차로를 활용한 대학–상권–역사 연결 동선 개선안 제시",
      ],
      role: [
        "상권·유동인구·주거수요 자료 조사 및 기존 철거·재개발 논의 정리",
        "복수 시나리오의 장단점과 재무·도시적 효과를 비교하는 구조 설계",
        "최종 제안서의 논리 흐름 및 핵심 메시지 문장화",
      ],
    },
  },
  {
    image: "/Gwanggyo_AssetManagement-thumb.png",
    title: "광교 원희캐슬 B동 수익성 개선안",
    pdf: "https://drive.google.com/file/d/1CbS6JZM17Ie3OEpqdUQ4hlUHRpgy-5eX/preview",
    details: {
      objective:
        "광교 원희캐슬 B동 7·8층을 7년 보유 후 매각하는 가정 하에 현재 수익성과 개선 여지를 수치로 검증해, 매입 의사결정의 기준을 제시함.",
      approach: [
        "보유·매각 기간별 임대료·공실·운영비를 반영한 연도별 현금흐름표 작성",
        "현 임대조건 기준 Cap Rate·IRR·목표 매각가 산정",
        "월세·관리비·보증금·렌트프리/TI를 조정한 4가지 개선 시나리오 설계 후 IRR 재계산",
      ],
      result: [
        "기존 IRR은 약 6.84%로, 목표 수익률 대비 매입 매력은 ‘제한적’ 수준",
        "4개 개선안 중 IRR이 개선된 것은 option 2뿐이며, 상승 폭도 약 0.09%p에 그침",
        "부분 매입 구조 특성상 부가수익·운영 효율 개선 여지가 작아, 매입가 재조정 없이는 투자 적정성 부족",
      ],
      role: [
        "보유기간별 현금흐름·IRR·NOI 계산 모델 구축 및 시나리오별 비교표 작성",
        "각 시나리오의 수익성 변화 포인트를 인사이트 문장으로 정리",
        "발표용 슬라이드에서 투자 판단 기준(매입가 조정 필요)을 명확히 제시",
      ],
    },
  },
  {
    image: "/Singapore_LandLeaseHousing-thumb.png",
    title: "싱가포르 토지임대부주택의 국내 정착방안",
    pdf: "/Singapore_LandLeaseHousing.pdf",
    details: {
      objective:
        "싱가포르 토지임대부주택(HDB) 제도의 구조를 해부하고, 서울 내에서 어떤 조건에서만 부분적으로 적용 가능한지 검토함.",
      approach: [
        "HDB의 공급 방식, 재원 구조, 분양·전매 규제, 가격 결정 메커니즘을 체계적으로 정리",
        "국내 공공주택·토지임대주택 제도의 도입·실패 사례를 비교 분석",
        "서울 국·공유지 위치·지가·PIR 등을 기준으로 적용 가능성이 있는 행정구를 스크리닝",
      ],
      result: [
        "싱가포르는 넓은 국유지와 CPF를 활용해 토지임대 구조가 장기 안정적으로 작동",
        "한국은 토지임대료 부담·소유 선호·부족한 공공택지 등으로 동일 모델 도입이 구조적으로 어려움",
        "지가·PIR·국공유지 여건을 종합할 때, 중구·종로구·서초구 정도가 부분적 도입 가능성이 있는 지역으로 도출",
      ],
      role: [
        "HDB 제도와 국내 제도의 차이를 도표·플로우 차트로 정리",
        "서울 국공유지 데이터를 수집해 행정구별 적용 가능성 비교",
        "발표 슬라이드 구조 설계 및 결론 파트 서술 담당",
      ],
    },
  },
]

const INITIAL_DISPLAY = 3
const LOAD_MORE_COUNT = 3

function getProjectTag(title: string): string {
  if (title.includes("PF") || title.toLowerCase().includes("information memorandum"))
    return "PF / IM"
  if (title.includes("공실") || title.includes("계획 연구")) return "도시·주거 계획"
  if (title.includes("수익성 개선")) return "자산관리 / AM"
  if (title.includes("경매")) return "경매 / 권리분석"
  if (title.includes("임장") || title.includes("현장")) return "임장 / 리포트"
  if (title.includes("토지임대") || title.includes("제도")) return "제도·정책 연구"
  return "프로젝트"
}

export function Projects() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY)
  const [isExpanded, setIsExpanded] = useState(false) // ✅ 펼침 여부
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const visibleProjects = PROJECTS.slice(0, displayCount)
  const hasMoreProjects = PROJECTS.length > INITIAL_DISPLAY

  useEffect(() => {
    const target = sectionRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  // 펼치기
  const loadMore = () => {
    setDisplayCount(PROJECTS.length)
    setIsExpanded(true)
  }

  // 접기
  const collapseProjects = () => {
    setDisplayCount(INITIAL_DISPLAY)
    setIsExpanded(false)
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`w-full border-t border-slate-200 
    bg-slate-100/80 
    bg-[url('/textures/noise-light.png')] bg-[length:220px_220px] bg-repeat
    py-20 sm:py-24 lg:py-28 transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-0">
{/* 섹션 헤더 */}
<header className="mb-12 sm:mb-14 lg:mb-16">
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 mb-6 shadow-sm">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
    <span className="text-xs font-bold tracking-widest text-slate-600">
      PROJECTS
    </span>
  </div>

  <h2 className="text-4xl sm:text-5xl lg:text-[2.9rem] font-bold tracking-tight text-slate-900 mb-6">
    Project Portfolio
  </h2>

  <p className="text-xl md:text-[1.35rem] text-slate-600 max-w-2xl leading-relaxed">
    주요 프로젝트를 정량적 결과와 함께 정리한 포트폴리오입니다.
  </p>
</header>

        {/* 프로젝트 카드들 – 세로 나열 */}
        <div className="space-y-10 lg:space-y-12">
          {visibleProjects.map((project, index) => {
            const tag = getProjectTag(project.title)
            const hasPdf = !!project.pdf

            return (
              <article
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr]">
                  {/* 왼쪽: PDF 뷰어 / 썸네일 */}
                  <div className="relative bg-slate-900/3 border-b lg:border-b-0 lg:border-r border-slate-100">
                    {hasPdf ? (
                      <iframe
                        src={project.pdf}
                        className="w-full h-[320px] sm:h-[380px] lg:h-full"
                        style={{ border: "none" }}
                        title={project.title}
                      />
                    ) : (
                      <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* 태그 */}
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        {tag}
                      </span>
                      {hasPdf && (
                        <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium text-slate-800 shadow-sm">
                          PDF 리포트
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 오른쪽: 다크 배경 상세 설명 */}
                  <div className="bg-slate-900 text-slate-50 p-6 sm:p-7 lg:p-8 xl:p-9">
                    <header className="mb-6">
                      <h3 className="text-[18px] sm:text-[20px] lg:text-[21px] font-semibold text-white leading-snug mb-3">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-[14px] sm:text-[15px] text-slate-200/90 leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </header>

                    <div className="space-y-5 text-[13px] sm:text-[14px] leading-relaxed">
                      {/* OBJECTIVE */}
                      <section>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1.5">
                          Objective
                        </h4>
                        <p className="text-slate-100/90">{project.details.objective}</p>
                      </section>

                      {/* APPROACH */}
                      <section>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1.5">
                          Approach
                        </h4>
                        <ul className="list-disc list-inside space-y-1.5 text-slate-100/90">
                          {project.details.approach.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </section>

                      {/* RESULT */}
                      <section>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1.5">
                          Result
                        </h4>
                        <ul className="list-disc list-inside space-y-1.5">
                          {project.details.result.map((item, idx) => (
                            <li key={idx} className="text-emerald-300 font-medium">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* ROLE */}
                      <section>
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300 mb-1.5">
                          Role
                        </h4>
                        <ul className="list-disc list-inside space-y-1.5 text-slate-100/90">
                          {project.details.role.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* 더보기 / 접기 버튼 */}
        {hasMoreProjects && (
          <div className="mt-12 text-center">
            {!isExpanded ? (
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 px-6 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ChevronDown className="h-4 w-4" />
                더 많은 프로젝트 보기
              </button>
            ) : (
              <button
                onClick={collapseProjects}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 px-6 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
              >
                <ChevronDown className="h-4 w-4 rotate-180" />
                프로젝트 접기
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
