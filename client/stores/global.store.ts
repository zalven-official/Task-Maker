import { defineStore } from 'pinia'



export const useGlobalStore = defineStore('global', () => {

  const loadingCount = ref(0)
  const isLoading = computed(() => loadingCount.value > 0)

  const setLoadingCountValue = (count: number) => {
    loadingCount.value = count
  }

  return { loadingCount, isLoading, setLoadingCountValue }
})