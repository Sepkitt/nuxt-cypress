<template>
  <div>
    <div v-if="!loggedIn">
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-card class="pa-5" color="">
            <v-card-title data-cy="FORM_HEADER">Login</v-card-title>
            <form data-cy="FORM" @submit.prevent="submitForm">
              <v-card class="pa-5" flat color="transparent">
                <v-card-items>
                  <div>
                    <v-text-field label="Username" data-cy="FORM_USERNAME" type="text" id="username" v-model="username"
                      required />
                  </div>
                  <div>
                    <v-text-field data-cy="FORM_PASSWORD" type="password" id="password" v-model="password" required
                      label="Password" hint="Enter your password to access this website"></v-text-field>
                  </div>
                </v-card-items>
              </v-card>
              <v-card-actions>
                <v-btn color="secondary" data-cy="FORM_SUBMIT" type="submit">Submit</v-btn>

              </v-card-actions>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <p v-if="loggedIn">Welcome! To the loop, {{ username }}!</p>
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
