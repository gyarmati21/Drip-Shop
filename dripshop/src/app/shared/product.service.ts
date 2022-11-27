import { Injectable, resolveForwardRef } from "@angular/core";
import { IProduct } from "./interfaces/product.interface";
import {
  AngularFirestore,
  DocumentChangeAction,
  QuerySnapshot,
} from "@angular/fire/compat/firestore";
import { map, observable, Observable, take } from "rxjs";
import { Product } from "./models/product.model";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  formData: Product;

  constructor(private firestore: AngularFirestore) {}

  getProducts(): Observable<Product[]> {
    return this.firestore
      .collection("product")
      .snapshotChanges()
      .pipe(
        map((snapShot) => {
          return snapShot.map((item) => {
            const data = item.payload.doc.data() as Product;

            return <Product>{
              id: item.payload.doc.id,
              category: data.category,
              drip: data.drip,
              imageURL: data.imageURL,
              name: data.name,
              price: data.price,
            };
          });
        })
      );
  }

  //Product managment
  //Get product az összes productot lekéri
  //get product id alapjám

  createProduct(data: Product) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("product")
        .add(data)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  updateProduct(data: Product) {
    let productId = data.id;

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("product")
        .doc(productId)
        .update(data)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  deleteProduct(data: Product) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("product")
        .doc(data.id)
        .delete()
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }
}
