<template>
  <v-container class="docs">
    <v-navigation-drawer
      v-model="drawer"
      hide-overlay
      fixed
    >
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title class="body-1 font-weight-black">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <div class="d-flex flex-row docs-container">
      <v-list
        flat
        dense
        nav
        class="d-none d-md-block mt-2"
        color="transparent"
      >
        <v-list-item
          v-for="item in items"
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
      items: [
        { title: 'Getting Started', link: '/docs/getting-started' },
        { title: 'Setting Up Firebase', link: '/docs/setting-up-firebase' },
        { title: 'Configuration', link: '/docs/configuration' },
        { title: 'Directory Structure', link: '/docs/directory-structure' },
        { title: 'CLI', link: '/docs/cli' }
      ],
      drawer: false
    }
  },
  watch: {
    '$vuetify.breakpoint.mdAndUp'(val) {
      if (val) this.drawer = false
    }
  },
  async asyncData({ params }) {
    const doc = await import(`~/docs/${params.doc}.md`)

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

<style lang="scss">
.docs {
  .drawer-button {
    position: fixed;
    top: 70px;
    left: -22px;
    z-index: 5;
  }

  .docs-container {
    position: relative;
  }

  .v-list-item__title {
    line-height: 1.5rem !important;
  }

  .v-list-item--active {
    color: $primary !important;
  }

  img {
    max-width: 100%;
  }

  h2,
  h3,
  h4,
  h5 {
    position: relative;
    margin-top: 1.8rem;
    margin-bottom: 0.6rem;

    .header-anchor {
      justify-content: center;
      position: absolute;
      width: 40px;
      height: 40px;
      left: -38px;
    }

    &:hover {
      .header-anchor {
        display: flex !important;
      }
    }
  }
}
</style>
