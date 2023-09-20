<template>
  <div class="grid grid-cols-2 mt-16 text-xs font-bold border-t">
    <NuxtLink v-if="prev" :to="prev._path" class="border-t-1 pt-4 w-auto justify-self-start">{{ prev.title }}<span class="block pt-2">{{ arrowLeft }}</span></NuxtLink>
    <NuxtLink v-if="next" :to="next._path" class="border-t-1 pt-4 w-auto text-right justify-self-end">{{ next.title }}<span class="block pt-2">--></span></NuxtLink>
  </div>
</template>
  
<script setup lang="ts">
const { prev, next } = useContent()
const arrowLeft = '<--'
</script>
