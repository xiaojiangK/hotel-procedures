import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import vueAxios from 'vue-axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(vueAxios, axios);

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
    document.title = to.meta.title
  }
  NProgress.start()
  next()
})

router.afterEach(res => {
  NProgress.done()
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
