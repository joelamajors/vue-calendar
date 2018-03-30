<template>
  <div id="day-nums" class="calendar">
     <table class="calendar">
       <calendarTableHeader />
       <calendarWeeks />
     </table>
  </div>
</template>

<script>
import CalendarTableHeader from './CalendarTableHeader.vue'
import CalendarWeeks from './CalendarWeeks.vue'

export default {
  components: {
    CalendarTableHeader,
    CalendarWeeks
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
