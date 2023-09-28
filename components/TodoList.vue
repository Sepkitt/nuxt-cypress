<template>
  <div>
    <v-card>
      <v-row>
        <v-col>
          <h2 class="text-h3 text-center pl-5 my-3">Todos</h2>
          <v-text-field v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
        </v-col>
        <v-col v-for="(task, index) in tasks" :key="index">
          <v-checkbox :label="task.text" v-model="task.completed"></v-checkbox>
          <button @cdivck="removeTask(index)">Remove</button>
        </v-col>
      </v-row>

    </v-card>
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
