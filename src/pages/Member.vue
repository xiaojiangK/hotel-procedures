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
          <div class="noLogin">Log in and view the order</div>
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
  created() {}
}
</script>
<style lang="scss" scoped>
  .wrap{
    background: #ff8234;
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
          span{
            font-size: .28rem
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
    .main{
      height: 9.18rem;
      background: #f2f2f2;
      .order{
        top: -.2rem;
        position: relative;
        background: #fff;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        .head{
          height: .95rem;
          overflow: hidden;
          line-height: .95rem;
          padding: 0 .25rem 0 .45rem;
          border-bottom: .01rem solid #e1e1e1;
          .title{
            float: left;
            font-weight: bold;
          }
          .more{
            float: right;
            color: #929292;
            span{
              vertical-align: middle;
            }
            img{
              width: .3rem;
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
            padding: .7rem 0;
          }
        }
      }
      .menu{
        li{
          height: .98rem;
          padding: 0 .4rem;
          margin: 0 0 .2rem;
          background: #fff;
          line-height: .98rem;
          img{
            width: .32rem;
            margin: 0 .3rem 0 0;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>