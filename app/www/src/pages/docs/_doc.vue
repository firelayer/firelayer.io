<template>
  <v-container class="docs">
    <div class="d-flex flex-row docs-container">
      <v-list
        flat
        dense
        nav
        class="d-none d-md-block mt-2 docs-menu"
        color="transparent"
      >
        <v-subheader class="text-uppercase font-weight-bold">Documentation</v-subheader>
        <v-list-item
          v-for="item in starting"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="body-1 font-weight-black">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-subheader class="text-uppercase font-weight-bold mt-6">Guides</v-subheader>
        <v-list-item
          v-for="item in guides"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="body-1 font-weight-black">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="pa-md-2 pl-md-12" style="min-width: 0; width: 100%;">
        <h1>{{ doc.attributes.title }}</h1>
        <a :href="`https://github.com/firelayer/firelayer.io/blob/master/app/www/src/docs/${filename}.md`" target="_blank" class="text-uppercase caption font-weight-black">Edit this page</a>
        <div class="mt-4" v-html="doc.html"></div>
        <div class="caption mt-5">
          Caught a mistake or want to contribute to the documentation?
          <a :href="`https://github.com/firelayer/firelayer.io/blob/master/app/www/src/docs/${filename}.md`" target="_blank" class="font-weight-black">Edit this page on GitHub!</a>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  async validate({ params, redirect }) {
    if (!params.doc) return redirect('/docs/getting-started')

    return true
  },
  data() {
    return {
      starting: [
        { title: 'Getting Started', link: '/docs/getting-started' },
        { title: 'Configuration', link: '/docs/configuration' },
        { title: 'Directory Structure', link: '/docs/directory-structure' },
        { title: 'Commands (CLI)', link: '/docs/cli' }
      ],
      guides: [
        { title: 'Setting Up Firebase', link: '/docs/setting-up-firebase' },
        { title: 'Multiple Environments', link: '/docs/multiple-environments' }
      ]
    }
  },
  async asyncData({ params, error }) {
    let doc = {}

    try {
      doc = await import(`~/docs/${params.doc}.md`)
    } catch (e) {
      error({ statusCode: 404 })
    }

    return {
      doc,
      filename: params.doc
    }
  },
  head() {
    const title = '' || 'Documentation'

    return {
      title: `${this.doc.attributes.title} | Firelayer`,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.attributes.description }
      ]
    }
  }
}
</script>
