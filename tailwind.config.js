/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    enabled: true,
  },
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('assets/Hero.jpg')",
      },
    },
  },

  variants: {
    // all the following default to ['responsive']
    imageRendering: ["responsive"],
  },
  plugins: [
    require("tailwindcss-image-rendering"), // no options to configure
  ],
};
