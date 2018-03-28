<template>
  <div id="date-name" class="calendar-header">
    <div class="days-of-week">
      <div
        v-for="dateName in dateNames"
        :key="dateName.id"
        class="date-names"
        >
        {{dateName.message}}
      </div>
    </div>
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
    display: inline-block;
    border: 1px solid black;
    color: black;
    min-width: 1em;
    width: 14%;
    text-align: center;
  }
  .days-of-week {
   text-align: center;
  }
</style>
