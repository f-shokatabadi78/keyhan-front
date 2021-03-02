import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import Blog from '../views/pages/Blog.vue'
import Product from '../views/pages/Product.vue'
import Productd from '../views/pages/Pruductd.vue'
import Cart from '../views/pages/cart.vue'
import Checkout from '../views/pages/checkout.vue'
import Profile from '../views/pages/profile.vue'
import Dashboard from '../views/pages/profile/dashboard.vue'
import Myorder from '../views/pages/profile/myorder.vue'
import Myorder1 from '../views/pages/profile/myorder1.vue'
import Downloads from '../views/pages/profile/downloads.vue'
import Wishlist from '../views/pages/profile/wishlist.vue'
import Address from '../views/pages/profile/address.vue'
import MyAccount from '../views/pages/profile/myaccount.vue'
import ArchiveProduct from '../views/pages/ArchiveProduct.vue'
import ArchiveBlog from '../views/pages/ArchiveBlog.vue'
import Main from '../main.vue'
import Login from '../views/pages/login/login.vue'
import Login1 from '../views/pages/login/login1.vue'
import Login2 from '../views/pages/login/login2.vue'
import ForgetPass from '../views/pages/login/forgetpass.vue'
import Register from '../views/pages/login/register.vue'
import Register1 from '../views/pages/login/register1.vue'
import Register2 from '../views/pages/login/register2.vue'
import P404 from '../views/pages/404.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Main,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home},
      {
        path: '/blog',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/product',
        name: 'Product',
        component: Product
      },
      {
        path: '/productd',
        name: 'Productd',
        component: Productd
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
      },
    
      {
        path: '/profile/',
        component: Profile,
        children:[
          { path: '', component: Dashboard },
          { path: 'Dashboard', component: Dashboard },
          { path: 'myorder', component: Myorder },
          { path: 'myorder1', component: Myorder1 },
          { path: 'downloads', component: Downloads },
          { path: 'wishlist', component: Wishlist },
          { path: 'address', component: Address },
          { path: 'myaccount', component: MyAccount },
        ]
      },
      {
        path: '/archiveproduct',
        name: 'ArchiveProduct',
        component: ArchiveProduct
      },
      {
        path: '/archiveblog',
        name: 'ArchiveBlog',
        component: ArchiveBlog
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    children :[
      { path: '', component: Login1 },
      { path: 'login1', component: Login1 },
      { path: 'login2', component: Login2 },
      { path: 'fp', component: ForgetPass },
      { path: 'register', component: Register },
      { path: 'register1', component: Register1 },
      { path: 'register2', component: Register2 }, 
    ]

  },
  {
    path: '/404',
    name: '404',
    component: P404
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
