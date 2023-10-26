<!-- Nuxt3  会自动加载pages 下面的  index.vue  这是用来取代 app.vue 文件的。 -->

<script setup>
import Nav from "@/components/nav/Nav.vue"
import RestaurantTable from "@/components/restaurant/RestaurantTable.vue";

</script>
<template>
  <div>
    <Nav />
    <div class="container">
      <RestaurantTable />
    </div>
  </div>
</template>


<style scoped>


</style>
