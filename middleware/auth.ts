export default defineNuxtRouteMiddleware((to, from) => {
  const isLogin = useNuxtApp().$pb.authStore.isValid
  if (!isLogin && to.path == '/maven/account') {
    return navigateTo("/maven/login");
  }
  if (
    isLogin && to.path == '/maven/login' || 
    isLogin && to.path == '/maven/initiation'
  ) {
    return navigateTo("/maven/account");
  }
})