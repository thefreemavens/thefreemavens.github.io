<template>
  <div class="font-mono text-xs px-4 py-3 border leading-relaxed">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style scoped>
a {
  /* @apply bg-black text-white dark:bg-white dark:text-black mx-1 px-2 */
  @apply border-b
}
</style>