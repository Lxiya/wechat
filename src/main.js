/* import dependences*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

/* import components*/
import App from './App'
import Index from './components/index/Index'
import Sort from './components/sort/Sort'
import Message from './components/message/Message'
import ShopCart from './components/shopCart/ShopCart'
import Person from './components/person/Person'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/person',
    component: Person
  }
]
var router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
