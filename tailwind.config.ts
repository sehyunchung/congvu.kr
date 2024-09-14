import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, 1fr)',
      },
      gridTemplateRows: {
        '24': 'repeat(24, 1fr)',
      },
    },
  },
  plugins: [],
} satisfies Config;
