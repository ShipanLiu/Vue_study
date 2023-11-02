<script setup lang="ts">

const cityName = ref<string>("Baixiang");
const inputValue = ref<string>("");

// rename the "data" to "city", const { data: city, error },  but here you should give the API type.
// const { data, error } = await useFetch(() => `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=c00c13b8fb810d0ca140b123119eadb9`);

// any 相当于告诉 ts， 你不要检测 city 的 TYPE 了。

// 为什么上面的不用？我们要更加复杂一点：response bearbeiten + some nmore logic
// await is used to handle a Promise returned by the useAsyncData function.
const { data } = await useAsyncData(
  "cityData",
  // 这里 我期待你给我return 一个 Promise， 来配合前面的 await, 下面的cod是演示
  // () => {
  //   return new Promise(() => {
  //     return {
  //       name: "Bochum",
  //       weather: [{ icon: "01n" }],
  //       main: { temp: 30 },
  //     }
  //   })
  // }

  // 开始真正的fetch, 这是官网上的推荐
  // () => $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=c00c13b8fb810d0ca140b123119eadb9`)

  // 下面是教程上的写法， 包含更多的逻辑
  () => {
    const response = $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=c00c13b8fb810d0ca140b123119eadb9`);
    return response;
  }
)


const city = ref<any>(data);





const searchWeather = () => {
  // format the search string:   Los Angeles ==转变==> Los+Angeles
  const formatedSearch = inputValue.value.trim().split(" ").join("+");
  cityName.value = formatedSearch;
  inputValue.value = "";

  // now the quesition: how can you make a new API call if the searchValue changes?
  // solution: 把 useFetch() 里面的内容换成一个 func， func 会被 recalled
}

</script>


<template>
  <!-- set the hight of screensize | display: relative(kinder肯定是 absolute) |  overflow 的 全部 hidden -->
  <div class="h-screen relative overflow-hidden">
    {{ city }}
    <img src="" alt="">
    <!-- I want to have a  -->
    <!-- the width and hight should be 100% | 距离top 是 0 |  overlay是我自己定义的style -->
    <div class="absolute w-full h-full top-0 overlay"></div>
    <!-- 下面的 div 里面盛放 searchbar。。。 -->
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">{{ city?.name }}</h1>
          <p class="text-2xl mt-2 text-white font-extralight">Sunday Dec 9th</p>
          <img class="w-56 icon" :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" alt="image not found">
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">{{ city?.main.temp }}°</p>
        </div>
      </div>
      <!-- this is searchbar -->
      <div class="mt-20">
        <input v-model="inputValue" type="text" class="w-1/2 h-10" placeholder="city name">
        <button class="w-20 h-10 text-white bg-sky-400" @click="searchWeather">Search</button>
      </div>
    </div>
  </div>
</template>




<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
.icon {
  margin-left: -2.75rem;
  margin-top: -2.75rem;
}
</style>
