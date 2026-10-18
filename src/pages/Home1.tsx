import React, { useState, useEffect } from 'react';
import { Carousel, Carousel3D } from '../components/Extras';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
  HeartHandshake,
  Activity,
  Users,
  Sparkles,
  ArrowRight,
  Quote,
  Star,
  Heart,
} from 'lucide-react';
import {
  IMG,
  SERVICES_DATA,
  TESTIMONIALS_DATA,
  BLOG_POSTS_DATA,
  TOPIC_IMAGES,
  ServiceItem,
  BlogPost,
} from '../data/siteData';

const SERVICE_TOPIC_IMAGES: Record<string, string> = {
  'trauma-recovery': TOPIC_IMAGES.traumaRecovery,
  'narcissistic-abuse': TOPIC_IMAGES.narcissisticAbuseRecovery,
  'inner-child-resilience': TOPIC_IMAGES.emotionalResilience,
  'positive-psychology-coaching': TOPIC_IMAGES.personalGrowth,
  'mindfulness-ei': TOPIC_IMAGES.mindfulness,
  'grief-healing': TOPIC_IMAGES.griefHealing,
};

interface Home1Props {
  onOpenService: (service: ServiceItem) => void;
  onOpenArticle: (article: BlogPost) => void;
  setCurrentPage: (page: string) => void;
}

export const Home1: React.FC<Home1Props> = ({
  onOpenService,
  onOpenArticle,
  setCurrentPage,
}) => {
  // Hero Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      subtitle: 'COUNSELLING PSYCHOLOGIST • DR ANNE ROSARIO',
      title: 'Your Space for Healing and Growth',
      description:
        'A warm, confidential space to understand what you are feeling, work through life’s challenges and find a way forward at your own pace.',
      secondaryBtn: 'Explore Services',
      bgImage:
        IMG.hero[0],
    },
    {
      subtitle: 'EMPOWERING MINDS & HEARTS',
      title: 'Find Clarity. Build Confidence.',
      description:
        'Explore your strengths, notice the patterns shaping your choices and build confidence for intentional personal growth.',
      secondaryBtn: 'How I Can Help',
      bgImage:
        IMG.hero[1],
    },
    {
      subtitle: 'GUIDANCE THROUGH LIFE’S PHASES',
      title: 'Navigate Change with Support',
      description:
        'Support for relationship concerns, career changes and everyday stress, with space to reflect on what matters and consider your next steps.',
      secondaryBtn: 'Read Wellbeing Blog',
      bgImage:
        IMG.hero[2],
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Testimonials slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Helper to get Lucide icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#7F4B7C]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#7F4B7C]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#7F4B7C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#7F4B7C]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-[#7F4B7C]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#7F4B7C]" />;
      default:
        return <Heart className="w-7 h-7 text-[#7F4B7C]" />;
    }
  };

  // Framer Motion entrance animation variants matching Cloe Brooks reveal effects
  const servicesContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const serviceCardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const testimonialCardVariants: Variants = {
    initial: { opacity: 0, y: 18, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="w-full">
      {/* 1. LARGE HERO SLIDER (3 Slides) */}
      <section className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] overflow-hidden bg-[#2f1b30]">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image with subtle overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A0E38]/90 via-[#4A2748]/75 to-transparent"></div>
            </div>

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center">
              <div className="max-w-2xl text-white space-y-5 animate-in fade-in slide-in-from-left duration-700">
                <div className="inline-flex items-center gap-2 bg-[#7F4B7C]/80 backdrop-blur-xs px-3.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-purple-200 border-l-2 border-white">
                  <span>{slide.subtitle}</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-sm">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-light max-w-xl">
                  {slide.description}
                </p>

                <div className="pt-3 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => {
                      if (index === 0) {
                        const el = document.getElementById('services-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else if (index === 1) {
                        setCurrentPage('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        setCurrentPage('blog');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="border border-white/80 hover:bg-white hover:text-[#7F4B7C] text-white text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all cursor-pointer"
                  >
                    {slide.secondaryBtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#7F4B7C] text-white flex items-center justify-center rounded-full transition-all cursor-pointer border border-white/20 shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#7F4B7C] text-white flex items-center justify-center rounded-full transition-all cursor-pointer border border-white/20 shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. THREE HIGHLIGHT CARDS (Soft rounded-2xl theme to remove boxy feel) */}
      <section className="relative z-20 -mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-xl rounded-2xl border-t-4 border-[#7F4B7C] hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 bg-[#F1E8F1] rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-[#7F4B7C]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-2">
              Confidential & Safe Space
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              A respectful, non-judgmental space to share what feels comfortable. Dr Anne can explain how privacy is handled and any limits before counselling begins.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#7F4B7C] text-white p-8 shadow-xl rounded-2xl border-t-4 border-[#4A2748] hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="font-serif text-lg font-bold mb-2">
              Empathetic Guidance
            </h3>
            <p className="text-xs text-purple-100/80 leading-relaxed">
              Dr Anne Rosario provides compassionate, attuned psychological presence to help you uncover underlying emotional patterns and navigate challenges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-xl rounded-2xl border-t-4 border-[#7F4B7C] hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 bg-[#F1E8F1] rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[#7F4B7C]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-2">
              Tailored Growth Pathways
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Conversations can take account of your circumstances, pace and values as you consider practical next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PSYCHOLOGICAL SERVICES SECTION (Cloe Brooks Signature Grid) */}
      <section id="services-section" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-2 mb-4 cloe-border-bottom">
            Psychological Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-3">
            Grounded in ethical counselling psychology, our consultations offer clarity, emotional resilience, and practical tools across diverse life situations.
          </p>
        </motion.div>

        <Carousel label="Areas of support" items={SERVICES_DATA.map((service, i) => (
          <div key={service.id} className="group bg-white border border-[#E8DCE8] rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-44">
              <div className="absolute inset-0 overflow-hidden"><img src={SERVICE_TOPIC_IMAGES[service.id] ?? IMG.panels[i % IMG.panels.length]} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" /></div>
              <div className="absolute bottom-0 left-6 translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-[#E8DCE8]">{getServiceIcon(service.iconName)}</div>
            </div>
            <div className="p-6 pt-10 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.shortDescription}</p>
              </div>
              <button onClick={() => onOpenService(service)} className="self-start text-xs font-bold uppercase tracking-wider text-[#7F4B7C] hover:text-white hover:bg-[#7F4B7C] bg-[#F1E8F1] px-5 py-2 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"><span>Read More</span><ArrowRight className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))} />
      </section>

      {/* 3D CAROUSEL */}
      <section className="relative py-14 bg-gradient-to-b from-[#FAF6EE] via-[#F1E8F1] to-[#FAF6EE] overflow-hidden">
        <div className="text-center px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7F4B7C]">Heal • Empower • Thrive</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-3">Find Clarity. Build Confidence. Embrace Intentional Living.</h2>
        </div>
        <Carousel3D faces={[
          ...SERVICES_DATA.slice(0, 3).map((s, i) => ({ img: IMG.panels[i], label: s.title })),
          { img: IMG.hero[0], label: 'Heal' },
          ...SERVICES_DATA.slice(3, 6).map((s, i) => ({ img: IMG.panels[i + 3], label: s.title })),
          { img: IMG.hero[1], label: 'Empower' },
          { img: IMG.hero[2], label: 'Thrive' },
        ]} />
      </section>

      {/* 7. FEATURED ARTICLES SECTION */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
              From The Blog
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2C2C] mt-2 cloe-border-bottom-left">
              Featured Wellbeing Articles
            </h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#7F4B7C] hover:text-[#5B3259] bg-[#F1E8F1] hover:bg-[#E8DCE8] px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <Carousel label="Articles" items={BLOG_POSTS_DATA.map((post) => (
            <article
              key={post.id}
              className="h-full bg-white border border-[#E8DCE8] rounded-2xl hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden rounded-none">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#7F4B7C] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3
                    onClick={() => onOpenArticle(post)}
                    className="font-serif text-lg font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                <button
                  onClick={() => onOpenArticle(post)}
                  className="text-xs font-bold uppercase tracking-wider text-[#7F4B7C] hover:text-white hover:bg-[#7F4B7C] bg-[#F1E8F1] px-4 py-1.5 rounded-full flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer pt-2"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))} />
      </section>

    </div>
  );
};
