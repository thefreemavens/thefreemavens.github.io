<template>
  <main class="container mx-auto">
    <section class="mx-2">
      <!-- <hr class="my-10 mx-2 border-black"> -->
      <!-- <hr class="my-10 mx-2 border-black"> -->
      <!-- HERO -->

      <!-- HERO: Title -->
      <h1
        class="
          transition-transform duration-[1600ms] ease-out
          mx-2 py-10 mb-8 xl:pe-36
          border-y
          font-bold
          text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl
          tracking-tighter
          flex flex-col
      ">
      Discover your true power and learn how to use it 
      <span class="mt-[8%] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">---></span>
      </h1>

      <ul class="
        mx-2 pb-8
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
        gap-8
        border-b
        mb-8
      ">


        <!-- :class="principle.background" -->
        <!-- <li
          :class="principle.background"
          v-for="(principle, index) in principles" :key="index"
          class="flex justify-center items-center aspect-square rounded-[50%] hover:rounded-[8%] cursor-pointer mix-blend-multiply hover:mix-blend-normal transition-all duration-200 bg-opacity-0"
        > -->
        <li
          v-for="(principle, index) in principles" :key="index"
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
          <!-- <AppIcon :name="principle.title" :class="principle.color" class="w-full h-full p-[19.1%] mix-blend-luminosity hover:mix-blend-normal" /> -->
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
            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out scale-90 text-5xl absolute text-black dark:text-white">
            {{ principle.title}}<sup class="text-xl relative -top-6 start-0.5">{{ principle.id }}</sup>
          </h3>
        </li>

        <!-- <div class="flex justify-center items-center aspect-square rounded-[0%] bg-yellow dark:bg-red">
          <h3 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl absolute text-red dark:text-yellow">
            Mentalism
          </h3>
        </div> -->

        <!-- <div class="flex justify-center items-center aspect-square rounded-[0%] bg-red dark:bg-yellow">
          <h3 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl absolute text-yellow dark:text-red">
            Correspondance
          </h3>
        </div> -->

      </ul>
    </section>

    <!-- TLDR -->
    <section class="mx-2">
      <h1
        class="
          transition-transform duration-[1600ms] ease-out
          mx-2 py-10 mb-8 xl:pe-36
          border-b
          font-bold
          text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl
          tracking-tighter
          flex flex-col
      ">
      Stop acting like a slave. <br> Be a Maven.
      <span class="mt-[8%] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">---></span>
      </h1>
    </section>

    <!-- TLDR -->
    <section class="mx-2">
      <h1
        class="
          transition-transform duration-[1600ms] ease-out
          mx-2 py-10 mb-8 xl:pe-36
          border-b
          font-bold
          text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl
          tracking-tighter
          flex flex-col
      ">
      They are watching you because they are afraid of you.
      <span class="mt-[8%] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">---></span>
      </h1>
    </section>

    <!-- Dev Notes -->
    <section class="mx-4 grid grid-cols-2 lg:grid-cols-4 mb-8 gap-6">
      <p>TLTR;</p>
      <p>Become a founding member</p>
      <p>De-Occult The Occult</p>
      <p>Not info, knowledge</p>
      <p>Learn to say the forbidden word, no</p>
      <p>Keep Calm and learn Natural Law</p>
      <p>Learn to decode symbolos of the past and their true meaning</p>
      <p>Equip youtself with true knowledge</p>
      <p>concquer yout biggest fears</p>
      <p>Learn what true love is</p>
      <p>Understand the direct correlation between true freedom and morality</p>
      <p>We can show you the path, but it's your walk</p>
      <p>Don't be a moral relativisit</p>
      <p>Open source and free</p>
      <p>The Matrix was a documentry</p>
      <p>Data that matters</p>
      <p>Work is for slaves. Creation is for free men</p>
    </section>
  </main>
</template>

<script setup lang="ts">
const principles = usePrinciples()

</script>