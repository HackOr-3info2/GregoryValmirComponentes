<template>
  <section>
    <h2>Modal</h2>
    <div class="all-modal">
      <ModalNormal />
      <ModalConfirmacao/>
    </div>
  </section>
</template>

<script setup>
import ModalNormal from "../Modal/ModalNormal.vue"
import ModalConfirmacao from "../Modal/ModalConfirmacao.vue"
</script>

<style scoped>
.all-modal {
    display: flex;
    gap: 2em
}
</style>
