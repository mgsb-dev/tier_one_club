<template>
  <div class="ViewPanel">
    <div class="ViewPanel__spacer"></div>
    <div class="ViewPanel__container animate__animated animate__fadeInUpBig">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  setup() {
  }
})
</script>
<style lang="sass">
@import './ViewPanel.sass'
</style>
