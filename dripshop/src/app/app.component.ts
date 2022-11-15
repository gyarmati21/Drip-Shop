import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

// Product
import { ProductService } from "./shared/product.service";
import { IProduct } from './shared/interfaces/product.interface';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dripshop';

  productList : IProduct[]; // Products from table

  constructor(private service : ProductService,
    public authService: AuthenticationService,
    private router: Router){  }
/*
  // Initializing method
  ngOnInit() : void{
    this.service.getProducts().subscribe(actionArray => {
      this.productList = actionArray.map(i => {
        const data = i.payload.doc.data() as Product
        return {
          id : i.payload.doc.id,
          category : data.category,
          drip : data.drip,
          imageURL : data.imageURL,
          name : data.name,
          price : data.price
        }
      })
    })
  }
*/
}
