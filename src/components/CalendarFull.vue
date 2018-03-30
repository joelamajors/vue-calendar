<template>
  <div id="dateinput">
    <form>
      Date:
        <input
          id="date-selection"
          type="date"
          v-model="chosenDate"
          class="date-inputs"
        />
      Number of Days:
        <input
          id="number-days"
          type="number"
          v-model="numberOfDays"
          class="date-inputs"
        />
      Country Code:
        <input
          id="country-code"
          type="text"
          v-model="countryCode"
          class="date-inputs"
        />
    </form>
  </div>
  <div id="day-nums" class="calendar">
    <table class="calendar">
      <thead>
        <tr>
          <td
            id="dateNames"
            v-for="dateName in dateNames"
            :key="dateName.id"
            class="date-names-table"
          >
            {{dateName.message}}
          </td>
        </tr>
      </thead>
      
      <tr>
        <td
          v-for="dateNum in dateNums"
          :key="dateNum"
          class="days inactive"
        >
          {{ dateNum }}
        </td>
      </tr>

    </table>
  </div>
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

export default {
  data () {
    return {
      chosenDate: new Date().toISOString().split('T')[0],
      numberOfDays: 0,
      countryCode: 'US'
    }
  }
}

export default {
  data () {
    return {
      dateNames: [
        {message: 'S'},
        {message: 'M'},
        {message: 'T'},
        {message: 'W'},
        {message: 'T'},
        {message: 'F'},
        {message: 'S'}
      ]
    }
  }
}

</script>

<style scoped>
  .calendar {
    margin: 0 auto;
    text-align:center;
    empty-cells: show;
  }
  .date-inputs {
    margin-right: .5em;
  }
  #dateinput {
    margin-bottom: 2em;
  }
  .date-names-table {
    display: inline-block;
    border: 1px solid black;
    color: black;
    min-width: 2em;
    text-align: center;
  }
  .days {
    display: inline-block;
    border: 1px solid white;
    min-width: 2em;
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
