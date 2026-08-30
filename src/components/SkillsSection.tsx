'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Title */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          Skills & <span className="cyan-gradient-text">Competencies</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Technologies and tools I use to build scalable web applications
        </p>
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="navy-glass-card navy-glass-card-hover p-8 rounded-2xl border border-slate-800/80 space-y-6"
          >
            <h3 className="text-xl font-bold text-white border-b border-slate-800/80 pb-4">
              {group.category}
            </h3>

            <div className="space-y-4">
              {group.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-[#38bdf8] font-mono">{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/60">
                    <div
                      className="h-full bg-gradient-to-r from-[#38bdf8] to-[#a855f7] rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
