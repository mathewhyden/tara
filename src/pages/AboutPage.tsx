import React from 'react';
import { IMG } from '../data/siteData';
import {
  HeartHandshake,
  Mail,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA, emailComposeUrl } from '../data/siteData';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb Header Banner (Classic Cloe Brooks title banner) */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            About The Practice
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-3">
            About Dr Anne Rosario
          </h1>
          
        </div>
      </section>

      {/* 1. MAIN SERVICE GRID AT THE TOP OF THE PAGE (As requested by Phase 5) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
            Areas of Practice
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-1 cloe-border-bottom">
            Psychological Care Focus
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white p-5 border border-[#E8DCE8] text-center hover:border-[#7F4B7C] transition-all hover:shadow-md group"
            >
              <div className="w-10 h-10 rounded-full bg-[#F1E8F1] group-hover:bg-[#7F4B7C] group-hover:text-white text-[#7F4B7C] flex items-center justify-center mx-auto mb-3 transition-colors">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors line-clamp-2">
                {srv.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PSYCHOLOGIST INTRODUCTION & IMAGE ARRANGEMENT */}
      <section className="py-16 bg-[#FAF6EE] border-y border-[#E8DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Portrait */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 border-2 border-[#7F4B7C]/30 rotate-1 rounded-3xl"></div>
                <div className="relative bg-white p-2.5 shadow-xl rounded-3xl overflow-hidden">
                  <img
                    src={IMG.portrait}
                    alt="Dr Anne Rosario, Counselling Psychologist"
                    className="w-full h-[460px] object-cover object-top rounded-2xl"
                  />
                  <div className="p-4 bg-white text-center border-t border-gray-100">
                    <h3 className="font-serif font-bold text-lg text-[#2C2C2C]">
                      {BRAND_INFO.doctorName}
                    </h3>
                    <div className="text-xs font-semibold text-[#7F4B7C] uppercase tracking-wider">
                      {BRAND_INFO.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Biography & Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
                  Counselling Psychologist
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-2 mb-4 cloe-border-bottom-left">
                  Dr Anne Rosario
                </h2>
              </div>

              {/* Exact required text */}
              <div className="border-l-4 border-[#7F4B7C] bg-white p-5 shadow-sm text-gray-800 italic font-serif text-base leading-relaxed rounded-2xl">
                "{BRAND_INFO.aboutIntro}"
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Dr Anne Rosario is a Counselling Psychologist and ICF-ACC Certified Positive Psychology Coach. Her listed qualifications include a Ph.D. in Organizational Behaviour from LIBA Chennai, an M.Sc. in Applied Psychology and an MBA. Her work includes counselling, positive psychology coaching and support around grief, emotional resilience, mindfulness and personal growth.
                </p>
                <p>
                  She also lists life coaching, executive coaching and corporate training among her services. Her public work includes workshops on emotional wellbeing and emotional intelligence. Her approach brings trauma-informed counselling together with positive psychology and practical, compassionate guidance.
                </p>
              </div>

              {/* Social and Contact pill */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-[#7F4B7C] hover:text-[#5B3259]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{BRAND_INFO.instagramHandle}</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-[#7F4B7C] hover:text-[#5B3259]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{BRAND_INFO.linkedinName}</span>
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={emailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-[#7F4B7C] hover:text-[#5B3259]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. PROFESSIONAL BACKGROUND & TIMELINE PRESENTATION */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
            The Practice Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-2 mb-4 cloe-border-bottom">
            Therapeutic Philosophy & Pillars
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-3">
            A compassionate, reflective approach shaped by emotional awareness, healthy boundaries and personal growth.
          </p>
        </div>

        {/* Timeline cards (Rounded-2xl for soft organic contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] hover:border-[#7F4B7C] shadow-sm hover:shadow-md transition-all relative">
            <div className="text-3xl font-serif font-bold text-purple-200 mb-2">01</div>
            <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-2">
              Heal with Empathy
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              A respectful, non-judgmental space can make it easier to talk about difficult experiences and understand what support may feel helpful.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] hover:border-[#7F4B7C] shadow-sm hover:shadow-md transition-all relative">
            <div className="text-3xl font-serif font-bold text-purple-200 mb-2">02</div>
            <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-2">
              Empower Through Awareness
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Noticing emotional patterns and clarifying personal boundaries can support more considered choices in relationships and everyday life.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] hover:border-[#7F4B7C] shadow-sm hover:shadow-md transition-all relative">
            <div className="text-3xl font-serif font-bold text-purple-200 mb-2">03</div>
            <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-2">
              Thrive with Purpose
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Growth can mean recognising your strengths, making room for change and taking steps that reflect your own values and priorities.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
