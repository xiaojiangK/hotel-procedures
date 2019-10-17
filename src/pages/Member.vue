<template>
  <div class="wrap">
    <Header white="true" isBack="0" title="Member center"></Header>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="user">
        <div class="left">
          <img :src="userInfo.img" class="avater" alt="">
          <div class="name">
            <p>{{userInfo.name ? userInfo.name : 'User name'}}</p>
            <div class="tags">
              <div class="item" v-if="userInfo.tel">
                <img src="@/assets/vip-icon.png" alt="">
                <span>VIP Member</span>
              </div>
              <div class="item" v-if="userInfo.issale == '0' && (userInfo.isclient == '1' || userInfo.isclient == '0')">
                <img src="@/assets/company-icon.png" alt="">
                <span>{{userInfo.company_name}}</span>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/EditUser" class="right">
          <img src="@/assets/icon-edit.png" alt="">
        </router-link>
      </div>
      <div class="main">
        <div class="order">
          <div class="head">
            <router-link to="/OrderList">
              <div class="title">My order</div>
              <div class="more">
                <span>more</span>
                <img src="@/assets/icon-next.png" alt="">
              </div>
            </router-link>
          </div>
          <div class="content">
            <div v-for="(i, index) in orderList" :key="index">
              <div class='item' v-if="index == 0">
                <div class='order-header'>
                  <div class='order-title' v-if="i.flag == '0'">
                    <img src='@/assets/icon-order.png'/>
                    <span>{{i.room_type}}</span>
                  </div>
                  <div class='order-title' v-if="i.flag == '1'">
                    <img src='@/assets/index-super-sm.png'/>
                    <span>Hotel store</span>
                  </div>
                  <div class='order-title' v-if="i.flag == '2'">
                    <img src='@/assets/icon-hotel.png'/>
                    <span>Hotel facility</span>
                  </div>
                  <div class='order-title' v-if="i.flag == '3'">
                    <img src='@/assets/icon-breakfast.png'/>
                    <span>Breakfast coupon</span>
                  </div>
                  <div class="order-status" v-if="i.flag == '0'">
                    <span v-if="i.status == '1'">non paid</span>
                    <span v-if="i.status == '2'">have paid</span>
                    <span v-if="i.status == '10'">no lived</span>
                    <span v-if="i.status == '3'">canceled</span>
                    <span v-if="i.status == '4'">completed</span>
                    <span v-if="i.status == '5'">lived</span>
                    <span v-if="i.status == '7'">refund</span>
                    <span v-if="i.status == '12'">no confirm</span>
                  </div>
                  <div class="order-status" v-if="i.flag == '1'">
                    <span v-if="i.status == '1'">non paid</span>
                    <span v-if="i.status == '2'">no shipped</span>
                    <span v-if="i.status == '3'">canceled</span>
                    <span v-if="i.status == '4'">completed</span>
                    <span v-if="i.status == '7'">refund</span>
                  </div>
                  <div class="order-status" v-if="i.flag == '2'">
                    <span v-if="i.status == '1'">non paid</span>
                    <span v-if="i.status == '2'">unused</span>
                    <span v-if="i.status == '3'">canceled</span>
                    <span v-if="i.status == '4'">used</span>
                    <span v-if="i.status == '7'">refund</span>
                  </div>
                  <div class="order-status" v-if="i.flag == '3'">
                    <span v-if="i.status == '1'">non paid</span>
                    <span v-if="i.status == '2'">unused</span>
                    <span v-if="i.status == '3'">canceled</span>
                    <span v-if="i.status == '4'">used</span>
                    <span v-if="i.status == '7'">refund</span>
                  </div>
                </div>  
                  
                <div class='order-content' v-if="i.flag == '0'" @click="goDetail(i)">
                  <img class='order-img' :src='i.room_logo'/>
                  <div>
                    <div><span v-if="i.size">{{i.size}}</span>  {{i.windows == '1' ? '有' : '无'}}窗  {{i.breakfast == '0' ? '不' : ''}}含早</div>
                    <div class="sub">{{i.arrival_time}} 至 {{i.departure_time}} {{i.days}}晚/{{i.num}}间</div>
                  </div>
                </div>
                <div class='order-content' v-else @click="goDetail(i)">
                  <div v-for="(j, index) in i.goods_info" :key="index">
                    <img class='order-img' :src='j.img'/>
                    <div v-if="i.goods_info.length == 1">
                      <div>{{j.name}}</div>
                      <div class="sub" v-if="j.goods_subheading">{{j.goods_subheading}}</div>
                    </div>
                  </div>
                </div>
                <div class='order-statistics'>
                  <div class='statistics-right'>
                    <div>共{{i.totalNum}}件商品</div>
                    <div class='statistics-price'>
                      <span v-if="i.status == 12">到店实付</span>
                      <span v-if="i.status != 12">实付金额</span>
                      ：<span class='price-font'>৳{{i.total_cost ? i.total_cost : i.price}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-no" v-if="orderList.length == 0">No orders</div>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a :href="'tel:' + [tel]">
                <img src="@/assets/icon-tel.png" alt="">
                <span>Hotel customer phone</span>
              </a>
            </li>
            <li v-if="isVerify == 200">
              <a href="weixin://">
                <img src="@/assets/icon-code.png" alt="">
                <span>scan code consumption</span>
              </a>
            </li>
            <li>
              <router-link to="/Retrieve">
                <img src="@/assets/icon-lock.png" alt="">
                <span>Retrieve password</span>
              </router-link>
            </li>
            <li v-if="userInfo.issale == '0' && userInfo.isclient == '1'">
              <router-link to="/InvitedMembers">
                <img src="@/assets/icon-lock.png" alt="">
                <span>Invite company members</span>
              </router-link>
            </li>
            <li v-if="userInfo.issale == '1'">
              <router-link to="/Achievement">
                <img src="@/assets/icon-lock.png" alt="">
                <span>Performance data</span>
              </router-link>
            </li>
            <li @click="logout">
              <img src="@/assets/icon-out.png" alt="">
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer name="Member"></Footer>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Toast, PullRefresh } from 'vant';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';
import { formatDate, getStorage, removeStorage } from '@/utils/util';

@Component({
  components: {
    Header,
    Footer,
    [PullRefresh.name]: PullRefresh
  }
})
export default class Member extends Vue {
  orderList: any[] = [];
  loading:boolean = false;
  isVerify:number = 0;
  userInfo:object = {}
  tel:any = getStorage('hotel').tel

  onRefresh() {
    this.getUser()
    this.getOrder()
    Toast.success('Refresh Success')
  }
  async getUser() {
    try {
      const { data } = await services.api.getUser()
      const ret = await services.api.Write_off(data.uniacid)
      this.userInfo = data
      if (ret.data.code == 200) {
        this.isVerify = 200
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  async getOrder() {
    try {
      const { uniacid, id } = getStorage('user')
      const { data } = await services.api.MyOrder(uniacid, id)
      this.orderList = data.map((item:any) => {
        // 大于下单时间半个小时，则取消订单
        if (item.status == '1') {
          if (Date.now() - item.create_time * 1000 > (60 * 30 * 1000)) {
            item.status = '3'
            try {
              (async () => {
                // await services.api.CancelOrder(item.flag, item.id)
              })()
            } catch(e) {
              Toast.fail(e.message)
            }
          }
        }
        let totalNum:any = 0;
        if (item.goods_info) {
          for (const i of item.goods_info) {
            totalNum += Number.parseInt(i.number, 10)
          }
        } else {
          totalNum = item.num;
        }
        return {
          ...item,
          totalNum,
          arrival_time: formatDate(item.arrival_time * 1000),
          departure_time: formatDate(item.departure_time * 1000)
        }
      })
    } catch(e) {
      Toast(e.message)
    } finally {
      this.loading = false
    }
  }
  logout() {
    removeStorage('user')
    this.$router.push('/Login')
  }
  goDetail(item:any) {
    if (item.flag == 0) {
      this.$router.push(`/HotelOrder?id=${item.id}&flag=${item.flag}`)
    } else if (item.flag == 1) {
      this.$router.push(`/MarketOrder?id=${item.id}&flag=${item.flag}`)
    } else {
      this.$router.push(`/ServiceOrder?id=${item.id}&flag=${item.flag}`)
    }
  }
  created() {
    this.getUser()
    this.getOrder()
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    background: #ff8234;
    margin: 0 0 1.16rem;
    padding: 1rem 0 0
  }
  .main{
    min-height: 8.68rem;
    background: #f2f2f2;
    border-bottom: .5rem solid #f2f2f2;
  }
  .user{
    overflow: hidden;
    margin: .2rem .3rem .6rem .5rem;
    .left{
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      .avater{
        width: 1.2rem;
        height: 1.2rem;
        display: table-cell;
        background: #fff;
        border-radius: 50%;
        box-sizing: border-box;
        border: .04rem solid #fff;
      }
      .name{
        color: #fff;
        padding: 0 0 0 .4rem;
        p{
          font-size: .36rem;
          margin: 0 0 .1rem
        }
      }
    }
    .tags{
      width: 4.7rem;
      overflow: hidden;
      .item{
        max-width: 2.9rem;
        max-height: .44rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 .1rem 0 0;
        display: inline-block;
        padding: .06rem .2rem;
        border-radius: .5rem;
        font-size: .24rem;
        text-align: center;
        background-color: #ce5621;
        &:last-child{
          border: none
        }
        img{
          width: .3rem;
          margin: 0 .06rem 0 0;
          vertical-align: middle
        }
        span{
          vertical-align: middle
        }
      }
    }
    .right{
      float: right;
      margin: .22rem 0 0;
      img{
        width: .32rem;
      }
    }
  }
  .order{
    top: -.2rem;
    position: relative;
    background: #fff;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    &>.head{
      height: .95rem;
      overflow: hidden;
      line-height: .95rem;
      padding: 0 .25rem 0 .45rem;
      border-bottom: .01rem dashed #e1e1e1;
      .title{
        float: left;
        color: #333;
        font-size: .3rem;
        font-weight: bold;
      }
      .more{
        float: right;
        font-size: .24rem;
        color: #929292;
        span{
          vertical-align: middle;
        }
        img{
          width: .24rem;
          margin: 0 0 0 .05rem;
          vertical-align: middle;
        }
      }
    }
    .content{
      overflow: hidden;
      .order-no{
        color: #666;
        text-align: center;
        padding: .8rem 0;
      }
    }
    .item{
      .order-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .2rem;
        .order-title{
          display: flex;
          align-items: center;
          font-size: .28rem;
          font-weight: bold;
          img{
            width: .32rem;
            margin: 0 .14rem 0 0;
            border-radius: .5rem;
            vertical-align: middle
          }
          span{
            vertical-align: middle
          }
        }
        .order-status{
          font-size: .28rem;
          color: #666;
        }
      }
      .order-content{
        display: flex;
        padding: .28rem;
        overflow: hidden;
        align-items: center;
        font-size: .28rem;
        overflow-x: auto;
        background-color: #fafafa;
        -webkit-overflow-scrolling: touch;
        .order-content .sub{
          font-size: .26rem;
          color: #666;
        }
        .order-img{
          width: 1.26rem;
          min-width: 1.26rem;
          margin: 0 .36rem 0 0; 
        }
      }
      .order-statistics{
        display: flex;
        justify-content: flex-end;
        padding: .2rem;
        font-size: .3rem;
        color: #666;
        .statistics-right{
          display: flex;
          justify-content: space-around;
        }
        .statistics-price{
          margin: 0 0 0.1rem;
        }
        .price-font{
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
  .menu{
    li{
      height: .98rem;
      padding: 0 .4rem;
      margin: 0 0 .2rem;
      font-size: .32rem;
      background: #fff;
      line-height: .98rem;
      a{
        color: #333;
        display: block;
      }
      img{
        width: .32rem;
        margin: 0 .3rem 0 0;
        vertical-align: middle;
      }
    }
  }
</style>