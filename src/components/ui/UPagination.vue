<template>
  <div class="pagination">
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

export default {
  data() {
    return {
      options: [2, 3, 4, 5]
    }
  },
  computed: {
    ...mapState('paginationStore', ['currentPage']),
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
      console.log('rowsPerPage=' + this.rowsPerPage)
      this.setRowsPerPage(this.rowsPerPage)
      this.setCurrentPage(1)
    }
  }
}
</script>
