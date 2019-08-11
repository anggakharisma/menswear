import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CategoryShow from './views/CategoryShow';
import ShopIndex from './views/ShopIndex';
import ProductShow from './views/ProductShow';
import CartIndex from './views/CartIndex';
import Login from './views/Login';
import Register from './views/Register';
import userHome from './views/User/Home';

Vue.use(Router)

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/menswear-front/' : '/',
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/category/:categorySlug',
      name: 'category',
      component: CategoryShow
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopIndex
    },
    {
      path: '/shop/:categorySlug/:productId',
      name: 'productShow',
      component: ProductShow
    },
    {
      path: '/cart',
      name: 'cartInddex',
      component: CartIndex
    },
    {
      path: '/user/home',
      name: 'userHome',
      component: userHome
    },
  ]
})
