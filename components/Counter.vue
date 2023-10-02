<template>
  <v-row justify="center">
    <v-col>
      <v-card class="mx-auto" max-width="344" :color="'primary'">
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              Counter
            </div>
            <div class="text-h2 mb-1">
              {{ count }}
            </div>
            <div class="text-caption">count</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn @click="increment" >Increment</v-btn>
          <v-btn @click="decrement" >Decrement</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
