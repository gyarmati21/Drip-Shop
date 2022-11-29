import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
  QuerySnapshot,
} from "@angular/fire/compat/firestore";
import { Order } from './order.module';
import { distinct, map, mergeAll, observable, Observable, of, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private firestore: AngularFirestore) { }

  createOrder(data: Order) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("order")
        .add(data)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

}
