<template>
  <ul class="nav pe-3">
    <li v-for="(item, index) in navigationTree" :key="index" class="py-0.5">
      <div class="">
        <div v-if="item.children" class="relative p-1 block cursor-pointer font-bold group" @click="showChildren = !showChildren">
          {{ item.title }}
          <span class="absolute top-2 w-5 h-5 lg:right-2 font-thin text-xl group-hover:bg-black rounded-sm group-hover:text-white flex items-center justify-center ">
            <span class="flex -mt-0.5">{{ showChildren? '-' : '+'}}</span>
          </span>
        </div>
        <NuxtLink
          v-else
          :to="item._path"
          class="
            block --relative
            p-1
            rounded-sm
            text-sm
            bg-black/0
            hover:text-white hover:bg-black
            dark:hover:text-black dark:hover:bg-white
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
  // showChildren: {
  //   type: Boolean,
  //   default: ()  => false
  // }
})

const showChildren = ref({
  type: Boolean,
  default: false
})

</script>

<style scoped>
.nav li {
  list-style-type: '';
}

.nav ul {
  @apply ms-2;
  /* margin-left: .2rem; */
}

a.router-link-exact-active {
@apply bg-black text-white dark:bg-white dark:text-black
}
</style>
