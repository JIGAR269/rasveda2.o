import { ArrowDownRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { RASVEDA_IMAGES, RASVEDA_INFO, WELCOME_STORIES } from '../data/menuData';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#1D100C] text-[#FAF6F0] no-print"
    >
      {/* Full-bleed culinary background */}
      <img
        src={RASVEDA_IMAGES.hero}
        alt="Rasveda Restaurant & Banquet pure vegetarian Indian fine dining spread"
        className="absolute inset-0 w-full h-full object-cover object-center"
        referrerPolicy="no-referrer"
      />

      {/* Measured contrast scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#180C09]/92 via-[#180C09]/75 to-[#180C09]/45"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left focal carrier */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unaltered original circular Rasveda logo */}
            <div className="flex items-center gap-5">
              <img
                src={RASVEDA_IMAGES.logo}
                alt="Rasveda Restaurant & Banquet"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain shrink-0 drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium tracking-wider text-[#E6C981]">
                  {RASVEDA_INFO.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#FAF6F0]/85">
                  <span>{RASVEDA_INFO.cuisine}</span>
                  <span aria-hidden="true">·</span>
                  <span>New Narol, Ahmedabad</span>
                </div>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-[#FAF6F0] text-balance max-w-2xl">
              {RASVEDA_INFO.heroHeading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#FAF6F0]/90 max-w-xl">
              {WELCOME_STORIES[0].body}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-medium bg-[#C59B43] text-[#1D100C] hover:bg-[#D5AE5A] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B43]"
              >
                Explore Menu
                <ArrowDownRight className="w-4 h-4" />
              </a>
              <a
                href="#banquets"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-[#FAF6F0] border border-[#FAF6F0]/35 hover:border-[#C59B43] hover:text-[#E6C981] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF6F0]"
              >
                Fix Thali &amp; Banquets
              </a>
              <a
                href="tel:+919898707902"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#E6C981] hover:text-[#FAF6F0] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="tabular-nums">+91 98987 07902</span>
              </a>
            </div>
          </motion.div>

          {/* Right editorial introduction card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-[#231410]/85 backdrop-blur-md border border-[#C59B43]/30 rounded-lg p-6 sm:p-8 space-y-5">
              <div className="border-b border-[#C59B43]/25 pb-4">
                <p className="font-display italic text-2xl text-[#E6C981]">
                  Welcome to Rasveda
                </p>
                <p className="text-xs text-[#FAF6F0]/75 mt-1">
                  Your culinary journey starts here
                </p>
              </div>
              <div className="space-y-4">
                {WELCOME_STORIES.slice(1).map((story) => (
                  <div key={story.title} className="space-y-1">
                    <h2 className="font-display text-lg font-semibold text-[#FAF6F0]">
                      {story.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#FAF6F0]/80">
                      {story.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-[#C59B43]/25 flex items-center justify-between text-xs text-[#E6C981]">
                <span>22 Interactive Categories</span>
                <span aria-hidden="true">·</span>
                <span>100% Pure Vegetarian</span>
                <span aria-hidden="true">·</span>
                <span>Banquets &amp; Dining</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
