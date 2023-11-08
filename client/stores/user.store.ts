import { defineStore } from 'pinia'
import { useApiFetch } from '~/composables/useApiFetch'
import type { User, UserLogin, UserRegister } from '~/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

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
      navigateTo('/task')
    }
    return register
  }


  const logout = async () => {
    await useApiFetch('/logout', { method: 'POST' })
    user.value = null
    navigateTo('/auth/login')
  }

  const login = async (credentials: UserLogin) => {
    await useApiFetch('/sanctum/csrf-cookie')
    const login = await useApiFetch('/login', { body: credentials, method: 'POST' })
    await fetchUser()
    if (!login.error.value) {
      navigateTo('/task')
    }
    return login
  }

  return { user, logout, isLoggedIn, fetchUser, register, login }
})
