<template>
  <div data-cy="MODAL_OVERLAY" class="modal-overlay" v-if="showModal">
    <div data-cy="MODAL" class="modal">
      <div data-cy="MODAL_HEADER" class="modal-header">
        <h2>{{ title }}</h2>
        <button data-cy="MODAL_CLOSE" @click="closeModal">X</button>
      </div>
      <div data-cy="MODAL_BODY" class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    title: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
/* Example styles for the modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.modal-body {
  margin-top: 10px;
}
</style>
