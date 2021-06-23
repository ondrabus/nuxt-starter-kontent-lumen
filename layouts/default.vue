<template>
  <div class="layout" :data-kontent-project-id="projectId" data-kontent-language-codename="en-US">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      projectId: process.env.KONTENT_PROJECT_ID
    }
  },
})
</script>

<style lang="scss">

@import "../static/scss/variables";
@import "../static/scss/mixins";

.layout {
    max-width: $layout-width;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
}

.layout > div {
  display: flex;
  flex-direction: row;
}

.layout > div > div {
    margin: 0 auto;
}
    
@include breakpoint-sm {
    .layout {
        flex-direction: row;
    }
}
</style>