<template>
  <div class="wrap index">
    <Header :isBack="0" :title="hotel.name"></Header>
    <div class="main">
      <div class="swiper">
        <van-swipe :autoplay="3000" :show-indicators="false">
          <van-swipe-item v-for="(item, index) in hotel.img" :key="index">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="caption">
          <span>{{hotel.prompt ? hotel.prompt : ''}}</span>
          <p>Welcome to {{hotel.name}}l</p>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <img src="@/assets/icon-title-l.png" alt="">
          <span>Hotel service</span>
          <img src="@/assets/icon-title-r.png" alt="">
        </div>
        <!-- wifi -->
        <div class="wifi-box">
          <img class="wifi-lf" src="@/assets/wifi-blue.png" />
          <div class="wifi-nav" hover-class="none" @click="wifiNext">
            <div class="wifi-title" >Welcome use Hotel WIFI</div>
            <div class="btnToDetail" >WiFi Password,Click here</div>
          </div>
          <button class="wifi-btn" @click="wifiNext">Connect</button>
        </div>
        <!-- end wifi -->
        <div class="list">
          <ul>
            <li>
              <router-link to="/Breakfast">
                <img src="@/assets/icon-volume.png" alt="">
                <p>Breakfast</p>
              </router-link>
            </li>
            <li>
              <router-link to="/HotelStore">
                <img src="@/assets/icon-super.png" alt="">
                <p>Hotel store</p>
              </router-link>
            </li>
            <li>
              <router-link to="/HotelFacility">
                <img src="@/assets/icon-facility.png" alt="">
                <p>Hotel facility</p>
              </router-link>
            </li>
            <li>
              <router-link to="/HotelAround">
                <img src="@/assets/icon-periphery.png" alt="">
                <p>Hotel around</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="module">
        <HotelLocation :data="hotel"></HotelLocation>
        <HotelFacility :data="volume"></HotelFacility>
        <HotelStore :data="goods"></HotelStore>
        <HotelAround :data="around"></HotelAround>
      </div>
      <div class="footer">Wonderful trip, starting with hotel life...</div>
    </div>
    <Footer name="Index"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Swipe, SwipeItem, Toast } from 'vant';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import HotelStore from '@/components/HotelStore.vue';
import HotelAround from '@/components/HotelAround.vue';
import HotelLocation from '@/components/HotelLocation.vue';
import HotelFacility from '@/components/HotelFacility.vue';
import { Component, Vue } from 'vue-property-decorator';

Vue.use(Swipe, SwipeItem)

@Component({
  components: {
    Header,
    Footer,
    HotelStore,
    HotelAround,
    HotelFacility,
    HotelLocation,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Index extends Vue {
  volume:object = {}
  around:object = {}
  hotel:object = {}
  goods:any[] = []

  wifiNext() {
    this.$router.push('/WifiList')
  }
  async getHotel() {
    try {
      // cons res = await services.api.hotelDetail()
      const res = {
        code: 200,
        data: {
          address: '山西省太原市迎泽区柳巷南路86号',
          app_id: null,
          app_logo: 'http://img.heimilink.com/?img_k=1A1341595C41bc97dd',
          app_qrcode: 'http://img.heimilink.com/?img_k=B0134159aDA2ac9bED',
          balance: '0.000',
          bareaName: null,
          bd_id: '0',
          boardroom: '0',
          bq_logo: '',
          breakfast: '0',
          breakfast_ticket: '1',
          channel_id: '4',
          city: '太原市',
          closeStatus: null,
          coordinates: '37.864933,112.567528',
          dd_open: '0',
          decorationDate: null,
          district: '迎泽区',
          ewm_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Z2JdtsrWWRbtdJI9rmtr2jE1e252P2.jpg',
          facilities: null,
          facility: '1',
          floorNum: '',
          gym: '0',
          handle: '',
          id: '1',
          introduction: '',
          is_use: '1',
          link_name: '测试',
          link_tel: '13049090842',
          ll_num: '17334',
          modifyDomain: '',
          name: '圣美精品酒店',
          openDate: '2016',
          open_time: '2016-05-01 00:00:00',
          other: '',
          owner: '1',
          park: '0',
          periphery: '1',
          policy: '',
          prompt: '',
          province: '山西省',
          publish_time: null,
          receipt_status: '2',
          remark: '',
          roomNum: '',
          room_booking: '1',
          rule: '不可退订',
          score: null,
          scort: '2',
          service: [],
          sfz_img1: '',
          sfz_img2: '',
          sq_time: '0',
          star: '暂无星级(经济型)',
          state: '2',
          store: '1',
          support: '',
          tel: '0351-7777520',
          template_id: null,
          theme_type: '普通',
          time: '1558173360',
          uniacid: '4',
          unionPay: '0',
          user_id: '0',
          vip_merchant: null,
          wake: '0',
          water: '0',
          webDomain: '',
          wifi: '1',
          wx_mchid: '',
          wx_open: '0',
          xb_status: '1',
          ye_open: '0.00',
          yy_img: '',
          zd_money: '99.00',
          img: ['https://static.hotel.showboom.cn/images/4/2019/06/Z2JdtsrWWRbtdJI9rmtr2jE1e252P2.jpg'],
          wifiList: [
            {
              authentication: '1',
              wifi_name: 'smjp8501',
              wifi_pwd: 'smjp8501'
            },
            {
              authentication: '2',
              wifi_name: 'smjp8502',
              wifi_pwd: 'smjp8502'
            }
          ]
        }
      }
      const item = res.data
      this.hotel = {
        ...item,
        coordinates: item.coordinates.split(',')
      }
      localStorage.setItem('hotel', JSON.stringify(this.hotel))
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  async getVolume() {
    try {
      // const res = await services.api.volume()
      const res:any = {
        code: 200,
        data: [
          {
            goods_addtime: '1560238934',
            goods_attribute: '2',
            goods_classify: '0',
            goods_details: '&lt;p&gt;&lt;span style=&quot;font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, arial, Tahoma, SimSun, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);&quot;&gt;酒店会议室场地出租，面积约150㎡，可同时容纳30-120人进行会议培训。岛屿式 剧院式等均可提供&nbsp; &nbsp; &nbsp;场地费用3000元/天&nbsp;&nbsp;场地费用包含投影、音响、纸、笔、白板、饮用水等，详细请电话咨询0351-7777520&lt;/span&gt;&lt;/p&gt;',
            goods_id: '70',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/Qo33uZ4kQ4ogrL6rhdKjhkv0Zdh2O5.jpg',
            goods_is_open: '1',
            goods_name: '圣美150㎡会议室',
            goods_sort: '1',
            goods_subheading: '可容纳30-120人',
            goods_unit: '间',
            goods_volume: '2',
            seller_id: '1',
            specifications: [
              {
                goods_id: '70',
                goods_price: '3000.00',
                goods_specifications: '100人左',
                goods_stock: '1',
                id: '542'
              }
            ]
          }
        ]
      }
      this.volume = res.data[0]
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  async getGoods() {
    try {
      // const res = await services.api.goods()
      const res:any = {
        code: 200,
        data: [
          {
            cid: '42',
            cname: '水果',
            goods_addtime: '1569288703',
            goods_attribute: '1',
            goods_classify: '42',
            goods_details: '',
            goods_id: '125',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/06/JMRL7CQ6l56e268Z3u7olr8i626Re6.jpg',
            goods_is_open: '1',
            goods_name: '芙蓉王',
            goods_sort: '1',
            goods_subheading: '香烟',
            goods_unit: '盒',
            goods_volume: '0',
            seller_id: '1',
            specifications: [
              {
                goods_id: '125',
                goods_price: '30.00',
                goods_specifications: '20支',
                goods_stock: '100',
                id: '803'
              }
            ]
          },
          {
            cid: '42',
            cname: '水果',
            goods_addtime: '1569288703',
            goods_attribute: '1',
            goods_classify: '42',
            goods_details: '',
            goods_id: '125',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/L8z484cP0ohD0n4Arq404AaKKka4zO.jpg',
            goods_is_open: '1',
            goods_name: '红牛',
            goods_sort: '1',
            goods_subheading: '饮料',
            goods_unit: '瓶',
            goods_volume: '0',
            seller_id: '1',
            specifications: [
              {
                goods_id: '125',
                goods_price: '5.00',
                goods_specifications: '20瓶',
                goods_stock: '100',
                id: '802'
              }
            ]
          }
        ]
      }
      this.goods = res.data
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  async getAround() {
    try {
      // const res = await services.api.periphery()
      const res:any = {
        code: 200,
        data: [
          {
            add_time: '1559109504',
            coordinates: '37.858740,112.558280',
            id: '7',
            img: 'https://static.hotel.showboom.cn/images/4/2019/05/OBNY8B7l7lb4QNTb8TE2emC2p3bbss.jpg',
            name: '老太原菜馆(南宫店)',
            phone: '03514053388',
            seller_id: '1',
            site: '迎泽大街238号南宫东院科技大楼',
            sort: '1',
            state: '1',
            subheading: '迎泽大街238号南宫东院科技大楼',
            uniacid: '4'
          }
        ]
      }
      this.around = res.data[0]
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  created() {
    this.getVolume()
    this.getAround()
    this.getGoods()
    this.getHotel()
  }
}
</script>
<style lang="scss">
  .index{
    background: #EFEFEF;
    padding: 1rem 0 1.16rem;
    .swiper{
      height: 3.8rem;
      position: relative;
      img{
        width: 100%;
        height: 3.8rem;
      }
      .caption{
        left: 0;
        right: 0;
        bottom: 0;
        color: white;
        position: absolute;
        padding: .3rem .3rem .45rem;
        background: linear-gradient(0deg,rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
        p{
          margin: .1rem 0 0;
          font-size: .36rem;
        }
      }
    }
    .service{
      top: -.25rem;
      background: #fff;
      position: relative;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
      .title{
        text-align: center;
        padding: .3rem 0 .4rem;
        img{
          width: .3rem;
          vertical-align: middle
        }
        span{
          font-size: .36rem;
          margin: 0 .12rem;
          font-weight: bold;
          vertical-align: middle
        }
      }
      .list{
        overflow: hidden;
        padding: 0 0 .6rem;
        li{
          width: 25%;
          float: left;
          text-align: center;
          img{
            width: .84rem;
            margin: 0 0 .12rem;
          }
          p{
            color: #666;
            font-size: .26rem
          }
        }
      }
      /**wifi模块**/
      .wifi-box {
        width: 6.7rem;
        height: .98rem;
        background: #F0F9FE;
        border-radius: .08rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin: 0 auto .4rem auto;
        .wifi-lf {
          width: .48rem;
          margin: 0 0 0 .38rem;
        }
        .wifi-nav {
          width: 3.42rem;
          height: auto;
          margin: 0 0 0 .28rem;
        }
        .wifi-btn {
          width: 1.56rem;
          height: .48rem;
          outline: none;
          border: none;
          color: white;
          font-size: .24rem;
          line-height: .48rem;
          background:rgba(74,144,227,1);
          border-radius: .24rem;
        }
        .wifi-btn::after {
          border: none;
        }
        .wifi-title {
          font-size: .28rem;
          font-weight: bold;
          color: #494A4A;
        }
        .btnToDetail {
          font-size: .22rem;
          color: #4A90E3;
        }
      }
    }
    .footer{
      color: #c6c6c6;
      font-size: .3rem;
      text-align: center;
      padding: .05rem .25rem .25rem;
    }
  }
  .module{
    .item{
      margin: 0 0 .2rem;
      background: #fff;
      padding: 0 .3rem .4rem;
      .head{
        padding: .4rem 0;
        .title{
          img{
            width: .44rem;
            vertical-align: middle;
          }
          .next{
            width: .3rem;
            float: right;
          }
          span{
            color: #333;
            font-weight: bold;
            font-size: .36rem;
            margin: 0 0 0 .15rem;
            vertical-align: middle;
          }
        }
      }
      .picture{
        img{
          width: 100%;
          border-radius: .12rem;
        }
      }
      .foot{
        overflow: hidden;
        padding: .2rem 0 .3rem;
        .left{
          width: 80%;
          float: left;
          p{
            font-weight: bold;
            font-size: .36rem;
            margin: 0 0 .15rem;
          }
          span{
            color: #929292;
            font-size: .26rem;
          }
        }
        .right{
          width: 20%;
          float: right;
          margin: .08rem 0 0;
          .price{
            color: #ff6342;
            font-size: .36rem;
            text-align: right;
            margin: 0 0 .1rem;
          }
          .buy{
            width: 1.2rem;
            float: right;
            display: block;
            color: #ff6342;
            padding: .2rem 0;
            font-size: .32rem;
            text-align: center;
            border-radius: .12rem;
            background: #ffebe9;
          }
        }
        img{
          width: .6rem;
          margin: 0 0 0 .45rem;
        }
      }
    }
    .facility{
      .foot{
        .right{
          margin: 0;
        }
      }
    }
    .goods{
      li{
        margin: 0 0 .1rem;
        .img{
          width: 2.3rem;
          display: table-cell;
          vertical-align: middle;
          img{
            width: 100%;
          }
        }
        .info{
          width: 4.4rem;
          padding: 0 0 0 .2rem;
          display: table-cell;
          vertical-align: middle;
          .title{
            color: #333;
            font-size: .3rem;
            margin: 0 0 .3rem;
            line-height: .4rem;
          }
          .price{
            overflow: hidden;
            .left{
              float: left;
              color: #e93a3d;
              font-size: .3rem;
            }
            .right{
              float: right;
              img{
                width: .3rem;
              }
            }
          }
        }
      }
    }
    .location{
      .content{
        overflow: hidden;
        border-radius: .12rem;
        border: .01rem solid #e1e1e1;
      }
      .map{
        height: 1.65rem;
        background: #efefef;
      }
      .foot{
        padding: .2rem .4rem .3rem;
        img:first-child{
          margin: 0
        }
        .left{
          width: 71%;
          p{
            font-size: .28rem;
            margin: 0 0 .1rem
          }
          span{
            color: #666;
            font-size: .22rem;
          }
        }
        .right{
          width: 28%
        }
      }
    }
  }
</style>