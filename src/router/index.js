import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SearchGoods from '@/components/SearchGoods'
//import AddGood from '@/components/AddGood'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goods',
      name: 'SearchGoods',
      component: SearchGoods
    }
  ]
})
