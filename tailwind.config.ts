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
    },
  },
  plugins: [],
} satisfies Config;
