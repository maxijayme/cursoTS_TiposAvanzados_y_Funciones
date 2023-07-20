import { Category } from "../categories/category.model";
import { Base } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends Base{
  name: string;
  stock: number;
  category: Category;
  color: string,
  isNew: boolean,
  tags: string[],
  precio: number,
  imagen: string,
  size?: Sizes;
}