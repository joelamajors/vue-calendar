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
  .date-names-table {
    display: inline-block;
    border: 1px solid black;
    color: black;
    min-width: 2em;
    text-align: center;
  }
</style>
