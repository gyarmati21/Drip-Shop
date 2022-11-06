import { Injectable, resolveForwardRef } from '@angular/core';
import { Product } from "./product.module";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore : AngularFirestore) {  }

  getProducts(){
    return this.firestore.collection("product").snapshotChanges();
  }

  //Product managment

  createProduct(data : Product){
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("products")
        .add(data)
        .then(res => {resolve(res)}, err => reject(err));
    });
  }

  updateProduct(data: Product){
    let productId = data.id;

    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("products")
        .doc(productId)
        .update(data)
        .then(res => {resolve(res)}, err => reject(err));
    });
  }

  deleteProduct(data: Product){
    return new Promise<any>((resolve,reject) => {
      this.firestore.collection("products")
        .doc(data.id).delete()
        .then(res => {resolve(res)}, err => reject(err));
    });
  }
}
