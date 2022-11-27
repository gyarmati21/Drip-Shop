import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct{
     id: string;
     category: string;
     drip: number;
     imageURL: string;
     name: string;
     price: number;

    
    /**
     * EZ EGY KONSTRUKTOR
     */
    constructor(iProduct: IProduct) {
        this.id = iProduct.id;
        this.category = iProduct.category;
        this.drip = iProduct.drip;
        this.imageURL = iProduct.imageURL;
        this.name = iProduct.name;
        this.price = iProduct.price;
        
    }
}

