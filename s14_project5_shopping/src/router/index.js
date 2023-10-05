import { createRouter, createWebHashHistory } from 'vue-router'

//  把两个 page 引进来
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'


// 你输入： http://localhost:8080/  ==会自动变成==》  http://localhost:8080/#/
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
