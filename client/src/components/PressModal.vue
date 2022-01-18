<template>

<div class="bloc-modal" v-if="reveal">
  <div class="overlay" @click="toggleModal"></div>
  <div class="modal">
    <button class="btn-modal" @click="toggleModal">exit</button>
    <h2>content</h2>
  </div>
</div>

</template>

<script>

  export default {
    name: "PressModal",
    props: ['reveal', 'toggleModal']
  };

</script>

<style scoped>

.bloc-modal{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal{
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modal{
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>