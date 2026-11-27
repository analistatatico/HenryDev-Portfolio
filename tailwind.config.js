/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // `surface` em vez de `base`: o nome `base` colidiria com a utilidade
        // de tamanho de fonte `text-base` do Tailwind.
        surface: {
          DEFAULT: '#080B0A',
          soft: '#101613',
          card: '#141C18',
        },
        brand: {
          DEFAULT: '#00E6A0',
          dark: '#00B77A',
          dim: 'rgba(0, 230, 160, 0.12)',
        },
        ink: {
          DEFAULT: '#F2F5F3',
          muted: '#9AA7A0',
        },
        edge: '#26342D',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '1180px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 18px 40px -24px rgba(0,0,0,0.9)',
        glow: '0 0 0 1px rgba(0,230,160,0.25), 0 18px 60px -22px rgba(0,230,160,0.35)',
      },
      backgroundImage: {
        'grid-tech':
          'linear-gradient(to right, rgba(38,52,45,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(38,52,45,0.55) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #00E6A0 0%, #00B77A 100%)',
      },
      backgroundSize: {
        'grid-tech': '56px 56px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.5' },
          '70%': { transform: 'scale(1.12)', opacity: '0' },
          '100%': { transform: 'scale(1.12)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1.05s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
