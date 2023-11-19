<template>
  <section>
    <h2>Botões</h2>
    <div class="all-buttons">
        <ButtonPrimary text="Hover me" link="/" />
        <ButtonSecondary text="Hover me" link="/" />
        <ButtonSecondaryNo text="Hover me" link="/" />
        <ButtonPrimaryNo text="Hover me" link="/" />
        <ButtonIcon nameIcon="x" />
    </div>
  </section>
</template>

<script>
import ButtonPrimary from '../Buttons/ButtonPrimary.vue';
import ButtonSecondary from '../Buttons/ButtonSecondary.vue';
import ButtonSecondaryNo from '../Buttons/ButtonSecondaryNo.vue';
import ButtonPrimaryNo from '../Buttons/ButtonPrimaryNo.vue';
import ButtonIcon from '../Buttons/ButtonIcon.vue';

export default {
    components: { ButtonPrimary, ButtonSecondary, ButtonIcon, ButtonPrimaryNo, ButtonSecondaryNo }
}
</script>

<style scoped>
.all-buttons {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
}
</style>