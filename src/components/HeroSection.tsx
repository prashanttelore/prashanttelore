'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  const { developer } = portfolioData;

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Background Radial Glow Blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Title */}
        <div className="lg:col-span-7 space-y-6 z-10">
          {/* Tagline */}
          <div className="text-sm sm:text-base font-semibold text-[#38bdf8] tracking-wide">
            {developer.welcomeMessage}
          </div>

          {/* Title: Hi, I'm Prashant */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white font-sans leading-none">
            Hi, I'm{' '}
            <span className="cyan-gradient-text">
              {developer.firstName}
            </span>
          </h1>

          {/* Subtitle Role */}
          <h2 className="text-xl sm:text-2xl font-medium text-slate-300">
            {developer.title}
          </h2>

          {/* Bio Description */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {developer.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 text-sm font-semibold rounded-lg cyan-btn flex items-center gap-2"
            >
              <span>View My Work</span>
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 hover:border-[#38bdf8] hover:text-white transition-all backdrop-blur-md"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social Icons (GitHub & LinkedIn only) */}
          <div className="flex items-center gap-3 pt-4">
            <a
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-cyan-glow transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-cyan-glow transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Glowing Neon Portrait Card with User's Photo */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative w-full max-w-md">
            {/* Glowing Gradient Frame Container */}
            <div className="aura-border overflow-hidden">
              <div className="rounded-[1.3rem] overflow-hidden bg-[#0f172a] aspect-square relative">
                <img
                  src={developer.avatar}
                  alt={developer.firstName}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
