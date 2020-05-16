<template>
  <div>
    <section id="templates" class="pt-4 pb-4">
      <v-container>
        <h1 class="display-1 text-center">Firelayer Templates for Firebase</h1>
        <div class="headline text-center mt-2 mb-4">Bootstrap your projects with one of these templates</div>
        <templates-block />
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
      width="900"
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
import TemplatesBlock from '../../components/TemplatesBlock'
import NewsletterForm from '../../components/NewsletterForm'

export default {
  components: {
    TemplatesBlock,
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
  },
  head() {
    const title = 'Firelayer Templates for Firebase'
    const description = 'Firelayer Templates for Firebase, Jump-start your Firebase Project, launch your Firebase MVP 10x faster with our templates'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title }
      ]
    }
  }
}
</script>
