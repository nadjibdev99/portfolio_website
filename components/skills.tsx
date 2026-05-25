'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'React', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 94 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Redux', level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Node.js', level: 91 },
      { name: 'Express', level: 88 },
      { name: 'PostgreSQL', level: 86 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 78 },
      { name: 'GraphQL', level: 84 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'AWS', level: 82 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 72 },
      { name: 'CI/CD', level: 88 },
      { name: 'Vercel', level: 92 },
      { name: 'GitHub Actions', level: 87 },
    ],
  },
  {
    category: 'Tools & Methods',
    icon: '🛠️',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Agile', level: 90 },
      { name: 'Testing', level: 83 },
      { name: 'System Design', level: 79 },
      { name: 'REST APIs', level: 93 },
      { name: 'Microservices', level: 76 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-flex">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mt-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Technologies and methodologies I&apos;ve mastered over my career.
          </p>
        </motion.div>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 space-y-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg flex-shrink-0`}
                  style={{ background: 'rgba(124,58,237,0.15)' }}
                >
                  {cat.icon}
                </div>
                <h3
                  className={`text-lg font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={catIdx * 0.1 + skillIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 overflow-hidden relative"
          style={{
            background:
              'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.08) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.3), transparent 70%)',
          }} />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Technologies Used' },
              { number: '40+', label: 'Successful Projects' },
              { number: '8+', label: 'Years Experience' },
              { number: '∞', label: 'Love for Code' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="space-y-1"
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)' }}
                >
                  {item.number}
                </div>
                <p className="text-slate-500 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
