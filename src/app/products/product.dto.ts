import { Product } from "./product.model";

export interface CreateProductDTO extends Omit <Product,'id'|'createdAt'|'updatedAt'|'category' >{ // Omit es un utility type que crea un nuevo objeto y omitir propiedades
  categoryId:string;
}


type examplePick = Pick<Product, 'color' | 'precio'>; // Pick es un utility type para seleccionar aquellos atributos que me interesan de otro objeto

export interface UpdateProductDTO extends Partial <CreateProductDTO>{} // Partial es un utility type que deja todos los atributos como opcionales

type exampleRequired = Required <Product> // Required es un utility type que hace que todas las propiedades sean obligatorias