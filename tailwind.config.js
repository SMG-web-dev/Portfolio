/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        "timberwolf": "#B0BFA1",
        "sage": "#a3b18a",
        "fern-green": "#588157",
        "hunter-green": "#3a5a40",
        "brunswick-green": "#344e41",
      },
      boxShadow: {
        'green': '0 4px 14px -2px rgba(88, 129, 87, 0.15)',
        'green-lg': '0 10px 30px -4px rgba(88, 129, 87, 0.20)',
        'green-glow': '0 0 20px rgba(88, 129, 87, 0.15)',
        'card': '0 1px 3px rgba(52, 78, 65, 0.08), 0 4px 12px rgba(52, 78, 65, 0.05)',
        'card-hover': '0 4px 16px rgba(52, 78, 65, 0.12), 0 8px 32px rgba(52, 78, 65, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 25s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'ring-rotate': 'ringRotate 8s linear infinite',
        'counter': 'counter 1.5s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ringRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        '.animate-delay-300': { animationDelay: '300ms' },
        '.animate-delay-500': { animationDelay: '500ms' },
        '.animate-delay-700': { animationDelay: '700ms' },
        '.animate-delay-1000': { animationDelay: '1000ms' },
        '.animate-delay-2000': { animationDelay: '2000ms' },
        '.animate-delay-4000': { animationDelay: '4000ms' },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.15)',
        },
        // Safe area utilities
        '.pt-safe': { paddingTop: 'var(--safe-area-inset-top)' },
        '.pr-safe': { paddingRight: 'var(--safe-area-inset-right)' },
        '.pb-safe': { paddingBottom: 'var(--safe-area-inset-bottom)' },
        '.pl-safe': { paddingLeft: 'var(--safe-area-inset-left)' },
        '.p-safe': {
          paddingTop: 'var(--safe-area-inset-top)',
          paddingRight: 'var(--safe-area-inset-right)',
          paddingBottom: 'var(--safe-area-inset-bottom)',
          paddingLeft: 'var(--safe-area-inset-left)',
        },
        '.h-screen-safe': {
          height: 'calc(100vh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom))',
        },
        '.min-h-screen-safe': {
          minHeight: 'calc(100vh - var(--safe-area-inset-top) - var(--safe-area-inset-bottom))',
        },
        // iOS specific utilities
        '.pb-safe-ios': {
          paddingBottom: 'max(1rem, var(--safe-area-inset-bottom))',
        },
        '.bottom-safe': {
          bottom: 'max(1rem, var(--safe-area-inset-bottom))',
        },
        '.right-safe': {
          right: 'max(1rem, var(--safe-area-inset-right))',
        },
        '.left-safe': {
          left: 'max(1rem, var(--safe-area-inset-left))',
        },
      };

      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};