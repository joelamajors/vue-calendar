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
</template>

<script>
export default {
  data () {
    return {
      chosenDate: new Date().toISOString().split('T')[0],
      numberOfDays: 0,
      countryCode: 'US'
    }
  }
}
</script>

<style scoped>
.date-inputs {
  margin-right: .5em;
}

#dateinput {
  margin-bottom: 2em;
}
</style>
