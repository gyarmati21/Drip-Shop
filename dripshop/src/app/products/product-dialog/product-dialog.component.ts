import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
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
    @Inject(MAT_DIALOG_DATA) public product: Product
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
