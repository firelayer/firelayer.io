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

export default {
  mode: 'universal',
  srcDir: 'src/',
  head: {
    title: 'Firelayer - Jump-start your Firebase Web Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: 'Firelayer - Jump-start your Firebase Web Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
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
      treeShake: true
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

      fs.readdirSync(path.join(__dirname, 'src/docs')).forEach((file) => {
        files.push('/docs/' + file.replace('.md', ''))
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
  build: {
    publicPath: '/_static/',
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
