import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#C4C4C4",
        yellow: "#F9BF29",
      },
      backgroundColor: {
        hero: "#3B5D50",
        yellow: "#F9BF29",
      },
    },
  },
  plugins: [],
};
export default config;
