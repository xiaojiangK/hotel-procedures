<template>
  <div class="wrap">
    <Header title="HotelAround"></Header>
    <div class="main">
      <CustomModule :data="list" around="true"></CustomModule>
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
export default class HotelAround extends Vue {
  list:any[] = []

  async getList() {
    try {
      let hotel:any = [];
      if (sessionStorage.getItem('hotel')) {
        hotel = JSON.parse((sessionStorage.getItem('hotel') as string))
      }
      // const res = await services.api.periphery(hotel.id)
      const res = {
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
      this.list = res.data.map(item => {
        return {
          tel: item.phone,
          goods_img: item.img,
          goods_name: item.name,
          goods_subheading: item.subheading
        }
      })
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