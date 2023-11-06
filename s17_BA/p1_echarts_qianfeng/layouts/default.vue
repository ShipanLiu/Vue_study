<!--  注意命名， 就应该叫 default.vue -->

<script setup lang="ts">

</script>


<template>
  <!-- can't use container, because container will set a max-width, 阴影面积不会完全覆盖-->
  <div class="h-screen w-screen relative bg-gray-200 overflow-hidden">
    <slot />
  </div>
</template>


<style scoped>


</style>
