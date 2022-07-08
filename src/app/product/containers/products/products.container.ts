import { Component, OnInit } from '@angular/core';
import { Product } from "./../../../product.model"
import { ProductsService } from "../../../core/services/products/products.service"
import { CartService } from "../../../core/services/cart/cart.service"

@Component({
  selector: 'app-products-container',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {
    counter = 0;
  products=[]
    constructor(
      private productsService:ProductsService,
      private cartService:CartService
) { }

    async ngOnInit() {
      this.fetchProducts();
    }
    
    async addProductToCart(id:any){
        let product=await this.productsService.getProduct(id).toPromise();
        this.cartService.addCart(product);
    }
    
    async fetchProducts(){
        this.products=await this.productsService.getAllProducts().toPromise();
    }
    
    async createProduct(){
        /*const newProduct:Product={
            id:"22332",
            title: "nuevo desde angular",
            image:"assets/images/banner-1.jpg",
            price:3000,
            description:"nuevo producto"
        };
        
        await this.productsService.createProduct(newProduct).toPromise();*/
    }
}
