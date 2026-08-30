'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Atom, Wrench, Database, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          About <span className="cyan-gradient-text">Me</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Crafting digital experiences with passion and precision
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Full Stack Developer Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Full Stack Web Developer</h3>
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
        </motion.div>

        {/* Right Column: Feature Cards Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featureCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
