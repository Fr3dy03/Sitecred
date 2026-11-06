import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        site: {
          background: '#F7F7F4',
          surface: '#FFFFFF',
          secondary: '#F0F2F1',
          text: '#20272C',
          muted: '#69747B',
          blue: '#315F82',
          blueSoft: '#EAF1F5',
          amber: '#D99A37',
          amberSoft: '#FFF4DF',
          green: '#34785D',
          red: '#B94742',
          border: '#E3E7E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        subtle: '0 12px 30px rgba(32,39,44,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
