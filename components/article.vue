<template>
  <div class="article" :data-kontent-item-id="data.system.id">
    <div class="article__meta">
      <time
        class="article__meta-time"
        :dateTime="moment(data.date.value).format('MMMM D, YYYY')"
        data-kontent-element-codename="date"
      >
        {{ moment(data.date.value).format("MMMM YYYY") }}
      </time>
      <span class="article__meta-divider" />
      <span
        class="article__meta-category"
        :key="data.category.value[0].slug.value"
        data-kontent-element-codename="category"
      >
        <nuxt-link
          :to="`/categories/${data.category.value[0].slug.value}/`"
          class="article__meta-category-link"
        >
          {{ data.category.value[0].title.value }}
        </nuxt-link>
      </span>
    </div>
    <h2 class="article__title" data-kontent-element-codename="title">
      <nuxt-link class="article__title-link" :to="`/article/${data.slug.value}`">
        {{ data.title.value }}
      </nuxt-link>
    </h2>
    <p class="article__description" data-kontent-element-codename="content" v-html="data.content.value.substr(3, Math.min(200, data.content.value.length - 6))"></p>
    <nuxt-link class="article__readmore" :to="`/article/${data.slug.value}`">
      Read
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  props: ["data"],
  data(){
    return {
      moment: moment
    }
  }
});
</script>

<style lang="scss">
@import "../static/scss/variables";
@import "../static/scss/mixins";

.article {
    @include margin-bottom(1.25);
    &:last-child {
        @include margin-bottom(.5);
    }
    &__title {
        font-size: $typographic-base-font-size * 1.6875;
        @include line-height(1.5);
        @include margin-top(0);
        @include margin-bottom(.5);
        &-link {
            color: $color-base;
            &:hover,
            &:focus {
                color: $color-base;
                border-bottom: 1px solid $color-base;
            }
        }
    }
    &__description {
        font-size: $typographic-base-font-size;
        @include line-height(1);
        @include margin-bottom(.75);
    }
    &__meta {
        &-time {
            font-size: $typographic-small-font-size;
            color: $color-base;
            font-weight: 500;
            text-transform: uppercase;
        }
        &-divider {
            margin: 0 5px;
        }
        &-category {
            &-link {
                font-size: $typographic-small-font-size;
                color: $color-secondary;
                font-weight: 500;
                text-transform: uppercase;
                &:hover,
                &:focus {
                    color: $color-primary;
                }
            }
        }
    }
    &__readmore {
        font-size: $typographic-base-font-size;
        color: $color-primary;
        &:hover,
        &:focus {
            color: $color-primary;
            border-bottom: 1px solid $color-primary;
        }
    }
}
</style>