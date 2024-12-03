<template>
  <section class="dataview">
    <div class="dataview__header">
      <UButton class="dataview__newbutton">СОЗДАТЬ</UButton>
      <div class="dataview__filter">
        <UInput placeholder="Поиск (№ заявки, название)">
          <template #inputRightIcon>
            <UIconButton @click="console.log('dnejbdjwe')" class="dataview__inputbtn">
              <IconSearch />
            </UIconButton>
          </template>
        </UInput>
        <USelect />
      </div>
    </div>
    <div class="dataview__table">
      <UTable></UTable>
    </div>
  </section>
</template>

<script>
import UButton from '../ui/UButton.vue'
import UInput from '../ui/UInput.vue'
import USelect from '../ui/USelect.vue'
import UCustomSelect from '../ui/UCustomSelect.vue'
import IconSearch from '../icons/IconSearch.vue'
import UIconButton from '../ui/UIconButton.vue'
import UTable from '../ui/UTable.vue'
export default {
  components: {
    UButton,
    UInput,
    USelect,
    UCustomSelect,
    IconSearch,
    UIconButton,
    UTable
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
    &__inputbtn
      fill: #999999
      border: solid 1px $color-white
      border-radius: 5px

    &__inputbtn:hover
      fill: #50b053
      border: solid 1px $color-green
      border-radius: 5px
      transition: .7s
</style>
