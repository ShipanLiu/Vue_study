<script setup lang="ts">

// rename the "data" to "city"
const { data: city, error } = await useFetch("https://api.openweathermap.org/data/2.5/weather?q=Baixiang&appid=c00c13b8fb810d0ca140b123119eadb9");

</script>


<template>
  <!-- set the hight of screensize | display: relative(kinder肯定是 absolute) |  overflow 的 全部 hidden -->
  <div class="h-screen relative overflow-hidden">
    <img src="" alt="">
    <!-- I want to have a  -->
    <!-- the width and hight should be 100% | 距离top 是 0 |  overlay是我自己定义的style -->
    <div class="absolute w-full h-full top-0 overlay"></div>
    <!-- 下面的 div 里面盛放 searchbar。。。 -->
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h5>{{ city }}</h5>
          <h5>{{ error }}</h5>
          <h1 class="text-7xl text-white">{{ city?.name }}</h1>
          <p class="text-2xl mt-2 text-white font-extralight">Sunday Dec 9th</p>
          <img class="w-56 icon" src="" alt="">
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">53°</p>
        </div>
      </div>
      <!-- this is searchbar -->
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="city name">
        <button class="w-20 h-10 text-white bg-sky-400">Search</button>
      </div>
    </div>
  </div>
</template>




<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

</style>
