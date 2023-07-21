import { Product } from "./product.model";

export interface CreateProductDTO extends Omit <Product,'id'|'createdAt'|'updatedAt'|'category' >{ // Omit es un utility type que crea un nuevo objeto y omitir propiedades
  categoryId:string;
}


type examplePick = Pick<Product, 'color' | 'precio'>; // Pick es un utility type para seleccionar aquellos atributos que me interesan de otro objeto

export interface UpdateProductDTO extends Partial <CreateProductDTO>{} // Partial es un utility type que deja todos los atributos como opcionales

type exampleRequired = Required <Product> // Required es un utility type que hace que todas las propiedades sean obligatorias

// export interface FindProductDTO extends Readonly <Partial<Product>>{} //Readonly es un utility type que deja todos los atributos como solo lectura 'readonly'

//* Omito 'tags' y todos los parametros actuales serán opcionales y de solo lectura.
//* Sin embargo vuelvo a agregar 'tags' manualmente para decirle que será un array de solo lectura.
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //* Al haberse omitido 'tags' con anterioridad, no se le aplican los efectos de Readonly y Partial,
  //* por lo que necesito volver a aplicar readonly y - ? -
  //* readonly evita que se pueda reasignar | ReadonlyArray evita que se pueda modificar con métodos
  readonly tags?: ReadonlyArray<string>;
}