<template>
  <div class="wrap">
    <Header title="WIFI Use help"></Header>
    <div class="main">
      <div v-if="wifi.auth == 2">
        <div class="top" >
          <img class="img-warning" src="@/assets/wifi-warning.png"/>
          <div class="text bold">Hotel WiFi account password</div>
          <div class="msg">You can try to connect manually</div> 
          <div class="wifi-ssid" >
            <img class="icon-wifi" src="@/assets/icon_wifi.png"/>
            <div class="wifi-text" >{{wifi.name}}</div>  
          </div>
          <div class="wifi-ssid" >
            <img class="icon-wifi" src="@/assets/icon-pad.png"/>
            <span class="wifi-text password" selectable='true'>{{wifi.pass}}</span>
            <div class="btn-copy" v-clipboard:copy="wifi.pass" v-clipboard:success="onCopy">Copy password</div>
          </div>  
        </div>
        <div class="bottom" >
          <div class="wifi-text bold">If the connection encounters problems:</div>
          <div class="wifi-text mt">1. Maybe WiFi signal is weak</div> 
          <div class="wifi-text mt">2. Please click copy password to manually connect WiFi</div>
        </div>
      </div>

      <!-- 需要认证的wifi -->
      <div v-else>
        <div class="top" style="height:676rpx;">
          <img class="img-warning" src="@/assets/wifi-auth.png"/>
          <div class="text">Your hotel</div>
          <div class="text" style="margin-top:10rpx;">Use WiFi after real-name authentication is required</div> 
        </div>
        <div class="bottom"  style="height:312rpx;">
          <div class="wifi-text bold">Real-name authentication steps:</div>
          <div class="wifi-text mt">1. Open cell phone Settings, connect to the hotel wireless network,WiFi network name：{{wifi.name}}</div> 
          <div class="wifi-text mt">2. Open the mobile phone browser, visit any url automatically jump to the real name authentication page</div>
          <div class="wifi-text mt">3. Complete real-name authentication to access the Internet for free</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueClipboard from 'vue-clipboard2';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

Vue.use(VueClipboard)

@Component({
  components: {
    Header
  }
})
export default class WifiHelp extends Vue {
  wifi:object = {
    name: '',
    pass: '',
    auth: ''
  }
  onCopy() {
    this.$toast.success('Copy Success')
  }
  created() {
    this.wifi = this.$route.query
  }
}
</script>
<style lang="scss" scoped>
  .main{
    .top {
      width: 100%;
      height: 7.34rem;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0 .2rem;
      .img-warning {
        width: 1.96rem;
        margin: 1.08rem 0 0
      }
      .text {
        font-size: .32rem;
        color: #333333;
        margin: 1.12rem 0 0
      }
      .text::after {
        border-bottom: .01rem solid #E1E1E1
      }
      .bold {
        font-weight: bold;
      }
      .msg {
        font-size: .24rem;
        color: #666666;
        margin: .2rem 0 0
      }
      .wifi-ssid {
        width: 90%;
        height: .4rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: .5rem 0 0;
      }
      .icon-wifi {
        width: .4rem
      }
      .wifi-text {
        font-size: .32rem;
        color: #494A4A;
        margin: 0 .5rem
      }
      .password {
        width: 3.9rem
      }
      .btn-copy {
        width: 1.86rem;
        padding: .1rem;
        cursor: pointer;
        background: #4A90E3;
        line-height: .4rem;
        text-align: center;
        color: white;
        font-size: .24rem;
        border-radius: .08rem
      }
    }
    .bottom {
      padding: .4rem .2rem;
      background: white;
      .mt {
        margin: .18rem 0 0
      }
    }
  }
</style>