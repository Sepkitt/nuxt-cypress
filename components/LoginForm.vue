<template>
  <div>
    <h2 data-cy="FORM_HEADER">Login</h2>
    <form data-cy="FORM" @submit.prevent="submitForm">
      <div>
        <label data-cy="FORM_USERNAME_LABEL" for="username">Username:</label>
        <input data-cy="FORM_USERNAME" type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label data-cy="FORM_PASSWORD_LABEL" for="password">Password:</label>
        <input data-cy="FORM_PASSWORD" type="password" id="password" v-model="password" required />
      </div>
      <button data-cy="FORM_SUBMIT" type="submit">Submit</button>
    </form>
    <p v-if="loggedIn">Welcome, {{ username }}!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false,
    };
  },
  methods: {
    submitForm() {
      // You can add authentication logic here.
      // For simplicity, we're just checking if both fields are filled.
      if (this.username && this.password) {
        this.loggedIn = true;
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
