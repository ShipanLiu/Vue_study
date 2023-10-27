<template>
  <div class="error-layout-container">
    <!-- 在使用的时候， 需要 1.create template, 2.使用 #header-place -->
    <slot name="header-place" />
    <div>
      <!-- this is a sad face -->
      <img
        src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
        alt=""
      >
    </div>
    <slot name="redirectEl-place" />
  </div>
</template>

<style scoped>
img {
  width: 10rem;
}

.error-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
