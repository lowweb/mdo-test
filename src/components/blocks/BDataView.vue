<template>
  <section class="dataview">
    <div class="dataview__header">
      <UButton class="button--medium dataview__newbutton">СОЗДАТЬ</UButton>
      <BDataFilters class="dataview__filter" />
    </div>
    <UTable class="dataview__table" />
    <UPagination class="dataview__pagination" />
  </section>
</template>

<script>
import UButton from '../ui/UButton.vue'
import UCustomSelect from '../ui/UCustomSelect.vue'
import IconSearch from '../icons/IconSearch.vue'
import UIconButton from '../ui/UIconButton.vue'
import UTable from '../ui/UTable.vue'
import UPagination from '../ui/UPagination.vue'
import BDataFilters from './BDataFilters.vue'
export default {
  components: {
    UButton,
    UCustomSelect,
    IconSearch,
    UIconButton,
    UTable,
    UTable,
    UPagination,
    BDataFilters
  },
  data() {
    return {}
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
        margin-bottom: 32px

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

      &:hover
        fill: #50b053
        border: solid 1px $color-green
        border-radius: 5px
        transition: .7s
    &__table
      margin-bottom: 32px
</style>
