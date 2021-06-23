import { TypeResolver, ContentItem } from '@kentico/kontent-delivery';
import { Article } from '../models/article'
import { Author } from '../models/author'
import { Category } from '../models/category'
import { Tag } from '../models/tag'
import { Menu } from '../models/menu'
import { MenuItem } from '../models/menu-item'
import { SiteMetadata } from '~/models/site-metadata';
import { Page } from '~/models/page'

export default function ({ store, app, $deliveryClient }) {
    $deliveryClient.config.typeResolvers = [
        new TypeResolver('article', (rawData) => new Article),
        new TypeResolver('author', (rawData) => new Author),
        new TypeResolver('category', (rawData) => new Category),
        new TypeResolver('tag', (rawData) => new Tag),
        new TypeResolver('menu', (rawData) => new Menu),
        new TypeResolver('menu_item', (rawData) => new MenuItem),
        new TypeResolver('site_metadata', (rawData) => new SiteMetadata),
        new TypeResolver('page', (rawData) => new Page)
    ]
}