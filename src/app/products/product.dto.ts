import { Product } from "./product.model";

export interface CreateProductDTO extends Omit <Product,'id'|'createdAt'|'updatedAt'|'category' >{ // Omit es un utility type que crea un nuevo objeto y omitir propiedades
  categoryId:string;
}


type examplePick = Pick<Product, 'color' | 'precio'>;
