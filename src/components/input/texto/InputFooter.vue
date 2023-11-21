<template>
<div class="inputGroup">
    <input class="inputText" autocomplete="off" required="" type="text">
    <label for="name">Seu E-mail</label>
</div>
</template>

<script>
export default {}
</script>

<style scoped>

.inputGroup {
  max-width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid var(--text-color-dk);
  background-color: transparent;
  border-radius: 160px;
  width: 100%;
  color: var(--text-color-dk);
}
.inputGroup label {
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: var(--text-color-dk);
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translateY(-80%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em 0.5em 0.1em 0.5em;
  background-color: var(--primary-color-lg);
}

.inputGroup :is(input:focus, input:valid) {
  border-color: var(--text-color-dk);
}
</style>
