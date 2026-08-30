import React from 'react';
import type { Metadata } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Prashant Telore- Full Stack Web Developer',
  description: 'Portfolio of Prashant, a Full Stack Web Developer specializing in React, Next.js, Node.js, Express, MongoDB, JavaScript, Python, and Java.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Python', 'Java', 'Portfolio'],
  authors: [{ name: 'Prashant Developer' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080c14] text-slate-100 font-sans antialiased min-h-screen selection:bg-[#38bdf8] selection:text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
