<template>
  <header>
    <nav class="NavBar" aria-expanded="false">
      <ul class="NavBar__rrss-container">
        <li class="NavBar__rrss-item">
          <span class="NavBar__rrss-title">FOLLOW US</span>
        </li>
        <li class="NavBar__rrss-item">
          <InstagramIcon height="20px" width="20px" color="white" stroke-width="2px" />
        </li>
        <li class="NavBar__rrss-item">
          <FacebookIcon height="20px" width="20px" color="white" stroke-width="2px" />
        </li>
      </ul>
      <ul class="NavBar__content">
        <li
          id="home"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/" class="NavBar__list-title--dark">Home</RouterLink>
        </li>
        <li
          id="training"
          class="NavBar__list-title"
          @mouseenter.prevent="showTraining"
          @click.prevent="clickHandler"
        >
          <RouterLink to="/training" class="NavBar__list-title--dark">FORMACIÓN</RouterLink>
          <ul class="NavBar__list" v-if="isTrainingsShow" @mouseleave.prevent="hideTraining">
            <li class="NavBar__list-item" v-for="training in trainings" :key="training.id">
              <RouterLink :to="training.id">{{ training.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li
          id="programs"
          class="NavBar__list-title"
          @mouseenter.prevent="showPrograms"
          @click.prevent="clickHandler"
        >
          <RouterLink to="/programs" class="NavBar__list-title--dark">Programación</RouterLink>
          <ul class="NavBar__list" v-if="isProgramsShow" @mouseleave.prevent="hidePrograms">
            <li class="NavBar__list-item" v-for="program in programs" :key="program.id">
              <RouterLink :to="program.id">{{ program.name }}</RouterLink>
            </li>
          </ul>
        </li>
        <li
          id="gallery"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/gallery" class="NavBar__list-title--dark">Galería</RouterLink>
        </li>
        <li
          id="shop"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="#" class="NavBar__list-title--dark">Tienda</RouterLink>
        </li>
        <li
          id="aboutUs"
          class="NavBar__list-title"
          @click.prevent="clickHandler"
          @mouseenter.prevent="hideTabs"
        >
          <RouterLink to="/about-us" class="NavBar__list-title--dark">Conócenos</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import TierOneClubIcon from '@/assets/eslint.svg'
import { InstagramIcon, FacebookIcon } from '@zhuowenli/vue-feather-icons'

export default defineComponent({
  components: { RouterLink, InstagramIcon, FacebookIcon },
  setup() {
    const trainings = [
      { name: 'Opción 1', id: '/training' },
      { name: 'Opción 2', id: '/training' }
    ]
    const programs = [
      { name: 'Calendario', id: '/programs' },
      { name: 'Opción 2', id: '/programs' }
    ]

    const isTrainingsShow = ref(false)
    const isProgramsShow = ref(false)
    const lastActiveTab = ref<string | null>(null)

    const showTraining = (): void => {
      isProgramsShow.value = false
      isTrainingsShow.value = true
    }

    const hideTraining = (): void => {
      isTrainingsShow.value = false
    }

    const showPrograms = (): void => {
      isTrainingsShow.value = false
      isProgramsShow.value = true
    }

    const hidePrograms = (): void => {
      isProgramsShow.value = false
    }

    const hideTabs = (): void => {
      isProgramsShow.value = false
      isTrainingsShow.value = false
    }

    const clickHandler = (e: Event): void => {
      const eventTarget = e.currentTarget as HTMLSelectElement
      const id = eventTarget.getAttribute('id')
      hideTabs()

      if (!lastActiveTab.value) {
        lastActiveTab.value = id
        eventTarget.classList.add('active')
        return
      }

      const previousElement = document.getElementById(lastActiveTab.value)
      if (previousElement) {
        lastActiveTab.value = id
        previousElement.classList.remove('active')
        eventTarget.classList.add('active')
      }
    }

    return {
      TierOneClubIcon,
      trainings,
      programs,
      isTrainingsShow,
      isProgramsShow,

      showTraining,
      hideTraining,
      showPrograms,
      hidePrograms,
      clickHandler,
      hideTabs
    }
  }
})
</script>

<style lang="sass">
@import './NavBar.sass'
</style>
