<template>
  <div id="dateinput">
    <form>
      Date:
        <input
          id="date-selection"
          type="date"
          :value="chosenDate && chosenDate.toISOString().split('T')[0]"
          @input="chosenDate = $event.target.valueAsDate"
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
      chosenDate: new Date(),
      numberOfDays: 0,
      countryCode: 'US'
    }
  }
  // methods: {
  //   setDate() {
  //     this.chosenDate = new chosenDate.setDate();
  //   }
  // }
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
