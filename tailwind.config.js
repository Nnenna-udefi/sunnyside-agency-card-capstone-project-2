module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      white: theme('colors.white'),
    }),
    extend: {
      backgroundImage: {
        header: "url('images/desktop-images/image-header.jpg')",
        graphic: "url('images/desktop-images/image-graphic-design.jpg')",
        photo: "url('images/desktop-images/image-photography.jpg')",
        header2: "url('images/mobile-images/image-header.jpg')",
        photo2: "url('images/mobile-images/image-graphic-design.jpg')",
   
      },
      fontFamily: {
        barlow: ['Barlow'],
        fraunces: ['Fraunces'],
      },
      colors: {
        primary: {
          gray: 'hsl(232, 10%, 55%)',
          graphic: 'hsl(167, 40%, 24%)',
          photo: 'hsl(198, 62%, 26%)',
          footer: 'hsl(167, 67%, 34%)',
          button1: 'hsl(51, 100%, 49%)',
          button2: 'hsl(7, 99%, 70%)',
          head: 'hsl(212, 27%, 19%)',
          dark: 'hsl(213, 9%, 39%)',
          darkgray: 'hsl(232, 10%, 55%)',
          white: 'hsl(0, 0%, 100%)'
        },
        },
        padding: {
            xx: '-48px',
      },
    },
  },
  variants: {
    extend: {
      textTransform: ['hover', 'focus'],
      fontFamily: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
