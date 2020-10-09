const path = require('path');
const { config } = require('process');
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  lintOnSave: true,
  
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
        include:["./src/icons"]
      });
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  configureWebpack:(config) => {
    config.resolve = {
      extensions:['.js','.json','.vue'],
      alias:{
        'vue':'vue/dist/vue.js',
        favicon:"./icon.ico",
        '@':path.resolve(__dirname,'./src'),
        '@c':path.resolve(__dirname,'./src/components')
      }
    }
  },
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
