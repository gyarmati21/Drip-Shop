import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FieldPath } from 'firebase/firestore';
import { map, switchMap, of, observable, tap } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CartItem } from '../shared/cart-item.module';
import { User } from '../shared/user.module';
import { NgForm } from "@angular/forms";
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.module';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  user: User;
  constructor(public service: OrderService  ,private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) {}

  cartList: Array<CartItem> = this.authService.cartContent;

  ngOnInit(): void {
      authState(this.auth).pipe(
        map(user => user?.uid), 
        map(uid => (uid) ? this.store.collection<User>("user").doc(String(uid)).get() : null),
        switchMap(snapshot => (snapshot) ? snapshot.pipe( map(snapshot => snapshot.data()) ) : of(undefined))
      ).subscribe(user => {
        (user)?  this.user = user : undefined
      });
  }
  

  onSubmit(form: NgForm){
    let data = form.value
    data.cart =  this.cartList;
    form.form.markAsUntouched();
    console.log(data);
    this.createOrder(data)
  }
  
  createOrder(data: Order) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("order")
        .add(data)
        .then(res => {resolve(res)}, err => reject(err))
    });
  }
  

}
