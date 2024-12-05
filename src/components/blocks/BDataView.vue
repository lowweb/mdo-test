<template>
  <section class="dataview">
    <div class="dataview__header">
      <UButton class="button--medium dataview__newbutton">СОЗДАТЬ</UButton>
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
      <TableComponent
        ref="tableComponent"
        :rows-per-page="rowsPerPage"
        :currentPage="currentPage"
      />
      <PaginationComponent
        :total-items="totalItems"
        :rows-per-page="rowsPerPage"
        @page-changed="handlePageChange"
        @rows-per-page-changed="handleRowsPerPageChange"
      />
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
import TableComponent from '../ui/UTablemod.vue'
import PaginationComponent from '../ui/UPagination.vue'
export default {
  components: {
    UButton,
    UInput,
    USelect,
    UCustomSelect,
    IconSearch,
    UIconButton,
    UTable,
    TableComponent,
    PaginationComponent
  },
  data() {
    return { rowsPerPage: 10, currentPage: 1, totalItems: 100 }
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page
      this.$refs.tableComponent.updatePage(page)
    },
    handleRowsPerPageChange(rows) {
      this.rowsPerPage = rows
      this.currentPage = 1
      this.$refs.tableComponent.updateRowsPerPage(rows)
    }
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

      &:hover
        fill: #50b053
        border: solid 1px $color-green
        border-radius: 5px
        transition: .7s
</style>
