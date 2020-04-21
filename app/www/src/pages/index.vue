<template>
  <div>
    <!-- landing section -->
    <section class="white pb-6">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-8">
            <h1 class="display-2 mb-6" :class="{'display-1': $vuetify.breakpoint.xs}">Jumpstart your <span class="primary--text">Firebase</span> Project</h1>
            <h3 class="body-1 font-weight-bold">Build your next Firebase application with the help of Firelayer. An open source framework making Firebase web development faster to start and maintain.</h3>
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
              Requirements: Node and Firebase CLI.
              <nuxt-link to="/docs/getting-started">More information here.</nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pt-4 pb-4">
      <v-container>
        <div class="display-1 text-center mb-4">Why Firelayer</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature1.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Boilerplate
            </div>
            <div class="body-1 pt-2">
              Start developing your application quicker with out of the box Landing Page and API
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
              Ready to use addons for your Cloud Functions.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!--
    <section class="white text-center pt-2">
      <v-container>
        <div class="display-1 font-weight-bold"><span class="primary--text">Firelayer</span> Newsletter</div>
        <p class="mt-2">Get the latest Firelayer news to your inbox.</p>
        <div class="d-flex justify-center align-top" style="max-width: 600px; margin:auto;">
          <v-text-field outlined class="mr-2" placeholder="Email"></v-text-field>
          <v-btn x-large color="primary">
            Subscribe
          </v-btn>
        </div>
      </v-container>
    </section> -->
  </div>
</template>

<script>
import LandingShell from '../components/common/LandingShell'

export default {
  components: {
    LandingShell
  },
  data() {
    return {}
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
</style>
