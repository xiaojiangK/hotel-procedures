<template>
  <div class="wrap" ref="wrap">
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
          <img src="@/assets/icon-camera.png" alt="">
          <span>61 sheets</span>
        </div>
      </div>
      <van-tabs v-model="active" color="#FF6342" title-active-color="#FF6342" swipeable animated>
        <van-tab title="Booking">
          <div class="room">
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
                <span>total {{total}} night</span>
                <img src="@/assets/icon-right-red.png" alt="">
              </div>
            </div>
            <div class="list">
              <ul>
                <li>
                  <div class="picture" @click="openDetail">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span>148.00</p>
                    </div>
                    <div class="right" @click="booking">
                      <div class="title">Booking</div>
                      <div class="sub">Only eight</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="picture" @click="openDetail">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span>148.00</p>
                    </div>
                    <div class="right" @click="booking">
                      <div class="title">Booking</div>
                      <div class="sub">Pay store</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="picture" @click="openDetail">
                    <img src="@/assets/good.png" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">Ordinary single room</p>
                      <p class="info">no breakfast Single bed no window</p>
                      <p class="price"><span>৳</span>799.00</p>
                    </div>
                    <div class="right full" @click="booking">
                      <div class="title">Full house</div>
                      <div class="sub">Full house</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="Facility">
          <div class="facility">
            <div class="hotel">
              <p class="title">Empark Grand Hotel</p>  
              <p class="sub">five-star</p>
            </div>
            <div class="serve">
              <p class="title">Available services</p>
              <ul>
                <li v-for="(i, index) in serve" :key="index">
                  <img v-if="i.id == '101006'" src="@/assets/icon_parking.png" />
                  <img v-if="i.id == '101007'" src="@/assets/icon_card.png" />
                  <img v-if="i.id == '101038'" src="@/assets/icon_clock.png" />
                  <img v-if="i.id == '101039'" src="@/assets/icon_cup.png" />
                  <img v-if="i.id == '101040'" src="@/assets/icon_eating.png" />
                  <img v-if="i.id == '101041'" src="@/assets/icon_reception.png" />
                  <img v-if="i.id == '101042'" src="@/assets/icon_pic.png" />
                  <img v-if="i.id == '101044'" src="@/assets/icon_socks.png" />
                  <img v-if="i.id == '101045'" src="@/assets/icon_bag.png" />
                  <img v-if="i.id == '101047'" src="@/assets/icon_foreign.png" />
                  <img v-if="i.id == '101048'" src="@/assets/icon_bag.png" />
                  <img v-if="i.id == '101049'" src="@/assets/icon_care.png" />
                  <img v-if="i.id == '101050'" src="@/assets/icon_airport.png" />
                  <img v-if="i.id == '101051'" src="@/assets/icon_bicycle.png" />
                  <img v-if="i.id == '101052'" src="@/assets/icon_multilingual.png" />
                  <img v-if="i.id == '101053'" src="@/assets/icon_umbrella.png" />
                  <img v-if="i.id == '101101'" src="@/assets/icon_car.png" />
                  <img v-if="i.id == '101102'" src="@/assets/icon_car.png" />
                  <img v-if="i.id == '101103'" src="@/assets/icon_airport.png" />
                  <img v-if="i.id == '101104'" src="@/assets/icon_railway.png" />
                  <img v-if="i.id == '101106'" src="@/assets/icon_baby.png" />
                  <img v-if="i.id == '101128'" src="@/assets/icon_wifi.png" />
                  <img v-if="i.id == '101135'" src="@/assets/icon_pets.png" />
                  <img v-if="i.id == '101170'" src="@/assets/icon_car.png" />
                  <img v-if="i.id == '101197'" src="@/assets/icon_folding.png" />
                  <img v-if="i.id == '201111'" src="@/assets/icon_others.png" />
                  <img v-if="i.id == '201112'" src="@/assets/icon_gym.png" />
                  <img v-if="i.id == '201113'" src="@/assets/icon_meetingroom.png" />
                  <img v-if="i.id == '201114'" src="@/assets/icon_restaurant.png" />
                  <p>{{i.title}}</p>
                </li>
              </ul>
            </div>
            <div class="synopsis">
              <p class="title">Hotel introduction</p>
              <div class="attr">
                <div class="item">Decorate time: 2017 year</div>
                <div class="item">Opening time: 2012 year</div>
                <div class="item">Floor height: 4 layer</div>
                <div class="item">Total rooms: 80 rooms</div>
              </div>
              <div class="desc">Beijing century jin yuan hotel is located in the beautiful KunYu river between, Beijing west 4th ring road and west ring, not only to xiangshan, the Summer Palace and the zoo around, badachu and other tourist attractions, is adjacent to zhongguancun district, only with jin yuan era shopping center across the street, hotel total construction area of 186800 square meters, construction area of 42000 square meters underground are among those of leisure, shopping and entertainment facilities, entertainment facilities all of unparalleled; Room broadband Internet access, satellite TV, international and domestic direct telephone, independent shower room, etc. Chinese food, western food, coffee shop, Japanese food, bar, tea house will make you linger. It has 18 conference rooms of various sizes, and modern conference service facilities such as digital conference system, multi-language simultaneous interpretation system, video tracking, etc. The grand ballroom can accommodate 1000 people and the international conference hall can accommodate 200 people. It is an ideal place for holding various international conferences. It is also a good choice for your business trip. The underground swimming pool and gym will be closed due to the decoration of the city that never stays up. The specific opening time will be further notified.</div>
            </div>
            <div class="policy">
              <p class="title">Hotel Policy</p>
              <ul>
                <li>· check-in time: after 14:00; check-out time: before 12:00</li>
                <li>· non-cancelable after confirmation of the order. If you do not check in, the hotel will deduct the full room fee</li>
                <li>· direct consumption, bring all check-in, the person's valid id card for check-in, check-in must be in accordance with one person one - card</li>
                <li>· Deposit is required for accommodation, the amount of which is subject to the front desk</li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="Evaluation">
          <div class="evaluation" v-if="assessList.length">
            <div class="tabs">
              <div :class="['item', commentIdx == 0 ? 'active' : '']" @click="chooseComment(0)">Total ({{assessCount.total}})</div>
              <div :class="['item', commentIdx == 1 ? 'active' : '']" @click="chooseComment(1)">Pictures ({{assessCount.num}})</div>
            </div>
            <div class="comment">
              <ul>
                <Comment v-for="(item, index) in assessList" :key="index" :item="item"></Comment>
              </ul>
            </div>
          </div>
          <div class="empty" v-else>
            <img src="@/assets/empty.png" alt="">
            <p>暂无评价</p>
          </div>
        </van-tab>
      </van-tabs>

      <van-popup
        v-model="visible"
        round
        position="bottom"
        :style="{ height: '40%' }">
        <van-datetime-picker
          type="date"
          v-model="current"
          :max-date="maxDate"
          :min-date="minDate"
          confirm-button-text="confirm"
          cancel-button-text="cancel"
          @confirm="confirmDate"
          @cancel="visible = false"
        />
      </van-popup>

      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '72%' }">
        <div class="details">
          <div class="head">
            Standard twin room
            <img src="@/assets/icon-close.png" @click="openDetail" alt="">
          </div>
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
            <div class="number">1 / 4</div>
          </div>
          <div class="content">
            <div class="list">
              <ul>
                <li><span>Internet:</span> WIFI</li>
                <li><span>Bathroom:</span> independent</li>
                <li><span>Window:</span> have</li>
                <li><span>Live:</span> 2 people</li>
                <li><span>Area:</span> 25㎡</li>
                <li><span>Storey:</span> layer 2</li>
                <li><span>BedType:</span>1.0×2.0 m 2 sheets</li>
                <li><span>Breakfast:</span> No breakfast</li>
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
          <div class="foot full">
            <div class="item">৳148.00</div>
            <div class="item" @click="booking">Booking</div>
          </div>
        </div>
      </van-popup>
    </div>    
    <Footer name="Booking"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { formatDate } from '@/utils/util';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Comment from '@/components/Comment.vue';
import { Toast ,Swipe, SwipeItem, Tab, Tabs, DatetimePicker, Popup } from 'vant';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Footer,
    Comment,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Popup.name]: Popup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DatetimePicker.name]: DatetimePicker
  }
})
export default class Booking extends Vue {
  active:number = 0;
  index:number = -1;
  page:number = 1;
  type:number = 0;
  week:object = {
    start: '',
    end: ''
  };
  date:object = {
    start: '',
    end: ''
  };
  startNow:any;     // 开始日期
  endNow:any;       // 结束日期
  total:number = 0;
  show:boolean = false;
  commentIdx:number = 0;
  visible:boolean = false;
  current:any = new Date();
  minDate:any = new Date();
  maxDate:any = new Date(Date.now() + (24*60*60*1000) * (365 / 12 * 5));

  // test
  serve:any[] = [
    {
      id: '101006',
      title: 'Wireless Internet'
    },{
      id: '101007',
      title: 'Wireless Internet'
    },{
      id: '101038',
      title: 'Wireless Internet'
    },{
      id: '101039',
      title: 'Wireless Internet'
    },{
      id: '101040',
      title: 'Wireless Internet'
    },{
      id: '101041',
      title: 'Wireless Internet'
    },{
      id: '101042',
      title: 'Wireless Internet'
    },{
      id: '101044',
      title: 'Wireless Internet'
    },{
      id: '101044',
      title: 'Wireless Internet'
    },{
      id: '101045',
      title: 'Wireless Internet'
    },{
      id: '101045',
      title: 'Wireless Internet'
    },{
      id: '101047',
      title: 'Wireless Internet'
    },{
      id: '101048',
      title: 'Wireless Internet'
    },{
      id: '101049',
      title: 'Wireless Internet'
    },{
      id: '101050',
      title: 'Wireless Internet'
    },{
      id: '101051',
      title: 'Wireless Internet'
    },{
      id: '101052',
      title: 'Wireless Internet'
    },{
      id: '101053',
      title: 'Wireless Internet'
    }
  ]
  assessList:any[] = []
  assessCount:object = {}

  // 获取评论数量
  async getAssessCount() {
    try {
      const res = await services.api.assessCount('user_id')
      this.assessCount = res.data
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  // 获取评论列表
  async getAssess() {
    try {
      // const res = await services.api.assessList(this.page, this.type)
      const res = {
        data: [
          {
            arrival_time: '1566748800',
            content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
            display: '1',
            id: '84',
            img: [{img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}],
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
          },
          {
            arrival_time: '1566748800',
            content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
            display: '1',
            id: '84',
            img: [
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}
            ],
            img_type: '1',
            logo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
            name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
            order_id: '805',
            reply: '嘻嘻，不错不错',
            reply_time: '1570766323',
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
      this.assessList = res.data.map((item:any) => {
        return {
          ...item,
          speaker: 'Hotel reply：',
          time: formatDate(item.time * 1000),
          reply_time: formatDate(item.reply_time * 1000),
          arrival_time: formatDate(item.arrival_time * 1000),
          img: item.img && item.img.map((i:any) => i.img_url)
        }
      })
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  selectDate(e:number) {
    this.index = e
    this.visible = true
  }
  format(type:string, n:number, d:number = 0) {
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
        return `January ${d}`
      } else if (n == 2) {
        return `February ${d}`
      } else if (n == 3) {
        return `March ${d}`
      } else if (n == 4) {
        return `April ${d}`
      } else if (n == 5) {
        return `May ${d}`
      } else if (n == 6) {
        return `June ${d}`
      } else if (n == 7) {
        return `July ${d}`
      } else if (n == 8) {
        return `August ${d}`
      } else if (n == 9) {
        return `September ${d}`
      } else if (n == 10) {
        return `October ${d}`
      } else if (n == 11) {
        return `November ${d}`
      } else if (n == 12) {
        return `December ${d}`
      }
    }
  }
  confirmDate(e:any) {
    const t = new Date(e)
    const y = t.getFullYear()
    const m = t.getMonth() + 1
    const d = t.getDate()
    const w = t.getDay()
    if (this.index == 0) {
      this.startNow = new Date(`${y}-${m}-${d}`)
      if (this.startNow >= this.endNow) {
        Toast.fail('Start date greater than end date')
        return
      }
      this.date = {
        ...this.date,
        start: this.format('date', m, d)
      }
      this.week = {
        ...this.week,
        start: this.format('week', w)
      }
    } else if (this.index == 1) {
      this.endNow = new Date(`${y}-${m}-${d}`)
      if (this.endNow <= this.startNow) {
        Toast.fail('End date less than start date')
        return
      }
      this.date = {
        ...this.date,
        end: this.format('date', m, d)
      }
      this.week = {
        ...this.week,
        end: this.format('week', w)
      }
    }
    this.visible = false
    this.total = Number.parseInt(`${(this.endNow - this.startNow) / (24*60*60*1000)}`, 10)
  }
  booking() {
    this.$router.push('/BookingOrder')
  }
  openDetail() {
    this.show = !this.show;
  }
  chooseComment(e:number) {
    this.commentIdx = e;
    // api
  }
  handleScroll(e:any) {
    if (this.active == 2) {
      const client = document.documentElement.clientHeight || document.body.clientHeight
      const current = (this.$refs.wrap as any).offsetHeight
      const scrollTop = e.target.scrollTop
      if (scrollTop >= current - client) {
        console.log(scrollTop)
        // api
      }
    }
  }
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
  created() {
    this.getAssess()
    this.getAssessCount()
    const t = new Date()
    const t2 = new Date(Date.now() + 24*60*60*1000)
    const y = t.getFullYear()
    const m = t.getMonth() + 1
    const d = t.getDate()
    const w = t.getDay()
    const w2 = t2.getDay()
    this.date = {
      start: this.format('date', m, d),
      end: this.format('date', m, d + 1)
    }
    this.week = {
      start: this.format('week', w),
      end: this.format('week', w2)
    }
    this.total = 1
    this.startNow = new Date(`${y}-${m}-${d}`)
    this.endNow = new Date(`${y}-${m}-${d + 1}`)
    window.addEventListener('scroll', this.handleScroll, true)
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    padding: 1rem 0 1.16rem;
  }
  .main{
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
      .number{
        left: .2rem;
        bottom: .2rem;
        color: #fff;
        font-size: .2rem;
        position: absolute;
        border-radius: .22rem;
        padding: .1rem .14rem;
        background:rgba(70,70,70,.6);
        img{
          width: .26rem;
          height: .26rem;
          margin: 0 .08rem 0 0;
          vertical-align: middle
        }
        span{
          vertical-align: middle
        } 
      }
    }
    .details{
      background: #fff;
      .head{
        width: 100%;
        height: .92rem;
        font-size: .3rem;
        line-height: .92rem;
        text-align: center;
        position: relative;
        background: #fff;
        img{
          top: .3rem;
          right: .3rem;
          width: .32rem;
          position: absolute;
        }
      }
      .swiper{
        height: 2.86rem;
        .number{
          left: auto;
          right: .24rem;
          bottom: .24rem
        }
      }
      .content{
        padding: 0 .28rem
      }
      .foot{
        overflow: hidden;
        .item{
          width: 50%;
          float: left;
          height: .96rem;
          text-align: center;
          line-height: .96rem;
          &:first-child{
            color: #FF6342;
            font-size: .4rem;
            background: #FAFAFA;
          }
          &:last-child{
            color: #fff;
            font-size: .34rem;
            background: #FF6342;
          }
        }
        &.full{
          .item:last-child{
            pointer-events: none;
            background: #DEDEDE;
          }
        }
      }
      .list{
        overflow: hidden;
        margin: 0 0 .28rem;
        padding: 0 0 .44rem;
        border-bottom: .01rem solid #E0E0E0;
        li{
          width: 50%;
          float: left;
          height: .3rem;
          font-size: .26rem;
          margin: .28rem 0 0;
          span{
            color: #999;
          }
        }
      }
      .policy{
        .title{
          font-size: .3rem;
          font-weight: bold;
          margin: 0 0 .28rem;
        }
        li{
          color:#666;
          font-size: .24rem;
          margin: 0 0 .16rem;
        }
      }
    }
    .empty{
      padding: 1.4rem 0;
      text-align: center;
      img{
        width: 2.6rem;
        margin: 0 0 .6rem
      }
      p{
        color: #999;
        font-size: .36rem
      }
    }
  }
  .room{
    .select{
      overflow: hidden;
      padding: .4rem .24rem;
      .item{
        float: left;
        width: 37%;
        line-height: .4rem;
        white-space: nowrap
      }
      .date{
        font-size: .26rem;
        margin: 0 .04rem 0 0
      }
      .week{
        color: #999;
        font-size: .24rem
      }
      .right{
        width: 26%;
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
  }
  .facility{
    padding: 0 .28rem .6rem;
    .title{
      margin: .28rem 0 .28rem;
    }
    .hotel{
      padding: 0 0 .34rem;
      border-bottom: .01rem solid #E0E0E0;
      .title{
        margin: .28rem 0 .2rem;
      }
      .sub{
        color: #999;
        font-size: .24rem
      }
    }
    .serve{
      padding: 0 0 .14rem;
      border-bottom: .01rem solid #E0E0E0;
      ul{
        overflow: hidden;
        li{
          width: 20%;
          float: left;
          margin: 0 0 .26rem;
          text-align: center;
          img{
            width: .4rem;
            display: block;
            margin: 0 auto .18rem;
          }
          p{
            color: #999;
            height: .56rem;
            font-size: .2rem
          }
        }
      }
    }
    .synopsis{
      padding: 0 0 .4rem;
      border-bottom: .01rem solid #E0E0E0;
      .attr{
        overflow: hidden;
        .item{
          width: 50%;
          float: left;
          margin: 0 0 .2rem;
        }
      }
      .desc{
        color: #666;
        text-indent: 2em;
        font-size: .24rem;
        line-height: .36rem
      }
    }
    .policy{
      li{
        color: #666;
        font-size: .24rem;
        margin: 0 0 .16rem
      }
    }
  }
  .evaluation{
    .tabs{
      overflow: hidden;
      padding: .28rem .22rem;
      .item{
        font-size: .26rem;
        color: #B5B5B5;
        transition: .3s all;
        margin: 0 .26rem 0 0;
        display: inline-block;
        padding: .18rem .24rem;
        border-radius: .32rem;
        border: .01rem solid #E0E0E0;
        &.active{
          color: #FF6342;
          border: .01rem solid #FF6342
        }
      }
    }
  }
</style>