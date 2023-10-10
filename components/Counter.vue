<template>
    <v-row justify="center" >
      <v-col>
        <v-card data-cy="COUNTER_CARD" class="mx-auto" max-width="344" color="primary">
          <v-card-item>
            <div>
              <div data-cy="COUNTER_TITLE" class="text-overline mb-1">
                Counter
              </div>
              <div data-cy="COUNTER_VALUE" class="text-h2 mb-1">
                {{ count }}
              </div>
              <div data-cy="COUNTER_CAPTION" class="text-caption">count</div>
              <div v-if="count === 1">
                hello buddy
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn data-cy="COUNTER_INCREASE" @click="increment">Increment</v-btn>
            <v-btn data-cy="COUNTER_DECREASE" @click="decrement">Decrement</v-btn>
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
