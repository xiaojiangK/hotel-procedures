<template>
  <ul :class="[isCar ? 'car' : '']">
    <li v-for="(item, index) in goods" :key="index">
      <div class="picture" @click="showGoods(item)">
        <img :src="item.goods_img" alt="">
      </div>
      <div class="desc">
        <div class="name" @click="showGoods(item)">{{item.goods_name}}</div>
        <div class="bom">
          <div class="price">৳{{item.price}}</div>
          <div class="stepper" v-if="isStepper">
            <div class="minus btn" v-if="item.num > 0" @click="calculation('minus', item)">-</div>
            <div class="num" v-if="item.num > 0">{{ item.num }}</div>
            <div :class="['add', 'btn', item.num > 0 ? 'selected' : '']" @click="calculation('add', item)">+</div>
          </div>
          <div class="number" v-if="currentNum">× {{ item.num }}</div>
        </div>
      </div>
      <div v-if="isStepper && isCar" @click="deleteGoods(item.goods_id)" class="delete">
        <img src="@/assets/icon-delete.png" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class Goods extends Vue {
  @Prop() goods!:object;
  @Prop() isCar!:number;
  @Prop() currentNum!:number;
  @Prop() isStepper!:number;

  @Emit()
  showGoods(item:any) {
    return item
  }
  @Emit()
  calculation(type:string, item:any) {
    return {
      type, item
    }
  }
  @Emit()
  deleteGoods(id:string) {
    return id
  }
}
</script>
<style lang="scss" scoped>
  ul{
    padding: 0 0 0 .32rem;
    &.car{
      padding: 0;
      li{
        margin: 0 0 .36rem;
        padding: 0 0 .36rem;
        &:last-child{
          margin: 0;
          padding: 0;
          border: none
        }
      }
    }
    .stepper{
      display: flex;
      width: 1.5rem;
      height: .6rem;
      justify-content: flex-end;
      border-radius: .08rem;
      .btn{
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        width: .46rem;
        height: .46rem;
        line-height: .46rem;
        text-align: center;
        border-radius: 50%;
        font-size: .5rem;
        color: #fff;
      }
      .add{
        border: .01rem solid #B9B9B9;
        background-color: #B9B9B9;
      }
      .add.selected{
        border: .01rem solid #E83A3D;
        background-color: #E83A3D;
      }
      .minus{
        line-height: .4rem;
        border: .01rem solid #B9B9B9;
        background-color: #fff;
        color: #B9B9B9;

      }
      .num{
        display: flex;
        width: .4rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-grow: 1;
        height: .5rem;
        font-size: .3rem;
        color: #333;
      }
    }
    li{
      position: relative;
      margin: 0 0 .3rem;
      padding: 0 0 .3rem;
      border-bottom: .01rem solid #E0E0E0;
      .picture{
        display: table-cell;
        padding: 0 .16rem 0 0;
        vertical-align: middle;
        img{
          width: 1.32rem;
        }
      }
      .desc{
        width: 100%;
        display: table-cell;
        padding: 0 .24rem 0 0;
        vertical-align: middle;
        .name{
          font-size: .32rem;
          padding: 0 0 .46rem
        }
        .bom{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .price{
            color: #E83A3D;
            font-size: .36rem;
          }
          .number{
            color: #666;
            font-size: .32rem;
          }
        }
      }
      .delete{
        top: 0;
        right: .1rem;
        position: absolute;
        img{
          width: .46rem
        }
      }
    }
  }
</style>