
<template>
  <div class="sticky top-16 pt-2 border-t-4">
    <h3 v-if="toc && toc.links" class="font-bold text-sm pb-4">Table of contents</h3>

    <ul v-if="toc && toc.links" class="text-xs pb-6">
      <li v-for="link in toc.links" :key="link.text" class="py-0.5">
        <a :href="`#${link.id}`" class="block px-2 py-0.5 rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100">
          {{ link.text }}
        </a>
      </li>
    </ul>

    <span
      class="flex justify-center items-center w-full aspect-video text-xs bg-black/10 dark:bg-white/10 bg-center  bg-cover rounded-sm"
      style="background-image: url('/img/market/tfm-notebook-angle-left-white.webp');"
    >
      <!-- Demo Adspace -->
    </span>    
  </div>
</template>

<script setup lang="ts">
  const { toc } = useContent()
</script>
