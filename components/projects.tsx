'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    index: '01',
    title: 'E-Stage DZ',
    description:
      'Engineered a scalable internship platform bridging Algerian students with top companies. Features role-based dashboards, seamless application tracking, and an optimized recruitment pipeline.',
    tags: [
      { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
      { name: 'Express', url: 'https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white' },
      { name: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'Prisma', url: 'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white' },
      { name: 'Tailwind CSS', url: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    ],
    accent: '#a78bfa',
    accentRgb: '167, 139, 250',
    github: 'https://github.com/nadjibdev99/Estage_DZ',
    live: 'https://e-stage-dz.vercel.app',
    visual: 'stack',
    image: '/estage.jpg',
  },
  {
    index: '02',
    title: 'Edusity',
    description:
      'Designed and developed a premium landing page for a modern university. Focuses on conversion optimization, smooth scroll animations, and a polished, professional aesthetic.',
    tags: [
      { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'Vite', url: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white' },
      { name: 'CSS3', url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    ],
    accent: '#22d3ee',
    accentRgb: '34, 211, 238',
    github: 'https://github.com/nadjibdev99/edusity',
    visual: 'browser',
    image: '/edusity.jpg',
  },
  {
    index: '03',
    title: 'Portfolio Website',
    description:
      'Architected a high-performance personal portfolio leveraging Next.js. Integrates Framer Motion for fluid interactions, a dynamic particle background, and a responsive dark-mode UI.',
    tags: [
      { name: 'Next.js', url: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' },
      { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'Tailwind CSS', url: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'Framer Motion', url: 'https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white' },
    ],
    accent: '#34d399',
    accentRgb: '52, 211, 153',
    github: 'https://github.com/nadjibdev99/portfolio_website',
    visual: 'browser',
    image: '/portfolio.jpg',
  },
  {
    index: '04',
    title: 'EcoHack',
    description:
      'Collaborated in a fast-paced hackathon to build an AI-powered sustainability platform. Integrates a custom chatbot, localized multilingual support, and a streamlined onboarding flow for students.',
    tags: [
      { name: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
      { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'Vite', url: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white' },
      { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
      { name: 'FastAPI', url: 'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white' },
    ],
    accent: '#f59e0b',
    accentRgb: '245, 158, 11',
    github: 'https://github.com/ita27rmp100/EcoHack',
    visual: 'api',
    image: '/ecohack.jpg',
  },
];

// ─── SVG placeholder visuals ──────────────────────────────────────────────────

function VisualStack({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full opacity-80">
      <rect x="30" y="70" width="140" height="18" rx="4" fill={accent} opacity="0.15" />
      <rect x="30" y="70" width="140" height="18" rx="4" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
      <rect x="40" y="48" width="120" height="18" rx="4" fill={accent} opacity="0.2" />
      <rect x="40" y="48" width="120" height="18" rx="4" stroke={accent} strokeOpacity="0.4" strokeWidth="1" />
      <rect x="50" y="26" width="100" height="18" rx="4" fill={accent} opacity="0.35" />
      <rect x="50" y="26" width="100" height="18" rx="4" stroke={accent} strokeOpacity="0.7" strokeWidth="1" />
      <circle cx="100" cy="35" r="3" fill={accent} />
    </svg>
  );
}

function VisualBrowser({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full opacity-80">
      <rect x="20" y="15" width="160" height="90" rx="8" fill={accent} fillOpacity="0.06" stroke={accent} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="20" y="15" width="160" height="22" rx="8" fill={accent} fillOpacity="0.1" />
      <circle cx="35" cy="26" r="4" fill={accent} fillOpacity="0.5" />
      <circle cx="50" cy="26" r="4" fill={accent} fillOpacity="0.3" />
      <circle cx="65" cy="26" r="4" fill={accent} fillOpacity="0.2" />
      <rect x="30" y="48" width="80" height="6" rx="3" fill={accent} fillOpacity="0.25" />
      <rect x="30" y="60" width="130" height="4" rx="2" fill={accent} fillOpacity="0.12" />
      <rect x="30" y="70" width="110" height="4" rx="2" fill={accent} fillOpacity="0.12" />
      <rect x="30" y="80" width="90" height="4" rx="2" fill={accent} fillOpacity="0.12" />
      <rect x="130" y="48" width="36" height="14" rx="4" fill={accent} fillOpacity="0.3" stroke={accent} strokeOpacity="0.5" strokeWidth="1" />
    </svg>
  );
}

function VisualApi({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-full opacity-80">
      <circle cx="40" cy="60" r="20" fill={accent} fillOpacity="0.08" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="160" cy="60" r="20" fill={accent} fillOpacity="0.08" stroke={accent} strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="100" cy="60" r="14" fill={accent} fillOpacity="0.18" stroke={accent} strokeOpacity="0.6" strokeWidth="1" />
      <line x1="60" y1="60" x2="86" y2="60" stroke={accent} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="114" y1="60" x2="140" y2="60" stroke={accent} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="100" y="65" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" opacity="0.8">API</text>
      <text x="40" y="95" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace" opacity="0.5">CLIENT</text>
      <text x="160" y="95" textAnchor="middle" fill={accent} fontSize="7" fontFamily="monospace" opacity="0.5">DB</text>
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
// FIX 1: useCallback on mouse handlers to avoid re-creating functions on render
// FIX 2: Higher spring damping/lower stiffness = less computation per frame
// FIX 3: 3D tilt only activates on hover, skipped entirely during scroll
// FIX 4: Removed `transformStyle: preserve-3d` — kills GPU layer promotion
// FIX 5: Removed `backdropFilter` from cards — extremely expensive during scroll
// FIX 6: Glow uses CSS opacity transition instead of Framer animate (no JS loop)

function ProjectCard({ project, idx }: { project: typeof projects[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="relative group h-full cursor-pointer"
    >
      {/* Soft outward glow effect behind the card on hover with a single unified color */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
        style={{
          boxShadow: '0 10px 40px -5px rgba(167, 139, 250, 0.4)'
        }}
      />

      <div
        className="relative rounded-2xl flex flex-col h-full overflow-hidden transition-all duration-300 ease-out"
        style={{
          background: '#1e1f36',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
          {/* Visual pane */}
          <div className="relative w-full flex items-center justify-center bg-black/40">
            {/* Ambient glow in the image container */}
            <div
              className="absolute inset-0 opacity-20 blur-2xl transition-opacity duration-300 ease-out group-hover:opacity-40"
              style={{ background: `radial-gradient(circle at center, rgba(${project.accentRgb}, 0.8) 0%, transparent 70%)` }}
            />

            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-auto object-contain relative z-10 block transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
            ) : (
              <div className="w-full h-52 md:h-64 flex items-center justify-center opacity-70 relative z-10">
                {project.visual === 'stack' && <VisualStack accent={project.accent} />}
                {project.visual === 'browser' && <VisualBrowser accent={project.accent} />}
                {project.visual === 'api' && <VisualApi accent={project.accent} />}
              </div>
            )}
          </div>

          {/* Content pane */}
          <div className="flex flex-col flex-1 p-4 md:p-5">
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <img
                  key={tag.name}
                  src={tag.url}
                  alt={tag.name}
                  className="h-6 rounded-[3px] pointer-events-none"
                />
              ))}
            </div>

            {/* Links */}
            <div className="mt-auto flex items-center gap-5 pt-2">
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Live Demo
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background orbs — FIX: Changed from motion.div with `animate` (runs a
          JS animation loop at 60fps forever) to pure CSS keyframe animation.
          CSS animations run on the compositor thread, not the main JS thread,
          so they don't compete with scroll event processing. */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/3 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)',
            animation: 'orbFloat1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
            animation: 'orbFloat2 26s ease-in-out infinite',
            animationDelay: '7s',
          }}
        />
      </div>

      {/* CSS keyframes injected once — no JS overhead at all */}
      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(35px, -25px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-25px, 35px); }
        }
        /* FIX: pulse on the header line via CSS, not Framer animate */
        @keyframes linePulse {
          0%, 100% { transform: scaleX(1); }
          50%       { transform: scaleX(1.5); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            {/* FIX: CSS animation instead of Framer animate scaleX loop */}
            <span
              className="block h-px w-8 origin-left"
              style={{
                background: 'linear-gradient(90deg, #a78bfa, #22d3ee)',
                animation: 'linePulse 2.5s ease-in-out infinite',
              }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#a78bfa' }}
            >
              Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-50 leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            Featured
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            A few projects I&apos;m proud of — each one a real problem solved with clean code and genuine care for the user experience.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={project.index} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}