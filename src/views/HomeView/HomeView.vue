<template>
  <main class="Home__wrapper">
    <div
      id="homeFirstContainer"
      class="Home__first-container animate__animated animate__fadeInLeftBig"
    >
      <div class="Home__title-container">
        <h1 class="Home__title-one animate__animated animate__fadeInLeftBig animate__slow">TIER</h1>
      </div>
    </div>

    <div class="Home__second-container">
      <h1 class="Home__title animate__animated animate__slideInRight animate__slow">ONE</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style lang="sass">
@import './HomeView.sass'
</style>
