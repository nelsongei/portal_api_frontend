<template>
  <h4>Dashboard</h4>
  <button @click="logout"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
    Logout
  </button>
</template>
<script>

export default {
  methods: {
    async logout() {
      const accessToken = localStorage.getItem("api_token");
      try {
        const response = await fetch(
            "http://127.0.0.1/portalapi/public/api/logout",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify(this.formData),
            }
        );

        if (response.ok) {
          console.log(response);
          localStorage.removeItem("api_token");
          localStorage.removeItem("phone");
          this.$router.push({name: "home"});
          console.log("Data submitted successfully");
        } else {
          // Handle error response
          const errorData = await response.json();
          console.log("Error:", errorData);
        }
      } catch (error) {
        // Handle network error
        console.log("Network error:", error);
      }
    },
  },
}
</script>