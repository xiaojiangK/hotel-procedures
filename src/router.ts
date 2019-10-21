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
    },
    {
      path: '/WifiList',
      name: 'WifiList',
      meta: {
        title: 'WifiList'
      },
      component: (resolve) => require(['@/pages/WifiList.vue'], resolve)
    },
    {
      path: '/WifiHelp',
      name: 'WifiHelp',
      meta: {
        title: 'WifiHelp'
      },
      component: (resolve) => require(['@/pages/WifiHelp.vue'], resolve)
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      meta: {
        title: 'OrderList'
      },
      component: (resolve) => require(['@/pages/OrderList.vue'], resolve)
    },
    {
      path: '/HotelOrder',
      name: 'HotelOrder',
      meta: {
        title: 'HotelOrder'
      },
      component: (resolve) => require(['@/pages/HotelOrder.vue'], resolve)
    },
    {
      path: '/SubmitComment',
      name: 'SubmitComment',
      meta: {
        title: 'SubmitComment'
      },
      component: (resolve) => require(['@/pages/SubmitComment.vue'], resolve)
    },
    {
      path: '/Comment',
      name: 'Comment',
      meta: {
        title: 'Comment'
      },
      component: (resolve) => require(['@/pages/Comment.vue'], resolve)
    },
    {
      path: '/Achievement',
      name: 'Achievement',
      meta: {
        title: 'Achievement'
      },
      component: (resolve) => require(['@/pages/Achievement.vue'], resolve)
    },
    {
      path: '/InvitedMembers',
      name: 'InvitedMembers',
      meta: {
        title: 'InvitedMembers'
      },
      component: (resolve) => require(['@/pages/InvitedMembers.vue'], resolve)
    },
    {
      path: '/BookingOrder',
      name: 'BookingOrder',
      meta: {
        title: 'BookingOrder'
      },
      component: (resolve) => require(['@/pages/BookingOrder.vue'], resolve)
    },
    {
      path: '/MarketPay',
      name: 'MarketPay',
      meta: {
        title: 'MarketPay'
      },
      component: (resolve) => require(['@/pages/MarketPay.vue'], resolve)
    },
    {
      path: '/MarketOrder',
      name: 'MarketOrder',
      meta: {
        title: 'MarketOrder'
      },
      component: (resolve) => require(['@/pages/MarketOrder.vue'], resolve)
    },
    {
      path: '/ServicePay',
      name: 'ServicePay',
      meta: {
        title: 'ServicePay'
      },
      component: (resolve) => require(['@/pages/ServicePay.vue'], resolve)
    },
    {
      path: '/ServiceOrder',
      name: 'ServiceOrder',
      meta: {
        title: 'ServiceOrder'
      },
      component: (resolve) => require(['@/pages/ServiceOrder.vue'], resolve)
    },
    {
      path: '/Complete',
      name: 'Complete',
      meta: {
        title: 'Complete'
      },
      component: (resolve) => require(['@/pages/Complete.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
