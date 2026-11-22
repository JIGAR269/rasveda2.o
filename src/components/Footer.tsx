import { RASVEDA_IMAGES, RASVEDA_INFO } from '../data/menuData';

export function Footer() {
  return (
    <footer className="bg-[#1C100D] text-[#FAF6F0] border-t border-[#C59B43]/30 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-start pb-10 border-b border-[#C59B43]/20">
          {/* Exact original Rasveda logo in footer */}
          <div className="md:col-span-5 flex items-start gap-5">
            <img
              src={RASVEDA_IMAGES.logo}
              alt="Rasveda Restaurant & Banquet Official Logo"
              className="w-20 h-20 object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-2">
              <p className="font-display text-2xl font-semibold tracking-[0.1em] text-[#E6C981]">
                {RASVEDA_INFO.name}
              </p>
              <p className="text-xs text-[#FAF6F0]/80">
                {RASVEDA_INFO.subtitle} · {RASVEDA_INFO.cuisine}
              </p>
              <p className="text-xs text-[#FAF6F0]/70 leading-relaxed max-w-sm">
                Discover the essence of Indian cuisine alongside Mexican, Italian, Chinese, Sizzlers, and bespoke Banquet hospitality.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs text-[#FAF6F0]/80 leading-relaxed">
            <p className="font-semibold text-sm text-[#E6C981]">Address &amp; Booking</p>
            <p>
              {RASVEDA_INFO.addressLine1}
              <br />
              {RASVEDA_INFO.addressLine2}
              <br />
              {RASVEDA_INFO.addressLine3}
            </p>
            <p className="pt-1 tabular-nums">
              Booking:{' '}
              <a href="tel:+919898707902" className="hover:text-[#E6C981]">
                +91 98987 07902
              </a>{' '}
              ·{' '}
              <a href="tel:+919898807902" className="hover:text-[#E6C981]">
                +91 98988 07902
              </a>
            </p>
            <p>
              <a
                href={RASVEDA_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6C981] hover:underline"
              >
                {RASVEDA_INFO.website}
              </a>
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs">
            <p className="font-semibold text-sm text-[#E6C981]">Quick Links</p>
            <ul className="space-y-2 text-[#FAF6F0]/80">
              <li>
                <a href="#home" className="hover:text-[#E6C981] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#popular" className="hover:text-[#E6C981] transition-colors">
                  Popular Dishes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E6C981] transition-colors">
                  Complete Digital Menu
                </a>
              </li>
              <li>
                <a href="#banquets" className="hover:text-[#E6C981] transition-colors">
                  Fix Thali &amp; Banquets
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#E6C981] transition-colors">
                  Visit &amp; Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF6F0]/60">
          <p>© {new Date().getFullYear()} Rasveda Restaurant &amp; Banquet. All rights reserved.</p>
          <p>100% Pure Vegetarian Multi-Cuisine · Ahmedabad</p>
        </div>
      </div>
    </footer>
  );
}
