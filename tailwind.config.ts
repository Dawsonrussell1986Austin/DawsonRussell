import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F0EEE9",
          dark: "#E5DFD3",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#2A2A2A",
          card: "#222222",
        },
        text: {
          primary: "#0A0A0A",
          secondary: "#4A4A4A",
          muted: "#6B6B6B",
        },
        accent: {
          DEFAULT: "#C9A961",
          hover: "#B89850",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
