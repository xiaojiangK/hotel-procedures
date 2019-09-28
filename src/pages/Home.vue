<template>
  <div class="wrap">
    
  </div>
</template>

<script lang="ts">
import services from '../services';
import { getStorage } from '../utils/util';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {
  created() {
    if (!getStorage('Admin-Token')) {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>