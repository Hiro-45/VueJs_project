import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Ad from '../components/Ads/Ad'
import AdList from '../components/Ads/AdList'
import NewAd from '../components/Ads/NewAd'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'
import Orders from '../components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/ad/:ad',
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'List',
      component: AdList
    },
    {
      path: '/new',
      name: 'NewAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }
  ],
  mode: 'history'
})
