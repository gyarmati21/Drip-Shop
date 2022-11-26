import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MatCheckbox, MatCheckboxChange } from "@angular/material/checkbox";
import { _countGroupLabelsBeforeOption } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { skip } from "rxjs";
import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/product.service";
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent  {
  productList: Product[] = [];
  categories: String[] = [];
  selectedCategories: String[] = [];

  @ViewChildren ('categoryBox') categoryBoxes:QueryList<MatCheckbox>;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {}

  
  

  ngAfterViewInit() {
    this.productService.getCategories().subscribe((category) => {
      this.categories.push(category);
    });
    const routedCategory = this.route.snapshot.paramMap.get('category');
    if (routedCategory) {
      this.selectedCategories.push(routedCategory);
      this.categoryBoxes.forEach(box => (box.value === routedCategory) ? box.checked = true : skip)
      this.productService.getProductsByCategory(routedCategory).subscribe((product) => {
        this.productList.push(product);
      });
    } else {
      this.productService.getProducts().subscribe((actionArray) => {
        this.productList = actionArray;
      });
    }

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
    
    if (event.checked === true && this.selectedCategories.indexOf(event.source.value) === -1) {
      this.selectedCategories.push(event.source.value)
    }
    if (event.checked === false) {
      this.selectedCategories = this.selectedCategories.filter(category => category != event.source.value)
    }
    console.log(this.selectedCategories);
    
  }

}
