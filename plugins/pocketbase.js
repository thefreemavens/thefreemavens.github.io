import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')
// const pb = new PocketBase('https://tfmbase.pockethost.io')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('pb', pb)
})
