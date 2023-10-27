<!--因为可能有上千家 的 restaurants，你不可能创建那么多vue 文件 ==》 [name] 是 dynamic-->
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
// import { watchEffect } from "vue";

import { useRestaurantsStore } from "@/stores/restaurantsStore";
// import RestaurantAd from "@/components/restaurant/RestaurantAd.vue";


const restaurantsStore = useRestaurantsStore();
const route = useRoute();
// const router = useRouter();
const restaurantName = route.params.name;
// we get the "restaurantName" from the path, and using this "restaurantName", we can get the Obj
const restaurant = restaurantsStore.restaurantsArr.find((obj) => obj.name === restaurantName);

// watchEffect(() => {
//   if(!restaurant) {
//     router.push("/404");
//   }
// });


// useMeta是 自定义 header 用的， 但是 需要install @nuxtjs/composition-api， 和当前的nuxt 版本不匹配。
// useMeta({
//   title: restaurant ? restaurant.name : "404 - Restaurant Not Found",
//   meta: [
//     {
//       name: "viewport",
//       content: "width=device-width",
//     },
//   ],
// });


</script>

<template>
  <div>
    <!-- 套用 ad-layout.vue  这个 layout -->
    <NuxtLayout v-if="restaurant" name="ad-layout">
      <div class="restaurant-container">
        <div class="image-container">
          <img :src="restaurant.imageUrl" alt="">
        </div>
        <div class="info-container">
          <h1>{{ restaurant.name }}</h1>
          <div class="stats-container">
            <h5>Revenue (in billions)</h5>
            <p>${{ restaurant.revenue }}</p>
          </div>
          <div class="stats-container">
            <h5>Number of Stores</h5>
            <p>{{ restaurant.numberOfStores }}</p>
          </div>
          <p class="content">{{ restaurant.content }}</p>
        </div>
      </div>
    </NuxtLayout>

    <div v-else class="restaurant-not-found">
      <NuxtLayout name="error-layout">
        <template #header-place>
          <h1>Restaurant not found</h1>
        </template>

        <template #redirectEl-place>
          <button
            class="btn btn-primary btn-lg"
            @click="$router.push('/restaurants')"
          >
            Go Back
          </button>
        </template>
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped>
.restaurant-container {
  display: flex;
}
.image-container {
  width: 75%;
  height: 95vh;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.restaurant-not-found {
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.info-container {
  padding: 3rem;
  width: 50%;
}
.info-container h1 {
  text-transform: uppercase;
  font-size: 6rem;
  margin-bottom: 3rem;
}
.stats-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
}
.stats-container h5 {
  width: 20rem;
  font-size: 2rem;
  margin: 0;
  margin-right: 5rem;
}
.stats-container p {
  font-size: 2rem;
  margin: 0;
}
.content {
  font-size: 1.5rem;
  margin-top: 4rem;
}

img {
  width: 10rem;
}
</style>
