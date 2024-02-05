<template>
  <nav v-if="checkAuth()">
    <router-link to="/dashboard">Books</router-link> |
    <router-link to="/authors">Authors</router-link> |
  </nav>
  <router-view/>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem('api_token'),
    }
  },
  methods:{
    checkAuth(){
      return Boolean(localStorage.getItem("api_token"));
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
