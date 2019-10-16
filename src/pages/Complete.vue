<template>
  <div class="wrap">
    <Header title="Feedback"></Header>
    <div class="main">
      <template v-if="type!=10001">
        <Complete :param="msg"></Complete>
      </template>

      <div class="complete" v-if="type==10001">
        <img src="@/assets/complete.png"/>
        <div class="status">The order has been submitted</div>
        <div class="confirm">We will confirm the order with you as soon as possible</div>
        <div class="confirm">Please refer to the WeChat service notification results</div>
        <router-link to="/OrderList" class="btn">View order</router-link>
      </div>

      <div class="complete-foot" v-if="type==10001">
        <div class="confirm">If you need to confirm an order, please call the front desk</div>
        <a :href="'tel:' + [tel]" class="hotel-tel">
          <img src="@/assets/icon-blue-tel.png"/>
          <div>front desk phone</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getStorage } from '@/utils/util';
import Header from '@/components/Header.vue';
import Complete from '@/components/Complete.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Complete
  }
})
export default class CompletePage extends Vue {
  type:string = '';
  tel:string = getStorage('hotel').tel;
  msg:any = {
    msgTitle: '',
    link: '',
    msgContent: ''
  }

  created() {
    const opt = this.$route.query
    if (opt.type) {
      if (opt.type == '1') {
        this.msg = {
          msgTitle: 'Cancel success',
          link: '/pages/orderList/orderList',
          msgContent: ''
        }
      } else if (opt.type == '2') {
        this.msg = {
          msgTitle: 'This voucher has been used',
          link: `/pages/orderList/orderList`,
          msgContent: 'Welcome to buy again'
        }
      } else if (opt.type == '10001') {
        this.type = opt.type
        this.msg = {
          msgTitle: 'The order has been submitted',
          link: `/pages/orderList/orderList`,
          msgContent: 'We will confirm the order with you as soon as possible, and it will be valid after confirmation. Please refer to WeChat "service notification result"'
        }
      }
    } else {
      this.msg = {
        msgTitle: 'Place order success',
        link: `/pages/orderList/orderList`,
        msgContent: 'The hotel will confirm the order with you as soon as possible'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .complete{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28% 0 0;
    img {
      width: 2.6rem
    }
    .status{
      margin: .36rem 0;
      font-size: .46rem;
    }
    .btn{
      color: #fff;
      width: 2.9rem;
      height: 1.1rem;
      margin: .8rem 0 0;
      border-radius: .1rem; 
      font-size: .36rem;
      text-align: center;
      line-height: 1.1rem;
      background-color: #E93A3D;
    }
  }
  .confirm{
    width: 70%;
    color: #666;
    font-size: .3rem;
    text-align: center;
  }
  .complete-foot{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    .hotel-tel{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 1rem;
      margin: .3rem 0 0;
      font-size: .36rem;
      color: #4288FF;
      border-top: .02rem solid #f1f1f1;
    }
    img{
      width: .32rem;
      margin: 0 .16rem 0 0;
    }
  }
</style>