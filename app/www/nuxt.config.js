import fs from 'fs'
import path from 'path'
import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import hljs from 'highlight.js'

const isProd = process.env.NODE_ENV === 'production'

const proxy = isProd ? {} : {
  '/subscribe': {
    target: 'http://localhost:5000/firelayer-io/subscribe'
  }
}

const title = 'Firelayer - Jump-start your Firebase Web Project'
const description = 'Jump-start your Firebase Project with fully integrated and ready to use templates, launch your Firebase MVP 10x faster with our templates'
const shortDescription = 'Launch your Firebase MVP 10x faster with our templates'
const keywords = 'firebase template, firelayer, firebase, boilerplate, firebase boilerplate, code, hosting, cloud functions, firebase mvp, mvp, fast firebase mvp, firebase vue template, firebase vuetify boilerplate, vuetify, vue'

export default {
  mode: 'universal',
  target: 'static',
  srcDir: 'src/',
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'keywords', name: 'keywords', content: keywords },
      // open graph
      { hid: 'og:site_name', property: 'og:site_name', content: 'Firelayer' },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: shortDescription },
      { hid: 'og:image', property: 'og:image', content: 'https://firelayer.io/images/firelayer-card.png' },
      // twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: shortDescription },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://firelayer.io/images/firelayer-card.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Firelayer.io Toolkit' },
      { hid: 'robots', name: 'robots', content: 'index,follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap' }
    ]
  },
  loading: { color: '#ff4700' },
  css: [
    '~/assets/styles/global.css',
    '~/assets/styles/docs.scss',
    '~/assets/styles/hljs.css'
  ],
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/animate.js', mode: 'client' },
    { src: '~/plugins/clipboard.js', mode: 'client' }
  ],
  buildModules: [
    ['@nuxtjs/vuetify', {
      customVariables: ['~/assets/styles/vuetify'],
      optionsPath: '~/config/vuetify.options.js',
      treeShake: true,
      defaultAssets: {
        font: false
      }
    }]
  ],
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/axios', {
      baseURL: '/'
    }],
    '@nuxtjs/proxy',
    ['@nuxtjs/pwa', {
      meta: false,
      workbox: false,
      oneSignal: false
    }],
    '@nuxtjs/sitemap'
  ],
  proxy,
  styleResources: {
    scss: [
      '~/assets/styles/vuetify/_index.scss'
    ]
  },
  generate: {
    fallback: true,
    routes() {
      const files = []

      // add documentation routes
      fs.readdirSync(path.join(__dirname, 'src/docs')).forEach((file) => {
        files.push('/docs/' + file.replace('.md', ''))
      })

      // add templates routes
      fs.readdirSync(path.join(__dirname, 'src/docs-templates')).forEach((file) => {
        files.push('/templates/' + file.replace('.md', ''))
      })

      return files
    }
  },
  sitemap: {
    hostname: 'https://firelayer.io',
    gzip: true,
    exclude: [
      '/_static/'
    ]
  },
  manifest: {
    name: 'Firelayer',
    'short_name': 'Firelayer',
    description: 'Firelayer - Jump-start you Firebase Web Project'
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['style', 'font'].includes(type)
      }
    }
  },
  build: {
    publicPath: '/_static/',
    extractCSS: true,
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          markdownIt: markdownIt({
            html: true,
            linkify: true,
            breaks: true,
            highlight: function (str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return `<pre><div class="hljs ${lang}">` +
                         hljs.highlight(lang, str, true).value +
                         '</div></pre>'
                // eslint-disable-next-line no-empty
                } catch (__) {}
              }

              return `<pre>${str}</pre>`
            }
          }).use(markdownItAnchor, {
            permalink: true,
            permalinkClass: 'd-none header-anchor',
            permalinkSymbol: '#',
            permalinkBefore: true
          })
        }
      })
    }
  }
}
