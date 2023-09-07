<script setup>
import svgUrl from '~/assets/svg/icons.svg'

const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
  <ClientOnly>
    <div class="relative flex">
      <button
        :class="{ 'rotate-[180deg]': isDark, 'rotate-0': !isDark }"
        class="transition-transform duration-200 ease-out"
        @click="isDark = !isDark"
      >
        <AppIcon name="CustomColorMode" class="text-black dark:text-white w-4 h-4" />
      </button>
    </div>
  </ClientOnly>
</template>
