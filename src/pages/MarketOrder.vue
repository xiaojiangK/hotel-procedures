<template>
  <div class="wrap">
    <Header title="Order details"></Header>
    <div class='main'>     
      <div class='title'>current state：
        <span v-if="order.status == '1'">non paid</span>
        <span v-if="order.status == '2'">no shipped</span>
        <span v-if="order.status == '3'">canceled</span>
        <span v-if="order.status == '4'">completed</span>
        <span v-if="order.status == '7'">refund</span>
      </div>
      <div class="room-info">
        <div class='input-item'>
          <div>room number</div>
          <div class="data">{{order.room_num}}</div>
        </div>
        <div class='input-item' style="border:none;">
          <div>phone</div>
          <div class="data">{{order.tel}}</div>
        </div>
      </div>
      <div class="btn-group">
        <template v-if="order.status == '1'">
          <div class='order-btn cancel-btn' @click="cancelOrder">Cancel</div>
          <div class='order-btn pay-btn' @click="goPay">To pay</div>
        </template>
      </div>
      <div class="goods-title">
        <div class="title-name">Commodity list</div>
        <div class="num">total <span>{{ order.num }}</span> goods</div>
      </div>
      <div class='goods-list'>
        <Goods :goods="order.goods_info" currentNum="1" isCar="1"></Goods>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import Goods from '@/components/Goods.vue';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Goods,
    Header
  }
})
export default class MarketOrder extends Vue {
  id:any = 0;
  flag:any = 0;
  order:any = {};

  async getOrder() {
    try {
      const { data } = await services.api.MarketOrder(this.id, this.flag)
      const goods:any[] = []
      let num = 0
      data.goods_info.forEach((i:any) => {
        goods.push({
          goods_img: i.img,
          goods_name: i.name,
          num: i.number,
          goods_id: i.id,
          price: i.price
        })
        num += Number(i.number)
      })
      this.order = {
        ...data,
        num,
        goods_info: goods
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  cancelOrder() {
    this.$dialog.confirm({
      title: 'prompt',
      message: 'Are you sure to cancel this order'
    }).then(async () => {
      try {
        await services.api.CancelOrder(this.flag, this.id)
        this.order.status = 3
        Toast.success('Cancel Success')
        this.$router.push('/Complete?type=1')
      } catch(e) {
        Toast.fail(e.message)
      }
    }).catch(() => {})
  }
  goPay() {
    // api
    this.$router.push('/Complete')
  }
  created() {
    const quert = this.$route.query
    this.flag = quert.flag
    this.id = quert.id
    this.getOrder()
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    height: 100%;
    background: #F1F1F1
  }
  .main{
    .title{
      height: 1rem;
      line-height: 1rem;
      font-size: .4rem;
      font-weight: bold;
      color: #111;
      padding: 0 .3rem;
    }
    .room-info{
      margin: .2rem;
      background: #fff;
      border-radius: .16rem;
      overflow: hidden;
      .input-item{
        display: flex;
        justify-content: flex-start;
        height: 1.3rem;
        margin: 0 .3rem;
        border-bottom: .02rem solid #e1e1e1;
        font-size: .36rem;
        color: #666;
        line-height: 1.3rem;
        background-color: #fff;
        .data{
          color:#333;
          margin: 0 0 0 .24rem;
        }
      }
    }
    .btn-group{
      display: flex;
      overflow: hidden;
      justify-content: center;
      .order-btn{
        float: left;
        padding: .1rem .2rem;
        background: #f1f1f1;
        border-radius: .4rem; 
        font-size: .32rem;
        text-align: center;
        color: #333;
        margin: .3rem .2rem .1rem;
      }
      .cancel-btn{
        color: #FF6634;
        background: #fff;
        border: .02rem solid #FF6634;
      }
      .pay-btn{
        color: #fff;
        background: #FF6634;
      }
    }
    .goods-title{
      display: flex;
      margin: .32rem 0 0;
      .title-name{
        margin: 0 0 0 .24rem;
        font-size: .4rem;
        font-weight: bold;
      }
      .num{
        font-size: .32rem;
        margin: .1rem 0 0 .2rem;
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
  }
</style>