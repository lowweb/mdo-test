<template>
  <UPopup>
    <template #caption>jfefeeklwf</template>
    <template #body>
      <div class="row">
        <USelect><template #selectLabel>Дом</template></USelect>
        <USelect><template #selectLabel>Квартира</template></USelect>
        <UInput><template #inputLabel>Срок</template></UInput>
      </div>
      <div class="row">
        <UInput><template #inputLabel>Фамилия</template></UInput>
        <UInput><template #inputLabel>Имя</template></UInput>
        <UInput><template #inputLabel>Отчество</template></UInput>
        <UInput><template #inputLabel>Телефон</template></UInput>
      </div>
      <div class="row">
        <UInput><template #inputLabel>Описание заявки</template></UInput>
      </div>
    </template>
  </UPopup>
</template>

<script>
import { mapActions } from 'vuex'
import UPopup from '@/components/ui/UPopup.vue'
import UInput from '@/components/ui/UInput.vue'
import USelect from '@/components/ui/USelect.vue'
export default {
  components: {
    UPopup,
    UInput,
    USelect
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  activated() {
    this.fetchOrders()
  },
  methods: {
    ...mapActions('ordersStore', ['fetchOrders']),
    closePopup() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped></style>
