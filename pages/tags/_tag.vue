<template>
  <div>
    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
        <div class="page" v-if="!$fetchState.pending">
            <h1 class="page__title">
              All Articles tagged as &quot;{{tag.title.value}}&quot;
            </h1>
            <div className="page__body">
              <Article v-for="article in articles" v-bind:key="article.system.id" :data="article" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import Vue from 'vue'
import * as KontentDelivery from '@kentico/kontent-delivery'
import { Article } from '~/models/article'
import { Tag } from '~/models/tag'

export default Vue.extend({
  data() {
    return {
        articles: [] as Article[],
        tag: new Tag()
    }
  },
  async fetch () {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;

    const tag = await client
      .items<Tag>()
      .type('tag')
      .equalsFilter('elements.slug', this.$nuxt.context.params.tag)
      .toPromise();

    if (tag.items.length !== 1)
    {
      console.log(`Tag ${this.$nuxt.context.params.tag} was not found`);
      // 404
      return;
    }

    this.tag = tag.items[0];

    const articles = await client
      .items<Article>()
      .type('article')
      .toPromise();
    
    this.articles = articles.items.filter(a => a.tags.value.some(t => t.slug.value == this.$nuxt.context.params.tag));
  }
})
</script>