import { Timestamp } from "@angular/fire/firestore";

export class Order { 
  address: string;
  date: Timestamp;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
