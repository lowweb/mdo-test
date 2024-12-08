<template>
  <UPopup class="order-view">
    <template #caption
      ><span>Заявка № {{ apartment_id }} (от {{}})</span><span>{{}}</span></template
    >
    <template #body>
      <div class="order-view__row">
        <USelect><template #selectLabel>Дом</template></USelect>
        <USelect><template #selectLabel>Квартира</template></USelect>
        <UInput type="date"><template #inputLabel>Срок</template></UInput>
      </div>
      <div class="order-view__row">
        <UInput v-model="last_name"><template #inputLabel>Фамилия</template></UInput>
        <UInput v-model="apartment_id"><template #inputLabel>Имя</template></UInput>
        <UInput><template #inputLabel>Отчество</template></UInput>
        <UInput><template #inputLabel>Телефон</template></UInput>
      </div>
      <div class="order-view__row">
        <UTextArea><template #textareaLabel>Описание заявки</template></UTextArea>
      </div>
    </template>
    <template #footer>
      <UButton>Сохранить</UButton>
    </template>
  </UPopup>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import UPopup from '@/components/ui/UPopup.vue'
import UInput from '@/components/ui/UInput.vue'
import USelect from '@/components/ui/USelect.vue'
import UButton from '@/components/ui/UButton.vue'
import UTextArea from '@/components/ui/UTextArea.vue'
import { formatDate } from '@/utils/formatDate'

export default {
  components: {
    UPopup,
    UInput,
    USelect,
    UButton,
    UTextArea
  },
  computed: {
    ...mapGetters('itemStore', ['getItemField']),
    // createdAt() {
    //   return formatDate(this.getItem.created_at, 'yymmdd')
    // },
    premise_id: {
      get() {
        return this.getItemField('premise_id')
      },
      set(value) {
        this.setItemField({ field: 'premise_id', value })
      }
    },
    apartment_id: {
      get() {
        return this.getItemField('apartment.id')
      },
      set(value) {
        this.setItemField({ field: 'apartment.id', value })
      }
    },
    last_name: {
      get() {
        return this.getItemField('applicant.last_name')
      },
      set(value) {
        this.setItemField({ field: 'applicant.last_name', value })
      }
    }
  },
  methods: {
    closePopup() {
      this.$router.push('/')
    },
    ...mapMutations('itemStore', ['setItemField'])
  }
}
</script>

<style lang="sass">
.order-view
  & .popup__body
    display: flex
    flex-direction: column
    gap: 32px
    margin-bottom: 24px

  &__row
    display: flex
    gap: 16px
  & .popup__footer
    display: flex
    justify-content: flex-end
</style>
