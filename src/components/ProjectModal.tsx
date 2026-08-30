'use client';

import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Cpu, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080c14]/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto navy-glass-card rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Header Title */}
        <div className="space-y-1 pr-10">
          <div className="inline-block px-3 py-1 bg-slate-900 text-[#38bdf8] text-xs font-semibold rounded-md border border-slate-800 mb-2">
            {project.category}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{project.title}</h2>
          <p className="text-sm text-[#38bdf8] font-mono">{project.subtitle}</p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Full Description */}
        <div className="space-y-3 bg-slate-900/50 p-5 rounded-xl border border-slate-800/80">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#38bdf8]" /> Full Project Specification
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-sans">
            {project.longDescription}
          </p>
        </div>

        {/* Architecture Specs & Key Modules */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#38bdf8]" /> Key System Features & Engineering Highlights
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 text-xs text-slate-300">
            {project.architecture.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 bg-slate-900/70 p-3 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="leading-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Impact & Key Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-sky-950/40 border border-sky-800/60 text-[#38bdf8] text-xs font-semibold rounded-lg">
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <Github className="w-4 h-4" /> View Source
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 cyan-btn text-sm font-semibold flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" /> Live Preview
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};
