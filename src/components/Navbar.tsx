import { motion } from 'framer-motion';

export function Navbar() {
  const navItems = [
    { label: 'Pentingnya Usability', href: '#pentingnya-usability' },
    { label: 'Atribut Usability', href: '#atribut-usability' },
    { label: 'Langkah-Langkah', href: '#langkah-usability' },
    { label: 'Metode Pengukuran', href: '#metode-pengukuran' },
    { label: 'Siklus Hidup', href: '#siklus-hidup' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-20 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Brand title */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded"
          aria-label="Usability"
        >
          <span className="font-sans font-semibold text-base md:text-lg tracking-tight text-white">
            Usability
          </span>
        </a>

        {/* Center-right: 5 Core Usability Nav Links */}
        <nav
          className="hidden lg:flex items-center space-x-3 text-sm text-neutral-400"
          aria-label="Navigasi Materi Usability"
        >
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center space-x-3">
              <a
                href={item.href}
                className="transition-colors hover:text-white whitespace-nowrap text-xs md:text-sm"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-neutral-700 select-none" aria-hidden="true">
                  •
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Quick Action to Test Metric */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#metode-pengukuran"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass text-xs font-medium text-white px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            Kalkulator SUS
          </motion.a>
        </div>
      </div>
    </header>
  );
}
