<script setup lang="ts">

import { Gender, Popularity, Length } from "@/data";


// because we are using ts, we can use interface to define the TYPE
interface OptionPropType {
  // what(or which keys) do you want do you want your "option" have
    category: string;
    title: string;
    buttons: Gender[] | Popularity[] | Length[];
}

interface MyChoicePropType {
  gender: Gender;
  popularity: Popularity;
  length: Length;
  // index signature that tells TypeScript that a MyChoicePropType object
  // can be indexed with a string, and that the value at that index will be
  // one of Gender, Popularity, or Length.
  [key: string]: Gender | Popularity | Length;
}

// 这是总的 PropsType
interface PropsType {
  option: OptionPropType;
  // 这是 父亲传进来的 props
  myChoice: MyChoicePropType;
}


// 把 props 定义出来, 下面不用写 props.option.title,   只用写 option.title
const props = defineProps<PropsType>();

// Now you can destructure your props，相当于 const option = props.option
// 在Father component 里面传递需要用 hyphen,:my-choice="options", 这里 my-choice 自动转化成 myChoice
const { option, myChoice } = props;

// define a function for attaching classes for buttons
const computeClassesForButton = (value: Gender | Popularity | Length, index:number) => {
  // first define which classes will be needed
  const classArr: string[] = [];
  if(myChoice[option.category] === value) {
    classArr.push("btn-active");
  }

  if(index === 0) {
    classArr.push("option-btn-left");
  }

  if(index === option.buttons.length - 1) {
    classArr.push("option-btn-right");
  }

  // we need to return a string,  分隔符是 " "
  return classArr.join(" ")
}


</script>




<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->




<template>
  <div class="sub-options-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons-container">
      <button
        v-for="(value, index) in option.buttons"
        :key="index"
        :class="computeClassesForButton(value, index)"
        class="option-btn"
        @click="myChoice[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>



<!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->





<style scoped>

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

</style>