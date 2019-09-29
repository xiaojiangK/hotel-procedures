<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in tabBar" :key="index" :class="[item.active ? 'active' : '']">
        <router-link :to="item.url">
          <img :src="[item.active ? item.icon2 : item.icon]" alt="">
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
const home = require('@/assets/icon-home.png');
const home2 = require('@/assets/icon-home.png');
const booking = require('@/assets/icon-home.png');
const booking2 = require('@/assets/icon-home.png');
const member = require('@/assets/icon-home.png');
const member2 = require('@/assets/icon-home.png');
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Footer extends Vue {
  tabBar:any[] = [{
    title: 'Home',
    active: false,
    icon: home,
    icon2: home2,
    url: '/'
  },{
    title: 'Booking',
    active: false,
    icon: booking,
    icon2: booking2,
    url: '/Booking'
  },{
    title: 'Member',
    active: true,
    icon: member,
    icon2: member2,
    url: '/Member'
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