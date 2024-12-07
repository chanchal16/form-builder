import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",      
        gray:{
          '00': 'rgb(255, 255, 255)',
          '25': 'rgb(248, 249, 251)',
          '50': 'rgb(250, 251, 252)',
          '100': 'rgb(246, 248, 250)',
          '200': 'rgb(225, 228, 232)',
          '300': 'rgb(209, 213, 218)',
          '400': 'rgb(149, 157, 165)',
          '500': 'rgb(106, 115, 125)',
          '600': 'rgb(88, 96, 105)',
          '700': 'rgb(68, 77, 86)',
          '800': 'rgb(55, 57, 63)',
          '900': '(36, 41, 46)',
          '1k': 'rgb(13, 13, 13)',
         },
         green:{
          '300': 'rgb(0, 170, 69)',
          '400': 'rgb(33, 150, 83)',
          '500': 'rgb(30, 135, 75)'
         }
               
      },
      boxShadow: {
        '5': '0px 1px 1px -0.5px rgba(0, 0, 0, .03), 0px 3px 3px -1.5px rgba(0, 0, 0, .03)',
        '10': '0px 3px 3px -1.5px rgba(0, 0, 0, .03), 0px 6px 6px -3px rgba(0, 0, 0, .03), 0px 12px 12px -6px rgba(0, 0, 0, .03)',
        '15': '0px 3px 3px -1.5px rgba(0, 0, 0, .08), 0px 6px 6px -3px rgba(0, 0, 0, .08), 0px 12px 12px -6px rgba(0, 0, 0, .08), 0px 24px 24px -12px rgba(0, 0, 0, .08)',
        'focus': '0px 0px 0px 4px #e1e4e880',
      },
    },
  },
  plugins: [],
} satisfies Config;
