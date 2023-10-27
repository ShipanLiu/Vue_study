<!-- Nuxt3  会自动加载pages 下面的  index.vue  这是用来取代 app.vue 文件的。 -->
<!-- 注意： Nuxt3 的 routing 就是根据 pages 下面的 structure 来决定 的 -->



<script setup lang="ts">
// import Nav from "@/components/nav/Nav.vue"
</script>


<template>
  <div>
    <!-- 加上tab 的 title 和 图标 -->
    <Html :lang="'en-US'">
      <Head>
        <Title>Restaurantly </Title>
        <Meta name="description" content="My page is cool" />
        <Link
          rel="preload"
          href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
          as="script"
        />
      </Head>
    </Html>
    <div class="container">
      <!-- http://localhost:3001/restaurants,  会自动在pages 下面找 restaurants.vue 或者 restaurants folder(然后夹在里面的index file) -->
      <a href="/restaurants">restaurantslist</a>
    </div>
  </div>
</template>


<style scoped>


</style>
