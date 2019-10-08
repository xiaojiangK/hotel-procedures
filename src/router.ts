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
      component: (resolve) => require(['@/pages/Index.vue'], resolve)
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: 'Login'
      },
      component: (resolve) => require(['@/pages/Login.vue'], resolve)
    },
    {
      path: '/Register',
      name: 'Register',
      meta: {
        title: 'Register'
      },
      component: (resolve) => require(['@/pages/Register.vue'], resolve)
    },
    {
      path: '/Retrieve',
      name: 'Retrieve',
      meta: {
        title: 'Retrieve'
      },
      component: (resolve) => require(['@/pages/Retrieve.vue'], resolve)
    },
    {
      path: '/EditUser',
      name: 'EditUser',
      meta: {
        title: 'EditUser'
      },
      component: (resolve) => require(['@/pages/EditUser.vue'], resolve)
    },
    {
      path: '/Member',
      name: 'Member',
      meta: {
        title: 'Member'
      },
      component: (resolve) => require(['@/pages/Member.vue'], resolve)
    },
    {
      path: '/Booking',
      name: 'Booking',
      meta: {
        title: 'Booking'
      },
      component: (resolve) => require(['@/pages/Booking.vue'], resolve)
    },
    {
      path: '/Breakfast',
      name: 'Breakfast',
      meta: {
        title: 'Breakfast'
      },
      component: (resolve) => require(['@/pages/Breakfast.vue'], resolve)
    },
    {
      path: '/HotelFacility',
      name: 'HotelFacility',
      meta: {
        title: 'HotelFacility'
      },
      component: (resolve) => require(['@/pages/HotelFacility.vue'], resolve)
    },
    {
      path: '/HotelStore',
      name: 'HotelStore',
      meta: {
        title: 'HotelStore'
      },
      component: (resolve) => require(['@/pages/HotelStore.vue'], resolve)
    },
    {
      path: '/HotelAround',
      name: 'HotelAround',
      meta: {
        title: 'HotelAround'
      },
      component: (resolve) => require(['@/pages/HotelAround.vue'], resolve)
    }
  ]
});
