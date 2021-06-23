<template>
    <nav class="menu">
      <ul class="menu__list">
        <li v-for="item in menuItems" class="menu__list-item" :key="item.system.id">
          <nuxt-link 
            :to="`${item.slug.value.startsWith('/') ? '' : '/'}${item.slug.value}`"
            class="menu__list-item-link"
          >
            {{item.label.value}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>
<script lang="ts">

import Vue from 'vue'
import * as KontentDelivery from '@kentico/kontent-delivery'
import { Menu } from '../models/menu'
import { MenuItem } from '../models/menu-item'

export default Vue.extend({
  data() {
    return {
      menuItems: [] as MenuItem[]
    }
  },

  async fetch () {
    const client: KontentDelivery.DeliveryClient = this.$nuxt.context.app.$deliveryClient;
    const menuItems = await client
      .item<Menu>('navigation_menu')
      .depthParameter(2)
      .toPromise();
    this.menuItems = menuItems.item.menu_items.value;
  }
})
</script>

<style lang="scss">
@import "../static/scss/variables";
@import "../static/scss/mixins";

.menu {
    @include margin-bottom(1);
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        &-item {
            padding: 0;
            margin: 10px 0;
            &-link {
                font-size: $typographic-base-font-size;
                color: $typographic-base-font-color;
                font-weight: 400;
                border: 0;
                &:hover,
                &:focus {
                    color: $color-primary;
                    border-bottom: 1px solid $color-primary;
                }
                &--active {
                    color: $color-base;
                    border-bottom: 1px solid $color-base;
                }
            }
        }
    }
}

</style>