import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        text: {
          base: '#111111',
          muted: '#666666',
        },
        background: {
          base: '#fbf8fd',
          surface: '#f8f8f8',
        },
        purple: {
          50: 'var(--color-purple-50)',
          100: 'var(--color-purple-100)',
          200: 'var(--color-purple-200)',
          300: 'var(--color-purple-300)',
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
          600: 'var(--color-purple-600)',
          700: 'var(--color-purple-700)',
          800: 'var(--color-purple-800)',
          900: 'var(--color-purple-900)',
        },
        accent: {
          blue: '#3366ff',
        },
      },
      fontSize: {
        // Typography scale
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // text-4xl
        'h1-md': ['3rem', { lineHeight: '1', fontWeight: '700' }], // md:text-5xl
        h2: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // text-2xl
        'h2-md': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // md:text-3xl
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // text-xl
        base: ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }], // text-base
        meta: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // text-sm
      },
      spacing: {
        'section': '4.5rem',
        'container': '1.5rem',
      },
      maxWidth: {
        '3xl': '48rem',
      },
    },
  },
  plugins: [],
};

export default config;
