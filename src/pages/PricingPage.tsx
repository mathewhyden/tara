import React from 'react';
import { Check, HelpCircle, Phone, Mail, ShieldCheck, HeartHandshake, MessageCircle } from 'lucide-react';
import { PRICING_PLANS_DATA, BRAND_INFO, PricingPlan } from '../data/siteData';

interface PricingPageProps {
  onOpenBooking: () => void;
  setCurrentPage: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking, setCurrentPage }) => {
  return (
    <div className="w-full">
      {/* Title Banner */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            Consultation Options
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-3">
            Pricing & Consultations
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs text-purple-200">
            <button
              onClick={() => setCurrentPage('home1')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white font-medium">Pricing</span>
          </div>
        </div>
      </section>

      {/* Intro note */}
      <section className="py-12 bg-white border-b border-[#E8DCE8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Tara Mindcare maintains a transparent and client-focused consultation approach. Whether you require a single focused exploration or structured ongoing therapeutic guidance, each session is conducted with personalized care and absolute confidentiality.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid (Balanced Box & Rounded-3xl Cards) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS_DATA.map((plan: PricingPlan) => (
            <div
              key={plan.id}
              className={`bg-white border p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'rounded-3xl border-[#7F4B7C] shadow-2xl ring-2 ring-[#7F4B7C]/20 relative'
                  : 'rounded-none border-[#E8DCE8] hover:border-purple-300 shadow-sm'
              }`}
            >
              <div>
                {plan.isPopular && (
                  <div className="bg-[#7F4B7C] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3.5 rounded-full inline-block mb-4">
                    Most Popular Choice
                  </div>
                )}

                <h3 className="font-serif text-2xl font-bold text-[#2C2C2C]">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">{plan.subtitle}</p>

                {/* Displaying 'Contact for details' as explicitly instructed */}
                <div className="bg-[#FAF6EE] p-5 text-center border border-[#E8DCE8] rounded-xl mb-6">
                  <span className="text-base font-bold uppercase tracking-wider text-[#7F4B7C]">
                    Contact for details
                  </span>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Direct inquiry with Dr Anne Rosario
                  </p>
                </div>

                <p className="text-xs text-gray-600 mb-6 italic leading-relaxed">
                  {plan.suitableFor}
                </p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7F4B7C] block mb-3">
                    What is Included:
                  </span>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-[#7F4B7C] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95 ${
                    plan.isPopular
                      ? 'bg-[#7F4B7C] hover:bg-[#5B3259] text-white shadow-sm'
                      : 'border border-[#7F4B7C] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white'
                  }`}
                >
                  Inquire / Book Consultation
                </button>
                <a
                  href={`${BRAND_INFO.whatsappUrl}%20regarding%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-full text-xs font-bold tracking-wider transition-all shadow hover:shadow-md hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee & Booking Transparency FAQ */}
      <section className="py-16 bg-[#FAF6EE] border-t border-[#E8DCE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
              Transparency
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#2C2C2C] mt-1 cloe-border-bottom">
              Consultation Policies & Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
            <div className="bg-white p-6 border border-[#E8DCE8] rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-sm text-[#2C2C2C]">
                How are fees established?
              </h4>
              <p className="leading-relaxed text-gray-600">
                Consultation fees reflect standard ethical psychological practice, specialized clinical attention, and session length. Please reach out to discuss individual details.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8DCE8] rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-sm text-[#2C2C2C]">
                Payment & Confirmation
              </h4>
              <p className="leading-relaxed text-gray-600">
                Payment methods and session time slots are finalized directly with Dr Anne Rosario upon appointment confirmation.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8DCE8] rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-sm text-[#2C2C2C]">
                Rescheduling & Cancellations
              </h4>
              <p className="leading-relaxed text-gray-600">
                We understand emergencies happen. We kindly request at least 24 hours prior notice to reschedule or cancel a confirmed session.
              </p>
            </div>

            <div className="bg-white p-6 border border-[#E8DCE8] rounded-2xl shadow-xs space-y-2">
              <h4 className="font-bold text-sm text-[#2C2C2C]">
                International & Remote Clients
              </h4>
              <p className="leading-relaxed text-gray-600">
                Online video sessions accommodate clients across different time zones with flexible scheduling options.
              </p>
            </div>
          </div>

          <div className="pt-6 text-center">
            <a
              href={`${BRAND_INFO.whatsappUrl}%20regarding%20session%20fees`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-8 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Have questions about fees? Chat with Dr Anne on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
