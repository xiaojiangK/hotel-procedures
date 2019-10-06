<template>
  <div class="wrap">
    <Header isBack="0" title="Hotel booking"></Header>
    <div class="main">
      <div class="swiper">
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item>
            <img src="@/assets/banner.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/banner.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="@/assets/banner.png" alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="number">
          <img src="@/assets/icon-photo.png" alt="">
          <span>61 sheets</span>
        </div>
      </div>
      <van-tabs v-model="active" color="#FF6342" title-active-color="#FF6342" :swipeable="true" :animated="true">
        <van-tab title="Booking">
          <div class="room">
            <van-datetime-picker
              v-model="current"
              type="date"
              :max-date="maxDate"
              :min-date="new Date()"
              confirm-button-text="confirm"
              cancel-button-text="cancel"
              @change="changeDate"
            />
            <div class="select">
              <div class="item" @click="selectDate(0)">
                <span class="date">{{date.start}}</span>
                <span class="week">{{week.start}}</span>
              </div>
              <div class="item" @click="selectDate(1)">
                <span class="date">{{date.end}}</span>
                <span class="week">{{week.end}}</span>
              </div>
              <div class="item right">
                <span>total of {{total}} night</span>
                <img src="@/assets/icon-right-red.png" alt="">
              </div>
            </div>
            <div class="list">
              <ul>
                <li>
                  <div class="picture">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span> 148.00</p>
                    </div>
                    <div class="right">
                      <div class="title">Booking</div>
                      <div class="sub">Only eight</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="picture">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span> 148.00</p>
                    </div>
                    <div class="right">
                      <div class="title">Booking</div>
                      <div class="sub">Pay cash</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="picture">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span> 799.00</p>
                    </div>
                    <div class="right full">
                      <div class="title">Full house</div>
                      <div class="sub">Full house</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="details">
              <div class="head">
                <span>Standard twin room</span>
                <img src="@/assets/icon-close.png" alt="">
              </div>
              <div class="content">
                <div class="swiper">
                  <van-swipe :autoplay="3000" :show-indicators="false">
                    <van-swipe-item>
                      <img src="@/assets/banner.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="@/assets/banner.png" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                      <img src="@/assets/banner.png" alt="">
                    </van-swipe-item>
                  </van-swipe>
                  <div class="number">1/4</div>
                </div>
                <div class="list">
                  <ul>
                    <li>surf the Internet <span>WIFI</span></li>
                    <li>bathroom <span>independent</span></li>
                    <li>window <span>have</span></li>
                    <li>can live <span>2 people</span></li>
                    <li>area <span>25㎡</span></li>
                    <li>storey <span>layer 2</span></li>
                    <li>bed type <span>Single bed 1.0×2.0 m 2 sheets</span></li>
                    <li>breakfast <span>No breakfast</span></li>
                  </ul>
                </div>
                <div class="policy">
                  <p class="title">Hotel Policy</p>
                  <ul>
                    <li>· Check-in time: after 14:00 departure time: before 12:00</li>
                    <li>· non-cancelable after confirmation of the order. If you do not check in, the hotel will deduct the full room fee</li>
                  </ul>
                </div>
              </div>
              <div class="foot">
                <div class="item">৳ 148.00</div>
                <div class="item">Booking</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="Facilities">Facilities details</van-tab>
        <van-tab title="Evaluation">Guest evaluation</van-tab>
      </van-tabs>
    </div>    
    <Footer name="Booking"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { Swipe, SwipeItem, Tab, Tabs, DatetimePicker } from 'vant';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Footer,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DatetimePicker.name]: DatetimePicker
  }
})
export default class Booking extends Vue {
  active:number = 0;
  index:number = -1;
  week:object = {
    start: '',
    end: ''
  };
  date:object = {
    start: '',
    end: ''
  };
  total:number = 0;
  current:any = new Date();
  maxDate:string = new Date(Date.now() + (24*60*60*1000) * (365 / 12 * 5));

  selectDate(e:number) {
    this.index = e;
  }
  format(type, n) {
    if (type == 'week') {
      if (n == 0) {
        return 'Sunday'
      } else if (n == 1) {
        return 'Monday'
      } else if (n == 2) {
        return 'Tuesday'
      } else if (n == 3) {
        return 'Wednesday'
      } else if (n == 4) {
        return 'Thursday'
      } else if (n == 5) {
        return 'Friday'
      } else if (n == 6) {
        return 'Saturday'
      }
    } else {
      if (n == 1) {
        return 'January'
      } else if (n == 2) {
        return 'February'
      } else if (n == 3) {
        return 'March'
      } else if (n == 4) {
        return 'April'
      } else if (n == 5) {
        return 'May'
      } else if (n == 6) {
        return 'June'
      } else if (n == 7) {
        return 'July'
      } else if (n == 8) {
        return 'August'
      } else if (n == 9) {
        return 'September'
      } else if (n == 10) {
        return 'October'
      } else if (n == 11) {
        return 'November'
      } else if (n == 12) {
        return 'December'
      }
    }
  }
  changeDate(e) {
    const v = e.getValues()
    const t = `${v[0]}-${v[1]}-${v[2]}`
    if (this.index == 0) {
      this.date.start = this.format('date', v[1]) + v[2];
      this.week.start = this.format('week', new Date(t).getDay())
    } else if (this.index == 1) {
      this.date.end = this.format('date', v[1]) + v[2];
      this.week.end = this.format('week', new Date(t).getDay())
    }
  }
  created() {
    // this.date.start = this.format('date', v[1]) + v[2];
    // this.week.start = this.format('week', new Date(t).getDay())
    // this.date.end = this.format('date', v[1]) + v[2];
    // this.week.end = this.format('week', new Date(t).getDay())
  }
}
</script>
<style lang="scss" scoped>
  .swiper{
    height: 3.5rem;
    position: relative;
    .van-swipe{
      width: 100%;
      height: 100%
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover
    }
  }
  .room{
    .select{
      overflow: hidden;
      padding: .4rem .24rem;
      .item{
        float: left;
        width: 33.33%;
        line-height: .4rem;
      }
      .date{
        font-size: .32rem;
        margin: 0 .04rem 0 0
      }
      .week{
        color: #999;
        font-size: .24rem
      }
      .right{
        color: #FF6342;
        font-size: .24rem;
        text-align: right;
        span{
          vertical-align: middle;
          margin: 0 .1rem 0 0;
        }
        img{
          width: .12rem;
          vertical-align: middle
        }
      }
    }
    .list{
      padding: 0 .24rem;
      li{
        margin: 0 0 .36rem;
      }
      .picture{
        width: 1.6rem;
        position: relative;
        display: table-cell;
        vertical-align: middle;
        img{
          width: 100%;
        }
        .tag{
          left: 0;
          bottom: 0;
          color:#fff;
          font-size: .24rem;
          position: absolute;
          padding: .04rem .1rem;
          background: rgba(0, 0, 0, .6);
          border-radius: 0 .12rem 0 .12rem;
        }
      }
      .content{
        width: 5.2rem;
        position: relative;
        display: table-cell;
        padding: 0 0 0 .2rem;
        vertical-align: middle;
        .left{
          width: 3.74rem;
          display: table-cell;
          vertical-align: middle;
          .title{
            font-size: .3rem;
            margin: 0 0 .12rem
          }
          .info{
            color: #666;
            font-size: .24rem
          }
          .price{
            color: #FF6342;
            font-size: .4rem;
            margin: .2rem 0 0;
            span{
              font-size: .24rem
            }
          }
        }
        .right{
          top: 50%;
          right: 0;
          width: 1.2rem;
          cursor: pointer;
          position: absolute;
          transform: translateY(-50%);
          .title{
            width:100%;
            height: .58rem;
            color: #fff;
            text-align: center;
            line-height: .58rem;
            background: #FF6342;
            border-radius: .12rem .12rem 0 0;
          }
          .sub{
            height: .39rem;
            color: #FF6342;
            font-size: .2rem;
            text-align: center;
            line-height: .39rem;
            border: .01rem solid #FF6342;
            border-radius:0 0 .12rem .12rem;
          }
        }
        .full{
          pointer-events: none;
          .title{
            background: #C6C6C6;
          }
          .sub{
            color: #C6C6C6;
            border-color: #C6C6C6;
          }
        }
      }
    }
    .details{
      left: 0;
      bottom: 0;
      display: none;
      position: fixed;
      z-index: $modelIndex;
    }
  }
</style>