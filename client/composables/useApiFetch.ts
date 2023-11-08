import type { UseFetchOptions } from 'nuxt/app'

function ApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()
  let headers: any = {}
  const token = useCookie('XSRF-TOKEN')
  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["refer", "cookie"])
    }
  }
  const normalizedPath = typeof path === 'string' ? (path.startsWith('/') ? path.slice(1) : path) : path;
  return useFetch(`${config.public.baseURL}/${normalizedPath}`, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: { ...headers, ...options?.headers }
  })
}
export async function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
  const globalStore = useGlobalStore()

  const { loadingCount } = storeToRefs(globalStore)
  const { setLoadingCountValue } = globalStore

  setLoadingCountValue(loadingCount.value + 1)

  if (process.client) await ApiFetch('/sanctum/csrf-cookie')
  const result = await ApiFetch(path, options)

  setLoadingCountValue(loadingCount.value - 1)
  return result
}