'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';





const skills = [
  { name: 'React', accent: '#38bdf8', accentRgb: '56, 189, 248' },
  { name: 'JavaScript', accent: '#fde047', accentRgb: '253, 224, 71' },
  { name: 'Next.js', accent: '#94a3b8', accentRgb: '148, 163, 184' },
  { name: 'Node.js', accent: '#4ade80', accentRgb: '74, 222, 128' },
  { name: 'GraphQL', accent: '#f472b6', accentRgb: '244, 114, 182' },
  { name: 'PostgreSQL', accent: '#818cf8', accentRgb: '129, 140, 248' },
  { name: 'AWS', accent: '#fbbf24', accentRgb: '251, 191, 36' },
  { name: 'Prisma', accent: '#2dd4bf', accentRgb: '45, 212, 191' },
  { name: 'Figma', accent: '#a78bfa', accentRgb: '167, 139, 250' },
];

function AboutSkillChip({ skill, accent, accentRgb, delay }: {
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

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-8"
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
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-black mb-6 text-slate-50 leading-[1.05] tracking-tight"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            >
              Crafting digital{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                experiences
              </span>{' '}
              that matter
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              I&apos;m <span className="text-slate-200 font-semibold">Nadjib</span>, a full-stack
              developer who builds digital experiences that scale. From startups to enterprise
              platforms, I work across the entire stack to deliver solutions that users love.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My approach combines technical excellence with user-centric design. I specialize
              in creating performant, accessible applications that solve real problems and drive
              measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-slate-300 mb-5">Core Tech Stack</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <AboutSkillChip
                  key={skill.name}
                  skill={skill.name}
                  accent={skill.accent}
                  accentRgb={skill.accentRgb}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
