<script setup lang="ts">
import { Gender, Popularity, Length, names } from "./data";

// 使用 ts
// let myName: string = "shipan";

// Objects has also TYPE, we can define the type useing "interface"
// 规定了 如果你是 OptionType的话， 那么你就只能有 这三个keys， 不能有更多的 key
interface OptionType {
  gender: string;
  popularity: string;
  length: string;
}
// 规定 比图Gender 的choices， 不能有其他的选项

// save all your 3 options into a object, nuxt3 wil import automatically
// 可以使用 :OptionType, 也可以使用 <OptionType>
const options = reactive<OptionType>({
  gender: Gender.UNISEX,
  popularity: Popularity.TRENDY,
  length: Length.ALL,
});

const computeName = () => {
  const genderFilteredNames = names
    .filter(name => name.gender === options.gender)
    .filter(name => name.popularity === options.popularity)
    .filter(name => name.length === options.length);



};






// define the computed result names as an array
const filteredResultNames = ref<string[]>([]);
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>choose options ===> click "findname"</p>
    <div class="options-container">
      <div class="sub-options-container">
        <h4>1) choose a gender</h4>
        <div class="option-buttons-container">
          <button
            :class="options.gender === Gender.BOY && 'btn-active'"
            class="option-btn option-btn-left"
            @click="options.gender = Gender.BOY"
          >
            Boy
          </button>
          <button
            class="option-btn"
            :class="{ 'btn-active': options.gender === Gender.UNISEX }"
            @click="options.gender = Gender.UNISEX"
          >
            Unisex
          </button>
          <button
            class="option-btn option-btn-right"
            :class="{ 'btn-active': options.gender === Gender.GIRL }"
            @click="options.gender = Gender.GIRL"
          >
            Girl
          </button>
        </div>
      </div>
      <div class="sub-options-container">
        <h4>2) choose the name popularity</h4>
        <div class="option-buttons-container">
          <button
            :class="options.popularity === Popularity.TRENDY && 'btn-active'"
            class="option-btn option-btn-left"
            @click="options.popularity = Popularity.TRENDY"
          >
            Trendy
          </button>
          <button
            :class="options.popularity === Popularity.UNIQUE && 'btn-active'"
            class="option-btn option-btn-right"
            @click="options.popularity = Popularity.UNIQUE"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="sub-options-container">
        <h4>3) choose the name length</h4>
        <div class="option-buttons-container">
          <button
            :class="options.length === Length.LONG && 'btn-active'"
            class="option-btn option-btn-left"
            @click="options.length = Length.LONG"
          >
            Long
          </button>
          <button
            :class="options.length === Length.ALL && 'btn-active'"
            class="option-btn"
            @click="options.length = Length.ALL"
          >
            All
          </button>
          <button
            :class="options.length === Length.SHORT && 'btn-active'"
            class="option-btn option-btn-right"
            @click="options.length = Length.SHORT"
          >
            Short
          </button>
        </div>
      </div>
      <div>
        <button class="btn-primary" @click="computeName">Find Names</button>
      </div>
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

.sub-options-container {
  margin-bottom: 2rem;
}

.option-buttons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.option-btn {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  font-weight: 200;

  cursor: pointer;
  text-decoration: none;

  /*这个定义牛逼, center the text inside of the buttons*/
  display: flex;
  align-items: center;
  justify-content: center;

  /*define outline*/
  outline: 0.15rem solid rgb(249, 87, 89);
  /*因为 outline + border 会不好看*/
  border: none;

  padding: 0.8rem;
}

.option-btn-left {
  border-radius: 0.5rem 0 0 0.5rem;
}

.option-btn-right {
  border-radius: 0 0.5rem 0.5rem 0;
}

.btn-active {
  background-color: #f84447;
  color: white;
}

.option-btn.submit-btn {
  outline: none;
  border-radius: 0.5rem;
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
</style>
