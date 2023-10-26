<!-- Nuxt3  会自动加载pages 下面的  index.vue  这是用来取代 app.vue 文件的。 -->

<script setup>
import Nav from "@/components/nav/Nav.vue"
</script>
<template>
  <div>
    <Nav />
    <div class="container">
      <!-- http://localhost:3001/restaurants,  会自动在pages 下面找 restaurants.vue 或者 restaurants folder(然后夹在里面的index file) -->
      <a href="/restaurants">restaurantslist</a>
    </div>
  </div>
</template>


<style scoped>


</style>
