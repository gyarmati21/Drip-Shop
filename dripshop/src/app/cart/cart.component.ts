import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.module';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { SizesObject } from '../shared/sizes'; 
import { Product } from '../shared/models/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalPrice = this.calculatePrice();
  testQuantitiy = 2;
  sizes = SizesObject;


  constructor(private router : Router, private userv: AuthenticationService, private productService: ProductService) { }


  productList: Product[] = [];
  cartItemList: CartItem[] = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((actionArray) => {
      this.productList = actionArray;
    });

    console.log(this.productList);

    for (let index = 0; index < this.productList.length; index++) {
      this.cartItemList[index].product = this.productList[index];
      this.cartItemList[index].size = "XL";
      this.cartItemList[index].quantity = 1;
    }

    console.log(this.userv.cartContent);
  }

  getCartItems() {
    return this.userv.cartContent;
  }

  addCartItem(item: CartItem) {
    this.userv.cartContent.push(item);
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
