import { faker } from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDTO, FindProduct, UpdateProductDTO } from './product.dto';
import crypto from 'crypto';

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

export const updateProduct = (id:string, changes: UpdateProductDTO):Product =>{
  const index = products.findIndex(prod => prod.id === id);
  const prevData = products[index]
  products[index]={
    ...prevData,
    ...changes,
    createdAt: new Date()
  }
  return products[index]
}

export const findProduct = (data:FindProduct):Product[]=>{
  const filteredProduct = products.filter( prod => prod.color === data.color);
  return filteredProduct
}