<template>
  <div class="content-box">
    <h2 class="demo-title">安装</h2>

    <!-- 致谢 -->
    <h3 class="demo-table-title">致谢</h3>
    <div class="demo-tip">
      <p>该项目基于Vue-cli3开发</p>
      <p>
        <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
      </p>
    </div>

    <!-- 代码仓库 -->
    <h3 class="demo-table-title">
      代码仓库
      <i class="iconfont icon-github-fill" style="margin: 0 10px;"></i>
    </h3>
    <p class="demo-introduction">
      github代码仓库地址
      <img
        alt="Github Star"
        class="github-img"
        src="https://img.shields.io/github/stars/dingguoqing513/dwa-ui.svg?style=social"
      >
      <a href="https://github.com/dingguoqing513/dwa-ui" target="_blank">https://github.com/dingguoqing513/dwa-ui</a> 点个star支持一下吧~
    </p>

    <!-- NPM安装 -->
    <h3 class="demo-table-title">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <p class="demo-introduction">
      <a
        href="https://www.npmjs.com/package/dwa-ui"
        target="_blank"
      >https://www.npmjs.com/package/dwa-ui</a>
    </p>
    <div class="demo-code-block">npm i dwa-ui -S</div>

    <!-- 完整引入 -->
    <h3 class="demo-table-title">如何使用</h3>
    <p class="demo-introduction">在 main.js 中加入以下内容：</p>
    <div class="demo-code-block" style="line-height: .7;">
      <p><span class="code_color_dr">import</span> Vue <span class="code_color_dr">from</span> <span class="code_color_ymb"> 'vue'</span>;</p>
      <p><span class="code_color_dr">import</span> dwaUI <span class="code_color_dr">from</span> <span class="code_color_ymb"> 'dwa-ui'</span></p>
      <p>Vue.use(dwaUI);</p>
      <p style="margin-top: 30px;"><span class="code_color_dr">new</span> Vue({</p>
      <p>&nbsp;&nbsp;el: <span class="code_color_ymb"> '#app'</span>,</p>
      <p>&nbsp;&nbsp;render: h => h(App)</p>   
      <p>});</p>
    </div>

    <!-- 常用动效 -->
    <h3 class="demo-table-title">常用动效</h3>
    <div class="demo-code-block">
      <p><span class="code_color_dr">transition</span>: all .2s <span class="code_color_ymb">linear</span>;</p>
    </div>

    <!-- 开始使用 -->
    <h3 class="demo-table-title">开始使用</h3>
    <p class="demo-introduction">至此，一个基于 Vue 和Dwa-ui 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
export default {
  name: 'dwa-installation',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.github-img {
  cursor: pointer;
  position: relative;
  top: 5px;
  margin: 0 8px 0 5px;
}
</style>

