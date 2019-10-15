<template>
  <div class="wrap">
    <Header white="true" isBack="0" title="Member center"></Header>
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <div class="user">
        <div class="left">
          <img :src="[userInfo.img ? userInfo.img : '@/assets/avatar.png']" class="avater" alt="">
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
              <a href="tel:13800138000">
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
import { Toast, PullRefresh } from 'vant';
import services from '@/services';
import { formatDate, removeStorage } from '@/utils/util';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

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
  userInfo:object = {
    add_member: '0',
    balance: '0.00',
    bind_tel_at: '2019-09-17 16:38:10',
    commission: '0.00',
    company_id: '1',
    created_at: '2019-07-13 10:09:33',
    discount: null,
    dj_money: '0.00',
    id: '4913',
    img: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
    join_time: '1562983773',
    level_id: '0',
    level_name: null,
    name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
    number: '',
    openid: 'oGEXb4ntomSDY3K8o8KoSSUsBE6M',
    sale_id: '1',
    score: '0',
    tel: '13288474512',
    type: '1',
    uniacid: '4',
    unionid: 'opzxIv67nO5k87E-ZwzNFWowOOb8',
    zs_name: '',
  }

  onRefresh() {
    this.getOrder()
    this.loading = false
    Toast.success('Refresh Success')
  }
  getOrder() {
    try {
      const list = [
        {
          id: '805',
          seller_id: '1',
          room_id: '289',
          user_id: '4913',
          coupons_id: null,
          order_no: '201908261135336712',
          seller_name: '圣美精品酒店2',
          seller_address: '山西省太原市迎泽区柳巷南路86号',
          coordinates: '37.864933,112.567528',
          arrival_time: '1566748800',
          departure_time: '1566835200',
          dd_time: '14:00',
          price: '1.00',
          num: '2',
          days: '1',
          goods_info: [{
            goods_addtime: '1569288703',
            goods_attribute: '1',
            goods_classify: '42',
            goods_details: '',
            goods_id: '125',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
            goods_is_open: '1',
            goods_name: '芙蓉王',
            goods_price: '3000',
            goods_sort: '1',
            goods_specifications: '20支',
            goods_stock: '100',
            goods_subheading: '香烟',
            goods_unit: '盒',
            goods_volume: '0',
            goodsorder_id: '771',
            id: '803',
            img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
            name: '芙蓉王',
            number: '2',
            price: '30.00',
            seller_id: '1',
            spec_id: '803',
            total_price: '60.00',
            type: '1',
            uniacid: '4'
          },{
            goods_addtime: '1569288703',
            goods_attribute: '1',
            goods_classify: '42',
            goods_details: '',
            goods_id: '125',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
            goods_is_open: '1',
            goods_name: '芙蓉王',
            goods_price: '3000',
            goods_sort: '1',
            goods_specifications: '20支',
            goods_stock: '100',
            goods_subheading: '香烟',
            goods_unit: '盒',
            goods_volume: '0',
            goodsorder_id: '771',
            id: '803',
            img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg?x-oss-process=image/resize,m_mfit,h_300,w_400',
            name: '芙蓉王',
            number: '2',
            price: '30.00',
            seller_id: '1',
            spec_id: '803',
            total_price: '60.00',
            type: '1',
            uniacid: '4'
          }],
          room_type: '标准大床房',
          room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg',
          bed_type: null,
          name: 'admin',
          tel: '13231231231',
          status: '1',
          out_trade_no: '14330091021566790533',
          dis_cost: '0.95',
          yj_cost: null,
          yhq_cost: null,
          yyzk_cost: null,
          total_cost: '0.95',
          is_delete: '0',
          time: '1566790533',
          uniacid: '4',
          ytyj_cost: null,
          hb_cost: null,
          hb_id: null,
          from_id: null,
          classify: '1',
          type: '0',
          code: null,
          jj_time: '0',
          voice: '1',
          qr_fromid: '',
          pay_time: '1566790533',
          sale_id: '0',
          company_id: '0',
          is_commission: '2',
          vip_coupon: '0.95',
          size: '1.8*2.0',
          breakfast: '1',
          windows: '1',
          create_time: '1576790533',
          flag: '1'
        }
      ]
      const orderList = list.map((item:any) => {
        // 大于下单时间半个小时，则取消订单
        if (item.status == '1') {
          if (Date.now() - item.create_time * 1000 > (60 * 30 * 1000)) {
            item.status = '3'
            try {
              // services.api.CancelOrder(item.flag, item.order_id)
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
      this.orderList = orderList
    } catch(e) {
      Toast(e.message)
    }
  }
  logout() {
    removeStorage('token')
    this.$router.push('/Login')
  }
  goDetail(item:any) {
    if (item.status == 0) {
      this.$router.push(`/HotelOrder?id=${item.id}&flag=${item.flag}`)
    } else if (item.status == 1) {
      this.$router.push(`/MarketOrder?id=${item.id}&flag=${item.flag}`)
    } else {
      this.$router.push(`/ServiceOrder?id=${item.id}&flag=${item.flag}`)
    }
  }
  created() {
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