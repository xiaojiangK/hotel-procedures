<template>
  <div class="wrap">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <Header title="My Order"></Header>
      <div class="main" ref="main">
          <div v-if="!orderList.length" class='complete'>
            <img class='complete-img' src='@/assets/noInfo.png' />
            <div class='complete-confirm'>No order information</div>
          </div>
          <div v-else ref="wrap">
            <div class="order" v-for="(item, index) in orderList" :key="index">
              <OrderItem :item="item"></OrderItem>
            </div>
            <div class="no-order">no more，That's all...</div>
          </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { PullRefresh } from 'vant';
import services from '@/services';
import { formatDate } from '@/utils/util'
import Header from '@/components/Header.vue';
import OrderItem from '@/components/OrderItem.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    OrderItem,
    [PullRefresh.name]: PullRefresh
  }
})
export default class OrderList extends Vue {
  orderList:any[] = [];
  loading:boolean = false;

  onRefresh() {
    this.getOrder()
    this.loading = false
    this.$toast.success('Refresh Success')
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
          create_time: '1570705583',
          flag: '0'
        },
        {
          id: '806',
          seller_id: '1',
          room_id: '289',
          user_id: '4913',
          coupons_id: null,
          order_no: '201908261135336712',
          seller_name: '圣美精品酒店',
          seller_address: '山西省太原市迎泽区柳巷南路86号',
          coordinates: '37.864933,112.567528',
          arrival_time: '1566748800',
          departure_time: '1566835200',
          dd_time: '14:00',
          price: '1.00',
          num: '3',
          days: '1',
          room_type: '标准双床房',
          room_logo: 'https://static.hotel.showboom.cn/images/4/2019/06/Zw088xeJASJESbHcXw9E0AXXeC6xe3.jpg',
          bed_type: null,
          name: 'admin',
          tel: '13231231231',
          status: '3',
          out_trade_no: '14330091021566790533',
          dis_cost: '1.95',
          yj_cost: null,
          yhq_cost: null,
          yyzk_cost: null,
          total_cost: '1.95',
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
          create_time: '1566790533',
          flag: '0'
        },
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
          create_time: '1570704052',
          flag: '1'
        }
      ]
      const orderList = list.map(item => {
        // 大于下单时间半个小时，则取消订单
        if (item.status == '1') {
          if (Date.now() - (item.create_time as any) * 1000 > (60 * 30 * 1000)) {
            item.status = '3'
            try {
              // services.api.cancelOrder(item.flag, item.order_id)
            } catch(e) {
              this.$toast.fail(e.message)
            }
          }
        }
        let totalNum:any = 0;
        if ((item as any).goods_info) {
          for (const i of (item as any).goods_info) {
            totalNum += Number.parseInt(i.number, 10)
          }
        } else {
          totalNum = item.num;
        }
        return {
          ...item,
          totalNum,
          arrival_time: formatDate((item.arrival_time as any) * 1000),
          departure_time: formatDate((item.departure_time as any) * 1000)
        }
      })
      this.orderList = orderList
    } catch(e) {
      this.$toast(e.message)
    }
  }
  handleScroll(e:any) {
    const client = (this.$refs.main as any).offsetHeight
    const current = (this.$refs.wrap as any).offsetHeight
    const scrollTop = e.target.scrollTop
    if (scrollTop >= current - client) {
      console.log(scrollTop)
      // api
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
  .complete{
    width: 100%;
    height: 100%;
    display: flex;
    background: #f2f2f2;
    flex-direction: column;
    align-items: center;
    .complete-img{
      width: 2.6rem;
      margin: 30% 0 0
    }
    .complete-status{
      margin: .36rem 0;
      font-size: .46rem
    }
    .complete-confirm{
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