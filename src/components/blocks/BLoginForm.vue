<template>
  <form class="auth-form" @submit.prevent="handleLogin" role="form" aria-labelledby="login-title">
    <h1 class="auth-form__title">Авторизация</h1>

    <div class="auth-form__body">
      <UFormInput placeholder="+7" aria-required="true" v-model="username">
        <template #inputLeftIcon><IconPhone /></template>
        <template #inputLabel>Логин или Телефон</template>
      </UFormInput>
      <UFormInput
        placeholder="Пароль"
        :type="showPassword ? 'text' : 'password'"
        aria-required="true"
        v-model="password"
      >
        <template #inputLeftIcon><IconLock /></template>
        <template #inputRightIcon>
          <UIconButton @click="togglePassword">
            <IconHidePass v-if="!showPassword"></IconHidePass>
            <IconShowPass v-if="showPassword"></IconShowPass>
          </UIconButton>
        </template>
      </UFormInput>
    </div>
    <UButton type="submit">Войти</UButton>
  </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import UButton from '../ui/UButton.vue'
import UFormInput from '../ui/UFormInput.vue'
import UCommonInput from '../ui/inputs/UCommonInput.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconLock from '../icons/IconLock.vue'
import IconShowPass from '../icons/IconShowPass.vue'
import IconHidePass from '../icons/IconHidePass.vue'
import UIconButton from '../ui/UIconButton.vue'
import router from '@/router'

export default {
  name: 'LoginForm',
  components: {
    UButton,
    UFormInput,
    UCommonInput,
    IconPhone,
    IconLock,
    IconShowPass,
    IconHidePass,
    UIconButton
  },
  data() {
    return {
      username: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    ...mapActions('authStore', ['login']),
    ...mapMutations('tooltipStore', ['showTooltip']),
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleLogin() {
      try {
        const token = await this.login({ username: this.username, password: this.password })
        console.log('Logged in successfully, token:', token)
        router.push('/')
      } catch (error) {
        this.showTooltip({ text: 'Неправильные данные', isSuccess: false })
      }
    }
  }
}
</script>

<style lang="sass">
.auth-form
  border-radius: 5px
  padding: 86px 16px 20px 16px
  width: 340px
  height: 290px
  background: $color-white
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  justify-content: space-between

  &__title
    position: absolute
    top: -19px
    border-radius: 5px
    padding: 18px 102px
    color: $color-white
    background-color: $color-green
    font-family: $second-family
    font-weight: 500
    font-size: 16px
    // line-height: 20px
    line-height: 125%
    color: #fff

  &__body
    display: flex
    flex-direction: column
    gap: 8px
    width: 100%

    & .input
      padding-bottom: 8px
</style>
