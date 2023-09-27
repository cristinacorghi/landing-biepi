/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'black' : '#010101',
      'white' : '#FFFFFF',
      'gold' : '#948A74'
    },
    fontFamily: {
      bold: ['"Raleway-Bold"'],
      extralight: ['"Raleway-ExtraLight"'],
      regular: ['"Raleway-Regular"']
    },
  },
  plugins: [],
}

