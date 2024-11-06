/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['fonce'],
        pp: ['pp'],
        text: ['text'],
        head: ['head'],
        poppins: ['poppins']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: '320px',    // Extra small screens
        sm: '460px',    // Small screens
        md: '768px',    // Medium screens
        lg: '1024px',   // Large screens
        xl: '1280px',   // Extra large screens
        '2xl': '1536px' // 2X extra large screens
      },
    },
  },
  plugins: [],
};
