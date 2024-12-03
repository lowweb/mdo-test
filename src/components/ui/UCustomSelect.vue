<template>
  <div class="custom-select-wrapper">
    <div class="custom-select">
      <div class="select-selected" @click="toggleDropdown">{{ selectedOption }}</div>
      <div class="select-items" v-show="isDropdownOpen">
        <div
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="select-item"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'Выберите опцию',
      options: ['Опция 1', 'Опция 2', 'Опция 3'],
      isDropdownOpen: false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    selectOption(option) {
      this.selectedOption = option
      this.isDropdownOpen = false
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false
      }
    }
  }
}
</script>

<style>
.custom-select-wrapper {
  position: relative;
  display: inline-block;
  width: 200px;
}

.custom-select {
  position: relative;
  font-family: Arial, sans-serif;
}

.select-selected {
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;
}

.select-selected:after {
  content: '';
  position: absolute;
  top: 14px;
  right: 10px;
  border: 6px solid transparent;
  border-color: #333 transparent transparent transparent;
}

.select-selected.select-arrow-active:after {
  border-color: transparent transparent #333 transparent;
  top: 7px;
}

.select-items {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.select-items .select-item {
  padding: 10px;
  cursor: pointer;
}

.select-items .select-item:hover {
  background-color: #f1f1f1;
}
</style>
