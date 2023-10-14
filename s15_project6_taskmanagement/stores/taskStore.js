/*
this is a subject under "stores", so everything related to tasks will be here
命名规则: "use" + "store_name" + "Store" ,   example:  useAlertsStore

*/

import {defineStore} from 'pinia';
import {ref, reactive, computed} from 'vue';


// here 'tasks' is a unique id across the application
export const useTasksStore = defineStore('tasks', () => {



  // you have to expose to outside

})