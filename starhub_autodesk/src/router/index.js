import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home.index',
      component: Login
    },
    {
      path: '/quotation',
      name: 'quotation.index',
      component: Login
    },
    {
      path: '/orders',
      name: 'orders.index',
      component: Login
    },
    {
      path: '/company',
      name: 'company.index',
      component: Login
    }
  ]
})
