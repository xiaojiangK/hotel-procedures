<template>
  <div class="wrap">
    <Header title="HotelStore"></Header>
    <div class="main" ref="wrap">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item, index) in classify" :key="index" :title="item.name" :info="item.info ? item.info : ''" @click="change(item)" />
      </van-sidebar>
      <div class="goods">
        <div class="title">{{currentName}}</div>
        <div ref="ul">
          <Goods :goods="goods" :isStepper="1" @show-goods="showGoods" @calculation="calculation"></Goods>
        </div>
      </div>
      <div class="footer">
        <template v-if="totalCount > 0">
          <div class="shop" @click="showShopcar">
            <div class="icon">{{totalCount}}</div>
            <img src="@/assets/icon-shop2.png" alt="">
          </div>
          <div class="tip">
            <p>৳{{totalPrice}}</p>
            <span>Order online and deliver to room</span>
          </div>
          <div class="btn" @click="goPay">Place Order</div>
        </template>
        <template v-else>
          <div class="shop">
            <img src="@/assets/icon-shop.png" alt="">
          </div>
          <div class="tip">
            <span>Order online and deliver to room</span>
          </div>
          <div class="btn no" @click="goPay">Not yet added</div>
        </template>
      </div>

      <!-- 商品详情 -->
      <div class="preview" v-if="isshowGoods">
        <div class="bg-black" @click="closeGoods"></div>
        <div class="good-content">
          <div class="img">
            <img :src="currentGoods.goods_img" mode="aspectFill"/>
          </div>
          <div class="name">{{ currentGoods.goods_name }}</div>
          <div class="goods-footer">
            <div class="price">৳{{ currentGoods.price }}</div>
            <div>
              <div v-if="currentGoods.num < 1" @click="calculation({type: 'add', item: currentGoods})" class="join-car">Add cart</div>
              <div v-else class="stepper">
                <div class="minus btn" @click="calculation({type: 'minus', item: currentGoods})">-</div>
                <div class="num">{{ currentGoods.num }}</div>
                <div class="add btn selected" @click="calculation({type: 'add', item: currentGoods})">+</div>
              </div>
            </div>

          </div>
        </div>
        <div class="close" @click="closeGoods">✖</div>
      </div>

      <!-- 购物车详情 -->
      <div class="shopcar-black" v-if="isShowShopcar && totalCount > 0">
        <div class="mask" @click="closeShopcar"></div>
        <div class="shopcar-dialog">
          <div class="shopcar-title">
            <div>Current purchase</div>
            <div @click="clearShopcar">
              <img src="@/assets/icon-remove.png" />
              empty cart
            </div>
          </div>
          <div class="shopcar-list">
            <div class="item" v-for="(item, index) in shopcarList" :key="index">
              <div>{{ item.goods_name}}</div>
              <div>{{ item.price }}</div>
              <div class="stepper">
                <div class="minus btn" @click="calculation({type: 'minus', item: currentGoods})">-</div>
                <div class="num">{{ item.num }}</div>
                <div class="add btn selected" @click="calculation({type: 'add', item: currentGoods})">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { getStorage } from '@/utils/util';
import Goods from '@/components/Goods.vue';
import Header from '@/components/Header.vue';
import { Toast, Sidebar, SidebarItem } from 'vant';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Goods,
    Header,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  }
})
export default class HotelStore extends Vue {
  activeKey:number = 0;
  classify:any[] = [];
  classID:string = '';
  goods:any[] = [];
  page:number = 122;
  currentName:string = 'All'
  currentGoods:object = {};
  isshowGoods:boolean = false;
  shopcarList:any[] = [];
  totalPrice:any = 0;
  totalCount:number = 0;
  isShowShopcar:boolean = false;

  // 分类切换
  change(item:any) {
    // api
    if (item.id != this.classID) {
      this.goods = []
      this.classID = item.id
      this.currentName = item.name
      this.getGoods(this.page = 1)
    }
  }
  // 获取商品
  async getGoods(page = 1) {
    try {
      const { id } = getStorage('hotel')
      const { data } = await services.api.Goods(id, this.classID)
      const newData = data.map((item:any) => {
        const price = Number.parseFloat(item.specifications[0].goods_price);
        return {
          ...item,
          num: 0,
          price: Number.isInteger(price) ? Number.parseInt(price.toString(), 10) : price.toFixed(2)
        }
      })
      if (newData.length == 0) {
        Toast('No more data')
        return
      }
      this.goods = [
        ...this.goods,
        ...newData
      ]
      this.loadingShop()
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  // 获取分类
  async getClass() {
    try {
      const { data } = await services.api.Classify()
      const classify = data.map((item:any) => {
        return {
          ...item,
          info: 0
        }
      })
      this.classify = [{
        id: '',
        name: 'All'
      }, ...classify]
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  // 关闭商品详情
  closeGoods() {
    this.isshowGoods = false
  }
  // 显示购物车
  showShopcar() {
    this.isShowShopcar = true
  }
  // 关闭购物车
  closeShopcar() {
    this.isShowShopcar = false
  }
  // 清除购物车
  clearShopcar() {
    this.goods = this.goods.map(item => {
      return {
        ...item,
        num: 0
      }
    })
    this.classify = this.classify.map(item => {
      return {
        ...item,
        info: 0
      }
    })
    this.updateShop()
    this.isShowShopcar = false
    sessionStorage.removeItem('shopcarList')
  }
  // 更新购物车
  updateShop() {
    let totalCount = 0
    let totalPrice = 0
    this.shopcarList = this.goods.filter(item => {
      if (item.num && item.num > 0) {
        totalCount += item.num
        totalPrice += item.price * item.num
        return item
      }
    })
    this.totalCount = totalCount
    this.totalPrice = totalPrice.toFixed(2)
  }
  // 加载购物车
  loadingShop() {
    let goods:any = [];
    if (sessionStorage.getItem('shopcarList')) {
      goods = JSON.parse((sessionStorage.getItem('shopcarList') as string))
    }
    this.goods = this.goods.map(item => {
      goods.map((iten:any) => {
        if (item.goods_id == iten.goods_id) {
          item.num = iten.num
        }
      })
      return item
    })
    this.classify = this.classify.map(item => {
      item.info = 0
      goods.map((iten:any) => {
        if (item.id == iten.cid) {
          item.info += iten.num
        }
      })
      return item
    })
    this.updateShop()
  }
  // 点击加减
  calculation(param:any) {
    this.goods = this.goods.map(item => {
      if (item.goods_id == param.item.goods_id) {
        if (param.type == 'add') {
          item.num ++
          Toast.success('goods add success')
        } else {
          if (item.num > 0) {
            item.num --
          }
        }
      }
      return item
    })
    this.classify = this.classify.map(item => {
      if (param.item.cid == item.id) {
        if (param.type == 'add') {
          item.info += 1
        } else {
          if (item.info > 0) {
            item.info -= 1
          }
        }
      }
      return item
    })
    this.updateShop()
    sessionStorage.setItem('shopcarList', JSON.stringify(this.shopcarList))
  }
  goPay() {
    if(this.totalCount <= 0) {
      Toast.fail('No merchandise selected')
    } else {
      this.$router.push('/marketPay')
    }
  }
  // 查看商品详情
  showGoods(goods:object) {
    this.isshowGoods = true
    this.currentGoods = goods
  }
  handleScroll(e:any) {
    const refs = (this.$refs as any)
    const client = refs.wrap.offsetHeight
    const current = refs.ul.offsetHeight
    const scrollTop = e.target.scrollTop
    if (scrollTop >= current - client) {
      this.getGoods(this.page++)
      // api
    }
  }
  created() {
    this.getClass()
    this.getGoods()
    window.addEventListener('scroll', this.handleScroll, true)
  }
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
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
  .stepper{
    display: flex;
    width: 1.5rem;
    height: .6rem;
    justify-content: flex-end;
    border-radius: .08rem;
    .btn{
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      width: .46rem;
      height: .46rem;
      line-height: .46rem;
      text-align: center;
      border-radius: 50%;
      font-size: .5rem;
      color: #fff;
    }
    .add{
      border: .01rem solid #B9B9B9;
      background-color: #B9B9B9;
    }
    .add.selected{
      border: .01rem solid #E83A3D;
      background-color: #E83A3D;
    }
    .minus{
      line-height: .4rem;
      border: .01rem solid #B9B9B9;
      background-color: #fff;
      color: #B9B9B9;

    }
    .num{
      display: flex;
      width: .4rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-grow: 1;
      height: .5rem;
      font-size: .3rem;
      color: #333;
    }
  }
  /* 购物车弹层 */
  .shopcar-black{
    display: flex;
    align-items: center;
    justify-content: center;
    .mask{
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color:rgba(0,0,0,0.4);
    }
    .shopcar-dialog{
      left: 0;
      width: 100%;
      z-index: 99;
      bottom: 1rem;
      position: fixed;
      background: #fff;
    }
    .shopcar-title{
      display: flex;
      color: #666;
      height: .74rem;
      padding: 0 .24rem;
      font-size: .28rem;
      align-items: center;
      background: #F4F4F4;
      justify-content: space-between;
    }
    .shopcar-title>div{
      display: flex;
      align-items: center;
    }
    .shopcar-title img{
      width: .29rem;
      height: .29rem;
      margin-right: .08rem;
    }
    .shopcar-list{
      .item{
        display: flex;
        color: #666;
        height: 1.18rem;
        padding: 0 .24rem;
        font-size: .32rem;
        align-items: center;
        border-bottom: .01rem solid #E0E0E0;
        justify-content: space-between;
        &>div{
          width: 45%
        }
        &>div:nth-of-type(2){
          width: 20%;
        }
        &>div.stepper{
          width: 1.5rem;
        }
      }
    }
  }
  .goods{
    float: left;
    max-height: 100%;
    overflow-y: auto;
    width: calc(100% - 85px);
    .title{
      padding: .2rem .32rem .46rem;
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
      height: 1rem;
      width: 3.7rem;
      margin: 0 0 0 .12rem;
      p{
        height: .4rem;
        color: #fff;
        margin: .1rem 0;
        font-size: .36rem;
        &+span{
          line-height: .3rem;
        }
      }
      span{
        color: #999;
        display: block;
        font-size: .22rem;
        line-height: 1rem;
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
  .preview{
    .bg-black{
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: $fixedIndex;
      background-color:rgba(0,0,0,0.4); 
    }
    .good-content{
      top: 50%;
      left: 50%;
      width: 6.50rem;
      height: 8.2rem;
      position: fixed;
      border-radius: .1rem;
      background-color: #fff;
      overflow: hidden;
      z-index: $fixedIndex + 1;
      transform: translate3d(-3.25rem, -5rem, 0);
    }
    .img{
      height: 6rem;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name{
      height: 1rem;
      font-size: .32rem;
      text-indent: .28rem;
      line-height: 1rem;
    }
    .goods-footer{
      display: flex;
      width: 100%;
      height: 1.2rem;
      justify-content: space-between;
      align-items: center;
      background-color: #fafafa;
    }
    .price{
      font-size: .48rem;
      font-weight: bold;
      color:#E83A3D;
      text-indent: .24rem;
    }
    .join-car{
      width: 1.8rem;
      height: .6rem;
      border-radius: .6rem;
      margin: 0 .38rem 0 0;
      font-size: .28rem;
      color: #fff;
      line-height: .6rem;
      text-align: center;
      background-color: #E83A3D;
    }
    .goods-footer .stepper{
      margin: 0 .4rem 0 0;
    }
    .close{
      top: 50%;
      left: 50%;
      width: .8rem;
      height: .8rem;
      position: fixed;
      border-radius: .8rem;
      font-size: .4rem;
      color: #fff;
      line-height: .8rem;
      text-align: center;
      z-index: $fixedIndex + 1;
      transform: translate3d(-.4rem, 3.8rem, 0);
      background-color: rgba(0,0,0,0.4)
    }
  }
</style>