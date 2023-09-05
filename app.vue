<script setup>
// const colorMode = useColorMode()
// const inverter = ref(false)
</script>

<template>
  <div>
    <AppColorModeButton />
    <NuxtPage class="mx-auto" />
  </div>
</template>

<style lang="postcss">
body {
  @apply
    min-h-screen
    dark:text-white
    bg-white dark:bg-black;
  }
</style>