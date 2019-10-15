<template>
  <div class="wrap">
    <Header title="Evaluation"></Header>
    <div class="main">
      <textarea class="text" placeholder="写出您真实的想法…" :maxlength="countLimit" v-model="content"></textarea>
      <div class="count">{{content.length}}/{{countLimit}}</div>
      <van-uploader
        :before-read="beforeRead"
        :after-read="afterRead"
        v-model="photoList"
        :max-count="4"
        multiple
      />
      <div class="anonymous" @click="anonymous">
        <template v-if="isAnonymous">
          <img class="icon-checkbox" src="@/assets/icon-checkbox-checked.png" /><span>匿名评价</span>
        </template>
        <template v-else>
          <img class="icon-checkbox" src="@/assets/icon-checkbox.png" /><span class="no">匿名评价</span>
        </template>
      </div>
    </div>
    <div class="btn">
      <span @click="cancel">取消</span>
      <span @click="submit">发布</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast, Uploader } from 'vant';
import services from '@/services';
import Header from '@/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    [Uploader.name]: Uploader
  }
})
export default class SubmitComment extends Vue {
  content:string = '';  // 内容
  countLimit:number = 100;  // 字数限制
  photoList:any[] = []; // 照片列表
  photo:any[] = [];   // 照片路径
  isAnonymous:boolean = false; // 是否匿名
  roomId:any = '';
  orderId:any = ''

  beforeRead(file:any) {
    if (file.type == 'image/jpeg' || file.type === 'image/png') {
      return true
    } else {
      Toast.fail('Please upload picture format file')
      return false
    }
  }
  async afterRead(file:any) {
    try {
      const res = await services.api.UploadFile(file.file)
      Toast.success('Upload success')
      this.photo.push(res.data)
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  cancel() {
    this.$dialog.confirm({
      title: 'prompt',
      message: 'After confirmation, the edited content will be emptied'
    }).then(async () => {
      this.$router.back()
    }).catch(() => {})
  }
  async submit() {
    if (!this.content || this.content.length < 5) {
      Toast.fail('Please enter 5~100 characters')
      return
    }
    Toast.loading('loading...')
    try {
      const data = {
        img: this.photo.join(','),
        order_id: this.orderId,
        room_id: this.roomId,
        content: this.content,
        user_id: !this.isAnonymous ? 'id' : ''
      }
      await services.api.SaveAssess(data)
      Toast.success('Release success')
      this.$router.back()
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  anonymous() {
    this.isAnonymous = !this.isAnonymous
  }
  created() {
    const quert = this.$route.query
    this.orderId = quert.orderId,
    this.roomId = quert.roomId
  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    .btn {
      display: flex;
      font-size: .36rem;
      line-height: .98rem;
      text-align: center;
    }
    .btn span:first-of-type {
      flex: 1;
      color: #333;
      background: #fff;
      border-top: .02rem solid #e0e0e0;
    }
    .btn span:last-of-type {
      flex: 2;
      color: #fff;
      background: #ff6342;
      border-top: .02rem solid #ff6342;
    }
  }
  .main {
    height: 100%;
    padding: .48rem .4rem 0;
    .text {
      width: 100%;
      border: none;
      height: 2.8rem;
      color: #333;
      font-size: .32rem;
      font-weight: 400;
      line-height: .4rem;
      &::-webkit-input-placeholder{ 
          color:#B5B5B5;
      }
      &:-o-placeholder{ 
          color:#B5B5B5;
      }
      &::-moz-placeholder{ 
          color:#B5B5B5;
      }
      &:-ms-input-placeholder{ 
          color:#B5B5B5;
      }
      &:input-placeholder{ 
          color:#B5B5B5;
      }
    }
    .count {
      color: #b5b5b5;
      font-size: .22rem;
      line-height: .22rem;
      margin: .18rem 0 .4rem;
    }
    .anonymous {
      margin: .66rem 0 0;
      font-size: .34rem;
      font-weight: 400;
      line-height: .4rem;
      .no{
        color: #999
      }
      .icon-checkbox {
        vertical-align: top;
        margin: 0 .2rem 0 0;
        width: .4rem;
      }
    }
  }
</style>