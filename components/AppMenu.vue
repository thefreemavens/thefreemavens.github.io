<template>
  <div v-show="menu" class="container mx-auto px-2 z-40 fixed left-0 right-0 top-0 h-[100dvh]">
    <nav class="
      mx-2
      h-full
      bg-white/95
      dark:bg-black/95
      --border-t
      my-10
      py-2
      backdrop-filter
      backdrop-blur-[10px]
      --[@supports(backdrop-filter:blur(0px))]:bg-white/80
      --[@supports(backdrop-filter:blur(0px))]:dark:bg-grey-980/70
    ">

      <hr class="mb-8 border-t-8">

      <div class="grid overscroll-contain grid-cols-1 gap-2 w-full sm:grid-cols-2 lg:grid-cols-4">

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Base</li>
            <li
              v-for="(menuItem, index) in menuItems1" :key="index"
              class="py-2 my-0"
            >
              <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Main</li>
            <li
              v-for="(menuItem, index) in menuItems2" :key="index"
              class="py-2 my-0"
            >
              <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>

        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Market</li>
            <li
              v-for="(menuItem, index) in menuItems3" :key="index"
              class="py-2 my-0"
            >
              <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>


        <section class="flex justify-start items-start w-full h-full">
          <ul class="block mt-4 w-full tracking-wide">
            <li class="mb-2 text-xs font-bold uppercase sm:mb-4 lg:mb-6 text-grey-975 dark:text-white">Members</li>
            <li
              v-for="(menuItem, index) in menuItems4" :key="index"
              class="py-2 my-0"
            >
              <NuxtLink :to="menuItem.url" @click="menu = false" class="flex items-center py-1 text-sm transition-colors duration-100 ease-in-out group --font-mono --uppercase hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                <span class="flex-1">{{ menuItem.title }}</span>
                <span class="mx-2 opacity-0 group-hover:opacity-100">--></span>
              </NuxtLink>
            </li> 
          </ul>
        </section>
      </div>
      <hr class="mt-8">
      <div class="font-mono text-2xs pt-1">
        Beta --> v{{ appConfig.version }}
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)
const appConfig = useAppConfig()

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    slug: 'home',
    url: '/'
  },
  {
    title: 'Freemavenry',
    slug: 'freemavenry',
    url: '/freemavenry'
  },
])

const menuItems2 = ref([
{
    title: 'Knowledge',
    slug: 'knowledge',
    url: '/knowledge/main'
  },
  {
    title: 'Lessons',
    slug: 'lessons',
    url: '/lessons/main'
  },
  {
    title: 'Challenges',
    slug: 'challenges',
    url: '/challenges/main'
  },
  {
    title: 'Resources',
    slug: 'resources',
    url: '/resources/main'
  },
  {
    title: 'Tools',
    slug: 'tools',
    url: '/tools/main'
  },
])

const menuItems3 = ref([
  {
    title: 'Marketspace',
    slug: 'marketspace',
    url: '/marketspace'
  }
])

const menuItems4 = ref([
  {
    title: 'Login',
    slug: 'login',
    url: '/maven/login'
  },
  {
    title: 'Initiate',
    slug: 'init',
    url: '/maven/initiation'
  }
])

onMounted(() => {

  // Press ESC key to exit modal
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && menu.value == true) {
      menu.value = false
    }
  })

})
</script>