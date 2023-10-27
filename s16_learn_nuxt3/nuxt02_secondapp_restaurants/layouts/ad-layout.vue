<!-- 有一些page 需要加上 RestaurantAd 这个component，但不是对每一个 page 都要 -->
<!-- Please note the layout name is normalized to kebab-case, so if your layout file is named errorLayout.vue, it will become error-layout when passed as a name property to <NuxtLayout />. -->
<!-- 上面的命名规则一定要注意 -->
<template>
  <div>
    <slot />
    <RestaurantAd />
  </div>
</template>
