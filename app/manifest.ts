import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prashant Telore - Full Stack Web Developer & Software Engineer',
    short_name: 'PrashantDev',
    description:
      'Developer portfolio of Prashant Telore - Full Stack Web Developer & Software Engineer in Pune, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#080c14',
    theme_color: '#080c14',
    icons: [
      {
        src: '/assets/prashant-avatar.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/prashant-avatar.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
