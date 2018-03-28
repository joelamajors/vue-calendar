<template>
  <div id="day-nums" class="calendar">
    <div class="dates-of-week">
      <div
        v-for="dateNum in dateNums"
        :key="dateNum.id"
        class="days inactive">
          {{dateNum.dayOfMonth}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'day-nums',
  data () {
    return {
      dateNums: [
        { dayOfMonth: 1 },
        { dayOfMonth: 2 },
        { dayOfMonth: 3 },
        { dayOfMonth: 4 },
        { dayOfMonth: 5 },
        { dayOfMonth: 6 },
        { dayOfMonth: 7 },
        { dayOfMonth: 8 },
        { dayOfMonth: 9 },
        { dayOfMonth: 10 },
        { dayOfMonth: 11 },
        { dayOfMonth: 12 },
        { dayOfMonth: 13 },
        { dayOfMonth: 14 }
      ]
    }
  }
}
</script>

<style scoped>
  .calendar {
    margin-top: .25em;
    text-align:center;
  }
  .days {
    display: inline-block;
    border: 1px solid white;
    min-width: 1em;
    width: 14%;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .inactive {
    background-color: lightgrey;
  }
  .weekday {
    background-color: yellowgreen;
  }
  .weekend {
    background-color: yellow;
  }
  .dates-of-week {
    text-align: center;
  }
</style>
