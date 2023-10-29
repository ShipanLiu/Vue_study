// https://nuxt.com/docs/api/configuration/nuxt-config
// 更改过了 config file， 要重新 npm run dev
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],

  // 我想要使用 botstrap：可以用npm，也可以使用 CDN
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" }
      ]
    }
  }
})
