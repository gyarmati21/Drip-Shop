import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct{
    readonly id: string;
    readonly category: string;
    readonly drip: number;
    readonly imageURL: string;
    readonly name: string;
    readonly price: number;
    
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

