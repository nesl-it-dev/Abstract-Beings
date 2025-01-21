import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        lightGreen: "#A9E27D",
        teal: "#02AB89",
        darkGray: "#464C4A",
        peach: "#EBB076",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(10, 17, 14, 0.95) 0.09%, rgba(13, 28, 27, 0.95) 85.76%, rgba(14, 12, 7, 0.95) 101.74%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
