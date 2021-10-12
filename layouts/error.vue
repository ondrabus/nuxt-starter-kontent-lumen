<template>
  <div class="layout">
    <Nuxt />
  </div>
</template>

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