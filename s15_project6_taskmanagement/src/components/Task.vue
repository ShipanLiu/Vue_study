<script setup>
// father给了你 task， 你可以把 task 展示。
// we won't use variable "props" directly, but just use "task" variable
// 对于task 是 没有必要使用 Pinia 的
  const props = defineProps(['task']);

// 现在我们使用Pina
  import {useTasksStore} from '@/stores/taskStore.js';
  const store = useTasksStore();


</script>

<template>
  <div class="task">
    <h3>
      {{ task.name }} - {{task.id}}
    </h3>
    <p>
      {{task.description}}
    </p>
    <div class="task-check">
      <!-- 你的状态 要传给father，怎么办? 用emit event -->
      <input type="checkbox" @click="store.toggleCompleteFunc(task.id)" :checked="task.completed" />
      <label>
        {{task.completed ? "Done" : "To-Do"}}
      </label>
    </div>
  </div>
</template>


<!-- scoped 说明： style值适用于这个文件 -->
<style lang="scss" scoped>

.task {
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
  color: var(--black-color);
  padding: 20px;
  border-radius: 12px;
  position: relative;


  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }


  .task-check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 10px;

    label {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-left: 5px;
      cursor: pointer;
    }

    input {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 0.77px solid #AEAEB2;
      appearance: none;
      cursor: pointer;


      &:checked {
        background-color: #0A7AFF;
        border-color: #0A7AFF;

        &::before {
          content: '';
          display: block;
          width: 4.5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
}

</style>
