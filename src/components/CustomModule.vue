<template>
  <div class="content">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="picture">
        <img :src="item.goods_img" alt="">
      </div>
      <div class="foot">
        <div class="left">
          <p>{{item.goods_name}}</p>
          <span>{{item.goods_subheading}}</span>
        </div>
        <div class="right around" v-if="around">
          <a :href="'tel:' + [item.tel]">
            <img src="@/assets/icon-call.png" alt="">
          </a>
        </div>
        <div class="right" v-else>
          <div class="price">৳{{item.price}}</div>
          <div class="buy" @click="goBuy(item)">Buy</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Breakfast extends Vue {
  list:any[] = [];
  @Prop() data!:any[];
  @Prop() around!:boolean;

  goBuy(item:any) {
    localStorage.setItem('goods', JSON.stringify(item))
    this.$router.push('/ServicePay')
  }
  created() {
    this.list = this.data.map(item => {
      return {
        ...item,
        price: item.specifications ? Number.parseFloat(item.specifications[0].goods_price) : ''
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .item{
    margin: 0 0 .2rem;
    background: #fff;
    padding: 0 .3rem .4rem;
    .picture{
      img{
        width: 100%;
        border-radius: .12rem;
      }
    }
    .foot{
      overflow: hidden;
      padding: .2rem 0 .3rem;
      .left{
        width: 80%;
        float: left;
        p{
          font-weight: bold;
          font-size: .36rem;
          margin: 0 0 .15rem;
        }
        span{
          color: #929292;
          font-size: .26rem;
        }
      }
      .right{
        width: 20%;
        float: right;
        .price{
          color: #ff6342;
          font-size: .36rem;
          text-align: right;
          margin: 0 0 .1rem;
        }
        .buy{
          width: 1.2rem;
          float: right;
          display: block;
          color: #ff6342;
          padding: .2rem 0;
          font-size: .32rem;
          text-align: center;
          border-radius: .12rem;
          background: #ffebe9;
        }
      }
      .around{
        margin: .15rem 0 0;
      }
      img{
        width: .6rem;
        margin: 0 0 0 .45rem;
      }
    }
  }
</style>