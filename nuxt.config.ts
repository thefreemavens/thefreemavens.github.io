// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  content: {
    documentDriven: true,
    watch: {
      ws: {
        port: 4000,
        showUrl: true
        }
      }
    },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false
  },
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      Inter: [400, 700, 900],
      'Victor Mono': [500]
      // 'Victor Mono:ital': [500]
    }
  },
})
