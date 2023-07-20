import { addProduct, products } from "./products/product.service";
import crypto from 'crypto';
import { faker } from '@faker-js/faker/locale/es';

for (let index = 0; index < 50; index++) {
  addProduct({
    name: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.word.words(5).split(" "),
    precio: parseInt(faker.commerce.price()),
    imagen: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L','XL']),
    categoryId: faker.string.uuid(),
  })
}


console.log(products)