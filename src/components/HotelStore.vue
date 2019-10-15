<template>
  <div class="item goods">
    <div class="head">
      <router-link to="/HotelStore">
        <div class="title">
            <img src="@/assets/icon-super-sm.png" alt="">
            <span>Hotel store</span>
            <img src="@/assets/icon-next.png" class="next" alt="">
        </div>
      </router-link>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <router-link to="/HotelStore">
            <div class="img">
              <img :src="item.goods_img" alt="">
            </div>
            <div class="info">
              <div class="title">{{item.goods_name}}</div>
              <div class="price">
                <div class="left">৳{{item.price}}</div>
                <div class="right">
                  <img src="@/assets/icon-buy.png" alt="">
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelStore extends Vue {
  @Prop() data!:any[]

  get list() {
    return this.data.map((item:any) => {
      return {
        ...item,
        price: Number.parseFloat(item.specifications[0].goods_price)
      }
    })
  }
}
</script>
<style lang="scss" scoped>

</style>