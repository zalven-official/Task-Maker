import { defineStore } from 'pinia'


export const useToastStore = defineStore('toast', () => {

  const successToast = (title: String, message?: String) => {
    if (process.client)
      useNuxtApp().$toast.success(`${title}${message ? '\n' + message : ''}`, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
  }

  const errorToast = (title: String, message?: String) => {
    if (process.client)
      useNuxtApp().$toast.error(`${title}${message ? '\n' + message : ''}`, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
  }

  const infoToast = (title: String, message?: String) => {
    if (process.client)
      useNuxtApp().$toast.error(`${title}${message ? '\n' + message : ''}`, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
  }

  const warnToast = (title: String, message?: String) => {
    if (process.client)
      useNuxtApp().$toast.error(`${title}${message ? '\n' + message : ''}`, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
  }

  return {
    successToast,
    errorToast,
    infoToast,
    warnToast,
  }
})