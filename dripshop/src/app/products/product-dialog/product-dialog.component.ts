import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartComponent } from "src/app/cart/cart.component";
import { CartItem } from "src/app/shared/cart-item.module";
import { Product } from "src/app/shared/models/product.model";
import { ProductSize } from "../enums/product-size.enum";



@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.scss"],
  providers: [CartComponent],
})
export class ProductDialogComponent {
  sumbit(i: Product) {
    let ci = new CartItem;
    ci.product = i;
    ci.quantity = 1;
    ci.size = "XL";
    this.cartc.addCartItem(ci);
  }
  readonly productSize = ProductSize;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    public cartc: CartComponent
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatPrice(price: number) {
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")
  }
}
