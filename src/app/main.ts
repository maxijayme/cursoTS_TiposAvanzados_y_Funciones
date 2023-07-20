import { addProduct, products } from "./products/product.service";
import crypto from 'crypto';
import { faker } from '@faker-js/faker/locale/es';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

for (let index = 0; index < 50; index++) {
  addProduct({
    id: crypto.randomUUID(),
    name: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.future(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.word.words(5).split(" "),
    precio: parseInt(faker.commerce.price()),
    imagen: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L','XL']),
    category:{
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.future(),
      name: faker.commerce.department()
    }
  })
}


console.log(products)