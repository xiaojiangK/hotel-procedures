<template>
  <div class="wrap">
    <Header title="Hotel Name"></Header>
    <div class="main">
      <ul>
        <li v-for="(item, index) in list"  :key="index">
          <div class='list-item' @click='connectWifi(item)'>
            <div class='wifiName'>{{item.wifi_name}}</div>
            <img class='wifi-img' src='@/assets/icon_wifi.png'/>
          </div>  
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { getStorage } from '@/utils/util';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class WifiList extends Vue {
  list:any[] = getStorage('hotel').wifiList

  connectWifi(item:any) {
    this.$router.push({ name: 'WifiHelp', query: {
      name: item.wifi_name,
      pass: item.wifi_pwd,
      auth: item.authentication
    }})
  }
}
</script>
<style lang="scss" scoped>
  .list-item {
    height: 1rem;
    display: flex;
    padding: 0 .3rem;
    margin: .2rem auto;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
    .wifiName {
      color: #333;
      font-size: .32rem;
    }
    .wifi-img {
      width: .4rem;
    }
    &:hover{
      background: #f1f1f1
    }
  }
</style>