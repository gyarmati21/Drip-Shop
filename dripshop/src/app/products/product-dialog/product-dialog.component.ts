import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartComponent } from "src/app/cart/cart.component";
import { Product } from "src/app/shared/models/product.model";
import { ProductSize } from "../enums/product-size.enum";



@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.scss"],
})
export class ProductDialogComponent {
  readonly productSize = ProductSize;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatPrice(price: number) {
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")
  }
}
