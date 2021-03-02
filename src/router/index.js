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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
