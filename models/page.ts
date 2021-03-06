import { ContentItem, Elements } from '@kentico/kontent-delivery'

export class Page extends ContentItem {
    public title!: Elements.TextElement;
    public meta_description!: Elements.TextElement;
    public description!: Elements.RichTextElement;
}