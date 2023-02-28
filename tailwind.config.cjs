const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Primary
      blue_marine: "hsl(213, 96%, 18%)",
      blue_purplish: "hsl(243, 100%, 62%)",
      blue_pastel: "hsl(228, 100%, 84%)",
      blue_light: "hsl(206, 94%, 87%)",
      red_strawberry: "hsl(354, 84%, 57%)",
      // Neutral
      gray_cool : "hsl(231, 11%, 63%)",
      gray_light : "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1024px",
      desktop: "1440px",
    },
    fontFamily: {
      sans: [
        "Ubuntu",
        ...defaultTheme.fontFamily.sans
      ],
    },
    extend: {
      fontSize: {
        standard: "16px",
      },
    },
  },
  plugins: [],
}
