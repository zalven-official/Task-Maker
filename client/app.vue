<template>
  <main data-theme="goteam" class="w-full h-full min-h-screen">
    <NuxtLoadingIndicator />
    <NuxtPage />
    <Loading v-if="isLoading" />
  </main>
</template>
<script setup lang="ts">
const { isLoading } = storeToRefs(useGlobalStore())
const router = useRouter()
router.beforeEach((to, from, next) => {
  next()
})
</script>