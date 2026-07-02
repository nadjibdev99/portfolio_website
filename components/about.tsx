'use client';


import { motion } from 'framer-motion';





const skillCategories = [
  {
    title: '🎨 Frontend & Design',
    skills: [
      { name: 'HTML5', url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
      { name: 'CSS3', url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
      { name: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
      { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
      { name: 'TailwindCSS', url: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'Figma', url: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
    ],
  },
  {
    title: '💻 Languages, Systems & Tools',
    skills: [
      { name: 'C', url: 'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white' },
      { name: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white' },
      { name: 'Assembly', url: 'https://img.shields.io/badge/Assembly-ffffff?style=for-the-badge&logo=nasm&logoColor=black' },
      { name: 'Linux', url: 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
      { name: 'Git', url: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
    ],
  },
  {
    title: '🚀 Currently Learning & practicing',
    skills: [
      { name: 'Next.js', url: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' },
      { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
      { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
      { name: 'Firebase', url: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
      { name: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'AWS', url: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white' },
      { name: 'Prisma', url: 'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white' },
    ]
  }
];

function AboutSkillChip({ skill, url, delay }: {
  skill: string;
  url: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex overflow-hidden rounded-[4px] shadow-sm hover:shadow-md hover:shadow-black/20 transition-all cursor-default"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={skill} className="h-7 object-cover pointer-events-none" />
    </motion.div>
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
              I&apos;m <span className="text-slate-200 font-semibold">Nadjib</span>, a 3rd year Computer Science student at ESTIN, a passionate front-end
              developer, and currently learning backend dev. I focus on building engaging user interfaces while
              expanding my skills in server-side technologies to create complete digital experiences.
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
            className="flex flex-col gap-8"
          >
            {skillCategories.map((category, catIdx) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-slate-300 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <AboutSkillChip
                      key={skill.name}
                      skill={skill.name}
                      url={skill.url}
                      delay={(catIdx * 0.1) + (i * 0.05)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
}
