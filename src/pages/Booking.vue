<template>
  <div class="wrap" ref="wrap">
    <Header isBack="0" title="Hotel booking"></Header>
    <div class="main">
      <div class="swiper">
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item v-for="(item, index) in swiper" :key="index">
            <img :src="item" alt=""/>
          </van-swipe-item>
        </van-swipe>
        <div class="number">
          <img src="@/assets/icon-camera.png" alt="">
          <span>{{swiper.length}} sheets</span>
        </div>
      </div>
      <van-tabs v-model="active" @change="tabChange" color="#FF6342" title-active-color="#FF6342" swipeable animated>
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
                <span>total {{days}} night</span>
                <img src="@/assets/icon-right-red.png" alt="">
              </div>
            </div>
            <div class="list">
              <ul>
                <li v-for="(item, index) in roomList" :key="index">
                  <div class="picture" @click="openDetail(item)">
                    <img :src="item.logo" alt="">
                    <div class="tag">details</div>
                  </div>
                  <div class="content">
                    <div class="left">
                      <p class="title">{{item.name}}</p>
                      <div class="info">
                        <span :class="[item.breakfast == '0' ? '' : 'active']">{{item.breakfast == '0' ? 'No breakfast' : 'breakfast'}}</span>
                        <span>{{item.size}}</span>
                        <span>{{item.windows == '1' ? 'Have window' : 'No window'}}</span>
                      </div>
                      <p class="price" v-if="item.price"><span>৳</span>{{item.price}}</p>
                    </div>
                    <div class="right" @click="booking(item)" v-if="item.min_num > 0">
                      <div class="title">Booking</div>
                      <div class="sub">
                        <span v-if="item.min_num == 0">Sold out</span>
                        <span v-if="item.min_num > 10">Pay store</span>
                        <span v-else>Only {{item.min_num}}</span>
                      </div>
                    </div>
                    <div class="right full" v-else>
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
              <p class="title">{{hotel.name}}</p>  
              <p class="sub">{{hotel.star}}</p>
            </div>
            <div class="serve" v-if="hotel.service.length > 0 || hotel.facilities > 0">
              <p class="title">Available services</p>
              <ul>
                <li v-for="i in hotel.service" :key="i.id">
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
                  <p>{{i.val}}</p>
                </li>
                <li v-for="i in hotel.facilities" :key="i.id">
                  <img v-if="i.id == '101009'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101011'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101013'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101014'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101015'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101016'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101017'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101018'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101019'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101020'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101021'" src="@/assets/icon_quilt.png"/>
                  <img v-if="i.id == '101022'" src="@/assets/icon_shower.png"/>
                  <img v-if="i.id == '101023'" src="@/assets/icon_spa.png"/>
                  <img v-if="i.id == '101024'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101025'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101026'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101027'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101028'" src="@/assets/icon_gym.png"/>
                  <img v-if="i.id == '101029'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101030'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101031'" src="@/assets/icon_meetingroom.png"/>
                  <img v-if="i.id == '101032'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101033'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101034'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101035'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101036'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101037'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101092'" src="@/assets/icon_restaurant.png"/>
                  <img v-if="i.id == '101093'" src="@/assets/icon_restaurant.png"/>
                  <img v-if="i.id == '101094'" src="@/assets/icon_restaurant.png"/>
                  <img v-if="i.id == '101095'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101096'" src="@/assets/icon_coffee.png"/>
                  <img v-if="i.id == '101097'" src="@/assets/icon_swimming.png"/>
                  <img v-if="i.id == '101098'" src="@/assets/icon_swimming.png"/>
                  <img v-if="i.id == '101099'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101100'" src="@/assets/icon_bussiness.png"/>
                  <img v-if="i.id == '101137'" src="@/assets/icon_others.png"/>
                  <img v-if="i.id == '101138'" src="@/assets/icon_others.png"/>
                  <p>{{i.val}}</p>
                </li>
              </ul>
            </div>
            <div class="synopsis">
              <p class="title">Hotel introduction</p>
              <div class="attr">
                <div class="item" v-if="hotel.decorationDate">Decorate time: {{hotel.decorationDate}} year</div>
                <div class="item" v-if="hotel.openDate">Opening time: {{hotel.openDate}} year</div>
                <div class="item" v-if="hotel.floorNum">Floor height: {{hotel.floorNum}} layer</div>
                <div class="item" v-if="hotel.roomNum">Total rooms: {{hotel.roomNum}} rooms</div>
              </div>
              <div class="desc" v-html="hotel.introduction"></div>
            </div>
            <div class="policy">
              <p class="title">Hotel Policy</p>
              <div class="content" v-html="hotel.policy"></div>
            </div>
          </div>
        </van-tab>
        <van-tab title="Evaluation">
          <div class="evaluation" v-if="assessList.length">
            <div class="tabs">
              <div :class="['item', type == 0 ? 'active' : '']" @click="chooseComment(0)">Total ({{assessCount.total}})</div>
              <div :class="['item', type == 1 ? 'active' : '']" @click="chooseComment(1)">Pictures ({{assessCount.num}})</div>
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
            {{detail.name}}
            <img src="@/assets/icon-close.png" @click="openDetail" alt="">
          </div>
          <div class="swiper">
            <van-swipe :autoplay="3000" :show-indicators="false" @change="swipeChange">
              <van-swipe-item v-for="(item, index) in detail.img" :key="index">
                <img :src="item" alt="">
              </van-swipe-item>
            </van-swipe>
            <div class="number" v-if="detail.img">{{swipeIdx + 1}} / {{detail.img.length}}</div>
          </div>
          <div class="content">
            <div class="list">
              <ul>
                <li><span>Internet: </span>{{detail.wifi >= '1' ? 'WiFi' : 'No'}}</li>
                <li>
                  <span>Bathroom: </span>
                  <template v-if="detail.bathroom >= '1'">Independent</template>
                  <template v-if="detail.bathrooms >= '1'">Public</template>
                  <template v-if="detail.bathroom < '1' && detail.bathrooms < '1'">No</template>
                </li>
                <li><span>Window: </span>{{detail.windows >= '1' ? 'Hava' : 'No'}}</li>
                <li><span>Live: </span>{{detail.people >= '1' ? detail.people + ' people' : 'No'}}</li>
                <li><span>Area: </span>{{detail.acreage >= '1' ? detail.acreage + '㎡' : 'No'}}</li>
                <li><span>Storey: </span>{{detail.floor >= '1' ? detail.floor + ' layer' : 'No'}}</li>
                <li>
                  <span>BedType: </span>
                  {{detail.bedtype >= '1' ? detail.bedtype : 'No'}}
                  {{detail.size >= '1' ? detail.size + 'm' : 'No'}}
                </li>
                <li><span>Breakfast: </span>{{detail.breakfast >= '1' ? 'Hava' : 'No'}}breakfast</li>
                <li><span>Air conditioner: </span>{{detail.air_conditioner >= '1' ? 'Have' : 'No'}}</li>
              </ul>
            </div>
            <div class="policy">
              <p class="title">Hotel Policy</p>
              <div v-if="detail.policy" v-html="detail.policy"></div>
            </div>
          </div>
          <div :class="['foot', detail.min_num <= 0 ? 'full' : '']">
            <div class="item">৳{{detail.price}}</div>
            <div class="item" @click="booking(detail)">{{detail.min_num > 0 ? 'Booking' : 'Full room'}}</div>
          </div>
        </div>
      </van-popup>
    </div>    
    <Footer name="Booking"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Comment from '@/components/Comment.vue';
import { formatDate, format, setStorage, getStorage } from '@/utils/util';
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
  userId:any = '';
  week:any = {
    start: '',
    end: ''
  };
  date:any = {
    start: '',
    end: ''
  };
  start:any = {     // 开始日期
    now: '',
    time: ''
  };
  end:any = {     // 结束日期
    now: '',
    time: ''
  };
  hotel:any = {};
  days:number = 0;
  detail:any = {};
  swiper:any[] = [];
  swipeIdx:number = 0;
  roomList:any[] = [];
  show:boolean = false;
  visible:boolean = false;
  current:any = new Date();
  minDate:any = new Date();
  maxDate:any = new Date(Date.now() + (24*60*60*1000) * (365 / 12 * 5));
  assessList:any[] = []
  assessCount:object = {}

  swipeChange(index:any) {
    this.swipeIdx = index
  }
  tabChange(index:any) {
    if (index == 2) {
      this.page = 1
      this.getAssess()
      this.getAssessCount()
    }
  }
  // 获取评论数量
  async getAssessCount() {
    try {
      const { data } = await services.api.AssessCount(this.userId)
      this.assessCount = data
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  // 获取评论列表
  async getAssess() {
    try {
      const { data } = await services.api.AssessList(this.page, this.type)
      this.assessList = data.map((item:any) => {
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
  async getRoomList() {
    try {
      const hotel = getStorage('hotel')
      const { data } = await services.api.RoomList(this.start.time, this.end.time, hotel.id)
      const swiper:any[] = [];
      this.roomList = data.map((item:any) => {
        if (item.state == '1') {
          swiper.push(item.logo)
        }
        return {
          ...item,
          price: Math.ceil(item.min_price)
        }
      });
      this.swiper = swiper
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  async openDetail(item:any = '') {
    this.show = !this.show
    if (item.id) {
      try {
        const { data } = await services.api.RoomDetails(item.id)
        const facilities:any[] = []
        if (data.facilities) {
          for (const i of data.facilities) {
              for (const j in i) {
                if (j) {
                    facilities.push({
                      id: j,
                      value: i[j]
                    })
                }
            }
          }
        }
        this.detail = {
          ...data,
          facilities,
          min_num: item.min_num,
          img: data.img ? data.img : []
        }
      } catch(e) {
        Toast.fail(e.message)
      }
    }
  }
  getHotel() {
    try {
      const hotel = getStorage('hotel')
      const service = [];
      const facilities = [];
      if (hotel.service) {
        for (const i in hotel.service) {
          if (i) {
            service.push({
              id: i,
              val: hotel.service[i]
            });
          }
        }
      }
      if (hotel.facilities) {
        for (const i in hotel.facilities) {
          if (i) {
            facilities.push({
              id: i,
              val: hotel.facilities[i]
            });
          }
        }
      }
      this.hotel = {
        ...hotel,
        service,
        facilities
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  selectDate(e:number) {
    this.index = e
    this.visible = true
  }
  confirmDate(e:any) {
    const t = new Date(e)
    const y = t.getFullYear()
    const m = t.getMonth() + 1
    const d = t.getDate()
    const w = t.getDay()
    if (this.index == 0) {
      this.start.now = new Date(`${y}-${m}-${d}`)
      this.start.time = `${y}-${m}-${d}`
      if (this.start.now >= this.end.now) {
        Toast.fail('Start date greater than end date')
        return
      }
      this.date = {
        ...this.date,
        start: format('date', m, d)
      }
      this.week = {
        ...this.week,
        start: format('week', w)
      }
    } else if (this.index == 1) {
      this.end.now = new Date(`${y}-${m}-${d}`)
      this.end.time = `${y}-${m}-${d}`
      if (this.end.now <= this.start.now) {
        Toast.fail('End date less than start date')
        return
      }
      this.date = {
        ...this.date,
        end: format('date', m, d)
      }
      this.week = {
        ...this.week,
        end: format('week', w)
      }
    }
    this.visible = false
    this.days = Number.parseInt(`${(this.end.now - this.start.now) / (24*60*60*1000)}`, 10)
  }
  booking(item:any) {
    if (!item.min_num || item.min_num == '0') {
      return;
    }
    const data = {
      ...item,
      days: this.days,
      start: this.start.time.split('-'),
      end: this.end.time.split('-'),
      startWeek: this.week.start,
      endWeek: this.week.end
    }
    setStorage('room', data)
    this.$router.push('/BookingOrder')
  }
  chooseComment(e:number) {
    this.type = e
    this.page = 1
    this.getAssess()
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
    const t = new Date()
    const t2 = new Date(Date.now() + 24*60*60*1000)
    const y = t.getFullYear()
    const m = t.getMonth() + 1
    const d = t.getDate()
    const w = t.getDay()
    const w2 = t2.getDay()
    this.date = {
      start: format('date', m, d),
      end: format('date', m, d + 1)
    }
    this.week = {
      start: format('week', w),
      end: format('week', w2)
    }
    this.days = 1
    this.start.now = new Date(`${y}-${m}-${d}`)
    this.end.now = new Date(`${y}-${m}-${d + 1}`)
    this.start.time = `${y}-${m}-${d}`
    this.end.time = `${y}-${m}-${d + 1}`
    window.addEventListener('scroll', this.handleScroll, true)
    const user = getStorage('user')
    this.userId = user.id
    this.getRoomList()
    this.getHotel()
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
        height: 1.54rem;
        position: relative;
        display: table-cell;
        vertical-align: middle;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover
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