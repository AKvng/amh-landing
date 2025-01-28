import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "370px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1B4B66",
        "primary-tint": "#639599",
        highlight: "#FF8C4B",
        error: "#B00020",
        accent: "#F4F4F4",
        dark: "#13101E",
        bright: "#FFFFFF",
        grey: "#F1F1F1",
        dgrey: "#B6B6B6",
        "white-opaque": "#DEDEDE",
        "light-text": "#B6B6B6",
        "high-emphasis": "#171520",
        "low-emphasis": "#626262",
      },
    },
  },
  plugins: [],
} satisfies Config;
