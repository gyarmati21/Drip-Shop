import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { MatCheckbox, MatCheckboxChange } from "@angular/material/checkbox";
import { _countGroupLabelsBeforeOption } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, NavigationEnd, NavigationStart, Route, Router } from "@angular/router";
import { skip, tap } from "rxjs";
import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/product.service";
import { ProductDialogComponent } from "./product-dialog/product-dialog.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  productList: Product[] = [];
  categories: String[] = [];
  selectedCategories: String[] = [];

  @ViewChildren('categoryBox') categoryBoxes: QueryList<MatCheckbox>;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(navEvent => this.navEventHandler(navEvent));
    this.productService.getCategories().subscribe((category) => this.categories.push(category));
    this.productService.getProducts().subscribe((actionArray) => this.productList = actionArray);
  }

  navEventHandler(navEvent: any) {
    if (navEvent instanceof NavigationEnd) {
      const routedCategory = this.route.snapshot.paramMap.get('category');
      if (routedCategory) this.filterByCategory(routedCategory);
    }
  }

  filterByCategory(category: String) {    
    this.setCategoryCheckboxByValues([category]);
    this.selectedCategories = [category];
    this.filter();
  }
  
  filterByCheckBoxValues() {
    this.selectedCategories = this.categoryBoxes.filter(box => box.checked).map(box => box.value);
    this.filter();
  }

  setCategoryCheckboxByValues(values: String[]) {
    this.categoryBoxes.forEach(box => box.checked = (values.includes(box.value)) ? true : false);
  }

  filter() {
    this.productList = [];
    this.selectedCategories.forEach(category => {
      this.productService.getProductsByCategory(category).subscribe(product => this.productList.push(product));
    })
  }



  openProductDialog(product: Product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product,
    });
  }


}
