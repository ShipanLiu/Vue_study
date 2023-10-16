/*
this is a subject under "stores", so everything related to tasks will be here
命名规则: "use" + "store_name" + "Store" ,   example:  useAlertsStore


 // {
    //   name: "Website design",
    //   description: "Define the style guide, branding and create the webdesign on Figma.",
    //   completed: true,
    //   id: 1
    // },
    // {
    //   name: "Website development",
    //   description: "Develop the portfolio website using Vue JS.",
    //   completed: false,
    //   id: 2
    // },
    // {
    //   name: "Hosting and infrastructure",
    //   description: "Define hosting, domain and infrastructure for the portfolio website.",
    //   completed: false,
    //   id: 3
    // },
    // {
    //   name: "Composition API",
    //   description: "Learn how to use the composition API and how it compares to the options API.",
    //   completed: true,
    //   id: 4
    // },
    // {
    //   name: "Pinia",
    //   description: "Learn how to setup a store using Pinia.",
    //   completed: true,
    //   id: 5
    // },
    // {
    //   name: "Groceries",
    //   description: "Buy rice, apples and potatos.",
    //   completed: false,
    //   id: 6
    // },
    // {
    //   name: "Bank account",
    //   description: "Open a bank account for my freelance business.",
    //   completed: false,
    //   id: 7
    // }

*/

import {defineStore} from 'pinia';
import {ref, reactive, computed} from 'vue';
// use data from "modalStore.js"
import {useModalStore} from '@/stores/modalStore.js'


// here 'tasks' is a unique id across the application
export const useTasksStore = defineStore('tasks', () => {

  // reload from localStorage
  // ?. 代表你 "taskManageApp" 在 localStorage存在的时候，我才取你的 "tasks: key
  // "taskManageApp" 立面存了 "tasks" 和 “filterBy” 两个 key。 因为filteredTasks 是 computed， 所以不会被存下。
  let tasks = reactive(JSON.parse(localStorage.getItem("taskManageApp"))?.tasks || []);
  console.log(tasks);

  let filterBy = ref("");

      /*==============> Computed <==============*/

  // I want if the "filterBy.value" changes, I need to reactively get the latest "filteredTasks"
  const filteredTasks = computed(() => {
    switch(filterBy.value) {
      case "todo":
        return tasks.filter(t => !t.completed);
      case "done":
        return tasks.filter(t => t.completed);
      default:
        // by default just return the original tasks array
        console.log("filteredTasks return tasks");
        return tasks;
    }
  });

  // a function that be able to set the filter
  function setFilter(value) {
    console.log(value);
  // if you want to resign value to a reactive variable, you need to use ".value" grammar
    filterBy.value = value;
  }

   function addTask(newTask) {
    if(newTask.name && newTask.description) {
      // find the biggest id and create a new id
      // 坑：注意假如 tasks 上来就是 空的 情况。
      newTask.id = tasks.length ? (Math.max(...tasks.map(t => t.id)) + 1) : 1;
      tasks.push(newTask);
      // here you don't have to reset any more, because after the modal windows is destroyed, the Content will be cleaned.
      // newTask = {
      //   completed: false,
      // }
      // adding finished, close modal
      // 在Pinia 立main使用另外一个 Pinia 的 store
      const modalStore = useModalStore();
      modalStore.closeModal();
    } else {
      alert("Both name and description are needed for creating a new task");
    }
  }

  function toggleCompleteFunc(taskId) {
    let targetTask = tasks.find(t => t.id === taskId);
    if(targetTask) {
      targetTask.completed = !targetTask.completed;
    } else {
      alert("the id does not exist");
    }
  }


  // you have to expose to outside
  return {tasks, filterBy, setFilter, filteredTasks, addTask, toggleCompleteFunc}
})