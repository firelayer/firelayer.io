<template>
  <div>
    <!-- landing section -->
    <section class="white pb-6">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8">
            <h1 class="display-2 mb-6" style="line-height: 1.3;" :class="{'display-1': $vuetify.breakpoint.xs}">Jumpstart your <span class="primary--text">Firebase</span> Web Project</h1>
            <h3 class="body-1 font-weight-bold">Build your next Firebase application with the help of Firelayer. An open source framework making Firebase web development faster to start and easier to maintain.</h3>
            <div class="mt-6">
              <v-btn
                class="text-uppercase"
                color="primary"
                x-large
                to="/docs/getting-started"
                nuxt
              >Get Started</v-btn>
              <v-btn class="ml-2 text-uppercase" x-large href="https://github.com/firelayer/firelayer" target="_blank">
                <v-icon left>mdi-github</v-icon>
                Github
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="mt-4 mt-md-8 pa-md-3">
            <LandingShell />
            <div class="caption text-center mt-1">
              Requirements: Node >= 10 | Git
              <br>
              <nuxt-link to="/docs/getting-started">More information here</nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="templates" class="pt-4 pb-4">
      <v-container>
        <div class="display-1 text-center mb-4">Scaffold Templates</div>
        <v-row>
          <v-col cols="12" md="4">
            <div class="title text-center font-weight-black text-uppercase mb-2">
              Starter
            </div>
            <v-card>
              <v-img
                class="white--text align-end"
                height="234px"
                contain
                src="/images/starter-print.jpg"
              >
                <div class="template-box pa-2">
                  <copy-label text="firelayer init myproject -t starter">
                    firelayer init myproject -t starter
                  </copy-label>
                  <div class="overline font-weight-bold py-1 white--text">or add to existing firelayer</div>
                  <copy-label text="firelayer add:template starter">
                    firelayer add:template starter
                  </copy-label>
                </div>
              </v-img>
            </v-card>
            <div class="pt-2 flex align-end">
              <v-btn outlined href="https://firelayer-starter-template.web.app/" target="_blank">Demo</v-btn>
              <v-btn outlined href="https://github.com/firelayer/starter-template/tree/master/apps/functions/src" target="_blank" class="ml-1">API Code</v-btn>
            </div>
            <div class="body-1 pt-2">
              Default template on <code>firelayer init</code> comes with an Express API with user management, examples on firebase triggers and example on pubsub scheduler. Simple landing page.
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="title text-center font-weight-black text-uppercase mb-2">
              Nuxt Website
            </div>
            <v-card>
              <v-img
                class="white--text align-end"
                height="234px"
                contain
                src="/images/nuxt-print.jpg"
              >
                <div class="template-box pa-2">
                  <copy-label text="firelayer init myproject -t nuxt">
                    firelayer init myproject -t nuxt
                  </copy-label>
                  <div class="overline font-weight-bold py-1 white--text">or add to existing firelayer</div>
                  <copy-label text="firelayer add:template nuxt">
                    firelayer add:template nuxt
                  </copy-label>
                </div>
              </v-img>
            </v-card>
            <div class="pt-2 flex align-end">
              <v-btn outlined href="https://firelayer-nuxt-template.web.app/" target="_blank">Demo</v-btn>
            </div>
            <div class="body-1 pt-2">
              Nuxt landing page website with example pages. Comes with i18n support and Vuetify.
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
      </v-container>
    </section>

    <section class="white pt-4 pb-4">
      <v-container>
        <div class="display-1 text-center mb-4">Why Firelayer</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature1.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Boilerplate
            </div>
            <div class="body-1 pt-2">
              Start developing your application quicker with out of the box Landing Pages and APIs
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature2.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Tooling
            </div>
            <div class="body-1 pt-2">
              Quick and easy access to commands like maintenance, migrations, deploy environment variables, switch development environments.
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature3.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Integrations
            </div>
            <div class="body-1 pt-2">
              Ready to use addons for your Cloud Functions and examples on how to use external services.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="white text-center pt-2">
      <v-divider class="mb-4"></v-divider>
      <v-container>
        <div class="display-1 font-weight-bold"><span class="primary--text">Firelayer</span> Newsletter</div>
        <p class="mt-2">Get the latest Firelayer news to your inbox.</p>
        <newsletter-form />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>
  </div>
</template>

<script>
import CopyLabel from '../components/common/CopyLabel'
import LandingShell from '../components/common/LandingShell'
import NewsletterForm from '../components/NewsletterForm'

export default {
  components: {
    CopyLabel,
    LandingShell,
    NewsletterForm
  }
}
</script>

<style lang="scss" scoped>
section {
  text-align: center;

  @include media("md-and-up") {
    text-align: left;
  }
}

.template-box {
  background-color: #2d3748;
  font-weight: bold;
  font-size: 0.875rem;
  color: lighten($primary, 10%);
}
</style>
