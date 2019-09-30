<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in tabBar" :key="index" :class="[item.name == name ? 'active' : '']">
        <router-link :to="item.path">
          <img :src="[item.name == name ? item.activeicon : item.icon]" :alt="item.title"/>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
const home = require('@/assets/icon-home.png');
const home2 = require('@/assets/icon-home2.png');
const booking = require('@/assets/icon-booking.png');
const booking2 = require('@/assets/icon-booking2.png');
const member = require('@/assets/icon-member.png');
const member2 = require('@/assets/icon-member2.png');
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
  @Prop() name!:string;
  tabBar:any[] = [{
    title: 'Home',
    name: 'Index',
    icon: home,
    activeicon: home2,
    path: '/'
  },{
    title: 'Booking',
    name: 'Booking',
    icon: booking,
    activeicon: booking2,
    path: '/Booking'
  },{
    title: 'Member',
    name: 'Member',
    icon: member,
    activeicon: member2,
    path: '/Member'
  }]
}
</script>
<style lang="scss" scoped>
  .footer{
    left: 50%;
    bottom: 0;
    width: 100%;
    position: fixed;
    max-width: 750px;
    background:#fff;
    padding: .2rem 0 .06rem;
    transform: translateX(-50%);
    ul{
      overflow: hidden;
      li{
        float: left;
        width: 33.33%;
        text-align: center;
        img{
          width: .8rem;
          display: block;
          margin: 0 auto;
        }
        p{
          color: #595959;
          font-size: .26rem;
        }
      }
      li.active{
        p{
          color: #FF6634;
        }
      }
    }
  }
</style>