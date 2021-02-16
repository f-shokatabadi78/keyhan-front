import Vue from 'vue'
import App from './main.vue'
import router from './router'
import './assets/css/style.css' //tailwind
import './assets/css/fontawesome.min.css' //fontawesome
import './assets/css/brands.min.css'//fontawesome
import './assets/css/light.min.css'//fontawesome
import Vuesax from 'vuesax'//Vuesax 
import 'vuesax/dist/vuesax.css' //Vuesax styles

 Vue.use(Vuesax, {
  rtl: true
 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
