export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter()
  const userStore = useUserStore()
  const { isLoggedIn } = storeToRefs(userStore)
  if (!isLoggedIn.value) {
    router.push('/auth/login')
  }
})
