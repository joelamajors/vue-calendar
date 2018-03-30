<template>
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
</template>

<script>
export default {
  data () {
    return {
      dateNames: [
        { id: 0, message: 'S' },
        { id: 1, message: 'M' },
        { id: 2, message: 'T' },
        { id: 3, message: 'W' },
        { id: 4, message: 'T' },
        { id: 5, message: 'F' },
        { id: 6, message: 'S' }
      ]
    }
  }
}
</script>

<style scoped>
  .date-names-table {
    display: inline-block;
    border: 1px solid black;
    color: black;
    min-width: 2em;
    text-align: center;
    margin-right: -.5px;
  }
</style>
