'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useCountUp(target: number, duration = 1500, trigger: boolean = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [target, duration, trigger]);

  return value;
}

function StatCard({
  value,
  numericValue,
  suffix,
  label,
  delay,
}: {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(numericValue, 1400, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -2 }}
      className="glass-card glass-card-hover rounded-2xl p-6 text-center group"
    >
      <div
        className="text-4xl font-extrabold mb-1 bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)' }}
      >
        {triggered ? count : 0}{suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

const stats = [
  { value: '8+', numericValue: 8, suffix: '+', label: 'Years Experience' },
  { value: '40+', numericValue: 40, suffix: '+', label: 'Projects Shipped' },
  { value: '12', numericValue: 12, suffix: '', label: 'Countries Served' },
  { value: '50+', numericValue: 50, suffix: '+', label: 'Team Members Mentored' },
];

const skills = [
  { name: 'React', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20' },
  { name: 'TypeScript', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/20' },
  { name: 'Next.js', color: 'from-slate-500/20 to-slate-700/20', border: 'border-slate-500/20' },
  { name: 'Node.js', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20' },
  { name: 'GraphQL', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/20' },
  { name: 'PostgreSQL', color: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/20' },
  { name: 'AWS', color: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-500/20' },
  { name: 'Docker', color: 'from-sky-500/20 to-cyan-500/20', border: 'border-sky-500/20' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Left accent line */}
      <div className="absolute left-0 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-badge mb-4 inline-flex">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-100 leading-tight">
              Crafting digital{' '}
              <span className="text-gradient-violet-cyan">experiences</span> that matter
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              I&apos;m a full-stack developer with 8+ years of experience building digital
              experiences that scale. From startups to enterprise platforms, I&apos;ve worked
              across the entire stack to deliver solutions that users love.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My approach combines technical excellence with user-centric design. I specialize
              in creating performant, accessible applications that solve real problems and drive
              measurable impact.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-slate-300 mb-5">Core Tech Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  <div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} border ${skill.border} text-slate-200 text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-default`}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
