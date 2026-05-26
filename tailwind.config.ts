import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          0: '#05070d',
          50: '#0a0d16',
          100: '#10141f',
          200: '#171c2a',
          300: '#1f2638',
          400: '#2a3247',
          500: '#3a435c',
          600: '#525c79',
          700: '#7b8398',
          800: '#a8aebd',
          900: '#dde0e8',
          950: '#f3f4f7',
        },
        accent: {
          DEFAULT: '#7cf6c8',
          glow: '#22d3a4',
          dim: '#0f3d31',
        },
        signal: {
          violet: '#9b8cff',
          pink: '#f472b6',
          amber: '#fbbf24',
        },
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(124,246,200,0.08), transparent 60%), radial-gradient(ellipse at bottom right, rgba(155,140,255,0.08), transparent 60%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 6s linear infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.8s ease-out both',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2%, -2%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
