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
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
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
      };

      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};