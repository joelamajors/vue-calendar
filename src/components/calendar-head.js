Vue.component('calendar-head', {
  teamplate: '#calendar-head'
  )
}

var datenamerow = new Vue({
el: '#date-name-row',
  data () {
    return {
      dateName: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ]
    }
  }
})


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
