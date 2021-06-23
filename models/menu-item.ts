import { ContentItem, Elements } from '@kentico/kontent-delivery'

export class MenuItem extends ContentItem {
    public label?: Elements.TextElement;
    public slug?: Elements.UrlSlugElement;
    public content?: Elements.LinkedItemsElement;
}