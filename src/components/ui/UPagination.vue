<template>
  <div class="pagination">
    <div class="pagination__info">
      {{ fromPageToPage }}
      <USelect :options="options" v-model="this.rowsPerPage" @change="updateRowsPerPage" />
    </div>

    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    <select v-model="this.rowsPerPage" @change="updateRowsPerPage">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import USelect from './USelect.vue'

export default {
  components: {
    USelect
  },
  data() {
    return {
      options: [
        { value: 10, name: 10 },
        { value: 50, name: 50 },
        { value: 100, name: 100 },
        { value: 200, name: 200 }
      ]
    }
  },
  computed: {
    ...mapState('paginationStore', [
      'currentPage',
      'rowsPerPage',
      'countRecords',
      'nextPage',
      'prevPage',
      'pagesCount'
    ]),
    rowsPerPage: {
      get() {
        return this.$store.state.paginationStore.rowsPerPage
      },
      set(value) {
        this.setRowsPerPage(value)
      }
    },
    ...mapGetters('paginationStore', ['totalItems', 'totalPages']),
    totalPages() {
      return Math.ceil(this.totalItems / this.rowsPerPage)
    },
    fromPageToPage() {
      return (
        this.currentPage * this.rowsPerPage -
        this.rowsPerPage +
        1 +
        '-' +
        this.currentPage * this.rowsPerPage +
        ' из ' +
        this.countRecords
      )
    }
  },
  methods: {
    ...mapMutations('paginationStore', ['setCurrentPage', 'setRowsPerPage']),
    prevPage() {
      if (this.currentPage > 1) {
        this.setCurrentPage(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.setCurrentPage(this.currentPage + 1)
      }
    },
    updateRowsPerPage() {
      this.setRowsPerPage(this.rowsPerPage)
      this.setCurrentPage(1)
    }
  }
}
</script>

<style lang="sass">
.pagination
  display: flex
  flex-direction: row
  align-items: center
  &__info
    display: flex
</style>
