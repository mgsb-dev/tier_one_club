<template>
  <div class="Calendar">
    <ViewPanel>
      <h2 class="Calendar__title">This is Calendar page</h2>
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
@import './CalendarView.sass'
</style>
