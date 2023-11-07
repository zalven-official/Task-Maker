import { defineStore } from 'pinia'
import { type MenuItem } from '~/types'

export const useMenuStore = defineStore('menu', () => {
  const { user } = useUserStore()
  const progressItems = ref<MenuItem[]>([
    { label: 'Profile', icon: 'fa-regular fa-user' },
    { label: 'Resume / CV', icon: 'fa-regular fa-file-lines' },
    { label: 'Assessment', icon: 'fa-solid fa-chart-column' },
    { label: 'Video Script', icon: 'fa-solid fa-display' },
  ]);

  // const userItems = ref<MenuItem[]>([
  //   { label: 'Application Tracking', icon: 'fa-solid fa-briefcase' },
  //   { label: 'Bookmarked', icon: 'fa-regular fa-bookmark' },
  //   { label: 'Notifications', icon: 'fa-regular fa-bell', tip: user.notifications.length > 0 ? `${user.notifications.length}` : null },
  //   { label: 'Activity Logs', icon: 'fa-solid fa-chart-line' },
  //   { label: 'Settings', icon: 'fa-solid fa-gear' },
  // ]);

  return { progressItems }
})