<template>
  <header
    class="
      container
      h-12
      mx-auto
      fixed
      z-50
      top-0
      inset-x-0
      w-full
      flex
      justify-start
      items-center
      --border-b
      --border-gray-100 --dark:border-gray-950
      --shadow-sm
      bg-white/100 dark:bg-black/100
      backdrop-filter
      backdrop-blur-[10px]
      --[@supports(backdrop-filter:blur(0px))]:bg-white/80
      --[@supports(backdrop-filter:blur(0px))]:dark:bg-black/80
  ">
    <!-- <AppLogomark class="w-12 h-12 mx-4 my-2 --rotate-[-30deg]"/> -->
    <h1 class="text-2xl font-black mx-4">TFM</h1>
    <div class="absolute right-4 flex items-center gap-4">
      <AppColorModeButton class="" />
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg> -->
      <div class="cursor-pointer" @click="menu = !menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)


</script>