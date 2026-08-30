'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const { developer } = portfolioData;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 text-xs text-slate-400"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white font-sans">{developer.brandName}</span>
          <span>© 2026 Prashant Telore. All rights reserved.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, color: '#38bdf8' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05, color: '#38bdf8' }}
            href={developer.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: '#38bdf8' }}
            href={developer.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};
