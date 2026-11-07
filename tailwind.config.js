/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030508',
          900: '#07090e',
          850: '#0a0d14',
          800: '#0f1420',
          700: '#151d2c',
          600: '#1d273b',
        },
        brand: {
          cyan: '#06b6d4',
          sky: '#38bdf8',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)',
        'subtle-grid': 'radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-very-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
