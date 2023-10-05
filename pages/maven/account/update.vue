<template>
  <main class="container relative mx-auto">

    <!-- Login / Logout -->
    <button v-if="maven" class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white" type="button" @click="logout">
      Logout
    </button>

    <!-- IF User-->
    <AppSection v-if="maven" class="md:pb-0 lg:pb-0">
      <template #title>
        New Avatar,<br>
        <!-- {{ maven.name.split(' ')[0] }} -->
      </template>
      <template #desc>
        Welcome back
      </template>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9">
        <p class="px-4 py-2 font-mono text-xs border lg:col-start-2">
          Your profile page is in development, please come back soon.
        </p>

        <img
        :src="'https://tfmbase.pockethost.io/api/files/' +  maven.collectionId + '/' + maven.id + '/' + maven.avatar + '?thumb=100x100'" alt="Avatar"
        class=""
        />
      </div>

      <form @submit.prevent="updateAvatar()">
        <input type="file" name="filename" @change="handleUploadfile()" ref="file">
        <button type="submit">Submit</button>
      </form>

      {{ newAvatar }}

    </AppSection>

  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()
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

const newAvatar = ref([])

function handleUploadfile () {
  newAvatar.value = file.files[0]
}

const updateAvatar = async () => {
  const data = new FormData()
  data.append('avatar', newAvatar.value); // newAvatar must be File or Blob instance
  await $pb.collection('users').update($pb.authStore.model.id, data)
  console.log(data)
}

</script>
