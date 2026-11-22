import { MessageCircle } from 'lucide-react';
import { BANQUET_HIGHLIGHTS, MENU_CATEGORIES, RASVEDA_INFO } from '../data/menuData';
import { VegMark } from './VegMark';

export function BanquetAndThali() {
  const thaliCategory = MENU_CATEGORIES.find((c) => c.id === 'fix-thali');
  const thaliItems = thaliCategory?.items ?? [];

  const banquetWhatsappUrl = `https://wa.me/${RASVEDA_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Rasveda Restaurant & Banquet, I would like to inquire about Banquet / Corporate Lunch booking.'
  )}`;

  return (
    <section
      id="banquets"
      className="py-16 sm:py-24 bg-[#4A0D18] text-[#FAF6F0] border-y border-[#C59B43]/30 no-print"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Fix Thali Lunch & Dinner */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#E6C981]">
                Daily Wholesome Platters
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FAF6F0]">
                Fix Thali Lunch &amp; Dinner
              </h2>
            </div>
            <p className="text-sm text-[#FAF6F0]/80 max-w-md">
              Complete traditional pure-vegetarian Indian meals prepared fresh daily for lunch and dinner service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {thaliItems.map((thali) => (
              <div
                key={thali.id}
                className="bg-[#360810] border border-[#C59B43]/30 rounded-lg p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#E6C981]">
                    <span>{thali.subsection}</span>
                    <VegMark />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#FAF6F0]">
                    {thali.name}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#FAF6F0]/80">
                    {thali.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C59B43]/25 flex items-baseline justify-between">
                  <span className="text-xs text-[#FAF6F0]/65">Per Thali</span>
                  <span className="font-display text-2xl font-semibold text-[#E6C981] tabular-nums">
                    ₹{thali.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banquet & Corporate Lunch Services */}
        <div className="grid lg:grid-cols-12 gap-8 pt-6 border-t border-[#C59B43]/25 items-stretch">
          <div className="lg:col-span-7 bg-[#FAF6F0] text-[#261814] rounded-lg p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#5C111E]">
                <span>{BANQUET_HIGHLIGHTS.subheading}</span>
                <span aria-hidden="true">·</span>
                <span>Events &amp; Celebrations</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#5C111E]">
                {BANQUET_HIGHLIGHTS.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#5C4740]">
                {BANQUET_HIGHLIGHTS.description}
              </p>

              <div className="pt-2 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#261814]">
                  Live Counters Available For
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-medium text-[#5C111E]">
                  {BANQUET_HIGHLIGHTS.liveCounters.map((counter, idx) => (
                    <span key={counter} className="inline-flex items-center gap-3">
                      <span>{counter}</span>
                      {idx < BANQUET_HIGHLIGHTS.liveCounters.length - 1 && (
                        <span aria-hidden="true" className="text-[#C59B43]">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#C59B43]/30 flex flex-wrap items-center gap-4">
              <a
                href={banquetWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#FAF6F0] bg-[#5C111E] hover:bg-[#430B15] rounded-md transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire for Banquet Booking
              </a>
              <a
                href="tel:+919898807902"
                className="text-sm font-medium text-[#5C111E] hover:underline tabular-nums whitespace-nowrap"
              >
                Call +91 98988 07902
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#360810] border border-[#C59B43]/30 rounded-lg p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#E6C981]">
                20+ Employees · Daily Delivery
              </p>
              <h3 className="font-display text-3xl font-semibold text-[#FAF6F0]">
                {BANQUET_HIGHLIGHTS.corporateTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#FAF6F0]/85">
                {BANQUET_HIGHLIGHTS.corporateDescription}
              </p>
            </div>

            <div className="pt-5 border-t border-[#C59B43]/25 space-y-2">
              <p className="font-display italic text-xl text-[#E6C981]">
                &ldquo;Guest is God&rdquo;
              </p>
              <p className="text-xs leading-relaxed text-[#FAF6F0]/75">
                {BANQUET_HIGHLIGHTS.philosophyQuote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
