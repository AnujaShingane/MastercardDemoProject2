/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f172a",    // slategrey base
          surface: "#ffffff",
          tint: "#fff7ed",
          text: "#0f172a",
          accent: "#ff6a00"      // warm accent
        }
      },
      boxShadow: {
        glow: "0 10px 30px rgba(255,106,0,.18)",
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pop: { "0%": { transform: "scale(.97)" }, "100%": { transform: "scale(1)" } }
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out forwards",
        pop: "pop .2s ease-out forwards"
      }
    },
  },
  plugins: [],
}
