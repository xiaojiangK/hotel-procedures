<template>
  <div class="header">
    <div class="back" @click="goBack">
      <img src="@/assets/icon-back.png" v-if="white" alt="">
      <img src="@/assets/icon-back2.png" v-else alt="">
    </div>
    <div class="title" :style="'color: ' + [white ? '#fff' : '#000']">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop() title!:string;
  @Prop() white!:boolean;
  goBack() {
    this.$router.back()
  }
}
</script>
<style lang="scss" scoped>
  .header{
    top: 0;
    left: 50%;
    width: 100%;
    height: 1rem;
    z-index: 9999;
    position: fixed;
    padding: .3rem 0;
    max-width: 750px;
    box-sizing: border-box;
    transform: translateX(-50%);
    .back{
      left: .4rem;
      cursor: pointer;
      position: absolute;
      img{
        width: .36rem;
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