<template>
  <div class="wrap">
    登录
  </div>
</template>

<script lang="ts">
import services from '../services';
import { getStorage } from '../utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  created() {
    if (getStorage('Admin-Token')) {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>