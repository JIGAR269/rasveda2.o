import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { POPULAR_HIGHLIGHTS } from '../data/menuData';

interface PopularShowcaseProps {
  onSelectCategory: (categoryId: string) => void;
}

export function PopularShowcase({ onSelectCategory }: PopularShowcaseProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="popular" className="py-16 sm:py-20 bg-[#F3ECE1] border-b border-[#C59B43]/20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#5C111E] uppercase">
              Chef&apos;s Curation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#261814] text-balance">
              Signature Specialties &amp; Popular Highlights
            </h2>
          </div>
          <p className="text-sm text-[#5C4740] max-w-md">
            Crafted with pure ingredients—from charcoal-grilled tandoor platters and rich handi curries to sizzling fusion plates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_HIGHLIGHTS.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelectCategory(item.categoryId)}
              className="group text-left bg-[#FAF6F0] rounded-lg overflow-hidden border border-[#C59B43]/25 hover:border-[#5C111E]/50 transition-all duration-200 hover:-translate-y-0.5 flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C111E]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E7DDD0] relative">
                {!failedImages[item.title] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [item.title]: true }))
                    }
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5C111E]/15 to-[#C59B43]/20 p-4 text-center">
                    <span className="font-display text-lg text-[#5C111E]">{item.title}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#5C4740]">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums font-semibold text-[#5C111E]">
                      ₹{item.price}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#261814] group-hover:text-[#5C111E] transition-colors">
                    {item.dishName}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#5C4740]">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C59B43]/20 flex items-center justify-between text-xs font-medium text-[#5C111E]">
                  <span>View in {item.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
