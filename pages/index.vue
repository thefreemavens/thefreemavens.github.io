<template>
  <main class="container mx-auto">
    <!-- HERO -->
    <section class="">
      <!-- <hr class="my-10 mx-2 border-black"> -->
      <!-- <hr class="my-10 mx-2 border-black"> -->
      <!-- HERO -->

      <!-- HERO: Title -->
      <h1
        class="
          my-6 md:my-10 xl:pe-36
          border-b
          font-bold
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          tracking-tighter
          leading-none
          flex flex-col
      ">
      Discover your true power and learn how to use it 
      <span class="mt-[4%] mb-16 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">---></span>
      </h1>

      <ul class="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
        gap-8
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

      </ul>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9 xl:gap-12">
      <div class="features">
        <h3>Knowledge</h3>
        <div class="">
          book
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      </div>

      <div class="features">
        <h3>Lessons</h3>
        <div class="">
          
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      </div>

      <div class="features">
        <h3>Challanges</h3>
        <div class="">
          
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      </div>

      <div class="features">
        <h3>Products</h3>
        <div class="">
          
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      </div>

      <div class="features">
        <h3>Tools</h3>
        <div class="">
          
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      </div>
      
    </section>

    <!-- Knowledge -->
    <section class="">
      <h2 class="">Knowledge</h2>
      <p>Link to Docs</p>
    </section>

    <!-- Lessons -->
    <section class="">
      <h2 class="">Lessons</h2>
      <p>Link to Lessons</p>
    </section>

    <!-- Challanges -->
    <section class="">
      <h2 class="">Challanges</h2>
      <p>Link to Challanges</p>
    </section>

    <!-- Products -->
    <section class="">
      <h2 class="">Products</h2>
      <p>Example product mockups</p>
    </section>

    <!-- Tools -->
    <section class="">
      <h2 class="">Tools</h2>
      <p>Link to Tools</p>
    </section>

    <!-- TL;DR -->
    <section class="">
      <h2 class="">
        TL;DR
      </h2>
      <h3 class="text-4xl mb-6 tracking-tight">
        You've been kept in the dark for far too long.
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis officia maiores, quia, nemo beatae velit sit accusamus, quibusdam voluptas nostrum aliquid.</p>
      <p class="mb-4 w-1/2">
        A very imprtant body of knowledge was hidden from you but this can be changed if you choose to and are curious enough. 
        This Occult (hidden) Knwoledge has the potential to free your mind from all mental cages and dogmatic beliefs.
      </p>
      <p class="mb-4 w-1/2">
        In addition and collectively, this body of knowledge will transform the current state of humanity from salvery to true
        freedom, if we choose to learn and act on it.
      </p>
      <!-- <span class="mt-[8%] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">-></span> -->
    </section>

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
        class="
          py-10 mb-8
          border-b
          font-bold
          text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl
          tracking-tighter
          flex flex-col
      ">
      They are watching you because they are afraid of you.
      <span class="mt-[8%] text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">-></span>
      </h2>
    </section> -->

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
      <p>Learn Natural Law with interactive lessons and intuitive challanges</p>
      <p>Suitable for all generation</p>
      <p>Incorporate Products</p>
      <p>Community for exchange goods and support mind-like fellow beings</p>
    </section>
  </main>
</template>

<script setup lang="ts">
const principles = usePrinciples()

</script>

<style scoped lang="postcss">
section {
  @apply mx-4 border-t pt-8 pb-16 lg:pt-12 lg:pb-20
  bg-red/0
}

h2 {
  @apply
    py-0 mb-10
    flex flex-col
    text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
    font-bold
    tracking-tighter
}

.features {
  @apply
    pb-4
}
.features div {
  @apply
  my-6
    aspect-square
    bg-red/0
    bg-black/10
}

.features h3 {
  @apply
    mb-6
    text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter
}
</style>