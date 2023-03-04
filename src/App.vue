<template>
  <div class="spacer"></div>
  <NavBar />
  <div class="spacer"></div>
  <RouterView />
</template>

<script setup lang="ts">
import NavBar from './components/molecules/NavBar/NavBar.vue'
</script>

<style lang="sass" scoped>
.spacer
  height: 3rem
</style>
