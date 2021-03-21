import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import gear from './equipment-data.js'

let data = {
  hikes : mock,
  equipment : gear,
  currentHike : null
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
