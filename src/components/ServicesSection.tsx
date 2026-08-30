'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Rocket } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { services } = portfolioData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-6 h-6 text-[#38bdf8]" />;
      case 'server':
        return <Server className="w-6 h-6 text-[#38bdf8]" />;
      case 'database':
        return <Database className="w-6 h-6 text-[#38bdf8]" />;
      case 'rocket':
        return <Rocket className="w-6 h-6 text-[#38bdf8]" />;
      default:
        return <Code className="w-6 h-6 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          My <span className="cyan-gradient-text">Services</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          High-impact software engineering solutions tailored for modern digital web products
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="navy-glass-card navy-glass-card-hover p-8 rounded-2xl border border-slate-800/80 space-y-5"
          >
            <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center">
              {getServiceIcon(service.iconName)}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
              {service.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-900/80 border border-slate-800 text-slate-300 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
