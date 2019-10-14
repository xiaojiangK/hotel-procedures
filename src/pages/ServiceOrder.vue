<template>
  <div class="wrap">
    <Header title="Order details"></Header>
    <div class="main">  
      <div class="facility">
        <div class="banner">
          <img :src="order.goods.img"  />
        </div>
      </div>
      <div class="order-item">
        <div class="order-meg">{{order.goods.name}}</div>
        <div class="order-rg">
          <label class="order-sign">৳</label> <span class="order-nub">{{order.price}}</span>
        </div> 
      </div>
      <div class="order-item">
        <div class="order-meg">Use number</div>
        <div class="order-rg">
          <span class="order-nub red-nub">{{order.goods.number}}</span>
        </div> 
      </div>
      <div class="order-item">
        <div class="order-meg">phone</div>
        <div class="order-rg">
          <span class="order-nub red-nub">{{order.tel}}</span>
        </div> 
      </div>
      <div class="text-box">
        <div class="btn-group" v-if="order.status == '1'">
          <div class='order-btn cancel' @click="cancelOrder">Cancel order</div>
          <div class='order-btn pay' @click="goPay">go Pay</div>
        </div>
        <div class="sub-success" v-if="order.status == '2' && flag == '2'">Waiting for hotel confirmation</div>
        <!-- <div class="sub-success" v-if="order.status == '2'">使用前，主动出示二维码</div> -->
        <div class="sub-faill" v-if="order.status == '3'">The order has been cancelled</div>
        <div class="sub-faill" v-if="order.status == '7'">refunded</div>
        <div class="sub-faill" v-if="order.status == '4'">The order was used in {{order.finish_time}}</div>
      </div>
      <template v-if="order.status == '2' && flag == '3'">
        <div class="qrcode">
          <canvas ref="qrcode" width="450" height="450"/>
        </div>
      </template>
    </div> 
  </div>
</template>

<script lang="ts">
import QRCode from 'qrcode';
import { Toast } from 'vant';
import config from '@/config';
import services from '@/services';
import { formatDateTime } from '@/utils/util';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class ServiceOrder extends Vue {
  timer:any = null;
  order:any = {};
  flag:any = 0;
  id:any = 0;

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
  async getOrder() {
    try {
      // const res = await services.api.getMarketOrder(this.id, this.flag)
      const res = {
        code: 200,
        data: {
          cancel_time: null,
          create_time: '1571022622',
          delete_time: null,
          finish_time: null,
          id: '774',
          is_delete: '0',
          order_no: '201910141110227696',
          out_trade_no: '14330091021571022622',
          pay_time: '1571022622',
          price: '56.00',
          refund_time: null,
          reject_time: null,
          room_num: '',
          seller_id: '1',
          send_time: null,
          status: '2',
          tel: '13288474510',
          type: '3',
          uniacid: '4',
          update_time: '2019-10-14 11:10:22.250023',
          user_id: '4913',
          goods: [
            {
              goods_addtime: '1560238498',
              goods_attribute: '3',
              goods_classify: '0',
              goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
              goods_id: '116',
              goods_img: 'images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png',
              goods_is_open: '1',
              goods_name: '早餐券',
              goods_sort: '1',
              goods_subheading: '早餐时间 ： 7：00-9：00',
              goods_unit: '张',
              goods_volume: '1',
              seller_id: '1',
              uniacid: '4',
            }
          ],
          goods_info: [
            {
              goodsorder_id: '773',
              id: '815',
              img: 'https://static.hotel.showboom.cn/images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png?x-oss-process=image/resize,m_mfit,h_300,w_400',
              name: '早餐券',
              number: '2',
              price: '28.00',
              spec_id: '538',
              total_price: '56.00',
              type: '3'
            }
          ]
        }
      }
      const data:any = res.data
      const price = Number.parseFloat(data.goods_info[0].price)
      this.order = {
        ...data,
        goods: data.goods_info[0],
        finish_time: formatDateTime(data.finish_time * 1000),
        price: Number.isInteger(price) ? Number.parseInt(`${price}`, 10) : price.toFixed(2)
      }

      if (data.status == '2' && this.flag == '3') {
        // 监听订单状态
        // this.timer = setInterval(async () => {
        //   try {
        //     const ret = await services.api.orderStatus(this.id)
        //     if (res.data.status == 200 && res.data.data.status == 4) {
        //       clearInterval(this.timer);
        //       this.$router.push('/PayComplete?type=2')
        //     }
        //   } catch(e) {
        //     Toast.fail(e.message)
        //   }
        // }, 3000);
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  useqrcode() {
    QRCode.toCanvas(this.$refs.qrcode, `${config.baseURL}?id=${this.id}&flag=${this.flag}`)
  }
  destroyed() {
    if (this.order.status == '2' && this.flag == '3') {
      clearInterval(this.timer)
    }
  }
  created() {
    const quert = this.$route.query
    this.flag = quert.flag
    this.id = quert.id
    this.getOrder()
    this.$nextTick(() => {
      this.useqrcode()
    })
  }
}
</script>
<style lang="scss" scoped>
  .main {
    padding: .22rem 0 .9rem;
    .facility {
      width: 100%;
      height: auto;
      background: white;
      margin: 0 auto .1rem;
      overflow: hidden;
    }
    .banner {
      width: 90.67%;
      height: 3.42rem;
      background: #EFEFEF;
      margin: 0 auto;
      border-radius:.12rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin:auto;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .order-item {
      width: 90.67%;
      height: 1.3rem;
      line-height: 1.3rem;
      color: #666;
      border-bottom: .01rem solid #E1E1E1;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .order-meg {
      font-size: .36rem;
      color: #666;
    }
    .order-sign {
      font-size: .24rem;
      color: #666;
    }
    .order-nub {
      font-size: .36rem;
      color: #666;
    }
    .text-box {
      width: 90.67%;
      height: auto;
      margin: .7rem auto;
      text-align: center;
      font-size: .28rem;
    }
    .sub-success {
      color: #FF6342; 
    }
    .sub-faill {
      color: #FF6342; 
    }
    .use-box{
      font-size: .32rem;
      .use{
        width: 2.9rem;
        height: 1.1rem;
        border-radius:.1rem; 
        font-size: .36rem;
        color: #fff;
        text-align: center;
        line-height: 1.1rem;
        margin: 1.5rem auto .8rem;
        background-color: #E93A3D;
      }
      .use.no{
        color: #929292;
        background: #DDD;
      }
      .back{
        color: #333;
        font-size: .32rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .9rem;
        background: #fff;
        line-height: .9rem;
        text-align: center;
        border-top: .01rem solid #ddd;
      }
    }
    .btn-group{
      display: flex;
      overflow: hidden;
      justify-content: center;
    }
    .order-btn{
      float: left;
      width: 1.5rem;
      margin: .3rem .2rem .1rem;
      padding: .08rem .16rem;
      background: #f1f1f1;
      border-radius:.4rem; 
      font-size: .32rem;
      text-align: center;
      color: #333;
    }
    .pay{
      color: #fff;
      background: #FF6634;
    }

    .btn-cancel {
      width: 1.6rem;
      height: .6rem;
      border-radius: .3rem;
      text-align: center;
      line-height: .6rem;
      color: #FF6342;
      font-size: .28rem;
      margin: .5rem auto;
      border: .02rem solid rgba(255,99,66,1);
    }
    .qrcode {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>