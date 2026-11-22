import { Globe, MapPin, MessageCircle, Phone } from 'lucide-react';
import { RASVEDA_IMAGES, RASVEDA_INFO } from '../data/menuData';

export function QrAndVisitSection() {
  const whatsappBookingUrl = `https://wa.me/${RASVEDA_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Rasveda Restaurant & Banquet, I would like to reserve a table.'
  )}`;

  const banquetWhatsappUrl = `https://wa.me/${RASVEDA_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Rasveda Restaurant & Banquet, I would like to inquire about booking a banquet event.'
  )}`;

  return (
    <section id="visit" className="py-16 sm:py-24 bg-[#F3ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact, Booking & Location */}
          <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#C59B43]/30 rounded-lg p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#5C111E]">
                  Visit &amp; Reservations
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#261814]">
                  Dine With Us in Ahmedabad
                </h2>
              </div>

              <div className="space-y-5 text-sm text-[#261814]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#5C111E] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Restaurant &amp; Banquet Address</p>
                    <p className="text-[#5C4740] leading-relaxed">
                      {RASVEDA_INFO.addressLine1}
                      <br />
                      {RASVEDA_INFO.addressLine2}
                      <br />
                      {RASVEDA_INFO.addressLine3}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#5C111E] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Booking &amp; Inquiries</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[#5C4740] tabular-nums">
                      <a
                        href="tel:+919898707902"
                        className="hover:text-[#5C111E] transition-colors font-medium"
                      >
                        +91 98987 07902
                      </a>
                      <a
                        href="tel:+919898807902"
                        className="hover:text-[#5C111E] transition-colors font-medium"
                      >
                        +91 98988 07902
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-[#5C111E] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Official Website</p>
                    <a
                      href={RASVEDA_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5C111E] hover:underline font-medium"
                    >
                      {RASVEDA_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#C59B43]/25 grid sm:grid-cols-3 gap-3">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#FAF6F0] bg-[#5C111E] hover:bg-[#430B15] rounded-md transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Book
              </a>
              <a
                href="tel:+919898707902"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#261814] bg-[#F3ECE1] hover:bg-[#E7DDD0] border border-[#C59B43]/35 rounded-md transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Direct Call
              </a>
              <a
                href={RASVEDA_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#261814] bg-[#F3ECE1] hover:bg-[#E7DDD0] border border-[#C59B43]/35 rounded-md transition-colors whitespace-nowrap"
              >
                <MapPin className="w-4 h-4" />
                Google Maps
              </a>
            </div>
          </div>

          {/* Right: Rasveda Hospitality & Event Reservations Card */}
          <div className="lg:col-span-5 bg-[#FAF6F0] border border-[#C59B43]/30 rounded-lg p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <img
                  src={RASVEDA_IMAGES.logo}
                  alt="Rasveda Restaurant & Banquet"
                  className="w-16 h-16 object-contain shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-display text-2xl font-semibold text-[#5C111E]">
                    {RASVEDA_INFO.name}
                  </p>
                  <p className="text-xs text-[#5C4740]">
                    {RASVEDA_INFO.subtitle} · {RASVEDA_INFO.cuisine}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-[#261814]">
                  Crafted with Care, Served with Love
                </h3>
                <p className="text-sm text-[#5C4740] leading-relaxed">
                  From intimate family dinners and Fix Thali meals to grand wedding banquets and daily corporate lunch services, our kitchen and hospitality team ensure every guest is welcomed with warmth.
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-[#C59B43]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5C4740]">
                <p className="font-semibold text-[#261814]">Events &amp; Group Dining</p>
                <p>Custom pure-veg banquet menus available</p>
              </div>
              <a
                href={banquetWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#5C111E] bg-[#F3ECE1] hover:bg-[#E7DDD0] border border-[#C59B43]/35 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                Plan an Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
