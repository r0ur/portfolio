/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Asegúrate de incluir el archivo HTML principal
    "./assets/**/*.{html,js}", // Incluye cualquier HTML o JS dentro de assets
    "./css/**/*.{html,js}", // Si tienes archivos HTML o JS en css (aunque usualmente aquí solo hay CSS)
    "./fonts/**/*.{html,js}", // No es común tener JS aquí, pero por si acaso
    "./js/**/*.{html,js}", // Incluye archivos JS dentro de js
    "./pages/**/*.{html,js}", // Incluye archivos HTML o JS dentro de pages
    "./src/**/*.{html,js}", // Incluye archivos dentro de src,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
