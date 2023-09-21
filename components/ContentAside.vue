
<template>
  <aside v-if="toc && toc.links.length > 0" class="sticky top-16 pt-2 border-t-4">

    <!-- Table of Contents -->
    <h3 class="pb-4 text-sm font-bold">Table of contents</h3>
    <ul class="pb-6 text-xs">
      <li v-for="link in toc.links" :key="link.text" class="py-0.5">
        <a :href="`#${link.id}`" class="block px-2 py-0.5 rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100">
          {{ link.text }}
        </a>
      </li>
    </ul>

    <!-- Adspace [DEMO] -->
    <span
      class="flex justify-center items-center w-full text-xs bg-center bg-cover rounded-sm aspect-video bg-black/10 dark:bg-white/10"
      style="background-image: url('/img/market/tfm-notebook-angle-left-white.webp');"
    >
    </span>
    
  </aside>
</template>

<script setup lang="ts">
  const { toc } = useContent()
</script>
