
import { updateAppConfig } from '#app'
import { defuFn } from '/Volumes/D/Z_Frond_Back_workplace/06_Front_end/03_Vue/Vue_study/s16_learn_nuxt3/nuxt01_firstapp_baby_name_generator/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
