import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { RASVEDA_IMAGES, RASVEDA_INFO } from '../data/menuData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Popular', href: '#popular' },
  { label: 'Menu', href: '#menu' },
  { label: 'Banquets', href: '#banquets' },
  { label: 'Visit Us', href: '#visit' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappReserveUrl = `https://wa.me/${RASVEDA_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Rasveda Restaurant & Banquet, I would like to book a table / inquire about dining.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#C59B43]/25 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand (Original unaltered Rasveda logo + single-line wordmark) */}
        <a
          href="#home"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C111E] rounded-sm"
        >
          <img
            src={RASVEDA_IMAGES.logo}
            alt="Rasveda Restaurant & Banquet Official Logo"
            className="w-11 h-11 object-contain shrink-0"
            referrerPolicy="no-referrer"
          />
          <span className="font-display text-2xl font-semibold tracking-[0.12em] text-[#5C111E] whitespace-nowrap shrink-0">
            {RASVEDA_INFO.name}
          </span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#261814]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#5C111E] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#C59B43] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C111E]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#FAF6F0] bg-[#5C111E] hover:bg-[#430B15] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C111E]"
          >
            Book Table
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#261814] hover:text-[#5C111E] rounded-md border border-[#C59B43]/30 focus-visible:outline-2 focus-visible:outline-[#5C111E]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#C59B43]/30 px-4 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-base font-medium text-[#261814] hover:text-[#5C111E] hover:bg-[#F3ECE1] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappReserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#FAF6F0] bg-[#5C111E] rounded-md"
            >
              Book Table on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
