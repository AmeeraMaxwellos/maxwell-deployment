import { IBrand } from './brand.model';
import { ICategory } from './category.model';

export interface IProductList {
  total_products: number;
  filters: IFilters;
  products: IProduct[];
}

export interface IFilters {
  options: { [key: string]: string[] };
  categories: ICategory[];
  brands: IBrand[];
  min_price: string;
  max_price: string;
}

export interface IFilterOption {
  value: string;
  code: string;
}
export interface IProduct {
  id: number;
  title: string;
  subtitle?: string;
  short_description?: string;
  slug: string;
  description: string;
  seo_title: string | null;
  seo_description?: string;
  thumbnail: string;
  thumbnail_alt_text: string | null;
  additional_info: string;
  category?: ICategory;
  brand?: IBrand;
  variants: IVariant[];
  options: IOption[];
}

export interface IVariant {
  id: number;
  title: string;
  meta_data: string | null;
  maximum_price: string;
  selling_price: string;
  tax: string;
  currency: string;
  option_values: IOptionValue[];
  inventory_quantity: number;
  images: string[];
}

export interface IOptionValue {
  option: number;
  value: string;
  code: string;
}

export interface IOption {
  id: number;
  title: string;
}
