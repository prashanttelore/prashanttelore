'use client';

import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Layers, Github, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Backend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Radial Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-slate-800 text-[#38bdf8] text-xs font-mono rounded-full mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Engineering Portfolio
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans">
          Featured <span className="cyan-gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Full-stack web applications, OTT streaming platforms, and Android emergency SOS systems
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
                isActive
                  ? 'cyan-btn shadow-cyan-glow'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid Display */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="navy-glass-card navy-glass-card-hover rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/90 backdrop-blur-md text-[#38bdf8] text-xs font-semibold rounded-md border border-slate-800">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#38bdf8] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#38bdf8] font-mono">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Bullets Highlight */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Engineering Highlights:</div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.architecture.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0 mt-1.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono bg-slate-900/90 text-slate-300 rounded-md border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/60 mt-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-[#38bdf8] border border-slate-800 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Layers className="w-4 h-4" /> Full Details
                </motion.button>

                <div className="flex items-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white rounded-lg flex items-center gap-1.5 transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-3.5 h-3.5 text-[#38bdf8]" /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 cyan-btn text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-cyan-glow"
                    title="Live Demo / Repo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
