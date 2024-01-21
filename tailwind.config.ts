import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/redux/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: '#root',
  theme: {
    extend: {
      colors: {
        green: "var(--green-color)",
        'success-text-color': "var(--success-text-color)",
        blue: "var(--primary-color)",
        "black-text": "var(--text-color)",
        "gray-text": "var(--second-text-color)",
        "light-gray-text": "var(--light-gray-text)",
        "primary-color": "var(--primary-color)",
        "second-text-color": "var(--second-text-color)",
        "text-color": "var(--text-color)",
      },
      fontFamily: {
        "h-3": "var(--h-3-font-family)",
        link: "var(--link-font-family)",
        small: "var(--small-font-family)",
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
