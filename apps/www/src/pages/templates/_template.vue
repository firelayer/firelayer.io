<template>
  <v-container class="docs">
    <div class="pa-md-2 text-uppercase caption font-weight-black">
      <nuxt-link to="/templates">Templates</nuxt-link>
      <span class="mx-1">&gt;</span>
      <span>{{ template.attributes.title }}</span>
    </div>
    <div class="d-flex flex-row docs-container">
      <v-list
        flat
        dense
        nav
        class="d-none d-md-block mt-1 docs-menu"
        color="transparent"
      >
        <v-subheader class="text-uppercase font-weight-bold">Documentation</v-subheader>
        <v-list-item
          v-for="item in headers"
          :key="item.title"
          :href="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="body-1 font-weight-black">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="pa-md-2 pl-md-12" style="min-width: 0; width: 100%;">
        <h1>{{ template.attributes.title }}</h1>
        <div class="mt-4" v-html="template.html"></div>
        <div class="caption mt-5">
          Caught a mistake or want to contribute to the documentation?
          <a :href="`https://github.com/firelayer/firelayer.io/blob/master/app/www/src/docs-templates/${filename}.md`" target="_blank" class="font-weight-black">Edit this page on GitHub!</a>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  async validate({ params, redirect }) {
    if (!params.template) return redirect('/templates')

    return true
  },
  async asyncData({ params, error }) {
    let template = {}

    try {
      template = await import(`~/docs-templates/${params.template}.md`)
    } catch (e) {
      error({ statusCode: 404 })
    }

    return {
      template,
      filename: params.template
    }
  },
  data() {
    return {
      headers: [{
        title: 'Content',
        link: '#content'
      }, {
        title: 'Installing',
        link: '#installing'
      }, {
        title: 'Developing',
        link: '#developing'
      }, {
        title: 'Deploying',
        link: '#deploying'
      }, {
        title: 'Maintenance',
        link: '#maintenance'
      }]
    }
  },
  head() {
    const title = `${this.template.attributes.title} | Firelayer`
    const { description, keywords } = this.template.attributes
    const fullKeywords = keywords + ', firebase, firelayer, template, firebase template, firebase boilerplate, boilerplate, code, hosting, mvp'
    const suffixDescription = ', Jump-start your Firebase Project with fully integrated and ready to use templates, launch your Firebase MVP 10x faster with our templates'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description + suffixDescription },
        { hid: 'keywords', name: 'keywords', content: fullKeywords },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title }
      ]
    }
  }
}
</script>
