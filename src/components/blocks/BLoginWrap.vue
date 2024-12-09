<template>
  <div class="main-wrap">
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
.main-wrap
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  min-height: 100vh

  &::before
    content: ' '
    position: absolute
    background-image: url(../img-background.png)
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    height: 100%
    width: 100%
    z-index: -1
</style>
