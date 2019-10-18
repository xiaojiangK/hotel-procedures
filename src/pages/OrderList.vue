<template>
  <div class="wrap">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <Header title="My Order"></Header>
      <div class="main" ref="main">
          <div v-if="!orderList.length" class='complete'>
            <img class='img' src='@/assets/noInfo.png' />
            <div class='confirm'>No order information</div>
          </div>
          <div v-else ref="wrap">
            <div class="order" v-for="(item, index) in orderList" :key="index">
              <OrderItem :item="item" @update="update"></OrderItem>
            </div>
            <div class="no-order">no more，That's all...</div>
          </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import { Toast, PullRefresh } from 'vant';
import Header from '@/components/Header.vue';
import OrderItem from '@/components/OrderItem.vue';
import { formatDate, getStorage } from '@/utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    OrderItem,
    [PullRefresh.name]: PullRefresh
  }
})
export default class OrderList extends Vue {
  page:number = 1;
  orderList:any[] = [];
  loading:boolean = false;

  onRefresh() {
    this.getOrder(this.page = 1)
    Toast.success('Refresh Success')
  }
  async getOrder(page:number = 1) {
    try {
      const { uniacid, id } = getStorage('user')
      const { data } = await services.api.MyOrder(uniacid, id, page)
      this.orderList = data.map((item:any) => {
        // 大于下单时间半个小时，则取消订单
        if (item.status == '1') {
          if (Date.now() - item.create_time * 1000 > (60 * 30 * 1000)) {
            try {
              (async () => {
                item.status = '3'
                await services.api.CancelOrder(item.flag, item.id)
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
  update(item:any) {
    this.orderList = this.orderList.map(i => {
      if (i.id == item.id) {
        i.status = item.status
      }
      return i
    })
  }
  handleScroll(e:any) {
    const refs = (this.$refs as any)
    const client = refs.main.offsetHeight
    const current = refs.wrap.offsetHeight
    const scrollTop = e.target.scrollTop
    if (scrollTop >= current - client) {
      this.getOrder(this.page++)
      console.log(1)
    }
  }
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
  created() {
    this.getOrder()
    window.addEventListener('scroll', this.handleScroll, true)
  }
}
</script>
<style lang="scss" scoped>
  .wrap,.main{
    height: 100%
  }
  .van-pull-refresh{
    height:100%;
    &>div{
      height:100%
    }
  }
  .complete{
    width: 100%;
    height: 100%;
    display: flex;
    background: #f2f2f2;
    flex-direction: column;
    align-items: center;
    .img{
      width: 2.6rem;
      margin: 30% 0 0
    }
    .confirm{
      margin: .5rem 0 0;
      font-size: .3rem;
      color: #666
    }
  }
  .no-order{
    width: 100%;
    height: 1rem;
    color: #999;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
    background: #f2f2f2
  }
</style>