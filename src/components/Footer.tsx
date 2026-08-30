'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { developer } = portfolioData;

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80 text-xs text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white font-sans">{developer.brandName}</span>
          <span>© 2026 Prashant Developer. All rights reserved.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </button>
          <a
            href={developer.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={developer.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
