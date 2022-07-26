const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#13251F",
        brand: '#FFEEC6',
        secondary: '#EEEEEE',
        gold: '#B58E3E',
        bluely: '#0036CC'
      },
      fontFamily: {
        sans: ['Constantia', 'sans-serif'],
        serif: ['Constantia', 'serif'],
        'constantia': ['Constantia'],
        'roboto': ['Roboto'],

      },

      backgroundImage: {
        'header_1': "linear-gradient(to bottom, #0D294499, #0D294499, #0D294499), url('/static/images/header/img_1.png')",
        'header_2': "linear-gradient(to bottom, #0D294499, #0D294499, #0D294499), url('/static/images/header/img_2.png')",
        'header_3': "linear-gradient(to bottom, #0D294499, #0D294499, #0D294499), url('/static/images/header/img_3.png')",

        'body': "linear-gradient(to bottom, #E5E5E599, #E5E5E599, #E5E5E599), url('/static/images/body.png')",
        
        'bar': "linear-gradient(to bottom, #0D294499, #0D294499, #0D294499), url('/static/images/service/bar.jpg')",
        'test': "linear-gradient(to bottom, #0D294499, #0D294499, #0D294499), url('/static/images/testimonial.png')",



       },
      boxShadow: {
        'poster1': '30px 30px #a3822a',
        'poster2': '30px 30px #4e5b31'
      },
    }
  },
  corePlugins: {
    container: false // custom container class defined in styles/_compounds.scss
  }
};
