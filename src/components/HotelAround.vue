<template>
  <div class="item">
    <div class="head">
      <div class="title">
        <img src="@/assets/icon-periphery-sm.png" alt="">
        <span>Hotel around</span>
      </div>
    </div>
    <div class="content">
      <div class="picture">
        <img src="@/assets/banner.png" alt="">
      </div>
      <div class="foot">
        <div class="left">
          <p>Liuxiang food city baiqi family</p>
          <span>Hotel around</span>
        </div>
        <div class="right">
          <a href="tel:13800138000">
            <img src="@/assets/icon-call.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelAround extends Vue {
  @Prop() item!:object;
}
</script>
<style lang="scss" scoped>

</style>