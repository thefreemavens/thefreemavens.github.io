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
        <!-- <AppIcon
          name="Causality"
          class="
          mt-8 lg:mt-12
          col-span-3 xl:col-span-2
          col-start-4 xl:col-start-5
          aspect-square
          relative
          w-full h-full
          text-black dark:text-white
        "/> -->
    </section>

    <!-- Features -->
    <section class="
      mx-4
      pt-8 pb-16 lg:pt-12 lg:pb-20
      grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:gap-10 xl:gap-12
      border-t
    ">
      <!-- Knowledge -->
      <NuxtLink to="/kb">
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
      <NuxtLink to="/lessons">
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
            Interactive and well thought out organization for optimal and effective learning. View Lessons</p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Challanges -->
      <NuxtLink to="/challenges">
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

      <!-- Products -->
      <NuxtLink to="/marketspace">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Products</h3>
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
            Community based marketplace with products and services you can buy, sell, trade or offer.
          </p>
          <span class="invisible group-hover:visible text-xs mt-4 inline-block">Read More --></span>
        </div>
      </NuxtLink>

      <!-- Tools -->
      <NuxtLink to="/tools">
        <div class="pb-4 group">
          <h3 class="mb-6 text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">Tools</h3>
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
            Tools, techniques and tips you can use to "Exit the Matrix", the right way.
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
        a set of eight thoughtout and crafted open-source and free-to-use icons that visually represnt the eight
        immutable principles of Natural Law<sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <li
          v-for="(principle, index) in principles" :key="index"
          ref="el"
          class="
            group
            --bg-black
            flex justify-center items-center
            aspect-square
            cursor-pointer
            rounded-[0%] hover:rounded-[0%]
            --bg-white --dark:bg-black
            --hover:bg-black --dark:hover:bg-white
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
            <!-- :class="principle.color" -->
          <h3
            class="absolute text-5xl text-black opacity-0 transition-opacity duration-300 ease-in-out scale-90 group-hover:opacity-100 dark:text-white">
            {{ principle.title}}<sup class="relative -top-6 text-xl start-0.5">{{ principle.id }}</sup>
          </h3>
        </li>
      </ul>
    </AppSection>

    <!-- Knowledge -->
    <!-- <AppSection>
      <template #title>Knowledge</template>
      <template #desc>
        Knowledge base you can use and apply it in your life. Read Docs 
        <sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
    </AppSection> -->

    <!-- Lessons -->
    <!-- <AppSection>
      <template #title>Lessons</template>
      <template #desc>
        Interactive and well thought out organization for optimal and effective learning. View Lessons 
        <sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
    </AppSection> -->

    <!-- Challanges -->
    <!-- <AppSection>
      <template #title>Challanges</template>
      <template #desc>
        Challanges to track your progress and level of undersatnding. View Challanges 
        <sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
    </AppSection> -->

    <!-- Products -->
    <!-- <section class="">
      <h2 class="">Products</h2>
      <p>Community based marketplace with products and services you can buy, sell, trade or offer.</p>
      <p>Example product mockups</p>
    </section> -->

    <!-- Tools -->
    <!-- <section class="">
      <h2 class="">Tools</h2>
      <p>Tools, techniques and tips you can use to "Exit the Matrix", the right way.</p>
      <p>Link to Tools</p>
    </section> -->

    <!-- TLDR -->
    <AppSection layout="grid3">
      <template #title>TL;DR</template>
      <template #desc>
        The Matrix really does have you. You want to escape it but don't know how. Until now, when you have found all the knowledge and tools necessary to not only escape the Matrix, but actually own it.
        <!-- You've been kept in the dark for far too long. A very imprtant body of knowledge was hidden from you but this can be changed if you choose to and are curious enough. 
          This Occult (hidden) Knwoledge has the potential to free your mind from all mental cages and dogmatic beliefs. In addition and collectively, this body of knowledge will transform the current state of humanity from salvery to true
          freedom, if we choose to learn and act on it. -->
        
        <sup class="inline-block text-sm relative -top-3 start-1">🡵</sup>
      </template>
      <!-- <div class="grid grid-cols-2 gap-8">
        <div class="col-start-2">
        <p class="mb-4">
          A very imprtant body of knowledge was hidden from you but this can be changed if you choose to and are curious enough. 
          This Occult (hidden) Knwoledge has the potential to free your mind from all mental cages and dogmatic beliefs.
        </p>
        <p class="mb-4">
          In addition and collectively, this body of knowledge will transform the current state of humanity from salvery to true
          freedom, if we choose to learn and act on it.
        </p>
        </div>
      </div> -->
    </AppSection>

    <!-- TLDR -->
    <!-- <section class="mx-2">
      <h2 class="">

      Stop acting like a slave. <br> Be a Maven.
      <span class="mt-[8%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">-></span>
      </h2>
    </section> -->

    <!-- TLDR -->
    <!-- <section class="mx-2">
      <h2
        class="flex flex-col py-10 mb-8 text-6xl font-bold tracking-tighter border-b sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
      They are watching you because they are afraid of you.
      <span class="mt-[8%] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">-></span>
      </h2>
    </section> -->

  </main>
</template>

<script setup>
const principles = usePrinciples()
// // import { ref, onMounted, onUnmounted } from "vue"

// const el = ref(null)

// const observer = new IntersectionObserver((entries, observer) => {
//   console.log(entries.value)
// })

// onMounted(() => {
//   observer.observe(el.value)
// })

// Probably optional
// onUnmounted(() => {
//   observer.disconnect()
// })


</script>

<!-- <style scoped lang="postcss">
</style> -->
