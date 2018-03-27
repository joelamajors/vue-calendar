<template>
  <div id="date-name" class="calendar-div">
      <table class="calendar">
        <thead>
          <tr>
            <th
            v-for="dateName in dateNames"
            :key="dateName.id"
            class="date-names">
              {{dateName.message}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
          </tr>
          <tr>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
          </tr>
          <tr>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
          </tr>
          <tr>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
            <td class="days empty"></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'date-names',
  data () {
    return {
      dateNames: [
        { message: 'S' },
        { message: 'M' },
        { message: 'T' },
        { message: 'W' },
        { message: 'T' },
        { message: 'F' },
        { message: 'S' }
      ]
    }
  }
}
</script>

<style scoped>
  table.calendar {
    margin: 0 auto;
  }

  .date-names {
    border: 1px solid black;
    color: black;
    width: 2em;
    text-align: center;
  }
  .days {
    border: 1px solid white;
    text-align: center;
  }
  .empty {
    background-color: lightgrey;
  }
  .weekday {
    background-color: yellowgreen;
  }
  .weekend {
    background-color: yellow;
  }
  tr {
    height: 2em;
  }

</style>
