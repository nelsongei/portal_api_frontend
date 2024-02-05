<!-- ModalComponent.vue -->
<template>
  <div class="modal">
    <!-- Your modal content goes here -->
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      // Emit an event to inform the parent component to close the modal
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Your modal styling goes here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
