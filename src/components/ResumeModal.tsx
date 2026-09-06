'use client';

import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResumeModalProps {
  onClose: () => void;
  pdfPath?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  onClose,
  pdfPath = '/assets/Prashant_Telore_Resume.pdf',
}) => {
  const [hasError, setHasError] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Prashant_Telore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080c14]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-5xl h-[88vh] flex flex-col navy-glass-card rounded-2xl border border-slate-800 shadow-2xl overflow-hidden p-4 sm:p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 shrink-0">
          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
            <FileText className="w-5 h-5 text-[#38bdf8]" />
            <span>Prashant Telore — Resume PDF</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenNewTab}
              className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-4 py-1.5 cyan-btn text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-cyan-glow"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 relative">
          {!hasError ? (
            <object
              data={`${pdfPath}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full rounded-xl"
              onError={() => setHasError(true)}
            >
              <iframe
                src={`${pdfPath}#toolbar=1&navpanes=0`}
                className="w-full h-full rounded-xl border-none"
                title="Prashant Telore Resume PDF Viewer"
                onError={() => setHasError(true)}
              />
            </object>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#38bdf8]" />
              </div>
              <h3 className="text-xl font-bold text-white">Resume PDF Preview</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Displaying PDF at <code className="text-[#38bdf8] font-mono">{pdfPath}</code>.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleOpenNewTab}
                  className="px-4 py-2 cyan-btn text-xs font-semibold rounded-lg flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> View PDF Direct
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
