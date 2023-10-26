<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="maven" class="absolute top-8 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
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
        
        <div class="lg:col-start-2">
          <NuxtLink to="/maven/account/update" class="my-8 block">Update</NuxtLink>
          <ul>
            <li>First Name: {{ maven.name.split(' ')[0] }}</li>
            <li>Last Name: {{ maven.name.split(' ')[1] }}</li>
            <hr class="border-none my-4">
            <li>Email: {{ maven.email }}</li>
            <hr class="border-none my-4">
            <li>Telegram @username: NA</li>
            <li>X @username: NA</li>
            <hr class="border-none my-4">
            <li>Country: NA</li>
            <li>State: NA</li>
            <li>City: NA</li>
          </ul>
        </div>
      </div>

      <!-- {{ currentUser }} -->
      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->
      
      <!-- {{  $pb.authStore.isValid }} -->

    </AppSection>

    <!-- <NuxtLink to="/maven/account/update">Update</NuxtLink> -->
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
