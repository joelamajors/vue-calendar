<template>
  <tr>
    <td
      v-for="dateNum in dateNums"
      :key="dateNum"
      class="days inactive"
    >
      {{ dateNum }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'day-nums',
  data () {
    return {
      dateNums: [ '', '', '', '', '', '', '' ]
    }
  }
}
</script>

<style scoped>
  .days {
    display: inline-block;
    border: 1px solid white;
    min-width: 2.1em;
    min-height: 1.5em;
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
