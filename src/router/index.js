import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Success from '@/components/Success'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/success',
      name: 'Success'
      // name: 'Success',
      // component: Success,
      // beforeEnter: (to, from, next) => {
      //   next('/')
      // }
    }
  ]
})
