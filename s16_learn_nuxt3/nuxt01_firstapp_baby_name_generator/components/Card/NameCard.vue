
import { EmitFlags } from 'typescript';

import { EmitFlags } from 'typescript';
<script setup lang="ts">
// you got the name
interface PropsType {
  name: String;
}

const props = defineProps<PropsType>()

// <<<<<Props>>>>>
const { name } = props;

// <<<<<Emits>>>>>
const emit = defineEmits(["removeCardEmit"]);

// for triggering a event
const removeNamefunc = () => {
  emit("removeCardEmit");
  // emit("removeCardEmit", index);  你这里不需要 用index
}


</script>



<template>
  <div class="card">
    {{ name }}
    <!-- this is a close btn -->
    <!-- if you want to detelte this card, then you need to affect the "filteredResultNames" inside of father components(app.vue) -->
    <p @click="removeNamefunc">x</p>
  </div>
</template>


<style scoped>
.card {
  background-color: rgb(27, 60, 138);
  width: 15%;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: .5rem 1rem;

  /*for displaying the text in the center*/
  display: flex;
  flex-direction: column;
  /* flex 方向 center*/
  justify-content: center;
  /* flex 方向 的垂直方向 center*/
  align-items: center;
  text-align: center; /* This centers text horizontally if it spans multiple lines, 假如文字过长， 分成几行， 这几行也居中 */

  /* for the delete icon*/
  position: relative;
}

.card p {
  position: absolute;
  top: -30%;
  right: 5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.178);
}

</style>
