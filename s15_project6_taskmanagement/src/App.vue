<script setup>
  //ref is only for primitives(value, string, boolean)
  //"reactive" is for (Objects, arrays)
  import { ref, reactive, computed } from 'vue';
  import Task from './components/Task.vue';
  import Filter from './components/Filter.vue';

  import ModelWindow from './components/modal/ModelWindow.vue';
  import AddTask  from './components/modal/AddTask.vue';

  // use Pinia
  import {useTasksStore} from './stores/taskStore.js';
  import {useModalStore} from './stores/modalStore.js'






  /*==============> Variables <==============*/
  const store = useTasksStore();
  // use Pinia and save to localStorage
  // to subscribe to store mutations and save the state to localStorage. 
  store.$subscribe((mutation, state) => {
    localStorage.setItem('taskManageApp', JSON.stringify(state));
  })


  const modalStore = useModalStore();

  const appName = ref("My new task manager");
  // if you want to change the "appName"
  appName.value = "Shipan's Tasks Management";


  /*==============> Functions <==============*/

</script>


<!-- ==============> Templates <============== -->

<template>

  <main class="container">

    <div class="header">
      <div class="header-side">
        <h1>
          {{ appName }}
        </h1>
      </div>
      <div class="header-side">
        <button class="btn secondary" @click="modalStore.openModal()">+ Add Task</button>
      </div>
    </div>

    <Filter/>

    <div class="tasks">
      <Task v-for="(t, index) in store.filteredTasks" :task="t" :key="index"></Task>
    </div>

    <ModelWindow v-if="modalStore.modalIsActive">
      <!-- everything here will be transferred to the “slot” inside of “ModelWindow” -->
      <AddTask/>
    </ModelWindow>

  </main>

</template>


<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}


.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.add-task {
  margin-top: 60px;

  input, textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}


</style>