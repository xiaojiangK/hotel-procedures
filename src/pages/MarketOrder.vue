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
          <div class="input-item-data">{{order.room_num}}</div>
        </div>
        <div class='input-item' style="border:none;">
          <div>phone</div>
          <div class="input-item-data">{{order.tel}}</div>
        </div>
      </div>
      <div class="btn-group">
        <template v-if="order.status == '1'">
          <div class='order-btn cancel-btn' @click="cancelOrder">Cancel order</div>
          <div class='order-btn pay-btn' @click="goPay">To pay</div>
        </template>
      </div>
      <div class="goods-title">
        <div class="title-name">Commodity list</div>
        <div class="goods-title-num">total <span>{{ goodsNum }}</span> goods</div>
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
  goodsNum:number = 0;

  async getOrder() {
    try {
      // const res = await services.api.getMarketOrder(this.id, this.flag)
      const res = {
        code: 200,
        data: {
          cancel_time: null,
          create_time: '1570700237',
          delete_time: null,
          finish_time: null,
          id: '772',
          is_delete: '0',
          order_no: '201910101737177932',
          out_trade_no: '14330091021570700237',
          pay_time: '1570700237',
          price: '68.00',
          refund_time: null,
          reject_time: null,
          room_num: '2088',
          seller_id: '1',
          send_time: null,
          status: '3',
          tel: '13288474512',
          type: '1',
          uniacid: '4',
          update_time: '2019-10-11 10:34:21.396453',
          user_id: '4913',
          goods: [
            {
              goods_addtime: '1569288703',
              goods_attribute: '1',
              goods_classify: '42',
              goods_details: '',
              goods_id: '125',
              goods_img: 'images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
              goods_is_open: '1',
              goods_name: '芙蓉王',
              goods_sort: '1',
              goods_subheading: '香烟',
              goods_unit: '盒',
              goods_volume: '0',
              seller_id: '1',
              uniacid: '4'
            }
          ],
          goods_info: [
            {
              goodsorder_id: '772',
              id: '813',
              img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
              name: '芙蓉王',
              number: '2',
              price: '30.00',
              spec_id: '803',
              total_price: '68.00',
              type: '1'
            },
            {
              goodsorder_id: '772',
              id: '814',
              img: 'https://static.hotel.showboom.cn/images/4/2019/05/L8z484cP0ohD0n4Arq404AaKKka4zO.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
              name: '红牛',
              number: '1',
              price: '8.00',
              spec_id: '793',
              total_price: '68.00',
              type: '1'
            }
          ]
        }
      }
      const order = res.data
      const goods:any[] = []
      let num = 0
      order.goods_info.forEach(i => {
        goods.push({
          goods_img: i.img,
          goods_name: i.name,
          num: i.number,
          goods_id: i.id,
          price: i.price
        })
        num += Number(i.number)
      })
      this.goodsNum = num
      this.order = {
        ...order,
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
        await services.api.cancelOrder(this.flag, this.id)
        this.order.status = 3
        Toast.success('Cancel Success')
        this.$router.push('/PayComplete?type=1')
      } catch(e) {
        Toast.fail(e.message)
      }
    }).catch(() => {})
  }
  goPay() {
    // api
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
      }
      .input-item-data{
        color:#333;
        margin: 0 0 0 .24rem;
      }
    }
    .btn-group{
      display: flex;
      overflow: hidden;
      justify-content: center;
      .order-btn{
        float: left;
        width: 1.5rem;
        padding: .06rem .16rem;
        background: #f1f1f1;
        border-radius: .4rem; 
        font-size: .32rem;
        text-align: center;
        color: #333;
        margin: .3rem .2rem .1rem;
      }
      .cancel-btn{
        width: 1.48rem;
        padding: .04rem .14rem;
        border: .02rem solid #FF6634;
        color: #FF6634;
        background-color: #fff;
      }
      .cancel-btn2{
        width: 1.42rem;
        height: .45rem;
        color: #fff;
        font-size: .18rem;
        text-align: center;
        line-height: .45rem;
        border-radius: .04rem;
        background: #E83A3D;
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
      .goods-title-num{
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