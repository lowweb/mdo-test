<template>
  <UPopup class="order-view">
    <template #caption><span>Создание заявки</span><span>Новая</span></template>
    <template #body>
      <div class="order-view__row">
        <USelect
          v-model="premise_id"
          :options="getAddressesById"
          @change="selectPremise"
          placeholder="Дом"
        />
        <USelect v-model="apartment_id" :options="getApartament" />
        <UInput v-model="due_date" type="date" placeholder="Срок" />
      </div>
      <div class="order-view__row">
        <UInput v-model="last_name" placeholder="Фамилия" />
        <UInput v-model="first_name" placeholder="Имя" />
        <UInput v-model="patronymic_name" placeholder="Отчество" />
        <UInput v-model="username" placeholder="Телефон" />
      </div>
      <div class="order-view__row">
        <UTextArea v-model="description" placeholder="Описание заявки" />
      </div>
    </template>
    <template #footer>
      <UButton @click="saveForm">Создать</UButton>
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
    ...mapActions('itemStore', ['putAppeal']),
    ...mapActions('addressesStore', ['fetchApartament']),

    async saveForm() {
      try {
        console.log('ffsdf')
        await this.putAppeal()
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

<style lang="sass"></style>
