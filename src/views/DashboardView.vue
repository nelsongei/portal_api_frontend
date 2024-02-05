<template>
  <h4>Dashboard</h4>
  <button @click="logout"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
    Logout
  </button>
  <div class="md:px-32 py-8 w-full">
    <div class="shadow overflow-hidden rounded border-b border-gray-200">
      <button @click="addBooksModal()" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 float-left ml-4 mb-3 focus:outline-none focus:shadow-outline-blue">
        Add Book
      </button>
      <ModalComponent v-if="showModal" @close="closeModal">
        <!-- Your modal content goes here -->
        <p>This is the modal content.</p>
      </ModalComponent>
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Book Name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Author</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">ISBN</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
        </tr>
        </thead>
        <tbody class="text-gray-700">
        <tr>
          <td class="w-1/3 text-left py-3 px-4">Lian</td>
          <td class="w-1/3 text-left py-3 px-4">Smith</td>
          <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
          <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import ModalComponent from "@/components/ModalComponent.vue";
export default {
  components:{
    ModalComponent,
  },
  data(){
    return {
      books: [],
      showModal: false,
    }
  },
  created(){
    this.getBooks();
  },
  mounted(){
    this.getBooks();
  },
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
          localStorage.removeItem("email");
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
    getBooks(){
      axios.get('http://127.0.0.1/portalapi/public/api/books')
          .then((response)=>{
            console.log(response)
            this.books = response;
          })
          .catch((e)=>{
            console.log(e)
          })
    },
    addBooksModal(){
      this.showModal = true
    },
    closeModal(){
      this.showModal = false
    },
  },
}
</script>