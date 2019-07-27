import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';

//import Vuetify from 'vuetify'


Vue.config.productionTip = false


Vue.use(Vuetify, {
  theme: {
    primary: '#00838F',
    secondary: '#00ACC1',
    accent: '#00B8D4',
    error: '#D50000'
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
