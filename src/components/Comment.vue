<template>
  <li>
    <div class="head">
      <div class="user">
        <img :src="item.logo" alt="">
        <span>{{item.name}}</span>
      </div>
      <div class="type">{{item.room}}</div>
    </div>
    <div class="content">
      <div class="desc">{{item.content}}</div>
      <div class="photo" v-if="item.img.length" :class="'col-' + [item.img.length <= 3 ? item.img.length : (item.img.length === 4 ? 2 : 3)]">
        <img v-for="(i, index) in item.img" :key="index" :src="i" @click="preview(item.img)" alt=""/>
      </div>
      <div class="date">{{item.arrival_time}} check in, {{item.time}} release</div>
      <div class="reply" v-if="item.reply">
        <p><span>{{item.speaker}}:</span> {{item.reply}}</p>
        <div class="date">{{item.reply_time}} Reply</div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { ImagePreview } from 'vant';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Comment extends Vue {
  @Prop() item!:object;

  preview(item:any) {
    ImagePreview(item);
  }
}
</script>
<style lang="scss" scoped>
  li{
    margin: 0 0 .18rem;
    padding: 0 .3rem .36rem;
    border-bottom: .01rem solid #E0E0E0;
    &:last-child{
      border: none;
    }
    .head{
      overflow: hidden;
      .user{
        float: left;
        img{
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          margin: 0 .12rem 0 0;
          background: #E0E0E0;
        }
        span{
          color: #FD9900;
          font-size: .32rem;
          overflow: hidden;
          max-width: 3rem;
          line-height: 1rem;
          white-space: nowrap;
          display: inline-block;
          text-overflow: ellipsis
        }
      }
      .type{
        float: right;
        color: #999;
        line-height: 1rem;
        font-size: .24rem
      }
    }
    .content{
      padding: 0 .18rem 0 1.1rem;
      .desc{
        line-height: .4rem;
        margin: 0 0 .06rem
      }
      .photo{
        width: 5rem;
        overflow: hidden;
        img{
          width: 100%;
          float: left;
          vertical-align: top;
        }
        &.col-2, &.col-3{
          img{
            width: 1.6rem;
            margin: 0 .06rem 0 0;
          }
        }
        &.col-2{
          width: 3.32rem;
          img{
            margin: 0 .06rem .06rem 0;
          }
        }
      }
      .date{
        color: #999;
        font-size: .22rem;
        margin: .26rem 0 0
      }
      .reply{
        margin: .26rem 0 0;
        p{
          line-height: .4rem
        }
        span{
          color: #FD9900
        }
      }
    }
  }
</style>