/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bpgArial: ["BPG Arial"],
        contractica: ["TBC Contractica CAPS"],
        anonymous: ["Anonymous Pro"],
      },
    },
  },
  plugins: [],
};
