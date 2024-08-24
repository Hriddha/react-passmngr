/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "100":"36rem",
        "98" : "30rem",
        "122":"42rem",
        "130": "65rem",
        "135": "68rem",
      },
      height:{
        "110":"42rem",
        "100":"40rem",
        "115":"46rem",
        "120":"56rem",
        "130":"68rem",
        "134":"72rem",
        "84" : "24rem",
        "96" : "28rem",
        "98" : "38rem"
      },

      inset:{
        "82":"21rem",
        "150":"-430px",
        "280":"-620px"
      },

      margin:{
        "98":"30rem",
        "102":"48rem"
      },

      zIndex:{
        "1":"1"
      },

      keyframes:{
        horizontalAppearance:{
          '0%':{opacity:'0', left:'-430px'},
          '50%':{opacity:'0.5'},
          '100%':{opacity:'1', left:'112px'}
        },
        
        verticalAppearance:{
          '0%':{opacity:'0', bottom:'620px'},
          '50%':{opacity:'0.5'},
          '100%':{opacity:'1', bottom:'100px'}
          
        },
        verticalAppearance_ph:{
          '0%':{opacity:'0', bottom:'620px'},
          '50%':{opacity:'0.2'},
          '100%':{ opacity:0.58,bottom:'100px'}
          
        },

        animateOnScroll:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        },

        glow:{
          "0%, 100%":{boxShadow: "2px 3px rgb(255, 255, 255)"},
          "50%":{boxShadow: "4px 8px 2px rgb(230, 230, 230)"},

        }
      },
      
      animation:{
        horizontalAppearance: 'horizontalAppearance 1s ease-in-out forwards',
        verticalAppearance:'verticalAppearance 1s 0.5s ease-in-out forwards',
        verticalAppearance_ph:'verticalAppearance_ph 1s 0.5s ease-in-out forwards',
        animateOnScroll:'animateOnScroll 2s forwards animation-timeline: scroll()',
        glow:"glow 2s 1s ease-in-out infinite"
        
      }

    },
  },
  plugins: [],
}