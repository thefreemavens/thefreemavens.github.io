// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: ''
  }
})
