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
    href: 'https://github.com/nadjibdev99/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:Nadjibdev99@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      setError('Please add your Web3Forms access key to .env.local');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('nadjibdev99@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-6">
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
              Contact
            </span>
            <motion.span
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block h-px w-8"
              style={{ background: 'linear-gradient(270deg, #a78bfa, #22d3ee)' }}
            />
          </div>

          <h2
            className="text-5xl md:text-6xl font-black text-slate-50 leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            Let&apos;s Work
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Together
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Have a project in mind? I&apos;m always interested in hearing about new challenges
            and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <form
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

            {error && (
              <p className="text-red-400 text-sm font-medium px-2">{error}</p>
            )}

            <motion.button
              type="submit"
              id="contact-submit"
              disabled={isSubmitting || submitted}
              whileHover={!(isSubmitting || submitted) ? { scale: 1.02, y: -1 } : {}}
              whileTap={!(isSubmitting || submitted) ? { scale: 0.98 } : {}}
              className={`shimmer-btn w-full px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                submitted
                  ? 'bg-green-600/80 cursor-not-allowed'
                  : isSubmitting
                  ? 'bg-violet-600/50 cursor-wait'
                  : 'bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 hover:shadow-xl hover:shadow-violet-500/40'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : submitted ? (
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
          </form>

          {/* Info panel */}
          <div className="space-y-5">
            {/* Direct contact */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-100">Direct Contact</h3>
              <div className="space-y-3">
                {[
                  { label: 'Email', value: 'nadjibdev99@gmail.com', icon: '✉' },
                  { label: 'Phone', value: '+213 669317294', icon: '📱' },
                  { label: 'Location', value: 'Algeria', icon: '📍' },
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
          </div>
        </div>
      </div>
    </section>
  );
}
