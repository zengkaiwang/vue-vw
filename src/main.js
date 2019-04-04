// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/style/global.less'

import toastRegistry from '@/components/common/toast/index'
// import registryLoading from '@/components/common/loading/index'

Vue.use(toastRegistry);
// Vue.use(registryLoading);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
