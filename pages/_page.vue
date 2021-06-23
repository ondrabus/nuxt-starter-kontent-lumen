<template>
  <div>
    <Sidebar :isHomePage="true" />
    <div class="content">
      <div class="content__inner">
        <div v-if="!$fetchState.pending" class="page" :data-kontent-item-id="menuItem.content.value[0].system.id">
          <h1 class="page__title" data-kontent-element-codename="title">
            {{ menuItem.content.value[0].title.value }}
          </h1>
          <div
            class="page__body"
            data-kontent-element-codename="description"
            v-html="menuItem.content.value[0].description.value"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as KontentDelivery from "@kentico/kontent-delivery";
import { MenuItem } from "~/models/menu-item";

export default Vue.extend({
  data() {
    return {
      menuItem: new MenuItem()
    };
  },
  async fetch() {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;
    const menuItem = await client
      .items<MenuItem>()
      .type("menu_item")
      .equalsFilter("elements.slug", this.$nuxt.context.params.page)
      .depthParameter(2)
      .toPromise();

    if (menuItem.items.length !== 1) {
      if (process.server){
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error('Post not found')
    }

    this.menuItem = menuItem.items[0];
  }
});
</script>