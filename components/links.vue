<template>
  <div class="links">
    <ul class="links__list">
      <li v-if="data.twitter.value" class="links__list-item" data-kontent-element-codename="twitter">
        <a
          :href="`https://www.twitter.com/${data.twitter.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-twitter" />
        </a>
      </li>
      <li v-if="data.github.value" class="links__list-item" data-kontent-element-codename="github">
        <a
          :href="`https://www.github.com/${data.github.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-github" />
        </a>
      </li>
      <li v-if="data.vk.value" class="links__list-item" data-kontent-element-codename="vk">
        <a
          :href="`https://www.vk.com/${data.vk.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-vkontakte" />
        </a>
      </li>
    </ul>
    <ul class="links__list">
      <li v-if="data.email.value" class="links__list-item" data-kontent-element-codename="email">
        <a :href="`mailto:${data.email.value}`">
          <i class="icon-mail" />
        </a>
      </li>
      <li v-if="data.telegram.value" class="links__list-item" data-kontent-element-codename="telegram">
        <a :href="`telegram:${data.telegram.value}`">
          <i class="icon-paper-plane" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  props: ['data']
})
</script>

<style lang="scss">
@import "../static/scss/variables";
@import "../static/scss/mixins";

.links {
    @include margin-bottom(1);
    &__list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 10px -3px;
        &-item {
            padding: 0;
            margin: 0 3px;
            height: 24px;
            width: 24px;
            line-height: 24px;
            border-radius: 3px;
            text-align: center;
            background: $color-gray-bg;
            & a {
                border: 0;
                & i {
                    font-size: 14px;
                    color: lighten($color-base, 20%);
                }
                &:hover,
                &:focus {
                    & i {
                        color: $color-base;
                    }
                }
            }
        }
    }
}

</style>