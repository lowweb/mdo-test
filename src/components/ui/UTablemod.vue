<template>
  <div>
    <input type="text" v-model="searchQuery" @input="updateSearch" placeholder="Search by number" />
    <select v-model="addressFilter" @change="updateAddressFilter">
      <option value="">All Addresses</option>
      <option v-for="address in uniqueAddresses" :key="address" :value="address">
        {{ address }}
      </option>
    </select>
    <table>
      <thead>
        <tr>
          <th @click="sortTable('number')">Number</th>
          <th @click="sortTable('created_at')">Created At</th>
          <th>Address</th>
          <th>Last Name</th>
          <th>Description</th>
          <th>Due Date</th>
          <th @click="sortTable('statusname')">Status Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.number">
          <td>{{ item.number }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.statusname }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('dataStore', ['searchQuery', 'addressFilter']),
    ...mapGetters('dataStore', ['paginatedData', 'uniqueAddresses'])
  },
  methods: {
    ...mapMutations('dataStore', [
      'setSearchQuery',
      'setAddressFilter',
      'setSortKey',
      'setSortOrder'
    ]),
    updateSearch(event) {
      this.setSearchQuery(event.target.value)
    },
    updateAddressFilter(event) {
      this.setAddressFilter(event.target.value)
    },
    sortTable(key) {
      if (this.sortKey === key) {
        this.setSortOrder(this.sortOrder * -1)
      } else {
        this.setSortKey(key)
        this.setSortOrder(1)
      }
    }
  }
}
</script>
