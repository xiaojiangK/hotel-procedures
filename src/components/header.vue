<template>
  <div class="header">
    <div class="back" @click="goBack">
      <img src="@/assets/icon-back.png" alt="">
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop() title!:string;
  goBack() {
    this.$router.back()
  }
}
</script>
<style lang="scss" scoped>
  .header{
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    z-index: 9999;
    position: fixed;
    padding: .3rem 0;
    box-sizing: border-box;
    .back{
      left: .4rem;
      cursor: pointer;
      position: absolute;
      img{
        width: .2rem;
        height: .35rem;
      }
    }
    .title{
      width: 100%;
      color: #fff;
      font-size: .36rem;
      text-align: center;
    }
  }
</style>