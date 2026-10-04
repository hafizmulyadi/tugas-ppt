export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black py-12 px-8 md:px-20 border-t border-[hsl(var(--border))]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
          <p className="text-neutral-500 text-xs md:text-sm tracking-tight">
            © 2026 Modul Usability &amp; Human-Computer Interaction.
          </p>
        </div>

        {/* Right: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
          <button
            onClick={() => scrollTo('pentingnya-usability')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Pentingnya Usability
          </button>
          <button
            onClick={() => scrollTo('atribut-usability')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Atribut
          </button>
          <button
            onClick={() => scrollTo('langkah-usability')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Langkah
          </button>
          <button
            onClick={() => scrollTo('metode-pengukuran')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Pengukuran & SUS
          </button>
          <button
            onClick={() => scrollTo('siklus-hidup')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Siklus Hidup
          </button>
        </div>
      </div>
    </footer>
  );
}
