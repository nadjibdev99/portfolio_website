'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    id: 'frontend',
    index: '01',
    category: 'Frontend Excellence',
    description: 'Building responsive, accessible, and performant user interfaces with pixel-perfect fidelity.',
    accent: '#a78bfa',
    accentRgb: '167, 139, 250',
    gradientFrom: '#7c3aed',
    gradientTo: '#c026d3',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    id: 'backend',
    index: '02',
    category: 'Backend Engineering',
    description: 'Designing scalable APIs, microservices, and robust database architectures under load.',
    accent: '#22d3ee',
    accentRgb: '34, 211, 238',
    gradientFrom: '#0891b2',
    gradientTo: '#0ea5e9',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    id: 'devops',
    index: '03',
    category: 'Cloud & DevOps',
    description: 'Automating deployments and managing cloud infrastructure for zero-downtime delivery.',
    accent: '#34d399',
    accentRgb: '52, 211, 153',
    gradientFrom: '#059669',
    gradientTo: '#10b981',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Vercel', 'GitHub Actions'],
  },
  {
    id: 'arch',
    index: '04',
    category: 'Architecture & Tools',
    description: 'Applying battle-tested patterns in software design and cross-functional collaboration.',
    accent: '#fbbf24',
    accentRgb: '251, 191, 36',
    gradientFrom: '#d97706',
    gradientTo: '#f59e0b',
    skills: ['Git Flow', 'Agile/Scrum', 'TDD & Testing', 'System Design', 'RESTful APIs', 'Micro-frontends'],
  },
];

function SkillChip({ skill, accent, accentRgb, delay }: {
  skill: string;
  accent: string;
  accentRgb: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? `rgba(${accentRgb}, 0.12)` : 'rgba(255,255,255,0.04)',
        borderColor: hovered ? accent : 'rgba(255,255,255,0.08)',
        color: hovered ? accent : 'rgba(220,230,248,0.85)',
        boxShadow: hovered ? `0 0 20px rgba(${accentRgb}, 0.25), inset 0 0 12px rgba(${accentRgb}, 0.05)` : 'none',
      }}
      animate={{
        y: hovered ? -3 : 0,
        scale: hovered ? 1.04 : 1,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium cursor-default select-none transition-colors duration-200"
    >
      <motion.span
        animate={{
          width: hovered ? 6 : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{ height: 6, borderRadius: '50%', background: accent, flexShrink: 0, display: 'inline-block' }}
      />
      {skill}
    </motion.span>
  );
}

function CategoryCard({ cat, idx }: { cat: typeof skillCategories[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6deg', '6deg']);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true, margin: '-60px' }}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
        className="relative group"
      >
        {/* Ambient glow behind card */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.85 }}
          transition={{ duration: 0.5 }}
          className="absolute -inset-3 rounded-[28px] blur-2xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse, rgba(${cat.accentRgb}, 0.2) 0%, transparent 70%)` }}
        />

        {/* Card */}
        <div
          className="relative overflow-hidden rounded-3xl border"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,25,0.95) 0%, rgba(15,15,35,0.9) 100%)',
            borderColor: isHovered ? `rgba(${cat.accentRgb}, 0.3)` : 'rgba(255,255,255,0.06)',
            transition: 'border-color 0.4s ease',
          }}
        >
          {/* Shimmer line at top */}
          <motion.div
            animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              transformOrigin: 'left',
              background: `linear-gradient(90deg, transparent, rgba(${cat.accentRgb}, 0.8), transparent)`,
            }}
            className="absolute top-0 left-0 right-0 h-px"
          />

          {/* Spotlight gradient following mouse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at ${useTransform(springX, [-0.5, 0.5], ['20%', '80%'])}% ${useTransform(springY, [-0.5, 0.5], ['20%', '80%'])}%, rgba(${cat.accentRgb}, 0.06) 0%, transparent 60%)`,
            }}
          />

          {/* Decorative number */}
          <div
            className="absolute top-6 right-8 font-black text-7xl leading-none select-none pointer-events-none"
            style={{
              color: `rgba(${cat.accentRgb}, 0.06)`,
              fontFamily: '"DM Serif Display", Georgia, serif',
              transform: 'translateZ(20px)',
            }}
          >
            {cat.index}
          </div>

          <div className="relative p-8 md:p-10">
            {/* Top bar: index + category name */}
            <div className="flex items-start gap-5 mb-6">
              {/* Accent index */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold"
                style={{
                  background: `rgba(${cat.accentRgb}, 0.12)`,
                  color: cat.accent,
                  border: `1px solid rgba(${cat.accentRgb}, 0.2)`,
                }}
              >
                {cat.index}
              </div>

              <div className="flex-1">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(135deg, #f1f5f9 30%, ${cat.accent})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {cat.category}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.9)' }}>
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Separator */}
            <div
              className="mb-7 h-px"
              style={{ background: `linear-gradient(90deg, rgba(${cat.accentRgb},0.25), transparent)` }}
            />

            {/* Skills */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, sIdx) => (
                <SkillChip
                  key={skill}
                  skill={skill}
                  accent={cat.accent}
                  accentRgb={cat.accentRgb}
                  delay={idx * 0.08 + sIdx * 0.06}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Deep background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)', willChange: 'transform' }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', willChange: 'transform' }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)', willChange: 'transform' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-50 leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            Technical
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Arsenal
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            A curated overview of the tools, technologies, and methodologies I leverage to craft exceptional digital products — from pixel to production.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, idx) => (
            <CategoryCard key={cat.id} cat={cat} idx={idx} />
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '24+', label: 'Technologies mastered' },
            { value: '4', label: 'Core disciplines' },
            { value: '∞', label: 'Curiosity remaining' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{
                  background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: '"DM Serif Display", Georgia, serif',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 tracking-wide uppercase font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
