<script setup>
  //ref is only for primitives(value, string, boolean)
  //"reactive" is for (Objects, arrays)
  import { ref, reactive, computed } from 'vue';
  import Task from './components/Task.vue';
  import Filter from './components/Filter.vue';
  import ModelWindow from './components/modal/ModelWindow.vue';
  import AddTask  from './components/modal/AddTask.vue';


  /*==============> Variables <==============*/
  const appName = ref("My new task manager");
  // if you want to change the "appName"
  appName.value = "Shipan's Tasks Management";

  let tasks= reactive([

      {
        name: "Website design",
        description: "Define the style guide, branding and create the webdesign on Figma.",
        completed: true,
        id: 1
      },
      {
        name: "Website development",
        description: "Develop the portfolio website using Vue JS.",
        completed: false,
        id: 2
      },
      {
        name: "Hosting and infrastructure",
        description: "Define hosting, domain and infrastructure for the portfolio website.",
        completed: false,
        id: 3
      },
      {
        name: "Composition API",
        description: "Learn how to use the composition API and how it compares to the options API.",
        completed: true,
        id: 4
      },
      {
        name: "Pinia",
        description: "Learn how to setup a store using Pinia.",
        completed: true,
        id: 5
      },
      {
        name: "Groceries",
        description: "Buy rice, apples and potatos.",
        completed: false,
        id: 6
      },
      {
        name: "Bank account",
        description: "Open a bank account for my freelance business.",
        completed: false,
        id: 7
      }
  ]);

  let newTask = {
    completed: false,
  };

  let filterBy = ref("");

  // create a ref for modal open/close
  let modalIsActive = ref(false);


    /*==============> Computed <==============*/

  // I want if the "filterBy.value" changes, I need to reactively get the latest "filteredTasks"
  const filteredTasks = computed(() => {
    switch(filterBy.value) {
      case "todo":
        return tasks.filter(t => !t.completed);
        break;
      case "done":
        return tasks.filter(t => t.completed);
        break;
      default:
        // by default just return the original tasks array
        return tasks;
    }
  });

  /*==============> Functions <==============*/

  function addTask() {
    if(newTask.name && newTask.description) {
      // find the biggest id and create a new id
      newTask.id = Math.max(...tasks.map(t => t.id)) + 1;
      tasks.push(newTask);
      newTask = {
        completed: false,
      }
    } else {
      alert("wrong");
    }
  }

  function toggleCompleteFunc(taskId) {
    let targetTask = tasks.find(t => t.id === taskId);
    if(targetTask) {
      console.log(targetTask.completed);
      targetTask.completed = !targetTask.completed;
      console.log(targetTask.completed);
    } else {
      alert("the id does not exist");
    }
  }

  // a function that be able to set the filter
  function setFilter(value) {
    console.log(value);
    // if you want to resign value to a reactive variable, you need to use ".value" grammar
    filterBy.value = value;
  }


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
        <button class="btn secondary" @click="modalIsActive = true">+ Add Task</button>
      </div>
    </div>

    <Filter :filterBy="filterBy" @emitSetFilterBy="setFilter" @emitClearFilterby="setFilter"/>

    <div class="tasks">
      <Task @toggleCompleteEmit="toggleCompleteFunc" v-for="(t, index) in filteredTasks" :task="t" :key="index"></Task>
    </div>

    <ModelWindow v-if="modalIsActive" @closeModalWindow="modalIsActive = false">
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