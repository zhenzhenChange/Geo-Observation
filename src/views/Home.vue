<template>
  <div>
    <Map @open-modal="handleOpenModal" />
    <Modal :visible="visible" :params="params" @close-modal="handleCloseModal" />
  </div>
</template>

<script>
import Map from '@/views/Map';
import Modal from '@/views/Modal';

export default {
  name: 'Home',
  components: { Map, Modal },
  data: () => ({ visible: false, params: {} }),
  methods: {
    handleOpenModal(params) {
      this.visible = true;
      this.params = { ...params };
    },
    handleCloseModal() {
      this.visible = false;
    },
  },
};
</script>
