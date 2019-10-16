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
import services from '@/services';
import { getStorage } from '@/utils/util';
import { Toast, ImagePreview } from 'vant';
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
      const { id } = getStorage('user')
      const { data } = await services.api.InviteMember(id)
      if (data.code == 200) {
        this.url = data.data.result
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