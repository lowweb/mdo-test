<template>
  <UPopup class="order-view">
    <template #caption
      ><span>Заявка № {{ number }} (от {{ created_at }})</span><span>{{ status }}</span></template
    >
    <template #body>
      <div class="order-view__row">
        <USelect v-model="premise_id" :options="getAddressesById" @change="selectPremise"
          ><template #selectLabel>Дом</template></USelect
        >
        <USelect v-model="apartment_id" :options="getApartament"
          ><template #selectLabel>Квартира</template></USelect
        >
        <UInput v-model="due_date" type="date"><template #inputLabel>Срок</template></UInput>
      </div>
      <div class="order-view__row">
        <UInput v-model="last_name"><template #inputLabel>Фамилия</template></UInput>
        <UInput v-model="first_name"><template #inputLabel>Имя</template></UInput>
        <UInput v-model="patronymic_name"><template #inputLabel>Отчество</template></UInput>
        <UInput v-model="username"><template #inputLabel>Телефон</template></UInput>
      </div>
      <div class="order-view__row">
        <UTextArea v-model="description"
          ><template #textareaLabel>Описание заявки</template></UTextArea
        >
      </div>
    </template>
    <template #footer>
      <UButton @click="saveForm">Сохранить</UButton>
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
    ...mapGetters('addressesStore', ['getAddressesById', 'getApartament']),
    number: {
      get() {
        return this.getItemField('number')
      },
      set(value) {
        this.setItemField({ field: 'number', value })
      }
    },
    created_at: {
      get() {
        return formatDate(this.getItemField('created_at'), 'DDMMYY')
      },
      set(value) {
        this.setItemField({ field: 'created_at', value })
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
    premise_id: {
      get() {
        return this.getItemField('premise.id')
      },
      set(value) {
        this.setItemField({ field: 'premise.id', value })
      }
    },
    last_name: {
      get() {
        return this.getItemField('applicant.last_name')
      },
      set(value) {
        this.setItemField({ field: 'applicant.last_name', value })
      }
    },
    first_name: {
      get() {
        return this.getItemField('applicant.first_name')
      },
      set(value) {
        this.setItemField({ field: 'applicant.first_name', value })
      }
    },
    patronymic_name: {
      get() {
        return this.getItemField('applicant.patronymic_name')
      },
      set(value) {
        this.setItemField({ field: 'applicant.patronymic_name', value })
      }
    },
    username: {
      get() {
        return this.getItemField('applicant.username')
      },
      set(value) {
        this.setItemField({ field: 'applicant.username', value })
      }
    },
    description: {
      get() {
        return this.getItemField('description')
      },
      set(value) {
        this.setItemField({ field: 'description', value })
      }
    },
    due_date: {
      get() {
        return formatDate(this.getItemField('due_date'), 'YYMMDD')
      },
      set(value) {
        this.setItemField({ field: 'due_date', value })
      }
    },
    status: {
      get() {
        return this.getItemField('status.name')
      },
      set(value) {
        this.setItemField({ field: 'status.name', value })
      }
    }
  },
  methods: {
    closePopup() {
      this.$router.push('/')
    },
    ...mapMutations('itemStore', ['setItemField', 'setItemNull']),
    ...mapMutations('tooltipStore', ['showTooltip']),
    ...mapActions('itemStore', ['updateAppeal']),
    ...mapActions('addressesStore', ['fetchApartament']),

    async saveForm() {
      try {
        await this.updateAppeal()
        this.closePopup()
        this.setItemNull()
      } catch (error) {
        if (error.response) {
          this.setItemNull()
          this.closePopup()
          this.showTooltip({ text: error.response.data.detail, isSuccess: false })
        }
      }
    },
    selectPremise() {
      this.fetchApartament(this.premise_id)
    }
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
