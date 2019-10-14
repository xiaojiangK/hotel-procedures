<template>
  <div class="wrap">
    <Header title="Breakfast"></Header>
    <div class="main">
      <CustomModule :data="list"></CustomModule>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import Header from '@/components/Header.vue';
import CustomModule from '@/components/CustomModule.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    CustomModule
  }
})
export default class Breakfast extends Vue {
  list:any[] = []

  async getList() {
    try {
      let hotel:any = [];
      if (sessionStorage.getItem('hotel')) {
        hotel = JSON.parse((sessionStorage.getItem('hotel') as string))
      }
      // const res = await services.api.breakfast(hotel.id)
      const res = {
        code: 200,
        data: [
          {
            goods_addtime: '1560238498',
            goods_attribute: '3',
            goods_classify: '0',
            goods_details: '&lt;ol class=&quot; list-paddingleft-2&quot; style=&quot;list-style-type: decimal;&quot;&gt;&lt;li&gt;&lt;p&gt;此券仅用于圣美精品酒店早餐&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券不可兑换现金，不设找零&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;此券仅供一人使用，当天有效&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;本酒店拥有最终解释权。&lt;br/&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ol&gt;',
            goods_id: '116',
            goods_img: 'https://static.hotel.showboom.cn/images/4/2019/05/vRJTt131Wm5rk1ZtY3ZjYT3RtYn4Iy.png',
            goods_is_open: '1',
            goods_name: '早餐券',
            goods_sort: '1',
            goods_subheading: '早餐时间 ： 7：00-9：00',
            goods_unit: '张',
            goods_volume: '1',
            seller_id: '1',
            specifications: [
              {
                goods_id: '116',
                goods_price: '28.00',
                goods_specifications: '单人券',
                goods_stock: '10000',
                id: '538'
              }
            ]
          }
        ]
      }
      this.list = res.data
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  created() {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>

</style>