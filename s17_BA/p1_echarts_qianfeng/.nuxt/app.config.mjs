
import { updateAppConfig } from '#app'
import { defuFn } from 'E:/Z_Frond_Back_workplace/06_Front_end/03_Vue/Vue_study/s17_BA/p1_echarts_qianfeng/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "test"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
