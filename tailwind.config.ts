import colors from "tailwindcss/colors"
import type { Config } from "tailwindcss/types/config"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        "3xs": "4px",
        "2xs": "6px",
        xs: "8px",
        DEFAULT: "8px",
        sm: "12px",
        md: "12px",
        lg: "16px",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
      },

      screens: {
        "3xs": "320px",
        "2xs": "384px",
        xs: "512px",
        sm: "640px",
        md: "768px",
        "2md": "896px",
        lg: "1024px",
        "2lg": "1152px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.indigo,
        danger: colors.red,
        warning: colors.amber,
        info: colors.blue,
        success: colors.teal,
        gray: colors.slate,
      },
    },
  },

  plugins: [],
} satisfies Config
