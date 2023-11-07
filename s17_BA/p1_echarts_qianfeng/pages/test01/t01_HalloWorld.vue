<script setup lang="ts">
import { onMounted, ref } from "vue"
// echarts core模块的引入
import * as echarts from "echarts"

// 创建 Dom 引用  ==》  <div ref="myChart" class="w-40 h-40"></div>
// initialize the value to "null" if you don't do this: then the value will be initialized to "undefined"
const myChart = ref<HTMLElement | null>(null);

// onMounted 是在加载数据之后
onMounted(() => {
  // initialize echart instance based on the chosen DOM
  const chart = echarts.init(myChart.value);

  const option = {
    title: {
      text: "niubi"
    }
  }

  chart.setOption(option);
})



</script>


<template>
  <div>
    i am main
  </div>
</template>


<style scoped>


</style>
