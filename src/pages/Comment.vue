<template>
  <div class="wrap">
    <Header title="View Evaluation"></Header>
    <div class="main">
      <ul>
        <Comment :item="comment"></Comment>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Toast } from 'vant';
import services from '@/services';
import { formatDate } from '@/utils/util';
import Header from '@/components/Header.vue';
import Comment from '@/components/Comment.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header,
    Comment
  }
})
export default class CommentList extends Vue {
  comment:any[] = []

  async getAssess(id:any) {
    try {
      const { data } = await services.api.AssessList(1, 0, id)
      const comment = data.map((item:any) => {
        return {
          ...item,
          speaker: 'Hotel reply：',
          time: formatDate(item.time * 1000),
          reply_time: formatDate(item.reply_time * 1000),
          arrival_time: formatDate(item.arrival_time * 1000),
          img: item.img && item.img.map((i:any) => i.img_url)
        }
      })
      this.comment = comment[0]
    } catch(e) {
      Toast.fail(e.message)
    }
  }
  created() {
    this.getAssess(this.$route.query.id)
  }
}
</script>
<style lang="scss" scoped>

</style>