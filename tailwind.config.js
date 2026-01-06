/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "timberwolf": "#B0BFA1",
        "sage": "#a3b18a",
        "fern-green": "#588157",
        "hunter-green": "#3a5a40",
        "brunswick-green": "#344e41",
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
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
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
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