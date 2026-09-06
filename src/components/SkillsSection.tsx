'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Terminal, Cpu, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend & Languages', 'Backend & Databases', 'DevOps & Tools'];

  const allSkillsList = skills.flatMap((group) =>
    group.skills.map((s) => ({
      ...s,
      category: group.category,
    }))
  );

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkillsList
      : allSkillsList.filter((s) => s.category === selectedCategory);

  const getProficiencyLabel = (level: number) => {
    if (level >= 94) return 'Expert';
    if (level >= 90) return 'Advanced';
    return 'Proficient';
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Frontend & Languages':
        return <Code2 className="w-5 h-5 text-[#38bdf8]" />;
      case 'Backend & Databases':
        return <Database className="w-5 h-5 text-[#38bdf8]" />;
      case 'DevOps & Tools':
        return <Terminal className="w-5 h-5 text-[#38bdf8]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Radial Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-slate-800 text-[#38bdf8] text-xs font-mono rounded-full mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Technical Arsenal
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans">
          Skills & <span className="cyan-gradient-text">Competencies</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Modern frameworks, databases, languages, and cloud deployment pipelines I specialize in
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-3 mb-12"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'cyan-btn shadow-cyan-glow'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Interactive Grid View */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="navy-glass-card navy-glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-4 relative overflow-hidden group"
            >
              {/* Header Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-[#38bdf8] transition-colors">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 text-[10px] font-semibold bg-sky-950/60 border border-sky-800/60 text-[#38bdf8] rounded-md font-mono">
                    {getProficiencyLabel(skill.level)}
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Mastery Level</span>
                  <span className="text-[#38bdf8] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900/90 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#38bdf8] via-sky-400 to-[#a855f7] rounded-full shadow-cyan-glow"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Summary Group Cards Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800/60"
      >
        {skills.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="navy-glass-card p-6 rounded-2xl border border-slate-800/80 space-y-4"
          >
            <div className="flex items-center gap-2.5 text-white font-bold text-lg border-b border-slate-800/80 pb-3">
              {getCategoryIcon(group.category)}
              <span>{group.category}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((sk, skIdx) => (
                <span
                  key={skIdx}
                  className="px-3 py-1.5 bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 hover:border-[#38bdf8] hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>{sk.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
