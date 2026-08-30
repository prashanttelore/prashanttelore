/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080c14',
          surface: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          cyan: '#38bdf8',
          cyanGlow: '#00d2ff',
          purple: '#a855f7',
          blue: '#3b82f6',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
        'purple-glow': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
        'aura-glow': '0 0 40px 5px rgba(56, 189, 248, 0.25), 0 0 80px 10px rgba(168, 85, 247, 0.15)',
        'card-hover': '0 10px 30px -10px rgba(56, 189, 248, 0.2)',
      },
      backgroundImage: {
        'gradient-cyan-blue': 'linear-[#38bdf8] to-[#3b82f6]',
        'gradient-cyan-purple': 'linear-to-r from-[#38bdf8] via-[#60a5fa] to-[#a855f7]',
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.12) 0%, rgba(8, 12, 20, 0) 70%)',
      },
    },
  },
  plugins: [],
}
