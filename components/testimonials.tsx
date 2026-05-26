'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// FIX: moved outside component so the array reference is stable (no stale closure)
const testimonials = [
  {
    quote:
      'Alex transformed our entire frontend architecture. The improvements in performance and developer experience were immediately noticeable.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp',
    initials: 'SC',
    color: 'from-violet-500 to-purple-600',
  },
  {
    quote:
      'Working with Alex was a game-changer. Their attention to detail and ability to think strategically about systems is exceptional.',
    author: 'Michael Rodriguez',
    role: 'Founder & CEO',
    company: 'StartupAI',
    initials: 'MR',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    quote:
      'Alex brings not just technical excellence but also a genuine passion for creating beautiful, accessible products that users love.',
    author: 'Emma Thompson',
    role: 'Product Director',
    company: 'DesignStudio',
    initials: 'ET',
    color: 'from-pink-500 to-rose-600',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.07 }}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // FIX: testimonials is now a stable module-level constant
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.04) 50%, transparent 100%)',
      }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[160px] leading-none font-serif text-violet-500/5 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.span
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-px w-8"
              style={{ background: 'linear-gradient(90deg, #a78bfa, #22d3ee)' }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#a78bfa' }}
            >
              Testimonials
            </span>
            <motion.span
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-px w-8"
              style={{ background: 'linear-gradient(270deg, #a78bfa, #22d3ee)' }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-50 leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            What People
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Feedback from colleagues and clients I&apos;ve had the pleasure of working with.
          </motion.p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col"
            >
              <StarRating />
              <p className="text-slate-300 leading-relaxed italic flex-1 mb-6 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-100 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: auto-carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="glass-card rounded-2xl p-6"
              >
                <StarRating />
                <p className="text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'bg-violet-400 w-7 h-2'
                    : 'bg-white/20 hover:bg-white/40 w-2 h-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
