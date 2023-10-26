<script setup lang="ts">
import { useRestaurantsStore } from "@/stores/restaurantsStore"
import RestaurantRow from "@/components/restaurant/RestaurantRow.vue"

const restaurantsStore = useRestaurantsStore();

// first table only show the first 25 restaurants
// I don;t want the data to be reactive, so i don;t use "reactive" or "ref"
const restaurantsOrganized = {
  first: [...restaurantsStore.restaurantsArr].splice(0, 25), // give me the first 25
  second: [...restaurantsStore.restaurantsArr].splice(25, 25), // start from index 25 and get the rest 25 data
};
</script>

<template>
  <div class="table">
    <h1>TOP 50: THE RANKING</h1>
    <div class="table-container">
      <div class="table-col">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow
          v-for="(restaurant, index) in restaurantsOrganized.first"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="index"
        />
      </div>
      <div class="table-col">
        <RestaurantRow :isHeader="true" />
        <RestaurantRow
          v-for="(restaurant, index) in restaurantsOrganized.second"
          :key="restaurant.id"
          :name="restaurant.name"
          :rank="restaurant.rank"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin: 3rem 0;
}
.table h1 {
  margin-bottom: 2rem;
}
.table-container {
  display: flex;
  justify-content: space-between;
}
.table-col {
  width: 48%;
}
</style>
