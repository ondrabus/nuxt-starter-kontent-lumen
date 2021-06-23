import { ContentItem, Elements } from '@kentico/kontent-delivery'

export class Author extends ContentItem {
    public name?: Elements.TextElement;
    public bio!: Elements.TextElement;
    public asset!: Elements.AssetsElement;
    public email?: Elements.TextElement;
    public telegram?: Elements.TextElement;
    public twitter?: Elements.TextElement;
    public github?: Elements.TextElement;
    public rss?: Elements.TextElement;
    public vk?: Elements.TextElement;
}