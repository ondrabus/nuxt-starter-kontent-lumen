<template>
  <div>
    <Sidebar :isHomePage="true" />
    <div class="content">
      <div class="content__inner">
        <Article v-for="article in articles" :data="article" :key="article.system.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as KontentDelivery from '@kentico/kontent-delivery'
import { Article } from '../models/article'

export default Vue.extend({
  data() {
    return {
      articles: [] as Article[]
    }
  },
  async fetch () {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;
    const articles = await client
      .items<Article>()
      .type('article')
      .toPromise();
    this.articles = articles.items;
  }
})
</script>
