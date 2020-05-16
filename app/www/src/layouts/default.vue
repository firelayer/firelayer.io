<template>
  <v-app>
    <v-app-bar
      flat
      height="80"
      color="white"
      style="max-height: 80px"
    >
      <v-container class="d-flex">
        <nuxt-link to="/" class="d-flex align-center">
          <img src="/images/logo.png" alt="TheCompany" height="38" class="mr-2">
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn
          to="/templates"
          color="primary"
          class="d-none d-sm-flex"
          text
          large
        >Templates</v-btn>
        <v-btn
          to="/docs/getting-started"
          color="primary"
          class="mr-2"
          text
          large
        >Docs</v-btn>
        <!-- <v-btn to="/learn" text large>Learn</v-btn> -->
        <v-btn icon href="https://github.com/firelayer/firelayer" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="d-md-none"
      hide-overlay
      fixed
    >
      <v-list dense nav>
        <v-list-item to="/templates" exact link>
          <v-list-item-content>
            <v-list-item-title class="body-1 font-weight-black">Templates</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-subheader class="text-uppercase font-weight-bold mt-2">Documentation</v-subheader>
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
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-content>
      <nuxt />

      <v-footer color="white" class="pt-5 pb-5">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <div class="font-weight-black mb-2">
                General Resources
              </div>
              <div class="d-flex flex-column subtitle-2">
                <nuxt-link to="/docs/getting-started">Docs</nuxt-link>
                <!-- <nuxt-link to="/learn">Learn</nuxt-link> -->
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="font-weight-black mb-2">
                Community
              </div>
              <div class="d-flex flex-column subtitle-2">
                <a href="https://github.com/firelayer/firelayer" target="_blank">Github</a>
                <a href="https://medium.com/firelayer" target="_blank">Blog</a>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <img src="/images/logo.png" height="38" alt="">
              <p class="overline">The MIT License (MIT)</p>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-content>

    <v-snackbar v-model="appToast.show" :timeout="appToast.timeout" :color="appToast.color" bottom>
      {{ appToast.message }}
      <v-btn v-if="appToast.timeout === 0" color="white" text @click="appToast.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      appToast: {
        show: false,
        color: 'black',
        message: '',
        timeout: 3000
      },
      starting: [
        { title: 'Getting Started', link: '/docs/getting-started' },
        { title: 'Configuration', link: '/docs/configuration' },
        { title: 'Directory Structure', link: '/docs/directory-structure' },
        { title: 'Commands (CLI)', link: '/docs/cli' }
      ],
      guides: [
        { title: 'Setting Up Firebase', link: '/docs/setting-up-firebase' },
        { title: 'Multiple Environments', link: '/docs/multiple-environments' }
      ],
      drawer: false
    }
  },
  computed: {
    ...mapState('app', ['toast'])
  },
  watch: {
    toast() {
      this.appToast = {
        ...this.toast
      }
    }
  },
  head() {
    const canonical = `https://firelayer.io${this.$route.path}`

    const link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: `https://firelayer.io${this.$route.path}` }
    ]

    return {
      htmlAttrs: { lang: 'en' },
      link,
      meta: [
        { hid: 'og:url', property: 'og:url', content: canonical }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn--active {
  &:before {
    background-color: transparent;
  }
}

.drawer-button {
  position: fixed;
  top: 70px;
  left: -22px;
  z-index: 5;
}
</style>
