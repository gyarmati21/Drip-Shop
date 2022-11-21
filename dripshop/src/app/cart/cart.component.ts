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

  testQuantitiy = 2;
  sizes = SizesObject;


  constructor(private router : Router, private userv: AuthenticationService, private productService: ProductService) { }


  productList: Product[];
  cartItemList: CartItem[] = [];
  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.productList = [];
    this.cartItemList = [];

    this.productService.getProducts().subscribe((actionArray) => {
      this.productList = actionArray;
      for (let index = 0; index < this.productList.length; index++) {
        this.cartItemList.push(new CartItem);
        this.cartItemList[index].product = this.productList[index];
        this.cartItemList[index].size = "XL";
        this.cartItemList[index].quantity = 1;

        this.addCartItem(this.cartItemList[index]);
      }
    });
  }

  getCartItems() {
    return this.userv.cartContent;
  }

  addCartItem(item: CartItem) {

    if (this.userv.cartContent.length > 0) {
      let isin = false;
      let inindex = 0;
      for (var i = 0; i < this.userv.cartContent.length; i++) {
        // console.log(this.userv.cartContent[i].product.name + " - " + item.product.name);
        if (this.userv.cartContent[i].product.name === item.product.name && this.userv.cartContent[i].size === item.size) {
          // console.log("Already in: " + item);
          isin = true;
          inindex = i;
        }
      }
      if (isin) {
        this.userv.cartContent[inindex].quantity++;
      }
      else {
        this.userv.cartContent.push(item);
      }
    }
    else {
      this.userv.cartContent.push(item);
    }
  }

  deleteCartItem(item: CartItem) {
    const temp = this.userv.cartContent.filter((obj: CartItem) => obj !== item);
    this.userv.cartContent = temp;
  }

  calculatePrice() {
    let sum = 0;
    this.userv.cartContent.forEach(item => {
      sum += (item.product.price * item.quantity);
    });

    return sum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
  }

  decreaseQunatitiy(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQunatitiy(item: CartItem) {
    item.quantity++;
  }


  // To be deleted
  decreaseQunatitiyTest() {
    if (this.testQuantitiy > 0) {
      this.testQuantitiy--;
    }
  }

  // To be deleted
  increaseQunatitiyTest() {
    this.testQuantitiy++;
  }

  onSubmit() {
    // uploading to database
    this.router.navigateByUrl("/order");
  }

}
