// 用于动态路由找到组织
const normal = require('file-loader!posts/normallist.json');
const week = require('file-loader!posts/weeklist.json');

// 用于组织Nuxtjs应用的个性化设置，以便覆盖默认配置
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtbasic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        config['node'] = {path: true}
      }
    },
    /* 展示打包后的文件构建情况 */
    analyze: true,
    node: {
      fs: true
    }
    /* 其余参考https://zh.nuxtjs.org/api/configuration-build */
  },
  /* 缓存设置 */
  cache: {
    max: 100,
    maxAge: 900000
  },
  /* 引入css配置 */
  css: [
    '~assets/css/reset.css',
    '~assets/styles/index.scss',
  ],
  /* 实例化之前需要运行的js插件 */
  plugins:[

  ],
  /* 给动态路由添加 静态化的时候的地址 */
  generate:{
    routes:[

    ]
  }
}
