import React from 'react';
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  MapPin,
  ChevronRight,
  Shield,
  Heart,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO, SERVICES_DATA, emailComposeUrl } from '../data/siteData';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2f1b30] text-gray-300 pt-16 pb-8 border-t-4 border-[#7F4B7C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple-900/40">
          {/* Col 1: About Tara Mindcare */}
          <div className="space-y-4">
            <BrandLogo variant="light" />
            <div className="text-xs text-purple-200 font-medium uppercase tracking-wider">
              Dr Anne Rosario • Counselling Psychologist
            </div>
            <p className="text-xs leading-relaxed text-purple-100/70">
              Tara Mindcare is an ethical and compassionate psychological space dedicated to helping you heal, empower yourself, and thrive through life’s emotional complexities.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#7F4B7C]/50 hover:bg-[#7F4B7C] text-purple-200 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#7F4B7C]/50 hover:bg-[#7F4B7C] text-purple-200 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={emailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#7F4B7C]/50 hover:bg-[#7F4B7C] text-purple-200 hover:text-white flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-9 h-9 rounded-full bg-[#7F4B7C]/50 hover:bg-[#7F4B7C] text-purple-200 hover:text-white flex items-center justify-center transition-colors"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-serif mb-5 relative pb-2 border-b border-[#7F4B7C]/60">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home1')}
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                  <span>About Dr Anne Rosario</span>
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                  <span>Psychological Insights & Blog</span>
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                  <span>Contact Information</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Psychological Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-serif mb-5 relative pb-2 border-b border-[#7F4B7C]/60">
              Counselling Areas
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      handleNav('home1');
                      setTimeout(() => {
                        const el = document.getElementById('services-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="flex items-center gap-2 hover:text-purple-300 transition-colors cursor-pointer text-left text-purple-100/80"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Appointments */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-serif mb-5 relative pb-2 border-b border-[#7F4B7C]/60">
              Consultations & Contact
            </h4>
            <div className="space-y-3.5 text-xs text-purple-100/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="hover:text-white transition-colors font-medium text-white"
                  >
                    {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
                    Email Inquiries
                  </div>
                  <a
                    href={emailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors break-all"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
                    Consultation Hours
                  </div>
                  <p>{BRAND_INFO.consultationHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
                    Format
                  </div>
                  <p>Online & In-Person by Appointment</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-purple-200/60 gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© 2026 Tara Mindcare. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Dr Anne Rosario, Counselling Psychologist.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-purple-300">
              <Shield className="w-3.5 h-3.5" />
              <span>Confidential & Ethical Practice</span>
            </span>
            <span className="flex items-center gap-1.5 text-purple-300">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>Heal • Empower • Thrive</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
