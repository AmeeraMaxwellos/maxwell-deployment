export interface ICategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    seo_title: string;
    seo_description: string;
    thumbnail: string;
    thumbnail_alt_text: string;
    parent: number;
}
