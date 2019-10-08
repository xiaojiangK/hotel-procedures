<template>
  <div class="item facilities">
    <div class="head">
      <div class="title">
        <img src="@/assets/icon-facility-sm.png" alt="">
        <span>Hotel facilities</span>
        <router-link to="/HotelFacility">
          <img src="@/assets/icon-next.png" class="next" alt="">
        </router-link>
      </div>
    </div>
    <div class="content">
      <div class="picture">
        <img src="@/assets/banner.png" alt="">
      </div>
      <div class="foot">
        <div class="left">
          <p>Swimming pool in nanhai</p>
          <span>Free trial for deluxe double room and above</span>
        </div>
        <div class="right">
          <div class="price">৳68.00</div>
          <router-link to="/HotelFacility" class="buy">Buy</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelFacility extends Vue {
  @Prop() item!:object;
}
</script>
<style lang="scss" scoped>

</style>