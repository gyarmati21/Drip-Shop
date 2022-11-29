import { Timestamp } from "@angular/fire/firestore";

export class Order { 
  address: string;
  carts: []
  date: Timestamp;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
