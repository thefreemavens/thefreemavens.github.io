<template>
  <main class="container mx-auto">
    <div class="mx-4">
      <p>{{ authData }}</p>
      <p class="pb-8">{{ currentUser }}</p>
      <button v-if="currentUser" class="text-white bg-black dark:text-black dark:bg-white px-2" type="button" @click="logout">
        Logout
      </button>
      <div v-else>
        <button class="text-white bg-black dark:text-black dark:bg-white px-2" type="button" @click="login">
        Login
        </button>

      </div>

    </div>
  </main>
</template>



<script setup>
const { $pb } = useNuxtApp()
// import PocketBase from 'pocketbase'
// const pb = new PocketBase('http://127.0.0.1:8090')
// const pb = new PocketBase('https://truebase.pockethost.io')

const authData = await $pb.collection('users').authWithPassword('lexrex618@gmail.com', '12340987')

const currentUser = ref('')
// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid)
// console.log(pb.authStore.token)
// console.log(pb.authStore.model.id)

const logout = () => {
  $pb.authStore.clear()
  currentUser.value = null
}

// const login = async () => {
//   const user = loginForm.value.elements.user.value;
//   const password = loginForm.value.elements.password.value;
//   try {
//     const authData = await useNuxtApp()
//       .$pb.collection("users")
//       .authWithPassword(user, password);
//     debugger;
//     console.log(authData);
//     navigateTo("/home");
//   } catch (error) {
//     console.log(error);
//     doAlert("Error Logging In", (error as any)?.message);
//   }
// }
// const pb = usePocketbase()
// const PocketBase = require('pocketbase/cjs')


// you can also fetch all records at once via getFullList
// const record = await pb.collection('posts').getOne('v59dnfosqx07f81')
// const records = await pb.collection('posts').getFullList({
  //     sort: '-created',
  // })
  
  // const resultList = await pb.collection('users').getList(1, 50)
  
  // let pb = null
  // const authData = ref('')
  
  onMounted(() => {
    currentUser.value = $pb.authStore.model
    // const records = pb.collection('users').getFullList(100)
    // const getAuthData = pb.collection('users').authWithPassword('lexrex618@gmail.com', '12340987')
    // authData.value = getAuthData

    // console.log(authData)
  
})
</script>