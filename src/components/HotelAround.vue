<template>
  <div class="item">
    <div class="head">
      <router-link to="/HotelAround">
        <div class="title">
          <img src="@/assets/icon-periphery-sm.png" alt="">
          <span>Hotel around</span>
          <img src="@/assets/icon-next.png" class="next" alt="">
        </div>
      </router-link>
    </div>
    <div class="content">
      <div class="picture">
        <img :src="data.img" alt="">
      </div>
      <div class="foot">
        <div class="left">
          <p>{{data.name}}</p>
          <span>{{data.subheading}}</span>
        </div>
        <div class="right">
          <a :href="'tel:' + [data.phone]">
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
  @Prop() data!:object;
}
</script>
<style lang="scss" scoped>

</style>