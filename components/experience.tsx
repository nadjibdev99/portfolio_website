'use client';

import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'TechCore Solutions',
    period: '2022 — Present',
    description:
      'Leading the architecture and development of scalable web applications. Mentored 5+ junior developers and reduced deployment time by 60%.',
    icon: '🚀',
    color: 'from-violet-500 to-purple-600',
    dotColor: 'bg-violet-400',
    highlights: ['Scalable Architecture', '-60% Deploy Time', '5+ Mentored'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Innovations Inc',
    period: '2020 — 2022',
    description:
      'Built and maintained 10+ production applications serving 500K+ monthly active users. Implemented CI/CD pipelines and improved app performance by 40%.',
    icon: '⚡',
    color: 'from-cyan-500 to-blue-600',
    dotColor: 'bg-cyan-400',
    highlights: ['500K+ MAU', '+40% Performance', 'CI/CD Pipelines'],
  },
  {
    title: 'Junior Developer',
    company: 'StartupHub',
    period: '2018 — 2020',
    description:
      'Developed features for early-stage SaaS products. Learned modern web technologies and best practices in Agile environments.',
    icon: '💡',
    color: 'from-amber-500 to-orange-600',
    dotColor: 'bg-amber-400',
    highlights: ['SaaS Products', 'Agile / Scrum', 'Modern Stack'],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-badge mb-4 inline-flex">Career</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-amber-500 origin-top"
          />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline dot + ping */}
                <div className="absolute left-0 top-6 flex items-center justify-center w-10 h-10">
                  <span
                    className={`absolute inline-flex w-5 h-5 rounded-full ${role.dotColor} opacity-40`}
                    style={{ animation: `dot-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite ${i * 0.5}s` }}
                  />
                  <span className={`relative w-3 h-3 rounded-full ${role.dotColor}`} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`text-3xl w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${role.color} bg-opacity-20 flex-shrink-0`}
                        style={{ background: `linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))` }}
                      >
                        {role.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 leading-snug">{role.title}</h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                          {role.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-800/60 border border-slate-700/40 rounded-full px-3 py-1.5 whitespace-nowrap self-start">
                      {role.period}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-4">{role.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {role.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${role.color} bg-opacity-10 text-slate-300 border border-white/5`}
                        style={{ background: 'rgba(255,255,255,0.05)' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
