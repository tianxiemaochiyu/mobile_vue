import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mixin from '@/plugins/mixins'
import inject from '@/plugins/inject'
import '@/plugins/component'

Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.use(inject)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
