<template>
  <main class="page__main">
    <router-view v-slot="{ Component }">
      <keep-alive max="5">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<script></script>

<style lang="sass">
*,
*::before,
*::after
  box-sizing: border-box
  margin: 0
  padding: 0
  font-weight: normal

.page__body
  height: 100vh
  font-family: $font-family
  font-size: 14px
  position: relative

.page__app
  height: 100%
  display: flex
  flex-direction: column
  align-items: stretch

.page__main
  display: flex
  flex-direction: column
  align-items: stretch
  margin: 0 auto
  width: 100%
  height: 100%
</style>
