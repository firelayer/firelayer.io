<template>
  <div ref="copylabel" class="copylabel faster" @click.stop.prevent="copy">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    toastText: {
      type: String,
      default: 'Copied to clipboard!'
    },
    animation: {
      type: String,
      default: 'tada'
    }
  },
  methods: {
    copy() {
      this.$animate(this.$refs.copylabel, this.animation)
      this.$clipboard(this.text, this.toastText)
    }
  }
}
</script>

<style lang="scss" scoped>
.copylabel {
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px dashed #8294a4;
}
</style>
