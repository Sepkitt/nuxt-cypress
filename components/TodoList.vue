<template>
  <div>
    <h2>Todo List</h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        {{ task.text }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
