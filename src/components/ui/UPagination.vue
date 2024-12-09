<template>
  <div class="pagination">
    <div class="pagination__info">
      <span class="pagination__textblock"
        >{{ fromPageToPage }} <span>из</span> {{ countRecords }}</span
      >
      <USelect
        class="pagination__select select--slim"
        :options="getRowsPerPageOptions"
        v-model="rowsPerPage"
        @change="updateRowsPerPage"
      />
    </div>
    <div class="pagination__nav">
      <div class="pagination__nav-button">
        <UIconButton @click="goToFirstPage" :disabled="isFirstPage"><IconToStart /></UIconButton>
        <UIconButton @click="goToPreviousPage" :disabled="isFirstPage"><IconPrev /></UIconButton>
      </div>
      <ul class="pagination__pages">
        <li v-for="page in displayedPages" :key="page">
          <button
            class="pagination__page-button"
            v-if="page"
            @click="goToPage(page)"
            :class="{ 'pagination__page-button--active': currentPage === page }"
          >
            {{ page }}
          </button>
          <span v-else>...</span>
        </li>
      </ul>
      <div class="pagination__nav-button">
        <UIconButton @click="goToNextPage" :disabled="isLastPage"><IconNext /></UIconButton>
        <UIconButton @click="goToLastPage" :disabled="isLastPage"><IconToEnd /></UIconButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import USelect from './USelect.vue'
import UIconButton from './UIconButton.vue'
import IconToEnd from '../icons/IconToEnd.vue'
import IconToStart from '../icons/IconToStart.vue'
import IconNext from '../icons/IconNext.vue'
import IconPrev from '../icons/IconPrev.vue'

export default {
  components: {
    USelect,
    UIconButton,
    IconNext,
    IconPrev,
    IconToEnd,
    IconToStart
  },
  computed: {
    ...mapGetters('paginationStore', ['getCurrentPage', 'getRowsPerPage', 'getRowsPerPageOptions']),
    ...mapState('paginationStore', ['countRecords', 'pagesCount']),

    currentPage: {
      get() {
        return this.getCurrentPage
      },
      set(value) {
        this.setCurrentPage(value)
      }
    },

    rowsPerPage: {
      get() {
        return this.getRowsPerPage
      },
      set(value) {
        this.setRowsPerPage(value)
      }
    },

    fromPageToPage() {
      const left = this.currentPage * this.rowsPerPage - this.rowsPerPage + 1
      const right =
        this.currentPage * this.rowsPerPage > this.countRecords
          ? this.countRecords
          : this.currentPage * this.rowsPerPage
      return left + '–' + right
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.pagesCount
    },
    displayedPages() {
      const pages = []
      if (this.pagesCount <= 7) {
        for (let i = 1; i <= this.pagesCount; i++) {
          pages.push(i)
        }
      } else {
        if (this.currentPage <= 4) {
          for (let i = 1; i <= 5; i++) {
            pages.push(i)
          }
          pages.push(null)
          pages.push(this.pagesCount)
        } else if (this.currentPage > this.pagesCount - 4) {
          pages.push(1)
          pages.push(null)
          for (let i = this.pagesCount - 4; i <= this.pagesCount; i++) {
            pages.push(i)
          }
        } else {
          pages.push(1)
          pages.push(null)
          for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
            pages.push(i)
          }
          pages.push(null)
          pages.push(this.pagesCount)
        }
      }
      return pages
    }
  },

  methods: {
    ...mapMutations('paginationStore', ['setCurrentPage', 'setRowsPerPage']),
    ...mapActions('ordersStore', ['fetchOrders']),

    async updateRowsPerPage() {
      this.setCurrentPage(1)
      this.setRowsPerPage(this.rowsPerPage)
      try {
        await this.fetchOrders()
      } catch (error) {
        if (error.response) {
          this.showTooltip({ text: error.response.data.error.detail, isSuccess: false })
        }
      }
    },
    async goToPage(page) {
      if (page >= 1 && page <= this.pagesCount) {
        this.currentPage = page
        this.setCurrentPage(page)
        this.setRowsPerPage(this.rowsPerPage)
        try {
          await this.fetchOrders()
        } catch (error) {
          if (error.response) {
            this.showTooltip({ text: error.response.data.error.detail, isSuccess: false })
          }
        }
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
      this.goToPage(this.pagesCount)
    }
  }
}
</script>

<style lang="sass">
.pagination
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  z-index: 1

  &__select
    max-width: 89px
    min-height: 40px

  &__info
    display: flex
    align-items: center
    gap: 16px
    font-weight: 300

  &__textblock
    font-family: $font-family
    font-weight: 700
    font-size: 14px
    color: $color-black
    flex: 1 0 fit-content

  &__nav
    display: flex
    align-items: center
    gap: 20px

    &-button
      display: flex
      align-items: center
      gap: 36px
    &-pages
      display: flex
  &__pages
    list-style: none
    display: flex
    gap: 36px
  &__page-button
    border: none
    background-color: transparent
    position: relative

    &::before
      content: ''
      width: 32px
      height: 32px
      background: $color-white
      display: block
      transform: translate(-50%,-50%)
      position: absolute
      z-index: -1
      top: 50%
      left: -50%
      border-radius: 50%


    &--active
      color: $color-white
    &--active::before
      content: ''
      width: 32px
      height: 32px
      box-shadow: 0 4px 4px 0 rgba(106, 174, 94, 0.25)
      background: $color-lightgreen
      display: block
      transform: translate(-50%,-50%)
      position: absolute
      z-index: -1
      top: 50%
      left: 50%
      border-radius: 50%
      transition: .5s
</style>
