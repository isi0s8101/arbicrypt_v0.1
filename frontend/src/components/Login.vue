<template>
  <v-container>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" type="password" required></v-text-field>
          <v-btn @click="login">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      // Implement login logic
      alert("Login functionality not implemented yet.");
    },
  },
};
</script>
