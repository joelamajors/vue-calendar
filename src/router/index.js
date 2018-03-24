import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import DateInput from '@/components/DateInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/',
      name: 'DateInput',
      component: DateInput
    }
  ]
})
