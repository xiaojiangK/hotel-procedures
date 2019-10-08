<template>
  <div class="wrap index">
    <Header :isBack="0" title="Hotel Name"></Header>
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
        <div class="caption">
          <span>hello</span>
          <p>Welcome to xx hotel</p>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <img src="@/assets/icon-title-l.png" alt="">
          <span>Hotel service</span>
          <img src="@/assets/icon-title-r.png" alt="">
        </div>
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
                <p>Hotel facilities</p>
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
        <HotelLocation></HotelLocation>
        <HotelFacility></HotelFacility>
        <HotelStore></HotelStore>
        <HotelAround></HotelAround>
      </div>
      <div class="footer">Wonderful trip, starting with hotel life...</div>
    </div>
    <Footer name="Index"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Swipe, SwipeItem } from 'vant';
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
  created() {}
}
</script>
<style lang="scss">
  .index{
    background: #EFEFEF;
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
    .facilities{
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
          width: 72%;
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