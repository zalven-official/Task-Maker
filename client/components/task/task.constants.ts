
import type { MenuItem } from "~/types"

const loginPages: MenuItem[] = [
  { label: 'Login', link: '/auth/login', icon: 'fa-solid fa-right-to-bracket' },
  { label: 'Register', link: '/auth/register', icon: "fa-solid fa-address-card" },
]

const taskPages: MenuItem[] = [
  { label: 'Task', link: '/task', icon: "fa-solid fa-list-check" }
]

export const getTasksPages = computed((): MenuItem[] => {
  const { isLoggedIn } = storeToRefs(useUserStore())
  if (isLoggedIn.value)
    return [...taskPages]
  return [...loginPages, ...taskPages]
})