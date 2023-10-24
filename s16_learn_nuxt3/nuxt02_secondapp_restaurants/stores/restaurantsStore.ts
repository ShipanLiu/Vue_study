import { defineStore } from "pinia"

// the first argument "restaurants" is a unique id of the store across your application
// 这里之所以 export 是想让 其他 stores 也能 import 你。
export const useRestaurantsStore = defineStore("restaurants", () => {
  const count = ref(0)
  const name = ref("jier");

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment }
})
