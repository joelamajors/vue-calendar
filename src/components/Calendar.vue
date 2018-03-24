<template>
  <div id= "date-name-row" class="calendar">
    <table>
      <thead>
        <tr>
          <th class="date-names">S</th>
          <th class="date-names">M</th>
          <th class="date-names">T</th>
          <th class="date-names">W</th>
          <th class="date-names">T</th>
          <th class="date-names">F</th>
          <th class="date-names">S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
        </tr>
        <tr>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
        </tr>
        <tr>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
        </tr>
        <tr>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
          <td class="empty-days"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style scoped>
.date-names {
  border: 1px solid black;
  color: black;
  width: 2em;
}
.empty-days {
  background-color: lightgrey;
  border: 1px solid white;
}
.weekends {
  background-color: yellow;
  border: 1px solid white;
}
tr {
  height: 2em;
}
</style>
