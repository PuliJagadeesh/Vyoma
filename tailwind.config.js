module.exports = {
  content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        primary: '#0b0d17',   // Almost-black background
        accent:  '#1f7ae0',   // Deep electric blue
        light:   '#e4e4e4',   // Light gray for text
        muted:   '#747d8c',   // Sub‑text, borders
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],  // Bold, modern
        body:    ['IBM Plex Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
