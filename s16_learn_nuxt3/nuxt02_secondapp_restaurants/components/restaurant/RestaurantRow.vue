<script setup lang="ts">

// because we are not passing every single props, so we need to make it optional
interface PropsType {
  rank?: number;
  name?: string;
  index?: number;
  isHeader?: boolean;
}

const props = defineProps<PropsType>();
const { name, rank, index, isHeader } = props;
</script>

<template>
  <div v-if="isHeader" class="row">
    <h4 class="header">Rank</h4>
    <h4 class="header">Chain</h4>
  </div>
  <!-- 在PropsType 里面定义的是：index?: string, 就说明 index 可能是 undefinded -->
  <div v-else class="row" :style="(index !== undefined) && (index % 2 === 0) ? { background: 'rgba(128,128,128,0.15)' } : undefined">
    <h4 class="header rank">{{ rank }}</h4>
    <NuxtLink :to="`/restaurants/${name}`" class="header link">{{ name }}</NuxtLink>
  </div>
</template>

<style scoped>

.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  font-size: 1.25rem;
  color: rgb(10, 31, 148);
  margin: 0;
  margin-right: 2rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  width: 4rem;
}
.rank {
  color: black;
}
.link {
  text-decoration: none;
  color: rgb(228, 157, 27);
  width: auto;
  font-weight: 500;
}
</style>
