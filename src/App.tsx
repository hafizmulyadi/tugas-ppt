/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchChanged } from './components/SearchChanged';
import { Mission } from './components/Mission';
import { Solution } from './components/Solution';
import { UsabilityCurriculum } from './components/UsabilityCurriculum';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* 1. Transparent Fixed Navbar with 5 Usability Nav Points */}
      <Navbar />

      <main className="w-full">
        {/* 2. Hero Section: Pengantar Rekayasa Usability */}
        <Hero />

        {/* 3. Modul 01: Pentingnya Usability */}
        <SearchChanged />

        {/* 4. Modul 02: 5 Atribut Usability (Jakob Nielsen) */}
        <Mission />

        {/* 5. Modul 03: Langkah-Langkah Rekayasa Usability */}
        <Solution />

        {/* 6. Modul 04 (Metode Pengukuran + Kalkulator SUS) & Modul 05 (Siklus Hidup Usability) */}
        <UsabilityCurriculum />

        {/* 7. CTA Section with HLS background video */}
        <CTASection />
      </main>

      {/* 8. Clean Minimal Footer */}
      <Footer />
    </div>
  );
}
