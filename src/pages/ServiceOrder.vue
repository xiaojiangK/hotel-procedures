<template>
  <div class="wrap">
    <Header title="Order details"></Header>
    <div class="main">  
      <div class="facility">
        <div class="banner">
          <img :src="order.goods.img" />
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
          <div class='order-btn cancel' @click="cancelOrder">Cancel</div>
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
  }
  async getOrder() {
    try {
      const { data } = await services.api.ServiceOrder(this.id, this.flag)
      const goods = data.goods_info[0]
      const price = Number.parseFloat(goods.price)
      this.order = {
        ...data,
        goods,
        finish_time: formatDateTime(data.finish_time * 1000),
        price: Number.isInteger(price) ? Number.parseInt(`${price}`, 10) : price.toFixed(2)
      }

      if (data.status == '2' && this.flag == '3') {
        // 监听订单状态
        this.timer = setInterval(async () => {
          try {
            const ret = await services.api.OrderStatus(this.id)
            if (ret.data.status == 200 && ret.data.data.status == 4) {
              clearInterval(this.timer);
              this.$router.push('/Complete?type=2')
            }
          } catch(e) {
            Toast.fail(e.message)
          }
        }, 3000);
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  useqrcode() {
    if (this.order.status == '2' && this.flag == '3') {
      QRCode.toCanvas(this.$refs.qrcode, `${config.baseURL}?id=${this.id}&flag=${this.flag}`)
    }
  }
  destroyed() {
    if (this.order.status == '2' && this.flag == '3') {
      clearInterval(this.timer)
    }
  }
  created() {
    const opt = this.$route.query
    this.flag = opt.flag
    this.id = opt.id
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
      height: 100%;
      padding: .1rem .2rem;
      margin: .3rem .2rem .1rem;
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
    .qrcode {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>