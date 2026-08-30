'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  const { developer } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated Background Radial Glow Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6 z-10"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="text-sm sm:text-base font-semibold text-[#38bdf8] tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
            {developer.welcomeMessage}
          </motion.div>

          {/* Title: Hi, I'm Prashant Telore */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white font-sans leading-none">
            Hi, I'm{' '}
            <span className="cyan-gradient-text">
              {developer.firstName} {developer.lastName}
            </span>
          </motion.h1>

          {/* Subtitle Role */}
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-medium text-slate-300">
            {developer.title}
          </motion.h2>

          {/* Bio Description */}
          <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {developer.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(56, 189, 248, 0.4)" }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreProjects}
              className="px-6 py-3 text-sm font-semibold rounded-lg cyan-btn flex items-center gap-2"
            >
              <span>View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, borderColor: "#38bdf8" }}
              whileTap={{ scale: 0.96 }}
              onClick={onContactClick}
              className="px-6 py-3 text-sm font-semibold rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white transition-all backdrop-blur-md"
            >
              <span>Get in Touch</span>
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-cyan-glow transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={developer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:shadow-cyan-glow transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Glowing Neon Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5 flex justify-center z-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-md"
          >
            {/* Glowing Gradient Frame Container */}
            <div className="aura-border overflow-hidden group">
              <div className="rounded-[1.3rem] overflow-hidden bg-[#0f172a] aspect-square relative">
                <img
                  src={developer.avatar}
                  alt={`${developer.firstName} ${developer.lastName} - Full Stack Web Developer`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
