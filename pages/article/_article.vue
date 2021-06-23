<template>
    <article-detail v-if="!$fetchState.pending" :data="article" :author="author" :metadata="metadata" />
</template>

<script lang="ts">

import Vue from 'vue'
import * as KontentDelivery from '@kentico/kontent-delivery'
import { Article } from '~/models/article'
import { Author } from '~/models/author'
import { SiteMetadata } from '~/models/site-metadata'

export default Vue.extend({
  data() {
    return {
        article: new Article(),
        author: new Author(),
        metadata: new SiteMetadata()
    }
  },
  async fetch () {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;
    const article = await client
      .items<Article>()
      .type('article')
      .equalsFilter('elements.slug', this.$nuxt.context.params.article)
      .toPromise();
    
    if (article.items.length != 1)
    {
        // 404
        return;
    }
    
    this.article = article.items[0];
    
    const author = await client
      .item<Author>('author')
      .toPromise();
    this.author = author.item;

    const metadata = await client
        .item<SiteMetadata>('site_metadata')
        .toPromise();
    this.metadata = metadata.item;

  }
})
</script>