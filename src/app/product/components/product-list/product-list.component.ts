import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../core/services/products/products.service"
import { Product } from "./../../../product.model"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products = []
    displayedColumns: string[] = ['id','title', 'price', 'description', "actions"];

    constructor(
        private productsService:ProductsService
    ) { 
        
    }

    ngOnInit(): void {
      this.fetchProducts();
    }
    
    fetchProducts(){
        this.productsService.getAllProducts()
        .subscribe((products)=>{
            this.products=products;
        });
    }
    
    async editProduct(product, index){
        alert(index);
        //await this.productsService.updateProduct(product.id, product).toPromise();
    }
    
    async deleteProduct(product){
        await this.productsService.deleteProduct(product.id).toPromise();
    }
}
