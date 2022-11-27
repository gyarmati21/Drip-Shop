import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/product.model';
import { NgForm } from "@angular/forms";
import { ProductService } from '../product.service';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit { 

  lista: Product[];

  prodList: Product[];
  id : string = " ";
  category: string = " ";
  drip : number = 0; 
  imageURL : string = " ";
  name : string = " ";
  price : number = 0;

  formData : Product;

  constructor(public service: ProductService,private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getProducts;
    this.resetForm();
    this.service.getProducts().subscribe(actionArray =>{
      this.lista = actionArray.map(i =>{
        const data = i as Product
        return {
          id: i.id,
          category: data.category,
          drip: data.drip,
          imageURL: data.imageURL,
          name: data.name,
          price: data.price
        } as unknown  as Product;
      })
    });
  }

  createProduct(data: Product) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("product")
        .add(data)
        .then(res => {resolve(res)}, err => reject(err))
    });
  }

  getProducts(order: string, direction: "asc" | "desc"){
    return this.firestore.collection("product", ref => ref.orderBy(order, direction).limit(63)).snapshotChanges();
  }

  updateProduct(data: Product){
    let productId = data.id;

    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("product")
        .doc(productId)
        .update(data)
        .then(res => {resolve(res)}, err => {reject(err)});
    });
  }

  deleteProduct(data: Product){
    return new Promise<any>((resolve,reject) => {
      this.firestore.collection("product")
        .doc(data.id).delete()
        .then(res => {resolve(res)}, err => {reject(err)});
    });
  }

  resetForm(form?: NgForm){
    if(form != null){
      this.resetForm();
    }

    this.service.formData = {
      id: "" ,
      category: "",
      drip: 0,
      imageURL: "",
      name: "",
      price: 0
    };
    form?.form.markAsUntouched();
    form?.form.markAsPristine();
  }

  onSubmit(form: NgForm){
    let data = form.value;
    form.form.markAsUntouched();
    console.log(data);
    if(form.value.id !== ""){
      this.updateProduct(data)
      .then(()=> {
        this.resetForm();
      });
    }else{
      this.createProduct(data)
      .then(()=>{
        form.form.markAsUntouched();
        this.resetForm();
      }); 
    }
  }

  onEdit(i: Product){
    this.service.formData = Object.assign({},i);
    const element = document.querySelector('mat-sidenav-content') || window;
    element.scroll(0,0);
  }

  onDelete(i: Product){
    if(confirm("Are you really want to delete?")){
      this.service.deleteProduct(i);
    }
  }

}
