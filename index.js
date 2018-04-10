new Vue({
  el: '#calendar-app',
  data: {
    selectedDay: "09/23/2006",
    selectedLength: 30,
    countryCode: "US",
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  computed: {
    selectedDate: function (){
      return new Date(this.selectedDay);
    },
    firstDay: function () {
      return this.selectedDate.getDate();
    },
    firstMonth: function () {
      return this.selectedDate.getMonth() + 1;
    },
    firstYear: function () {
      return this. selectedDate.getFullYear();
    },
    endDay: function() {
      var d = new Date(this.selectedDate);
      return new Date(d.setDate(d.getDate() + (this.selectedLength - 1)));
    },
    endMonth: function() {
      return this.endDay.getMonth() + 1;
    },
    endYear: function() {
      return this.endDay.getFullYear();
    },
    makeMonth: function(){
      var months = [],
          daysUsed = 0,
          daysLeft = this.selectedLength,
          totalMonth = (this.endMonth - this.firstMonth) + (12 * (this.endYear - this.firstYear)) + 1;

      for (var i = 0; i < totalMonth; i++) {
        var nextDay = new Date(this.selectedDate),
            currentDay = nextDay.setDate(nextDay.getDate() + daysUsed),
            monthNum = new Date(currentDay).getMonth() + 1,
            monthName = this.monthNames[monthNum - 1],
            currentYear = new Date(currentDay).getFullYear(),
            first = i == 0 ? this.firstDay : 1,
            totalDays = new Date(this.firstYear, monthNum, 0).getDate() - (first - 1),
            days = daysLeft > totalDays ? totalDays : daysLeft,
            lead = i == 0 ? this.selectedDate.getDay() : new Date(currentYear, monthNum - 1, 1).getDay(),
            leftover = (days + lead) % 7,
            tail = leftover > 0 ? 7 - leftover : 0

        var month = {
          title: monthName,
          month: monthNum,
          start: first,
          year: currentYear,
          days: days,
          lead: lead,
          tail: tail
        }
        daysLeft -= days;
        daysUsed += days;
        months.push(month);
      }
      return months
    }
  }
});
