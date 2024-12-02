<template>
  <div class="about">
    <h1>List</h1>
    <UButton>Send</UButton>
  </div>
</template>

<script>
import UButton from '../components/ui/UButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    UButton
  },
  data() {
    return { searchQuery: '' }
  },
  computed: {
    ...mapGetters('ordersStore', ['paginatedItems'])
  },
  methods: {
    ...mapActions('ordersStore', ['fetchItems'])
  },
  created() {
    this.fetchItems()
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
