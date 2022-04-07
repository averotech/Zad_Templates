module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "20px": "20px",
      'lg': '0.5rem',
      'full':' 9999px',
    },
    extend: {
      padding: {
        "74px": "74px",
        

      },
      spacing: {
        "72px": "72px",
      },
      colors: {
        'login': '#201A3C',
        'gold':'#CC9933',
        
      },
      fontFamily: {
        'shamelBold': 'shamelFamilyBold',
        'shamelnormal':'shamelFamilyNormal'
      },
      screens: {
        'laptop': '1280px',
        'mobile':'600px',
        // => @media (min-width: 1024px) { ... }
      }
    },
  },
  plugins: [],
};
