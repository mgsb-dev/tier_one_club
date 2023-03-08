<template>
  <div class="About">
    <ViewPanel>
      <h2 class="About__title">This is About page</h2>
    </ViewPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPanel from '@/components/molecules/ViewPanel/ViewPanel.vue'
export default defineComponent({
  components: { ViewPanel },
  setup() {
    return
  }
})
</script>

<style lang="sass">
@import './AboutView.sass'
</style>
