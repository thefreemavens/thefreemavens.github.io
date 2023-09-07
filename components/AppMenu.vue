<template>
  <div v-show="menu" class="container mx-auto px-2 z-10 fixed left-0 right-0 top-0 h-[100dvh]">
    <nav class="
      mx-2
      h-full
      bg-white/95
      dark:bg-black/95
      --border-t
      my-12
      py-2
      backdrop-filter
      backdrop-blur-[10px]
      --[@supports(backdrop-filter:blur(0px))]:bg-white/80
      --[@supports(backdrop-filter:blur(0px))]:dark:bg-grey-980/70
    ">

      <hr class="mb-8 border-t-8">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full overscroll-contain">

        <section class="h-full w-full flex justify-start items-start">
          <ul class="mt-4 tracking-wide block w-full">
            <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Base</li>
            <li
              v-for="(menuItem, index) in menuItems1" :key="index"
              class="my-0 py-2"
            >
              <NuxtLink :to="menuItem.url" @click="closeModal()" class="group --font-mono --uppercase flex items-center py-1 transition-colors duration-100 ease-in-out text-sm hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>

        <section class="h-full w-full flex justify-start items-start">
          <ul class="mt-4 tracking-wide block w-full">
            <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Data</li>
            <li
              v-for="(menuItem, index) in menuItems2" :key="index"
              class="my-0 py-2"
            >
              <NuxtLink :to="menuItem.url" @click="closeModal()" class="group --font-mono --uppercase flex items-center py-1 transition-colors duration-100 ease-in-out text-sm hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>

        <section class="h-full w-full flex justify-start items-start">
          <ul class="mt-4 tracking-wide block w-full">
            <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Join</li>
            <li
              v-for="(menuItem, index) in menuItems3" :key="index"
              class="my-0 py-2"
            >
              <NuxtLink :to="menuItem.url" @click="closeModal()" class="group --font-mono --uppercase flex items-center py-1 transition-colors duration-100 ease-in-out text-sm hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>


        <section class="h-full w-full flex justify-start items-start">
          <ul class="mt-4 tracking-wide block w-full">
            <li class="mb-2 sm:mb-4 lg:mb-6 font-bold text-xs uppercase text-grey-975 dark:text-white">Misc</li>
            <li
              v-for="(menuItem, index) in menuItems4" :key="index"
              class="my-0 py-2"
            >
              <NuxtLink :to="menuItem.url" @click="closeModal()" class="group --font-mono --uppercase flex items-center py-1 transition-colors duration-100 ease-in-out text-sm hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>
      </div>
      <hr class="mt-8">
    </nav>
  </div>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    slug: 'home',
    url: '/'
  },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])

const menuItems2 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  {
    title: 'Freemavenry',
    slug: 'freemavenry',
    url: '/freemavenry'
  },
  {
    title: 'Natural Law',
    slug: 'natural-law',
    url: '/natural-law'
  },
  {
    title: 'The Principles',
    slug: 'principles',
    url: '/principles'
  },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])

const menuItems3 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  // {
  //   title: '#NoConsent',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  {
    title: '#Initiation',
    slug: 'init',
    url: '/init'
  }
])

const menuItems4 = ref([
  // {
  //   title: 'Home',
  //   slug: 'home',
  //   url: '/'
  // },
  // {
  //   title: 'Freemavenry',
  //   slug: 'freemavenry',
  //   url: '/freemavenry'
  // },
  // {
  //   title: 'Natural Law',
  //   slug: 'natural-law',
  //   url: '/natural-law'
  // },
  {
    title: '#NoConsent',
    slug: 'natural-law',
    url: '/natural-law'
  },
  // {
  //   title: '#Initiation',
  //   slug: 'initiation',
  //   url: '/initiation'
  // }
])
</script>