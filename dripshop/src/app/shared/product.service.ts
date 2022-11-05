import { Injectable } from '@angular/core';
import { Product } from "./product.module";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore : AngularFirestore) {  }
}
