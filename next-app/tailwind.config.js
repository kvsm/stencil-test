/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/stencil-library/src/components/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('@benjaminsinger/sds-tailwind-config').base
  ]
}
