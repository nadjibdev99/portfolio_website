'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isUp = focused || hasValue;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={isUp ? placeholder : ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/5 border text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 text-sm ${
          focused
            ? 'border-violet-500 shadow-[0_0_0_3px_rgba(124,58,237,0.15)]'
            : 'border-white/10 hover:border-white/20'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
          isUp
            ? 'top-2 text-xs text-violet-400'
            : 'top-4 text-sm text-slate-500'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const isUp = focused || hasValue;

  return (
    <div className="relative">
      <textarea
        id={id}
        required={required}
        rows={5}
        value={value}
        placeholder={isUp ? 'Tell me about your project or opportunity...' : ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl bg-white/5 border text-slate-100 placeholder-slate-600 focus:outline-none transition-all duration-300 text-sm resize-none ${
          focused
            ? 'border-violet-500 shadow-[0_0_0_3px_rgba(124,58,237,0.15)]'
            : 'border-white/10 hover:border-white/20'
        }`}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
          isUp
            ? 'top-2 text-xs text-violet-400'
            : 'top-4 text-sm text-slate-500'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

// SVG social icons
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:alex@example.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('alex@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-badge mb-4 inline-flex">Contact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 mt-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind? I&apos;m always interested in hearing about new challenges
            and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <FloatingInput
              id="contact-name"
              label="Your Name"
              value={formData.name}
              onChange={(v) => setFormData({ ...formData, name: v })}
              required
              placeholder="John Doe"
            />
            <FloatingInput
              id="contact-email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              required
              placeholder="john@example.com"
            />
            <FloatingTextarea
              id="contact-message"
              label="Message"
              value={formData.message}
              onChange={(v) => setFormData({ ...formData, message: v })}
              required
            />

            <motion.button
              type="submit"
              id="contact-submit"
              disabled={submitted}
              whileHover={!submitted ? { scale: 1.02, y: -1 } : {}}
              whileTap={!submitted ? { scale: 0.98 } : {}}
              className={`shimmer-btn w-full px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                submitted
                  ? 'bg-green-600/80 cursor-not-allowed'
                  : 'bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 hover:shadow-xl hover:shadow-violet-500/40'
              }`}
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Direct contact */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-100">Direct Contact</h3>
              <div className="space-y-3">
                {[
                  { label: 'Email', value: 'alex@example.com', icon: '✉' },
                  { label: 'Phone', value: '+1 (555) 123-4567', icon: '📱' },
                  { label: 'Location', value: 'San Francisco, CA', icon: '📍' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <span className="text-base w-5 text-center">{item.icon}</span>
                    <span className="text-slate-500 w-16 flex-shrink-0">{item.label}</span>
                    <span className="text-slate-300">{item.value}</span>
                  </div>
                ))}
              </div>
              {/* Copy email button */}
              <button
                id="copy-email-btn"
                onClick={copyEmail}
                className="flex items-center gap-2 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors mt-2"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {copied ? 'Copied!' : 'Copy email address'}
              </button>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/40 hover:border-violet-500/40 transition-all duration-300 group"
                  >
                    <span className="text-slate-400 group-hover:text-violet-400 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors font-medium">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div
              className="glass-card rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08))' }}
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100 text-sm">Available for new projects</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Open to freelance work and full-time opportunities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
