/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sansSerif: ['Source Sans Pro', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
        handwriting: ['Kalam', 'cursive']
      },
      backgroundImage: {
          circle: 'url("/images/circle.svg")',
      },
      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        colored: '0px 7px 16px rgba(127, 91, 220, 0.002)',
        coloredHover: '0px 16px 25px rgba(127, 91, 220, 0.3)',
        tableRow: '0px 0px 6px rgba(0, 0, 0, 0.16)',
      },
      gridTemplateColumns: {
        invoiceTable: '100px 100px 60px 1fr 116px 32px 32px',
        invoiceTableMobile: '1fr 90px',
      },
      colors: {
        lavenderIndigo: '#8657e1',
        daisyBush: '#4714a5',
        goldenFizz: '#feff40',
        whisper: '#f9f4f9',
        pastelPurple: '#b2a1bb',
        purple: '#7209b7',
        robinEggBlue: '#00e9c0',
        blueGem: '#3813a0',
        caribbeanGreen: '#06d6a0',
        scarlet: '#f72f45',
        monsoon: '#777878',
        silver: '#c0c0c0',
        gallery: '#efeaf2',
        fog: '#decaec',
      },
      zIndex: {
        navBarToggle: 91,
        navBar: 90,
      }
    }
  },
  plugins: []
};
