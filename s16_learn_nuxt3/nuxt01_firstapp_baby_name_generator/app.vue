<script setup lang="ts">
import { Gender, Popularity, Length, names } from "./data";
import NameCard from "@/components/Card/NameCard.vue"

// 使用 ts
// let myName: string = "shipan";

// Objects has also TYPE, we can define the type useing "interface"
// 规定了 如果你是 OptionType的话， 那么你就只能有 这三个keys， 不能有更多的 key
interface OptionType {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
// 规定 比图Gender 的choices， 不能有其他的选项

// save all your 3 options into a object, nuxt3 wil import automatically
// 可以使用 :OptionType, 也可以使用 <OptionType>
const options = reactive<OptionType>({
  gender: Gender.UNISEX,
  popularity: Popularity.TRENDY,
  length: Length.ALL,
});

// define the computed result names as an array
const filteredResultNames = ref<string[]>([]);


// 为了组件化，把菜单 create as an array
const optionsArray = [
  {
    category: "gender",
    title: "1) Choose a gender",
    buttons: [Gender.GIRL, Gender.BOY, Gender.UNISEX],
  },
  {
    category: "popularity",
    title: "1) Choose a popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    category: "length",
    title: "1) Choose a length",
    buttons: [Length.ALL, Length.LONG, Length.SHORT],
  }
]

const computeName = () => {
  const filteredNames = names
    .filter(name => name.gender === options.gender)
    .filter(name => name.popularity === options.popularity)
    .filter((name) => {
      // Length: if you selected "All"
      if(options.length === Length.ALL) {
        return true;
      } else {
        // Length: if you selected "Long" or "Short"
        return options.length === name.length;
      }
    });

  // your result should be a string[] but not a Name[], so you have to use map() to build a new array
  filteredResultNames.value = filteredNames.map(obj => obj.name)
};


// here you should use the "index" not the cardId
const removeCard = (index: number) => {
  // here you can not use filter(), because you are using "index" but not "cardId"
  // 为什么要有 [...] 这一步：because don't work on the original array, just create a new one(sometimes is better)
  console.log(filteredResultNames);
  // 注意splice 返回的不是 new array， 而是被 spliced 的 哪个。
  const filteredResultNamesCopy = [...filteredResultNames.value]; // original filteredResultNames.value array remains unchanged because splice() was called on a copy of the array.
  filteredResultNamesCopy.splice(index, 1);
  filteredResultNames.value = filteredResultNamesCopy;

}


</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>choose options ===> click "findname"</p>
    <div class="options-container">
      <!-- 这个 Component 直接使用就行了， Nuxt 会自动import，tagName should be same as fileName-->
      <ChoiceOption v-for="(option,index) in optionsArray" :key="index" :option="option" :my-choice="options" />
      <div>
        <button class="btn-primary" @click="computeName">Find Names</button>
      </div>
    </div>
    <div class="cards-container">
      <!-- 最好import，也可以不import，使用 subfoldername + componentname ==》 CardNameCard -->
      <!-- 也可以写成 @removeCardEmit="removeCard(index)“， 这里的index 是  v-for="(name, index) in filteredResultNames" 里面的index-->
      <NameCard v-for="(name, index) in filteredResultNames" :key="index" :name="name" @removeCardEmit="() => removeCard(index)" />
    </div>
  </div>
</template>











<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 60rem;
  /* make the text inside of container center */
  text-align: center;
  margin: 0 auto;
  /* Flexbox properties to center children */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
}

.container h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  /*Child Elements with Absolute Positioning:
  If any child elements inside the .options-container have position: absolute;
   then they will be  positioned relative to the nearest positioned ancestor.
   If .options-container has position: relative;, it becomes that ancestor,
   allowing you to position the child elements relative to it. Without position: relative;
   these child elements would be positioned relative to the document or the nearest positioned
    ancestor further up the DOM.*/
  margin-bottom: 2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



.btn-primary {
  font-size: 1rem;
  color: white;

  background-color: rgb(249, 87, 89);
  border-radius: 6.5rem;
  border: none;

  margin-top: 1rem;
  padding: 0.75rem 4rem;

  cursor: pointer;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /*the last item at left, not space-around*/
  justify-content: space-between;

  margin-top: 3rem;

}

</style>
