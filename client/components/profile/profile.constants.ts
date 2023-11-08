
import type { MenuItem } from "~/types"

export const progressPages: MenuItem[] = [
  { label: 'Profile', icon: 'fa-regular fa-user' },
  { label: 'Resume / CV', icon: 'fa-regular fa-file-lines' },
  { label: 'Assessment', icon: 'fa-solid fa-chart-column' },
  { label: 'Video Script', icon: 'fa-solid fa-display' },
]

export const profilePage = computed((): MenuItem[] => {
  const { profile } = useProfileStore()
  return [
    { label: 'Application Tracking', icon: 'fa-solid fa-briefcase' },
    { label: 'Bookmarked', icon: 'fa-regular fa-bookmark' },
    { label: 'Notifications', icon: 'fa-regular fa-bell', tip: profile.notifications.length > 0 ? `${profile.notifications.length}` : null },
    { label: 'Activity Logs', icon: 'fa-solid fa-chart-line' },
    { label: 'Settings', icon: 'fa-solid fa-gear' },
  ]
})