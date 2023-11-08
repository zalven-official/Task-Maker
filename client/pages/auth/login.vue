<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <LoginForm />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import LoginForm from '@/components/user/LoginForm.vue'
definePageMeta({
  middleware: ['guest']
})
</script>