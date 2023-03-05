<template>
  <footer class="Footer">
    <div></div>
    <div>
      Encuéntranos en:
      <ul>
        <li class="Footer__icon-wrapper">
          <svg-icon :fa-icon="faCoffee" :size="96" flip="horizontal"></svg-icon>
        </li>
        <li class="Footer__icon-wrapper"></li>
        <li class="Footer__icon-wrapper"></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SvgIcon from 'vue3-icon'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
</script>

<style lang="sass" scoped>
@import "./Footer.sass"
</style>
