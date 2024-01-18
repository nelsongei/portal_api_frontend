<template>
  <div class="login-container">
    <div class="bg-red-100 border border-red-400 text-red-700 mb-4 px-4 py-3 rounded relative" role="alert"
         v-for="(error, index) in errors" :key="index">
      <span class="block sm:inline">{{ error[0] }}</span>
    </div>
    <div v-if="showLogin">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" v-model="loginEmail" required/>

        <label for="login-password">Password:</label>
        <input type="password" id="login-password" v-model="loginPassword" required/>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <a href="#" @click="toggleForms">Switch to Signup</a>
      </p>
    </div>

    <div v-else>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <label for="signup-username">Username:</label>
        <input type="text" id="signup-username" v-model="signupUsername" required/>

        <label for="signup-email">Email:</label>
        <input type="email" id="signup-email" v-model="signupEmail" required/>

        <label for="signup-phone">Phone Number:</label>
        <input type="text" id="signup-phone" v-model="signupPhone" required/>

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account?
        <a href="#" @click="toggleForms">Switch to Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showLogin: true,
      loginEmail: '',
      loginPassword: '',
      signupUsername: '',
      signupEmail: '',
      signupPhone: '',
      errors: [],
      success: "",
    };
  },
  methods: {
    login() {
      // Add your login logic here
      console.log('Login form submitted');
    },
    signup() {
      axios.post('http://127.0.0.1/portalapi/public/api/register', {
        'name': this.signupUsername,
        'email': this.signupEmail,
        'phone': this.signupPhone
      })
          .then((response) => {
            if(response.status === 200)
            {
              const phone = response.data.user.phone;
              localStorage.setItem('phone',phone);
              this.$router.push({name: "otp"});
            }
          })
          .catch((e) => {
            this.errors = e.response.data.errors;
          })
    },
    toggleForms() {
      this.showLogin = !this.showLogin;
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  margin-top: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #000;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

a {
  color: #1e88e5;
  cursor: pointer;
}
</style>

<!--<script>-->
<!--export default {-->
<!--  name: 'HelloWorld',-->
<!--  props: {-->
<!--    msg: String-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
<!--  list-style-type: none;-->
<!--  padding: 0;-->
<!--}-->
<!--li {-->
<!--  display: inline-block;-->
<!--  margin: 0 10px;-->
<!--}-->
<!--a {-->
<!--  color: #42b983;-->
<!--}-->
<!--</style>-->
