<template>
  <BLoginWrap>
    <BLoginForm />
  </BLoginWrap>
</template>

<script>
import BLoginForm from '../components/blocks/BLoginForm.vue'
import BLoginWrap from '../components/blocks/BLoginWrap.vue'

export default {
  components: {
    BLoginForm,
    BLoginWrap
  }
}
</script>

<style lang="sass">
.daa
  color: $color-lightgreen
</style>
