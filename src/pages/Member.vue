<template>
  <div class="wrap">
    <Header white="true" title="Member center"></Header>
    会员中心
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import services from '@/services';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Member extends Vue {
  created() {}
}
</script>
<style lang="scss" scoped>

</style>