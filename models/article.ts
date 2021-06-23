import { ContentItem, Elements } from '@kentico/kontent-delivery'
import { Category } from './category';
import { Tag } from './tag'

export class Article extends ContentItem {
    public title!: Elements.TextElement;
    public description?: Elements.TextElement;
    public content!: Elements.RichTextElement;
    public date!: Elements.DateTimeElement;
    public category!: Elements.LinkedItemsElement<Category>;
    public tags!: Elements.LinkedItemsElement<Tag>;
    public slug!: Elements.UrlSlugElement;
}