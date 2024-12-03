<template>
  <div class="main-wrap">
    <h1 class="main-wrap__title">Список заявок</h1>
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
.main-wrap
  display: flex
  flex-direction: column
  height: 100%
  background-color: #EEEEEE
  padding: 23.5px 15px 0 15px

  &__title
    font-family: $font-family
    font-weight: 400
    font-size: 20px
    line-height: 120%
    color: #454545
    margin-bottom: 71.5px
</style>
