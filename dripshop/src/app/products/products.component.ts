import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/product.service";
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList: Product[];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((actionArray) => {
      this.productList = actionArray;
    });
  }

  openProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      panelClass: 'dialogClass',
      data: product,
    });
  }
}
