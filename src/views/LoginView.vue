<template>
  <BMainWrap>
    <BLoginForm />
  </BMainWrap>
</template>

<script>
import BLoginForm from '../components/blocks/BLoginForm.vue'
import BMainWrap from '../components/blocks/BMainWrap.vue'

export default {
  components: {
    BLoginForm,
    BMainWrap
  }
}
</script>

<style lang="sass">
.daa
  color: $color-lightgreen
</style>
