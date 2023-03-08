<template>
  <div class="Shop">
    <ViewPanel>
      <h2 class="Shop__title">This is Shop page</h2>
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
@import './ShopView.sass'
</style>
