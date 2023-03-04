<template>
  <header>
    <nav class="NavBar" id="bs-navbar" aria-expanded="false">
      <div class="NavBar__logo-container">
        <img :src="TierOneClubIcon" class="NavBar__logo" />
      </div>
      <ul class="NavBar__content">
        <li class="NavBar__list-title text__align--center">
          <RouterLink to="/" class="NavBar__list-title--dark">Home</RouterLink>
        </li>
        <li class="NavBar__list-title">
          <RouterLink to="/training" class="NavBar__list-title--dark">Formación</RouterLink>
          <ul class="NavBar__list">
            <li class="NavBar__list-item" v-for="training in trainings" :key="training.id">
              <RouterLink :to="training.id">{{ training.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li class="NavBar__list-title">
          <RouterLink to="/programs" class="NavBar__list-title--dark">Programación</RouterLink>
          <ul class="NavBar__list">
            <li class="NavBar__list-item" v-for="program in programs" :key="program.id">
              <RouterLink :to="program.id">{{ program.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li class="NavBar__list-title text__align--center">
          <RouterLink to="/gallery" class="NavBar__list-title--dark">Galería</RouterLink>
        </li>
        <li class="NavBar__list-title">
          <RouterLink to="/about-us" class="NavBar__list-title--dark">Sobre nosotros</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import TierOneClubIcon from '@/assets/rubik.png'

export default defineComponent({
  components: { RouterLink },
  setup() {
    const trainings = [
      { name: 'Opción 1', id: '/training' },
      { name: 'Opción 2', id: '/training' }
    ]
    const programs = [
      { name: 'Calendario', id: '/programs' },
      { name: 'Opción 2', id: '/programs' }
    ]

    return {
      TierOneClubIcon,
      trainings,
      programs
    }
  }
})
</script>

<style lang="sass">
@import './NavBar.sass'
</style>
