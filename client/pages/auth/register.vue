<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <RegisterForm />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import RegisterForm from '@/components/user/RegisterForm.vue'
definePageMeta({
  middleware: ['guest']
})
</script>