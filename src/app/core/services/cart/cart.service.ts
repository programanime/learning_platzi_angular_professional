import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Product } from "./../../../product.model"
import { environment } from "../../../../environments/environment"
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private products: Product[] = [];
    private cart = new BehaviorSubject<Product[]>([]);
    cart$ = this.cart.asObservable();
    
    constructor() { }
    
    addCart(product:Product){
        this.products = [...this.products, product];
        this.cart.next(this.products);
    }
}