<template>
  <div class="item">
    <div class="order-header">
      <div class="order-title">
        <span v-if="item.flag == '0'">
          <img src="@/assets/icon-order.png"/>
          <span class="text">{{item.room_type}}</span>
        </span>
        <span v-if="item.flag == '1'">
          <img src="@/assets/index-super-sm.png"/>
          <span class="text">Hotel store</span>
        </span>
        <span v-if="item.flag == '2'">
          <img src="@/assets/icon-hotel.png"/>
          <span class="text">Hotel facility</span>
        </span>
        <span v-if="item.flag == '3'">
          <img src="@/assets/icon-breakfast.png"/>
          <span class="text">Breakfast coupon</span>
        </span>
      </div>
      <div class="order-status" v-if="item.flag == '0'">
        <span v-if="item.status == '1'">non paid</span>
        <span v-if="item.status == '2'">have paid</span>
        <span v-if="item.status == '10'">no lived</span>
        <span v-if="item.status == '3'">canceled</span>
        <span v-if="item.status == '4'">completed</span>
        <span v-if="item.status == '5'">lived</span>
        <span v-if="item.status == '7'">refund</span>
        <span v-if="item.status == '12'">no confirm</span>
      </div>
      <div class="order-status" v-if="item.flag == '1'">
        <span v-if="item.status == '1'">non paid</span>
        <span v-if="item.status == '2'">no shipped</span>
        <span v-if="item.status == '3'">canceled</span>
        <span v-if="item.status == '4'">completed</span>
        <span v-if="item.status == '7'">refund</span>
      </div>
      <div class="order-status" v-if="item.flag == '2'">
        <span v-if="item.status == '1'">non paid</span>
        <span v-if="item.status == '2'">unused</span>
        <span v-if="item.status == '3'">canceled</span>
        <span v-if="item.status == '4'">used</span>
        <span v-if="item.status == '7'">refund</span>
      </div>
      <div class="order-status" v-if="item.flag == '3'">
        <span v-if="item.status == '1'">non paid</span>
        <span v-if="item.status == '2'">unused</span>
        <span v-if="item.status == '3'">canceled</span>
        <span v-if="item.status == '4'">used</span>
        <span v-if="item.status == '7'">refund</span>
      </div>
    </div>
    <div class="order-content" @click="goDetail">
      <div v-if="item.flag == '0'">
        <img :src="item.room_logo"/>
        <span>
          <p><span v-if="item.size">{{item.size}}</span>  {{item.windows == "1" ? "Have" : "no"}} Window  {{item.breakfast == "0" ? "no " : ""}}Breakfast</p>
          <p>{{item.arrival_time}} to {{item.departure_time}} {{item.days}}night/{{item.num}}room</p>
        </span>
      </div>
      <div v-else>
        <div v-for="(i, index) in item.goods_info" :key="index">
          <img :src="i.img"/>
          <span v-if="item.goods_info.length == 1">
            <p>{{i.name}}</p>
            <p v-if="i.goods_subheading">{{i.goods_subheading}}</p>
          </span>
        </div>
      </div>
    </div>
    <div class="order-statistics">
      <div class="statistics-right">
        <div>total of {{item.totalNum}} goods</div>
        <div class="statistics-price">
          <span v-if="item.status == 12">Payment on arrival</span>
          <span v-if="item.status != 12">Payment amount</span>
          ：<span class="price-font">￥{{item.total_cost ? item.total_cost : item.price}}</span>
        </div>
      </div>
    </div>
    <div class="more-oprate">
      <div class="oprate-notice" v-if="item.flag == '0'">
        <img class="icon-notice" v-if="item.status == '1' || item.status == '2' || item.status == '10' || item.status == '4'" src="@/assets/icon-sum-detail.png"/>
        <div class="notice-content" v-if="item.status == '1'">Remaining payment time <van-count-down format="mm:ss" :time="time" /></div>
        <div class="notice-content" v-if="item.status == '2'">Waiting for hotel confirm</div>
        <div class="notice-content" v-if="item.status == '10'">Hotel confirm, waiting check-in</div>
        <div class="notice-content" v-if="item.status == '4'">Already lived，Welcome again!</div>
      </div>
      <div class="operate-right">
        <div v-if="item.status == '4' && item.flag == '0'">
          <div class="btn white" @click="goComment" v-if="!isAssess">To evaluate</div>
          <div class="btn" @click="viewComment" v-if="isAssess && !isReply">view evaluate</div>
          <div class="btn orange" @click="viewComment" v-if="isAssess && isReply">view reply</div>
        </div>
        <div class="btn" v-if="item.status == '1'" @click="cancelOrder">cancel order</div>
        <div class="btn orange" v-if="item.status == '1'" @click="goPay">To pay</div>
        <div class="btn" v-else @click="goReserve">Re Booking</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CountDown  } from 'vant';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    [CountDown.name]: CountDown
  }
})
export default class Complete extends Vue {
  @Prop() item!:object;
  time:any = null;
  isReply:boolean = false;
  isAssess:boolean = false;

  goDetail() {}
  goComment() {}
  viewComment() {}
  cancelOrder() {}
  goReserve() {}
  goPay() {}
  created() {
    // this.time = Date.now() - Number.parseInt((this.item.create_time as any) * 100, 10)
    this.time = 0.5*60*60*1000
  }
}
</script>
<style lang="scss" scoped>
.item{
  background-color: #fff;
  border-top: .2rem solid #f2f2f2;
  .order-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .22rem;
    .order-title{
      display: flex;
      align-items: center;
      font-size: .3rem;
      font-weight: bold;
      img{
        width: .32rem;
        margin: 0 .14rem 0 0;
        border-radius: .5rem;
        vertical-align: middle
      }
      .text{
        vertical-align: middle
      }
    }
    .order-status{
      font-size: .28rem;
      color: #666;
    }
  }
  .order-content{
    padding: .26rem;
    overflow: hidden;
    font-size: .28rem;
    background-color: #fafafa;
    div{
      display: flex;
      overflow-x: auto;
      align-items: center;
      -webkit-overflow-scrolling: touch;
    }
    img{
      flex: 0 0 1.26rem;
      height: 1.26rem;
      object-fit: cover;
      margin: 0 .36rem 0 0
    }
    .sub{
      color: #666;
      font-size: .26rem
    }
  }
  .order-statistics{
    display: flex;
    height: .9rem;
    color: #666;
    padding: 0 .2rem;
    font-size: .3rem;
    align-items: center;
    justify-content: flex-end;
    .statistics-right{
      display: flex;
      justify-content: space-around;
    }
    .statistics-price{
      margin: 0 0 0 .1rem;
    }
    .price-font{
      color: #333;
      font-weight: bold;
    }
  }
  .more-oprate{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0 .2rem;
    border-top: .01rem solid #e1e1e1;
    .oprate-notice{
      display: flex;
      align-items: center;
    }
    .icon-notice{
      width: .26rem;
      height: .26rem;
      vertical-align: middle;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      margin: 0 .16rem 0 0;
    }
    .notice-content{
      font-size: .28rem;
      color: #FF6634;
    }
    .operate-right{
      display: flex;
      justify-content: flex-end;
      .btn{
        display: inline-block;
        margin: 0 0 0 .16rem;
        border: .01rem solid #f1f1f1;
        border-radius: .3rem;
        padding: .1rem .12rem;
        color: #333;
        font-size: .26rem;
        font-weight: 400;
        text-align: center;
        background-color: #f1f1f1
      }
      .btn.orange{
        color: #fff;
        border-color: #ff6634;
        background-color: #ff6634;
      }
      .btn.white {
        color: #ff6634;
        border-color: #ff6634;
        background-color: #fff;
      }
    }
  }
}
</style>