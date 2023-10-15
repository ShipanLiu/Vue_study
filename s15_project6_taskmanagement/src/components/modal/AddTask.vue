<script setup>
  // 现在我们使用Pina
  import {useTasksStore} from '@/stores/taskStore.js';
  const store = useTasksStore();

  // 本地建立一个 variable
  let newTask = {
    completed: false,
  };
</script>

<template>
    <div class="form">
        <h3>Add a new task</h3>
        <label for="title">Title *</label>
        <input v-model="newTask.name" type="text" name="title" placeholder="Enter a title..."><br />
        <label for="description">Description *</label>
        <textarea v-model="newTask.description" name="description" rows="4" placeholder="Enter a description..." /><br />
        <button @click="store.addTask(newTask)" class="btn gray">Add Task</button>
    </div>
</template>