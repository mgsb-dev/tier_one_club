<template>
  <div class="App__background"></div>
  <NavBar />
  
  <RouterView />
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
</style>
