import { motion } from 'framer-motion';
import { fadeUp } from '../lib/utils';
import { Users2, LayoutTemplate, PlayCircle, RefreshCw } from 'lucide-react';

export function Solution() {
  const steps = [
    {
      step: '01',
      icon: Users2,
      title: 'Analisis Pengguna & Tugas',
      subtitle: 'User & Task Profiling',
      description:
        'Mengidentifikasi siapa calon pengguna, karakteristik demografis, model mental, serta dekonstruksi tugas hierarkis (Hierarchical Task Analysis) yang harus mereka selesaikan.',
      outcome: 'Output: Persona pengguna, skenario alur kerja, & batasan operasional.',
    },
    {
      step: '02',
      icon: LayoutTemplate,
      title: 'Perancangan Prototipe',
      subtitle: 'Iterative Prototyping',
      description:
        'Membangun rancangan secara bertahap mulai dari sketsa kertas (Low-Fidelity wireframe) hingga prototipe digital interaktif (High-Fidelity) sebelum kode perangkat lunak ditulis.',
      outcome: 'Output: Wireframe interaktif & desain sistem terstandarisasi.',
    },
    {
      step: '03',
      icon: PlayCircle,
      title: 'Pengujian Kegunaan Langsung',
      subtitle: 'Usability Testing',
      description:
        'Melibatkan 5 orang perwakilan pengguna nyata untuk menyelesaikan skenario tugas dengan metode think-aloud guna merekam ekspresi keraguan, salah klik, dan durasi.',
      outcome: 'Output: Rekaman pengujian, daftar temuan eror, & durasi tugas.',
    },
    {
      step: '04',
      icon: RefreshCw,
      title: 'Evaluasi & Iterasi Desain',
      subtitle: 'Refinement & Redesign',
      description:
        'Mengkategorikan masalah berdasarkan tingkat keparahan (cosmetic, minor, major, catastrophic), memperbaiki kelemahan antarmuka, dan menguji ulang hingga target tercapai.',
      outcome: 'Output: Skor metrik terverifikasi & antarmuka final tervalidasi.',
    },
  ];

  return (
    <section
      id="langkah-usability"
      className="relative w-full bg-black py-32 md:py-44 border-t border-[hsl(var(--border))]/30 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label & Heading */}
        <motion.div {...fadeUp(0.1)} className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <p className="text-xs tracking-[3px] uppercase text-neutral-400 mb-4 font-mono">
            BAGIAN 03 · METODOLOGI PERANCANGAN
          </p>
          <h2
            className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Langkah-Langkah <span className="font-serif italic font-normal text-white">Usability</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Proses berulang (iterative process) yang menempatkan pengguna sebagai pusat pengambilan keputusan pada setiap fase perancangan sistem.
          </p>
        </motion.div>

        {/* Video: Rounded rounded-2xl, aspect-[3/1] object-cover in natural colors */}
        <motion.div
          {...fadeUp(0.2)}
          className="w-full aspect-[3/1] rounded-2xl overflow-hidden mb-20 md:mb-24 liquid-glass border border-neutral-900 relative shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </motion.div>

        {/* 4-column feature grid with colored accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            const stepColors = [
              { iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30', border: 'hover:border-blue-500/40' },
              { iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30', border: 'hover:border-violet-500/40' },
              { iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'hover:border-emerald-500/40' },
              { iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30', border: 'hover:border-amber-500/40' },
            ][index % 4];

            return (
              <motion.div
                key={stepItem.step}
                {...fadeUp(0.15 * (index + 1))}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`liquid-glass rounded-xl p-6 flex flex-col justify-between border border-neutral-900 ${stepColors.border} transition-colors`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${stepColors.iconBg}`}>
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-neutral-300">
                      Langkah {stepItem.step}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono block mb-1">
                    {stepItem.subtitle}
                  </span>
                  <h3 className="font-semibold text-lg text-white mb-2.5">
                    {stepItem.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-neutral-900 text-xs text-neutral-300 font-medium">
                  {stepItem.outcome}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
