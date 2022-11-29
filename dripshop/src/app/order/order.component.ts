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
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { serverTimestamp } from '@angular/fire/firestore';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  user: User;
  constructor(private router: Router, private toast: HotToastService,public service: OrderService , private firestore: AngularFirestore ,private afAuth: AngularFireAuth, private authService: AuthenticationService, private auth: Auth, private store: AngularFirestore) {}

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
  
  cartitemtoarray(cartlista: Array<CartItem>) {
    var templista = []
    for(let i = 0; i < cartlista.length; i++) {
      templista.push({
 
          "productID" :cartlista[i].product.id,
          "quantity": cartlista[i].quantity,
          "size": cartlista[i].size
        
      })
    }
    return templista;
  }

  onSubmit(form: NgForm){
    let cart = this.cartitemtoarray(this.cartList)

    let data  = {
    "address": form.value.address ,
    "cart": cart, 
    "date": serverTimestamp(),
    "email": form.value.email, 
    "firstName": form.value.firstName, 
    "lastName":  form.value.lastName,
    "phoneNumber": form.value.phone,
  };
    form.form.markAsUntouched();

    if(data.address.length == 0 || data.cart.length  == 0
      || data.email.length == 0 || data.firstName.length == 0 ||
      data.lastName.length == 0 || data.phoneNumber.length == 0
      ) {
        this.toast.error('Something went wrong!');
      }
    else {
      this.createOrder(data).then(()=>{
        form.form.markAsUntouched();
        form.resetForm();
        this.showSuccess()
        this.router.navigate(['/products']);
      });
    }
  }
  
  showSuccess() {
    this.toast.success('Order was Succesful');
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
