<template>
  <div class="wrap">
    <Header title="Submit orders"></Header>
    <div class="main">
      <div class="title">Goods info</div>
      <div class="order-item">
        <div class="order-meg">{{goods.goods_name}}</div>
        <div class="order-rg">
          <label class="order-sign">৳</label> <span class="order-nub">{{money}}</span>
        </div> 
      </div>
      <div class="order-item">
        <div class="order-meg">Number</div>
        <div class="order-rg">
          <Stepper @change='change' :getNum="code" id="stepper"></Stepper>
        </div> 
      </div>
      <div class="order-item">
        <div class="order-meg">money</div>
        <div class="order-rg">
          <label class="order-sign red-nub">৳</label> <span class="order-nub red-nub">{{totalPrice}}</span>
        </div> 
      </div>
      <div class="order-item">
        <div class="order-meg">phone</div>
        <div class="order-rg">
          <input type='text' maxlength="10" v-model="tel" class="order-nub order-tel" />
        </div> 
      </div>
      <div class="order-caption">Goods description：</div>
      <div class="tips" v-if="isBreakfast">
        · Please use it from 6:30 to 10:00 at breakfast time
      </div>
      <div class="tips" >
        · Use when found in "my order" and show to the staff
      </div>
      <div class="foot">
        <div class="foot-lf" >
          <div class="foot-text">payment amount：</div>
          <div class="strong"><label class="order-sign red-nub">৳</label> <span class="order-nub red-nub">{{totalPrice}}</span></div>
        </div> 
        <div class="btnSubmit" @click="pay">Buy now</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import Header from '@/components/Header.vue';
import Stepper from '@/components/Stepper.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Stepper
  }
})
export default class ServicePay extends Vue {
  code:number = 1;
  goods:any = {};
  money:number = 0;
  tel:string = '';
  totalPrice:number = 0;
  isBreakfast:boolean = false;

  change(e:any) {
    this.code = e
    this.countPrice()
  }
  pay() {
    // api
  }
  getGoods() {
    let goods:any = {};
    if (localStorage.getItem('goods')) {
      goods = JSON.parse((localStorage.getItem('goods') as string))
    }
    if (goods.goods_attribute == '3') {
      this.isBreakfast = true
    }
    this.goods = goods
    this.money = goods.price
    this.countPrice()
  }
  /**
   * 计算总价
   */
  countPrice() {
    this.totalPrice = this.code * this.money
  }
  created() {
    this.getGoods()
    this.tel = JSON.parse((localStorage.getItem('user') as any)).tel
  }
}
</script>
<style lang="scss" scoped>
  .main{
    .title {
      width: 90.67%;
      color: #333;
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: .48rem;
      font-weight: bold;
      margin: 0 auto;
    }
    .order-sign {
      color: #666;
      font-size: .24rem;
    }
    .order-nub {
      color: #666;
      font-size: .42rem;
    }
    .red-nub {
      color: #E93A3D
    }
    .order-item {
      width: 90.67%;
      color: #666;
      height: 1.3rem;
      line-height: 1.3rem;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: .01rem solid #E1E1E1;
      .order-meg {
        color: #666;
        font-size: .36rem;
      }
      .order-rg {
        #stepper{
          margin: .34rem 0 0
        }
      }
      .order-tel {
        width: 2.7rem;
        border: none;
        outline: none;
        background: transparent
      }
    }
    .order-caption {
      width: 90.67%;
      color: #333;
      font-size: .28rem;
      margin: .58rem auto .3rem;
    }
    .tips {
      color: #929292;
      font-size: .28rem;
      margin: 0 0 .14rem .4rem;
    }
    .foot {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 1.1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .strong {
        font-weight: bold;
        margin: 0 0 .06rem;
      }
      .foot-lf {
        width: 4.9rem;
        height: 1.1rem;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        border-top: .01rem solid #E1E1E1;
      }
      .foot-text {
        font-size: .28rem;
        color: #666;
        margin: 0 0 0 .3rem;
      }
      .btnSubmit {
        width: 2.6rem;
        height: 1.1rem;
        color: white;
        line-height: 1.1rem;
        background: #E93A3D;
        font-size: .36rem;
        text-align: center;
      }
    }
  }
</style>