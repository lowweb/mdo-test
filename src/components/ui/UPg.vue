<template>
  <div class="pagination">
    <button
      v-show="pagesCount > 0 && currentPage > 1"
      class="pagination__left btn"
      @click="getPevPage"
    >
      Prev
    </button>

    <ul v-if="pagesCount != 0" class="pagination__nav">
      <li v-if="rangeStart != 1" class="pagination__nav-item">
        <button class="btn" @click="changePage(1)">1</button>
      </li>
      <li v-if="rangeStart > 2" class="pagination__nav-item">⋯</li>
      <li
        v-for="(page, index) in pages"
        :key="index"
        class="pagination__nav-item"
        :class="{ 'pagination__nav-item--active': page == currentPage }"
      >
        <button class="btn" @click="changePage(page)">
          {{ page }}
        </button>
      </li>
      <li v-if="rangeEnd < pagesCount - 1" class="pagination__nav-item">⋯</li>
      <li v-if="rangeEnd < pagesCount" class="pagination__nav-item">
        <button class="btn" @click="changePage(pagesCount)">
          {{ pagesCount }}
        </button>
      </li>
    </ul>
    <button v-show="currentPage < pagesCount" class="pagination__right btn" @click="getNextPage">
      Next
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    pageRange: {
      type: Number,
      default: 1
    }
  },

  computed: {
    ...mapState('paginationStore', {
      pagesCount: 'pagesCount',
      currentPage: 'currentPage'
    }),
    rangeItems() {
      return this.pageRange * 2
    },
    itemCountLeft() {
      return this.pageRange * 2 + 3
    },

    rangeStart() {
      const start = this.currentPage - this.pageRange
      return start > 0 ? start : 1
    },

    rangeEnd() {
      const end = this.currentPage + this.pageRange
      if (end - this.rangeStart < this.rangeItems) {
        return this.rangeStart + this.rangeItems
      }
      return end < this.pagesCount ? end : this.pagesCount
    },

    pages() {
      const pages = []
      for (let i = this.rangeStart; i <= this.rangeEnd; i += 1) {
        pages.push(i)
      }
      return pages
    }
  },

  methods: {
    ...mapMutations('paginationStore', ['setCurrentPage']),
    getPevPage() {
      this.setCurrentPage(this.currentPage - 1)
    },

    getNextPage() {
      this.setCurrentPage(this.currentPage + 1)
    },

    changePage(value) {
      this.setCurrentPage(value)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: grid;
  grid-template-areas: 'prev nav next';
  grid-template-columns: 1fr 5fr 1fr;

  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  &__right {
    grid-area: next;
  }

  &__left {
    grid-area: prev;
  }

  &__info {
    display: flex;
    grid-area: nav;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  &__nav {
    display: flex;
    grid-area: nav;
    justify-content: center;
    list-style: none;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  &__nav-item {
    display: flex;
    align-items: center;
    margin: 0 6px;
    transition: all 0.2s ease-in-out;

    &--active .btn {
      background-color: #fffae5;
      border: 1px solid #ffdb4d;
    }
  }
}
</style>
