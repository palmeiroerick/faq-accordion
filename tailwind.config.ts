import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    screens: {
      sm: "375px",
      lg: "768px",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightPink: "hsl(275, 100%, 97%)",
      grayishPurple: "hsl(292, 16%, 49%)",
      darkPurple: "hsl(292, 42%, 14%)",
    },
    backgroundImage: {
      mobile: "url('/background-pattern-mobile.svg')",
      desktop: "url('/background-pattern-desktop.svg')",
    },
  },
};

export default config;
