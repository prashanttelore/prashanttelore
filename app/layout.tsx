import React from 'react';
import type { Metadata } from 'next';
import '../src/index.css';
import { StructuredData } from '../src/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://prashanttelore.vercel.app'),
  title: 'Prashant Telore | Full Stack Developer & Software Engineer | Pune, India',
  description:
    'Prashant Telore is a Full Stack Web Developer & Software Engineer based in Pune, India. Specializing in React, Next.js, Node.js, Express, MongoDB, JavaScript, Python, and Java web applications.',
  keywords: [
    'Prashant Telore',
    'Prashant Telore developer',
    'Prashant Telore software developer',
    'Prashant Telore Pune',
    'Prashant Telore full stack developer',
    'Prashant Telore software engineer',
    'Full Stack Developer Pune',
    'Software Developer Pune',
    'Backend Developer Pune',
    'Software Developer India',
    'Full Stack Developer India',
    'React Developer Pune',
    'Next.js Developer Pune',
    'Node.js Developer Pune',
  ],
  authors: [{ name: 'Prashant Telore', url: 'https://prashanttelore.vercel.app' }],
  creator: 'Prashant Telore',
  publisher: 'Prashant Telore',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Prashant Telore | Full Stack Web Developer & Software Engineer',
    description:
      'Explore the software engineering portfolio of Prashant Telore. Featuring full-stack web applications, AI integrations, REST APIs, and modern UI designs.',
    url: 'https://prashanttelore.vercel.app',
    siteName: 'Prashant Telore Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/prashant-avatar.png',
        width: 800,
        height: 800,
        alt: 'Prashant Telore - Full Stack Web Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prashant Telore | Full Stack Web Developer & Software Engineer',
    description:
      'Explore the software engineering portfolio of Prashant Telore. Full stack web development, AI integrations, and REST APIs.',
    creator: '@prashanttelore',
    images: ['/assets/prashant-avatar.png'],
  },
  verification: {
    google: 'googlef4d6ed83535e52ae',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="bg-[#080c14] text-slate-100 font-sans antialiased min-h-screen selection:bg-[#38bdf8] selection:text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
