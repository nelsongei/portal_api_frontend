<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded shadow-md w-80">
      <h2 class="text-2xl font-bold mb-4">Enter OTP</h2>
      <div class="grid grid-cols-4 gap-2 mb-6">
        <input type="text" v-model="otp" maxlength="4"
               class="col-span-4 p-3 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500">
      </div>
      <button @click="verifyOTP"
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
        Verify OTP
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      otp: ''
    };
  },
  methods: {
    verifyOTP() {
      axios.post('http://127.0.0.1/portalapi/public/api/verify', {
        'otp': this.otp,
        'email': localStorage.getItem('email')
      })
          .then((response) => {
            localStorage.setItem('api_token', response.data.token)
            this.$router.push({name: 'dashboard'})
            window.location.reload();
          })
          .catch((e) => {
            console.log(e)
          })
    }
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