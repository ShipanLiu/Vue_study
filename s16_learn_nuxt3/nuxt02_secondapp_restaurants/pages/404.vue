<!-- 当你输入： http://localhost:3001/restaurants/jier 的时候， jier不是一个 restaurant，   -->
<!-- 由于我们会根据 jier 去查找 restaurant Object， 所以会出错 -->
<!-- pages/404.vue  Nuxt会直接 load 这个 page， 当 有error 的时候 -->

<script setup lang="ts">
// import Nav from "@/components/nav/Nav.vue"
</script>


<!-- 我想把 error.vue 加进来 -->
<template>
  <div class="container">
    <NuxtLayout name="error-layout">
      <!-- header-place 是 layouts/error-layout.vue 里面 slot 的 name，  定位用的 -->
      <template #header-place>
        <h1>page does not exist</h1>
      </template>

      <template #redirectEl-place>
        <NuxtLink to="/restaurants">Go Back</NuxtLink>
      </template>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}

img {
  width: 10rem;
}
</style>
