import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((actionArray) => {
      this.productList = actionArray;
    });
  }
}
