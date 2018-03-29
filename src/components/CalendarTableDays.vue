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
      dateNums: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ' ' ]
    }
  }
}
</script>

<style scoped>
  .days {
    display: inline-block;
    border: 1px solid white;
    min-width: 2em;
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
