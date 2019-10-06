<template>
  <div class="wrap">
    <Header title="Change information"></Header>
    <div class="main">
      <div class="item">
        <div class="left">
          <img src="@/assets/avatar.png" alt="">
        </div>
        <div class="right" @click="edit">
          <img src="@/assets/icon-edit2.png" alt="">
        </div>
      </div>
      <div class="item user">
        <div class="left">User name:</div>
        <div class="right">
          <span v-show="!isEdit">User name</span>
          <input type="text" v-model="username" v-show="isEdit" placeholder="user name" />
        </div>
      </div>
      <div class="btn">
        <button class="formBtn" @click="save">Save</button>
      </div>
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
export default class EditUser extends Vue {
  isEdit:boolean = false;
  username:string = '';

  edit() {
    this.isEdit = !this.isEdit
  }
  async save() {
    if (!this.isEdit) {
      return
    }
    const username = this.username
    if (!username) {
      Toast.fail('User name is empty')
      return;
    }
    try {
      await services.api.changeInfo(username)
      Toast.success('Modify success')
      this.$router.back()
    } catch(e) {
      Toast.fail(e.message)
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    margin: .2rem 0 0;
    .item{
      overflow: hidden;
      background: #fff;
      padding: .2rem .6rem;
      border-bottom: .01rem solid #ddd;
      &:last-child{
        border: none;
      }
      .left{
        float: left;
        img{
          width: .8rem;
          display: block;
        }
      }
      .right{
        float: right;
        img{
          width: .32rem;
          margin: .3rem 0 0
        }
        input{
          border: none;
          outline: none;
          width: 3.6rem;
          padding: .1rem 0;
          border-bottom: .01rem solid #ddd;
        }
      }
    }
    .user{
      padding: .3rem .6rem;
      .left, .right span{
        line-height: .5rem;
      }
    }
    .btn{
      margin: .6rem;
    }
  }
</style>