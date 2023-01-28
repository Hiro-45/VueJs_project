import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  }),
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
