import { motion } from 'framer-motion';
import { fadeUp } from '../lib/utils';
import { HlsVideo } from './HlsVideo';
import { Calculator, ArrowUp } from 'lucide-react';

export function CTASection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      className="relative w-full py-32 md:py-44 border-t border-[hsl(var(--border))]/30 overflow-hidden bg-black flex items-center justify-center min-h-[600px]"
    >
      {/* Background Video (HLS via hls.js) in full natural color */}
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
      />

      {/* Overlay: absolute inset-0 bg-background/45 z-[1] */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-[1]" />

      {/* Content (z-10, centered) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.08]"
          style={{ textWrap: "balance" }}
        >
          Sekian dan{" "}
          <span className="font-serif italic font-normal text-white">
            Terima Kasih
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Sekian Materi dari kami, jika ada salah kata mohon dimaafkan.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md"
        >
          <motion.button
            onClick={() => scrollTo("metode-pengukuran")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-white text-black font-semibold text-sm rounded-lg px-8 py-3.5 tracking-wide transition-shadow hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Coba Kalkulator SUS</span>
          </motion.button>

          <motion.button
            onClick={() => scrollTo("pentingnya-usability")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto liquid-glass text-white font-medium text-sm rounded-lg px-8 py-3.5 border border-white/20 hover:border-white/40 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Pelajari dari Awal</span>
          </motion.button>
        </motion.div>

        {/* Bottom subtle note */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-xs text-neutral-400 mt-10 tracking-widest font-mono uppercase"
        >
          HAMDI RAHMAN . HAFIZ MULYADI . Hanifah Mardhiyah Rahamdhani
        </motion.p>
      </div>
    </section>
  );
}
