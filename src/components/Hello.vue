<template>
  <div class="hello">
    <p>prop：{{ msg }}</p>
    <p>PropSync：{{ msgSync }}</p>
    <p>Inject：{{ Inject }}</p>
    <p @click="updateMsg">message: {{ message }}</p>

    <ul>
      <li v-for="(item, index) in arr" :key="index">{{item | focus}}</li>
    </ul>
    <input type="text" :value="msg" v-focus @change="change" />
    <i-form ref="form">
      <Form-item>
        <i-input type="text" v-model="message" on-change="change" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </Form-item>
    </i-form>

    <anchored-heading />
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Emit, Watch, Inject, PropSync, Ref } from 'vue-property-decorator';

// Render
Vue.component('anchored-heading', {
  render(h) {
    /**
     * 参数一：父盒子
     * 参数二：属性
     * 参数三：子盒子
     */
    return h(
      'div',
      {
        class: 'active'
      },
      ['h1','h3','span','ul'].map(item => {
        return h(item, { class: item }, item)
      })
    )
    // throw new Error('oops');
  },
  // Render 渲染失败执行
  renderError(h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
})

@Component({
  directives: {                                       // 自定义指令
    focus: {
      inserted(e) {
        e.focus()
      }
    }
  },
  filters: {                                          // 过滤器
    focus(e:any) {
      return `focus：${e}`
    }
  }
})
export default class Hello extends Vue {
  @Ref('form') readonly loginForm!: HTMLFormElement   // 获取ref属性元素，参数为ref值，默认用变量查询
  // @Ref() readonly form!: HTMLFormElement

  // @Prop() private msg!:string                      // 普通prop传值
  // @Prop(String) private readonly msg!:string
  // @Prop([String, Array]) private msg!:string | []
  @Prop({                                             // prop参数
    type: Array,
    default: [],
    required: true
  }) private arr !: any[]

  @PropSync('msg', {                                  // propSync，会生成一个新的计算属性，需要配合父组件的 .sync 修饰符使用
    type: String,
    default: 'hello ts'
  }) private msgSync!:string

  // @Inject() private Inject!:string                 // 配合父级@Provide() 传递，无需组件绑定，@Imject() 获取
  // @Inject('Inject') private Inject!:string
  @Inject({                                           // inject参数
    from: 'Inject',
    default: 'hello ts'
  }) private Inject!:string

  @Model('change', {                                  // model，监听change事件，向父级抛事件然后修改值
    type: String,
    default: 'hello ts'
  }) private msg!:string

  private message:string = 'hello TypeScript'         // 子组件数据
  private userInfo:User = {                           // 接口类型
    username: '',
    password: ''
  }

  // Watch
  // @Watch('message')
  // watchMsg(val:string, oldVal:string) {
  //   console.log('Watch：', val, oldVal);
  // }
  @Watch('message', {immediate: true, deep: true})
  watchMsg(val:string, oldVal:string) {
    console.log('Watch：', val, oldVal)
  }

  // Emit，参数 -> 返回事件名，默认事件名驼峰 -> 横杠
  @Emit('onMsg')
  updateMsg() {
    return this.message = 'hello ts'                  // 返回值 -> 传参父级
  }

  // Computed
  get getMsg() {                                      // getData
    return this.message
  }
  set getMsg(str:string) {                            // setData
    this.message = str
  }

  // Methods
  @Emit()
  change(e:any) {
    (this as any).$Message.info('修改成功~')
    return e.target.value              // 向父级抛事件，返回值
  }

  // Created
  created() {
    // this.msgSync = 'Hello TS'                      // set Computed msgSync
    // console.log(this.msgSync)                      // get Computed msgSync
    // this.getMsg = 'hello ts'                       // set Computed message
    // console.log(this.getMsg)                       // get Computed message
  }

  // Updated
  updated() {
    console.log(this.loginForm)
  }
}

interface User {
  /**
   * User Info
   */
  username: string;
  password: string;
}
</script>
<style lang="scss" scoped>
  body {
    font-size: 14px;
    p {
      line-height: 30px;
      color: $theme-color
    }
  }
</style>
