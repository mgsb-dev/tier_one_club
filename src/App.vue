<template>
  <div class="App__background"></div>
  <NavBar />
  <!-- <RouterView /> -->
  <RouterView v-slot="{ Component }">
    <transition
      name="custom-classes-transition"
      leave-active-class="animate__animated animate__slideOutRight animate__fast"
      enter-active-class="animate__animated animate__slideInLeft animate__fast"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
import NavBar from './components/molecules/NavBar/NavBar.vue'
</script>

<style lang="sass" scoped>
.App__background
  position: absolute
  width: 100vw
  height: 100vh
  background: url('@/assets/background.jpg') no-repeat center
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  z-index: -1
  background-position: bottom
  filter: saturate(0)

.fade-enter-to, .fade-leave
  opacity: 1
.fade-enter-active, .fade-leave-active
  transition: opacity 0.8s ease-out
.fade-enter, .fade-leave-to
  opacity: 0
</style>
