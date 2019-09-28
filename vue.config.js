module.exports = {
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 配置js、css等文件夹的二级目录位置，不设置则会在dist下生成4个文件夹
  assetsDir: "static",
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  //设置打包文件相对路径
  publicPath: './',
  //不在production环境使用SourceMap
  productionSourceMap: false,
  devServer: {      //跨域
    port: 8080,     //端口号
    open: true,     //配置自动启动浏览器
    hotOnly: true,  //热更新
    // proxy: {        //配置跨域处理 可以设置多个
    //   '/': {
    //     // ws: true,
    //     target: 'https://zhonlb.com/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  css: {          //全局scss变量
    loaderOptions: {
      sass: {
        data: '@import "@/assets/styles/global.scss";'
      }
    }
  }
}
