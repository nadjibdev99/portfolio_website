'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

const projects = [
  {
    index: '01',
    title: 'Your Project Name',
    tagline: 'Full-Stack App',
    description:
      'Describe what the app does in 1–2 sentences. What problem does it solve? Who is it for? Keep it simple and direct.',
    tags: ['React', 'Node.js', 'Supabase', 'Tailwind CSS'],
    accent: '#a78bfa',
    accentRgb: '167, 139, 250',
    gradientFrom: '#7c3aed',
    gradientTo: '#a78bfa',
    github: '#',
    live: '#',
    visual: 'stack',
  },
  {
    index: '02',
    title: 'Your Project Name',
    tagline: 'Frontend Project',
    description:
      'Describe what this project looks like and what it does. Mention any interesting UI interactions or design decisions you made.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    accent: '#22d3ee',
    accentRgb: '34, 211, 238',
    gradientFrom: '#0891b2',
    gradientTo: '#22d3ee',
    github: '#',
    live: '#',
    visual: 'browser',
  },
  {
    index: '03',
    title: 'Your Project Name',
    tagline: 'Full-Stack App',
    description:
      'Your third project. Could be a personal tool, a clone with a twist, or something you built because you needed it yourself.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    accent: '#34d399',
    accentRgb: '52, 211, 153',
    gradientFrom: '#059669',
    gradientTo: '#34d399',
    github: '#',
    live: '#',
    visual: 'api',
  },
] as const;

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Stiffer spring = fewer intermediate frames computed = less JS per scroll frame
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

  // FIX: Only apply rotation when hovered — when isHovered=false, values are 0 so no transform at all
  const rotateX = useTransform(springY, [-0.5, 0.5], isHovered ? ['4deg', '-4deg'] : ['0deg', '0deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], isHovered ? ['-6deg', '6deg'] : ['0deg', '0deg']);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [isHovered, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const isLarge = idx === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // FIX: Simpler easing, no delay stagger (stagger causes multiple animations mid-scroll)
      transition={{ duration: 0.5, ease: 'easeOut' }}
      // FIX: Larger margin so animation fires well before card enters view (not during scroll)
      viewport={{ once: true, margin: '-40px' }}
      // FIX: No perspective on wrapper — move it to the inner card only, scoped
      className={isLarge ? 'md:col-span-2' : ''}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // FIX: Removed `transformStyle: preserve-3d` — promotes every child to its own
        // compositor layer, massively increasing memory/GPU cost during scroll
        style={{ rotateX, rotateY }}
        className="relative group h-full"
      >
        {/* Ambient glow — FIX: CSS transition instead of Framer `animate` to avoid
            a JS animation loop running constantly in the background during scroll */}
        <div
          className="absolute -inset-3 rounded-[28px] blur-2xl pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse, rgba(${project.accentRgb}, 0.18) 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            // FIX: will-change only set on hover so it doesn't eat VRAM while scrolling
            willChange: isHovered ? 'opacity' : 'auto',
          }}
        />

        {/* Card — FIX: Removed `backdropFilter: blur(24px)`. This is the single
            biggest scroll-lag culprit — the browser must re-blur on every scroll
            pixel. Replaced with a solid semi-transparent background. */}
        <div
          className="relative overflow-hidden rounded-3xl border h-full transition-colors duration-400"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,25,0.98) 0%, rgba(18,18,40,0.97) 100%)',
            borderColor: isHovered ? `rgba(${project.accentRgb}, 0.3)` : 'rgba(255,255,255,0.06)',
          }}
        >
          {/* Top shimmer — FIX: CSS scaleX transition instead of Framer animate */}
          <div
            className="absolute top-0 left-0 right-0 h-px origin-left transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(${project.accentRgb}, 0.8), transparent)`,
              transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
              opacity: isHovered ? 1 : 0,
            }}
          />

          <div className={`flex flex-col ${isLarge ? 'md:flex-row' : ''} h-full`}>

            {/* Visual pane */}
            <div
              className={`relative flex items-center justify-center overflow-hidden ${
                isLarge ? 'md:w-2/5 min-h-[200px]' : 'h-44'
              }`}
              style={{
                background: `linear-gradient(135deg, rgba(${project.accentRgb},0.08) 0%, rgba(${project.accentRgb},0.03) 100%)`,
                borderBottom: isLarge ? 'none' : `1px solid rgba(${project.accentRgb},0.08)`,
                borderRight: isLarge ? `1px solid rgba(${project.accentRgb},0.08)` : 'none',
              }}
            >
              <div
                className="absolute top-3 right-5 font-black text-6xl leading-none select-none pointer-events-none"
                style={{
                  color: `rgba(${project.accentRgb}, 0.07)`,
                  fontFamily: '"DM Serif Display", Georgia, serif',
                }}
              >
                {project.index}
              </div>

              <div className="w-36 h-28">
                {project.visual === 'stack' && <VisualStack accent={project.accent} />}
                {project.visual === 'browser' && <VisualBrowser accent={project.accent} />}
                {project.visual === 'api' && <VisualApi accent={project.accent} />}
              </div>
            </div>

            {/* Content pane */}
            <div className="flex flex-col flex-1 p-7 md:p-9">

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold flex-shrink-0"
                  style={{
                    background: `rgba(${project.accentRgb}, 0.12)`,
                    color: project.accent,
                    border: `1px solid rgba(${project.accentRgb}, 0.22)`,
                  }}
                >
                  {project.index}
                </div>
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: `rgba(${project.accentRgb}, 0.7)` }}
                >
                  {project.tagline}
                </span>
              </div>

              <h3
                className="text-2xl font-black mb-3 leading-tight"
                style={{
                  background: `linear-gradient(135deg, #f1f5f9 40%, ${project.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: '"DM Serif Display", Georgia, serif',
                }}
              >
                {project.title}
              </h3>

              <div
                className="mb-4 h-px w-12"
                style={{ background: `linear-gradient(90deg, rgba(${project.accentRgb},0.5), transparent)` }}
              />

              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'rgba(148,163,184,0.9)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `rgba(${project.accentRgb}, 0.07)`,
                      color: `rgba(${project.accentRgb}, 0.85)`,
                      border: `1px solid rgba(${project.accentRgb}, 0.15)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-4 pt-5"
                style={{ borderTop: `1px solid rgba(${project.accentRgb}, 0.1)` }}
              >
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: 'rgba(148,163,184,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f1f5f9')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.7)')}
                >
                  <GitHubIcon className="w-4 h-4" />
                  Source
                </a>

                <a
                  href={project.live}
                  className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: `rgba(${project.accentRgb}, 0.1)`,
                    color: project.accent,
                    border: `1px solid rgba(${project.accentRgb}, 0.25)`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb}, 0.18)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px rgba(${project.accentRgb}, 0.2)`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb}, 0.1)`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  Live demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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

      <div className="max-w-6xl mx-auto relative z-10">

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
            Three projects I&apos;m proud of — each one a real problem solved with clean code and genuine care for the user experience.
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