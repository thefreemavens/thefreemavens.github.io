<template>
  <header
    class="
    bg-white/100 dark:bg-black/100
      container
      h-12
      mx-auto
      fixed
      z-50
      top-0
      inset-x-0
      w-full
      flex
      gap-1
      justify-start
      items-center
      --backdrop-filter
      --backdrop-blur-[10px]
      --[@supports(backdrop-filter:blur(0px))]:bg-white/80
      --[@supports(backdrop-filter:blur(0px))]:dark:bg-black/80
  ">
    <!-- <AppLogomark class="w-12 h-12 mx-4 my-2 --rotate-[-30deg]"/> -->
    <div class="cursor-pointer --bg-red/20 ps-3.5 py-3 pe-1" @click="menu = !menu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        <!-- <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" /> -->
      </svg>
    </div>
    <NuxtLink to="/" @click="menu = false" class="ps-1 pe-2 py-2 --bg-red/20">
      <!-- <AppIcon name="tfm" class="w-[52px] h-[30px]"/> -->
      <AppIcon name="tfm-s" class="w-[72px] h-[50px]"/>
      <!-- <AppLogotype class="w-[52px] h-auto" /> -->
    </NuxtLink>

    <!-- <h1 class="mx-4 text-2xl font-black">TFM</h1> -->
    <div class="flex-row-reverse flex absolute right-0 items-center gap-1">
      <NuxtLink to="/profile" class="py-4 pe-4 ps-2" @click="menu = false">
        <div class="bg-black dark:bg-white w-5 h-5 rounded-full" />
      </NuxtLink>
      <AppColorModeButton class="--bg-red/20" />
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg> -->
    </div>
  </header>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)

</script>