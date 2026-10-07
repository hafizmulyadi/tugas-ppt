import { motion } from "framer-motion";
import { ASSETS } from "../assets";
import { fadeUp } from "../lib/utils";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export function Hero() {
  const quickLinks = [
    { label: "Pentingnya Usability", href: "#pentingnya-usability" },
    { label: "5 Atribut Kualitas", href: "#atribut-usability" },
    { label: "Langkah Perancangan", href: "#langkah-usability" },
    { label: "Metode Pengukuran", href: "#metode-pengukuran" },
    { label: "Siklus Hidup", href: "#siklus-hidup" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Autoplaying Looping Muted MP4 Video with natural colors */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75 z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Scrim */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Bottom Gradient for Smooth Fade to Pure Black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/85 to-transparent z-[2] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-28 md:pt-32 pb-24 flex flex-col items-center">
        {/* Usability Engineering Badge / Avatar Row */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="flex -space-x-2 overflow-hidden">
            {ASSETS.avatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar.src}
                alt={avatar.alt}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border-2 border-black object-cover inline-block"
              />
            ))}
          </div>
          <span className="text-neutral-400 text-xs md:text-sm font-medium tracking-tight">
            Materi Usability · Standar ISO 9241-11 & Jakob Nielsen
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-white leading-[1.08] max-w-4xl"
          style={{ textWrap: "balance" }}
        >
          <span className="font-serif italic font-normal text-white">
            Usability
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base md:text-lg text-[hsl(var(--hero-subtitle))] max-w-3xl mx-auto mt-6 mb-10 leading-relaxed font-normal"
        >
          Memahami bagaimana merancang sistem yang mudah digunakan, efektif,
          efisien, dan nyaman bagi pengguna melalui prinsip, metode pengukuran,
          serta proses evaluasi usability
        </motion.p>

        {/* Quick Jump Buttons to Usability Sections */}
        <motion.div
          {...fadeUp(0.4)}
          className="w-full max-w-2xl mx-auto liquid-glass rounded-2xl p-4 border border-neutral-800"
        >
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 text-center">
            Pilih Modul Pembelajaran
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 transition-colors flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                <ArrowDown className="w-3 h-3 text-neutral-500" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom micro notes */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-neutral-500 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
            Learnability & Efficiency
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
            System Usability Scale (SUS)
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
            Mayhew Engineering Lifecycle
          </span>
        </motion.div>
      </div>
    </section>
  );
}
