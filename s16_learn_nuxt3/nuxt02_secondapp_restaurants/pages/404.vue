<!-- 当你输入： http://localhost:3001/restaurants/jier 的时候， jier不是一个 restaurant，   -->
<!-- 由于我们会根据 jier 去查找 restaurant Object， 所以会出错 -->
<!-- pages/404.vue  Nuxt会直接 load 这个 page， 当 有error 的时候 -->

<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue"

</script>

<template>
  <div class="container">
    <Nav />
    <h1>page does not exist</h1>
    <NuxtLink to="/restaurants">Go Back</NuxtLink>
  </div>
</template>
