<template>
  <div>
    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
        <Article v-for="article in articles" v-bind:key="article.system.id" :data="article" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import Vue from 'vue'
import * as KontentDelivery from '@kentico/kontent-delivery'
import { Article } from '~/models/article'
import { Category } from '~/models/category'

export default Vue.extend({
  data() {
    return {
        articles: [] as Article[],
        category: new Category()
    }
  },
  async fetch () {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;

    const category = await client
      .items<Category>()
      .type('category')
      .equalsFilter('elements.slug', this.$nuxt.context.params.category)
      .toPromise();

    if (category.items.length !== 1)
    {
      // 404
      return;
    }

    this.category = category.items[0];

    const articles = await client
      .items<Article>()
      .type('article')
      .toPromise();
    
    this.articles = articles.items.filter(a => a.category.value.some(c => c.slug.value == this.$nuxt.context.params.category));
  }
})
</script>