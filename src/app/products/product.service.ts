import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDTO } from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.future(),
    category:{
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
      name: faker.commerce.department()
    }
  }
  products.push(newProduct)
  return newProduct;
}