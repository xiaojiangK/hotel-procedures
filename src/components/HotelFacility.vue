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
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelFacility extends Vue {
  @Prop() data!:any;
  item:object = {};

  goBuy() {
    localStorage.setItem('goods', JSON.stringify(this.item))
    this.$router.push('/ServicePay')
  }
  created() {
    this.item = {
      ...this.data,
      price: Number.parseFloat(this.data.specifications[0].goods_price)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>