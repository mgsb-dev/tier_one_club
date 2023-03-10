<template>
  <div class="Calendar">
    <h2 class="Calendar__title">Calendar</h2>
    <Calendar :attributes="attributes" is-dark is-expanded :columns="2" :step="1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Calendar } from 'v-calendar'

export default defineComponent({
  components: { Calendar },
  setup() {
    const importantDate = 'Important date'
    const availableDate = 'Available date'

    const dateInformation = [
      {
        key: 'today',
        highlight: 'gray',
        date: new Date(),
        description: 'Today'
      },
      {
        description: importantDate,
        date: 'March 17, 2023',
        dot: 'red'
      },
      {
        description: availableDate,
        date: 'March 27, 2023',
        dot: 'green'
      }
    ]

    const attributes = dateInformation.map((el) => ({
      key: el.date,
      dates: new Date(el.date),
      dot: el.dot,
      highlight: el.highlight,
      popover: {
        label: el.description
      }
    }))

    return { attributes }
  }
})
</script>

<style lang="sass">
@import './CalendarView.sass'
</style>
