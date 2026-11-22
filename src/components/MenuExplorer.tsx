import { AlertCircle, Search, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  MENU_CATEGORIES,
  MenuCategory,
  MenuItem,
  PDF_AUDIT_NOTES,
} from '../data/menuData';
import { VegMark } from './VegMark';

interface MenuExplorerProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export function MenuExplorer({
  activeCategory,
  onSelectCategory,
}: MenuExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [signaturesOnly, setSignaturesOnly] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const totalItemCount = useMemo(
    () => MENU_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const sourceCategories =
      activeCategory === 'all' || normalizedQuery.length > 0
        ? MENU_CATEGORIES
        : MENU_CATEGORIES.filter((cat) => cat.id === activeCategory);

    return sourceCategories
      .map((category) => {
        const items = category.items.filter((item) => {
          if (signaturesOnly && !item.isSignature) return false;
          if (!normalizedQuery) return true;
          const haystack = [
            item.name,
            item.description ?? '',
            item.subsection ?? '',
            category.name,
            category.pdfTitle ?? '',
          ]
            .join(' ')
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [activeCategory, normalizedQuery, signaturesOnly]);

  const matchingCount = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [filteredCategories]
  );

  const handleReset = () => {
    setSearchQuery('');
    setSignaturesOnly(false);
    onSelectCategory('all');
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF6F0] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#C59B43]/30">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-medium text-[#5C4740]">
              <VegMark />
              <span>100% Pure Vegetarian</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{MENU_CATEGORIES.length} Categories</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{totalItemCount} Dishes</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#261814] text-balance">
              Complete Digital Food Menu
            </h2>
            <p className="text-sm sm:text-base text-[#5C4740]">
              Browse every dish directly from our 20-page culinary menu—no downloads or registration required.
            </p>
          </div>

          {/* Search & Signature Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search
                aria-hidden="true"
                className="w-4 h-4 text-[#5C4740] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, paneer, soup, pizza..."
                aria-label="Search menu items"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#F3ECE1] text-[#261814] placeholder:text-[#5C4740]/70 border border-[#C59B43]/35 rounded-md focus:outline-none focus:border-[#5C111E] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#5C4740] hover:text-[#261814]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSignaturesOnly((prev) => !prev)}
              aria-pressed={signaturesOnly}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#5C111E] ${
                signaturesOnly
                  ? 'bg-[#5C111E] text-[#FAF6F0] border-[#5C111E]'
                  : 'bg-[#F3ECE1] text-[#261814] border-[#C59B43]/35 hover:border-[#5C111E]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Chef&apos;s Highlights</span>
            </button>
          </div>
        </div>

        {/* Category Navigation Controls */}
        <div className="py-6 space-y-4">
          {/* Mobile Quick Category Select */}
          <div className="sm:hidden">
            <label htmlFor="mobile-category-select" className="sr-only">
              Jump to Category
            </label>
            <select
              id="mobile-category-select"
              value={activeCategory}
              onChange={(e) => {
                setSearchQuery('');
                onSelectCategory(e.target.value);
              }}
              className="w-full px-3.5 py-3 text-sm font-medium bg-[#F3ECE1] text-[#261814] border border-[#C59B43]/40 rounded-md focus:outline-none focus:border-[#5C111E]"
            >
              <option value="all">All 22 Categories ({totalItemCount} dishes)</option>
              {MENU_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.items.length})
                </option>
              ))}
            </select>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="tablist"
            aria-label="Menu Categories"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all' && !normalizedQuery}
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#5C111E] ${
                activeCategory === 'all' && !normalizedQuery
                  ? 'bg-[#5C111E] text-[#FAF6F0] border-[#5C111E]'
                  : 'bg-[#F3ECE1] text-[#261814] border-[#C59B43]/30 hover:border-[#5C111E]'
              }`}
            >
              All Categories
            </button>

            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id && !normalizedQuery;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSearchQuery('');
                    onSelectCategory(category.id);
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#5C111E] ${
                    isActive
                      ? 'bg-[#5C111E] text-[#FAF6F0] border-[#5C111E]'
                      : 'bg-[#F3ECE1] text-[#261814] border-[#C59B43]/30 hover:border-[#5C111E]'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Active Filter Status */}
          {(normalizedQuery || signaturesOnly || activeCategory !== 'all') && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-[#5C4740]">
              <p className="tabular-nums">
                Showing {matchingCount} {matchingCount === 1 ? 'dish' : 'dishes'} across{' '}
                {filteredCategories.length}{' '}
                {filteredCategories.length === 1 ? 'category' : 'categories'}
                {normalizedQuery ? ` matching "${searchQuery.trim()}"` : ''}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="font-medium text-[#5C111E] hover:underline"
              >
                Reset view to all 22 categories
              </button>
            </div>
          )}
        </div>

        {/* Menu Chapters */}
        {filteredCategories.length === 0 ? (
          <div className="py-16 text-center bg-[#F3ECE1] rounded-lg border border-[#C59B43]/25 space-y-4">
            <p className="font-display text-2xl font-semibold text-[#261814]">
              No matching dishes found
            </p>
            <p className="text-sm text-[#5C4740] max-w-md mx-auto">
              Try another keyword such as Paneer, Biryani, Sizzler, Soup, or reset your filters to view the full menu.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 text-sm font-medium text-[#FAF6F0] bg-[#5C111E] hover:bg-[#430B15] rounded-md transition-colors"
            >
              Show Complete Menu
            </button>
          </div>
        ) : (
          <div className="space-y-14 mt-4">
            {filteredCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        )}

        {/* Discreet PDF Verification & Print Notes Trigger */}
        <div className="mt-14 pt-6 border-t border-[#C59B43]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5C4740]">
          <p>
            All dish names, descriptions, and prices are preserved faithfully from the official 20-page Rasveda menu.
          </p>
          <button
            type="button"
            onClick={() => setAuditOpen(true)}
            className="inline-flex items-center gap-1.5 font-medium text-[#5C111E] hover:underline whitespace-nowrap shrink-0"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>View Flagged PDF Print Details ({PDF_AUDIT_NOTES.length})</span>
          </button>
        </div>
      </div>

      {/* Flagged PDF Details Modal */}
      {auditOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-audit-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <div className="bg-[#FAF6F0] text-[#261814] max-w-2xl w-full max-h-[85vh] rounded-lg border border-[#C59B43]/40 shadow-2xl flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-[#F3ECE1] border-b border-[#C59B43]/30 flex items-center justify-between gap-4">
              <div>
                <h3 id="pdf-audit-title" className="font-display text-2xl font-semibold text-[#5C111E]">
                  PDF Print Verification Notes
                </h3>
                <p className="text-xs text-[#5C4740]">
                  Unreadable lines, print typos, and duplicate entries flagged directly from the uploaded 20-page PDF.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAuditOpen(false)}
                aria-label="Close verification notes"
                className="p-2 text-[#5C4740] hover:text-[#261814] rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4">
              {PDF_AUDIT_NOTES.map((note, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F3ECE1]/70 rounded-md border border-[#C59B43]/25 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-xs text-[#5C4740]">
                    <span className="font-semibold text-[#5C111E]">Page {note.page}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.category}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#261814]">{note.item}</p>
                  <p className="text-xs text-[#5C4740]">{note.issue}</p>
                  <p className="text-xs text-[#261814]/80 italic">{note.originalText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CategorySection({ category }: { category: MenuCategory }) {
  // Group items by subsection if subsections exist
  const groupedItems = useMemo(() => {
    const groups: { title?: string; items: MenuItem[] }[] = [];
    for (const item of category.items) {
      const last = groups[groups.length - 1];
      if (last && last.title === item.subsection) {
        last.items.push(item);
      } else {
        groups.push({ title: item.subsection, items: [item] });
      }
    }
    return groups;
  }, [category.items]);

  return (
    <article
      id={`cat-${category.id}`}
      className="scroll-mt-24 space-y-6"
    >
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-[#5C111E]/20">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C4740]">
            {category.pdfRibbon && (
              <>
                <span className="font-medium text-[#9C782D]">{category.pdfRibbon}</span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="tabular-nums">{category.items.length} dishes</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">PDF p. {category.pdfPage}</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#5C111E]">
            {category.name}
          </h3>
        </div>
        {category.portionNote && (
          <p className="text-xs sm:text-sm italic text-[#5C4740]">
            {category.portionNote}
          </p>
        )}
      </div>

      {/* Optional Category Showcase Photo */}
      {category.image && (
        <div className="overflow-hidden rounded-lg border border-[#C59B43]/25 bg-[#F3ECE1] max-h-64 sm:max-h-72">
          <img
            src={category.image}
            alt={category.imageAlt || category.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-64 object-cover"
          />
        </div>
      )}

      {/* Subsections & Menu Grid */}
      <div className="space-y-8">
        {groupedItems.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-4">
            {group.title && (
              <h4 className="font-display italic text-2xl font-medium text-[#261814] pt-1">
                {group.title}
              </h4>
            )}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="py-3.5 border-b border-[#C59B43]/25 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <VegMark className="mt-1" />
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h5 className="text-base font-semibold text-[#261814] leading-snug">
                          {item.name}
                        </h5>
                        {item.isSignature && (
                          <span className="text-xs font-medium text-[#9C782D]">
                            · Chef&apos;s Favorite
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs sm:text-sm text-[#5C4740] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#5C111E] tabular-nums whitespace-nowrap shrink-0 pt-0.5">
                    {item.price === 'MRP' ? 'MRP' : `₹${item.price}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
