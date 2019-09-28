import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页'
      },
      component: () => import('@/pages/Login.vue')
    }
  ]
});
