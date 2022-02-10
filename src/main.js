import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import vuetify from './plugins/vuetify'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueCompositionApi);
axios.defaults.baseURL = 'https://jsonmock.hackerrank.com/api'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
