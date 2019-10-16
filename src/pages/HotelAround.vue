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
import { getStorage } from '@/utils/util';
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
      const { data } = await services.api.Periphery()
      this.list = data.map((item:any) => {
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