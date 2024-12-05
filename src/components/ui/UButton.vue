<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="sass">
.button
  border-radius: 4px
  padding: 8px 35px
  box-shadow: 0 4px 4px 0 rgba(106, 174, 94, 0.25)
  background: #50b053
  font-family: $font-family
  font-weight: 400
  font-size: 14px
  // line-height: 20px
  line-height: 143%
  text-align: center
  color: $color-white
  border: none

  &--medium
    padding: 7px 16px
  &--small
    padding: 4px 14.5px
  &:hover
    background-color: $color-green
</style>
