<template>
  <div id="day-nums" class="calendar">
     <table class="calendar">
       <calendarTableHeader />
       <calendarTableRows />
     </table>
  </div>
</template>

<script>
import CalendarTableHeader from './CalendarTableHeader.vue'
import CalendarTableRows from './CalendarTableRows.vue'

export default {
  components: {
    CalendarTableHeader,
    CalendarTableRows
  }
}
</script>

<style scoped>
  .calendar {
    margin: 0 auto;
    text-align:center;
  }
</style>
