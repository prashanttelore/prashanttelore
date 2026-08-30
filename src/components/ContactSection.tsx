'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Copy, Github, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { developer } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          Contact <span className="cyan-gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Have a project in mind or want to discuss opportunities? Send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-8 navy-glass-card p-8 rounded-2xl border border-slate-800/80">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Open for full-time software developer opportunities, freelance projects, and technical advisory roles.
            </p>
          </div>

          <div className="space-y-4">
            {/* Direct Email Card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-[#38bdf8] truncate">
                  {developer.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-md flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-3 text-slate-300 text-sm p-3">
              <MapPin className="w-4 h-4 text-[#38bdf8]" />
              <span>{developer.location}</span>
            </div>
          </div>

          {/* Social Channels (GitHub & LinkedIn only) */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Social Channels
            </div>
            <div className="flex items-center gap-3">
              <a
                href={developer.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:border-[#38bdf8] transition-colors"
              >
                <Github className="w-4 h-4 text-[#38bdf8]" />
                <span>GitHub</span>
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:border-[#38bdf8] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 navy-glass-card p-8 rounded-2xl border border-slate-800/80">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-sky-950/60 border border-sky-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#38bdf8]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thank you for reaching out. Prashant will respond to your inquiry shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#38bdf8]" /> Send Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role, project scope, or inquiry..."
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 cyan-btn font-semibold text-sm rounded-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
