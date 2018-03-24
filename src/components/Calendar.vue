<template>
  <div id="date-name-row" class="calendar">
    <table>
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
    text-align: center;
  }
  .weekday {
    background-color: yellowgreen;
    text-align: center;
  }
  .weekend {
    background-color: yellow;
    text-align: center;
  }
  tr {
    height: 2em;
  }
  #date-name-row {
align-items: center;
  }
</style>
