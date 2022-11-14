import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalPrice = this.calculatePrice();

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

  onSubmit() {
    this.router.navigateByUrl("/order");
  }

}
