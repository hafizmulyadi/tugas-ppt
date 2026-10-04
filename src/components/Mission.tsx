import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  isSpecial?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ word, isSpecial, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.28em] transition-colors duration-200 ${
        isSpecial ? 'text-white font-semibold' : 'text-[hsl(var(--hero-subtitle))]'
      }`}
    >
      {word}
    </motion.span>
  );
}

export function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  const p1Text =
    "Usability adalah seni membangun kejelasan di mana kebutuhan manusia bertemu dengan kecermatan sistem — menciptakan interaksi yang intuitif, cepat, dan bermakna.";
  const p2Text =
    "Standar Jakob Nielsen menetapkan 5 atribut fundamental: Learnability, Efficiency, Memorability, Pencegahan Eror, dan Kepuasan Subjektif pengguna.";

  const p1Words = p1Text.split(' ');
  const p2Words = p2Text.split(' ');

  const totalWords = p1Words.length + p2Words.length;

  const attributes = [
    {
      num: '01',
      title: 'Learnability (Kemudahan Belajar)',
      desc: 'Seberapa mudah pengguna menyelesaikan tugas-tugas dasar saat pertama kali melihat atau menggunakan antarmuka sistem.',
      benchmark: 'Target: Pengguna baru mampu menyelesaikan alur utama dalam waktu < 3 menit tanpa buku manual.',
    },
    {
      num: '02',
      title: 'Efficiency (Efisiensi Penggunaan)',
      desc: 'Setelah pengguna memahami alur kerja, seberapa cepat mereka dapat menyelesaikan tugas-tugas mereka secara produktif.',
      benchmark: 'Target: Jumlah langkah/klik minimal dan waktu rata-rata penyelesaian (Time on Task) yang optimal.',
    },
    {
      num: '03',
      title: 'Memorability (Daya Ingat)',
      desc: 'Ketika pengguna kembali menggunakan sistem setelah jangka waktu tertentu, seberapa mudah mereka mengingat kembali cara penggunaannya.',
      benchmark: 'Target: Tidak membutuhkan proses orientasi ulang (re-learning) bagi pengguna yang jarang aktif.',
    },
    {
      num: '04',
      title: 'Errors (Tingkat & Penanganan Eror)',
      desc: 'Berapa banyak kesalahan yang dilakukan pengguna, seberapa parah akibatnya, dan bagaimana sistem membantu mereka memulihkannya.',
      benchmark: 'Target: Pesan eror jelas, instruktif, disertai tombol pemulihan (undo/cancel) yang mudah diakses.',
    },
    {
      num: '05',
      title: 'Satisfaction (Kepuasan Pengguna)',
      desc: 'Seberapa menyenangkan, nyaman, dan meyakinkan desain antarmuka tersebut saat digunakan secara subjektif oleh pengguna.',
      benchmark: 'Target: Skor persepsi tinggi pada pengujian kepuasan (SUS Score > 75).',
    },
  ];

  return (
    <section
      id="atribut-usability"
      ref={sectionRef}
      className="relative w-full bg-black pt-16 pb-32 md:pb-44 px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-[hsl(var(--border))]/20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Section Label */}
        <p className="text-xs uppercase tracking-[3px] font-mono text-neutral-400 mb-6">
          BAGIAN 02 · 5 ATRIBUT USABILITY (JAKOB NIELSEN)
        </p>

        {/* Large 800x800 looping autoplaying muted video in natural color */}
        <div className="w-full max-w-[800px] aspect-square rounded-3xl overflow-hidden mb-16 md:mb-20 liquid-glass border border-neutral-900 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]" />
        </div>

        {/* Scroll-driven Word-by-Word Reveal */}
        <div className="max-w-4xl mx-auto px-4 mb-20">
          <p
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.3] text-center"
            style={{ textWrap: 'balance' }}
          >
            {p1Words.map((word, i) => {
              const clean = word.toLowerCase().replace(/[^a-z]/g, '');
              const isSpecial =
                clean === 'kejelasan' || clean === 'intuitif' || clean === 'bermakna';
              const start = i / totalWords;
              const end = (i + 1) / totalWords;

              return (
                <Word
                  key={`p1-${i}-${word}`}
                  word={word}
                  isSpecial={isSpecial}
                  progress={scrollYProgress}
                  range={[start, Math.min(1, end + 0.05)]}
                />
              );
            })}
          </p>

          <p
            className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-[1.4] text-center"
            style={{ textWrap: 'balance' }}
          >
            {p2Words.map((word, i) => {
              const globalIndex = p1Words.length + i;
              const start = globalIndex / totalWords;
              const end = (globalIndex + 1) / totalWords;

              return (
                <Word
                  key={`p2-${i}-${word}`}
                  word={word}
                  isSpecial={false}
                  progress={scrollYProgress}
                  range={[start, Math.min(1, end + 0.05)]}
                />
              );
            })}
          </p>
        </div>

        {/* 5 Atribut Usability Grid with Colored Accents */}
        <div className="w-full text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attributes.map((attr, idx) => {
            const colors = [
              { tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', border: 'hover:border-emerald-500/40' },
              { tag: 'text-sky-400 bg-sky-500/10 border-sky-500/30', border: 'hover:border-sky-500/40' },
              { tag: 'text-violet-400 bg-violet-500/10 border-violet-500/30', border: 'hover:border-violet-500/40' },
              { tag: 'text-rose-400 bg-rose-500/10 border-rose-500/30', border: 'hover:border-rose-500/40' },
              { tag: 'text-amber-400 bg-amber-500/10 border-amber-500/30', border: 'hover:border-amber-500/40' },
            ][idx % 5];

            return (
              <div
                key={attr.num}
                className={`liquid-glass rounded-2xl p-6 border border-neutral-900 ${colors.border} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${colors.tag}`}>
                      ATRIBUT {attr.num}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{attr.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {attr.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-800 text-xs text-neutral-300">
                  <span className="text-white font-medium">Fokus Metrik:</span> {attr.benchmark}
                </div>
              </div>
            );
          })}

          {/* Golden Rule Card with subtle indigo accent */}
          <div className="liquid-glass rounded-2xl p-6 border border-indigo-900/40 bg-indigo-950/10 flex flex-col justify-center">
            <span className="font-mono text-xs text-indigo-400 uppercase tracking-wider block mb-1">
              KORELASI KRUSIAL
            </span>
            <h4 className="text-lg font-semibold text-white mb-2">
              Utility + Usability = Useful
            </h4>
            <p className="text-neutral-300 text-xs leading-relaxed">
              Sistem yang mudah digunakan tetapi tidak memiliki fungsi yang dibutuhkan pengguna adalah sia-sia. Begitu pula fungsi yang lengkap tanpa usability tidak akan terpakai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
