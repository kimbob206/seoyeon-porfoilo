"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Mail,
  MapPin,
  ArrowRight,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  Twitter,
  Youtube,
  Facebook,
  MessageSquare,
  Twitch,
  Smartphone,
  Clock,
  CheckCircle2,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/* DATA CONFIGURATION                                                         */
/* -------------------------------------------------------------------------- */

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  github: Github,
  message: MessageCircle,
  mail: Mail,
  globe: Send,
  twitter: Twitter,
  youtube: Youtube,
  facebook: Facebook,
  discord: MessageSquare,
  twitch: Twitch,
  telegram: Send,
} as const

type SocialKey = keyof typeof SOCIAL_ICONS

interface SocialLink {
  name: string
  icon: SocialKey
  url: string
}

const CONTACT_INFO = {
  name: "배서연",
  title: "단국대학교 도시계획·부동산학부",
  role: "Junior",
  email: "kimbob206@gmail.com",
  location: "서울시 양천구",
  workTime: "Always Open",
  responseTime: "24시간 이내 응답",
  qrContent: ["name", "email", "location"] as const,
}

const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/seoyeon0825" },
  { name: "GitHub", icon: "github", url: "https://github.com/seoyeon0825" },
  { name: "Email", icon: "mail", url: "mailto:kimbob206@gmail.com" },
  { name: "Instagram", icon: "message", url: "https://www.instagram.com/?flo=true" },
]

/* -------------------------------------------------------------------------- */
/* VCARD LOGIC                                                                */
/* -------------------------------------------------------------------------- */

function generateVCard() {
  const info = CONTACT_INFO
  const qrContent = info.qrContent.length > 0 ? info.qrContent : (["name", "email"] as const)
  let vCard = "BEGIN:VCARD\nVERSION:3.0\n"

  if (qrContent.includes("name")) {
    vCard += `FN:${info.name}\nN:${info.name};;;;\n`
    vCard += `TITLE:${info.title}\n`
  }
  if (qrContent.includes("email")) {
    vCard += `EMAIL:${info.email}\n`
  }
  if (qrContent.includes("location")) {
    vCard += `ADR;TYPE=WORK:;;${info.location};;;;\n`
  }
  const activeSocialLinks = SOCIAL_LINKS.filter((l) => l.url)
  if (activeSocialLinks.length > 0) {
    let note = "SNS:\\n"
    activeSocialLinks.forEach((l) => {
      note += `${l.name}: ${l.url}\\n`
    })
    vCard += `NOTE:${note}\n`
  }
  vCard += "END:VCARD"
  return vCard
}

const VCARD_STRING = generateVCard()
const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
  VCARD_STRING.trim()
)}`

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
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-slate-200 py-24 sm:py-32"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-50/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        {/* ------------------ SECTION HEADER ------------------ */}
        <motion.div
          className="mb-16 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 mb-4 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              CONTACT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Contact & Collaboration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            새로운 프로젝트 제안이나 협업 기회는 언제나 환영합니다!
            <br className="hidden sm:block" />
            편하신 방법으로 연락해 주세요.
          </p>
        </motion.div>

        {/* ------------------ MAIN CARD ------------------ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="relative rounded-[2.2rem] border border-white/60 bg-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-md overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-200/60">
            {/* LEFT: Contact Details */}
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              {/* Profile Header */}
              <div className="flex items-center gap-5 mb-7">
                <div className="relative w-50 h-50 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-inner">
                  <Image
                    src="/seoyeon_character.png"
                    alt="Profile"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {CONTACT_INFO.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm sm:text-base mt-0.5">
                    {CONTACT_INFO.title}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    {CONTACT_INFO.role}
                  </p>
                </div>
              </div>

              {/* Info List */}
              <div className="space-y-4 mb-7">
                <div className="mb-4">
  <div className="flex items-center gap-4 rounded-2xl bg-slate-900 px-4 py-3 sm:px-6 sm:py-4 text-slate-50 border border-slate-800">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 border border-slate-700/80">
      <Mail className="w-5 h-5 text-emerald-400" />
    </div>

    <div className="flex-1 min-w-0">
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-1">
        Email
      </p>
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-slate-50 hover:text-emerald-300 transition-colors break-all"
      >
        {CONTACT_INFO.email}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </div>
</div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-medium text-slate-900">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    {CONTACT_INFO.responseTime}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Open to Work
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Social Channels
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {SOCIAL_LINKS.map((link, idx) => {
                    const Icon = SOCIAL_ICONS[link.icon]
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all active:scale-95"
                      >
                        <Icon className="w-4 h-4 text-slate-600 group-hover:text-slate-900" />
                        <span className="text-xs sm:text-sm font-medium text-slate-600 group-hover:text-slate-900">
                          {link.name}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: QR Code */}
            <div className="bg-slate-50/50 p-7 sm:p-10 flex flex-col items-end justify-center text-right relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

<div className="relative z-10 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 mb-4 group cursor-pointer transition-transform hover:-translate-y-1 translate-x-[-70px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={QR_CODE_URL}
                  alt="Contact QR Code"
                  width={200}
                  height={200}
                  className="rounded-xl mix-blend-multiply"
                  unoptimized
                />
              </div>

              <div className="relative z-10 space-y-1.5 translate-x-[-40px]">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-emerald-500" />
                  Scan to Save
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  카메라로 스캔하여 연락처를 바로 저장할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ------------------ FOOTER MESSAGE ------------------ */}
        <motion.div
          className="mt-30 text-center space-y-1.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl sm:text-2xl text-slate-700">
            제 작업과 여정을 찾아와 주셔서 감사합니다!
          </p>
          <p className="text-s sm:text-sm text-slate-600 uppercase tracking-widest">
            앞으로의 가능성을 함께 만들어갈 수 있기를 기대합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
