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
      // const res = await services.api.assessList(1, 0, id)
      const res = {
        data: [
          {
            arrival_time: '1566748800',
            content: '“奖惩并行才能最大激发公职人员的工作积极性和热情”“事事有法可依，越来越规范”“高素质的公职人员，必须有法规来约束”……近日，《中华人民共和国公职人员政务处分法（草案）》全文公布，面向社会征求意见。',
            display: '1',
            id: '84',
            img: [
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'},
              {img_url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'}
            ],
            img_type: '1',
            logo: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqk7zaqpGsU3icq8sGG42QkT0XedHsQqBJPm0gibGQEXlN3A5JfAcXicnhf5rJJzWfuLqxoHFYt6zV0A/132',
            name: '꧁꫞꯭陌꯭小꯭江꯭꫞꧂',
            order_id: '805',
            reply: '嘻嘻，不错不错',
            reply_time: '1570766323',
            room: '标准大床房',
            room_id: '289',
            score: '0',
            seller_id: '0',
            status: '1',
            time: '1570766323',
            uniacid: '4',
            user_id: '4913'
          }
        ]
      }
      const comment = res.data.map((item:any) => {
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