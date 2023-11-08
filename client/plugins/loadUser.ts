export default defineNuxtPlugin(async (nuxtApp) => {
  const user = useUserStore()
  if (user.isLoggedIn) await user.fetchUser();
})
