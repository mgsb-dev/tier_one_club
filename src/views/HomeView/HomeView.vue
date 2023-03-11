<template>
  <main class="Home__wrapper">
    <div
      id="homeFirstContainer"
      class="Home__first-container animate__animated animate__slideInLeft animate__slow"
    >
      <div class="Home__title-container">
        <h1 class="Home__title-one animate__animated animate__slideInLeft animate__slower">TIER</h1>
      </div>
    </div>

    <div class="Home__second-container">
      <h1 class="Home__title animate__animated animate__slideInRight animate__slower">ONE</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const leave = () => {
      console.log('leave')
    }
    return { leave }
  }
})
</script>

<style lang="sass">
@import './HomeView.sass'
</style>
