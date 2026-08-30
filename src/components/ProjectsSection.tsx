'use client';

import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Layers, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'AI / Cloud'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-12"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          Featured <span className="cyan-gradient-text">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          A showcase of recent software engineering projects, web applications, and system builds
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

      {/* Projects Grid with AnimatePresence */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="navy-glass-card navy-glass-card-hover rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Project Image Preview */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-[#38bdf8] text-xs font-semibold rounded-md border border-slate-800">
                    {project.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#38bdf8] font-mono">{project.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-mono bg-slate-900/90 text-slate-300 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/40 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-[#38bdf8] hover:text-sky-300 flex items-center gap-1.5 transition-colors py-2"
                >
                  <Layers className="w-3.5 h-3.5" /> Details
                </motion.button>

                <div className="flex items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#38bdf8] transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
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
