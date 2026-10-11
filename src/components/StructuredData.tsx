import React from 'react';

export const StructuredData: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://prashanttelore.vercel.app/#person',
    name: 'Prashant Telore',
    givenName: 'Prashant',
    familyName: 'Telore',
    jobTitle: 'Full Stack Web Developer & Software Engineer',
    description:
      'Full Stack Web Developer and Software Engineer based in Pune, India, specializing in React, Next.js, Node.js, Express, MongoDB, JavaScript, Python, and Java.',
    url: 'https://prashanttelore.vercel.app',
    image: 'https://prashanttelore.vercel.app/assets/prashant-avatar.png',
    email: 'prashanttelore0@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India',
    },
    sameAs: [
      'https://github.com/prashanttelore',
      'https://www.linkedin.com/in/prashant-telore-523407375',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'PHP',
      'MySQL',
      'REST APIs',
      'Full Stack Web Development',
      'Cloud Deployment',
      'Vercel',
      'Render',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://prashanttelore.vercel.app/#website',
    name: 'Prashant Telore Developer Portfolio',
    url: 'https://prashanttelore.vercel.app',
    description:
      'Official developer portfolio of Prashant Telore - Full Stack Web Developer & Software Engineer.',
    author: {
      '@id': 'https://prashanttelore.vercel.app/#person',
    },
    inLanguage: 'en-US',
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://prashanttelore.vercel.app/#profilepage',
    url: 'https://prashanttelore.vercel.app',
    name: 'Prashant Telore - Full Stack Developer Profile',
    mainEntity: {
      '@id': 'https://prashanttelore.vercel.app/#person',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ShopG – AI-Powered Grocery E-Commerce Platform',
    operatingSystem: 'Web Browser',
    applicationCategory: 'BusinessApplication',
    description:
      'Full-stack e-commerce grocery platform with ReactJS frontend, Node.js/Express.js backend, Google Gemini AI recipe converter, and automatic zero-stock substitute engine.',
    author: {
      '@id': 'https://prashanttelore.vercel.app/#person',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
};
