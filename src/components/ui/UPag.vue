<template>
  <div class="pagination">
    <button @click="goToFirstPage" :disabled="isFirstPage">В начало</button>
    <button @click="goToPreviousPage" :disabled="isFirstPage">Назад</button>

    <span v-for="page in displayedPages" :key="page">
      <button v-if="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
        {{ page }}
      </button>
      <span v-else>...</span>
    </span>

    <button @click="goToNextPage" :disabled="isLastPage">Вперед</button>
    <button @click="goToLastPage" :disabled="isLastPage">В конец</button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.totalPages
    },
    displayedPages() {
      const pages = []
      if (this.totalPages <= 7) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i)
        }
      } else {
        if (this.currentPage <= 4) {
          for (let i = 1; i <= 5; i++) {
            pages.push(i)
          }
          pages.push(null)
          pages.push(this.totalPages)
        } else if (this.currentPage > this.totalPages - 4) {
          pages.push(1)
          pages.push(null)
          for (let i = this.totalPages - 4; i <= this.totalPages; i++) {
            pages.push(i)
          }
        } else {
          pages.push(1)
          pages.push(null)
          for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
            pages.push(i)
          }
          pages.push(null)
          pages.push(this.totalPages)
        }
      }
      return pages
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        this.$emit('page-changed', this.currentPage)
      }
    },
    goToFirstPage() {
      this.goToPage(1)
    },
    goToPreviousPage() {
      this.goToPage(this.currentPage - 1)
    },
    goToNextPage() {
      this.goToPage(this.currentPage + 1)
    },
    goToLastPage() {
      this.goToPage(this.totalPages)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
  border-radius: 3px;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #007bff;
  color: white;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button.active {
  background-color: #007bff;
  color: white;
}

span {
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
