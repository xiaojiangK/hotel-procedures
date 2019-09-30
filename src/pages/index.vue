<template>
  <div class="wrap">
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
              <router-link to="/Store">
                <img src="@/assets/icon-super.png" alt="">
                <p>Hotel store</p>
              </router-link>
            </li>
            <li>
              <router-link to="/Facilities">
                <img src="@/assets/icon-facility.png" alt="">
                <p>Hotel facilities</p>
              </router-link>
            </li>
            <li>
              <router-link to="/Around">
                <img src="@/assets/icon-periphery.png" alt="">
                <p>Hotel around</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="module">
        <div class="item location">
          <div class="head">
            <div class="title">
              <img src="@/assets/icon-location.png" alt="">
              <span>Hotel location</span>
            </div>
          </div>
          <div class="content">
            <div class="map"></div>
            <div class="foot">
              <div class="left">
                <p>Hotel name</p>
                <span>Hotel location</span>
              </div>
              <div class="right">
                <a href="tel:13800138000">
                  <img src="@/assets/icon-call.png" alt="">
                </a>
                <img src="@/assets/icon-navigation.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="item facilities">
          <div class="head">
            <div class="title">
              <img src="@/assets/icon-facility-sm.png" alt="">
              <span>Hotel facilities</span>
              <router-link to="/Facilities">
                <img src="@/assets/icon-next.png" class="next" alt="">
              </router-link>
            </div>
          </div>
          <div class="content">
            <div class="picture">
              <img src="@/assets/banner.png" alt="">
            </div>
            <div class="foot">
              <div class="left">
                <p>Swimming pool in nanhai</p>
                <span>Free trial for deluxe double room and above</span>
              </div>
              <div class="right">
                <div class="price">$68</div>
                <router-link to="/Facilities" class="buy">Buy</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="item goods">
          <div class="head">
            <div class="title">
              <img src="@/assets/icon-super-sm.png" alt="">
              <span>Hotel store</span>
              <router-link to="/Store">
                <img src="@/assets/icon-next.png" class="next" alt="">
              </router-link>
            </div>
          </div>
          <div class="content">
            <ul>
              <li>
                <router-link to="/Store">
                  <div class="img">
                    <img src="@/assets/banner.png" alt="">
                  </div>
                  <div class="info">
                    <div class="title">Extra xylitol sugar-free gum mixed flavor 70 pieces 98g single bottle</div>
                    <div class="price">
                      <div class="left">$10.40</div>
                      <div class="right">
                        <img src="@/assets/icon-shop.png" alt="">
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/Store">
                  <div class="img">
                    <img src="@/assets/banner.png" alt="">
                  </div>
                  <div class="info">
                    <div class="title">Extra xylitol sugar-free gum mixed flavor 70 pieces 98g single bottle</div>
                    <div class="price">
                      <div class="left">$10.40</div>
                      <div class="right">
                        <img src="@/assets/icon-shop.png" alt="">
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="head">
            <div class="title">
              <img src="@/assets/icon-periphery-sm.png" alt="">
              <span>Hotel around</span>
            </div>
          </div>
          <div class="content">
            <div class="picture">
              <img src="@/assets/banner.png" alt="">
            </div>
            <div class="foot">
              <div class="left">
                <p>Liuxiang food city baiqi family</p>
                <span>Hotel around</span>
              </div>
              <div class="right">
                <a href="tel:13800138000">
                  <img src="@/assets/icon-call.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">Wonderful trip, starting with hotel life...</div>
    </div>
    <Footer name="Index"></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Swipe, SwipeItem } from 'vant';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { Component, Vue } from 'vue-property-decorator';

Vue.use(Swipe, SwipeItem)

@Component({
  components: {
    Header,
    Footer,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  }
})
export default class Index extends Vue {
  created() {}
}
</script>
<style lang="scss" scoped>
  .main{
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
        padding: .3rem 0 .35rem;
        img{
          width: .3rem;
          vertical-align: middle
        }
        span{
          font-size: .4rem;
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
            width: .95rem;
            margin: 0 0 .12rem;
          }
          p{
            color: #666;
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
            width: .45rem;
            vertical-align: middle;
          }
          .next{
            width: .3rem;
            float: right;
          }
          span{
            font-weight: bold;
            font-size: .3rem;
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
            font-size: .3rem;
            margin: 0 0 .15rem;
          }
          span{
            color: #666;
          }
        }
        .right{
          width: 20%;
          float: right;
          margin: .12rem 0 0;
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
          width: 72%
        }
        .right{
          width: 28%
        }
      }
    }
  }
</style>