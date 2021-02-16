import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home.vue'
import Blog from '../views/pages/Blog.vue'
import Product from '../views/pages/Product.vue'
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
