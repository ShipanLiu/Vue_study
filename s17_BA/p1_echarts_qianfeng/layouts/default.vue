<!--  注意命名， 就应该叫 default.vue -->

<script setup lang="ts">
import Headbar from "@/components/headbar/headerbar.vue"




</script>


<template>
  <div id="main-layout" class="flex flex-col w-screen h-screen bg-gray-100">
    <!-- Header area -->
    <header class="text-white w-full h-16 flex items-center px-4">
      <!-- Navigation content goes here -->
      <Headbar />
    </header>

    <!-- Sidebar and main area -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar area -->
      <aside class=" w-1/12  h-full overflow-y-auto">
        <!-- Sidebar content goes here -->
      </aside>

      <!-- Main content area -->
      <main class="flex-1 bg-white overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>


<style scoped>


</style>
