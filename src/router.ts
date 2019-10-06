import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: 'Index'
      },
      component: () => import('@/pages/Index.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      meta: {
        title: 'Register'
      },
      component: () => import('@/pages/Register.vue')
    },
    {
      path: '/Retrieve',
      name: 'Retrieve',
      meta: {
        title: 'Retrieve'
      },
      component: () => import('@/pages/Retrieve.vue')
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      meta: {
        title: 'EditUser'
      },
      component: () => import('@/pages/EditUser.vue')
    },
    {
      path: '/Member',
      name: 'Member',
      meta: {
        title: 'Member'
      },
      component: () => import('@/pages/Member.vue')
    },
    {
      path: '/Booking',
      name: 'Booking',
      meta: {
        title: 'Booking'
      },
      component: () => import('@/pages/Booking.vue')
    }
  ]
});
