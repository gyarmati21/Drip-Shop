import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SizesObject } from '../shared/sizes'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalPrice = this.calculatePrice();
  testQuantitiy = 2;
  sizes = SizesObject;


  constructor(private router : Router, private userv: AuthenticationService) { }

  ngOnInit(): void {
  }

  getCartItems() {
    
  }

  deleteCartItem() { /*deleteCartItem(item : CartItem)*/

  }

  calculatePrice() {
      return 1500;
  }

  decreaseQunatitiy() {
    if (this.testQuantitiy > 0) {
      this.testQuantitiy--;
    }
  }

  increaseQunatitiy() {
    this.testQuantitiy++;
  }

  onSubmit() {
    this.router.navigateByUrl("/order");
  }

}
