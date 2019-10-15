<template>
  <div class="wrap">
    <Header title="Performance data"></Header>
    <div class="main">
      <div class="block">
        <div class="title">
          <img src="@/assets/data-bg-right.png" />
          <span>Today</span>
          <img src="@/assets/data-bg-left.png" />
        </div>
        <div class="list">
          <div class="item total">
            <template v-if="sale.today[0]">
              <div class="num">{{sale.today[0]}}</div>
              <div class="text">All orders</div>
            </template>
          </div>
          <div class="item money">
            <template v-if="sale.today[1]">
              <div class="num">{{sale.today[1]}}</div>
              <div class="text">Effective order</div>
            </template>
          </div>
          <div class="item gold">
            <template v-if="sale.today[2]">
              <div class="num">{{sale.today[2]}}</div>
              <div class="text">payment amount</div>
            </template>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title">
          <img src="@/assets/data-bg-right.png" />
          <span>This month</span>
          <img src="@/assets/data-bg-left.png" />
        </div>
        <div class="list">
          <div class="item total">
            <template v-if="sale.month[0]">
              <div class="num">{{sale.month[0]}}</div>
              <div class="text">All orders</div>
            </template>
          </div>
          <div class="item money">
            <template v-if="sale.month[1]">
              <div class="num">{{sale.month[1]}}</div>
              <div class="text">Effective order</div>
            </template>
          </div>
          <div class="item gold">
            <template v-if="sale.month[2]">
              <div class="num">{{sale.month[2]}}</div>
              <div class="text">payment amount</div>
            </template>
          </div>
        </div>
      </div>
      <div class="block years">
        <div class="title">
          <img src="@/assets/data-bg-right.png" />
          <span>Company customers</span>
          <img src="@/assets/data-bg-left.png" />
        </div>
        <div class="list">
            <div class="item customer">
              <template v-if="sale.company[0]">
                <div class="num">{{sale.company[0]}}</div>
                <div class="text">Company customers</div>
              </template>
            </div>
            <div class="item members">
              <template v-if="sale.company[1]">
                <div class="num">{{sale.company[1]}}</div>
                <div class="text">company members</div>
              </template>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import { getStorage } from '@/utils/util';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class Achievement extends Vue {
  sale:any = {}

  async created() {
    try {
      const user = getStorage('user')
      const { data } = await services.api.Performance(user.id)
      if (data.code == 200) {
          this.sale = data.data
      } else {
        Toast.fail(data.msg)
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    padding: 1.4rem .2rem .2rem;
    background:linear-gradient(rgba(251,94,40,1) 0%,rgba(253,120,49,1) 99%);
  }
  .block{
    margin: 0 0 .2rem;
    background: #fff;
    border-radius: .12rem;
    padding: 0 .44rem .52rem;
    .title{
      display: flex;
      overflow: hidden;
      text-align: center;
      align-items: center;
      justify-content: center;
      padding: .43rem 0 .6rem;
      span{
        float: left;
        color: #333;
        font-size: .36rem;
        margin: 0 .2rem;
      }
      img{
        float: left;
        width: 1.55rem;
        height: .1rem;
      }
    }
    .list{
      overflow: hidden;
      .item{
        float: left;
        width: 33.333%;
        height: 1.6rem;
        position: relative;
        text-align: center;
        background-size: 1.6rem auto !important;
        &.total{
          background: url('../assets/total-icon.png') center center no-repeat
        }
        &.money{
          background: url('../assets/money-icon.png') center center no-repeat
        }
        &.gold{
          background: url('../assets/gold-icon.png') center center no-repeat
        }
        &.customer{
          background: url('../assets/customer-icon.png') center center no-repeat
        }
        &.members{
          background: url('../assets/members-icon.png') center center no-repeat
        }
        .num{
          color: #F87440;
          font-size: .5rem;
          font-weight: bold;
          margin: .1rem 0 .3rem;
        }
        .text{
          color: #333;
          font-size: .28rem;
        }
      }
    }
    &.years .item{
      width: 50%;
    }
  }
</style>