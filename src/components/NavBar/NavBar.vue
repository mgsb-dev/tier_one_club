<template>
  <nav class="NavBar">
    <RouterLink to="/">Home</RouterLink>
    <ul class="NavBar__list">
      <li class="NavBar__list-item" v-for="training in trainings" :key="training">
        {{ training }}
      </li>
    </ul>
    <ul class="NavBar__list">
      <li class="NavBar__list-item" v-for="program in programs" :key="program">{{ program }}</li>
    </ul>
    <div>Galería</div>
    <div>Tienda</div>
    <RouterLink to="/shop">Tienda</RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  setup() {
    const trainings = ['Formación', 'Option one', 'Option two', 'Option three']
    const programs = ['Programación', 'Calendario']

    return {
      trainings,
      programs
    }
  }
})
</script>

<style lang="sass">
@import './NavBar.sass'
</style>
