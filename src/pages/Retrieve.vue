<template>
  <div class="wrap">
    <Header white="true" title="Retrieve password"></Header>
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
          <input :type="[canSee ? 'password' : 'text']" v-model="password" autocomplete="off" placeholder="New password" />
          <img src="@/assets/icon-closeeye.png" v-show="canSee" class="right" @click="viewPass(0)" alt="">
          <img src="@/assets/icon-eye.png" v-show="!canSee" class="right" @click="viewPass(0)" alt="">
        </li>
        <li>
          <img src="@/assets/icon-pass.png" alt="">
          <input :type="[newCanSee ? 'password' : 'text']" v-model="newPassword" autocomplete="off" placeholder="Retype new password" />
          <img src="@/assets/icon-closeeye.png" v-show="newCanSee" class="right" @click="viewPass(1)" alt="">
          <img src="@/assets/icon-eye.png" v-show="!newCanSee" class="right" @click="viewPass(1)" alt="">
        </li>
        <li>
          <button @click="retrieve">Sign in</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import Header from '@/components/header.vue';
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
  newPassword:string = '';
  canSee:boolean = true;
  newCanSee:boolean = true;

  async getCode() {
    const username = this.username
    if(!username) {
      Toast.fail('Account no empty')
      return
    }
    try {
      await services.api.getCode(username)
      Toast.success('Send success')
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  viewPass(i:number) {
    if (i == 0) {
      this.canSee = !this.canSee
    } else {
      this.newCanSee = !this.newCanSee
    }
  }
  async retrieve() {
    const code = this.code
    const username = this.username
    const password = this.password
    const newPassword = this.newPassword
    if(!username) {
      Toast.fail('Phone no empty')
      return
    } else if (!code) {
      Toast.fail('Code no empty')
      return
    }  else if (!password) {
      Toast.fail('Password no empty')
      return
    }  else if (!newPassword) {
      Toast.fail('Password no empty')
      return
    } else if (newPassword != password) {
      Toast.fail('Inconsistent password')
      return
    }
    try {
      await services.api.retrieve({ code, username, password, newPassword })
      Toast.success('Retrieve success')
      this.$router.back()
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