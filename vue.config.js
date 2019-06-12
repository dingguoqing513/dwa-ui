module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  devServer: {
  	host: '0.0.0.0',
  	port: 9999
  },

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },

  css: {
    extract: false
  },

  publicPath: './docs',
  outputDir: 'docs',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}
