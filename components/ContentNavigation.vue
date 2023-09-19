<template>
  <ul class="nav flex flex-col">
    <li v-for="(item, index) in navigationTree" :key="index" class="py-0.5">
      <div class="flex">
        <div v-if="item.children" class="flex flex-1 p-1">
          {{ item.title }}
          <span class="flex bg-red px-1 cursor-pointer" @click="showChildren = !showChildren">X</span>
        </div>
        <NuxtLink
          v-else
          :to="item._path"
          class="
            --block --relative
            flex
            flex-1
            p-1
            rounded-sm
            text-sm
            bg-black/0
            hover:text-white hover:bg-black
            transition-colors duration-200 hover:duration-100
        ">
          {{ item.title }}
        </NuxtLink>
      </div>
      <ContentNavigation v-if="item.children && showChildren" :navigation-tree="item.children" class="sub-nav" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  },
  showChildren: {
    type: Boolean,
    default: ()  => false
  }
})
</script>

<style scoped>
.nav li {
  list-style-type: '';
}

.nav ul {
  /* @apply ms-2; */
  /* margin-left: .2rem; */
}
</style>
