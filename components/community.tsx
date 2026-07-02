'use client';

import { motion } from 'framer-motion';

const activities = [
  {
    index: '01',
    type: 'Certificate of Participation',
    title: 'ÉcoHack — Hackathon Écologique',
    description:
      'Awarded a Certificate of Participation in recognition of outstanding engagement and valuable contributions to ÉcoHack — Hackathon Écologique, held on June 2nd & 3rd, 2026, in Chellata. Organized by Jeuneseco & Origo Club.',
    image: '/hackathon.jpg',
    accent: '#34d399',
    accentRgb: '52, 211, 153',
    badge: 'Hackathon Participant',
    badgeColor: '#34d399',
  },
  {
    index: '02',
    type: 'Certificate of Completion',
    title: 'The 21st Century Skills Training',
    description:
      'Completed a 12-hour intensive course on Communication, Collaboration, Creativity, Critical Thinking & Budgeting, delivered by World Learning Algeria in partnership with HSBC, under the 21FREE Project.',
    image: '/course.jpg',
    accent: '#a78bfa',
    accentRgb: '167, 139, 250',
    badge: 'Certified',
    badgeColor: '#a78bfa',
  },
];

function ActivityCard({ activity, idx }: { activity: typeof activities[number]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
    >
      {/* Outer purple glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"
        style={{ boxShadow: '0 10px 40px -5px rgba(167, 139, 250, 0.4)' }}
      />

      <div
        className="relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ease-out"
        style={{
          background: '#1e1f36',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-video flex items-center justify-center bg-black/40 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
            style={{ background: `radial-gradient(circle at center, rgba(${activity.accentRgb}, 0.8) 0%, transparent 70%)` }}
          />
          <img
            src={activity.image}
            alt={activity.title}
            loading="lazy"
            className="w-full h-full object-contain relative z-10 block transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col gap-2">
          {/* Type badge */}
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: activity.accentRgb ? `rgba(${activity.accentRgb}, 1)` : '#a78bfa' }}
          >
            {activity.type}
          </span>

          <h3 className="text-lg font-bold text-slate-100 leading-snug">
            {activity.title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed">
            {activity.description}
          </p>

          {/* Badge */}
          <div className="mt-3 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: `rgba(${activity.accentRgb}, 0.12)`,
                color: `rgba(${activity.accentRgb}, 1)`,
                border: `1px solid rgba(${activity.accentRgb}, 0.25)`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: `rgba(${activity.accentRgb}, 1)` }} />
              {activity.badge}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Community() {
  return (
    <section id="activities" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span
              className="block h-px w-8 origin-left"
              style={{ background: 'linear-gradient(90deg, #a78bfa, #22d3ee)' }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#a78bfa' }}
            >
              Community
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
            Some of my
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Activities
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Hackathons and collaborative experiences that built my skills as a developer and problem-solver.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activities.map((activity, idx) => (
            <ActivityCard key={activity.index} activity={activity} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
