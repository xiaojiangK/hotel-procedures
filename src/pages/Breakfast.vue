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
export default class Breakfast extends Vue {
  list:any[] = []

  async getList() {
    try {
      const hotel = getStorage('hotel')
      const { data } = await services.api.Breakfast(hotel.id)
      this.list = data
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