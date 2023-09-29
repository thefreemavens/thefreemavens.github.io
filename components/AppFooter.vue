<template>
  <footer class="max-w-screen">
    <div class="container mx-auto">
      <section class="mt-12 mx-4 border-t-8 --bg-red/20 flex py-4 ">
        <!-- <div class="grid grid-cols-4 gap-8 justify-start pt-0 start overflow-clip"> -->
          <NuxtLink to="/">
            <AppIcon name="tfm-s" class="w-40 h-[40px]"/>
          </NuxtLink>
          <!-- <AppLogotype class="translate-y-[30%] w-full h-full opacity-100" /> -->
          <span class="font-mono col-start-3 col-span-2 text-2xs uppercase tracking-wider flex-1 text-right -mt-[3px]">
            All Natural Rights Reserved
            <!-- <span class="hidden md:inline">@ All Times <span class="hidden lg:inline">@ All Cost</span></span> -->
            <span class="flex justify-end gap-x-2">
              <NuxtLink to="https://t.me/thefreemavens" target="_blank" class="hover:underline">--> Telegram</NuxtLink>
              <NuxtLink to="https://twitter.com/thefreemavens" target="_blank" class="hover:underline">--> X</NuxtLink>
            </span>
          </span>
          <!-- <AppLogomark class="w-24 h-24"/> -->
        <!-- </div> -->
      </section> 
      </div> 
  </footer>
</template>