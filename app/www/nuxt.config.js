/* eslint-disable @typescript-eslint/camelcase */
export default {
  mode: 'universal',
  srcDir: 'src/',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Firelayer.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: 'Firelayer - Jumpstart your Firebase Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa', {
      meta: false,
      workbox: false,
      oneSignal: false
    }]
  ],
  /**
   * Manifest
   */
  manifest: {
    name: 'Firelayer',
    short_name: 'Firelayer',
    description: 'Firelayer - Jumpstart you Firebase Project'
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/_static/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
