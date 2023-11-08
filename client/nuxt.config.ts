// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.npm_package_name || "UI Accuracy",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  components: true,
  modules: [
    ['@pinia/nuxt', { disableVuex: false }],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vee-validate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  imports: {
    dirs: ['./stores']
  },
  plugins: [
    "~/plugins/fontawesome.plugin.ts",
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8000',
    },
  },
})
