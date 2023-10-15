/*
this is a subject under "stores", so everything related to tasks will be here
命名规则: "use" + "store_name" + "Store" ,   example:  useAlertsStore

why create the "modalStore.js" ?

becuase the modal has not too muc to do with the tasks, so you can't define the modalfunctionalities insode of taskStore.js


*/

import {defineStore} from 'pinia';
import {ref, reactive, computed} from 'vue';


// here 'tasks' is a unique id across the application
export const useModalStore = defineStore('modals', () => {
  // create a ref for modal open/close
  let modalIsActive = ref(false);

  //it's better to just define fucntion for opening/closing the modal
  function openModal() {
    modalIsActive.value = true;
  }

  function closeModal() {
    modalIsActive.value = false;
  }

  return {modalIsActive, openModal, closeModal}
})