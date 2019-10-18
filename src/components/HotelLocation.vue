<template>
  <div class="item location">
    <div class="head">
      <div class="title">
        <img src="@/assets/icon-location.png" alt="">
        <span>Hotel location</span>
      </div>
    </div>
    <div class="content">
      <div class="map">
        <baidu-map class="map" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @ready="handler" ak="oEluIhstituvn89W8hisePyemr29HPjr"></baidu-map>
      </div>
      <div class="foot">
        <div class="left">
          <p>{{data.name}}</p>
          <span>{{data.city + (data.district=="市、县、区" ? "" : data.district) + data.address}}</span>
        </div>
        <div class="right">
          <a :href="'tel:' + [data.tel]">
            <img src="@/assets/icon-call.png" alt="">
          </a>
          <a :href="MapUrl" target="_blank">
            <img src="@/assets/icon-navigation.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getStorage } from '@/utils/util';
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components:{
    BaiduMap
  }
})
export default class HotelLocation extends Vue {
  @Prop() data!:object
  center:any = {
    lng: 0,
    lat: 0
  }
  zoom:number = 18
  address:string = ''

  get MapUrl() {
    return `http://api.map.baidu.com/geocoder?address=${this.address}&output=html&src=webapp.baidu.openAPIdemo`
  }
  handler() {
    const { address, coordinates } = getStorage('hotel')
    this.address = address
    this.center.lng = coordinates[0]
    this.center.lat = coordinates[1]
  }
}
</script>
<style lang="scss" scoped>

</style>