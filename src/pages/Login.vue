<template>
  <div class="wrap">
    <Header></Header>
    <div class="hotel">
      <img src="@/assets/logo.png" alt="">
      <p>Hotel name</p>
    </div>
    <div class="form">
      <ul>
        <li>
          <img src="@/assets/icon-user.png" alt="">
          <input type="text" v-model="username" placeholder="Account" />
        </li>
        <li>
          <img src="@/assets/icon-pass.png" alt="">
          <input type="text" v-model="password" placeholder="Password" />
        </li>
        <li>
          <button>Log in</button>
          <div class="other">
            <span>Retrieve password</span>
            <span> | </span>
            <span>sign up right away</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="support">求新科技提供技术支持</div>
  </div>
</template>

<script lang="ts">
import services from '../services';
import Header from '@/components/header.vue'
import { getStorage } from '../utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class Login extends Vue {
  username:string = '';
  password:string = '';

  created() {
    if (getStorage('Admin-Token')) {
      // this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    width: 100%;
    height: 100%;
    background: url('../assets/login-bg.png') top left no-repeat;
    background-size: cover;
    .hotel{
      text-align: center;
      padding: .35rem 0 .8rem;
      img{
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        margin: 0 auto .3rem;
      }
      p{
        color: #fff;
        font-size: .36rem;
        font-weight: bold;
      }
    }
    .form{
      padding: 0 .6rem;
      li{
        height: .6rem;
        position: relative;
        margin: 0 0 .55rem;
        img{
          left: 0;
          top: 50%;
          width: .38rem;
          position: absolute;
          transform: translateY(-50%);
        }
        input{
          width: 100%;
          outline: none;
          border: none;
          height: .6rem;
          color: #fff;
          background: none;
          padding: 0 0 0 .6rem;
          box-sizing: border-box;
          border-bottom: .01rem solid #fff;
        }
        input::-webkit-input-placeholder{ 
          color:#fff;
        }
        input:-o-placeholder{ 
          color:#fff;
        }
        input::-moz-placeholder{ 
          color:#fff;
        }
        input:-ms-input-placeholder{ 
          color:#fff;
        }
        input:input-placeholder{ 
          color:#fff;
        }
        button{
          width: 100%;
          outline: none;
          border: none;
          color: #fff;
          height: .98rem;
          cursor: pointer;
          font-size: .36rem;
          margin: 0 0 .3rem;
          text-align: center;
          line-height: .98rem;
          border-radius: .1rem;
          background: #EE6E35;
        }
        .other{
          color: #fff;
          text-align: center;
          span:nth-of-type(2){
            margin: 0 .2rem;
          }
        }
      }
    }
    .support{
      left: 0;
      width: 100%;
      bottom: .6rem;
      color: #fff;
      text-align: center;
      position: absolute;
      &:after, &:before{
        top: 50%;
        content: '';
        right: .6rem;
        width: 1.5rem;
        height: .02rem;
        position: absolute;
        background: #fff;
        display: inline-block;
        transform: translateY(-50%);
      }
      &:before{
        left: .6rem;
        right: auto;
      }
    }
  }
</style>