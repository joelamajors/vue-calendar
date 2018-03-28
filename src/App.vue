<template>
  <div id="app">
    <theHeading />
    <dateInput />
    <calendar />
  </div>
</template>

<script>
import TheHeading from './components/TheHeading.vue'
import DateInput from './components/DateInput.vue'
import Calendar from './components/Calendar.vue'

export default {
  name: 'App',
  components: {
    TheHeading,
    Calendar,
    DateInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
