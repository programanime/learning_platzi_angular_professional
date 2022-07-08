import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../core/services/products/products.service"
import { Product } from "./../../../product.model"
import { CartService } from "../../../core/services/cart/cart.service"
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

    products:Observable<Product[]>;
    total:Observable<number>;
    
    constructor(private cartService:CartService){
        this.total = this.cartService.cart$.pipe(map(products => products.length));
        this.products=this.cartService.cart$;
    }
        
    

  ngOnInit(): void {
  }

}
