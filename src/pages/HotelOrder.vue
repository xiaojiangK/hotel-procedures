<template>
  <div class="wrap">
    <Header title="Order Details"></Header>
    <div class='wrapper'>
      <div class='pay-box'>
        <div class='pay-status'>
          <span v-if="item.status == '1'">non paid</span>
          <span v-if="item.status == '2'">have paid</span>
          <span v-if="item.status == '10'">no lived</span>
          <span v-if="item.status == '3'">canceled</span>
          <span v-if="item.status == '4'">completed</span>
          <span v-if="item.status == '5'">lived</span>
          <span v-if="item.status == '7'">refund</span>
          <span v-if="item.status == '12'">no confirm</span>
        </div>
        <div class='pay-text'>
          <template v-if="item.status == '1'">
            <span>time remaining</span>
            <van-count-down format="mm:ss" @finish="update()" :time="time" />
          </template>
          <div class='pay-s' v-if="item.status == '2'">Waiting for hotel confirm</div>
          <div class='pay-s' v-if="item.status == '10'">Hotel confirm, waiting check-in</div>
          <div class='pay-s' v-if="item.status == '4'">Already lived，Welcome again!</div>
          <div class='pay-thank' v-if="item.status == '3'">Thank you for coming again!</div>
        </div>
      </div>
      <div class='charge-details'>
        <div class='text'>Cost detail</div>
      </div>

      <div class='charge-info'>  
        <div class='charge-title'>
          <div class='title-text'>Hotel room nights (<div class='late'>{{item.days}}</div>night，<div class='rooms'>{{item.num}}</div>room）
          </div>
          <div class='item-nub'>
            <label>৳</label><span>{{totalPrice}}</span>
          </div>
        </div>
        <div class="charge-box">
          <div class='charge-item' v-for="(i, index) in item.priceList" :key="index">
            <div class='item-text'>{{i.dateday}}</div>
            <div class='item-nub black'>
              <label>{{i.num > 1 ? i.num+'x' : ''}}</label><label>৳</label><span>{{i.mprice}}</span>
            </div>
          </div>
          <div class="charge-item member" v-if="vipInfo.is_vip == 1">
            <div class="item-text">{{vipInfo.key}}</div>
            <div class="item-nub">-৳{{rebate}}</div>
          </div>
        </div>
      </div>
      <div class='payment'>
        <div class='payment-title'>
          <div class='text'>
            <span v-if="item.type == 3">store payment</span>
            <span v-else>payment amount</span>
          </div>
          <div class='item-nub'>
            <label>৳</label><span>{{item.total_cost}}</span>
          </div>
        </div>
        <div class='payment-box'>
          <div class='btn gray' v-if="item.status == '1'" @click="cancelOrder">cancel order</div>
          <div class='btn orange' v-if="item.status == '1'" @click="goPay">To pay</div>
          <template v-else>
            <template v-if="item.status == '4'">
              <div class="btn white" @click="goComment" v-if="!isAssess">To evaluate</div>
              <div class="btn gray" @click="viewComment" v-if="isAssess && !isReply">view evaluate</div>
              <div class="btn orange gray" @click="viewComment" v-if="isAssess && isReply">view reply</div>
            </template>
            <div class='btn orange' @click="goReserve">Re Booking</div>
          </template>
        </div>
        <div class='payment-meg'>No cancellation/change of order after successful booking</div>
      </div>

      <div class='destine-info'>
        <div class='info-title'>Booking info</div>
        <div class='info-item'>
          <div class='lf'>Booking room</div>
          <div class='rg'>{{item.room_type}}</div>
        </div>
        <div class='info-item'>
          <div class='lf'>Check-in time</div>
          <div class='rg'>{{item.arrival_time}} - {{item.departure_time}}，total {{item.days}}night {{item.num}}room</div>
        </div>
        <div class='info-item'>
          <div class='lf'>Check in person</div>
          <div class='rg'>{{item.name}}</div>
        </div>
        <div class='info-item'>
          <div class='lf'>Contact phone</div>
          <div class='rg'>{{item.tel}}</div>
        </div>
        <div class='info-item' style='margin-bottom: 0'>
          <div class='lf'>Expected time of arrival</div>
          <div class='rg'>{{item.arrival_time}} {{item.dd_time}}before</div>
        </div>
        <div class='last-item'>(Do not affect hotel reservation)</div>
      </div>

      <div class='destine-info'>
        <div class='info-title'>Order info</div>
        <div class='info-item'>
          <div class='lf'>Order number</div>
          <div class='rg'>{{item.order_no}}</div>
        </div>
        <div class='info-item'>
          <div class='lf'>Order time</div>
          <div class='rg'>{{item.time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast, CountDown } from 'vant';
import services from '@/services';
import Header from '@/components/Header.vue';
import { formatDateTime, formatMonth } from '@/utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    [CountDown.name]: CountDown
  }
})
export default class HotelOrder extends Vue {
  item:any = {};
  id:any = 0;
  flag:any = 0;
  time:any = null;
  rebate:any = 0;
  vipInfo:object = {};
  totalPrice:any = 0;
  isReply:boolean = false;
  isAssess:boolean = false;

  update() {
    this.item = {
      ...this.item,
      status: 3
    }
  }
  // 去评论
  goComment() {
    const item = this.item
    this.$router.push(`/SubmitComment?roomId=${item.room_id}&orderId=${item.id}`)
  }
  // 查看评论
  viewComment() {
    this.$router.push(`/Comment?id=${this.id}`)
  }
  goReserve() {
    this.$router.push('/Booking')
  }
  goPay() {
    // api
  }
  // 获取评论列表
  async getAssess() {
    try {
      const { data } = await services.api.AssessList(1, 0, this.item.id)
      for (const i of data) {
        if (i.reply) {
          this.isReply = true
        }
      }
      if (data.length > 0) {
        this.isAssess = true
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
        this.item.status = 3
        Toast.success('Cancel Success')
        this.$router.push('/Complete?type=1')
      } catch(e) {
        Toast.fail(e.message)
      }
    }).catch(() => {})
  }
  async getData() {
    try {
      const { data }:any = await services.api.HotelOrder(this.flag, this.id)
      const detail = {
        ...data,
        create_time: data.time,
        priceList: data.roomCost.price_list,
        time: formatDateTime(data.time * 1000),
        arrival_time: formatMonth(data.arrival_time * 1000),
        departure_time: formatMonth(data.departure_time * 1000)
      }

      let totalPrice:any = 0;
      detail.priceList.map((item:any) => {
        totalPrice += Number.parseFloat(item.mprice)
      });
      const num = detail.num;
      if (Number.isInteger(totalPrice * num)) {
        totalPrice = totalPrice * num
      } else {
        totalPrice = (totalPrice * num).toFixed(2)
      }

      // 获取会员折扣
      let rebate:any = 0
      const vipInfo = data.roomCost
      if (vipInfo.is_vip == 1) {
        rebate = (totalPrice - (vipInfo.total_cost * data.num)).toFixed(2)
      }
      this.item = detail
      this.rebate = rebate
      this.vipInfo = vipInfo
      this.totalPrice = totalPrice.toFixed(2)
    } catch(e) {
      Toast.fail(e.mssage)
    }
  }
  created() {
    const quert = this.$route.query
    this.flag = quert.flag
    this.id = quert.id
    this.getData()
    this.getAssess()
    this.time = (60 * 30 * 1000) - (Date.now() - this.item.create_time * 1000)
  }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: auto;
    background: #F2F2F2;
    overflow: hidden;
    .pay-box {
      width: 100%;
      height: 1.64rem;
      background: white;
      padding: .38rem 0 0 .32rem;
    }
    .pay-status {
      font-size: .42rem;
      color: #333;
      font-weight: bold;
      margin: 0 0 .14rem;
    }
    .pay-text {
      width: 100%;
      height: auto;
      display: flex;
      color: #FF6634;
      font-size: .24rem;
      flex-direction: row;
      align-items: flex-start;
      .van-count-down{
        color: #FF6634;
        font-size: .24rem;
        line-height: .28rem;
        margin: 0 0 0 .1rem;
      }
    }
    .pay-thank {
      color: #929292
    }
    .charge-box{
      min-height: 1.2rem;
      max-height: 4rem;
      overflow-y: auto;
      .member{
        margin: .1rem 0 0;
        background: -webkit-linear-gradient(90deg,rgba(219,189,137,1) 0%,rgba(219,189,137,0) 100%);
        background: linear-gradient(90deg,rgba(219,189,137,1) 0%,rgba(219,189,137,0) 100%);
        .item-text{
          color: #fff;
        }
      }
    }
    .charge-details {
      width: 100%;
      height: auto;
      border-bottom: .01rem #E1E1E1 dashed;
      position: relative;
      .text {
        position: absolute;
        top: -.1rem;
        left: 37%;
        width: 1.86rem;
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        color: #B2B2B2;
        text-align: center;
        background: white;
        border: .01rem solid rgba(225,225,225,1);
        border-radius: .2rem;
        margin: 0 auto;
      }
    }
    .charge-title {
      width: 100%;
      height: .86rem;
      background: white;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    .charge-item {
      width: 100%;
      height: .58rem;
      line-height: .58rem;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    .title-text {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      font-size: .3rem;
      color: #333333;
      padding: 0 0 0 .22rem;
    }
    .item-text {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      font-size: .26rem;
      color: #333;
      padding: 0 0 0 .4rem;
    }
    .item-nub {
      font-size: .3rem;
      color: #E93A3D;
      font-weight: bold;
      padding: 0 .34rem 0 0; 
    }
    .black {
      color: #181818;
      font-weight: 400;
    }
    .item-meg {
      color: #929292;
      font-size: .26rem;
      margin: 0 0 0 .74rem;
    }
    .charge-info {
      background: white;
      overflow: hidden;
      width: 100%;
      height: auto;
      padding: 0 0 .44rem;
      border-bottom: .01rem solid#E1E1E1;
    }
    .payment {
      width: 100%;
      height: 3.2rem;
      background: white;
      .payment-title {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .text {
          font-size: .3rem;
          color: #333;
          padding: 0 0 0 .22rem;
        }
      }
    }
    .payment-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: .3rem .34rem .4rem .28rem;
      .btn {
        border: .02rem solid transparent;
        border-radius: .04rem;
        width: 3.26rem;
        height: .76rem;
        font-size: .3rem;
        line-height: .76rem;
        text-align: center;
      }
      .btn.white {
        border-color: #ff6342;
        color: #ff6342;
        background: #fff;
        margin: 0 .3rem 0 0;
      }
      .btn.orange {
        border-color: #ff6342;
        color: #fff;
        background: #ff6342;
      }
      .btn.gray {
        border-color: #ccc;
        color: #fff;
        background: #ccc;
        margin: 0 .3rem 0 0;
      }
    }
    .payment-meg {
      color: #929292;
      font-size: .26rem;
      margin: 0 0 0 .34rem;
    }
    .destine-info {
      width: 100%;
      height: auto;
      background: white;
      margin: .2rem 0 0;
      overflow: hidden;
      .last-item {
        width: 90.67%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-size: .24rem;
        color: #929292;
        margin: 0 auto .3rem;
      }
    }
    .info-title {
      width: 90.67%;
      line-height: 1.04rem;
      margin: 0 auto;
      font-size: .28rem;
      color: #333333;
      font-weight: bold;
    }
    .info-item {
      width: 90.67%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto .2rem;
      .lf {
        font-size: .28rem;
        color: #929292;
      }
      .rg {
        color: #333;
        font-size: .28rem;
        font-weight: bold;
      }
    }
  }
</style>