import { Product } from "../products/product.model";
import { User } from "../users/users.model";
import { Base } from "../base.model";


export interface Order extends Base{
  user : User;
  product: Product;
}