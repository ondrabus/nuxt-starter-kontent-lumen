<template>
  <div>
    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
          <h1>Page not found</h1>
          <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
