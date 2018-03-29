<template>
  <div id="day-nums" class="calendar">
     <table class="calendar">
       <calendarTableHeader />
       <calendarTableDays />
     </table>
  </div>
</template>

<script>
import CalendarTableHeader from './CalendarTableHeader.vue'
import CalendarTableDays from './CalendarTableDays.vue'

export default {
  components: {
    CalendarTableHeader,
    CalendarTableDays
  }
}
</script>

<style scoped>
  .calendar {
    margin: 0 auto;
    text-align:center;
    empty-cells: show;
  }
</style>
