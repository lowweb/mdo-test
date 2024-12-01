<template>
  <form class="auth-form" @submit.prevent="handleLogin" role="form" aria-labelledby="login-title">
    <h1 class="auth-form__title">Авторизация</h1>

    <div class="auth-form__body">
      <UInput placeholder="+7" aria-required="true" v-model="username">
        <template #inputLeftIcon><IconPhone /></template>
        <template #inputLabel>Логин или Телефон</template>
      </UInput>
      <UInput
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
      </UInput>
    </div>
    <UButton type="submit">Войти</UButton>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import UButton from '../ui/UButton.vue'
import UInput from '../ui/UInput.vue'
import UCommonInput from '../ui/inputs/UCommonInput.vue'
import UIconInput from '../ui/inputs/UIconInput.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconLock from '../icons/IconLock.vue'
import IconShowPass from '../icons/IconShowPass.vue'
import IconHidePass from '../icons/IconHidePass.vue'
import UIconButton from '../ui/UIconButton.vue'

export default {
  name: 'LoginForm',
  components: {
    UButton,
    UInput,
    UCommonInput,
    UIconInput,
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
    ...mapActions(['login']),
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleLogin() {
      try {
        const token = await this.login({ username: this.username, password: this.password })
        console.log('Logged in successfully, token:', token)
      } catch (error) {
        // console.error('Login failed:', error)
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
