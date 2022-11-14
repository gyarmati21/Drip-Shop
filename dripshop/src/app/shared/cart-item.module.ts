import { Product } from "./product/product.module";

export class CartItem {
  product : Product;
  size: string;
  quantity: number;
}
