import { defineNuxtPlugin } from '#app'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      pb,
    },
  }
})