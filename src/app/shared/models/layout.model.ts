import { IBrand } from "./brand.model";
import { ICategory } from "./category.model";
import { ICollection } from "./collection.model";

export interface ILayout {
    id: number;
    title: string;
    view_more_action: boolean;
    categories: ICategory[];
    collection: ICollection;
    brands: IBrand[];
    products: string[];
}
