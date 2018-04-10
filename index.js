new Vue({
  el: '#hello-app',
  data: {
    message: 'Vue.js is Powerful!'
  },
  methods: {
    newMessage: function(){
      this.message = 'Vue.js is Powerful Difficult!'
    }
  }
});

const _dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const _monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const _monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

new Vue({
  el: '#calendar-app',
  data: {
    selectedDay: new Date(),
    selectedLength: 0,
    countryCode: 'US'
  },
  methods: {
    firstDate: function(){
      return new Date(this.selectedDay);
    }
  },
  computed: {
    weekdayNames: function(){
      return _dayNames.map((_dayNames) => _dayNames[0])
    },
    dateDayOfWeek: function(){
      let dayOfWeek = this.firstDate().getUTCDate();
      return _dayNames[dayOfWeek -1];
    },
    dateMonth: function(){
      let selectedMonthName = this.firstDate().getUTCMonth();
      return _monthNames[selectedMonthName];
    },
    weeks: function(){
      let week = [];
      // make the previous days show
      
    },
    dayRange: function(){
      let range = [];
      for(let d=0; d<=this.selectedLength; d++){
        let newDate = this.firstDate();
        newDate.setDate(this.firstDate().getDate() + d);
        range.push(newDate);
      }
      return range;
    }
  }
});
