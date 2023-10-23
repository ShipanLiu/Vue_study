<!-- Nuxt3  会自动加载pages 下面的  index.vue  这是用来取代 app.vue 文件的。 -->


<script setup>
import Nav from "@/components/nav/Nav.vue"

</script>



<template>
  <div>
    <Nav />
    <div class="container">
      <h1>Welcome to Restaurants</h1>
      <a href="/restaurants">go to restaurants</a>
    </div>
  </div>
</template>





<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>
