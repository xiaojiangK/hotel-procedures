<template>
  <div class="complete">
    <img src="@/assets/complete.png"/>
    <div class="complete-status">{{param.msgTitle}}</div>
    <div class="complete-confirm">{{param.msgContent}}</div>
    <router-link :to="param.link" class="complete-btn">查看订单</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Complete extends Vue {
  @Prop() param!:object;
}
</script>
<style lang="scss" scoped>
  .complete{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 28%;
    img{
      width: 2.6rem;
    }
    .complete-status{
      margin: .36rem 0;
      font-size: .46rem;
    }
    .complete-confirm{
      width: 70%;
      color: #666;
      font-size: .3rem;
      text-align: center;
    }
    .complete-btn{
      width: 2.9rem;
      height: 1.1rem;
      margin: .8rem 0 0;
      border-radius: .1rem; 
      font-size: .36rem;
      color: #fff;
      text-align: center;
      line-height: 1.1rem;
      background-color: #E93A3D;
    }
  }
</style>