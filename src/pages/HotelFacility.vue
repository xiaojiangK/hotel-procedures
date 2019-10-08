<template>
  <div class="wrap">
    <Header title="HotelFacility"></Header>
    <div class="main">
      <CustomModule :list="list"></CustomModule>
    </div>
  </div>
</template>

<script lang="ts">
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
export default class HotelFacility extends Vue {
  list:any[] = [
    {
      goods_is_open: 1,
      goods_img: 'https://pbwci.qun.hk/FktB6V99Le5amfvl8wVrIr5LEPpT',
      goods_name: 'Swimming pool in nanhai',
      goods_subheading: 'Free trial for deluxe double room and above',
      price: '68.00'
    },
    {
      goods_is_open: 1,
      goods_img: 'https://pbwci.qun.hk/FktB6V99Le5amfvl8wVrIr5LEPpT',
      goods_name: 'Swimming pool in nanhai',
      goods_subheading: 'Free trial for deluxe double room and above',
      price: '68.00'
    }
  ]
  created() {}
}
</script>
<style lang="scss" scoped>

</style>