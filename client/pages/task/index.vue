<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <TaskView />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Breadcrumbs } from '~/types';

const breadcrumbs = ref<Breadcrumbs[]>([
  { path: '/task', text: 'Home', params: {} },
])

</script>