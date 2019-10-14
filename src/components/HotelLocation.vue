<template>
  <div class="item location">
    <div class="head">
      <div class="title">
        <img src="@/assets/icon-location.png" alt="">
        <span>Hotel location</span>
      </div>
    </div>
    <div class="content">
      <div class="map"></div>
      <div class="foot">
        <div class="left">
          <p>{{data.name}}</p>
          <span>{{data.city + (data.district=="市、县、区" ? "" : data.district) + data.address}}</span>
        </div>
        <div class="right">
          <a :href="'tel:' + [data.tel]">
            <img src="@/assets/icon-call.png" alt="">
          </a>
          <img src="@/assets/icon-navigation.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelLocation extends Vue {
  @Prop() data!:object;
}
</script>
<style lang="scss" scoped>

</style>