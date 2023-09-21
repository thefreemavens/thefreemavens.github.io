<template>
  <main class="container mx-auto relative">

    <!-- Login / Logout -->
    <button v-if="currentUser" class="absolute right-4 top-4 rounded-sm uppercase font-bold text-xs px-2 py-1 text-white bg-black dark:text-black dark:bg-white" type="button" @click="logout">
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

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap:8 xl:gap-9">
        <p class="lg:col-start-2 font-mono text-xs px-4 py-2 border">
          Your profile page is in development, please come back soon.
        </p>
      </div>

      <!-- <p class="block mb-4">
        {{ $pb.authStore }}
      </p> -->


    </AppSection>

    <!-- If not logged in show login form or signup form -->
    <AppSection v-else class="md:pb-0 lg:pb-0">
      <template #title>
        <template v-if="loginMode">
          Login
        </template>
        <template v-else>
          Application<br>Form
        </template>
        <!-- {{ loginMode ? "Login" : "Application Form" }} -->
      </template>
      <template #desc>
        {{ loginMode ? "Glad to see you again" : 'Please tell us a bit about yourself so that we may review your request for an application.¹' }}
      </template>

      <section class="mx-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="md:col-start-2 lg:max-w-md">
            <form
              id="join"
              ref="formElement"
              class="text-left relative"
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
                v-if="loginMode"
                @click="login"
                type="button"
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
                Login
              </button>

              <button
                v-if="!loginMode"
                @click="signup"
                type="button"
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
                Signup
              </button>
  
              <!-- Form Disclaimers -->
              <span class="text-xs flex mt-2">
                <span class="block w-3.5 h-3.5 me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </span>
                All applications are kept secure and private.
              </span>
    
              <button
                type="button"
                @click="loginMode = !loginMode"
                class="
                  absolute -bottom-0.5 right-0
                  border-b border-transparent hover:border-black dark:hover:border-white
                  pb-0.5
                  text-center
                  font-bold
                  uppercase
                  text-xs
              ">
                {{ loginMode? 'Signup' : 'Login' }}
              </button>
            </form>
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
    // console.log($pb.authStore.isValid)
    // console.log($pb.authStore.token)
    // console.log($pb.authStore.model)
  } catch (error) {
    alert(error.message)
  }
}

const signup = async () => {
  try {
    const data = {
      "username": `TFM${self.crypto.randomUUID().split("-")[0]}`,
      "email": email.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": firstName.value + ' ' + lastName.value
    }

    const record = await $pb.collection('users').create(data);

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