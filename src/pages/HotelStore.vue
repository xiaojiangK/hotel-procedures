<template>
  <div class="wrap">
    <Header title="HotelStore"></Header>
    <div class="main">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item, index) in classify" :key="index" :title="item.name" :info="item.info" @click="change" />
      </van-sidebar>
      <div class="goods">
        <div class="title">Snacks</div>
        <ul>
          <li v-for="(item, index) in goods" :key="index">
            <div class="picture">
              <img :src="item.goods_img" alt="">
            </div>
            <div class="desc">
              <div class="name">{{item.goods_name}}</div>
              <div class="bom">
                <div class="price">৳{{item.price}}</div>
                <div class="add">
                  <img src="@/assets/icon-add.png" alt="">
                </div>
                <!-- <Stepper @change="goodsChange" :getNum="currentNum"></Stepper> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <div class="shop">
          <div class="icon">1</div>
          <img src="@/assets/icon-shop.png" alt="">
        </div>
        <div class="tip">
          <p>৳30</p>
          <span>Online order sent to the room, understand what you need</span>
        </div>
        <div class="btn no">Not yet added</div>
        <!-- <div class="btn">Place Order</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Sidebar, SidebarItem } from 'vant';
import Header from '@/components/Header.vue';
import Stepper from '@/components/Stepper.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Stepper,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  }
})
export default class HotelStore extends Vue {
  currentNum:number = 1;
  activeKey:number = 0;
  classify:any[] = [
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Snacks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Fruits',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    },
    {
      id: '42',
      info: '',
      seller_id: '1',
      uniacid: '4',
      sort: '1',
      name: 'Drinks',
      status: '1',
      addtime: '1566546656'
    }
  ]
  goods:any[] = [
    {
      goods_img: 'https://pbwci.qun.hk/FktB6V99Le5amfvl8wVrIr5LEPpT',
      goods_name: 'Furong King',
      price: '30'
    },
    {
      goods_img: 'https://pbwci.qun.hk/FktB6V99Le5amfvl8wVrIr5LEPpT',
      goods_name: 'Furong King',
      price: '30'
    },
    {
      goods_img: 'https://pbwci.qun.hk/FktB6V99Le5amfvl8wVrIr5LEPpT',
      goods_name: 'Furong King',
      price: '30'
    }
  ]

  change(e:any) {
    // api
    console.log(e);
  }
  goodsChange(e:any) {
    this.currentNum = e;
  }
  created() {}
}
</script>
<style lang="scss" scoped>
  .wrap, .main, .van-sidebar{
    height: 100%;
  }
  .van-sidebar{
    float: left;
    max-height: 100%;
    overflow-y: auto;
    background: #fafafa;
  }
  .goods{
    float: left;
    width: calc(100% - 85px);
    .title{
      padding: .2rem .14rem .46rem;
    }
    ul{
      padding: 0 0 0 .32rem;
    }
    li{
      margin: 0 0 .3rem;
      padding: 0 0 .3rem;
      border-bottom: .01rem solid #E0E0E0;
      .picture{
        display: table-cell;
        padding: 0 .16rem 0 0;
        vertical-align: middle;
        img{
          width: 1.32rem;
        }
      }
      .desc{
        width: 100%;
        display: table-cell;
        vertical-align: middle;
        .name{
          font-size: .32rem;
          margin: 0 0 .46rem
        }
        .bom{
          width: 100%;
          overflow: hidden;
          .price{
            float: left;
            color: #E83A3D;
            font-size: .36rem;
          }
          .add{
            float: right;
            width: .5rem;
            height: .5rem;
            padding: .12rem;
            text-align: center;
            border-radius: 50%;
            margin: 0 .16rem 0 0;
            box-sizing: border-box;
            background: rgba(0, 0, 0, .4);
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
  .footer{
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    position: fixed;
    background: #333;
    z-index: $modelIndex;
    .shop{
      top: -.28rem;
      float: left;
      width: 1.1rem;
      height: 1.1rem;
      display: flex;
      position: relative;
      border-radius: 50%;
      background: #fff;
      margin: 0 0 0 .3rem;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 .24rem 0 rgba(51, 51, 51, 0.24);
      img{
        width: .5rem
      }
      .icon{
        top: 0;
        right: 0;
        z-index: 99;
        width: .32rem;
        height: .32rem;
        color: #fff;
        font-size: .24rem;
        background: #FF3B30;
        position: absolute;
        text-align: center;
        line-height: .32rem;
        border-radius: 50%;
      }
    }
    .tip{
      float: left;
      width: 3.7rem;
      margin: 0 0 0 .1rem;
      p{
        height: .55rem;
        color: #fff;
        font-size: .48rem;
        margin: 0 0 .14rem
      }
      span{
        color: #999;
        font-size: .22rem
      }
    }
    .btn{
      float: right;
      width: 2.2rem;
      height: 1rem;
      color: #fff;
      font-size: .32rem;
      line-height: 1rem;
      text-align: center;
      background: #E83A3D;
      &.no{
        color: #999;
        background: none;
      }
    }
  }
</style>