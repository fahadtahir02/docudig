import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], //Added this as well 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //LINKING TAILWIND TO GLOBALS.CSS file where we imported from ui.shadcn.com
  theme: {
    container: {
      center : true,
      padding : "2rem",
      screens : {
        "2xl": "1400px",
      },
    },
    extend : {
      maxWidth : {
        "8xl" : "1408px"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary : {
          DEFAULT : "hsl(var(--primary))",
          foreground : "hsl(var(--primary))",
        },
        secondary : {
          DEFAULT : "hsl(var(--secondary))",
          foreground : "hsl(var(--secondary))",
        },
        destructive : {
          DEFAULT : "hsl(var(--destructive))",
          foreground : "hsl(var(--destructive))",
        },
        muted : {
          DEFAULT : "hsl(var(--muted))",
          foreground : "hsl(var(--muted))",
        },
        accent : {
          DEFAULT : "hsl(var(--accent))",
          foreground : "hsl(var(--accent))",
        },
        popover : {
          DEFAULT : "hsl(var(--popover))",
          foreground : "hsl(var(--popover))",
        },
        card : {
          DEFAULT : "hsl(var(--card))",
          foreground : "hsl(var(--card))",
        },
      },
      borderRadius : {
        lg : "var(--radius)",
        md : "calc(var(--radius) - 2px)",
        sm : "calc(var(--radius) -  4px)",
      }, 
      keyframes : { 
        'accordion-down':{
          from: { height : '0px'}, 
          to : {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up":{
          from: {height: "var(--radix-accordion-content-height)"}, 
          to : {height:'0px'}, //NUMBER not assignable to string
        },
      },
      animation : {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-up 0.2s ease-out"
      }
    }, 
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  //DONE LINKING 
};
export default config;
