<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <div class="flex justify-center w-full">
        <nuxt-link v-for="link in links" :key="link.to" :to="link.to">
          <span class="btn btn-primary m-3 hover:opacity-100 text-sm">{{ link.text }}</span>
        </nuxt-link>
        <button v-if="isLoggedIn" @click="logout" class="btn btn-primary m-3 hover:opacity-100 text-sm">
          Logout
        </button>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { isLoggedIn, logout } = useUserStore()

const authPages = [
  { to: '/auth/login', text: 'Login' },
  { to: '/auth/register', text: 'Register' },
]
const publicPages = [
  { to: '/task', text: 'Task' },
  { to: '/profile', text: 'UI Accuracy Test' },
]

const links = computed(() => {
  if (isLoggedIn)
    return [...publicPages]
  return [...publicPages, ...authPages]
})
</script>