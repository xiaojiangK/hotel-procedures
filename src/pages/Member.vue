<template>
  <div class="wrap">
    <Header white="true" isBack="0" title="Member center"></Header>
    <div class="user">
      <div class="left">
        <img src="@/assets/avatar.png" alt="">
        <div class="name">
          <p>user name</p>
          <span>Log in quickly using WeChat</span>
        </div>
      </div>
      <router-link to="/EditUser" class="right">
        <img src="@/assets/icon-edit.png" alt="">
      </router-link>
    </div>
    <div class="main">
      <div class="order">
        <div class="head">
          <div class="title">My order</div>
          <router-link to="/OrderList" class="more">
            <span>more</span>
            <img src="@/assets/icon-next.png" alt="">
          </router-link>
        </div>
        <div class="content">
          <div class="noLogin" v-if="goods.length == 0">Log in and view the order</div>
          <div class="goods" v-else v-for="(item, index) in goods" :key="index">
            <div class="head">
              <div class="title">
                <img src="@/assets/icon-super-sm.png" alt="">
                <span>Hotel store</span>
              </div>
              <div class="status">submitted</div>
            </div>
            <div class="content" :class="[item.img.length > 1 ? 'more':'']" @click="goDetail({id: 1, status: 0})">
              <div class="picture" v-for="(j, index) in item.img" :key="index">
                <img src="@/assets/good.png" alt="">
              </div>
              <div class="desc" v-if="item.img.length == 1">Extra xylitol sugar-free gum mixed flavor 70 pieces 98g single bottle</div>
            </div>
            <div class="foot"><span>Total amount paid for 1 piece of goods: </span>৳ 10.40</div>
          </div>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li>
            <img src="@/assets/icon-tel.png" alt="">
            <span>Hotel customer phone</span>
          </li>
          <li>
            <img src="@/assets/icon-code.png" alt="">
            <span>Sweep the code verification</span>
          </li>
          <li>
            <img src="@/assets/icon-lock.png" alt="">
            <span>Retrieve password</span>
          </li>
          <li>
            <img src="@/assets/icon-out.png" alt="">
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer name="Member"></Footer>
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
  goods: any[] = [{
    img: [1,2,3,4,5,6]
  }];

  goDetail(e:any) {
    if (e.status == 0) {
      this.$router.push(`/hotelOrder?id=${e.id}`)
    } else if (e.status == 1) {
      this.$router.push(`/marketOrder?id=${e.id}`)
    } else {
      this.$router.push(`/serviceOrder?id=${e.id}`)
    }
  }
  created() {}
}
</script>
<style lang="scss" scoped>
  .wrap{
    background: #ff8234;
  }
  .main{
    min-height: 8.68rem;
    background: #f2f2f2;
    border-bottom: .5rem solid #f2f2f2;
  }
  .user{
    overflow: hidden;
    margin: .2rem .3rem .6rem .5rem;
    .left{
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 1.2rem;
        height: 1.2rem;
        display: table-cell;
        background: #fff;
        border-radius: 50%;
        box-sizing: border-box;
        border: .04rem solid #fff;
      }
      .name{
        color: #fff;
        padding: 0 0 0 .4rem;
        p{
          font-size: .36rem;
          margin: 0 0 .1rem
        }
      }
    }
    .right{
      float: right;
      margin: .22rem 0 0;
      img{
        width: .32rem;
      }
    }
  }
  .order{
    top: -.2rem;
    position: relative;
    background: #fff;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    &>.head{
      height: .95rem;
      overflow: hidden;
      line-height: .95rem;
      padding: 0 .25rem 0 .45rem;
      border-bottom: .01rem dashed #e1e1e1;
      .title{
        float: left;
        font-size: .3rem;
        font-weight: bold;
      }
      .more{
        float: right;
        font-size: .24rem;
        color: #929292;
        span{
          vertical-align: middle;
        }
        img{
          width: .24rem;
          margin: 0 0 0 .05rem;
          vertical-align: middle;
        }
      }
    }
    .content{
      overflow: hidden;
      .noLogin{
        color: #666;
        text-align: center;
        padding: .8rem 0;
      }
    }
    .goods{
      .head{
        overflow: hidden;
        padding: .24rem .22rem .24rem .28rem;
        .title{
          float: left;
          color: #000
        }
        .status{
          float: right;
          color: #666;
          font-size: .26rem
        }
        img{
          width: .32rem;
          margin: 0 .15rem 0 0;
          vertical-align: middle
        }
        span{
          vertical-align: middle
        }
      }
      .content{
        overflow-x: auto;
        background: #FAFAFA;
        padding: .2rem .8rem .2rem .3rem;
        .picture{
          width: 1.48rem;
          min-width: 1.48rem;
          display: table-cell;
          vertical-align: middle;
          img{
            width: 100%;
          }
        }
        .desc{
          font-size: .26rem;
          display: table-cell;
          padding: 0 0 0 .25rem;
          vertical-align: middle;
        }
      }
      .more{
        .picture{
          padding: 0 .2rem 0 0;
        }
      }
      .foot{
        text-align: right;
        padding: .25rem .3rem;
        span{
          color: #666
        }
      }
    }
  }
  .menu{
    li{
      height: .98rem;
      padding: 0 .4rem;
      margin: 0 0 .2rem;
      font-size: .32rem;
      background: #fff;
      line-height: .98rem;
      img{
        width: .32rem;
        margin: 0 .3rem 0 0;
        vertical-align: middle;
      }
    }
  }
</style>