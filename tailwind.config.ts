import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: "#f7f7fe",
      gradients: {
        softpurple: "hsl(236, 72%, 79%)",
        purple: "hsl(237, 63%, 64%)",
      },
      neutral: {
        vlgrayishblue: "hsl(240, 78%, 98%)",
        lgrayishblue: "hsl(234, 14%, 74%)",
        grayishblue: "hsl(233, 13%, 49%)",
        dgrayishblue: "hsl(232, 13%, 33%)",
      },
    },
    fontFamily: { sans: "Montserrat, sans-serif" },
    screens: { desktop: "1140px" },
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-45": "linear-gradient(45deg, #ffed4a, #ff3860)",
        "gradient-to-135":
          "linear-gradient( 135deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
        "gradient-to-135-white": "linear-gradient( 135deg, #ffff, #ffff)",
        // You can add more custom classes here
      }),
    },
  },
  plugins: [],
};
export default config;
