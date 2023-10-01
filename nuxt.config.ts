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
        // '/kb/_dir',
        // '/kb/intro',
        // '/kb/requirements-amd-the-role-of-knowledge',
        // '/kb/occult-knowledge',
        // '/kb/natural-law',
        // '/kb/nescience-vs-ignorance-the-contexts-of-not-knowing',
        // '/kb/problem-solving',
        // '/kb/truth-vs-perception',
        // '/kb/solipsism',
        // '/kb/definition-of-natural-law',
        // '/kb/discovery-vs-belief',
        // '/kb/consciousness-and-the-brain',
        // '/kb/brain-structure-and-behaviour',
        // '/kb/mental-and-worldview-schism',
        // '/kb/human-nature',
        // '/kb/principles-of-natural-law',
        // '/kb/the-two-spiritual-currencies',
        // '/kb/natural-law-also-known-as',
        // '/kb/natural-law-expressions-chart',
        // '/kb/right-vs-wrong',
        // '/kb/knowing-rights',
        // '/kb/natural-law-transgressions',
        // '/kb/taxation-prohibition-licences-and-permits',
        // '/kb/force-vs-violence',
        // '/kb/the-two-pillars-of-enlightenment',
        // '/kb/ownership',
        // '/kb/conscience',
        // '/kb/the-law-of-freedom',
        // '/kb/natural-law-vs-mans-law',
        // '/kb/equality-under-natural-law',
        // '/kb/the-one-true-divide',
        // '/kb/statism-vs-anarchy',
        // '/kb/the-fear-of-chaos',
        // '/kb/order-followers',
        // '/kb/moral-culpability',
        // '/kb/responsibility-vs-abdication',
        // '/kb/self-loathing-vs-self-respect',
        // '/kb/the-lost-word',
        // '/kb/teaching-natural-law-to-others-aka-the-great-work',
        // '/kb/shift-happens',
        // '/kb/the-great-work',
        // '/kb/at-the-crossroads',
        // '/kb/conclusion',
        // '/kb/glossary',
        // '/kb/recommended-books',
        // '/kb',
        // '/lessons/next',
        // '/challenges/next'
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
  }
})
