<template>
  <div>
    <!-- landing section -->
    <section class="white pb-6">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" md="6" class="mt-md-7">
            <h1 class="display-2" style="line-height: 1.3;" :class="{'display-1': $vuetify.breakpoint.xs}">Jump-start your <span class="primary--text">Firebase</span> Web Project</h1>
            <h3 class="body-1 font-weight-bold mt-3">Build your next Firebase application with the help of Firelayer. An open source toolkit with out-of-the-box:</h3>
            <ul class="text-left mt-1 body-1 primary--text font-weight-black">
              <li>Administration Dashboard</li>
              <li>Landing Page</li>
              <li>Serverless API for Cloud Functions with examples</li>
              <li>CLI Tools to help develop and maintain your project</li>
            </ul>
            <div class="mt-6 text-center text-md-left">
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
        <div class="display-1 text-center mb-4">Starter Template</div>
        <v-row>
          <v-col cols="12" md="4">
            <div class="title text-center font-weight-black text-uppercase mb-2">
              Admin Dashboard
            </div>
            <v-card>
              <v-img
                class="white--text align-end"
                height="234px"
                contain
                src="/images/admin-print.png"
                @click="openPopup('/images/admin-print.png')"
              >
              </v-img>
            </v-card>
            <div class="body-1 pt-2">
              <div class="mb-2">Build with ease on top of this boilerplate dashboard.</div>
              <!-- <div class="my-2 flex align-end">
                <v-btn color="secondary" href="https://firelayer-starter-admin.web.app/" target="_blank">Demo</v-btn>
              </div> -->
              <span class="font-weight-bold">Features:</span>
              <ul>
                <li>Firebase Users Management</li>
                <li>Send auth emails with SendGrid</li>
                <li>Vue & Vuetify Components</li>
                <li>Responsive</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="title text-center font-weight-black text-uppercase mb-2">
              Landing Page
            </div>
            <v-card>
              <v-img
                class="white--text align-end"
                height="234px"
                src="/images/nuxt-print.jpg"
                @click="openPopup('/images/nuxt-print.jpg')"
              >
              </v-img>

            </v-card>
            <div class="body-1 pt-2">
              <div>Website with example pages. Comes with i18n support and Vuetify.</div>
              <div class="my-2 flex align-end">
                <v-btn color="secondary" href="https://firelayer-starter-template.web.app/" target="_blank">Demo</v-btn>
              </div>
              <span class="font-weight-bold">Features:</span>
              <ul>
                <li>Sign In, register, verify email and reset password</li>
                <li>User Dashboard</li>
                <li>Localization</li>
                <li>Vue with Nuxt & Vuetify Components</li>
                <li>Responsive</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="title text-center font-weight-black text-uppercase mb-2">
              CLI Tools
            </div>
            <v-card height="234px">
              <v-img
                class="white--text align-end"
                height="234px"
                src="/images/cli-print.png"
                @click="openPopup('/images/cli-print.png')"
              >
              </v-img>

            </v-card>
            <div class="body-1 pt-2">
              <div class="mb-2">CLI Tools to help develop and maintain your project.</div>
              <span class="font-weight-bold">Features:</span>
              <ul>
                <li>Run Cloud Firestore migrations</li>
                <li>Switch maintenance mode</li>
                <li>Deploy cloud functions env and storage cors</li>
                <li>Get user information</li>
                <li>Add other boilerplate templates to current project</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="pt-4 pb-4 white">
      <v-container>
        <div class="display-1 text-center">Firebase Cloud Functions</div>
        <div class="headline text-center mb-4">Examples On</div>
        <v-row>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature1.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Serverless API
            </div>
            <div class="body-1 pt-2">
              <ul>
                <li>Express API</li>
                <li>Firebase Auth Middleware</li>
                <li>Protected Routes with Permissions Middleware</li>
                <li>User Model and Controller</li>
                <li>Lazy loaded routes</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature2.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Triggers
            </div>
            <div class="body-1 pt-2">
              Cloud Functions trigger callbacks for events like Cloud Firestore document creation, Firebase Authentication user creation, Reatime Database documents updates and many more.
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img class="mb-5" height="160px" contain src="/images/features/feature3.svg"></v-img>
            <div class="title text-center font-weight-black text-uppercase">
              Scheduled Jobs
            </div>
            <div class="body-1 pt-2">
              Scheduled functions with PubSub and Google Cloud Scheduler. Run a ping service every 5 minutes to keep your Cloud Functions alive, or even run queries on your Firestore every day.
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
                src="/images/nuxt-print.jpg"
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
              <v-btn color="secondary" href="https://firelayer-starter-template.web.app" target="_blank">Demo</v-btn>
              <v-btn
                color="secondary"
                href="https://github.com/firelayer/starter-template"
                target="_blank"
                class="ml-1"
              >
                <v-icon left>mdi-github</v-icon>
                Github
              </v-btn>
            </div>
            <div class="body-1 pt-2">
              Default template on <code>firelayer init</code> comes with an Administration Dashboard and Express API with user management, examples on firebase triggers and example on pubsub scheduler. Landing page website with example pages. Comes with i18n support and Vuetify.
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

    <section class="white text-center pt-4">
      <v-container>
        <div class="display-1 font-weight-bold"><span class="primary--text">Firelayer</span> Newsletter</div>
        <p class="mt-2">Get the latest Firelayer news to your inbox.</p>
        <newsletter-form />
      </v-container>
      <v-divider class="mt-2"></v-divider>
    </section>

    <!-- popup image -->
    <v-dialog
      v-model="showPopup"
      width="800"
    >
      <v-card @click="showPopup = false">
        <v-img
          class="white--text align-end"
          contain
          :src="screenshot"
        >
        </v-img>
      </v-card>
    </v-dialog>
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
  },
  data() {
    return {
      screenshot: '',
      showPopup: false
    }
  },
  methods: {
    openPopup(image) {
      this.screenshot = image
      this.showPopup = true
    }
  }
}
</script>

<style lang="scss" scoped>
.template-box {
  background-color: #2d3748;
  font-weight: bold;
  font-size: 0.875rem;
  color: lighten($primary, 10%);
}
</style>
