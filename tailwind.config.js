/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ManropeBold: ["Manrope-Bold", "sans-serif"],
        ManropeExtraBold: ["Manrope-ExtraBold", "sans-serif"],
        ManropeLight: ["Manrope-Light", "sans-serif"],
        ManropeExtraLight: ["Manrope-ExtraLight", "sans-serif"],
        ManropeMedium: ["Manrope-Medium", "sans-serif"],
        ManropeRegular: ["Manrope-Regular", "sans-serif"],
        ManropeSemiBold: ["Manrope-SemiBold", "sans-serif"],
      },
      colors: {
        BrandPrimary: "#005B96",
        BrandSecondary: "#22C55E",
        BrandGray900: "#080D14",
        BrandGray800: "#33354D",
        BrandGray700: "#565973",
        BrandGray600: "#9397AD",
        BrandGray500: "#B4B7C9",
        BrandGray400: "#D4D7E5",
        BrandGray300: "#E2E5F1",
        BrandGray200: "#EFF2FC",
        BrandGray100: "#f3f6ff",
        BrandgrayDeep: "#6F6C99",
        BrandHover: "#c1c4fa",
        BrandAuth: "#F9F9F9",
        BrandBg: "#f3effe",
        BrandBg1: "#F9EDFE",
        Brandbg: "#09070799",
      },
    },
  },
  plugins: [],
};
