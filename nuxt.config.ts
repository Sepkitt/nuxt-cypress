// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // css: ['vuetify/lib/styles/main.sass', '@/assets/scss/main.scss', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ["vuetify"],
    },
  vite: { ssr: { noExternal: ["vuetify"] } },

});
