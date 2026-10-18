import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/siteData';
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BRAND_INFO } from '../data/siteData';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenBooking: () => void;
  onSelectService?: (serviceId: string) => void;
  galleryLayout?: 'grid' | 'masonry' | 'cobbles';
  setGalleryLayout?: (layout: 'grid' | 'masonry' | 'cobbles') => void;
  blogLayout?: 'standard' | 'masonry';
  setBlogLayout?: (layout: 'standard' | 'masonry') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  onOpenBooking,
  onSelectService,
  galleryLayout = 'grid',
  setGalleryLayout,
  blogLayout = 'standard',
  setBlogLayout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    handleNavigate('home1');
    setTimeout(() => {
      const el = document.getElementById('services-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="w-full relative z-50">
      {/* Main Navigation Bar (Clean header with rounded theme and WhatsApp redirection) */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 shadow-md py-3 border-b border-[#E8DCE8]'
            : 'py-4 sm:py-5 border-b border-[#E8DCE8]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home1')}
            className="text-left focus:outline-none group cursor-pointer"
          >
            <BrandLogo />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavigate('home1')}
              className={`text-sm font-semibold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                currentPage === 'home1'
                  ? 'text-[#7F4B7C]'
                  : 'text-[#2C2C2C] hover:text-[#7F4B7C]'
              }`}
            >
              Home
            </button>

            {/* ABOUT ME */}
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-semibold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#7F4B7C] border-b-2 border-[#7F4B7C]'
                  : 'text-[#2C2C2C] hover:text-[#7F4B7C]'
              }`}
            >
              About Me
            </button>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  handleNavigate('home1');
                  setTimeout(() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                  currentPage === 'home1' ? 'hover:text-[#7F4B7C]' : 'text-[#2C2C2C] hover:text-[#7F4B7C]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-[#E8DCE8] p-2 rounded-2xl z-50 animate-in fade-in-50 duration-200 space-y-1">
                  {SERVICES_DATA.map((s) => (<button key={s.id} onClick={() => handleServiceClick(s.id)} className="w-full text-left px-3.5 py-2 text-xs font-medium text-[#4A4A4A] hover:bg-[#F1E8F1] hover:text-[#7F4B7C] transition-colors cursor-pointer rounded-xl">{s.title}</button>))}
</div>
              )}
            </div>

            {/* BLOG DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavigate('blog')}
                className={`flex items-center gap-1 text-sm font-semibold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                  currentPage === 'blog' || currentPage === 'article-detail'
                    ? 'text-[#7F4B7C] border-b-2 border-[#7F4B7C]'
                    : 'text-[#2C2C2C] hover:text-[#7F4B7C]'
                }`}
              >
                <span>Blog</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              {activeDropdown === 'blog' && (
                <div className="absolute top-full left-0 w-44 bg-white shadow-xl border border-[#E8DCE8] p-2 rounded-2xl z-50 animate-in fade-in-50 duration-200 space-y-1">
                  <button
                    onClick={() => {
                      if (setBlogLayout) setBlogLayout('standard');
                      handleNavigate('blog');
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer rounded-xl ${
                      currentPage === 'blog' && blogLayout === 'standard'
                        ? 'bg-[#F1E8F1] text-[#7F4B7C]'
                        : 'text-[#4A4A4A] hover:bg-[#F1E8F1] hover:text-[#7F4B7C]'
                    }`}
                  >
                    Standard Blog
                  </button>
                  <button
                    onClick={() => {
                      if (setBlogLayout) setBlogLayout('masonry');
                      handleNavigate('blog');
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer rounded-xl ${
                      currentPage === 'blog' && blogLayout === 'masonry'
                        ? 'bg-[#F1E8F1] text-[#7F4B7C]'
                        : 'text-[#4A4A4A] hover:bg-[#F1E8F1] hover:text-[#7F4B7C]'
                    }`}
                  >
                    Masonry Blog
                  </button>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <button
              onClick={() => handleNavigate('contact')}
              className={`text-sm font-semibold tracking-wider uppercase py-2 transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#7F4B7C] border-b-2 border-[#7F4B7C]'
                  : 'text-[#2C2C2C] hover:text-[#7F4B7C]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Action Buttons (Rounded Theme with WhatsApp Redirection) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* WhatsApp Redirection Button */}
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer hover:scale-105 active:scale-95"
              title="Chat with Dr Anne on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Book Appointment Button - Rounded Corner Theme */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 bg-[#7F4B7C] hover:bg-[#5B3259] text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:scale-105 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C2C2C] hover:text-[#7F4B7C] focus:outline-none cursor-pointer rounded-full hover:bg-gray-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8DCE8] px-4 pt-3 pb-6 space-y-2.5 shadow-lg rounded-b-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="border-b border-[#E8DCE8] pb-2 mb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Pages
              </span>
              <button
                onClick={() => handleNavigate('home1')}
                className="w-full text-left py-2 text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C]"
              >
                Home
              </button>
              
              <button
                onClick={() => handleNavigate('about')}
                className="w-full text-left py-2 text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C]"
              >
                About Dr Anne
              </button>
              <button
                onClick={() => {
                  handleNavigate('home1');
                  setTimeout(() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full text-left py-2 text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C]"
              >
                Psychological Services
              </button>
              
              <button
                onClick={() => handleNavigate('blog')}
                className="w-full text-left py-2 text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C]"
              >
                Blog & Articles
              </button>
              
              <button
                onClick={() => handleNavigate('contact')}
                className="w-full text-left py-2 text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C]"
              >
                Contact & Location
              </button>
            </div>

            {/* Mobile Contact Quick Actions (Rounded Theme with WhatsApp) */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#7F4B7C] text-white py-3 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 border border-[#7F4B7C] text-[#7F4B7C] py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
