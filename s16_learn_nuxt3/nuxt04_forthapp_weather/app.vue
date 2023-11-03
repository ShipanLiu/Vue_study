<script setup lang="ts">
// cookie 是一个 {}， 里面只有一个 key names "city", the value should be a string.
const cookie = useCookie<{ city: string }>("city") // city is the key in cookies
const config = useRuntimeConfig();

// assign cookie first
if(!cookie.value) {
  cookie.value = {
    city: "Berlin",
  }
}


const cityName = ref<string>(cookie.value.city);
const inputValue = ref<string>("");
const backgroundImgArr = ref<string[]>([
  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80"
])
const backgroundImg = ref<string>("");

// rename the "data" to "city", const { data: city, error },  but here you should give the API type.
// const { data, error } = await useFetch(() => `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=c00c13b8fb810d0ca140b123119eadb9`);

// any 相当于告诉 ts， 你不要检测 city 的 TYPE 了。

// 为什么上面的不用？我们要更加复杂一点：response bearbeiten + some nmore logic
// await is used to handle a Promise returned by the useAsyncData function.
// When you use useAsyncData, you don't need to declare an async function yourself because useAsyncData is designed to handle the asynchronous operation for you.
const { data, refresh } = await useAsyncData(
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
  async () => {
    let response: any;
    try {
      // https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=c00c13b8fb810d0ca140b123119eadb9
      response = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}`, {
        params: {
          units: "metric",
          // save the appid data into the ".env" file
          // process: The global object that Node.js provides as a way to interact with the running process. env: A property of process that holds an object containing the user environment.
          // 你也可以定义在 nuxt.config.ts 的 runtime config 里面
          // appid: process.env.WEATHER_APP_SECRET
          appid: config.public.appid, // 使用 nuxt.config.ts里面的 runtime
        }
      });

      // 如果search 成功之后， 假如cookie
      // set cookies
      cookie.value = {
        city: cityName.value,
      }

      // console.log(response);
      // now you can use "response" and do a lot of logic
      const temp = response.main.temp;

      if(temp == null) {
        console.log("something wrong with fetch")
        return;
      }

      if(temp <= -10) {
        backgroundImg.value = backgroundImgArr.value[0];
      } else if(temp > -10 && temp <= 0) {
        backgroundImg.value = backgroundImgArr.value[1];
      } else if(temp > 0 && temp <= 10) {
        backgroundImg.value = backgroundImgArr.value[2];
      } else {
        backgroundImg.value = backgroundImgArr.value[3];
      }
    } catch (e) {

    }
    return response;
  }, {
    // define which "state" change, then refresh
    watch: [
      cityName,
    ]
  }
)


const city = ref<any>(data);





const searchWeather = () => {
  // format the search string:   Los Angeles ==转变==> Los+Angeles
  const formatedSearch = inputValue.value.trim().split(" ").join("+");
  cityName.value = formatedSearch;
  inputValue.value = "";

  // 在使用useFetch的情况下 now the quesition: how can you make a new API call if the searchValue changes? solution: 把 useFetch() 里面的内容换成一个 func， func 会被 recalled


  // 在使用useAsyncData的情况下, refetch the data，  可以使用 watch parameter 来代替
  // refresh();
}

</script>


<template>
  <!-- set the hight of screensize | display: relative(kinder肯定是 absolute) |  overflow 的 全部 hidden -->
  <div class="h-screen relative overflow-hidden">
    <img :src="backgroundImg" alt="">
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
