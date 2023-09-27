<template>
  <div id="app">
    <button @click="openModal">Open Modal</button>
    <Modal :show-modal="modalVisible" title="My Modal">
      <!-- Content you want to display in the modal goes here -->
      <p>This is the content of my modal.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './modal/Modal';

export default {
  data() {
    return {
      modalVisible: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
};
</script>
