'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Navigation: ['About', 'Projects', 'Skills', 'Contact'],
};

const socialItems = [
  {
    label: 'GitHub',
    href: 'https://github.com/nadjib-kn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:nadjibde99@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FIX: removed nested containerVariants — each element animates independently
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-1"
          >
            <h3 className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Nadjib Kennouche
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Full-stack developer crafting beautiful, performant digital experiences.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-violet-500/20 border border-white/8 hover:border-violet-500/40 flex items-center justify-center text-slate-400 hover:text-violet-300 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links], i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.08 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-slate-300 text-sm">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-500 hover:text-violet-400 transition-colors text-sm hover:translate-x-0.5 inline-block transition-transform duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-slate-300 text-sm">Get In Touch</h4>
            <p className="text-slate-500 text-sm">
              Open to freelance projects and full-time roles worldwide.
            </p>
            <a
              href="#contact"
              className="shimmer-btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-500 text-white rounded-lg text-xs font-semibold hover:from-violet-500 hover:to-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
            >
              Start a Conversation
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {currentYear} Nadjib Kennouche. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Crafted with{' '}
            <span className="text-violet-400">♥</span> using React, Next.js &amp; Framer Motion
          </motion.p>

          {/* Back to top */}
          <motion.button
            id="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 hover:border-violet-500/30 text-xs font-medium text-slate-400 hover:text-violet-300 transition-all duration-300"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
