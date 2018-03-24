<template>
  <div class="calendar">
    <table>
      <tr>
        <td class="date-names">S</td>
        <td class="date-names">M</td>
        <td class="date-names">T</td>
        <td class="date-names">W</td>
        <td class="date-names">T</td>
        <td class="date-names">F</td>
        <td class="date-names">S</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.date-names {
  color: black;
  background-color: lightgrey;
  width: 30px;
}
</style>
