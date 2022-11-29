import { Timestamp } from "@angular/fire/firestore";
import { CartItem } from "./cart-item.module";

export class Order { 
  address: string;
  cart: Array<CartItem>;
  date: Timestamp;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
