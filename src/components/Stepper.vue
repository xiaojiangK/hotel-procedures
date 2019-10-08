<template>
  <div class="stepper">
    <div class="minus btn" @click="minus">-</div>
    <input class="num" type="text" readonly :value="getNum" />
    <div class="add btn" @click="add">+</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class Stepper extends Vue {
  @Prop() getNum!:number;
  currentNum:number = 1;

  /* 点击减号 */
  @Emit('change')
  minus() {
    if (this.currentNum > 1) {
      this.currentNum --
    }
    return this.currentNum
  }
  /* 点击加号 */
  @Emit('change')
  add() {
    this.currentNum ++
    return this.currentNum
  }
}
</script>
<style lang="scss" scoped>
  .stepper{
    display: flex;
    width: 2.05rem;
    height: .6rem;
    border: .01rem solid #e1e1e1;
    border-radius: .08rem;
    .btn{
      color: #999;
      flex: 0 0 .6rem;
      line-height: .6rem;
      text-align: center;
    }
    .add{
      border-left: .01rem solid #e1e1e1;
    }
    .minus{
      border-right: .01rem solid #e1e1e1;
    }
    .num{
      width: .8rem;
      outline: none;
      border: none;
      color: #666;
      height: .55rem;
      text-align: center;
      line-height: .55rem;
    }
    .normal{
      color: black;
    }
    .disabled{
      color: #ccc;
    }
  }
</style>