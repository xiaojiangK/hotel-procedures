<template>
  <div class="wrap">
    <Header title="Shopping cart"></Header>
    <div class="main">   
      <div class="room-info">
      <div class="title">Please fill in the information for delivery to the room</div>
        <div class="input-item">
          <span>room number</span>
          <input type="text" v-model="roomNum" placeholder="room number"/>
        </div>
        <div class="input-item">
          <span>phone</span>
          <input type="text" maxlength="11" placeholder="phone" v-model="tel"/>
        </div>
      </div>
      <div class="goods-title">
        <div class="name">Commodity list</div>
        <div class="num">total <span>{{ allNum }}</span> goods</div>
      </div>
      <div class="goods-list">
        <Goods :goods="goods" currentNum="1" isCar="1"></Goods>
      </div>
      <div class="submit-bar">
        <div class="totle-price">payment amount</div>
        <div class="red"><span class="small-size">৳</span>{{ allPrice }}</div> 
        <div class="submit-btn" @click="goPay">Submit orders</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import { getStorage } from '@/utils/util';
import Goods from '@/components/Goods.vue';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Goods,
    Header
  }
})
export default class MarketPay extends Vue {
  tel:string = '';
  goods:any[] = [];
  allNum:number = 0;
  allPrice:number = 0;
  roomNum:string = '';

  deleteGoods(id:string) {
    this.goods = this.goods.filter(item => item.goods_id != id)
    sessionStorage.setItem('shopcarList', JSON.stringify(this.goods))
    this.getGoods()
  }
  calculation(param:any) {
    this.goods = this.goods.filter(item => {
      if (item.goods_id == param.item.goods_id) {
        if (param.type == 'add') {
          item.num ++
          Toast.success('goods add success')
        } else {
          if (item.num > 0) {
            item.num --
          }
        }
      }
      if (item.num) {
        return item
      }
    })
    sessionStorage.setItem('shopcarList', JSON.stringify(this.goods))
    this.getGoods()
  }
  getGoods() {
    let goods:any = [];
    if (sessionStorage.getItem('shopcarList')) {
      goods = JSON.parse((sessionStorage.getItem('shopcarList') as string))
    }
    let allPrice = 0
    let allNum = 0
    this.goods = goods.map((i:any) => {
      allNum += i.num
      allPrice += i.specifications[0].goods_price * i.num
      return i
    })
    this.allNum = allNum
    this.allPrice = allPrice
  }
  goPay() {
    if (this.goods.length == 0) {
      Toast.fail('Please select goods')
      return
    } else if (!this.roomNum) {
      Toast.fail('Please enter your room number')
      return
    } else if (this.tel.length < 10) {
      Toast.fail('Wrong phone number')
      return
    }
    // sessionStorage.removeItem('shopcarList')
    this.$router.push('/Complete')
  }
  created() {
    this.getGoods()
    this.tel = getStorage('user').tel
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    height: 100%;
    background: #f2f2f2
  }
  .main{
    .room-info{
      margin: .2rem;
      background: #fff;
      border-radius: .16rem;
      overflow: hidden;
      .title{
        height: 1rem;
        line-height: 1rem;
        font-size: .28rem;
        font-weight: bold;
        text-align: center;
      }
      .input-item{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        background-color: #fff;
        border-bottom: .01rem solid #f2f2f2;
        span{
          margin: 0 0 0 .24rem;
          font-size: .32rem;
          color: #929292;
        }
        input{
          border: none;
          outline: none;
          display: block;
          height: .96rem;
          margin: 0 0 0 .22rem;
          font-size: .32rem
        }
      }
    }
    .goods-title{
      display: flex;
      margin:.32rem 0 0;
      .name{
        margin: 0 0 0 .24rem;
        font-size: .4rem;
        font-weight: bold;
      }
      .num{
        margin: .1rem 0 0 .2rem;
        font-size: .32rem;
        span{
          color: #E83A3D
        }
      }
    }
    .goods-list{
      padding: .36rem;
      border-radius: .16rem;
      background-color: #fff;
      margin: .26rem .26rem 1.2rem;
    }
    .submit-bar{
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 1.1rem;
      border-top:.02rem solid #e1e1e1;
      background-color: #fff;
      .submit-btn{
        position: absolute;
        top: 0;
        right: 0;
        width:2.6rem;
        height: 1.1rem;
        font-size: .34rem;
        color: #fff;
        text-align: center;
        line-height: 1.1rem;
        background-color: #E93A3D;
      }
      .red{
        margin: 0 0 0 .14rem;
        font-size: .42rem;
        font-weight: bold;
        color: #E93A3D;
      }
      .totle-price{
        margin: 0 0 0 .34rem;
        font-size: .3rem;
        color: #333;
      }
      .small-size{
        font-size: .28rem;
      }
    }
  }
</style>