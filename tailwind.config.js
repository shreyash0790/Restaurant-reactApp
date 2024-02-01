/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, addComponents }) {
      const newUtilities = {
        '.animate-slide-down': {
          animation: 'slide-down 300ms ease-out forwards',
        },
      };

      const newComponents = {
        '@keyframes slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-3rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
      addComponents(newComponents);
    }


  ],
}

