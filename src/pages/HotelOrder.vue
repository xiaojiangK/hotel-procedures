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
        <div class='charge-text'>Cost detail</div>
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
          <div class='charge-item' v-for="(i, index) in item.roomCost.price_list" :key="index">
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
          <div class='payment-title-text'>
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
              <div class="btn orange reply" @click="viewComment" v-if="isAssess && isReply">view reply</div>
            </template>
            <div class='btn orange' @click="goReserve">Re Booking</div>
          </template>
        </div>
        <div class='payment-meg'>No cancellation/change of order after successful booking</div>
      </div>

      <div class='destine-info'>
        <div class='info-title'>Booking info</div>
        <div class='info-item'>
          <div class='info-item-lf'>Booking room</div>
          <div class='info-item-rg'>{{item.room_type}}</div>
        </div>
        <div class='info-item'>
          <div class='info-item-lf'>Check-in time</div>
          <div class='info-item-rg'>{{item.arrival_time}} - {{item.departure_time}}，total {{item.days}}night {{item.num}}room</div>
        </div>
        <div class='info-item'>
          <div class='info-item-lf'>Check in person</div>
          <div class='info-item-rg'>{{item.name}}</div>
        </div>
        <div class='info-item'>
          <div class='info-item-lf'>Contact phone</div>
          <div class='info-item-rg'>{{item.tel}}</div>
        </div>
        <div class='info-item' style='margin-bottom: 0'>
          <div class='info-item-lf'>Expected time of arrival</div>
          <div class='info-item-rg'>{{item.arrival_time}} {{item.dd_time}}before</div>
        </div>
        <div class='info-item-a'>
          <div class='info-item-meg'>(Do not affect hotel reservation)</div>
        </div>
      </div>

      <div class='destine-info'>
        <div class='info-title'>Order info</div>
        <div class='info-item'>
          <div class='info-item-lf'>Order number</div>
          <div class='info-item-rg'>{{item.order_no}}</div>
        </div>
        <div class='info-item'>
          <div class='info-item-lf'>Order time</div>
          <div class='info-item-rg'>{{item.time}}</div>
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
  flag:any = 0;
  time:any = null;
  orderId:any = 0;
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
    this.$router.push(`/Comment?id=${this.orderId}`)
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
      // const res = await services.api.assessList(1, 0, this.item.id)
      const res:any = {
        data: [
          {
            arrival_time: '1566748800',
            content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
            display: '1',
            id: '84',
            img: [
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}
            ],
            img_type: '1',
            logo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
            name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
            order_id: '805',
            reply: '',
            reply_time: '0',
            room: '标准大床房',
            room_id: '289',
            score: '0',
            seller_id: '0',
            status: '1',
            time: '1570766323',
            uniacid: '4',
            user_id: '4913'
          }
        ]
      }
      for (const i of res.data) {
        if (i.reply) {
          this.isReply = true
        }
      }
      if (res.data.length > 0) {
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
        await services.api.cancelOrder(this.flag, this.orderId)
        this.item.status = 3
        Toast.success('Cancel Success')
        this.$router.push('/PayComplete?type=1')
      } catch(e) {
        Toast.fail(e.message)
      }
    }).catch(() => {})
  }
  async getData() {
    // try {
    //   const res = await services.api.getOrderDetail(this.flag, this.orderId)
    // } catch(e) {
    //   Toast.fail(e.mssage)
    // }
    const res:any =  {
      arrival_time: '1566748800',
      bed_type: null,
      classify: '1',
      code: null,
      company_id: '0',
      coordinates: '37.864933,112.567528',
      coupons_id: null,
      days: '1',
      dd_time: '14:00',
      departure_time: '1566835200',
      dis_cost: '0.95',
      from_id: null,
      hb_cost: null,
      hb_id: null,
      id: '805',
      is_commission: '2',
      is_delete: '0',
      jj_time: '0',
      name: 'admin',
      num: '1',
      order_no: '201908261135336712',
      out_trade_no: '14330091021566790533',
      pay_time: '1566790533',
      price: '1.00',
      qr_fromid: '',
      roomCost: {
        key: '秀豹超级会员9.5折',
        is_vip: 1,
        value: 95,
        total_cost: 0.95,
        price_list: [
          {
            dateday: '08月26日',
            discount_price: 0.95,
            id: '790',
            mprice: '1.00',
            order_id: '805'
          }
        ]
      },
      room_id: '289',
      room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg?x-oss-process=i',
      room_type: '标准大床房',
      sale_id: '0',
      seller_address: '山西省太原市迎泽区柳巷南路86号',
      seller_id: '1',
      seller_name: '圣美精品酒店2',
      status: '4',
      tel: '13231231231',
      time: '1570957400',
      total_cost: '0.95',
      type: '0',
      uniacid: '4',
      user_id: '4913',
      vip_coupon: '0.95',
      voice: '1',
      yhq_cost: null,
      yj_cost: null,
      ytyj_cost: null,
      yyzk_cost: null
    }
    const detail = {
      ...res,
      create_time: res.time,
      time: formatDateTime(res.time * 1000),
      arrival_time: formatMonth(res.arrival_time * 1000),
      departure_time: formatMonth(res.departure_time * 1000)
    }

    let totalPrice:any = 0;
    res.roomCost.price_list.map((item:any) => {
      totalPrice += Number.parseFloat(item.mprice);
    });
    const num = detail.num;
    if (Number.isInteger(totalPrice * num)) {
      totalPrice = totalPrice * num;
    } else {
      totalPrice = (totalPrice * num).toFixed(2);
    }

    // 获取会员折扣
    let rebate:any = 0;
    const vipInfo = res.roomCost;
    if (vipInfo.is_vip == 1) {
      rebate = (totalPrice - (vipInfo.total_cost * res.num)).toFixed(2)
    }
    this.item = detail
    this.rebate = rebate
    this.vipInfo = vipInfo
    this.totalPrice = totalPrice.toFixed(2)
  }
  created() {
    const quert = this.$route.query
    this.flag = quert.flag
    this.orderId = quert.id
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
        .item-nub{
          width: 1.8rem;
        }
      }
    }
    .charge-details {
      width: 100%;
      height: auto;
      border-bottom: .01rem #E1E1E1 dashed;
      position: relative;
    }
    .charge-text {
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
    }
    .payment-title {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .payment-title-text {
      font-size: .3rem;
      color: #333;
      padding: 0 0 0 .22rem;
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
      .btn.reply{
        margin: 0 .3rem 0 0;
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
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 0 .2rem;
    }
    .info-item-lf {
      font-size: .28rem;
      color: #929292;
    }
    .info-item-rg {
      font-size: .28rem;
      color: #333333;
      font-weight: bold;
    }
    .info-item-a {
      width: 90.67%;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      font-size: .24rem;
      color: #929292;
      margin: 0 0 .3rem;
    }
  }
</style>