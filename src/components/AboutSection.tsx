'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Atom, Wrench, Database, Code, Rocket } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { developer, featureCards } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom':
        return <Atom className="w-6 h-6 text-[#38bdf8]" />;
      case 'wrench':
        return <Wrench className="w-6 h-6 text-[#38bdf8]" />;
      case 'database':
        return <Database className="w-6 h-6 text-[#38bdf8]" />;
      case 'code':
        return <Code className="w-6 h-6 text-[#38bdf8]" />;
      case 'rocket':
        return <Rocket className="w-6 h-6 text-[#38bdf8]" />;
      default:
        return <Code className="w-6 h-6 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          About <span className="cyan-gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Crafting digital experiences with passion and precision
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Full Stack Developer Bio */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {developer.aboutBio1}
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              {developer.aboutBio2}
            </p>
          </div>

          {/* Quote Block */}
          <div className="pt-2">
            <p className="text-xs sm:text-sm text-slate-400 italic border-l-2 border-[#38bdf8] pl-4 py-1">
              "{developer.quote}"
            </p>
          </div>
        </div>

        {/* Right Column: Feature Cards Grid (Frontend, Backend, Database, Languages, DevOps) */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className={`navy-glass-card navy-glass-card-hover p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-4 ${
                  idx === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center">
                  {getIcon(card.icon)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-400">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
