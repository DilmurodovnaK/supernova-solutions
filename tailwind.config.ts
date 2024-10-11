import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
      '2xl': {'max': '1485px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }
 
      'lg': {'max': '950px'},
      // => @media (max-width: 1023px) { ... }
 
      'md': {'max': '785px'},
      // => @media (max-width: 767px) { ... }
'nb': {'min': '706px'},
      'sm': {'max': '654px'},
      // => @media (max-width: 639px) { ... }
      
      'ms' : {'max': '430px'},
      'mm': {'max': '385px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
