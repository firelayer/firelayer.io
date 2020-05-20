<template>
  <v-row>
    <v-col v-for="tmpl in templates" :key="tmpl.template" cols="12" md="4">
      <div class="title text-center font-weight-black text-uppercase mb-2">
        {{ tmpl.title }}
      </div>
      <v-card>
        <v-img
          class="white--text align-end"
          height="234px"
          contain
          :src="tmpl.image"
        >
          <div class="template-box pa-2">
            <copy-label :text="`firelayer init myproject -t ${tmpl.template}`">
              firelayer init myproject -t {{ tmpl.template }}
            </copy-label>
            <div class="overline font-weight-bold py-1 secondary--text">or add to existing firelayer project</div>
            <copy-label :text="`firelayer add:template ${tmpl.template}`">
              firelayer add:template {{ tmpl.template }}
            </copy-label>
          </div>
        </v-img>
      </v-card>
      <div class="pt-2 flex align-end">
        <v-btn outlined :to="`/templates/${tmpl.template}`">Documentation</v-btn>
        <v-btn
          class="ml-1"
          outlined
          :href="`https://github.com/firelayer/${tmpl.template}-template`"
          target="_blank"
        >
          <v-icon left>mdi-github</v-icon>
          Github
        </v-btn>
        <br>
        <v-btn
          v-if="tmpl.demo"
          color="secondary"
          class="mt-2"
          :href="tmpl.demo"
          target="_blank"
        >Demo</v-btn>
      </div>
      <div class="body-1 pt-2" v-html="tmpl.description"></div>
    </v-col>

    <v-col cols="12" md="4">
      <div class="title text-center font-weight-black text-uppercase mb-2">
        More to come
      </div>
      <v-card height="234px">
        <div class="pa-3">
          <v-img
            class="white--text align-end"
            height="180px"
            contain
            src="/images/more.svg"
          >
          </v-img>
        </div>
      </v-card>
      <div class="body-1 pt-2">
        More templates in progress.. <br> It's also possible to use your own templates. The commands <code>firelayer init</code> and <code>firelayer add:template</code> also accept git repositories as template input.
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CopyLabel from './common/CopyLabel'

export default {
  components: {
    CopyLabel
  },
  data() {
    return {
      templates: [{
        title: 'Starter Template',
        image: '/images/admin-print.png',
        template: 'starter',
        description: 'Default template on <code>firelayer init</code> comes with an Administration Dashboard and Express API with user management, examples on firebase triggers and example on pubsub scheduler.',
        demo: null
      }, {
        title: 'Landing Template',
        image: '/images/nuxt-print.jpg',
        template: 'landing',
        description: 'Landing page website with example pages. Built with Nuxt, Vue, and comes with i18n support and Vuetify.',
        demo: 'https://firelayer-starter-template.web.app'
      }, {
        title: 'Chat Template',
        image: '/images/chat-print.jpg',
        template: 'chat',
        description: 'Slack like chat. Built with Vue, Vuetify and Realtime database.',
        demo: 'https://firelayer-chat.web.app'
      }, {
        title: 'Board Template',
        image: '/images/board-print.png',
        template: 'board',
        description: 'Suggestion Board for user feedback. Built with Vue, Vuetify and Realtime database.',
        demo: 'https://board.firelayer.io'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.template-box {
  background-color: rgba(247, 249, 252, 0.9);
  font-weight: bold;
  font-size: 0.875rem;
  color: lighten($primary, 10%);
}
</style>
