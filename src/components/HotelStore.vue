<template>
  <div class="item goods">
    <div class="head">
      <div class="title">
        <img src="@/assets/icon-super-sm.png" alt="">
        <span>Hotel store</span>
        <router-link to="/HotelStore">
          <img src="@/assets/icon-next.png" class="next" alt="">
        </router-link>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <router-link to="/HotelStore">
            <div class="img">
              <img src="@/assets/banner.png" alt="">
            </div>
            <div class="info">
              <div class="title">Extra xylitol sugar-free gum mixed flavor 70 pieces 98g single bottle</div>
              <div class="price">
                <div class="left">৳10.40</div>
                <div class="right">
                  <img src="@/assets/icon-buy.png" alt="">
                </div>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/HotelStore">
            <div class="img">
              <img src="@/assets/banner.png" alt="">
            </div>
            <div class="info">
              <div class="title">Extra xylitol sugar-free gum mixed flavor 70 pieces 98g single bottle</div>
              <div class="price">
                <div class="left">৳10.40</div>
                <div class="right">
                  <img src="@/assets/icon-buy.png" alt="">
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class HotelStore extends Vue {
  @Prop() item!:object;
}
</script>
<style lang="scss" scoped>

</style>