<template>
  <div class="item facility">
    <div class="head">
      <router-link to="/HotelFacility">
        <div class="title">
          <img src="@/assets/icon-facility-sm.png" alt="">
          <span>Hotel facility</span>
          <img src="@/assets/icon-next.png" class="next" alt="">
        </div>
      </router-link>
    </div>
    <div class="content">
      <div class="picture">
        <img :src="item.goods_img" alt="">
      </div>
      <div class="foot">
        <div class="left">
          <p>{{item.goods_name}}</p>
          <span>{{item.goods_subheading}}</span>
        </div>
        <div class="right">
          <div class="price">৳{{item.price}}</div>
          <div @click="goBuy()" class="buy">Buy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { setStorage } from '@/utils/util';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelFacility extends Vue {
  @Prop() data!:any;

  get item() {
    const spec = this.data.specifications
    return {
      ...this.data,
      price: Number.parseFloat(spec && spec[0].goods_price)
    }
  }
  goBuy() {
    setStorage('goods', this.item)
    this.$router.push('/ServicePay')
  }
}
</script>
<style lang="scss" scoped>

</style>