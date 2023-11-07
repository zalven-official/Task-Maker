<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <TaskForm />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { Breadcrumbs } from '~/types';

const breadcrumbs = ref<Breadcrumbs[]>([
  { path: '/task', text: 'Home', params: {} },
  { path: '/task/create', text: 'Create Task' },
])

</script>