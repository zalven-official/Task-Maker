import { defineStore } from 'pinia'
import { useApiFetch } from '~/composables/useApiFetch'
import type { User, UserLogin, UserRegister } from '~/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const router = useRouter()
  const { successToast, errorToast } = useToastStore()

  const isLoggedIn = computed(() => !!user.value)


  const fetchUser = async () => {
    const { data, error } = await useApiFetch<User>('/api/user')
    user.value = data.value
  }

  const register = async (info: UserRegister) => {
    await useApiFetch('/sanctum/csrf-cookie')
    const register = await useApiFetch('/register', { body: info, method: 'POST' })
    await fetchUser()
    if (!register.error.value) {
      router.push('/task')
    }
    errorToast("There's something wrong with your registration")
    return register
  }


  const logout = async () => {
    await useApiFetch('/logout', { method: 'POST' })
    user.value = null
    router.push('/auth/login')
  }

  const login = async (credentials: UserLogin) => {
    await useApiFetch('/sanctum/csrf-cookie')
    const login = await useApiFetch('/login', { body: credentials, method: 'POST' })
    await fetchUser()

    if (!login.error.value) {
      router.push('/task')
      return
    }
    errorToast('Make sure you type correct credentials')
    return login
  }

  return { user, logout, isLoggedIn, fetchUser, register, login }
})
