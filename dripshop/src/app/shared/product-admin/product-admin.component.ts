import { Component, OnInit } from '@angular/core';
import { Product } from "../product/product.module";
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit { 

  constructor(private firestore: AngularFirestore) { }

  createProduct(data: Product) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("products")
        .add(data)
        .then(res => {resolve(res)}, err => reject(err))
    });
  }

  getProducts(order: string, direction: "asc" | "desc"){
    return this.firestore.collection("products", ref => ref.orderBy(order, direction).limit(63)).snapshotChanges();
  }

  updateProduct(data: Product){
    let productId = data.id;

    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("products")
        .doc(productId)
        .update(data)
        .then(res => {resolve(res)}, err => {reject(err)});
    });
  }

  deleteProduct(data: Product){
    return new Promise<any>((resolve,reject) => {
      this.firestore.collection("products")
        .doc(data.id).delete()
        .then(res => {resolve(res)}, err => {reject(err)});
    });
  }

  ngOnInit(): void {
  }

}
