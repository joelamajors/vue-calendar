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
