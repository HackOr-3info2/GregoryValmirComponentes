<script setup>
import InputSection from '../components/section/InputSection.vue'
import NavTop from '../components/NavTop.vue'
import LoaderComp from '../components/LoaderComp.vue'
import ButtonSection from '../components/section/ButtonSection.vue'
import ModalSection from '../components/section/ModalSection.vue'
import TabelaSection from '../components/section/TabelaSection.vue'
</script>

<template>
  <main>
    <div class="top">
      <h1>Gregory Valmir Componentes</h1>
      <InputSection />
      <ButtonSection />
      <ModalSection />
      <LoaderComp />
    </div>
    <NavTop />
    <div class="bottom">
      <TabelaSection />
    </div>
  </main>
</template>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 1em 0;
}
.top {
padding: 3em 27em;
}
.bottom {
  padding: 3em 10em;

}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
