<template>
  <section class="dataview">
    <div class="dataview__header">
      <UButton class="dataview__newbutton">СОЗДАТЬ</UButton>
      <div class="dataview__filter">
        <UInput placeholder="Поиск (№ заявки, название)"></UInput>
        <UInput placeholder="Дом"></UInput>
      </div>
    </div>
    <div class="dataview__table"></div>
  </section>
</template>

<script>
import UButton from '../ui/UButton.vue'
import UInput from '../ui/UInput.vue'
export default {
  components: {
    UButton,
    UInput
  }
}
</script>

<style lang="sass">
.dataview
    display: flex
    flex-direction: column
    background-color: #ffffff
    border-radius: 8px
    padding: 10px 20px

    &__header
        display: flex
        flex-direction: column

    &__newbutton
        align-self: flex-end
        margin-bottom: 32px

    &__filter
        display: flex
        gap: 15px
</style>
