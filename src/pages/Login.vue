<template>
  <div class="wrap">
    <Header white="true" title="Log in"></Header>
    <div class="hotel">
      <img src="@/assets/logo.png" alt="">
      <p>Hotel name</p>
    </div>
    <div class="login-form">
      <ul>
        <li>
          <img src="@/assets/icon-user.png" alt="">
          <input type="text" v-model="username" autocomplete="off" placeholder="Account" />
        </li>
        <li>
          <img src="@/assets/icon-pass.png" alt="">
          <input type="password" v-model="password" autocomplete="off" placeholder="Password" />
        </li>
        <li>
          <button @click="login" class="formBtn">Log in</button>
          <div class="other">
            <router-link to="/Retrieve">Retrieve password ?</router-link>
            <span> | </span>
            <router-link to="/Register">sign up right away</router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="support">求新科技提供技术支持</div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import Header from '@/components/Header.vue'
import { setStorage, getStorage } from '@/utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class Login extends Vue {
  username:string = '';
  password:string = '';

  async login() {
    const username = this.username;
    const password = this.password;
    if(!username) {
      Toast.fail('Account is empty')
      return
    } else if (!password) {
      Toast.fail('Password is empty')
      return
    }
    try {
      const res = await services.api.Login({ username, password })
      Toast.success('Login success')
      setStorage('user', res.data)
      this.$router.push('/')
    } catch(e) {
      Toast.fail(e.message)
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    height: 13.34rem;
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
    .support{
      top: 2.2rem;
      width: 100%;
      color: #fff;
      text-align: center;
      position: relative;
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