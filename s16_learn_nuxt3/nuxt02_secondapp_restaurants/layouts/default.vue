<!-- here is teh default layout that should be applied to every single page -->
<!-- for  example almost each page shoudl contain nav bar, the problem is: you need -->
<!-- to add nav componnets to each .vue file, this is not good -->
<!-- 名字是固定的， 就必须是 default.vue -->
<script setup lang="ts">
import Nav from "@/components/nav/Nav.vue"
</script>

<template>
  <div>
    <div class="container">
      <Nav />
      <!-- slot 就是你调用的时候， 写点东西进来。 -->
      <slot />
    </div>
  </div>
</template>
