<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <div class="w-full">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
        <TaskView />
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Breadcrumbs } from '~/types';

const breadcrumbs = ref<Breadcrumbs[]>([
  { path: '/task', text: 'Home', params: {} },
])

</script>