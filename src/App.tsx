/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BanquetAndThali } from './components/BanquetAndThali';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MenuExplorer } from './components/MenuExplorer';
import { Navbar } from './components/Navbar';
import { PopularShowcase } from './components/PopularShowcase';
import { QrAndVisitSection } from './components/QrAndVisitSection';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleJumpToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#261814]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularShowcase onSelectCategory={handleJumpToCategory} />
        <MenuExplorer
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <BanquetAndThali />
        <QrAndVisitSection />
      </main>
      <Footer />
    </div>
  );
}
