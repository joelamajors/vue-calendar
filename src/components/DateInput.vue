<template>
  <div id="dateinput">
    <form>
      Date: <input id="date-selection" type="date" class="date-inputs"/>
      Number of Days: <input id="number-days" type="number" class="date-inputs"/>
      Country Code: <input id="country-code" type="text" class="date-inputs"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DateInput'
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
