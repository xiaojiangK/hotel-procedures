<template>
  <div class="wrap">
    <Hello :arr="arr" :msg.sync="msg" @change="change" @onMsg="updateMsg">
      <div slot="default">我是slot default</div>
    </Hello>
    <i-form ref="form" :model="form" :rules="ruleInline" inline>
      <Form-item prop="username">
        <i-input type="text" v-model="form.username" v-focus placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </Form-item>
      <Form-item prop="password">
        <i-input type="password" v-model="form.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </i-input>
      </Form-item>
      <Form-item>
        <i-button type="primary" @click="login">登录</i-button>
      </Form-item>
    </i-form>
  </div>
</template>

<script lang="ts">
import services from '../services';
import { getStorage } from '../utils/util';
import Hello from '@/components/Hello.vue';
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({
  components: {
    Hello
  },
  directives: {
    focus: {
      inserted:(el) => {
        el.focus();
      }
    }
  }
})
export default class Login extends Vue {
  @Provide('Inject') msg:string = 'hello TypeScript';             // 配合子级@Imject() 获取，无需组件绑定，@Provide() 传递，参数指定子类变量
  // @Provide() msg:string = 'hello TypeScript';
  arr:any[] = ['JavaScript', 'TypeScript', 'VueJs'];              // init data
  form:CheckForm = {
    username: '',
    password: ''
  }
  ruleInline:object = {
    username: [
      { required: true, message: '请填写用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请填写密码', trigger: 'blur' },
      { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ]
  }

  login() {
    (this as any).$refs.form.validate(async (valid:boolean) => {  // as -> 类型断言
      if (valid) {
        try {
          await services.api.login({
            username: this.form.username,
            password: this.form.password
          });
          (this as any).$Message.success('提交成功!');
        } catch(err) {
          (this as any).$Message.success(err.message);
        }
      } else {
        (this as any).$Message.error('表单验证失败!');
      }
    });
  }
  updateMsg(e:string) {
    console.log(`子组件hello 返回值${e}`);
  }
  change(e:string) {
    this.msg = e;
    console.log('子组件修改：' + e);
  }
  created() {
    if (getStorage('Admin-Token')) {
      this.$router.push('/')
    }
  }
}

interface CheckForm {                                           // 接口
  username: string;
  password: string;
}
</script>
<style lang="scss" scoped>

</style>