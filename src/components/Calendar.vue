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
