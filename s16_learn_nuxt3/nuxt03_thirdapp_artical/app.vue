<script setup lang="ts">
// useDarkMode 是可以被Nuxt 自动import 的。 不需要下面的 import
import useDarkMode from "@/composables/useDarkMode"

const { isDarkMode } = useDarkMode();

// const lala;
</script>

<template>
  <div :style="isDarkMode ? { backgroundColor: 'black' } : undefined">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>
