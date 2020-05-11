<template>
  <v-row>
    <v-col cols="12" md="4">
      <div class="title text-center font-weight-black text-uppercase mb-2">
        Starter Template
      </div>
      <v-card>
        <v-img
          class="white--text align-end"
          height="234px"
          contain
          src="/images/admin-print.png"
        >
          <div class="template-box pa-2">
            <copy-label text="firelayer init myproject -t starter">
              firelayer init myproject -t starter
            </copy-label>
            <div class="overline font-weight-bold py-1 secondary--text">or add to existing firelayer project</div>
            <copy-label text="firelayer add:template starter">
              firelayer add:template starter
            </copy-label>
          </div>
        </v-img>
      </v-card>
      <div class="pt-2 flex align-end">
        <v-btn
          color="secondary"
          href="https://github.com/firelayer/starter-template"
          target="_blank"
        >
          <v-icon left>mdi-github</v-icon>
          Github
        </v-btn>
        <br>
        <v-btn outlined class="mt-2" to="/templates/starter">Documentation</v-btn>
      </div>
      <div class="body-1 pt-2">
        Default template on <code>firelayer init</code> comes with an Administration Dashboard and Express API with user management, examples on firebase triggers and example on pubsub scheduler.
      </div>
    </v-col>

    <v-col cols="12" md="4">
      <div class="title text-center font-weight-black text-uppercase mb-2">
        Landing Template
      </div>
      <v-card>
        <v-img
          class="white--text align-end"
          height="234px"
          contain
          src="/images/nuxt-print.jpg"
        >
          <div class="template-box pa-2">
            <copy-label text="firelayer init myproject -t landing">
              firelayer init myproject -t landing
            </copy-label>
            <div class="overline font-weight-bold py-1 secondary--text">or add to existing firelayer project</div>
            <copy-label text="firelayer add:template landing">
              firelayer add:template landing
            </copy-label>
          </div>
        </v-img>
      </v-card>
      <div class="pt-2 flex align-end">
        <v-btn color="secondary" href="https://firelayer-starter-template.web.app" target="_blank">Demo</v-btn>
        <v-btn
          class="ml-1"
          color="secondary"
          href="https://github.com/firelayer/landing-template"
          target="_blank"
        >
          <v-icon left>mdi-github</v-icon>
          Github
        </v-btn>
        <br>
        <v-btn outlined class="mt-2" to="/templates/landing">Documentation</v-btn>
      </div>
      <div class="body-1 pt-2">
        Landing page website with example pages. Built with Nuxt, Vue, and comes with i18n support and Vuetify.
      </div>
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
        More templates in progress.. <br> You can make your own, <code>firelayer init</code> and <code>firelayer add:template</code> also accept git repositories as template input.
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CopyLabel from './common/CopyLabel'

export default {
  components: {
    CopyLabel
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
