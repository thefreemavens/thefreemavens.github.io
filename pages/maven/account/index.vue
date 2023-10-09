<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="maven" class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button>

    <!-- IF User-->
    <AppSection v-if="maven" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello,<br>
        {{ maven.name.split(' ')[0] }}
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>
      </div>
      <!-- {{ currentUser }} -->
      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->
      
      <!-- {{  $pb.authStore.isValid }} -->

    </AppSection>

    <NuxtLink to="/maven/account/update">Update</NuxtLink>
  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

// const currentUser = ref('')
const maven = useState('maven', () => '')

definePageMeta({
  middleware: 'auth'
})

const logout = () => {
  $pb.authStore.clear()
  maven.value = null
  navigateTo('/maven/login')
}


onMounted(() => {
  $pb.authStore.onChange(() => {
    maven.value = $pb.authStore.model  
  }, true)
})

</script>
