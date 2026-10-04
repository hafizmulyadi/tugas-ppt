import { motion } from 'framer-motion';
import { ASSETS } from '../assets';
import { fadeUp } from '../lib/utils';
import { Zap, ShieldAlert, Award } from 'lucide-react';

export function SearchChanged() {
  const cards = [
    {
      title: 'Efisiensi Kognitif & Nilai Guna',
      kicker: 'Prinsip ISO 9241-11',
      icon: ASSETS.icons.chatgpt,
      badgeIcon: Zap,
      description:
        'Usability memastikan pengguna mencapai objektif mereka tanpa frustrasi. Antarmuka yang intuitif meminimalkan beban kognitif (cognitive load), sehingga pengguna dapat fokus pada substansi pekerjaan mereka.',
      takeaway: 'Meniadakan friksi mental dalam interaksi manusia-komputer.',
    },
    {
      title: 'Hukum Ekonomi Biaya 1 : 10 : 100',
      kicker: 'Efisiensi Anggaran & Waktu',
      icon: ASSETS.icons.perplexity,
      badgeIcon: ShieldAlert,
      description:
        'Mendeteksi dan memperbaiki masalah usability pada fase analisis kebutuhan membutuhkan $1. Memperbaikinya saat pembuatan kode butuh $10. Namun memperbaikinya setelah produk dirilis dapat memakan biaya hingga $100.',
      takeaway: 'Investasi pencegahan eror jauh lebih hemat dibanding perbaikan pasca-rilis.',
    },
    {
      title: 'Tingkat Adopsi & Kepuasan Pengguna',
      kicker: 'Keberlangsungan Produk',
      icon: ASSETS.icons.google,
      badgeIcon: Award,
      description:
        'Di era digital modern, toleransi pengguna terhadap antarmuka yang membingungkan sangat rendah. Usability yang tinggi secara langsung menaikkan retensi, menurunkan churn, dan menekan biaya tiket bantuan pengguna.',
      takeaway: 'Pengguna yang puas adalah indikator keberhasilan utama sistem.',
    },
  ];

  return (
    <section
      id="pentingnya-usability"
      className="relative w-full bg-black pt-52 md:pt-64 pb-16 md:pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div {...fadeUp(0.1)} className="text-center">
          <p className="text-xs uppercase tracking-[3px] font-mono text-neutral-400 mb-3">
            BAGIAN 01 · FUNDAMENTAL
          </p>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-white leading-[1.08] max-w-5xl mx-auto"
            style={{ textWrap: 'balance' }}
          >
            Pentingnya <span className="font-serif italic font-normal text-white">Usability</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-6 mb-24 leading-relaxed font-normal">
            Usability (kegunaan) bukan sekadar polesan visual di akhir pengembangan, melainkan penentu mutlak apakah sebuah sistem perangkat lunak akan berhasil diadopsi atau ditinggalkan oleh penggunanya.
          </p>
        </motion.div>

        {/* 3 Usability Importance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {cards.map((card, index) => {
            const BadgeIcon = card.badgeIcon;
            const accentColors = [
              { border: 'hover:border-amber-500/40', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
              { border: 'hover:border-emerald-500/40', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
              { border: 'hover:border-cyan-500/40', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
            ][index % 3];

            return (
              <motion.div
                key={card.title}
                {...fadeUp(0.15 * (index + 1))}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`liquid-glass rounded-2xl p-8 flex flex-col items-center text-center group border border-neutral-900 ${accentColors.border} transition-all duration-300`}
              >
                {/* 200x200 Centered Icon Container in Full Natural Color */}
                <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden mb-8 bg-neutral-950 flex items-center justify-center border border-neutral-800/80 group-hover:border-neutral-600 transition-colors relative">
                  <img
                    src={card.icon}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-sm border ${accentColors.badge}`}>
                    <BadgeIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Subtitle kicker */}
                <span className="text-xs uppercase tracking-[2px] text-neutral-400 mb-2 font-mono">
                  {card.kicker}
                </span>

                {/* Card Title */}
                <h3 className="font-semibold text-lg text-white mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Takeaway */}
                <div className="mt-auto pt-4 border-t border-neutral-800/60 w-full text-xs text-neutral-300 italic font-serif">
                  &ldquo;{card.takeaway}&rdquo;
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.div {...fadeUp(0.4)} className="text-center">
          <p className="text-neutral-400 text-sm md:text-base tracking-wide font-serif italic max-w-xl mx-auto">
            &ldquo;Sistem dengan fitur terlengkap sekalipun tidak bernilai jika pengguna gagal memahami cara memakainya.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
