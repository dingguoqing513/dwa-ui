<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">基础组件，触发业务逻辑时使用。</p>
    <dwa-anchor>
      <dwa-anchor-link href="button-simple" title="基础用法"/>
      <dwa-anchor-link href="button-disabled" title="禁用状态"/>
      <dwa-anchor-link href="button-circle" title="圆形按钮"/>
      <dwa-anchor-link href="button-customize" title="自定义颜色"/>
      <dwa-anchor-link href="button-round" title="圆角按钮"/>
      <dwa-anchor-link href="api" title="API"/>
    </dwa-anchor>

    <!-- 基础用法DEMO -->
    <dwa-block :height="225" :title="'基础用法'" id="button-simple">
      <template v-slot:demo>
        <div>
          <dwa-button>Default</dwa-button>
          <dwa-button type="primary">Primary</dwa-button>
          <dwa-button type="success">Success</dwa-button>
          <dwa-button type="danger">Danger</dwa-button>
          <dwa-button type="warning">Warning</dwa-button>
          <dwa-button icon="search" type="primary">Search</dwa-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </dwa-block>

    <!-- 禁用DEMO -->
    <dwa-block :height="168" :title="'禁用状态'" id="button-disabled">
      <template v-slot:demo>
        <dwa-button disabled>Default</dwa-button>
        <dwa-button disabled type="primary">Primary</dwa-button>
        <dwa-button disabled type="dashed">Dashed</dwa-button>
        <dwa-button disabled type="danger">Danger</dwa-button>
        <dwa-button disabled type="warning">Warning</dwa-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code.html)}}</code>
      </template>
    </dwa-block>

    <!-- 圆形按钮DEMO -->
    <dwa-block :height="268" :title="'圆形按钮'" id="button-circle">
      <template v-slot:demo>
        <dwa-button circle icon="apple-fill" type="primary"></dwa-button>
        <dwa-button circle icon="apple-fill" iconColor="tomato"></dwa-button>
        <dwa-button circle icon="apple-fill"></dwa-button>
        <dwa-button circle icon="ios-happy" type="primary"></dwa-button>
        <dwa-button circle icon="like" type="primary"></dwa-button>
        <dwa-button circle icon="like" type="warning"></dwa-button>
        <dwa-button circle icon="like" type="info"></dwa-button>
        <dwa-button circle icon="like" type="danger"></dwa-button>
        <dwa-button circle icon="taiyang"></dwa-button>
        <dwa-button circle icon="like" color="tomato" iconColor="#fff"></dwa-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(circle.code.html)}}</code>
      </template>
    </dwa-block>

    <!-- 自定义颜色DEMO -->
    <dwa-block
      :height="105"
      :title="'自定义颜色'"
      id="button-customize"
      introduction="自定义Button背景色，这时你需要一个color属性对其赋值"
    >
      <template v-slot:demo>
        <dwa-button color="#2cbfbe">customize</dwa-button>
        <dwa-button circle color="#2cbfbe" icon="like" iconColor="#fff"></dwa-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(customize.code.html)}}</code>
      </template>
    </dwa-block>

    <!-- block按钮DEMO -->
    <dwa-block :height="190" id="button-round" introduction="另外还有不同的样式，这里是圆角按钮实例" title="圆角按钮">
      <template v-slot:demo>
        <dwa-button round>Default</dwa-button>
        <dwa-button round type="primary">Primary</dwa-button>
        <dwa-button round type="warning">Warning</dwa-button>
        <dwa-button round type="danger">Danger</dwa-button>
        <dwa-button round type="info">Info</dwa-button>
        <dwa-button round color="#2cbfbe" type="customize">customize</dwa-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(round.code.html)}}</code>
      </template>
    </dwa-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <dwa-table-simple :data="api" :type="'demo'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dwa-backtop-demo',
  data() {
    return {
      a: document.getElementById('router_view_box'),
      simple: {
        code: {
          html: `
          <div>
            <dwa-button>Default</dwa-button>
            <dwa-button type="primary">Primary</dwa-button>
            <dwa-button type="success">Success</dwa-button>
            <dwa-button type="danger">Danger</dwa-button>
            <dwa-button type="warning">Warning</dwa-button>
            <dwa-button icon="search" type="primary">Search</dwa-button>
            </div>
          `
        }
      },
      disabled: {
        code: {
          html: `
          <dwa-button disabled>Default</dwa-button>
          <dwa-button disabled type="primary">Primary</dwa-button>
          <dwa-button disabled type="dashed">Dashed</dwa-button>
          <dwa-button disabled type="danger">Danger</dwa-button>
          <dwa-button disabled type="warning">Warning</dwa-button>
          `
        }
      },
      circle: {
        code: {
          html: `
          <dwa-button circle icon="apple-fill" type="primary"></dwa-button>
          <dwa-button circle icon="apple-fill" iconColor="tomato"></dwa-button>
          <dwa-button circle icon="apple-fill"></dwa-button>
          <dwa-button circle icon="ios-happy" type="primary"></dwa-button>
          <dwa-button circle icon="like" type="primary"></dwa-button>
          <dwa-button circle icon="like" type="warning"></dwa-button>
          <dwa-button circle icon="like" type="info"></dwa-button>
          <dwa-button circle icon="like" type="danger"></dwa-button>
          <dwa-button circle icon="taiyang"></dwa-button>
          <dwa-button circle icon="like" color="tomato" iconColor="#fff"></dwa-button>
          `
        }
      },
      customize: {
        code: {
          html: `
          <dwa-button color="#2cbfbe" type="customize">customize</dwa-button>
          <dwa-button color="#2cbfbe" circle dwa="dwa-heart-fill" type="customize"></dwa-button>
          `
        }
      },
      round: {
        code: {
          html: `
          <dwa-button round>Default</dwa-button>
          <dwa-button round type="primary">Primary</dwa-button>
          <dwa-button round type="warning">Warning</dwa-button>
          <dwa-button round type="danger">Danger</dwa-button>
          <dwa-button round type="info">Info</dwa-button>
          <dwa-button round color="#2cbfbe" type="customize">customize</dwa-button>
          `
        }
      },
      api: [
        {
          parameter: 'type',
          description: '类型',
          dataTypes: 'String',
          optional:
            'default / primary / success / warning / info / danger / customize',
          default: 'default'
        },
        {
          parameter: 'size',
          description: '自定义Icon大小',
          dataTypes: 'String',
          optional: '',
          default: '16px'
        },
        {
          parameter: 'disabled',
          description: '是否禁用状态',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'round',
          description: '是否圆角按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'animation',
          description: '是否开启点击动画效果',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'true'
        },
        {
          parameter: 'icon',
          description: '图标类名，支持彩色Icon，颜色更改只对单色Icon有效',
          dataTypes: 'String',
          optional: '',
          default: 'qm'
        },
        {
          parameter: 'color',
          description: '自定义按钮背景色',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'iconColor',
          description: '自定义Icon颜色',
          dataTypes: 'String',
          optional: '',
          default: '#333'
        }
      ]
    }
  }
}
</script>
