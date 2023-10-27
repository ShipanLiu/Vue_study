<!-- Nuxt3  会自动加载pages 下面的  index.vue  这是用来取代 app.vue 文件的。 -->

<script setup>
// import Nav from "@/components/nav/Nav.vue"
import RestaurantTable from "@/components/restaurant/RestaurantTable.vue";
// import RestaurantAd from "@/components/restaurant/RestaurantAd.vue";
</script>
<template>
  <div>
    <!-- 加上tab 的 title 和 图标 -->
    <Html :lang="'en-US'">
      <Head>
        <Title>top 50 restaurants</Title>
        <Meta name="description" content="My page is cool" />
        <Link
          rel="preload"
          href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
          as="script"
        />
      </Head>
    </Html>
    <NuxtLayout name="ad-layout">
      <div class="container">
        <RestaurantTable />
      </div>
    </NuxtLayout>
  </div>
</template>




<style scoped>


</style>
