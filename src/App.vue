<template>
  <div id="app">
    <headerVue></headerVue>
    <dateInput></dateInput>
    <calendarHeader></calendarHeader>
    <calendar></calendar>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import CalendarHeader from './components/CalendarHeader.vue'
import Calendar from './components/Calendar.vue'
import DateInput from './components/DateInput.vue'

export default {
  name: 'App',
  components: {
    HeaderVue,
    CalendarHeader,
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
