<template>
  <div>
    <section id="templates" class="pt-4 pb-4">
      <v-container>
        <div class="display-1 text-center">Templates</div>
        <div class="headline text-center mb-4">Bootstrap your projects with one of these templates</div>
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
  }
}
</script>
