import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/utils';
import {
  Activity,
  Sliders,
  Calculator,
  Repeat,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';

export function UsabilityCurriculum() {
  // Interactive SUS Calculator State
  const [susScores, setSusScores] = useState<number[]>([4, 2, 4, 1, 5, 2, 4, 2, 5, 1]);
  const [showCalculator, setShowCalculator] = useState(true);

  // Standard SUS formula calculation:
  // Odd questions (0, 2, 4, 6, 8): value - 1
  // Even questions (1, 3, 5, 7, 9): 5 - value
  // Sum * 2.5 = 0 to 100 scale
  const calculateSus = () => {
    let total = 0;
    susScores.forEach((val, idx) => {
      if (idx % 2 === 0) {
        total += val - 1;
      } else {
        total += 5 - val;
      }
    });
    return Math.round(total * 2.5);
  };

  const susResult = calculateSus();

  const getSusGrade = (score: number) => {
    if (score >= 85)
      return {
        grade: 'Grade A+ (Excellent)',
        desc: 'Pengalaman sangat memuaskan, minim friksi kognitif.',
        textColor: 'text-emerald-400',
        badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        cardBorder: 'border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      };
    if (score >= 80)
      return {
        grade: 'Grade A (Good)',
        desc: 'Usability di atas rata-rata industri perangkat lunak.',
        textColor: 'text-green-400',
        badge: 'bg-green-500/20 text-green-300 border-green-500/40',
        cardBorder: 'border-green-500/30',
      };
    if (score >= 68)
      return {
        grade: 'Grade C (Average Benchmark)',
        desc: 'Skor rata-rata global 68, sistem dapat diterima pengguna.',
        textColor: 'text-sky-400',
        badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
        cardBorder: 'border-sky-500/30',
      };
    if (score >= 51)
      return {
        grade: 'Grade D (Poor)',
        desc: 'Banyak titik kebingungan, butuh perbaikan antarmuka segera.',
        textColor: 'text-amber-400',
        badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        cardBorder: 'border-amber-500/30',
      };
    return {
      grade: 'Grade F (Unusable)',
      desc: 'Tingkat kegagalan tugas tinggi, antarmuka kritis untuk dirombak.',
      textColor: 'text-rose-400',
      badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      cardBorder: 'border-rose-500/30',
    };
  };

  const susQuestions = [
    '1. Saya rasa saya akan sering menggunakan sistem ini.',
    '2. Saya merasa sistem ini terlalu rumit untuk hal sederhana.',
    '3. Saya merasa sistem ini mudah digunakan.',
    '4. Saya merasa butuh bantuan teknis untuk bisa menggunakan sistem ini.',
    '5. Fitur-fitur dalam sistem ini terintegrasi dengan sangat baik.',
    '6. Terlalu banyak inkonsistensi dalam antarmuka sistem ini.',
    '7. Kebanyakan orang akan belajar memakai sistem ini dengan sangat cepat.',
    '8. Saya merasa sistem ini sangat membingungkan saat dipakai.',
    '9. Saya merasa sangat percaya diri menggunakan sistem ini.',
    '10. Saya harus mempelajari banyak hal sebelum bisa mahir memakainya.',
  ];

  return (
    <div className="w-full">
      {/* ============================================================== */}
      {/* SECTION 04: METODE PENGUKURAN REKAYASA USABILITY               */}
      {/* ============================================================== */}
      <section
        id="metode-pengukuran"
        className="relative w-full bg-black py-32 md:py-40 border-t border-[hsl(var(--border))]/30 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div {...fadeUp(0.1)} className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xs tracking-[3px] uppercase text-neutral-400 mb-3 font-mono">
              BAGIAN 04 · EVALUASI & METRIK
            </p>
            <h2
              className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Metode Pengukuran <span className="font-serif italic font-normal text-white">Rekayasa Usability</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              Kombinasi pendekatan kuantitatif empiris (metrik angka & waktu) dan kualitatif diagnostik (evaluasi pakar & observasi pengguna) untuk mengukur kegunaan sistem.
            </p>
          </motion.div>

          {/* Grid Kuantitatif vs Kualitatif */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* 1. Pendekatan Kuantitatif */}
            <motion.div
              {...fadeUp(0.2)}
              className="liquid-glass rounded-2xl p-8 border border-neutral-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Pendekatan Kuantitatif (Angka & Waktu)
                  </span>
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Metrik Kuantitatif Terstandarisasi
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Menghasilkan angka objektif yang dapat dibandingkan sebelum dan sesudah perubahan desain, atau terhadap tolok ukur industri.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      1. System Usability Scale (SUS)
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Kuesioner 10 butir dengan skala Likert 1-5 yang dinormalisasi menjadi skor 0-100. Skor rata-rata industri global adalah 68.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      2. Task Completion Rate (TCR)
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Persentase keberhasilan pengguna dalam menyelesaikan skenario tugas tanpa bantuan: (Tugas Selesai ÷ Total Percobaan) × 100%.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      3. Time-on-Task (ToT) & Single Ease Question (SEQ)
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Waktu durasi riil penyelesaian tugas, dipadukan pertanyaan kemudahan 1-7 langsung setelah tugas diselesaikan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                <span className="text-white font-medium">Kelebihan:</span> Menghasilkan data statistik kuantitatif untuk pemangku kepentingan (stakeholder).
              </div>
            </motion.div>

            {/* 2. Pendekatan Kualitatif */}
            <motion.div
              {...fadeUp(0.3)}
              className="liquid-glass rounded-2xl p-8 border border-neutral-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Pendekatan Kualitatif (Inspeksi & Diagnostik)
                  </span>
                  <Sliders className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Metode Kualitatif & Diagnostik Masalah
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Menjawab pertanyaan &ldquo;mengapa pengguna bingung&rdquo; dan bagian spesifik antarmuka mana yang perlu diperbaiki.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      1. Heuristic Evaluation (10 Prinsip Nielsen)
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Inspeksi antarmuka oleh 3-5 evaluator ahli independen berdasarkan 10 prinsip baku (visibilitas status, kontrol pengguna, konsistensi).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      2. Cognitive Walkthrough
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Penelusuran langkah per langkah dari kacamata pemula: Apakah pengguna mengerti aksi apa yang harus dilakukan berikutnya?
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <h5 className="font-semibold text-white text-sm mb-1">
                      3. Think-Aloud Testing (Protokol Berpikir Nyaring)
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Pengguna mengucapkan pemikiran, keraguan, dan interpretasi mereka secara verbal saat berinteraksi dengan antarmuka.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
                <span className="text-white font-medium">Kelebihan:</span> Mengidentifikasi penyebab akar masalah desain secara mendalam.
              </div>
            </motion.div>
          </div>

          {/* Interactive Tool: System Usability Scale (SUS) Calculator */}
          <motion.div
            {...fadeUp(0.4)}
            className="liquid-glass rounded-2xl p-8 border border-neutral-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Alat Ukur Interaktif
                </span>
                <h4 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-white" />
                  Kalkulator System Usability Scale (SUS)
                </h4>
                <p className="text-xs text-neutral-400 mt-1">
                  Uji instrumen 10 pertanyaan standar industri dan lihat hasil konversi skor 0-100 secara langsung.
                </p>
              </div>

              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-white text-black px-4 py-2 rounded-xl text-xs font-semibold hover:bg-neutral-200 transition-colors shrink-0"
              >
                {showCalculator ? 'Sembunyikan Form Pertanyaan' : 'Tampilkan 10 Pertanyaan SUS'}
              </button>
            </div>

            {/* Live Score Display Card with dynamic color feedback */}
            {(() => {
              const currentGrade = getSusGrade(susResult);
              return (
                <div className={`flex flex-col md:flex-row items-center justify-between p-6 bg-neutral-950/90 rounded-xl border transition-all duration-300 gap-6 ${currentGrade.cardBorder}`}>
                  <div className="flex items-center gap-5">
                    <div className={`text-5xl md:text-6xl font-mono font-bold tracking-tighter ${currentGrade.textColor}`}>
                      {susResult}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                        Skor SUS Terhitung (Skala 0-100)
                      </span>
                      <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-1.5 ${currentGrade.badge}`}>
                        {currentGrade.grade}
                      </span>
                      <p className="text-xs text-neutral-400">
                        Nilai ambang batas industri: <span className="text-white font-mono font-medium">68.0</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-300 md:text-right max-w-sm border-t md:border-t-0 md:border-l border-neutral-800 pt-3 md:pt-0 md:pl-6">
                    <span className="text-white block font-medium mb-1">Interpretasi Hasil:</span>
                    {currentGrade.desc}
                  </div>
                </div>
              );
            })()}

            {/* 10 SUS Questions Form */}
            {showCalculator && (
              <div className="mt-8 space-y-3 pt-6 border-t border-neutral-800/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 px-1">
                  <span>Pernyataan Kuesioner Usability</span>
                  <span className="font-mono text-neutral-400">Skala 1 (Sangat Tidak Setuju) — 5 (Sangat Setuju)</span>
                </div>

                {susQuestions.map((question, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 hover:border-neutral-800 transition-colors"
                  >
                    <span className="text-xs text-neutral-300 font-medium">
                      {question}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          onClick={() => {
                            const updated = [...susScores];
                            updated[idx] = val;
                            setSusScores(updated);
                          }}
                          className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold transition-all ${
                            susScores[idx] === val
                              ? 'bg-white text-black shadow-sm'
                              : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                          }`}
                          aria-label={`Skor ${val} untuk pertanyaan ${idx + 1}`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 05: SIKLUS HIDUP USABILITY (USABILITY LIFECYCLE)        */}
      {/* ============================================================== */}
      <section
        id="siklus-hidup"
        className="relative w-full bg-black py-32 md:py-40 border-t border-[hsl(var(--border))]/30 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div {...fadeUp(0.1)} className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xs tracking-[3px] uppercase text-neutral-400 mb-3 font-mono">
              BAGIAN 05 · INTEGRASI PENGEMBANGAN SISTEM
            </p>
            <h2
              className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Siklus Hidup <span className="font-serif italic font-normal text-white">Usability</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mt-4 max-w-2xl mx-auto">
              Model Siklus Hidup Usability (Deborah Mayhew &amp; Jakob Nielsen) yang menghubungkan analisis awal, desain berulang, hingga evaluasi pasca-implementasi.
            </p>
          </motion.div>

          {/* 3 Main Lifecycle Phases with colored badges & borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phase 1 */}
            <motion.div
              {...fadeUp(0.2)}
              className="liquid-glass rounded-2xl p-8 border border-neutral-900 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                    Fase 1 · Pra-Perancangan
                  </span>
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-mono flex items-center justify-center font-bold">
                    1
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Analisis Kebutuhan (Requirements Analysis)
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Fondasi proyek yang mencakup pemetaan profil pengguna, analisis konteks tugas lingkungan kerja, benchmarking sistem yang ada, serta penetapan sasaran kuantitatif usability.
                </p>
              </div>

              <div className="space-y-2 text-xs text-neutral-400 border-t border-neutral-900 pt-4">
                <span className="text-white font-medium block mb-1">Aktivitas Utama:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Wawancara pengguna & analisis tugas hierarkis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Penetapan batas metrik kuantitatif (Time & Error)</span>
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              {...fadeUp(0.3)}
              className="liquid-glass rounded-2xl p-8 border border-neutral-900 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                    Fase 2 · Desain & Pengujian Berulang
                  </span>
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-xs font-mono flex items-center justify-center font-bold">
                    2
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Desain, Pengujian & Pengembangan
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Inti siklus berulang (iterative loop). Pembuatan model konseptual, panduan standar gaya layar, prototipe bertingkat (Lo-Fi ke Hi-Fi), dan pengujian formatif berulang.
                </p>
              </div>

              <div className="space-y-2 text-xs text-neutral-400 border-t border-neutral-900 pt-4">
                <span className="text-white font-medium block mb-1">Aktivitas Utama:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Prototyping bertahap (Wireframe hingga Figma)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Uji usability formatif bersama perwakilan pengguna</span>
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              {...fadeUp(0.4)}
              className="liquid-glass rounded-2xl p-8 border border-neutral-900 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Fase 3 · Pasca-Rilis
                  </span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-center font-bold">
                    3
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Instalasi & Evaluasi Pasca-Implementasi
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Evaluasi sumatif terhadap sistem yang berjalan di lapangan, pengumpulan umpan balik operasional, audit keluhan pengguna, dan input untuk siklus rilis generasi berikutnya.
                </p>
              </div>

              <div className="space-y-2 text-xs text-neutral-400 border-t border-neutral-900 pt-4">
                <span className="text-white font-medium block mb-1">Aktivitas Utama:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Analisis log penggunaan sistem nyata di lapangan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Survei berkala kepuasan pengguna (Continuous UX)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lifecycle Principle Callout */}
          <motion.div
            {...fadeUp(0.5)}
            className="liquid-glass rounded-2xl p-6 border border-neutral-800 flex items-center gap-4 max-w-3xl mx-auto"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white shrink-0">
              <Repeat className="w-5 h-5" />
            </div>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              <strong className="text-white">Siklus Berkelanjutan:</strong> Usability bukan proses linier sekali jalan yang berhenti saat sistem dirilis. Data operasional pasca-rilis adalah input paling berharga untuk siklus hidup iterasi berikutnya.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
