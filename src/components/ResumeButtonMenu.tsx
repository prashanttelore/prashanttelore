'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FileText, Eye, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeButtonMenuProps {
  onViewResume: () => void;
  className?: string;
  variant?: 'cyan' | 'outline' | 'slate';
}

export const ResumeButtonMenu: React.FC<ResumeButtonMenuProps> = ({
  onViewResume,
  className = '',
  variant = 'cyan',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = () => {
    setIsOpen(false);
    const link = document.createElement('a');
    link.href = '/assets/Prashant_Telore_Resume.pdf';
    link.download = 'Prashant_Telore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setIsOpen(false);
    onViewResume();
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'cyan':
        return 'cyan-btn text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-cyan-glow';
      case 'outline':
        return 'px-5 py-3 text-sm font-semibold rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 hover:border-[#38bdf8] hover:text-white flex items-center gap-2 backdrop-blur-md transition-all';
      case 'slate':
        return 'px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] flex items-center gap-1.5 transition-colors';
      default:
        return 'cyan-btn text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5';
    }
  };

  return (
    <div className={`relative inline-block ${className}`} ref={menuRef}>
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
      >
        <FileText className="w-4 h-4 text-[#38bdf8]" />
        <span>Resume</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-48 bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50 p-1.5 space-y-1 backdrop-blur-xl"
          >
            <button
              onClick={handleView}
              className="w-full px-3 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg flex items-center gap-2.5 transition-colors text-left"
            >
              <Eye className="w-4 h-4 text-[#38bdf8]" />
              <span>View Resume</span>
            </button>
            <button
              onClick={handleDownload}
              className="w-full px-3 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg flex items-center gap-2.5 transition-colors text-left"
            >
              <Download className="w-4 h-4 text-[#38bdf8]" />
              <span>Download PDF</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
