import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SearchGoods from '@/components/SearchGoods'
const AddGood = () => import('@/components/AddGood')
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import DMap from '@/components/DMap'
import Edit from '@/components/Edit'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
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
    },
    {
      path:'/addGood',
      name:'AddGood',
      component:AddGood
    },
    {
      path:'/edit',
      name:'Edit',
      component:Edit,
      props:true
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/map',
      name: 'Map',
      component: DMap
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
