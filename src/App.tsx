import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Home1 } from './pages/Home1';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPost, ServiceItem, SERVICES_DATA, IMG } from './data/siteData';
import { SceneBand } from './components/Extras';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home1');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string>('trauma-recovery');
  const [galleryLayout, setGalleryLayout] = useState<'grid' | 'masonry' | 'cobbles'>('grid');
  const [blogLayout, setBlogLayout] = useState<'standard' | 'masonry'>('standard');

  const [activeSection, setActiveSection] = useState<string>('home1');
  useEffect(() => {
    if (currentPage !== 'home1') return;
    const map: Record<string, string> = { 'sec-home': 'home1', 'sec-about': 'about', 'sec-blog': 'blog', 'sec-contact': 'contact' };
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) setActiveSection(map[e.target.id]); }); }, { rootMargin: '-40% 0px -55% 0px' });
    const t = setTimeout(() => Object.keys(map).forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); }), 200);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [currentPage]);
  const SECTION_IDS: Record<string, string> = { home1: 'sec-home', about: 'sec-about', blog: 'sec-blog', contact: 'sec-contact' };
  const nav = (page: string) => {
    if (page === 'home1') { setCurrentPage('home1'); return; }
    const id = SECTION_IDS[page];
    if (!id) { setCurrentPage(page); return; }
    setCurrentPage('home1');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 76), behavior: 'smooth' });
    }, 120);
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedBookingService(serviceId);
    }
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    const srv = SERVICES_DATA.find((s) => s.id === serviceId);
    if (srv) {
      setSelectedService(srv);
    }
  };

  const handleOpenArticle = (article: BlogPost) => {
    setSelectedArticle(article);
    setCurrentPage('article-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#2C2C2C]">
      {/* Header */}
      <Header
        currentPage={currentPage === 'home1' ? activeSection : currentPage}
        setCurrentPage={nav}
        onOpenBooking={() => handleOpenBooking()}
        onSelectService={handleSelectService}
        galleryLayout={galleryLayout}
        setGalleryLayout={setGalleryLayout}
        blogLayout={blogLayout}
        setBlogLayout={setBlogLayout}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home1' && (
          <>
            <div id="sec-home">
              <Home1 onOpenService={(srv) => setSelectedService(srv)} onOpenArticle={handleOpenArticle} setCurrentPage={nav} />
            </div>
            <div id="sec-about">
              <AboutPage />
            </div>
            <SceneBand img={IMG.hero[0]} eyebrow="Heal • Empower • Thrive" title="Take control of your mental wellbeing" />
            <div id="sec-blog">
              <BlogPage layout={blogLayout} setLayout={setBlogLayout} onSelectArticle={handleOpenArticle} setCurrentPage={nav} />
            </div>
            <SceneBand img={IMG.hero[1]} eyebrow="Begin when you are ready" title="Find Clarity, Build Confidence, Embrace Intentional Living." />
            <div id="sec-contact">
              <ContactPage setCurrentPage={nav} />
            </div>
          </>
        )}

        {currentPage === 'article-detail' && selectedArticle && (
          <ArticleDetailPage
            article={selectedArticle}
            onBack={() => {
              nav('blog');
            }}
            onSelectArticle={handleOpenArticle}
          />
        )}

              </main>

      {/* Footer */}
      <Footer
        setCurrentPage={nav}
      />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedBookingService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(srvId) => {
          setSelectedService(null);
          handleOpenBooking(srvId);
        }}
      />

    </div>
  );
}
