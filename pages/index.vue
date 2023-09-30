<template>
  <main class="container mx-auto">
    <!-- HERO -->
    <section class="relative grid grid-cols-6 mx-4 border-t pt-8 pb-16 lg:pt-12 lg:pb-20">
      <!-- HERO: Title -->
      <div class="mt-0 mb-12 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">---></div>
      <h1
        class="mb-24 flex flex-col col-span-6 col-start-1 text-5xl font-bold tracking-tighter leading-none xl:pe-36 sm:text-6xl md:text-7xl lg:text-8xl">
        Discover your true power and learn how to use it 
      </h1>
    </section>

    <section class="relative mx-4 py-12 border-t">
      <!-- <img src="/img/market/tfm-hoodie-white-nl-new-black.webp"> -->
      <NuxtLink to="marketspace">
        <img src="/img/market/tfm-notebook-angle-left-white.webp">
      <!-- <div class="w-full h-screen bg-cover block bg-origin-padding bg-[url('/img/market/tfm-notebook-angle-left-white.webp')]"> -->
      </NuxtLink>
      <!-- </div> -->
    </section>

    <!-- Features -->
    <section class="
      mx-4
      pt-8 pb-16 lg:pt-12 lg:pb-20
      grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-12
      border-t
    ">
      <!-- Knowledge -->
      <NuxtLink to="/knowledge/main">
        <div class="relative pb-4 group group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Knowledge</h3>
          <div class="relative my-6 aspect-square bg-black/5 dark:bg-white/5">
            <span class="absolute z-10 rounded-full w-1/2 h-1/2 top-[25%] left-[25%] bg-white mix-blend-difference"/>
            <span class="flex w-full h-full bg-black rounded-none scale-75 dark:bg-white" />
          </div>
          <p class="text-base xl:text-lg">
            Knowledge base you can use and apply in your life. Unlike information that is "good to know" and has no real-life use. 
            Know the immutable laws of the universe and you shall know thyself.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Lessons -->
      <NuxtLink to="/lessons/main">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Lessons</h3>
          <div class="relative my-6 bg-black/5 dark:bg-white/5 aspect-square">
            <span class="absolute z-10 rounded-none w-1/2 h-1/2 top-[25%] left-[25%] bg-white mix-blend-difference"/>
            <svg
              viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
              class="scale-75 fill-black dark:fill-white"
            >
              <polygon points="512,0 512,512 0,512"/>
            </svg>
          </div>
          <p class="text-base xl:text-lg">
            Organized and well thought out interactive lessons for optimal and effective learning.</p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Challanges -->
      <NuxtLink to="/challenges/main">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Challanges</h3>
          <div class="relative my-6 bg-black/5 dark:bg-white/5 aspect-square">
            <span class="absolute z-10 rounded-full w-1/2 h-1/2 top-[25%] left-[25%] bg-white mix-blend-difference"/>
            <svg
              viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
              class="scale-75 rotate-180 fill-black dark:fill-white"
            >
              <polygon points="512,0 512,512 0,512"/>
            </svg>
          </div>
          <p class="text-base xl:text-lg">
            Challanges to track your learning progress and level of undersatnding.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Resources -->
      <NuxtLink to="/resources/main">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Resources</h3>
          <div class="relative my-6 bg-black/5 dark:bg-white/5 aspect-square">
            <span class="grid grid-cols-2 origin-center scale-75">
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
            </span>
          </div>

          <p class="text-base xl:text-lg">
            A currated list of Resources arranged by categories to assist with your Natural Law study.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Tools -->
      <NuxtLink to="/tools/main">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Tools</h3>
          <div class="relative my-6 aspect-square bg-black/5 dark:bg-white/5" >
            <span class="grid grid-cols-2 origin-center scale-75">
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="-rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
            </span>
          </div>

          <p class="text-base xl:text-lg">
            Tools, techniques and tips you can use to "Exit the Matrix", the right way.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Marketspace -->
      <NuxtLink to="/marketspace">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Marketspace</h3>
          <div class="relative my-6 aspect-square bg-black/5 dark:bg-white/5" >
            <span class="grid grid-cols-2 origin-center scale-75">
              <span class="-rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="-rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
              <span class="rotate-90">
                <svg
                  viewBox="0 0 512 512" stroke-width="4" xmlns="http://www.w3.org/2000/svg"
                  class="fill-black dark:fill-white stroke-black dark:stroke-white"
                >
                  <polygon points="512,0 512,512 0,512"/>
                </svg>
              </span>
            </span>
          </div>
          <p class="text-base xl:text-lg">
            Community based marketplace with products and services you can buy, sell, trade or offer.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

    </section>

    <!-- Picons + Principles -->
    <AppSection layout="grid3">
      <template #title>
        Picons
      </template>
      <template #desc>
        Introducing <span class="font-bold">Picons</span> (<span class="italic">Principles + Icons</span>), 
        open-source and free-to-use set of 8 icons symbolizing the great body of knowledge of Natural Law and the 8
        immutable metaphisical principles of our universe<sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <li
          v-for="(principle, index) in principles" :key="index"
          ref="el">
          <NuxtLink
            :to="principleBaseUrl + principle.slug"
            class="
              group
              flex justify-center items-center
              aspect-square
              transition-all duration-300 ease-in-out
            ">
            <AppIcon
              :name="principle.title"
              class="
              text-black dark:text-white
              group-hover:opacity-0
              w-full h-full
              p-[19.1%]
              transition-all duration-300 ease-in-out
            "/>
            <h3
              class="absolute text-5xl text-black opacity-0 transition-opacity duration-300 ease-in-out scale-90 group-hover:opacity-100 dark:text-white">
              {{ principle.title}}<sup class="relative -top-6 text-xl start-0.5">{{ principle.id }}</sup>
            </h3>
          </NuxtLink>
        </li>
      </ul>
    </AppSection>

  </main>
</template>

<script setup>
const principles = usePrinciples()
const principleBaseUrl = 'knowledge/principles-of-natural-law#'


</script>

<!-- <style scoped lang="postcss">
</style> -->
