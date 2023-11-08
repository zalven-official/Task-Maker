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
  console.log(`${config.public.baseURL}/${normalizedPath}`)
  return useFetch(`${config.public.baseURL}/${normalizedPath}`, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: { ...headers, ...options?.headers }
  })
}
export async function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
  if (process.client) await ApiFetch('/sanctum/csrf-cookie')
  return ApiFetch(path, options)

}