import { Component, OnInit } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { _countGroupLabelsBeforeOption } from "@angular/material/core";
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
  productList: Product[] = [];
  categories: String[] = [];
  selectedCategories: String[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((actionArray) => {
      this.productList = actionArray;
    });
    this.productService.getCategories().subscribe((category) => {
      this.categories.push(category);
    });
  }

  openProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
    });
  }

  filter() {
    this.productList = [];
    this.selectedCategories.forEach(category => {
      return this.productService.getProductsByCategory(category)
        .subscribe(product => this.productList.push(product));
    });
  }

  changeCategorySelectedState(event: MatCheckboxChange) {
    if (event.checked == true) {
      this.selectedCategories.push(event.source.value)
    }
    else {
      const index = this.selectedCategories.indexOf(event.source.value, 0);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }

}
