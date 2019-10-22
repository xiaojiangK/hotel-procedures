<template>
  <div class="wrap">
    <Header title="Create order"></Header>
    <div class="main">
      <div class="content">
        <!-- room start -->
        <div class="room">
          <div class="type">{{room.name}}</div>
          <div class="desc">
            {{room.size}} {{room.windows == '1' ? 'Have window' : 'No window'}}
            {{room.breakfast == '0' ? 'no' : ''}}breakfast
          </div>
          <div class="duration">
            <span class="date">{{room.start}}</span>
            <span class="status">{{room.startWeek}} check in</span>
            <span class="divider">—</span>
            <span class="date">{{room.end}}</span>
            <span class="status">{{room.endWeek}} departure</span>
            <span class="sum">total {{room.days}} night</span>
          </div>
        </div>
        <!-- room end -->
        <div class="tips">No cancellation/change of order after successful booking</div>
        <!-- user start -->
        <div class="user">
          <div class="form-group">
            <label for="">Room number</label>
            <input type="text" :value="[roomNumber] + 'room'" @click="roomPicker" readonly />
            <img class="icon-right" src="@/assets/icon-right.png"/>
          </div>
          <div class="form-group">
            <label for="">Check in person</label>
            <input type="text" placeholder="name" v-model="name" maxlength="10" />
          </div>
          <div class="form-group">
            <label for="">phone</label>
            <input type="text" placeholder="Used for checking orders" v-model="phone" maxlength="11" />
          </div>
          <div class="form-group">
            <label for="">Time to shop</label>
            <input type="text" placeholder="Expected check-in time" @click="timePicker" :value="currentTime" readonly />
            <img class="icon-right" src="@/assets/icon-right.png" />
          </div>
        </div>
        <!-- roomNumber picker -->
        <div :class="['picker', isRoomNumber ? 'active' : '']">
          <van-picker 
            show-toolbar
            confirm-button-text="confirm"
            cancel-button-text="cancel"
            @confirm="isRoomNumber = false"
            @cancel="isRoomNumber = false"
            :columns="roomNumberArray" 
            @change="roomNumberChange" />
        </div>
        <!-- datetime picker -->
        <div :class="['picker', isShowtime ? 'active' : '']">
          <van-datetime-picker
            v-model="currentTime"
            confirm-button-text="confirm"
            cancel-button-text="cancel"
            @confirm="isShowtime = false"
            @cancel="isShowtime = false"
            type="time"
            :min-hour="1"
            :max-hour="24"
          />
        </div>
        <!-- user end -->
        <div class="remark">Invoices can be obtained from the hotel</div>
      </div>
      <!-- sum bar start -->
      <div class="sum-bar">
        <div class="number">
          store payment：<span>{{totalCost}}</span>
        </div>
        <div class="detail" @click="toggleDetail">
          <img src="@/assets/icon-sum-detail.png"/>
          <span>detail</span>
        </div>
        <button class="submit">Submit orders</button>
      </div>
      <!-- sum bar end -->
      <!-- sum panel start -->
      <div class="sum-panel" v-show="isSumDetail">
        <div class="content">
          <div class="head">
            Cost detail
            <div class="close-parent" @click="toggleDetail">
              <img class="close" src="@/assets/icon-close.png"/>
            </div>
          </div>
          <div class="row">
            <div class="item">Hotel room nights（{{room.days}}night，{{roomNumber}}room）</div>
            <div class="price">৳{{totalPrice}}</div>
          </div>
          <div class="row" v-for="(item, index) in roomCost" :key="index">
            <div class="date">{{item.dateday}}</div>
            <div>{{roomNumber > 1 ? roomNumber+'x' : ''}} ৳{{item.mprice}}</div>
          </div>
          <div class="row member" v-if="vipInfo.is_vip == 1">
            <div class="title">{{vipInfo.key}}</div>
            <div class="price">-৳{{rebate}}</div>
          </div>
          <div class="row sum">
            <div>payment amount</div>
            <div class="price">৳{{totalCost}}</div>
          </div>
        </div>
      </div>
      <!-- sum panel end -->
    </div>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import Header from '@/components/Header.vue';
import { Toast, Picker, DatetimePicker } from 'vant';
import { Component, Vue } from 'vue-property-decorator';
import { format, getStorage } from '@/utils/util';

@Component({
  components: {
    Header,
    [Picker.name]: Picker,
    [DatetimePicker.name]: DatetimePicker
  }
})
export default class BookingOrder extends Vue {
  isSumDetail:boolean = false;
  roomNumberArray:any[] = [1,2,3,4,5,6,7,8,9,10];
  roomNumber:number = 1;
  currentTime:string = '14:00';
  isRoomNumber:boolean = false;
  isShowtime:boolean = false;
  room:any = {
    days: 1,
    end: [],
    start: []
  };
  price:any = '';
  roomCost:any[] = [];
  totalPrice:any = 0;
  totalCost:any = 0;
  name:string = '';
  phone:string = '';
  userid:string = '';
  uniacid:string = '';
  vipInfo:any = {};
  rebate:any = 0;

  roomPicker() {
   this.isRoomNumber = !this.isRoomNumber
  }
  timePicker() {
    this.isShowtime = !this.isShowtime
  }
  async getRoomCost() {
    try {
      const ret = getStorage('room')
      const { id } = getStorage('user')
      const room = {
        ...ret,
        start: format('date', ret.start[1], ret.start[2]),
        end: format('date', ret.end[1], ret.end[2])
      }
      const end = `${room.end[0]}-${room.end[1]}-${room.end[2]}`
      const start = `${room.start[0]}-${room.start[1]}-${room.start[2]}`
      const { data }:any = await services.api.GetRoomCost(room.id, id, start, end)
      let rebate:any = 0
      let totalPrice:any = 0
      const roomCost = data.price_list.map((item:any) => {
        totalPrice += Math.ceil(item.mprice)
        return {
          ...item,
          mprice: Math.ceil(item.mprice).toFixed(2)
        };
      });
      const num = this.roomNumber
      if (Number.isInteger(totalPrice * num)) {
        totalPrice = totalPrice * num
      } else {
        totalPrice = (totalPrice * num).toFixed(2)
      }
      if (data.is_vip == 1) {
        rebate = (totalPrice - data.total_cost).toFixed(2)
      }
      this.room = room
      this.rebate = rebate
      this.vipInfo = data
      this.roomCost = roomCost
      this.price = Math.ceil(totalPrice)
      this.totalPrice = Math.ceil(totalPrice).toFixed(2)
      this.totalCost = (data.total_cost).toFixed(2)
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  toggleDetail() {
    this.isSumDetail = !this.isSumDetail
  }
  roomNumberChange(e:any) {
    const num = e.getValues()[0]
    let totalPrice:any = 0
    let rebate:any = 0
    if (Number.isInteger(this.price * num)) {
      totalPrice = this.price * num
    } else {
      totalPrice = (this.price * num).toFixed(2)
    }
    // 获取会员折扣
    const data = this.vipInfo
    if (data.is_vip == 1) {
      rebate = (totalPrice - (data.total_cost * num)).toFixed(2)
    }
    this.rebate = rebate
    this.roomNumber = num
    this.totalPrice = totalPrice
    this.totalCost = (data.total_cost * num).toFixed(2)
  }
  submit() {
    // api
    this.$router.push('/Complete?type=10001')
  }
  created() {
    this.getRoomCost()
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    height: 100%;
    background: #f2f2f2
  }
  .content {
    padding: .2rem 0 0;
    .picker{
      z-index: $fixedIndex + 1;
      transition: .3s all;
      position: fixed;
      bottom: -100%;
      width: 100%;
      left: 0;
      &.active{
        bottom: 0
      }
    }
    .room {
      margin: 0 .2rem .2rem;
      border-radius: .08rem;
      padding: .24rem 0 0;
      background: #fff;
      .type {
        margin: 0 0 0 .32rem;
        color: #000;
        font-size: .32rem;
        line-height: .32rem;
      }
      .desc {
        color: #666;
        font-size: .26rem;
        line-height: .26rem;
        margin: .23rem 0 0 .32rem;
      }
      .duration {
        margin: .22rem 0 0;
        border-top: .01rem solid #eee;
        padding: .34rem 0 .26rem .36rem;
        .date {
          color: #ff6634;
          font-size: .32rem;
          font-weight: 500;
          line-height: .32rem;
          margin: 0 .12rem 0 0;
        }
        .status {
          color: #929292;
          font-size: .24rem;
          line-height: .24rem;
        }
        .divider {
          display: inline-block;
          position: relative;
          top: -.05rem;
          margin: 0 .25rem;
          color: #989898;
          font-size: .2rem;
        }
        .sum {
          color: #4289ff;
          font-size: .24rem;
          line-height: .24rem;
          margin: 0 0 0 .12rem;
        }
      }
    }
    .tips {
      color: #929292;
      font-size: .26rem;
      line-height: .26rem;
      margin: .25rem .31rem;
    }
    .user {
      background: #fff;
      .form-group {
        height: .89rem;
        position: relative;
        padding: 0 0 0 .21rem;
        line-height: .9rem;
        border-bottom: .01rem solid #eee;
        label {
          display: inline-block;
          vertical-align: top;
          width: 2rem;
          color: #b2b2b2;
          font-size: .3rem;
          line-height: .89rem;
        }
        input {
          border: none;
          outline: none;
          display: inline-block;
          vertical-align: top;
          height: .48rem;
          padding: .2rem 0;
          width: 5.2rem;
          color: #181818;
          font-size: .3rem;
          line-height: .48rem;
        }
      }
      .icon-right {
        position: absolute;
        top: .36rem;
        right: .51rem;
        width: .11rem;
        height: .19rem;
      }
    }
    .remark {
      margin: .3rem 0 0;
      color: #929292;
      font-size: .24rem;
      text-align: center;
    }
  }
  /*统计栏信息*/
  .sum-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    border-top: .01rem solid #e1e1e1;
    width: 100%;
    height: 1.09rem;
    background: #fff;
    div {
      display: inline-block;
      vertical-align: middle;
      height: 1.09rem;
      line-height: 1.09rem;
    }
    .number {
      margin: 0 0 0 .3rem;
      width: 3.86rem;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: .28rem;
      span {
        color: #e93a3d;
        font-size: .42rem;
        &:before {
          content: '৳';
          font-size: .24rem;
        }
      }
    }
    .detail {
      color: #ff6634;
      font-size: .2rem;
      line-height: .2rem;
      img {
        display: block;
        margin: .25rem auto .22rem;
        width: .22rem;
        height: .22rem;
      }
    }
    .submit {
      float: right;
      outline: none;
      border: none;
      margin: -.01rem 0 0;
      width: 2.6rem;
      height: 1.1rem;
      line-height: 1.1rem;
      border-radius: 0;
      color: #fff;
      font-size: .36rem;
      text-align: center;
      background: #ff6634;
    }
  }
  .sum-panel {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(12, 12, 12, .5);
    .content {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4rem;
      overflow-x: auto;
      line-height: 1;
      padding: .2rem 0 0;
      background: #fff;
    }
    .head {
      position: fixed;
      bottom: 4rem;
      width: 100%;
      height: .9rem;
      color: #333;
      font-size: .32rem;
      line-height: .9rem;
      text-align: center;
      background: #f2f2f2;
    }
    .close-parent{
      position: absolute;
      top: 0;
      right: 0;
      width: 1rem;
      height: .9rem;
    }
    .close {
      position: absolute;
      top: .32rem;
      right: .39rem;
      width: .26rem;
      height: .26rem;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: .4rem 0;
      padding-left:.41rem;
      padding-right:.54rem;
      color: #333;
      font-size: .3rem;
      &:nth-of-type(2){
        margin: .33rem 0;
        padding-left:.21rem;
      }
      .date {
        font-size: .26rem;
      }
      .breakfast {
        color: #929292;
        margin: 0 0 0 .74rem;
      }
      .price {
        color: #e93a3d;
      }
    }
    .sum {
      margin: .3rem 0 0;
      border-top: .01rem solid #e1e1e1;
      padding: .34rem .54rem .05rem .22rem;
    }
    .member{
      padding: .2rem .54rem .2rem .22rem;
      background: -webkit-linear-gradient(90deg,rgba(219,189,137,1) 0%,rgba(219,189,137,0) 100%);
      background: linear-gradient(90deg,rgba(219,189,137,1) 0%,rgba(219,189,137,0) 100%);
      .title{
        color: #fff;
      }
    }
  }
</style>