// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/ui", "@element-plus/nuxt"],
  build: {
    transpile: ["echarts", "zrender", "tslib"],
  },
  // for tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],

  // elementplus
  elementPlus: {}
})
