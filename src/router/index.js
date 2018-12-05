import Vue from 'vue'
import Router from 'vue-router'
import auth from'@/auth'
import Home from '@/components/Home'
import SearchGoods from '@/components/SearchGoods'
const AddGood = () => import('@/components/AddGood')
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import DMap from '@/components/DMap'
import Edit from '@/components/Edit'
import Auth from '@/components/Auth'
import Dashboard from '@/components/dashboard'
Vue.use(Router)

var routes = [
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
  { path: '/auth',
    name: 'auth',
    component: Auth, meta: { guestOnly: true }
  },
  { path: '/dashboard',
    name: 'dashboard',
    component: Dashboard, meta: { requireAuth: true } },
  { path: '*',
    redirect: '/Login' }
]
export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
