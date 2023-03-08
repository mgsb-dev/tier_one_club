<template>
  <div class="Gallery">
    <ViewPanel>
      <h2 class="Gallery__title">This is Gallery page</h2>
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
@import './GalleryView.sass'
</style>
