<template>
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
    <div class="input-pesquisa">
      <h3>CheckBoxes</h3>
      <div class="all-checkbox">
        <CheckMenu />
        <CheckGostei />
        <CheckCopy />
        <CheckboxInput />
      </div>
    </div>
  </section>
</template>

<script setup>
import InputButton from '../input/pesquisa/InputButton.vue'
import InputNoButton from '../input/pesquisa/InputNoButton.vue'
import InputButtonBorder from '../input/pesquisa/InputButtonBorder.vue'
import InputNormal from '../input/texto/InputNormal.vue'
import InputDisable from '../input/texto/InputDisable.vue'
import InputInvalid from '../input/texto/InputInvalid.vue'
import IconeDireita from '../input/icone/IconeDireita.vue'
import IconeEsquerda from '../input/icone/IconeEsquerda.vue'
import TextareaInput from '../input/TextareaInput.vue'
import AutoComplete from '../input/AutoComplete.vue'
import InputCalendar from '../input/InputCalendar.vue'
import CheckMenu from '../Checkboxes/CheckMenu.vue'
import CheckGostei from '../Checkboxes/CheckGostei.vue'
import CheckCopy from '../Checkboxes/CheckCopy.vue'
import CheckboxInput from '../Checkboxes/CheckboxInput.vue'
</script>

<style scoped>
.input-section {
  border: 3px solid var(--text-color-lg);
  border-radius: 2em;
  padding: 2em;
  width: 100%;
}
span,
a {
  font-size: 0.9em;
}
a {
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.all-inputs {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.all-checkbox {
  display: flex;
  gap: 2em;
  align-items: center;
}
</style>
