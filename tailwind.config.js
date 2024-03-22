/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      borderRadius:{
        '4xl':'2rem'
      },
      keyframes:{
        'vertical':{
          '0% , 100%':{transform: 'translatey(15px)'},
          '50%':{transform:'translatey(0px)'},
        },
        'color':{
          '0%, 100%':{color:'white'},
          '50%':{color:'#BB86FC'},
        },
      },
      animation:{
        'vertical':'vertical 3s ease-in-out infinite',
        'color':'color 2s ease-in-out infinite',
      },
      colors:{
        'background':'#121212',
        'primary':'#BB86FC',
        'surface':'#424242'
      },
      height:{
        '128': '32rem'
      },
      width:{
        '128': '32rem',
        '60vw':'60vw'
      },
      boxShadow:{
        '4side' : '0px 0px 15px  rgba(0, 0, 0, 0.4)'
      },
    },
  },
  plugins: [],
}

