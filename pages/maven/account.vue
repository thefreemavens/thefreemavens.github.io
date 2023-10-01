<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="currentUser" class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded-sm dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button>

    <!-- IF User-->
    <AppSection v-if="currentUser" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello,<br>
        {{ currentUser.name.split(' ')[0] }}
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>
      </div>

      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->


    </AppSection>

  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

const currentUser = ref('')

definePageMeta({
  middleware: 'auth'
})

const logout = () => {
  $pb.authStore.clear()
  currentUser.value = null
  navigateTo('/maven/login')
}


onMounted(() => {
  $pb.authStore.onChange(() => {
    currentUser.value = $pb.authStore.model  
  }, true)
})

</script>
