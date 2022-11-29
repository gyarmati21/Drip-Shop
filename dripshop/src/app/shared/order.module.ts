import { Timestamp } from "@angular/fire/firestore";
import { CartItem } from "./cart-item.module";

export class Order { 
  address: string;
  cart: Array<any>;
  date: any;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
