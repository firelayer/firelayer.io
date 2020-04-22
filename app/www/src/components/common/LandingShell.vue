<template>
  <div class="shell">
    <div class="shell-bar">
      <span class="shell-bar-action shell-bar-action--red"></span>
      <span class="shell-bar-action shell-bar-action--yellow"></span>
      <span class="shell-bar-action shell-bar-action--green"></span>
    </div>
    <div class="shell-content">
      <div>
        <span class="noselect">$ </span>
        <copy-label text="npm install -g @firelayer/cli">
          npm install -g @firelayer/cli
        </copy-label>
      </div>
      <div class="etc noselect">$ ..install firelayer globally</div>
      <div>
        <span class="noselect">$ </span>
        <copy-label text="firelayer init blog">
          firelayer init blog
        </copy-label>
      </div>
      <div class="etc noselect">$ ..follow the installation prompts</div>
      <div>
        <span class="noselect">$ </span>
        <copy-label text="cd blog">
          cd blog
        </copy-label>
      </div>
      <div class="etc noselect">$ ..new project created on folder blog</div>
      <div>
        <span class="noselect">$ </span>
        <copy-label text="cd blog">
          yarn dev
        </copy-label>
      </div>
      <div class="etc noselect">$ ..and develop away</div>
    </div>
  </div>
</template>

<script>
import CopyLabel from './CopyLabel'

export default {
  components: {
    CopyLabel
  }
}
</script>

<style lang="scss" scoped>
.shell {
  text-align: left;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #2d3748;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &-bar {
    display: flex;

    &-action {
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 100%;
      margin-right: 8px;

      &--green {
        background-color: #48bb78;
      }

      &--red {
        background-color: #f56565;
      }

      &--yellow {
        background-color: #fbd38d;
      }
    }
  }

  &-content {
    padding: 20px 0 10px 0;
    color: #edf2f7;
    font-family: monospace;
    font-weight: 600;
    font-size: 0.875rem;

    .etc {
      color: #8294a4;
      font-weight: 500;
      font-size: 0.875rem;
    }

    @include media("md-and-up") {
      font-size: 1rem;
    }
  }
}

.noselect {
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}
</style>
