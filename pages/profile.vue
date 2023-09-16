<template>
  <main class="container mx-auto">

    <AppSection v-if="currentUser" class="md:pb-0 lg:pb-0">
      <template #title>
        Hello, {{ currentUser.name }}
      </template>
      <template #desc>
        Welcome back
      </template>

      <section class="mx-4 lg:-mt-16">
        <button v-if="currentUser" class="text-white bg-black dark:text-black dark:bg-white px-2" type="button" @click="logout">
          Logout
        </button>
      </section>
    </AppSection>

    <AppSection v-else class="md:pb-0 lg:pb-0">
      <template #title>
        {{ loginMode ? "Login" : "Signup" }}
      </template>
      <template #desc>
        {{ loginMode ? "Glad to see you again" : 'Become a founding member' }}
      </template>

      <section class="mx-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-start-2 lg:max-w-md">
            <form
              id="join"
              ref="formElement"
              class="text-left"
              @submit.prevent="login"
            >
              <!-- First Name -->
              <div v-if="!loginMode" class="form-group group">
                <input
                class="peer"
                v-model="firstName"
                type="text"
                required="required"
                name="entry.1090129806"
                />
                <label
                  for="firstName"
                  class=""
                >
                  First Name
                </label>
              </div>
  
              <!-- Last Name -->
              <div v-if="!loginMode" class="form-group group">
                <input
                class="peer"
                v-model="lastName"
                type="text"
                required="required"
                name="entry.57994274"
                />
                <label for="lastName"
                  class="">
                  Last Name
                </label>
              </div>
  
              <!-- Email -->
              <div class="form-group group">
                <input
                  class="peer"
                  v-model="email"
                  type="text"
                  required="required"
                  name="entry.1097449195"
                />
                <label for="user-email"> Email </label>
              </div>
  
              <!-- Password -->
              <div class="form-group group">
                <input
                  class="peer"
                  v-model="password"
                  type="password"
                  required="required"
                  name="entry.1097449195"
                />
                <label for="user-password"> Password </label>
              </div>
  
              <!-- Submit Button -->
              <!-- :disabled="invalid" -->
              <button
                class="
                  w-full
                  text-center
                  mt-2
                  bg-grey-975
                  dark:bg-white
                  text-white
                  dark:text-grey-975
                  py-2.5
                  --rounded
                  font-bold
                  uppercase
                  text-base
                ">
                {{ loginMode? 'Login' : 'Signup' }}
              </button>
  
              <!-- Form Disclaimers -->
              <span class="text-xs flex mt-1.5">
                <span class="block w-3.5 h-3.5 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </span>
  
                All applications are kept secure and private.
              </span>
    
            </form>
            <button
              type="button"
              @click="loginMode = !loginMode"
              class="
                w-1/2
                text-center
                mt-2
                bg-grey-975
                dark:bg-white
                text-white
                dark:text-grey-975
                py-2.5
                --rounded
                font-bold
                uppercase
                text-base
            ">
              {{ loginMode? 'Signup' : 'Login' }}
            </button>
          </div>
        </div>
      </section>

    </AppSection>

  </main>
</template>

<script setup>
const { $pb } = useNuxtApp()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const currentUser = ref('')
const loginMode = ref(true)


const logout = () => {
  $pb.authStore.clear()
  currentUser.value = null
}

const login = async () => {
  try {
    const authData = await $pb.collection('users')
      .authWithPassword(email.value, password.value)

    // after the above you can also access the auth data from the authStore
    console.log($pb.authStore.isValid)
    console.log($pb.authStore.token)
    console.log($pb.authStore.model)
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const signup = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": email.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": firstName.value + lastName.value
    };

    const record = await pb.collection('users').create(data);

    await login();
  } catch (error) {
    alert(error.message)
  }
}

onMounted(() => {
  $pb.authStore.onChange(() => {
    currentUser.value = $pb.authStore.model  
  }, true)
})

</script>