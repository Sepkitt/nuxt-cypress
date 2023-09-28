<template>
  <div>
   <div  v-if="!loggedIn">
    <h2 data-cy="FORM_HEADER">Login</h2>
    <form data-cy="FORM" @submit.prevent="submitForm">
      <div>
        <label data-cy="FORM_USERNAME_LABEL" for="username">Username:</label>
        <v-text-field data-cy="FORM_USERNAME" type="text" id="username" v-model="username" required />
      </div>
      <div>
        <v-text-field data-cy="FORM_PASSWORD" type="password" id="password" v-model="password" required label="Password"
          hint="Enter your password to access this website"></v-text-field>
      </div>
      <v-btn color="secondary" data-cy="FORM_SUBMIT" type="submit">Submit</v-btn>
    </form>
   </div>
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
