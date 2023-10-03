// Handle content routes
import { globSync } from "glob"
const routes = globSync('./content/**/*.md')
  .map(path => path.slice(7, -3).replace(/\d+\./g, '').replace(/\\/g, '/'))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // app: {
  //   baseURL: '/tfm-web/'
  // },
  // ssr: false,
  experimental: {
    renderJsonPayloads: true,
    payloadExtraction: true
  },
  nitro: { 
    // preset: 'service-worker',
    preset: 'static',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/sitemap.xml',
        ...routes
      ]
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  content: {
    documentDriven: false,
    watch: {
      ws: {
        port: 4000,
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
  // build: {
  //   transpile: ['ellipse']
  // },
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: tag => ['ellipse'].includes(tag)
  //   }
  // }
})
