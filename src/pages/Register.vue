<template>
  <div class="wrap">
    <Header white="true" title="Sign in"></Header>
    <div class="login-form">
      <ul>
        <li>
          <img src="@/assets/icon-phone.png" class="phone" alt="">
          <input type="number" v-model="username" autocomplete="off" placeholder="Phone number" />
        </li>
        <li>
          <img src="@/assets/icon-email.png" alt="">
          <input type="text" v-model="code" autocomplete="off" placeholder="Verification code" />
          <span class="right" @click="getCode">Get code</span>
        </li>
        <li>
          <img src="@/assets/icon-pass.png" alt="">
          <input :type="[canSee ? 'password' : 'text']" v-model="password" autocomplete="off" placeholder="Password" />
          <img src="@/assets/icon-closeeye.png" v-show="canSee" class="right" @click="viewPass" alt="">
          <img src="@/assets/icon-eye.png" v-show="!canSee" class="right" @click="viewPass" alt="">
        </li>
        <li>
          <button @click="register" class="formBtn">Sign in</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import { setStorage } from '@/utils/util';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class Register extends Vue {
  code:string = '';
  username:string = '';
  password:string = '';
  canSee:boolean = true;

  async getCode() {
    const username = this.username
    if(!username) {
      Toast.fail('Account no empty')
      return
    }
    try {
      await services.api.GetCode(username)
      Toast.success('Send success')
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  viewPass() {
    this.canSee = !this.canSee
  }
  async register() {
    const code = this.code
    const username = this.username
    const password = this.password
    if(!username) {
      Toast.fail('Phone is empty')
      return
    } else if (!code) {
      Toast.fail('Code is empty')
      return
    } else if (!password) {
      Toast.fail('Password is empty')
      return
    }
    try {
      const res = await services.api.Register({ code, username, password })
      Toast.success('Register success')
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
    .login-form{
      padding: 1rem .6rem;
      li {
        .right{
          right: 0;
          left: auto;
          color: #EE6E35;
          line-height: .6rem;
          position: absolute;
        }
      }
    }
  }
</style>