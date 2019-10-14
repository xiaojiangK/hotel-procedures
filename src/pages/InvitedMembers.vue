<template>
  <div class="wrap">
    <Header title="Invite members"></Header>
    <div class="main">
      <div class="topText">
        <div class="text-1">Invite colleagues and friends to become company members</div>
        <div class="text-2">Enjoy company exclusive price</div>
      </div>
      <div class="qrcode">
        <img :src="'data:image/jpg;base64,' + [url]" @click="preview" />
        <div class="title">Can<span>Click to enlarge</span>Share with colleagues and friends</div>
      </div>
      <div class="tip">WeChat scanning code to open small program, complete the authorization can become a member of the company</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import { ImagePreview } from 'vant';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class InvitedMembers extends Vue {
  url:string = '';

  preview() {
    ImagePreview([this.url]);
  }
  async created() {
    try {
      // const res = await services.api.inviteMember('user_id')
      const res:any = {
        data: {
          code: 200,
          data: {
            result: 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAD5UlEQVRIS+1WTWxUVRg95747QNN25k2Cgjv/QIwLpSaywGj9QbR2ZhqilZUubDBRS9REo0QiqfEvGtQ2kiC60BVWrX2vhZCmkUpgQ1LqxhjByMIFGAnzpi22MPfdz7yZaWmnr2ViuvRmNnPf+c6538/9vkvUurz6NQ4S+0BIKMUXkLv0Vy2mvCaoF3V6ZapTqN4g4EZ4AfIU+765XOhBO6aW4lhcoK/heq0THQJ0ElhbIhGxAKOfqgidJ9BjdPEAWib/jhOaESAON6zWJnGbFdlExS0UeRBgYtaIMkIrr5aIyY8A3n+VUIoi/FGUDCnhSaOLv6Fl8kIJqr30BCirAOqYE1gAR0D50GSCkbnf9YDbDGEk+ChQ9mj+EgPhNLWflnkfRIogT1rikBV7ENnC2SXz5Kdu0lTbIXgcIveAc7xGdOyKgEC+DCH7oAu/oAWXr5n8OMBhrIRJ3eGAzxN8NoLMChDycjEbfPKfiKuMEr77koAf/y9QDsyh5CZtnb0m5Ha0Xfwz2lq+EPU1rne0c5zgdQI5G04HG9COK8sj0Fu/1lmVOEHwZkTtSdAe5oK+5fHgKBr0pDsC4d0RobV40bblP5spppo9cPxUB8EzJhv8NFuJ+5HQN6QHATxS2iPeM5n8rrmVWpOAM+hmaRG5HFqw02bzn0ckjud+RfLpUk8S+TrMBc9U351qgX8A1AHSZbLBWzNg3Z/cKso5ONOiAemOeguI1yqYIXMu34rnUKwW0J7bBXI3gClq3x0F2ATKsMkEW+aBv2vcoFc4PsB18/Ypo6YhaMYDmIy7+dp3hwE+BMgpas99G+SbUSUY2tuRGT8zz2gwldaW35YNomEjf4TTxc1ov3Q+tq0MJNdpUb8CdAC8Q/zg3qgVTkddUET8MBfkFhgehXYm0p8C8mRownuxbeL0Yj3L8VyPZBYiRWOxvjRwHN/tJthZOiG5I8xcPBBL4NWvWWoWKz+9QwH7K572hNlgZ3mieasbHZoxgrcAcgWUjMkUhhY7ZWzc+5NboVSUrxWlMIq+C7kLE1dnsududMBjJBoEmILFU2FbfqAWEac/nYHCNwTqRDAZQu5DLhgrX5O5azD1sGOVHwGjpFtytx3Nf4A9iEbnwrUHSjWlX1eQriip0cFCZbNoLQzPgBe+KgbcZkfYRyBdAZ0g7M5itnBqrkLCTzUJVDeAzeWYIx9StqFqdsc/W7zkrZqqF+DGCqkAMmwFR6L/CngMLJVtxV7GjNh25MZ/r3Zz8XdRuee8IsAuAsm4CAkwTuBdcy6/N+5GL8xBHMtgKq0EHUr4BIA7yxD+bGm/t8QXaC3klyqEfwH73sbhH9YKGQAAAABJRU5ErkJggg=='
          }
        }
      }
      if (res.data.code == 200) {
        this.url = res.data.data.result
      } else {
        Toast.fail(res.data.msg)
      }
    } catch(e) {
      Toast.fail(e.message)
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    padding: .7rem 0 0;
    min-height: 11.9rem;
    box-sizing: border-box;
    background: url('../assets/Invite-bg.png') center center no-repeat;
    background-size: cover;
    .topText{
      margin: 0 0 .44rem;
      .text-1{
        color: #fff;
        font-size: .4rem;
        margin: 0 0 .3rem;
        font-weight: bold;
      }
      .text-2{
        color: #F9CD00;
        font-size: .65rem;
        font-weight: bold;
        text-shadow: 0 .06rem .04rem rgba(191,53,0,0.6);
      }
    }
    .qrcode{
      width: 5.62rem;
      padding: .5rem 0;
      background: #fff;
      margin: 0 auto .44rem;
      border-radius: .2rem;
      img{
        width: 3rem;
        margin: 0 0 .3rem;
      }
      .title{
        color: #000;
        font-size: .28rem;
        font-weight: bold;
        span{
          color: #EC4A13;
          font-size: .36rem;
          margin: 0 .04rem;
        }
      }
    }
  .tip{
      color: #fff;
      font-size: .24rem;
    }
  }
</style>