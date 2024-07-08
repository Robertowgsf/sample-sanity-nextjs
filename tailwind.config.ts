import type { Config } from "tailwindcss";

export const colors = {
  "primary-surface": "#FFFFFF",
  "primary-base": "#333333",
  "primary-ui": "#BA1E1C",

  "secondary-surface": "#951514",
  "secondary-base": "#E1E1E1",
  "secondary-ui": "#FFFFFF",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
export default config;
