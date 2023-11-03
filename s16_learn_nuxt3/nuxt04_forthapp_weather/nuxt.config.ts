// https://nuxt.com/docs/api/configuration/nuxt-config
// 更改过了 config file， 要重新 npm run dev
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt"],

  // 参考：https://tailwindcss.com/docs/guides/nuxtjs
  css: ["~/assets/css/main.css"],

  // 参考：https://tailwindcss.com/docs/guides/nuxtjs
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // runtime config: To expose config and environment variables to the rest of your app, you will need to define runtime configuration in your nuxt.config file, using the runtimeConfig option.
  runtimeConfig: {
    // The private keys which are ONLY available within server-side
    exampleApiSecret: "123", // 可以用 .env内部的内容
    // Keys within public, will be also exposed to the client-side
    public: {
      appid: process.env.WEATHER_APP_SECRET // 调用.env内部的内容
    }
  }

  // 我想要使用 botstrap：可以用npm，也可以使用 CDN
  // app: {
  //   head: {
  //     link: [
  //       { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" }
  //     ]
  //   }
  // }
})
