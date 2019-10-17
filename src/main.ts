import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import vueAxios from 'vue-axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'vant/lib/index.less';
import { getStorage } from './utils/util'

Vue.use(vueAxios, axios)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    if (!err.response) {
      return Promise.reject(err)
    }
    err.status = err.response.status || 500
    const msg = err.response.data ? err.response.data.errmsg : ''
    if (msg) {
      err.message = msg
    }
    return Promise.reject(err)
  }
)

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    NProgress.start()
    if (getStorage('user')) {
      next()
    } else {
      if (to.name == 'Login') {
        next()
      } else {
        next('/Login')
      }
    }
  }
})

router.afterEach(to => {
  document.title = to.meta.title
  NProgress.done()
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
