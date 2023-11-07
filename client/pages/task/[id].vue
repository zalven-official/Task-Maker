<template>
  <NuxtLayout>
    <template #header>
      <TaskNavbar />
    </template>
    <template #body>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <TaskForm :readonly="readonly" :id="id" />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { Breadcrumbs } from '~/types';
const route = useRoute()

const id = route.params.id.toString()
const readonly = computed(() => route.query.readonly === 'true');

const breadcrumbs = computed(() => [
  { path: '/task', text: 'Home', params: {} },
  { path: `/task/${id}`, text: route.query.readonly ? 'View Task' : 'Edit Task', params: {} },
])

</script>