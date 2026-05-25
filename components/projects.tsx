'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'StreamFlow Analytics',
    description:
      'Real-time analytics dashboard for monitoring user behavior and performance metrics across platforms.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full-Stack',
    metrics: '500K+ daily active users',
    gradient: 'from-violet-600/30 via-purple-600/20 to-indigo-600/30',
    accentColor: 'from-violet-400 to-purple-400',
    icon: '📊',
    github: '#',
    live: '#',
  },
  {
    title: 'PixelPerfect Design',
    description:
      'AI-powered design system platform that automatically generates responsive components from sketches.',
    tags: ['TypeScript', 'ML', 'Tailwind'],
    category: 'Frontend',
    metrics: '10K+ components generated',
    gradient: 'from-pink-600/30 via-rose-600/20 to-fuchsia-600/30',
    accentColor: 'from-pink-400 to-fuchsia-400',
    icon: '🎨',
    github: '#',
    live: '#',
  },
  {
    title: 'CloudSync Pro',
    description:
      'Enterprise file synchronization solution with end-to-end encryption and real-time collaboration.',
    tags: ['Node.js', 'AWS', 'WebSockets'],
    category: 'Backend',
    metrics: '99.99% uptime SLA',
    gradient: 'from-cyan-600/30 via-sky-600/20 to-blue-600/30',
    accentColor: 'from-cyan-400 to-blue-400',
    icon: '☁️',
    github: '#',
    live: '#',
  },
  {
    title: 'VelocityUI Kit',
    description:
      'Comprehensive component library with 200+ accessible, animated components for modern web apps.',
    tags: ['React', 'Storybook', 'WCAG AA'],
    category: 'Frontend',
    metrics: '50K+ npm downloads/month',
    gradient: 'from-amber-600/30 via-orange-600/20 to-yellow-600/30',
    accentColor: 'from-amber-400 to-orange-400',
    icon: '⚡',
    github: '#',
    live: '#',
  },
];

const filters = ['All', 'Frontend', 'Backend', 'Full-Stack'];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // FIX: correct axis assignment (X = vertical tilt, Y = horizontal tilt)
    const x = (e.clientY - rect.top - rect.height / 2) / rect.height;
    const y = (e.clientX - rect.left - rect.width / 2) / rect.width;
    setRotateX(-x * 8);  // FIX: inverted sign corrected
    setRotateY(y * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="group h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="h-full rounded-2xl glass-card border border-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-pointer"
      >
        {/* Thumbnail with animated gradient */}
        <div
          className={`relative w-full h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
          style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 6s ease infinite' }}
        >
          <div className="text-5xl drop-shadow-2xl" style={{ transform: 'translateZ(20px)' }}>
            {project.icon}
          </div>
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          {/* Category badge */}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/40 text-slate-200 backdrop-blur-sm border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

          {/* Metrics */}
          <div className="mb-4 px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/30">
            <p className={`text-sm font-semibold bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
              ✦ {project.metrics}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 text-xs font-medium border border-slate-700/40 group-hover:border-violet-500/30 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-100 transition-colors font-medium"
              aria-label="View GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
            <a
              href={project.live}
              className={`flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent hover:opacity-80 transition-opacity ml-auto`}
            >
              Live Demo
              <svg className="w-3.5 h-3.5 text-violet-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="section-badge mb-4 inline-flex">Work</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-100"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg max-w-2xl mb-10"
        >
          A selection of projects I&apos;m proud of — each one a unique challenge solved with
          precision and creativity.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase()}`}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'text-slate-400 bg-slate-800/40 border border-slate-700/40 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
