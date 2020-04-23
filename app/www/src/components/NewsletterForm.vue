<template>
  <v-form ref="form" v-model="isFormValid" lazy-validation @submit.prevent>
    <div v-if="!isSubscribed" class="d-flex flex-column flex-md-row justify-center align-top mx-auto" style="max-width: 600px;">
      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        :validate-on-blur="false"
        :error="error"
        :error-messages="errorMessages"
        :disabled="isLoading"
        outlined
        class="mr-md-2"
        placeholder="Email"
        @keyup.enter.prevent="submit"
        @change="resetErrors"
      ></v-text-field>
      <v-btn x-large :loading="isLoading" color="primary" @click="submit">
        Subscribe
      </v-btn>
    </div>
    <div v-else class="headline pa-3 primary--text">
      Thank you for subscribing!
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'NewsletterForm',
  data() {
    return {
      isSubscribed: false,
      isLoading: false,
      isFormValid: true,
      email: '',
      error: false,
      errorMessages: '',
      rules: {
        required: (value) => !!value || 'E-mail is required',
        email: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
      }
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.subscribe(this.email)
      }
    },
    async subscribe(email) {
      try {
        await this.$axios.post('/subscribe', {
          email
        })

        this.isSubscribed = true
      } catch (error) {
        const { code, message } = error

        this.error = true
        this.errorMessages = error.response.data.message
      }

      this.isLoading = false
    },
    resetErrors() {
      this.error = false
      this.errorMessages = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
