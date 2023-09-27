<template>
 <v-container>
    <v-row>
      <v-col>
        <h2>Counter</h2>
        <p>Count: {{ count }}</p>
        <v-btn @click="increment" color="primary">Increment</v-btn>
        <v-btn @click="decrement" color="primary">Decrement</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
