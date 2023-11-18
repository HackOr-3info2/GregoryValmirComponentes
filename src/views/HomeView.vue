<script setup>
import InputButton from '../components/input/pesquisa/InputButton.vue'
import InputNoButton from '../components/input/pesquisa/InputNoButton.vue'
import InputButtonBorder from '../components/input/pesquisa/InputButtonBorder.vue'
import InputNormal from '../components/input/texto/InputNormal.vue'
import InputDisable from '../components/input/texto/InputDisable.vue'
import InputInvalid from '../components/input/texto/InputInvalid.vue'
import IconeDireita from '../components/input/icone/IconeDireita.vue'
import IconeEsquerda from '../components/input/icone/IconeEsquerda.vue'
import TextareaInput from '../components/input/TextareaInput.vue'
import AutoComplete from '../components/input/AutoComplete.vue'
import InputCalendar from '../components/input/InputCalendar.vue'

</script>

<template>
  <main>
    <h1>Gregory Valmir Componentes</h1>
    <section class="input-section">
      <h2>Inputs</h2>
      <div class="input-pesquisa">
        <h3>Input de pesquisa</h3>
        <div class="all-inputs">
          <InputButton />
          <InputButtonBorder />
          <InputNoButton />
          <span>*Sem necessidade de clicar no botão para abrir o input*</span>
        </div>
      </div>
      <div class="input-pesquisa">
        <h3>Input de Texto</h3>
        <div class="all-inputs">
          <InputNormal />
          <InputDisable />
          <InputInvalid />
          <a>Clique aqui para um exemplo</a>
        </div>
      </div>
      <div class="input-pesquisa">
        <h3>Input com ícone</h3>
        <div class="all-inputs">
          <IconeDireita />
          <IconeEsquerda />
        </div>
      </div>
      <div class="input-pesquisa">
        <h3>Textarea</h3>
        <div class="all-inputs">
          <TextareaInput />
        </div>
      </div>
      <div class="input-pesquisa">
        <h3>AutoComplete</h3>
        <div class="all-inputs">
          <AutoComplete />
        </div>
      </div>
      <div class="input-pesquisa">
        <h3>Calendario</h3>
        <div class="all-inputs">
          <InputCalendar />
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin: 1em 0;
}
.all-inputs {
  display: flex;
  flex-direction: column;
  gap: 1em
}
main {
  padding: 3em 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input-section {
  border: 3px solid var(--text-color-lg);
  border-radius: 2em;
  padding: 2em;
  width: 30em;
}
span, a {
  font-size: 0.9em;
}
a {
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
</style>
