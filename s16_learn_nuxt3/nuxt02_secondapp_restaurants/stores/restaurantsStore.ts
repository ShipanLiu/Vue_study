import { defineStore } from "pinia"
import restaurants from "@/data.json";
import type { RestaurantType } from "@/types/stores/RestaurantTypes"

// the first argument "restaurants" is a unique id of the store across your application
// 这里之所以 export 是想让 其他 stores 也能 import 你。
export const useRestaurantsStore = defineStore("restaurants", () => {

  const restaurantsArr = ref<RestaurantType[]>(restaurants);



  // 内部使用 restaurantsArr， 的时候， 需要用.value, 但是外部使时候， 只用 store.restaurantsArr, 不用 .value
  return { restaurantsArr }
})
