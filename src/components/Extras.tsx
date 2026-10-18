import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const rm = useReducedMotion();
  const [v, setV] = useState(rm ? to : 0);
  useEffect(() => {
    if (!inView || rm) return;
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, rm, to]);
  return <span ref={ref}>{v}{suffix}</span>;
};

export const Carousel: React.FC<{ items: React.ReactNode[]; autoplay?: boolean; slideClass?: string; label?: string }> = ({
  items, autoplay = true, slideClass = 'w-[86%] sm:w-[47%] lg:w-[32%]', label = 'Carousel',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rm = useReducedMotion();
  const go = useCallback((i: number) => {
    const el = ref.current; if (!el) return;
    const n = items.length; const c = el.children[((i % n) + n) % n] as HTMLElement;
    el.scrollTo({ left: c.offsetLeft, behavior: rm ? 'auto' : 'smooth' });
  }, [items.length, rm]);
  const onScroll = () => {
    const el = ref.current; if (!el) return;
    let best = 0, d = 1e9;
    Array.from(el.children).forEach((c, i) => { const dd = Math.abs((c as HTMLElement).offsetLeft - el.scrollLeft); if (dd < d) { d = dd; best = i; } });
    setActive(best);
    const m = el.scrollWidth - el.clientWidth; setProgress(m > 0 ? el.scrollLeft / m : 0);
  };
  useEffect(() => {
    if (!autoplay || paused || rm) return;
    const t = setInterval(() => {
      const el = ref.current; if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 6) go(0); else go(active + 1);
    }, 4200);
    return () => clearInterval(t);
  }, [active, paused, autoplay, rm, go]);
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div
        ref={ref} onScroll={onScroll} tabIndex={0} aria-label={label}
        onKeyDown={(e) => { if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); } }}
        className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) => (
          <motion.div key={i} className={`snap-start shrink-0 ${slideClass}`}
            initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: Math.min(i, 3) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}>
            <motion.div animate={{ scale: i === active ? 1 : 0.95, opacity: i === active ? 1 : 0.82 }} transition={{ type: 'spring', stiffness: 200, damping: 24 }} className="h-full">
              {it}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-5 mt-2">
        <div className="flex gap-2">
          <button type="button" onClick={() => go(active - 1)} aria-label="Previous" className="w-11 h-11 rounded-full border-2 border-[#7F4B7C] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white transition-colors flex items-center justify-center cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
          <button type="button" onClick={() => go(active + 1)} aria-label="Next" className="w-11 h-11 rounded-full border-2 border-[#7F4B7C] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white transition-colors flex items-center justify-center cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
        </div>
        <div className="flex-1 h-1 bg-[#E8DCE8] rounded-full overflow-hidden"><motion.div className="h-full bg-[#7F4B7C] rounded-full origin-left" animate={{ width: `${Math.max(12, progress * 100)}%` }} transition={{ duration: 0.3 }} /></div>
      </div>
    </div>
  );
};

export const Carousel3D: React.FC<{ faces: { img: string; label: string }[] }> = ({ faces }) => {
  const step = 360 / faces.length;
  return (
    <div className="c3d-wrap" aria-label="Tara Mindcare highlights">
      <div className="c3d">
        <div className="c3d-ring">
          {faces.map((f, i) => (
            <div key={i} className="c3d-face" style={{ backgroundImage: `url("${f.img}")`, transform: `rotateY(${i * step}deg) translateZ(346px)` }}>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SceneBand: React.FC<{ img: string; eyebrow: string; title: string; cta?: string; onCta?: () => void }> = ({ img, eyebrow, title, cta, onCta }) => (
  <section className="relative overflow-hidden text-white text-center py-16 sm:py-24">
    <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${img}")` }} initial={{ scale: 1.18 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 2.4, ease: 'easeOut' }} />
    <div className="absolute inset-0 bg-[#2f1b30]/45"></div>
    <motion.div className="relative max-w-3xl mx-auto px-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100">{eyebrow}</span>
      <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-3 leading-tight">{title}</h2>
      {cta && onCta && (<button onClick={onCta} className="mt-8 bg-white text-[#5B3259] hover:bg-[#F1E8F1] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-colors cursor-pointer">{cta}</button>)}
    </motion.div>
  </section>
);
