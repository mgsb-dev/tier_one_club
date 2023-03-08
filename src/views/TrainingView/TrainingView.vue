<template>
  <div class="Training">
    <ViewPanel>
      <h2 class="Training__title">This is Training page</h2>
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
@import './TrainingView.sass'
</style>
